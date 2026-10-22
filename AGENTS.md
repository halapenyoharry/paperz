# Instructions for Agents: Authoring a zpaper for Paperz

`paperz` is a curated repository of deep-dive whitepapers exploring ideas born from human-machine collaboration. It is not a blog, a news aggregator, or a dump for generic LLM summaries. It is a home for dense, rigorous, conceptually durable models across topology, epistemology, cognitive systems, ethics, mathematics, and philosophy.

Within the `paperz` archive, an individual paper is termed a **`zpaper`** — representing a multidimensional, topological exploration (the $z$-axis of depth and relational geometry) rather than a flat, two-dimensional summary.

When drafting or adding a `zpaper` to this archive, follow this exact protocol.

---

## 1. Ethos and Prose Craft

- **Durable, Not Ephemeral**: Write zpapers that remain legible and compelling decades from now. Avoid ephemeral tech jargon, hype cycles, or corporate buzzwords.
- **Formalism and Grounding**: Ground abstract concepts in clear models—graphs, topological landscapes, feedback loops, conservation laws, or invariant transformations.
- **Spare, High-Density Language**: Be clear and lucid. Every sentence should earn its keep. Do not pad sections with filler or throat-clearing.
- **Honest Scoping**: State assumptions and limitations plainly. Acknowledge what the model simplifies or contracts.

---

## 2. Citation Standards: MLA & Author-Preferred Sourcing

All zpapers adhere strictly to **MLA (Modern Language Association) citation style**, governed by two essential rules:

1. **Inline Citations**:
   - Use parenthetical citations in standard MLA format: `([Author Page](url))` or `(Author Page)`.
   - Always embed a direct hyperlink in the citation to the referenced text or its source whenever possible.
2. **Author-Preferred Commercial Sources (Avoid Amazon)**:
   - When referencing published books or commercial monographs, **never link to Amazon**.
   - Link directly to the **author's preferred commercial source**:
     - The author's personal or academic website
     - The official publisher or University Press catalog page ("Buy this book")
     - An independent book collective (e.g., Bookshop.org) or non-commercial open-access digital archive (e.g., Marxists Internet Archive, PhilArchive, Cambridge Core Open).
3. **Works Cited Section**:
   - Every zpaper concludes with a formal `## Works Cited` section formatted according to MLA guidelines. Each entry must link the title or publisher to the author-preferred source.
4. **Citation Integrity (non-negotiable)**:
   - **Never invent page numbers, issue numbers, editions, or URLs.** A made-up citation is worse than none.
   - **Open every link before publishing** and confirm it loads the cited work (not a 404, a homepage, or a different book).
   - If you cannot verify a page number, cite the work without one: `([Wu](url))`. For classics, cite a structural locator you have confirmed instead, e.g. `([Marx ch. 1, sec. 4](url))`.
   - If a detail cannot be verified, leave it out, and flag it to the human rather than guessing.

> **Frontmatter lists**: use one-line arrays (`tags: [a, b, c]`) or dash lists (one `- item` per line, as in `references` below). Wrap items containing commas in double quotes.

---

## 3. Document Anatomy

Every zpaper is a single markdown file located in `papers/<slug>.md` (kebab-case slug). It must adhere to the following structure:

### Heavy Frontmatter

Zpapers utilize **heavy frontmatter** to preserve deep taxonomic metadata, intellectual lineages, and relational graphs:

```yaml
---
type: zpaper
title: The contracted edge — convenience as graph contraction, and attention as the moral budget
version: 1.1
date: YYYY-MM-DD
audience: anyone who has ever bought something instead of making it — which is everyone
license: donated to the commons
tags: [ethics, graph-theory, attention, supply-chains, comfort, human-ai-collaboration, commodity-fetishism, political-economy, cognitive-budget, systems-topology]
lineage: [marxian-political-economy, hebbian-neuroscience, attention-economics, behavioral-bargaining]
links: ["[[the-smoke-loop]]", "[[topothink]]"]
summary: Buying is an edge that is secretly a graph. Convenience is the industry that contracts graphs into edges so you never render the people inside them...
references:
  - "Marx, Karl. Capital: A Critique of Political Economy, Volume 1. Translated by Samuel Moore and Edward Aveling, 1887."
  - "Wu, Tim. The Attention Merchants: The Epic Scramble to Get Inside Our Heads. Alfred A. Knopf, 2016."
  - "Schelling, Thomas C. 'The Intimate Contest for Self-Command.' The Public Interest, Summer 1980."
---
```

### Document Body Sequence

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

