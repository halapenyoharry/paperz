---
type: zpaper
title: "The joint cognitive system: ecological interface design, its four failure modes, and an operating protocol for agentic coding"
version: 1.0
date: 2026-10-31
audience: system architects, human-AI pair programmers, and anyone who has watched a coding agent break their spatial memory with a well-intentioned UI refactor
license: CC0-1.0
tags: [cognitive-systems-engineering, ecological-interface-design, joint-cognitive-systems, agentic-coding, human-ai-collaboration, epistemic-actions, systems-topology, provenance, interface-architecture]
lineage: [ecological-psychology, cognitive-work-analysis, resilience-engineering, embodied-cognition, topothink]
links: ["[[the-twenty-watt-watch]]", "[[the-contracted-edge]]", "[[the-smoke-loop]]", "[[topothink]]"]
summary: "Ecological Interface Design (EID) did not vanish; it evolved into Cognitive Systems Engineering to solve the four failure modes of 1992 constraint displays: training overhead, intentional versus causal rules, missing sequential flow, and the automation blind spot. When applied to software built with autonomous coding agents, the true unit of design is a triadic Joint Cognitive System uniting the human nervous system, the ecological interface, and the coding agent, governed by explicit rules that convert abstract agent questions into manipulable epistemic controls."
references:
  - "Bennett, Kevin B., and John M. Flach. Display and Interface Design: Subtle Science, Exact Art. CRC Press, 2011."
  - "Burns, Catherine M., and John R. Hajdukiewicz. Ecological Interface Design. CRC Press, 2004."
  - "Dourish, Paul. Where the Action Is: The Foundations of Embodied Interaction. MIT Press, 2001."
  - "Hollnagel, Erik, and David D. Woods. Joint Cognitive Systems: Foundations of Cognitive Systems Engineering. CRC Press, 2005."
  - "Kirsh, David. 'Thinking with external representations.' AI & Society, vol. 25, no. 4, 2010, pp. 441-454."
  - "Vicente, Kim J. Cognitive Work Analysis: Toward Safe, Productive, and Healthy Computer-Based Work. Lawrence Erlbaum Associates, 1999."
  - "Vicente, Kim J., and Jens Rasmussen. 'Ecological Interface Design: Theoretical Foundations.' IEEE Transactions on Systems, Man, and Cybernetics, vol. 22, no. 4, 1992, pp. 589-606."
---

# The joint cognitive system

## Ecological interface design, its four failure modes, and an operating protocol for agentic coding

---

> let's write another paper about EID, use this to start, but you can expand, write it with the idea of using agents or even agent instructions to utilize this method in agentic coding. joint system, this is what I'm always talking about, we have to see the human cognition system as well. you could see some of that in post-pipe if you want examples, as we struggle to achieve this throughout the development period.

*An architectural directive issued on a Saturday afternoon, connecting thirty years of Cognitive Systems Engineering to the live commit history of a graph-based publishing engine. This paper is that synthesis.*

---

## Introduction

Most software interfaces are designed as if the screen were a wall between two independent machines: a code execution engine on the inside, and a generic "user" on the outside. When autonomous coding agents enter the workflow, this separation becomes doubly destructive. Left to its own training priors, a coding agent optimizes for surface-level visual tidiness, hides structural state behind modal prompts, and silently invents display heuristics that sever the human architect's spatial and semantic grip on the system.

Over the past three decades, **Ecological Interface Design (EID)** and its parent discipline, **Cognitive Systems Engineering (CSE)**, proved why this separation fails. The human mind and the external representation do not operate in isolation; they form a single **Joint Cognitive System** whose performance depends on how faithfully the interface externalizes the underlying domain's invariants onto a perceptible geometry. In an era of agentic software development, that joint system expands from a dyad into a triad uniting the **human cognitive architecture** (with its fixed twenty-watt metabolic budget and specific perceptual traits such as aphantasia), the **ecological software interface**, and the **coding agent**. By tracing the evolution of EID through its four classical failure modes and examining how those exact failure modes were encountered and solved during the development of the `post-pipe` topology engine, this zpaper derives a concrete operating protocol for instructing coding agents to build for the joint system.

---

## Primary sources & lineage

Before entering the formal model, this zpaper grounds its formalism in seven foundational texts across ecological psychology, work domain analysis, resilience engineering, and embodied cognition. Each supplies a load-bearing premise:

