/* feeds/rss.js — Modular RSS 2.0 XML Generator */

function escapeXml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateRss(site, items) {
  const base = String(site.url || '').replace(/\/$/, '');
  const feedUrl = `${base}/feed.xml`;

  const itemXml = items.map(item => {
    const fullTitle = item.title + (item.subtitle ? ' — ' + item.subtitle : '');
    const categories = (item.tags || [])
      .map(tag => `      <category>${escapeXml(tag)}</category>`)
      .join('\n');

    return `    <item>
      <title>${escapeXml(fullTitle)}</title>
      <link>${escapeXml(item.url)}</link>
      <guid isPermaLink="true">${escapeXml(item.url)}</guid>
      <pubDate>${new Date(item.date + 'T12:00:00Z').toUTCString()}</pubDate>
${categories}
      <description>${escapeXml(item.summary || '')}</description>
      <content:encoded><![CDATA[${item.html}]]></content:encoded>
    </item>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(site.title || 'paperz')}</title>
    <link>${escapeXml(base)}</link>
    <description>${escapeXml(site.tagline || '')}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml"/>
${itemXml}
  </channel>
</rss>
`;
}

module.exports = { generateRss };
