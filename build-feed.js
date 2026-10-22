#!/usr/bin/env node
/* Regenerates feed.xml (RSS 2.0, full text) from papers.json + papers/*.md
   Usage: node build-feed.js                                  */
const fs = require('fs');
const path = require('path');
const { PZ } = require('./md.js');

const index = JSON.parse(fs.readFileSync('papers.json', 'utf8'));
const site = index.site || {};
const base = String(site.url || '').replace(/\/$/, '');
const published = (index.papers || []).map(p => p.slug);

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

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
  const url = `${base}/paper.dc.html?p=${p.slug}`;
  return `    <item>
      <title>${esc(p.title + (p.subtitle ? ' — ' + p.subtitle : ''))}</title>
      <link>${esc(url)}</link>
      <guid isPermaLink="true">${esc(url)}</guid>
      <pubDate>${new Date(p.date + 'T12:00:00Z').toUTCString()}</pubDate>
${(p.tags || []).map(t => `      <category>${esc(t)}</category>`).join('\n')}
      <description>${esc(p.summary || '')}</description>
      <content:encoded><![CDATA[${rendered.html}]]></content:encoded>
    </item>`;
}).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(site.title || 'paperz')}</title>
    <link>${esc(base)}</link>
    <description>${esc(site.tagline || '')}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${esc(base)}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;

fs.writeFileSync('feed.xml', xml);
console.log('feed.xml — ' + (index.papers || []).length + ' item(s)');
