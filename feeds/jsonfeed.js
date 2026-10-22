/* feeds/jsonfeed.js — Modular JSON Feed 1.1 Generator */

function generateJsonFeed(site, items) {
  const base = String(site.url || '').replace(/\/$/, '');
  const feedUrl = `${base}/feed.json`;

  const feed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: site.title || 'paperz',
    home_page_url: base,
    feed_url: feedUrl,
    description: site.tagline || '',
    authors: [
      {
        name: site.author || 'paperz'
      }
    ],
    items: items.map(item => {
      const fullTitle = item.title + (item.subtitle ? ' — ' + item.subtitle : '');
      const isoDate = new Date(item.date + 'T12:00:00Z').toISOString();

      return {
        id: item.url,
        url: item.url,
        title: fullTitle,
        summary: item.summary || '',
        content_html: item.html,
        date_published: isoDate,
        tags: item.tags || []
      };
    })
  };

  return JSON.stringify(feed, null, 2) + '\n';
}

module.exports = { generateJsonFeed };
