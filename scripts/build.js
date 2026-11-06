#!/usr/bin/env node
// scripts/build.js — builds paperz with post-pipe into _site/ and mirrors the
// built static site + multi-format feeds (feed.json, feed.xml, atom.xml) to the
// repository root so GitHub Pages serves the website directly from main.

'use strict';

const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const crypto = require('crypto');

function expandHome(p) {
  if (!p) return p;
  if (p.startsWith('~')) {
    return path.resolve(path.join(process.env.HOME || '', p.slice(1)));
  }
  return path.resolve(p);
}

const SITE_ROOT = path.resolve(__dirname, '..');
const ENGINE = expandHome(process.env.POSTPIPE_ENGINE || '~/Projects/post-pipe');

const { PZ } = require(path.join(SITE_ROOT, 'md.js'));
const { PZL } = require(path.join(SITE_ROOT, 'licenses.js'));
const { generateRss } = require(path.join(SITE_ROOT, 'feeds', 'rss.js'));
const { generateAtom } = require(path.join(SITE_ROOT, 'feeds', 'atom.js'));
const { topicSlugs, topicSlugOn, topicSlugOptions } = require(path.join(ENGINE, 'src', 'lib', 'topicSlug.js'));

const SETTINGS_PATH = path.join(SITE_ROOT, 'settings.json');
const SETTINGS = JSON.parse(fs.readFileSync(SETTINGS_PATH, 'utf8'));
const PAPERS_PATH = path.join(SITE_ROOT, 'papers.json');
const INDEX = JSON.parse(fs.readFileSync(PAPERS_PATH, 'utf8'));

const BASE_URL = String(SETTINGS.site?.base_url || INDEX.site?.url || 'https://halapenyoharry.github.io/paperz').replace(/\/+$/, '');
const PUBLISHED_SLUGS = new Set((INDEX.papers || []).map((p) => p.slug));
const FORTHCOMING_BY_SLUG = new Map((INDEX.forthcoming || []).map((f) => [f.slug, f]));

const BUILD_DIR = path.join(SITE_ROOT, '_build');
const BUILD_CONTENT_DIR = path.join(BUILD_DIR, 'content');
fs.rmSync(BUILD_CONTENT_DIR, { recursive: true, force: true });
fs.mkdirSync(BUILD_CONTENT_DIR, { recursive: true });

function countWords(str) {
  if (!str) return 0;
  const stripped = String(str)
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<[^>]+>/g, ' ');
  const m = stripped.match(/\S+/g);
  return m ? m.length : 0;
}

function getCommits(relPath) {
  try {
    const out = cp.execFileSync('git', ['log', '--format=%cI%x09%s', '--follow', '--', relPath], {
      cwd: SITE_ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    });
    return out.split('\n').filter(Boolean).reverse().map((line) => {
      const tab = line.indexOf('\t');
      return { date: line.slice(0, tab), message: line.slice(tab + 1) };
    });
  } catch {
    return [];
  }
}

