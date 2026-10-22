/* feeds/atom.js — Modular Atom 1.0 XML Generator */

function escapeXml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateAtom(site, items) {
  const base = String(site.url || '').replace(/\/$/, '');
  const feedUrl = `${base}/atom.xml`;
  const latestDate = items.length > 0 && items[0].date
    ? new Date(items[0].date + 'T12:00:00Z').toISOString()
    : new Date().toISOString();

  const entries = items.map(item => {
    const fullTitle = item.title + (item.subtitle ? ' — ' + item.subtitle : '');
    const isoDate = new Date(item.date + 'T12:00:00Z').toISOString();
    const categories = (item.tags || [])
      .map(tag => `    <category term="${escapeXml(tag)}"/>`)
      .join('\n');

    return `  <entry>
    <title>${escapeXml(fullTitle)}</title>
    <link href="${escapeXml(item.url)}" rel="alternate"/>
    <id>${escapeXml(item.url)}</id>
    <updated>${isoDate}</updated>
    <published>${isoDate}</published>
    <author>
      <name>${escapeXml(site.author || 'paperz')}</name>
    </author>
${categories}
    <summary>${escapeXml(item.summary || '')}</summary>
    <content type="html"><![CDATA[${item.html}]]></content>
  </entry>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(site.title || 'paperz')}</title>
  <subtitle>${escapeXml(site.tagline || '')}</subtitle>
  <link href="${escapeXml(base)}" rel="alternate"/>
  <link href="${escapeXml(feedUrl)}" rel="self" type="application/atom+xml"/>
  <id>${escapeXml(base)}/</id>
  <updated>${latestDate}</updated>
${entries}
</feed>
`;
}

module.exports = { generateAtom };
