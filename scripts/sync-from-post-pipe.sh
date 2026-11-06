#!/usr/bin/env bash
# scripts/sync-from-post-pipe.sh
# Rebuilds paperz and commits/pushes on main whenever post-pipe's main branch updates.
set -euo pipefail

PAPERZ_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
POSTPIPE_ROOT="${POSTPIPE_ENGINE:-$HOME/Projects/post-pipe}"
FORCE="${1:-}"

if [ ! -d "$POSTPIPE_ROOT/.git" ]; then
  exit 0
fi

PP_BRANCH="$(git -C "$POSTPIPE_ROOT" rev-parse --abbrev-ref HEAD 2>/dev/null || echo "")"
if [ "$PP_BRANCH" != "main" ]; then
  echo "[paperz-sync] post-pipe is on branch '$PP_BRANCH' (not main); skipping auto-rebuild."
  exit 0
fi

PZ_BRANCH="$(git -C "$PAPERZ_ROOT" rev-parse --abbrev-ref HEAD 2>/dev/null || echo "")"
if [ "$PZ_BRANCH" != "main" ]; then
  echo "[paperz-sync] paperz is on branch '$PZ_BRANCH' (not main); skipping auto-rebuild."
  exit 0
fi

PP_SHA="$(git -C "$POSTPIPE_ROOT" rev-parse --short HEAD)"
CURRENT_ENGINE_SHA="$(node -e "try { const f = require('$PAPERZ_ROOT/feed.json'); console.log((f._postpipe && f._postpipe.engine_commit) || ''); } catch { console.log(''); }")"

if [ "$FORCE" != "--force" ] && [ "$CURRENT_ENGINE_SHA" = "$PP_SHA" ]; then
  echo "[paperz-sync] paperz is already built with post-pipe main ($PP_SHA); nothing to do."
  exit 0
fi

echo "[paperz-sync] Rebuilding paperz against post-pipe main ($PP_SHA)..."
POSTPIPE_ENGINE="$POSTPIPE_ROOT" node "$PAPERZ_ROOT/scripts/build.js"

cd "$PAPERZ_ROOT"
git add -- index.html feed.json feed.xml atom.xml cards.json rtagz-ids.json skos.jsonld skos.ttl favicon.svg fonts/
for f in "$PAPERZ_ROOT"/*.html; do
  base="$(basename "$f")"
  case "$base" in
    *.dc.html) ;;
    *) git add -- "$base" ;;
  esac
done

if ! git diff --cached --quiet; then
  git commit -m "chore(engine): rebuild site with post-pipe main ($PP_SHA)"
  git push origin main
  echo "[paperz-sync] Committed and pushed paperz update for post-pipe $PP_SHA."
else
  echo "[paperz-sync] paperz build output already up to date with post-pipe $PP_SHA."
fi
