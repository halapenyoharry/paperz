#!/usr/bin/env node
/* Regenerates multi-format feeds (RSS 2.0, Atom 1.0, JSON Feed 1.1) from papers.json + papers/*.md
   Usage: node build-feed.js                                                              */
const fs = require('fs');
const path = require('path');
const { PZ } = require('./md.js');
const { generateRss } = require('./feeds/rss.js');
const { generateAtom } = require('./feeds/atom.js');
const { generateJsonFeed } = require('./feeds/jsonfeed.js');

const index = JSON.parse(fs.readFileSync('papers.json', 'utf8'));
const site = index.site || {};
const base = String(site.url || '').replace(/\/$/, '');
const published = (index.papers || []).map(p => p.slug);

const items = (index.papers || []).map(p => {
  const src = fs.readFileSync(path.join('papers', p.slug + '.md'), 'utf8');
  const parsed = PZ.parseFrontmatter(src);
  let body = parsed.body;
  const rule = body.indexOf('\n---\n');
  if (/^\s*#\s/.test(body) && rule > -1 && rule < 400) body = body.slice(rule + 5);
  const rendered = PZ.render(body, {
    wikilink: s => {
      const clean = s.replace(/^\[\[|\]\]$/g, '');
      const label = clean.replace(/-/g, ' ');
      return published.indexOf(clean) > -1
        ? `<a href="${base}/paper.dc.html?p=${clean}">${label}</a>`
        : label;
    }
  });

  return {
    slug: p.slug,
    title: p.title,
    subtitle: p.subtitle,
    date: p.date,
    version: p.version,
    tags: p.tags,
    summary: p.summary,
    url: `${base}/paper.dc.html?p=${p.slug}`,
    html: rendered.html
  };
});

// Generate and write each feed format
const rssXml = generateRss(site, items);
fs.writeFileSync('feed.xml', rssXml);

const atomXml = generateAtom(site, items);
fs.writeFileSync('atom.xml', atomXml);

const jsonFeed = generateJsonFeed(site, items);
fs.writeFileSync('feed.json', jsonFeed);

console.log(`Generated feeds for ${items.length} item(s):`);
console.log(' - feed.xml  (RSS 2.0)');
console.log(' - atom.xml  (Atom 1.0)');
console.log(' - feed.json (JSON Feed 1.1)');