3. **The Introduction (Setting the Stage)**:
   Provide a concise, plain-language introduction to the zpaper. Set the stage, establish the core tension or inquiry, and outline the central thesis in accessible terms before grounding the work in academic lineage:
   ```markdown
   ## Introduction

   Every time you buy something instead of making it, you substitute a single smooth transaction for an immense web of human effort. The comfort economy calls this the removal of "friction" — but friction is not an empty nuisance; friction is the visible presence of other people's labor...

   ---
   ```

4. **Primary Sources & Intellectual Lineage (Source Abstract Dossier)**:
   Immediately following the simple introduction, provide a structured dossier abstracting the root works that form the basis for the paper's ideas, opinions, evidence, or models:
   ```markdown
   ## Primary sources & lineage

   Before entering the formal model, this zpaper grounds its formalism in [N] primary texts across [domains]. Each supplies a foundational premise:

   - **Author, First.** [*Title of Work*](preferred-url) (Year; Publisher / Press).  
     *Core premise*: Concise, high-density abstract of the original work's thesis.  
     *Role in this zpaper*: Concrete statement of how this zpaper translates, formalizes, builds upon, or critiques this premise.
   ```

5. **Numbered Conceptual Sections**:
   Develop the core thesis through crisp, numbered sections (e.g., `## 1. Two graphs, one joint`, `## 2. Friction is the expanded graph`).
   - Bold core definitions and theorems (`**Friction is the expanded graph.**`).
   - Embed inline MLA citations linking to author-preferred sources, using only locators you have verified: `([Marx ch. 1, sec. 4](https://...))` or `([Wu](https://...))`.
   - Where visual structure aids comprehension, inline clean SVG diagrams styled with Nocturne CSS variables (e.g. `var(--color-accent-300)`, `var(--color-surface)`).

6. **Wikilinks**:
   Cross-reference other zpapers in the archive using `[[slug]]` notation. Active links resolve dynamically against `papers.json`.

7. **The Short Version**:
   Include an unsparing, punchy one-paragraph distillation before the references:
   ```markdown
   ## 5. The short version

   Buying is an edge that is secretly a graph. Convenience is the industry that contracts graphs...
   ```

8. **Works Cited (MLA)**:
   A formal, alphabetized MLA bibliographic list linking to author-preferred sources:
   ```markdown
   ---

   ## Works Cited

   - Hebb, Donald O. [*The Organization of Behavior: A Neuropsychological Theory*](url). John Wiley & Sons, 1949. *Routledge / Psychology Press*.
   - Marx, Karl. [*Capital: A Critique of Political Economy, Volume 1*](url). Translated by Samuel Moore and Edward Aveling, Progress Publishers, 1887.
   ```

9. **Contribution Statement & Commons License**:
   Every zpaper concludes with the canonical three-part attribution block:
   ```markdown
   ---

   ## Contribution

   **Human:** The core question, lived experience, intuition, direction, and domain knowledge.

   **Machine:** Formalization, structural mapping, drafting, naming the patterns, and synthesizing connections.

   **Neither, exactly:** The emergent dynamics of the session—the way the loop between human and machine produced insights neither started with, or reflexive self-demonstrations of the paper's thesis during its drafting.

   *Donated to the commons.*
   ```

---

## 4. Step-by-Step Publishing Protocol

To publish a `zpaper` to `paperz`, complete all of the following steps:

### Step 1: Write the Markdown File
Create `papers/<slug>.md` following the anatomy and citation rules above.

### Step 2: Register in `papers.json`
Open `papers.json` and prepend the new zpaper object to the beginning of the `"papers"` array (newest first):

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

- If this zpaper was previously listed in `"forthcoming"`, remove it from that array.
- If this zpaper references new, forthcoming zpapers, add them to `"forthcoming"` with a brief `"note"` explaining which zpapers reference them.

### Step 3: Rebuild Multi-Format Feeds
Run the modular feed generator to update `feed.xml` (RSS 2.0), `atom.xml` (Atom 1.0), and `feed.json` (JSON Feed 1.1):
```bash
node build-feed.js
```
Verify that the output reports that all three feed formats were generated.

### Step 4: Preview Locally
Verify rendering and links in a local server:
```bash
python3 -m http.server 8000
```
Open `http://localhost:8000/index.dc.html` and check:
- The zpaper appears in the index with correct tags, date, and summary.
- The reader page (`paper.dc.html?p=your-paper-slug`) renders headers, introduction, source dossier, lists, SVGs, MLA links, and wikilinks properly.

### Step 5: Commit and Deploy
Commit all modified files (`papers/<slug>.md`, `papers.json`, `feed.xml`, `atom.xml`, `feed.json`) and push to `main`. GitHub Pages serves the changes automatically.
