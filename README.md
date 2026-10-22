# paperz

> **A static whitepaper archive of ideas born from human–AI collaboration.**  
> Zero build step, zero dependencies — pure static files served directly by GitHub Pages.

🌐 **Live Archive**: [https://halapenyoharry.github.io/paperz](https://halapenyoharry.github.io/paperz)  
📡 **RSS Feed**: [feed.xml](https://halapenyoharry.github.io/paperz/feed.xml)  
🤖 **Agent Instructions**: [AGENTS.md](AGENTS.md)

---

## Overview

`paperz` hosts dense, rigorous, conceptually durable whitepapers spanning topology, ethics, epistemology, cognitive systems, mathematics pedagogy, and human-machine thought. 

Every paper on this site is:
- **Rooted in Dialogue**: Originating from human thought experiments and structured through human-AI synthesis.
- **Formally Grounded**: Expressed via clear topological, relational, or systems models.
- **Transparently Attributed**: Each paper includes a distinct contribution statement (`**Human:**`, `**Machine:**`, `**Neither, exactly:**`).
- **Donated to the Commons**: Released openly without proprietary restrictions.

---

## Instructions for AI Agents & Droids

For AI agents and droids collaborating with humans on new whitepapers, comprehensive instructions, frontmatter schemas, style guidelines, and publishing steps are documented in:

👉 **[AGENTS.md](AGENTS.md)** — *Instructions for Agents: Authoring a Paper for Paperz*

---

## Adding a Paper

### 1. Write the Paper
Create `papers/your-paper-slug.md`. Frontmatter specification:

```yaml
---
title: Your Title
subtitle: The line under the title
version: 1.0
date: YYYY-MM-DD
audience: target audience or persona
license: donated to the commons
tags: [one, two, three]
links: ["[[another-paper]]"]
summary: One or two sentences. Shown on the index and in the RSS feed.
references: ["Author Year — Work Title"]
---
```

> **Note**: Frontmatter lists are split on commas; do not put unescaped commas inside list items — use an em dash (`—`).

### 2. Register in `papers.json`
Add an entry to the `papers` array in `papers.json` (newest first):

```json
{
  "slug": "your-paper-slug",
  "title": "Your Title",
  "subtitle": "The line under the title",
  "date": "YYYY-MM-DD",
  "version": "1.0",
  "tags": ["one", "two", "three"],
  "summary": "One or two sentences."
}
```

### 3. Rebuild the RSS Feed (Optional)
Run `node build-feed.js` to regenerate `feed.xml`.

---

## Wikilinks & Cross-References

Use `[[slug]]` in any paper's body to link to other papers. 
- If the slug is registered in `papers.json`, it renders as an active link.
- If the slug is not yet published, it renders dimmed and can be listed under `forthcoming` in `papers.json` to display on the index as planned.

---

## Local Preview

Because the client-side reader fetches `papers.json` and `papers/*.md` via `fetch()`, run a local static HTTP server:

```bash
python3 -m http.server 8000
```

Then visit:
```
http://localhost:8000/index.dc.html
```

---

## Repository Structure

- `index.dc.html` — Searchable, tag-filtered paper index.
- `paper.dc.html` — In-browser markdown reader (`paper.dc.html?p=slug`).
- `md.js` — Client-side markdown and frontmatter parser.
- `papers.json` — The central archive index (metadata, tags, forthcoming list).
- `papers/` — Markdown source files for all published whitepapers.
- `inbox/` — Staging area for paper drafts in development.
- `_ds/` — Nocturne design system stylesheets and design tokens.
- `support.js` — Shared client runtime for `.dc.html` views.
- `feed.xml` — Full-text RSS 2.0 feed.
- `build-feed.js` — RSS generator script.
- `AGENTS.md` — Guide and protocol for AI agents authoring papers.
- `index.html` — Redirect shim to `index.dc.html`.

---

## License

All papers in this archive are donated to the commons.
