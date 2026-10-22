# Instructions for Agents: Authoring a Paper for Paperz

`paperz` is a curated repository of deep-dive whitepapers exploring ideas born from human-machine collaboration. It is not a blog, a news aggregator, or a dump for generic LLM summaries. It is a home for dense, rigorous, conceptually durable models across topology, epistemology, cognitive systems, ethics, mathematics, and philosophy.

When drafting or adding a paper to this archive, follow this exact protocol.

---

## 1. Ethos and Prose Craft

- **Durable, Not Ephemeral**: Write papers that remain legible and compelling decades from now. Avoid ephemeral tech jargon, hype cycles, or corporate buzzwords.
- **Formalism and Grounding**: Ground abstract concepts in clear models—graphs, topological landscapes, feedback loops, conservation laws, or invariant transformations.
- **Spare, High-Density Language**: Be clear and lucid. Every sentence should earn its keep. Do not pad sections with filler or throat-clearing.
- **Honest Scoping**: State assumptions and limitations plainly. Acknowledge what the model simplifies or contracts.

---

## 2. Document Anatomy

Every paper is a single markdown file located in `papers/<slug>.md` (kebab-case slug). It must adhere to the following structure:

### Frontmatter

```yaml
---
title: The Contracted Edge
subtitle: Convenience as graph contraction, and attention as the moral budget
version: 1.0
date: YYYY-MM-DD
audience: anyone who has ever bought something instead of making it
license: donated to the commons
tags: [ethics, graph-theory, attention, supply-chains, comfort, human-ai-collaboration]
links: ["[[the-smoke-loop]]", "[[topothink]]"]
summary: Buying is an edge that is secretly a graph. Convenience contracts graphs into edges so you never render the people inside them...
references: ["Marx 1867 — Capital vol. 1", "Wu 2016 — The Attention Merchants"]
---
```

> **Note on YAML parsing**: Frontmatter lists are parsed simply. Avoid unescaped commas inside list items; use em dashes (`—`) or quotes where needed.

### Document Body

1. **Title & Subtitle**:
   ```markdown
   # The contracted edge

   ## Convenience as graph contraction, and attention as the moral budget

   ---
   ```
2. **The Inception Blockquote**:
   Open with the verbatim human thought experiment, conversational spark, or core question that triggered the paper, followed by a brief italicized context line:
   ```markdown
   > I imagine the system of smoking weed. I grow it — the sun, water, the whole thing...

   *A thought experiment run in smoke, one evening in October. This paper is its expansion.*

   ---
   ```
3. **Numbered Conceptual Sections**:
   Develop the argument through crisp, numbered sections (e.g., `## 1. Two graphs, one joint`, `## 2. Friction is the expanded graph`).
   - Bold core definitions and theorems (`**Friction is the expanded graph.**`).
   - Where visual structure aids comprehension, inline clean SVG diagrams styled with Nocturne CSS variables (e.g. `var(--color-accent-300)`, `var(--color-surface)`).
4. **Wikilinks**:
   Cross-reference other papers in the archive using `[[slug]]` notation.
   - If the paper exists in `papers.json`, it renders as an active link.
   - If it is planned/unwritten, it renders dimmed and can be tracked in the `forthcoming` section of `papers.json`.
5. **The Short Version**:
   Before the contribution statement, include an unsparing, punchy one-paragraph distillation:
   ```markdown
   ## 5. The short version

   Buying is an edge that is secretly a graph. Convenience is the industry that contracts graphs so you never render the people inside them...
   ```
6. **Contribution Statement & Commons License**:
   Every paper concludes with a transparent attribution block:
   ```markdown
   ---

   ## Contribution

   **Human:** The core question, lived experience, intuition, direction, and domain knowledge.

   **Machine:** Formalization, structural mapping, drafting, naming the patterns, and synthesizing connections.

   **Neither, exactly:** The emergent dynamics of the session—the way the loop between human and machine produced insights neither started with, or reflexive self-demonstrations of the paper's thesis during its drafting.

   *Donated to the commons.*
   ```

---

## 3. Step-by-Step Publishing Protocol

To publish a paper to `paperz`, complete all of the following steps:

### Step 1: Write the Markdown File
Create `papers/<slug>.md` following the anatomy described above.

### Step 2: Register in `papers.json`
Open `papers.json` and prepend the new paper object to the beginning of the `"papers"` array (newest papers first):

```json
{
  "slug": "your-paper-slug",
  "title": "Your Title",
  "subtitle": "Your Subtitle",
  "date": "YYYY-MM-DD",
  "version": "1.0",
  "tags": [
    "tag-one",
    "tag-two"
  ],
  "summary": "One or two sentences summarizing the core thesis."
}
```

- If this paper was previously listed in `"forthcoming"`, remove it from that array.
- If this paper references new, forthcoming whitepapers, add them to `"forthcoming"` with a brief `"note"` explaining which papers reference them.

### Step 3: Rebuild the RSS Feed
Run the feed generator to update `feed.xml`:
```bash
node build-feed.js
```
Verify that the output reports the correct number of items.

### Step 4: Preview Locally
Verify rendering and links in a local server:
```bash
python3 -m http.server 8000
```
Open `http://localhost:8000/index.dc.html` and check:
- The paper appears in the index with correct tags, date, and summary.
- The reader page (`paper.dc.html?p=your-paper-slug`) renders headers, lists, SVGs, and wikilinks properly.

### Step 5: Commit and Deploy
Commit all modified files (`papers/<slug>.md`, `papers.json`, `feed.xml`) and push to `main`. GitHub Pages serves the changes automatically.