function getEngineHead() {
  try {
    return cp.execFileSync('git', ['rev-parse', '--short', 'HEAD'], {
      cwd: ENGINE,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return 'unknown';
  }
}

function escapeHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// CSS custom properties bridging paperz's Nocturne tokens (used by inline SVGs
// and PZ.render) with post-pipe's dark and light reader modes.
const PZ_TOKENS_STYLE = `<style data-pz-tokens>
:root, [data-reader-text] {
  --color-bg: var(--rp-bg, #161826);
  --color-surface: var(--rp-surface, #232532);
  --color-text: var(--rp-text-bright, #e9e9ed);
  --color-accent: var(--rp-accent, #9184d9);
  --color-accent-2: #a7a1db;
  --color-divider: color-mix(in srgb, var(--color-text) 16%, transparent);
  --color-neutral-100: #f3f5fe;
  --color-neutral-200: #e4e7f5;
  --color-neutral-300: #cfd3e5;
  --color-neutral-400: var(--rp-text, #b2b6ca);
  --color-neutral-500: #9397ab;
  --color-neutral-600: #75798c;
  --color-neutral-700: #595d6c;
  --color-neutral-800: #3f424d;
  --color-neutral-900: #292b31;
  --color-accent-100: #f5f4ff;
  --color-accent-200: #e7e5fe;
  --color-accent-300: #d2cefd;
  --color-accent-400: #b5abfc;
  --color-accent-500: #968ae0;
  --color-accent-600: #796cbf;
  --color-accent-700: #5d5294;
  --color-accent-800: #423a6a;
  --color-accent-900: #2b2741;
  --color-accent-2-100: #f5f4ff;
  --color-accent-2-200: #e7e5fe;
  --color-accent-2-300: #d2cefd;
  --color-accent-2-400: #b5afe8;
  --color-accent-2-500: #9690c9;
  --color-accent-2-600: #7972a9;
  --color-accent-2-700: #5c5783;
  --color-accent-2-800: #423e5d;
  --color-accent-2-900: #2b293a;
  --font-heading: inherit;
  --font-body: inherit;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 14px;
}
html[data-pp-reader-mode="light"] [data-reader-text] {
  --color-bg: var(--rp-bg, #f6f3ec);
  --color-surface: color-mix(in srgb, var(--rp-text, #1f1e1b) 7%, var(--rp-bg, #f6f3ec));
  --color-text: var(--rp-text-bright, #181715);
  --color-accent: var(--rp-accent, #5d5294);
  --color-accent-2: #5c5783;
  --color-divider: color-mix(in srgb, var(--color-text) 18%, transparent);
  --color-neutral-100: #181715;
  --color-neutral-200: #292b31;
  --color-neutral-300: #3f424d;
  --color-neutral-400: var(--rp-text, #3f424d);
  --color-neutral-500: #595d6c;
  --color-neutral-600: #75798c;
  --color-neutral-700: #9397ab;
  --color-neutral-800: #cfd3e5;
  --color-neutral-900: #e4e7f5;
  --color-accent-100: #2b2741;
  --color-accent-200: #423a6a;
  --color-accent-300: #4e4385;
  --color-accent-400: #5d5294;
  --color-accent-500: #796cbf;
  --color-accent-600: #968ae0;
  --color-accent-700: #b5abfc;
  --color-accent-800: #d2cefd;
  --color-accent-900: #e7e5fe;
}
[data-reader-text] svg {
  max-width: 100%;
  height: auto;
}
[data-reader-text] .table {
  width: 100%;
  border-collapse: collapse;
}
[data-reader-text] .table th,
[data-reader-text] .table td {
  border-bottom: 1px solid var(--color-divider);
}
[data-reader-text] .hr {
  border: 0;
  border-top: 1px solid var(--color-divider);
}
</style>`;

const renderedBySlug = new Map();
const feedItemsForXml = [];

for (let idx = 0; idx < (INDEX.papers || []).length; idx++) {
  const p = INDEX.papers[idx];
  const relMdPath = path.join('papers', `${p.slug}.md`);
  const fullMdPath = path.join(SITE_ROOT, relMdPath);
  const src = fs.readFileSync(fullMdPath, 'utf8');
  const parsed = PZ.parseFrontmatter(src);
  const meta = parsed.meta || {};

  let body = parsed.body;
  const rule = body.indexOf('\n---\n');
  if (/^\s*#\s/.test(body) && rule > -1 && rule < 400) {
    body = body.slice(rule + 5);
  }

  const words = countWords(body);
  const readingTime = `${Math.max(1, Math.round(words / 220))} min read`;
  const licenseObj = PZL.resolve(meta.license, meta.attribution);
  const commits = getCommits(relMdPath);
  const versionHash = crypto.createHash('sha1').update(body).digest('hex').slice(0, 12);

  const connectedTo = Array.isArray(meta.links)
    ? meta.links
        .map((s) => String(s).replace(/^\[\[|\]\]$/g, '').trim())
        .filter((s) => s && PUBLISHED_SLUGS.has(s))
    : [];

  const topology = Array.isArray(meta.lineage)
    ? meta.lineage.map((s) => String(s).trim()).filter(Boolean)
    : [];

  const references = Array.isArray(meta.references)
    ? meta.references
        .map((r) => String(r).trim())
        .filter(Boolean)
        .map((r) => ({ type: 'citation', value: r, label: r }))
    : [];

  const rendered = PZ.render(body, {
    wikilink: (s) => {
      const clean = String(s).replace(/^\[\[|\]\]$/g, '').trim();
      const hit = (INDEX.papers || []).find((x) => x.slug === clean);
      if (hit) {
        const targetId = `${BASE_URL}/${clean}.html`;
        return `<a href="#read=${encodeURIComponent(targetId)}" style="color:var(--color-accent-300);text-decoration:none;border-bottom:1px solid color-mix(in srgb, var(--color-accent) 45%, transparent)">${escapeHtml(hit.title.toLowerCase())}</a>`;
      }
      const fc = FORTHCOMING_BY_SLUG.get(clean);
      const label = fc ? fc.title.toLowerCase() : clean.replace(/-/g, ' ');
      return `<span title="forthcoming" style="color:var(--color-neutral-400);border-bottom:1px dotted var(--color-neutral-600)">${escapeHtml(label)}</span>`;
    },
  });

  const subtitleHtml = p.subtitle
    ? `<div class="pz-subtitle" style="font-size:clamp(17px,2vw,20px);line-height:1.4;font-style:italic;color:var(--color-neutral-400);margin:0 0 14px">${escapeHtml(p.subtitle)}</div>`
    : '';
  const metaBarHtml = `<div class="pz-meta" style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;font-size:12px;color:var(--color-neutral-500);margin:0 0 28px;padding-bottom:18px;border-bottom:1px solid var(--color-divider)">` +
    `<span>v${escapeHtml(p.version || meta.version || '1.0')}</span>` +
    `<span>·</span>` +
    `<a href="${escapeHtml(licenseObj.url)}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(licenseObj.meaning)}" style="color:var(--color-neutral-400);text-decoration:none">${escapeHtml(licenseObj.line)}</a>` +
    `<span style="margin-left:auto"><a href="./paper.dc.html?p=${encodeURIComponent(p.slug)}" style="color:var(--color-neutral-500);text-decoration:none" title="Open in classic two-column archive reader">classic view ↗</a></span>` +
    `</div>`;

  const fullReaderHtml = `${PZ_TOKENS_STYLE}\n${subtitleHtml}\n${metaBarHtml}\n${rendered.html}`;

  renderedBySlug.set(p.slug, {
    paper: p,
    meta,
    licenseObj,
    readingTime,
    words,
    renderedHtml: rendered.html,
    fullReaderHtml,
  });

  // Write _build/content/<slug>/index.md and frontmatter.json for post-pipe
  const itemDir = path.join(BUILD_CONTENT_DIR, p.slug);
  fs.mkdirSync(itemDir, { recursive: true });
  fs.writeFileSync(path.join(itemDir, 'index.md'), body, 'utf8');

  const fm = {
    title: p.title,
    short_title: p.title,
    subtitle: p.subtitle || '',
    series: 'paperz',
    series_part: (INDEX.papers.length - idx),
    idea: {
      tldr: p.summary || meta.summary || '',
      seed: p.subtitle || '',
      topology,
      substrate: 'essay',
    },
    meta: {
      author: meta.attribution || SETTINGS.author?.display || 'paperz',
      status: 'published',
      written: p.date || meta.date || null,
      reading_time: readingTime,
      license: licenseObj.line,
    },
    tags: p.tags || meta.tags || [],
    references,
    connected_to: connectedTo,
    commits,
    version: versionHash,
    posted: true,
  };
  fs.writeFileSync(path.join(itemDir, 'frontmatter.json'), JSON.stringify(fm, null, 2) + '\n', 'utf8');

  feedItemsForXml.push({
    slug: p.slug,
    title: p.title,
    subtitle: p.subtitle,
    date: p.date,
    version: p.version,
    tags: p.tags,
    summary: p.summary,
    url: `${BASE_URL}/${p.slug}.html`,
    license: licenseObj,
    html: rendered.html,
  });
}

// Run post-pipe generate-index.js
const generateIndexPath = path.join(ENGINE, 'generate-index.js');
console.log(`[build] Running post-pipe (${ENGINE}) for paperz...`);
cp.execFileSync(process.execPath, [generateIndexPath], {
  cwd: ENGINE,
  env: {
    ...process.env,
    POSTPIPE_SITE: SITE_ROOT,
  },
  stdio: 'inherit',
});

const SITE_OUT_DIR = path.join(SITE_ROOT, '_site');

// Replace each _site/<slug>.html with the rich Nocturne-rendered paper page
// so both ReaderPanel and direct visits render inline SVGs, tables, and wikilinks.
for (const [slug, info] of renderedBySlug.entries()) {
  const outHtmlPath = path.join(SITE_OUT_DIR, `${slug}.html`);
  const doc = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(info.paper.title)} — paperz</title>
<meta name="description" content="${escapeHtml(info.paper.summary || info.paper.subtitle || '')}">
<link rel="canonical" href="${BASE_URL}/${escapeHtml(slug)}.html">
</head>
<body style="background:var(--color-bg,#161826);color:var(--color-text,#e9e9ed);font-family:system-ui,-apple-system,sans-serif;max-width:72ch;margin:0 auto;padding:32px 20px">
<h1>${escapeHtml(info.paper.title)}</h1>
${info.fullReaderHtml}
</body>
</html>
`;
  fs.writeFileSync(outHtmlPath, doc, 'utf8');
}

// Enrich _site/feed.json with subtitle, paper version, content_html, and
// recompute topicSlug over the full enriched items so feed.json and
// tools/topic-slugs.js agree identically.
const feedJsonPath = path.join(SITE_OUT_DIR, 'feed.json');
const feed = JSON.parse(fs.readFileSync(feedJsonPath, 'utf8'));

for (const item of feed.items || []) {
  const slug = item.slug || String(item.url || '').split('/').pop().replace(/\.html$/, '');
  const info = renderedBySlug.get(slug);
  if (!info) continue;
  if (info.paper.subtitle) item.subtitle = info.paper.subtitle;
  if (info.paper.version) item.paper_version = info.paper.version;
  item.content_html = info.renderedHtml;
}

if (topicSlugOn(SETTINGS)) {
  const topicOptions = topicSlugOptions(SETTINGS);
  const topics = topicSlugs(feed.items || [], topicOptions);
  (feed.items || []).forEach((item, i) => {
    item.topicSlug = topics[i].slug;
  });
}

feed._postpipe = {
  engine_commit: getEngineHead(),
  built_at: new Date().toISOString(),
};

fs.writeFileSync(feedJsonPath, JSON.stringify(feed, null, 2) + '\n', 'utf8');

// Mirror _site/ artifacts to the repository root so GitHub Pages serves the
// post-pipe site directly from / on main.
for (const entry of fs.readdirSync(SITE_OUT_DIR, { withFileTypes: true })) {
  const srcPath = path.join(SITE_OUT_DIR, entry.name);
  const dstPath = path.join(SITE_ROOT, entry.name);
  if (entry.isDirectory()) {
    fs.rmSync(dstPath, { recursive: true, force: true });
    fs.cpSync(srcPath, dstPath, { recursive: true });
  } else {
    fs.copyFileSync(srcPath, dstPath);
  }
}

// Regenerate RSS 2.0 (feed.xml) and Atom 1.0 (atom.xml) at the root
const siteMeta = INDEX.site || {
  title: 'paperz',
  tagline: 'whitepapers on ideas generated with AI',
  url: BASE_URL,
  author: 'paperz',
};
fs.writeFileSync(path.join(SITE_ROOT, 'feed.xml'), generateRss(siteMeta, feedItemsForXml), 'utf8');
fs.writeFileSync(path.join(SITE_ROOT, 'atom.xml'), generateAtom(siteMeta, feedItemsForXml), 'utf8');

console.log(`[build] Mirrored _site/ to root and updated feed.json, feed.xml, and atom.xml (${feedItemsForXml.length} papers, post-pipe @ ${feed._postpipe.engine_commit}).`);
