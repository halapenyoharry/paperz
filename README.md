# paperz

> **A static archive of deep-dive `zpapers` born from human–AI collaboration.**  
> Zero build step, zero dependencies — pure static files served directly by GitHub Pages.

🌐 **Live Archive**: [https://halapenyoharry.github.io/paperz](https://halapenyoharry.github.io/paperz)  
📡 **RSS Feed**: [feed.xml](https://halapenyoharry.github.io/paperz/feed.xml)  
🤖 **Agent & Droid Instructions**: [AGENTS.md](AGENTS.md)

---

## What is a `zpaper`?

In `paperz`, an individual whitepaper is termed a **`zpaper`**. 

Where generic blog posts and conversational AI summaries produce flat, two-dimensional prose ($x, y$), a **`zpaper`** operates on the $z$-axis: adding structural depth, topological grounding, cognitive feedback loops, and explicit intellectual lineage.

Every `zpaper` in this archive is:
- **Rooted in Dialogue**: Sparked by authentic human thought experiments and catalyzed through human-machine collaborative synthesis.
- **Topologically Grounded**: Expressed via clear structural formalisms—graphs, vector spaces, topological saddle landscapes, and invariant transformations.
- **Dossier of Primary Sources**: Frontloaded with an elegant, curated abstract of its foundational texts and intellectual lineage.
- **MLA Cited via Author-Preferred Sources**: In-text citations and Works Cited link directly to the author's preferred commercial source, university press, or open-access repository—strictly bypassing monopolistic platforms (no Amazon).
- **Heavy Frontmatter**: Tagged with rich conceptual domains, methodologies, lineages, and relational wikilinks (`[[slug]]`).
- **Transparently Attributed**: Concludes with a canonical three-column contribution statement (`**Human:**`, `**Machine:**`, `**Neither, exactly:**`).
- **Donated to the Commons**: Released openly without proprietary friction.

---

## Instructions for AI Agents & Droids

For AI agents and droids collaborating on new whitepapers, the full technical protocol, heavy frontmatter schemas, MLA guidelines, and publishing steps are codified in:

👉 **[AGENTS.md](AGENTS.md)** — *Instructions for Agents: Authoring a zpaper for Paperz*

---

## Adding a `zpaper`

### 1. Write the Markdown File
Create `papers/your-paper-slug.md` with heavy frontmatter:

```yaml
---
type: zpaper
title: Your Title
subtitle: The line under the title
version: 1.0
date: YYYY-MM-DD
audience: target audience or persona
license: donated to the commons
tags: [ethics, topology, cognitive-budget, systems]
lineage: [marxian-political-economy, hebbian-neuroscience]
links: ["[[another-paper]]"]
summary: One or two sentences. Shown on the index and in the RSS feed.
references: [
  "Author, First. Title of the Book. Publisher, Year."
]
---
```

### 2. Register in `papers.json`
Add an entry to the `papers` array in `papers.json` (newest first):

```json
{
  "slug": "your-paper-slug",
  "title": "Your Title",
  "subtitle": "The line under the title",
  "date": "YYYY-MM-DD",
  "version": "1.0",
  "tags": ["ethics", "topology", "cognitive-budget"],
  "summary": "One or two sentences."
}
```

### 3. Rebuild the RSS Feed
Run `node build-feed.js` to update `feed.xml`.

---

## Wikilinks & Cross-References

Use `[[slug]]` in any zpaper's body to link to other papers across the archive. 
- If the slug is published in `papers.json`, it renders as an active link.
- If the slug is forthcoming or planned, it renders dimmed and can be listed under `forthcoming` in `papers.json`.

---

## Local Preview

Because the client-side reader fetches `papers.json` and `papers/*.md` asynchronously via `fetch()`, run a local static HTTP server:

```bash
python3 -m http.server 8000
```

Then visit:
```
http://localhost:8000/index.dc.html
```

---

## Repository Structure

- `index.dc.html` — Searchable, tag-filtered zpaper index.
- `paper.dc.html` — In-browser markdown reader (`paper.dc.html?p=slug`).
- `md.js` — Client-side markdown and YAML frontmatter parser.
- `papers.json` — The central archive index (metadata, tags, forthcoming tracking).
- `papers/` — Markdown source files for all published zpapers.
- `inbox/` — Staging area for drafts in development.
- `_ds/` — Nocturne design system stylesheets and design tokens.
- `support.js` — Shared client runtime for `.dc.html` views.
- `feed.xml` — Full-text RSS 2.0 feed.
- `build-feed.js` — RSS generator script.
- `AGENTS.md` — Guide and protocol for AI agents authoring zpapers.
- `index.html` — Redirect shim to `index.dc.html`.

---

## License

All zpapers in this archive are donated to the commons.