- **Vicente, Kim J., and Jens Rasmussen.** ["Ecological Interface Design: Theoretical Foundations."](https://doi.org/10.1109/21.156574) (*IEEE Transactions on Systems, Man, and Cybernetics*, vol. 22, no. 4, 1992, pp. 589–606).  
  *Core premise*: Interfaces for complex systems should make invisible domain constraints and conservation laws directly perceptible as visual geometry, allowing operators to handle unanticipated faults using low-cost perceptual-motor skills rather than exhausting analytical reasoning.  
  *Role in this zpaper*: Establishes the baseline principle of externalizing domain invariants into visible topology rather than forcing the human to compute state inside working memory.

- **Vicente, Kim J.** [*Cognitive Work Analysis: Toward Safe, Productive, and Healthy Computer-Based Work*](https://www.routledge.com/Cognitive-Work-Analysis-Toward-Safe-Productive-and-Healthy-Computer-Based-Work/Vicente/p/book/9780805823974) (1999; Lawrence Erlbaum Associates / Routledge).  
  *Core premise*: Ecological interface design is only the perceptual surface of a five-stage analytical methodology beginning with Work Domain Analysis and the **Abstraction Hierarchy**, which maps a system from its functional purpose and conservation laws down to its physical components.  
  *Role in this zpaper*: Provides the structural template for separating domain invariants (such as `post-pipe`'s eight-layer decomposition) from transient rendering decisions.

- **Burns, Catherine M., and John R. Hajdukiewicz.** [*Ecological Interface Design*](https://www.routledge.com/Ecological-Interface-Design/Burns-Hajdukiewicz/p/book/9780415283748) (2004; CRC Press / Routledge).  
  *Core premise*: Synthesizes fifteen years of empirical EID deployments across process control, aviation, medicine, and network management, identifying where dense configural displays overload uninitiated operators or fail in purely intentional domains.  
  *Role in this zpaper*: Grounds Section 2's critique of the visual complexity paradox and the boundary between causal physics and intentional software rules.

- **Hollnagel, Erik, and David D. Woods.** [*Joint Cognitive Systems: Foundations of Cognitive Systems Engineering*](https://www.routledge.com/Joint-Cognitive-Systems-Foundations-of-Cognitive-Systems-Engineering/Hollnagel-Woods/p/book/9780849328213) (2005; CRC Press / Routledge).  
  *Core premise*: Human and machine must be analyzed as a single integrated **Joint Cognitive System**; as automation increases, the central engineering problem shifts from manual plant control to making the automation's internal model, boundaries, and provenance observable and directable.  
  *Role in this zpaper*: Supplies the central theoretical spine for treating the human architect, the live software, and the coding droid as one coupled cognitive loop.

- **Bennett, Kevin B., and John M. Flach.** [*Display and Interface Design: Subtle Science, Exact Art*](https://www.routledge.com/Display-and-Interface-Design-Subtle-Science-Exact-Art/Bennett-Flach/p/book/9781420064384) (2011; CRC Press / Routledge).  
  *Core premise*: Effective configural displays preserve simultaneous access to **local data elements** (individual identities and metrics) and **global emergent features** (symmetry, cluster density, boundary proximity) across the abstraction-decomposition space.  
  *Role in this zpaper*: Explains mathematically why agent-invented "semantic zoom" heuristics that collapse labeled cards into anonymous dots destroy configural perception.

- **Dourish, Paul.** [*Where the Action Is: The Foundations of Embodied Interaction*](https://www.dourish.com/embodied/) (2001; MIT Press).  
  *Core premise*: Meaning and coupling in interactive systems are not passively read off static representations, but actively constructed through embodied, situated manipulation in real time.  
  *Role in this zpaper*: Connects ecological perception to interactive manipulation, where constraints are felt by how a structure pushes back when moved.

- **Kirsh, David.** ["Thinking with external representations."](https://link.springer.com/article/10.1007/s00146-010-0272-8) (*AI & Society*, vol. 25, no. 4, 2010, pp. 441–454; Springer Nature Link).  
  *Core premise*: Humans externalize structure in order to perform **epistemic actions**, physical manipulations of an external artifact that rearrange information so the eye and hand can solve problems that would otherwise overwhelm internal working memory.  
  *Role in this zpaper*: Provides the theoretical proof for the agent coding rule **"Options, not questions"**, turning open design parameters into live sliders and switches rather than conversational guesswork.

---

## 1. Beyond screen layout: the abstraction hierarchy and the biological half of the loop

Ecological Interface Design was never a style guide for arranging widgets on a monitor. When Kim Vicente and Jens Rasmussen introduced the framework in 1992, and when Vicente expanded it into **Cognitive Work Analysis (CWA)** in 1999, their starting point was an indictment of task-based interface design ([Vicente and Rasmussen](https://doi.org/10.1109/21.156574); [Vicente](https://www.routledge.com/Cognitive-Work-Analysis-Toward-Safe-Productive-and-Healthy-Computer-Based-Work/Vicente/p/book/9780805823974)). An interface designed around a fixed checklist of user tasks works only while the world obeys the script. The moment an unanticipated fault or novel combination of inputs occurs, the script breaks, forcing the human operator out of fast perceptual-motor fluency and into slow, high-effort analytical deduction.

To prevent that cognitive cliff, EID begins by constructing an **Abstraction Hierarchy (AH)** of the work domain itself, independent of any screen or user workflow. The system is mapped across five structural levels:
1. **Functional Purpose**: Why the system exists and what value or invariant it must preserve.
2. **Abstract Function (Conservation Laws)**: The unbreakable accounting rules of mass, energy, probability, or provenance governing the domain.
3. **Generalized Functions**: The flows, transformations, and feedback loops that move state through the system.
4. **Physical Functions**: The capabilities of the individual modules, adapters, and engines.
5. **Physical Form**: The concrete files, sockets, DOM nodes, or hardware surfaces where those modules live.

Because this hierarchy models constraint boundaries rather than pixels, EID has been applied far beyond desktop software, shaping surgical theater layouts, haptic flight-envelope sticks whose physical resistance stiffens as an aircraft nears a stall boundary, network topology monitors, and distributed command architectures.

Yet an Abstraction Hierarchy of the software alone leaves half the circuit unmapped. As Erik Hollnagel and David Woods argued in their formulation of **Joint Cognitive Systems**, the human nervous system is not an external consumer of the interface; it is the other half of the computational loop ([Hollnagel and Woods](https://www.routledge.com/Joint-Cognitive-Systems-Foundations-of-Cognitive-Systems-Engineering/Hollnagel-Woods/p/book/9780849328213)). And the human half has hard physical specifications of its own:
- **A fixed twenty-watt metabolic ceiling**: As established in [[the-twenty-watt-watch]], the human brain cannot scale up its total power draw to brute-force poorly staged information. Every watt spent mentally reconstructing hidden state, holding unrendered relationships in working memory, or hunting for a vanished label is a watt stolen from creative synthesis.
- **Perceptual and representational diversity (such as aphantasia)**: Many conventional interfaces assume the user possesses an internal visual movie theater capable of holding a mental map after the screen hides it. For a mind with aphantasia, or a mind managing ADHD context transitions, **the screen is the visual cortex**. When an interface collapses a structure or hides an edge to look "minimalist," the relationship does not remain available in mental imagery; it ceases to exist in the active workspace until re-queried.

Designing for the Joint Cognitive System therefore means treating the interface as a **prosthetic topological canvas** whose job is to keep the domain's Abstraction Hierarchy continuously visible and manipulable at near-zero metabolic cost to the human brain.

---

## 2. Where 1992 EID breaks down: the four classical failure modes

Over thirty years of empirical testing, cognitive engineers identified four specific failure modes where the original 1992 EID formulation breaks down if applied naively. Understanding these four limits is essential before handing EID to a coding agent:

1. **The Visual Complexity and Training Paradox**: Classic EID displays, such as the DURESS thermal-hydraulic process monitor, pack multiple conservation laws into dense, deforming geometric polygons ([Burns and Hajdukiewicz](https://www.routledge.com/Ecological-Interface-Design/Burns-Hajdukiewicz/p/book/9780415283748)). Empirical evaluations revealed a sharp trade-off: while configural polygons dramatically reduce analytical calculation during emergencies for experts who understand the underlying physics, they baffle novices who do not know what a warping trapezoid signifies. Geometry only offloads cognition when the viewer already shares the domain's structural grammar.
2. **Causal versus Intentional Systems**: Vicente and Rasmussen's early models focused on **causal systems** governed by immutable laws of physics, such as mass balance and thermodynamics ([Vicente](https://www.routledge.com/Cognitive-Work-Analysis-Toward-Safe-Productive-and-Healthy-Computer-Based-Work/Vicente/p/book/9780805823974)). Most everyday software, however, is an **intentional system** governed by human conventions, linguistic taxonomies, or arbitrary code rules where no natural conservation law exists. When there is no conservation law to project into geometry, naive EID has nothing to draw. The solution in intentional software is that **the architect must explicitly legislate domain invariants** that act as synthetic conservation laws.
3. **Missing the Temporal and Procedural Flow**: EID excels at displaying a high-dimensional *state space* and its constraint boundaries, enabling spatial navigation and diagnosis. It is notoriously poor at guiding strict sequential consumption or multi-step linear procedures. State-space topology must be paired with a dedicated linear flow layer when the human wants to stop navigating and simply consume or publish a sequence.
4. **The Automation Blind Spot**: Original EID assumed a human operator was directly manipulating valves and switches in a plant. In modern software and agentic coding, the human supervises autonomous pipelines and AI agents that transform the system on their own ([Hollnagel and Woods](https://www.routledge.com/Joint-Cognitive-Systems-Foundations-of-Cognitive-Systems-Engineering/Hollnagel-Woods/p/book/9780849328213)). When an interface displays only the final output without exposing the automation's internal thresholds, provenance, and confidence boundaries, the human is blindsided by "automation surprises" whenever the agent crosses a hidden threshold.

---

## 3. The modern synthesis, tested live in `post-pipe`

Those four failure modes and their modern resolutions are not merely academic theory; they appeared one by one during the live development of **`post-pipe`**, an engine that turns corpora of writing and syndication feeds into a navigable force-directed graph coupled with a multi-vocabulary tag translator (`rosetta-tagz`) and a dockable workspace host (`exoskeleton`). Watching where coding agents stumbled during `post-pipe`'s development, and examining the standing rules written into its repository (`CLAUDE.md` and `vision/DECOMPOSITION.md`) to correct them, provides a field laboratory for modern Cognitive Systems Engineering.

### A. Intentional Conservation Laws and the 8-Layer Abstraction Hierarchy
To solve the **Causal versus Intentional** gap, `post-pipe`'s architectural decomposition (`vision/DECOMPOSITION.md`) defines an explicit eight-layer Abstraction Hierarchy (`Layer 0 Exoskeleton` -> `Layer 1 Bundle` -> `Layer 2 Corpus and rosetta-tagz` -> `Layer 3 Lens` -> `Layer 4 Renderer` -> `Layer 5 Tile and Panel` -> `Layer 6 Flow` -> `Layer 7 Personal Infeed`), backed by two synthetic conservation laws in `CLAUDE.md`:
- **Conservation of Emergence (Rule 2)**: *"A node exists because a file or a feed item exists. The engine never synthesizes content."*
- **Conservation of Provenance (`rtagz-labels-check.js`)**: Every tag label rendered anywhere in the graph must trace by an unbroken chain (`PROV` `wasDerivedFrom`) to an authored record, an item's text, an explicit override, or an enabled vocabulary, exiting with an error if any label appears without a conserved origin.

And notice how Layers 6 and 7 (`Flow` and `Personal Infeed`) directly resolve EID's **Temporal/Procedural Flow** limitation: *"The cosmos is for navigation. The infeed is for consumption. Linearity is for consumption, topology is for navigation."* The state-space graph (Layers 2–4) and the sequential consumption stream (Layers 6–7) are kept in distinct layers so neither corrupts the other.

### B. Direct Perception and the "Cards Never Disappear" Rule
In Kevin Bennett and John Flach's modern synthesis of EID, a configural display succeeds only when it preserves simultaneous visual access to **local semantic identity** and **global configural topology** ([Bennett and Flach](https://www.routledge.com/Display-and-Interface-Design-Subtle-Science-Exact-Art/Bennett-Flach/p/book/9781420064384)).

During an earlier refactor of `post-pipe`, a coding agent introduced a "semantic zoom" optimization: whenever the user zoomed out below thirty-five percent to view the whole graph, the renderer replaced every titled card with an unlabeled circular dot. Worse, another agent recorded that heuristic in persistent memory as the human's own rule. From a conventional UI textbook perspective, turning cards into dots at low zoom looks clean. From a Joint Cognitive Systems perspective, it is catastrophic: the moment the titles vanish, a thinker who relies on externalized visual-verbal anchors loses the mapping between local piece identity and global cluster shape. Zooming out turns a meaningful territory into anonymous birdshot.

Correcting that failure produced **Rule 14 of `CLAUDE.md` (`Cards never disappear`)**: *at every zoom level, a card remains a card with its readable title and scales continuously with the graph*. Zoom changes camera distance, never ontological identity.

### C. Fixing at the Domain Layer and Exposing Automation Provenance
When automated tag discovery (`rosetta-tagz`) began generating noisy hub tags across near-duplicate RSS items, the immediate temptation for a coding agent was to filter or hide the unwanted tags inside the viewer (`Layer 4`). In EID terms, patching a domain error inside the display renderer violates the Abstraction Hierarchy: the display now lies about the state of the corpus, and downstream consumers find cards tagged with hubs that the viewer refuses to hide.

The Joint Cognitive Systems fix required two moves:
1. **Fix at the layer that produces the problem**: Near-copy deduplication and the `sourceRatio` coherence bar were enforced inside `rtz-discover` and `rtz-emerge` (`Layer 2`), before the viewer ever receives the graph.
2. **Surface provenance on the edge**: Instead of hiding how the automation decided to link two pieces, hovering an edge or inspecting a tag exposes its `sourceRatio`, its weight, and its `wasDerivedFrom` assertion chain. When an external RSS feed fails to fetch, the top bar does not fail silently or show a generic error modal; it serves the last known good copy with an explicit staleness badge (`topBar.staleAge`) showing the exact age of the cached state. The automation's boundaries become directly observable as ambient geometry.

### D. Epistemic Actions: "Options, Not Questions" and "Add Before You Override"
The most important breakthrough in `post-pipe`'s agent rules connects Paul Dourish's embodied interaction and David Kirsh's theory of **epistemic actions** directly to how coding agents should handle design ambiguity ([Dourish](https://www.dourish.com/embodied/); [Kirsh](https://link.springer.com/article/10.1007/s00146-010-0272-8)).

Kirsh demonstrated that humans rarely solve complex structural problems by staring at a static display and computing the answer inside their heads; instead, they perform *epistemic actions*, physically rearranging tiles, rotating objects, or scrubbing a parameter to unearth relationships visually. When a coding agent encounters an open threshold or design trade-off, such as what `sourceRatio` bar should filter discovered tags or whether near-copy grouping should use single-linkage chains (`chain`) or complete cliques (`all-pairs`), the default AI behavior is either to guess silently or to halt execution and ask the human a text question in chat.

Asking the human *"Should the source coherence threshold be 1.4 or 1.6?"* forces the human to simulate a high-dimensional graph projection inside their head, which is impossible without seeing it. `post-pipe` solved this with **Rule 12 (`Add before you override`)** and **Rule 13 (`Options, not questions`)**:
- When a parameter or visual choice is legitimately open, **do not guess for the human and do not stop to ask in prose**.
- Build the choice into the interface as a live epistemic control (such as the logarithmic `sourceRatio` coherence slider that updates visible card and tag counts in real time without a rebuild, or a `settings.json` toggle switch), pick a sensible default, and tell the human the name of the switch.

A question in chat burns the human's twenty-watt budget on blind speculation. A live slider on the canvas turns that same question into a two-second perceptual-motor experiment.

---

## 4. An EID operating protocol for agentic coding

<svg viewBox="0 0 760 440" width="100%" role="img" aria-label="Triadic Joint Cognitive System diagram connecting the Human Cognitive System, the Ecological Interface, and the Autonomous Coding Agent across the Abstraction Hierarchy" style="display:block;max-width:720px;margin:1.5em auto">
  <!-- Outer Frame -->
  <rect x="16" y="16" width="728" height="408" rx="8" fill="none" stroke="var(--color-divider)" stroke-width="1"/>
  <text x="380" y="44" text-anchor="middle" style="font-family:var(--font-body);font-size:11.5px;font-weight:600;letter-spacing:.08em;text-transform:uppercase" fill="var(--color-neutral-400)">The Triadic Joint Cognitive System in Agentic Software Engineering</text>

  <!-- Node 1: Human Cognitive System (Top Left) -->
  <rect x="44" y="76" width="210" height="125" rx="6" fill="none" stroke="var(--color-accent)" stroke-width="1.8"/>
  <text x="149" y="102" text-anchor="middle" style="font-family:var(--font-body);font-size:12px;font-weight:600" fill="var(--color-text)">1. Human Cognitive System</text>
  <text x="60" y="126" style="font-family:var(--font-body);font-size:10.5px" fill="var(--color-neutral-400)">• Fixed 20-Watt metabolic cap</text>
  <text x="60" y="146" style="font-family:var(--font-body);font-size:10.5px" fill="var(--color-neutral-400)">• Externalized spatial memory</text>
  <text x="60" y="166" style="font-family:var(--font-body);font-size:10.5px" fill="var(--color-neutral-400)">• High-bandwidth perceptual</text>
  <text x="70" y="182" style="font-family:var(--font-body);font-size:10.5px" fill="var(--color-neutral-400)">&amp; sensorimotor pattern detection</text>

  <!-- Node 2: Coding Agent (Top Right) -->
  <rect x="506" y="76" width="210" height="125" rx="6" fill="none" stroke="var(--color-neutral-400)" stroke-width="1.5"/>
  <text x="611" y="102" text-anchor="middle" style="font-family:var(--font-body);font-size:12px;font-weight:600" fill="var(--color-text)">2. Autonomous Coding Agent</text>
  <text x="522" y="126" style="font-family:var(--font-body);font-size:10.5px" fill="var(--color-neutral-400)">• Bound by Abstraction Hierarchy</text>
  <text x="522" y="146" style="font-family:var(--font-body);font-size:10.5px" fill="var(--color-neutral-400)">• Fixes at the domain layer</text>
  <text x="522" y="166" style="font-family:var(--font-body);font-size:10.5px" fill="var(--color-neutral-400)">• Emits epistemic switches,</text>
  <text x="532" y="182" style="font-family:var(--font-body);font-size:10.5px" fill="var(--color-neutral-400)">never destructive overrides</text>

  <!-- Node 3: Ecological Interface & Domain Stack (Bottom Center) -->
  <rect x="130" y="258" width="500" height="140" rx="6" fill="none" stroke="var(--color-accent)" stroke-width="1.8"/>
  <text x="380" y="284" text-anchor="middle" style="font-family:var(--font-body);font-size:12px;font-weight:600" fill="var(--color-accent)">3. Ecological Interface &amp; Work Domain Stack</text>
  <line x1="150" y1="296" x2="610" y2="296" stroke="var(--color-divider)" stroke-width="1"/>
  <text x="155" y="318" style="font-family:var(--font-body);font-size:10.5px" fill="var(--color-text)">• Local + Global Invariance:</text>
  <text x="320" y="318" style="font-family:var(--font-body);font-size:10.5px" fill="var(--color-neutral-400)">Cards &amp; landmarks persist across every zoom scale</text>
  <text x="155" y="340" style="font-family:var(--font-body);font-size:10.5px" fill="var(--color-text)">• Epistemic Controls:</text>
  <text x="320" y="340" style="font-family:var(--font-body);font-size:10.5px" fill="var(--color-neutral-400)">Live sliders &amp; switches reveal constraint boundaries</text>
  <text x="155" y="362" style="font-family:var(--font-body);font-size:10.5px" fill="var(--color-text)">• Observable Provenance:</text>
  <text x="320" y="362" style="font-family:var(--font-body);font-size:10.5px" fill="var(--color-neutral-400)">First-class edges carry PROV reason, weight &amp; staleness</text>
  <text x="155" y="384" style="font-family:var(--font-body);font-size:10.5px" fill="var(--color-text)">• Conserved Domain Layer:</text>
  <text x="320" y="384" style="font-family:var(--font-body);font-size:10.5px" fill="var(--color-neutral-400)">Every visible node/tag traces to a verified source artifact</text>

  <!-- Coupling Arrows -->
  <!-- Human <-> Agent -->
  <line x1="254" y1="138" x2="506" y2="138" stroke="var(--color-divider)" stroke-width="1.4" stroke-dasharray="4 4"/>
  <text x="380" y="130" text-anchor="middle" style="font-family:var(--font-body);font-size:10px" fill="var(--color-neutral-400)">Explicit Domain Rules (AGENTS.md / CLAUDE.md)</text>

  <!-- Human <-> Interface -->
  <path d="M 149 201 L 230 258" fill="none" stroke="var(--color-accent)" stroke-width="1.8"/>
  <text x="135" y="236" style="font-family:var(--font-body);font-size:10px;font-weight:500" fill="var(--color-accent)">Epistemic Poking &amp; Direct Perception</text>

  <!-- Agent <-> Interface -->
  <path d="M 611 201 L 530 258" fill="none" stroke="var(--color-neutral-400)" stroke-width="1.6"/>
  <text x="585" y="236" text-anchor="middle" style="font-family:var(--font-body);font-size:10px" fill="var(--color-neutral-400)">Builds Switches + Frozen-Input Audits</text>
</svg>

*Figure 1: The Triadic Joint Cognitive System. Rather than allowing the coding agent to invent opaque UI simplifications or interrogate the human in prose, explicit domain rules force the agent to expose system constraints, provenance, and open parameters as manipulable geometry on the shared ecological canvas.*

To make Ecological Interface Design and Joint Cognitive Systems operational inside an agentic coding repository, an architect cannot simply tell an LLM to "use EID." Language models trained on boilerplate web apps will default to hiding state in dropdowns, collapsing nodes at arbitrary zoom levels, and patching data bugs inside CSS.

Instead, the principles of Vicente, Hollnagel, Woods, Bennett, Flach, and Kirsh must be compiled into **concrete behavioral invariants** inside the repository's canonical instruction file (`AGENTS.md` or `CLAUDE.md`). The following seven-rule specification is designed to be dropped directly into any agentic codebase:

```markdown
## Ecological Interface & Joint Cognitive System Rules (EID-JCS Protocol)

1. **Design for the Joint Cognitive System (20-Watt Human Conservation Law)**:
   - Treat the human's working memory and visual cortex as a strictly bounded resource, and treat the screen as externalized spatial memory.
   - Never hide structural relationships, active filters, or mode states behind invisible memory requirements. If a constraint or threshold is active, its boundary and how many items it excludes must be visible on the surface.

2. **Respect the Abstraction Hierarchy (Fix at the Layer That Produces the Problem)**:
   - Keep domain data, conservation/provenance rules, projection lenses, and visual renderers in separate layers.
   - Never mask a domain or ingestion defect inside the visual renderer. Every rendered node, edge, or label must trace deterministically to a conserved source artifact; if junk appears, fix the upstream domain filter rather than hiding it in the UI.

3. **Preserve Local-to-Global Configural Invariance (Landmarks Never Disappear)**:
   - Never invent "semantic zoom" or responsive heuristics that strip an object's title or identity into an anonymous dot when zooming out.
   - Global cluster geometry and local semantic identity must remain simultaneously perceptible across every scale so spatial landmarks stay anchored.

4. **Options, Not Questions (Epistemic Actions Over Prose Guessing)**:
   - When a threshold, layout parameter, or grouping algorithm is legitimately open, do NOT pick silently for the human and do NOT stop to ask the human to guess in chat.
   - Build the open parameter as a live control (a slider with live counts, a view toggle, or a declarative config switch), choose a sensible default, and report the switch's name so the human can discover the right boundary by manipulating it directly.

5. **Add Before You Override (Non-Destructive Evolution)**:
   - Never replace or delete a working view, CLI command, or interaction mode when adding a new one. Expose the new behavior as a sidecar, lens, or selectable option beside the working baseline until the human explicitly retires the old one.

6. **Make Automation Provenance and Boundaries Observable**:
   - Whenever an algorithm or AI pipeline derives a tag, clusters items, or falls back to cached state, expose the `why` (rule, weight, ratio threshold, and cache age) directly on hover or inspection.
   - Represent relationships as first-class edges carrying provenance metadata, never as opaque rankings or unexamined black-box scores.

7. **Verify Before-and-After on Frozen Inputs**:
   - Before claiming an algorithmic or visual change improved the system, run both the old and new builds against identical frozen inputs and report the exact structural diff (counts, labels, and headless visual renders) so the human evaluates evidence rather than agent assurances.
```

Look at what happens when a coding droid is bound by those seven rules. It stops acting like an overconfident interior decorator rearranging furniture in the dark, and starts acting like a cognitive systems engineer: preserving landmarks, keeping the domain layer honest, exposing provenance on every edge, and handing the human live levers instead of twenty-question quizzes. When an agent leaves behind a deterministic script or a live epistemic slider, it stops burning shit-tons of silicon tokens on a problem that a human hand and eye can settle in two seconds.

---

## 5. The short version

Ecological Interface Design is the perceptual half of Cognitive Work Analysis: you map a system's functional purpose and conservation laws across an Abstraction Hierarchy, then project those invariants onto visible geometry so the human brain can steer by fast perception rather than slow analytical calculation. Over thirty years, four classical failure modes of 1992 EID (training overhead, intentional versus causal rules, missing sequential flow, and the automation blind spot) forced the field to evolve into **Cognitive Systems Engineering**, where human, interface, and automation are designed as a single **Joint Cognitive System**. In agentic software development, that joint system is a triad: a twenty-watt human brain that needs stable spatial landmarks, an ecological interface that preserves local-to-global invariance and provenance, and an autonomous coding agent instructed to fix defects at the domain layer and turn open design choices into manipulable epistemic sliders rather than prose questions.

---

## Works Cited

- Bennett, Kevin B., and John M. Flach. [*Display and Interface Design: Subtle Science, Exact Art*](https://www.routledge.com/Display-and-Interface-Design-Subtle-Science-Exact-Art/Bennett-Flach/p/book/9781420064384). CRC Press, 2011. *Routledge*.
- Burns, Catherine M., and John R. Hajdukiewicz. [*Ecological Interface Design*](https://www.routledge.com/Ecological-Interface-Design/Burns-Hajdukiewicz/p/book/9780415283748). CRC Press, 2004. *Routledge*.
- Dourish, Paul. [*Where the Action Is: The Foundations of Embodied Interaction*](https://www.dourish.com/embodied/). MIT Press, 2001. *Paul Dourish Author Archive*.
- Hollnagel, Erik, and David D. Woods. [*Joint Cognitive Systems: Foundations of Cognitive Systems Engineering*](https://www.routledge.com/Joint-Cognitive-Systems-Foundations-of-Cognitive-Systems-Engineering/Hollnagel-Woods/p/book/9780849328213). CRC Press, 2005. *Routledge*.
- Kirsh, David. ["Thinking with external representations."](https://link.springer.com/article/10.1007/s00146-010-0272-8) *AI & Society*, vol. 25, no. 4, 2010, pp. 441–454. *Springer Nature Link*.
- Vicente, Kim J. [*Cognitive Work Analysis: Toward Safe, Productive, and Healthy Computer-Based Work*](https://www.routledge.com/Cognitive-Work-Analysis-Toward-Safe-Productive-and-Healthy-Computer-Based-Work/Vicente/p/book/9780805823974). Lawrence Erlbaum Associates, 1999. *Routledge*.
- Vicente, Kim J., and Jens Rasmussen. ["Ecological Interface Design: Theoretical Foundations."](https://doi.org/10.1109/21.156574) *IEEE Transactions on Systems, Man, and Cybernetics*, vol. 22, no. 4, 1992, pp. 589–606. *IEEE Xplore*.

---

## Contribution

**Human:** the research brief tracing Ecological Interface Design from Vicente and Rasmussen (1992) through its four counter-arguments to Bennett and Flach, Hollnagel and Woods, and Dourish and Kirsh; the core insistence that software and agentic workflows must be designed as a **Joint Cognitive System** that explicitly accounts for the human cognitive architecture; and the hard-won engineering rules forged during the development of `post-pipe` (*"cards never disappear"*, *"options, not questions"*, *"add before you override"*, and *"fix at the layer that produces the problem"*).

**Machine:** the structural mapping between Vicente's Abstraction Hierarchy and `post-pipe`'s eight-layer decomposition (`vision/DECOMPOSITION.md`), the synthesis of Kirsh's epistemic actions with `CLAUDE.md`'s rule against prose guessing, the compilation of the seven-rule `EID-JCS Protocol` for coding agents, the Triadic Joint Cognitive System diagram, and the citation verification.

**Neither, exactly:** the rules in Section 4 were not deduced from academic literature and then applied to `post-pipe`, nor were they invented in `post-pipe` in ignorance of the literature. The human arrived at rules like *"options, not questions"* and *"cards never disappear"* by defending his own perceptual-cognitive system against agent anti-patterns in live production, and only afterward noticed that thirty years of Cognitive Systems Engineering had arrived at the exact same theorems from the other side of the mountain.

*Donated to the commons.*
