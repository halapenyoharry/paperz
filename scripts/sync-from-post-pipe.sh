#!/usr/bin/env bash
# scripts/sync-from-post-pipe.sh
# Rebuilds paperz and commits/pushes on main whenever post-pipe's main branch updates.
#
# Run on Harold's Mac by post-pipe's git hooks (post-commit, post-merge,
# post-rewrite). GitHub's Action (.github/workflows/sync-post-pipe.yml) also
# builds and pushes paperz: daily, by hand, and when paperz content is pushed.
# Both are kept (Harold, 2026-11-09). They collided on 2026-11-08, so this script:
#   1. reads the engine of the committed build (HEAD:feed.json), not the file on
#      disk, so a run that built but could not commit does not make later runs skip;
#   2. brings paperz's main level with GitHub before building (fast-forward only);
#   3. if GitHub moves while it builds and the push is refused, keeps its own
#      build on a branch paperz-sync-unpushed-<sha>, matches GitHub, and builds
#      once more if GitHub's build is from another post-pipe commit;
#   4. pushes only its own rebuild commits: when paperz main holds a commit a
#      person made that GitHub lacks, it builds and commits but leaves the push
#      to that person.
# post-pipe's hooks call it only for a commit in post-pipe's own folder on main.
# Pass --force to rebuild even when the committed build is from post-pipe's HEAD.
set -euo pipefail

# A git hook passes down the calling repository's GIT_DIR and GIT_INDEX_FILE.
# Every git call below names its repository with -C, so drop them.
unset GIT_DIR GIT_WORK_TREE GIT_INDEX_FILE GIT_PREFIX GIT_COMMON_DIR

PAPERZ_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
POSTPIPE_ROOT="${POSTPIPE_ENGINE:-$HOME/Projects/post-pipe}"
FORCE="${1:-}"

pz() { git -C "$PAPERZ_ROOT" "$@"; }
say() { echo "[paperz-sync] $*"; }

if [ ! -d "$POSTPIPE_ROOT/.git" ]; then
  exit 0
fi

PP_BRANCH="$(git -C "$POSTPIPE_ROOT" rev-parse --abbrev-ref HEAD 2>/dev/null || echo "")"
if [ "$PP_BRANCH" != "main" ]; then
  say "post-pipe is on branch '$PP_BRANCH' (not main); skipping auto-rebuild."
  exit 0
fi

PZ_BRANCH="$(pz rev-parse --abbrev-ref HEAD 2>/dev/null || echo "")"
if [ "$PZ_BRANCH" != "main" ]; then
  say "paperz is on branch '$PZ_BRANCH' (not main); skipping auto-rebuild."
  exit 0
fi

PP_SHA="$(git -C "$POSTPIPE_ROOT" rev-parse --short HEAD)"

# The post-pipe commit the committed build was made with.
committed_engine() {
  pz show HEAD:feed.json 2>/dev/null | node -e '
    let s = ""; process.stdin.on("data", (d) => { s += d; }).on("end", () => {
      try { const f = JSON.parse(s); console.log((f._postpipe && f._postpipe.engine_commit) || ""); }
      catch { console.log(""); }
    });'
}

# Commits on paperz main here that GitHub (as last fetched) does not have.
unpushed() { pz rev-list --count origin/main..HEAD 2>/dev/null || echo 0; }

# Of those, the ones this script did not make (its own are its rebuild commits).
# This script pushes only its own: a commit a person made goes to GitHub when a
# person pushes it (2026-11-09: an earlier version pushed two such commits).
BUILD_SUBJECT="chore(engine): rebuild site with post-pipe main ("
not_ours() {
  pz log --format=%s origin/main..HEAD 2>/dev/null | grep -cvF "$BUILD_SUBJECT" || true
}

# Fetch GitHub's main and fast-forward to it. Stops the run if both sides have
# moved, or if the fast-forward is refused (uncommitted changes in the way).
level_with_github() {
  if ! pz fetch -q origin main; then
    say "could not reach GitHub; building on paperz as it is here."
    return 0
  fi
  local behind ahead
  behind="$(pz rev-list --count HEAD..origin/main)"
  ahead="$(unpushed)"
  if [ "$behind" -gt 0 ] && [ "$ahead" -gt 0 ]; then
    say "paperz main has $ahead commit(s) GitHub lacks and GitHub has $behind this Mac lacks; skipping. Reconcile paperz by hand."
    exit 0
  fi
  if [ "$behind" -gt 0 ] && ! pz merge -q --ff-only origin/main; then
    say "could not fast-forward paperz to GitHub (uncommitted changes in the way?); skipping."
    exit 0
  fi
}

