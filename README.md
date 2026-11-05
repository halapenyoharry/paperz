# paperz

> **A static archive of deep-dive `zpapers` born from human–AI collaboration.**  
> Zero build step, zero dependencies — pure static files served directly by GitHub Pages.

🌐 **Live Archive**: [https://halapenyoharry.github.io/paperz](https://halapenyoharry.github.io/paperz)  
📡 **Feeds**: [RSS 2.0](https://halapenyoharry.github.io/paperz/feed.xml) · [Atom 1.0](https://halapenyoharry.github.io/paperz/atom.xml) · [JSON Feed 1.1](https://halapenyoharry.github.io/paperz/feed.json)  
🤖 **Agent & Droid Instructions**: [AGENTS-template.md](AGENTS-template.md)

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

👉 **[AGENTS-template.md](AGENTS-template.md)** — *Instructions for Agents: Authoring a zpaper for Paperz*

---

## Adding a `zpaper`

### 1. Write the Markdown File
Create `papers/<slug>.md` where `<slug>` is the **literal best two words** (`word-word` in kebab-case) that explain what the article is actually about (never a poetic metaphor), and include `slug` in the heavy frontmatter:

```yaml
---
type: zpaper
slug: two-words
title: Your Title
subtitle: The line under the title
version: 1.0
date: YYYY-MM-DD
audience: target audience or persona
license: CC0-1.0            # or CC-BY-4.0, CC-BY-SA-4.0, CC-BY-NC-4.0, all-rights-reserved
attribution: Your Name      # needed for CC-BY* and all-rights-reserved
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
  "slug": "two-words",
  "title": "Your Title",
  "subtitle": "The line under the title",
  "date": "YYYY-MM-DD",
  "version": "1.0",
  "tags": ["ethics", "topology", "cognitive-budget"],
  "summary": "One or two sentences."
}
```

### 3. Rebuild Multi-Format Feeds
Run `node build-feed.js` to update `feed.xml` (RSS 2.0), `atom.xml` (Atom 1.0), and `feed.json` (JSON Feed 1.1).

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

- `index.dc.html` — Searchable, tag-filtered zpaper index with feed links.
- `paper.dc.html` — In-browser markdown reader (`paper.dc.html?p=slug`).
- `md.js` — Client-side markdown and YAML frontmatter parser.
- `licenses.js` — License registry (identifier → name, link, meaning).
- `papers.json` — The central archive index (metadata, tags, forthcoming tracking).
- `papers/` — Markdown source files for all published zpapers.
- `inbox/` — Staging area for drafts in development.
- `feeds/` — Modular feed generators (`rss.js`, `atom.js`, `jsonfeed.js`).
- `feed.xml` — RSS 2.0 XML feed.
- `atom.xml` — Atom 1.0 XML feed.
- `feed.json` — JSON Feed 1.1 specification.
- `build-feed.js` — Multi-format feed generator orchestrator.
- `AGENTS-template.md` — Public guide and protocol for AI agents authoring zpapers.
- `index.html` — Redirect shim to `index.dc.html`.
- `_ds/` — Nocturne design system stylesheets and design tokens.
- `support.js` — Shared client runtime for `.dc.html` views.

---

## License

Each zpaper carries its own license in frontmatter, shown on the paper page and in all three feeds. Papers default to [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) (donated to the commons); authors may choose [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) or another option listed in [AGENTS-template.md](AGENTS-template.md#licensing).