# Build with post-pipe's HEAD and commit the output. Returns 1 when the build
# changed nothing or a step failed. Each step is checked here by hand: bash
# turns `set -e` off inside a function called as `build_and_commit || ...`.
build_and_commit() {
  say "Rebuilding paperz against post-pipe main ($PP_SHA)..."
  if ! POSTPIPE_ENGINE="$POSTPIPE_ROOT" node "$PAPERZ_ROOT/scripts/build.js"; then
    say "the build failed; nothing committed."
    return 1
  fi
  if ! (
    cd "$PAPERZ_ROOT" || exit 1
    git add -- index.html feed.json feed.xml atom.xml cards.json rtagz-ids.json skos.jsonld skos.ttl favicon.svg fonts/ || exit 1
    for f in "$PAPERZ_ROOT"/*.html; do
      base="$(basename "$f")"
      case "$base" in
        *.dc.html) ;;
        *) git add -- "$base" || exit 1 ;;
      esac
    done
  ); then
    say "could not stage the build (is paperz's git index locked?); nothing committed. The next run builds again."
    return 1
  fi
  if pz diff --cached --quiet; then
    say "paperz build output already up to date with post-pipe $PP_SHA."
    return 1
  fi
  if ! pz commit -q -m "chore(engine): rebuild site with post-pipe main ($PP_SHA)"; then
    say "could not commit the build (is paperz's git index locked?); it is staged, and the next run builds again."
    return 1
  fi
  say "Committed paperz rebuild for post-pipe $PP_SHA."
}

# Push main. If GitHub refuses because it moved, and the only commit GitHub
# lacks is this run's build, keep that build on a branch and match GitHub
# (returns 2). Returns 1 when GitHub cannot be reached or the state needs a
# person.
push_or_set_aside() {
  local others
  others="$(not_ours)"
  if [ "$others" -gt 0 ]; then
    say "not pushed: paperz main has $others commit(s) GitHub lacks that this script did not make. Whoever made them pushes them, and the rebuild goes with them."
    return 1
  fi
  if pz push -q origin main; then
    say "Pushed paperz main for post-pipe $PP_SHA."
    return 0
  fi
  if ! pz fetch -q origin main; then
    say "could not reach GitHub; the commit stays on paperz main here and the next run pushes it."
    return 1
  fi
  if [ "$(unpushed)" -ne 1 ]; then
    say "GitHub refused the push and paperz main has other unpushed commits; leaving it for a person to reconcile."
    return 1
  fi
  local aside
  aside="paperz-sync-unpushed-$(pz rev-parse --short HEAD)"
  pz branch -f "$aside" HEAD
  pz reset -q --keep origin/main
  say "GitHub's paperz moved during the build; this build is kept on branch $aside and main now matches GitHub."
  return 2
}

# Nothing new from post-pipe: push anything an earlier run left unpushed, then stop.
if [ "$FORCE" != "--force" ] && [ "$(committed_engine)" = "$PP_SHA" ]; then
  if [ "$(unpushed)" -gt 0 ]; then
    push_or_set_aside || true
  else
    say "paperz is already built with post-pipe main ($PP_SHA); nothing to do."
  fi
  exit 0
fi

level_with_github

# GitHub's Action may already have built this post-pipe commit.
if [ "$FORCE" != "--force" ] && [ "$(committed_engine)" = "$PP_SHA" ]; then
  say "GitHub's paperz is already built with post-pipe main ($PP_SHA); nothing to do."
  exit 0
fi

for attempt in 1 2; do
  build_and_commit || exit 0
  rc=0
  push_or_set_aside || rc=$?
  if [ "$rc" -ne 2 ]; then
    exit 0
  fi
  if [ "$(committed_engine)" = "$PP_SHA" ]; then
    say "GitHub's paperz is already built with post-pipe main ($PP_SHA); nothing more to do."
    exit 0
  fi
  if [ "$attempt" -eq 1 ]; then
    say "building once more on GitHub's paperz."
  fi
done
