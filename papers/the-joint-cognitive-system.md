---
type: zpaper
title: "The joint cognitive system: ecological interface design, four failure modes, and an operating protocol for agentic coding"
version: 2.0
date: 2026-10-31
audience: system architects, human-AI pair programmers, and anyone who has watched a coding agent break their spatial memory with a well-intentioned UI refactor
license: CC0-1.0
tags: [cognitive-systems-engineering, ecological-interface-design, joint-cognitive-systems, agentic-coding, human-ai-collaboration, epistemic-actions, systems-topology, provenance, interface-architecture, ironies-of-automation, observability, directability]
lineage: [cognitive-systems-engineering, ecological-psychology, cognitive-work-analysis, human-automation-teaming, resilience-engineering, embodied-cognition, topothink]
links: ["[[the-twenty-watt-watch]]", "[[the-contracted-edge]]", "[[the-smoke-loop]]", "[[topothink]]"]
summary: "Cognitive Systems Engineering made the joint human-machine system its unit of analysis in 1983, and Ecological Interface Design grew inside that program. In agentic coding the joint system becomes a triad of human, interface, and coding agent joined by three interfaces, and it gains a property classical CSE never faced: the agent builds the display through which it is supervised and writes the rules it works under. Nine rules, most of them written in post-pipe before the literature was consulted, keep each of the three interfaces honest."
references:
  - "Bainbridge, Lisanne. 'Ironies of Automation.' Automatica, vol. 19, no. 6, 1983, pp. 775-779."
  - "Bennett, Kevin B., and John M. Flach. Display and Interface Design: Subtle Science, Exact Art. CRC Press, 2011."
  - "Burns, Catherine M., and John R. Hajdukiewicz. Ecological Interface Design. CRC Press, 2004."
  - "Christoffersen, Klaus, and David D. Woods. 'How to Make Automated Systems Team Players.' Advances in Human Performance and Cognitive Engineering Research, vol. 2, Emerald, 2002, pp. 1-12."
  - "Dourish, Paul. Where the Action Is: The Foundations of Embodied Interaction. MIT Press, 2001."
  - "Hollnagel, Erik, and David D. Woods. 'Cognitive Systems Engineering: New Wine in New Bottles.' International Journal of Man-Machine Studies, vol. 18, no. 6, 1983, pp. 583-600."
  - "Hollnagel, Erik, and David D. Woods. Joint Cognitive Systems: Foundations of Cognitive Systems Engineering. CRC Press, 2005."
  - "Kirsh, David. 'Thinking with external representations.' AI & Society, vol. 25, no. 4, 2010, pp. 441-454."
  - "Kirsh, David, and Paul P. Maglio. 'On Distinguishing Epistemic from Pragmatic Action.' Cognitive Science, vol. 18, no. 4, 1994, pp. 513-549."
  - "Klein, Gary, et al. 'Ten Challenges for Making Automation a Team Player in Joint Human-Agent Activity.' IEEE Intelligent Systems, vol. 19, no. 6, 2004, pp. 91-95."
  - "Sarter, Nadine B., David D. Woods, and Charles E. Billings. 'Automation Surprises.' Handbook of Human Factors and Ergonomics, 2nd ed., edited by Gavriel Salvendy, Wiley, 1997."
  - "Vicente, Kim J. Cognitive Work Analysis: Toward Safe, Productive, and Healthy Computer-Based Work. Lawrence Erlbaum Associates, 1999."
  - "Vicente, Kim J., and Jens Rasmussen. 'Ecological Interface Design: Theoretical Foundations.' IEEE Transactions on Systems, Man, and Cybernetics, vol. 22, no. 4, 1992, pp. 589-606."
---

# The joint cognitive system

## Ecological interface design, four failure modes, and an operating protocol for agentic coding

---

> let's write another paper about EID, use this to start, but you can expand, write it with the idea of using agents or even agent instructions to utilize this method in agentic coding. joint system, this is what I'm always talking about, we have to see the human cognition system as well. you could see some of that in post-pipe if you want examples, as we struggle to achieve this throughout the development period.

*An architectural directive issued on a Saturday afternoon, connecting four decades of Cognitive Systems Engineering to the live commit history of a graph-based publishing engine. Version 2.0 was written the same evening, after a review found that version 1.0 had drawn the field's lineage backward.*

---

## Introduction

Most software interfaces are designed as if the screen were a wall between two independent machines: a code execution engine on the inside, and a generic "user" on the outside. When autonomous coding agents enter the workflow, this separation becomes doubly destructive. Left to its own training priors, a coding agent optimizes for surface-level visual tidiness, hides structural state behind modal prompts, and silently invents display heuristics that sever the human architect's spatial and semantic grip on the system.

**Cognitive Systems Engineering (CSE)** has argued since 1983 that this separation is the wrong unit of analysis. Erik Hollnagel and David Woods named the field to move attention away from the human and the computer as separately designed parts and toward the **joint cognitive system** the two form together ([Hollnagel and Woods, "Cognitive Systems Engineering"](https://doi.org/10.1016/S0020-7373%2883%2980034-0)). **Ecological Interface Design (EID)**, introduced by Kim Vicente and Jens Rasmussen in 1992, grew inside that program as the answer to one of its central questions: how should a display externalize a domain's invariants so that the human half of the joint system can steer by perception instead of calculation?

Agentic coding changes the joint system in two ways. It becomes a triad: the **human cognitive architecture**, with its fixed twenty-watt metabolic budget and specific perceptual traits such as aphantasia; the **ecological software interface**; and the **coding agent**. And it acquires a property the classical literature never had to face. In a power plant or a cockpit, the automation did not redesign the display its supervisor used to watch it. A coding agent does. It builds the canvas through which the human checks its work, and it writes into persistent memory the rules that future agents will follow. **The supervised party edits the supervisor's instrument.**

This zpaper traces four failure modes of 1992 EID, shows how each surfaced during the development of the `post-pipe` topology engine, maps the triad as three interfaces rather than one, and derives an operating protocol for coding agents. The protocol's core rules were not deduced from the literature. They were written into `post-pipe`'s repository to defend one perceptual system against agent behavior under live load, and only afterward found to match results CSE had reached decades earlier. Where they go past that literature is the reflexive edge: rules for an automation that builds its own supervision.

---

## Primary sources & lineage

Before entering the formal model, this zpaper grounds its formalism in twelve texts across cognitive systems engineering, ecological psychology, work domain analysis, human-automation teaming, and embodied cognition. They are listed in order of publication, so the lineage reads in its actual direction:

- **Hollnagel, Erik, and David D. Woods.** ["Cognitive Systems Engineering: New Wine in New Bottles."](https://doi.org/10.1016/S0020-7373%2883%2980034-0) (*International Journal of Man-Machine Studies*, vol. 18, no. 6, 1983, pp. 583–600; Elsevier).  
  *Core premise*: Human-machine systems should be analyzed at the level of cognitive functions, with human and machine together treated as one adaptive cognitive system rather than as separately designed parts.  
  *Role in this zpaper*: The root of the lineage. The joint cognitive system precedes EID; EID is one of the programs that grew inside this frame.

- **Bainbridge, Lisanne.** ["Ironies of Automation."](https://doi.org/10.1016/0005-1098%2883%2990046-8) (*Automatica*, vol. 19, no. 6, 1983, pp. 775–779; Elsevier).  
  *Core premise*: Automating most of a process leaves the human with the tasks the designer could not automate, chiefly monitoring and taking over in abnormal conditions, while removing the daily practice that builds the knowledge those tasks require.  
  *Role in this zpaper*: Names the irony at the center of agentic coding. The more code the agent writes, the less of the system's model the human holds, and that model is what supervising the agent depends on.

- **Vicente, Kim J., and Jens Rasmussen.** ["Ecological Interface Design: Theoretical Foundations."](https://doi.org/10.1109/21.156574) (*IEEE Transactions on Systems, Man, and Cybernetics*, vol. 22, no. 4, 1992, pp. 589–606).  
  *Core premise*: Interfaces for complex systems should make invisible domain constraints and conservation laws directly perceptible as visual geometry, allowing operators to handle unanticipated faults using low-cost perceptual-motor skills rather than exhausting analytical reasoning.  
  *Role in this zpaper*: Establishes the baseline principle of externalizing domain invariants into visible topology rather than forcing the human to compute state inside working memory.

- **Kirsh, David, and Paul P. Maglio.** ["On Distinguishing Epistemic from Pragmatic Action."](https://philarchive.org/rec/KIRODE) (*Cognitive Science*, vol. 18, no. 4, 1994, pp. 513–549; PhilArchive).  
  *Core premise*: In Tetris, players rotate and shift pieces not only to bring them closer to a goal but to uncover information that is hidden or hard to compute mentally. These **epistemic actions** use the world to reduce the memory, the steps, and the error of computation done in the head.  
  *Role in this zpaper*: The original evidence for the agent rule **"Options, not questions"**: a live control lets the human find a boundary by moving it.

- **Vicente, Kim J.** [*Cognitive Work Analysis: Toward Safe, Productive, and Healthy Computer-Based Work*](https://www.routledge.com/Cognitive-Work-Analysis-Toward-Safe-Productive-and-Healthy-Computer-Based-Work/Vicente/p/book/9780805823974) (1999; Lawrence Erlbaum Associates / Routledge).  
  *Core premise*: Ecological interface design is only the perceptual surface of a five-stage analytical methodology beginning with Work Domain Analysis and the **Abstraction Hierarchy**, which maps a system from its functional purpose and conservation laws down to its physical components.  
  *Role in this zpaper*: Provides the structural template for separating domain invariants (such as `post-pipe`'s eight-layer decomposition) from transient rendering decisions.

- **Dourish, Paul.** [*Where the Action Is: The Foundations of Embodied Interaction*](https://www.dourish.com/embodied/) (2001; MIT Press).  
  *Core premise*: Meaning and coupling in interactive systems are not passively read off static representations, but actively constructed through embodied, situated manipulation in real time.  
  *Role in this zpaper*: Connects ecological perception to interactive manipulation, where constraints are felt by how a structure pushes back when moved.

- **Christoffersen, Klaus, and David D. Woods.** ["How to Make Automated Systems Team Players."](https://www.emerald.com/books/edited-volume/12728/chapter/83052182/1-How-to-make-automated-systems-team-players) (*Advances in Human Performance and Cognitive Engineering Research*, vol. 2, 2002, pp. 1–12; Emerald).  
  *Core premise*: Joint systems often perform adequately only because their humans compensate for uncommunicative machine agents. To become team players, automated agents need two properties designed in from the start: **observability**, so people can see what the agent is doing and will do next, and **directability**, so people can redirect it fluently.  
  *Role in this zpaper*: Observability and directability are the direct ancestors of the protocol's rules on provenance and on options.

- **Burns, Catherine M., and John R. Hajdukiewicz.** [*Ecological Interface Design*](https://www.routledge.com/Ecological-Interface-Design/Burns-Hajdukiewicz/p/book/9780415283748) (2004; CRC Press / Routledge).  
  *Core premise*: Synthesizes fifteen years of EID deployments across process control, aviation, medicine, and network management, identifying where dense configural displays overload uninitiated operators or fail in purely intentional domains.  
  *Role in this zpaper*: Grounds Section 2's account of the visual complexity paradox and the boundary between causal physics and intentional software rules.

- **Klein, Gary, David D. Woods, Jeffrey M. Bradshaw, Robert R. Hoffman, and Paul J. Feltovich.** ["Ten Challenges for Making Automation a 'Team Player' in Joint Human-Agent Activity."](https://doi.org/10.1109/MIS.2004.74) (*IEEE Intelligent Systems*, vol. 19, no. 6, 2004, pp. 91–95).  
  *Core premise*: Joint human-agent activity rests on common ground. An agent working with people must be directable and must make the pertinent parts of its status and intentions obvious to its teammates.  
  *Role in this zpaper*: Names joint human-agent activity two decades before coding agents. The protocol's instruction-layer rules extend its demand for legible intentions to agents that write their own rules.

- **Hollnagel, Erik, and David D. Woods.** [*Joint Cognitive Systems: Foundations of Cognitive Systems Engineering*](https://www.routledge.com/Joint-Cognitive-Systems-Foundations-of-Cognitive-Systems-Engineering/Hollnagel-Woods/p/book/9780849328213) (2005; CRC Press / Routledge).  
  *Core premise*: Consolidates two decades of the program the authors named in 1983. Human and machine are analyzed as one **joint cognitive system**; as automation increases, the central engineering problem shifts from manual control to making the automation's model, boundaries, and provenance observable and directable.  
  *Role in this zpaper*: Supplies the theoretical spine for treating the human architect, the live software, and the coding droid as one coupled cognitive loop.

- **Kirsh, David.** ["Thinking with external representations."](https://link.springer.com/article/10.1007/s00146-010-0272-8) (*AI & Society*, vol. 25, no. 4, 2010, pp. 441–454; Springer Nature Link).  
  *Core premise*: Extends the 1994 account from game pieces to external representations generally. People build and manipulate external structures so the eye and hand can do work that would overwhelm internal working memory.  
  *Role in this zpaper*: Widens epistemic action from a Tetris finding to a general design argument for live controls on the canvas.

- **Bennett, Kevin B., and John M. Flach.** [*Display and Interface Design: Subtle Science, Exact Art*](https://www.routledge.com/Display-and-Interface-Design-Subtle-Science-Exact-Art/Bennett-Flach/p/book/9781420064384) (2011; CRC Press / Routledge).  
  *Core premise*: Effective configural displays preserve simultaneous access to **local data elements** (individual identities and metrics) and **global emergent features** (symmetry, cluster density, boundary proximity) across the abstraction-decomposition space.  
  *Role in this zpaper*: Explains why agent-invented "semantic zoom" heuristics that collapse labeled cards into anonymous dots destroy configural perception.

---

## 1. Beyond screen layout: the abstraction hierarchy and the biological half of the loop

Ecological Interface Design was never a style guide for arranging widgets on a monitor. It grew out of Jens Rasmussen's research on human performance in process control, and it belongs to the cognitive systems engineering program that Hollnagel and Woods had named in 1983. When Vicente and Rasmussen introduced the framework in 1992, and when Vicente expanded it into **Cognitive Work Analysis (CWA)** in 1999, their starting point was an indictment of task-based interface design ([Vicente and Rasmussen](https://doi.org/10.1109/21.156574); [Vicente](https://www.routledge.com/Cognitive-Work-Analysis-Toward-Safe-Productive-and-Healthy-Computer-Based-Work/Vicente/p/book/9780805823974)). An interface designed around a fixed checklist of user tasks works only while the world obeys the script. The moment an unanticipated fault or novel combination of inputs occurs, the script breaks, forcing the human operator out of fast perceptual-motor fluency and into slow, high-effort analytical deduction.

To prevent that cognitive cliff, EID begins by constructing an **Abstraction Hierarchy (AH)** of the work domain itself, independent of any screen or user workflow. The system is mapped across five structural levels:

1. **Functional Purpose**: Why the system exists and what value or invariant it must preserve.
2. **Abstract Function (Conservation Laws)**: The unbreakable accounting rules of mass, energy, probability, or provenance governing the domain.
3. **Generalized Functions**: The flows, transformations, and feedback loops that move state through the system.
4. **Physical Functions**: The capabilities of the individual modules, adapters, and engines.
5. **Physical Form**: The concrete files, sockets, DOM nodes, or hardware surfaces where those modules live.

Because this hierarchy models constraint boundaries rather than pixels, EID has been applied well beyond desktop software, across process control, aviation, medicine, and network management ([Burns and Hajdukiewicz](https://www.routledge.com/Ecological-Interface-Design/Burns-Hajdukiewicz/p/book/9780415283748)).

Yet an Abstraction Hierarchy of the software alone leaves half the circuit unmapped. As Hollnagel and Woods argued from the field's founding paper through their 2005 synthesis, the human nervous system is not an external consumer of the interface; it is the other half of the computational loop ([Hollnagel and Woods, "Cognitive Systems Engineering"](https://doi.org/10.1016/S0020-7373%2883%2980034-0); [Hollnagel and Woods, *Joint Cognitive Systems*](https://www.routledge.com/Joint-Cognitive-Systems-Foundations-of-Cognitive-Systems-Engineering/Hollnagel-Woods/p/book/9780849328213)). And the human half has hard physical specifications of its own:

- **A fixed twenty-watt metabolic ceiling**: As established in [[the-twenty-watt-watch]], the human brain cannot scale up its total power draw to brute-force poorly staged information. Every watt spent mentally reconstructing hidden state, holding unrendered relationships in working memory, or hunting for a vanished label is a watt stolen from creative synthesis.
- **Perceptual and representational diversity (such as aphantasia)**: Many conventional interfaces assume the user possesses an internal visual movie theater capable of holding a mental map after the screen hides it. For a mind with aphantasia, or a mind managing ADHD context transitions, **the screen is the visual cortex**. When an interface collapses a structure or hides an edge to look "minimalist," the relationship does not remain available in mental imagery; it ceases to exist in the active workspace until re-queried.

Designing for the joint cognitive system therefore means treating the interface as a **prosthetic topological canvas** whose job is to keep the domain's Abstraction Hierarchy continuously visible and manipulable at near-zero metabolic cost to the human brain. The coding agent is the third vertex of the system, and it has a specification too; Section 4 maps it.

---

## 2. Where 1992 EID breaks down: four failure modes

Over three decades of application, cognitive engineers documented places where the original formulation breaks down when applied naively. **The grouping into four below is this paper's framing.** Each failure is documented separately in the literature; the field does not list them as a canonical set.

1. **The visual complexity and training paradox**: Classic EID displays, such as those built for the DURESS thermal-hydraulic process simulation, pack several conservation laws into configural geometry. Evaluations reported that the benefit depends on the viewer: configural displays reduce analytical calculation for operators who understand the underlying physics, and offer far less to operators who do not know what a deforming shape signifies ([Burns and Hajdukiewicz](https://www.routledge.com/Ecological-Interface-Design/Burns-Hajdukiewicz/p/book/9780415283748)). Geometry only offloads cognition when the viewer already shares the domain's structural grammar.
2. **Causal versus intentional systems**: Vicente and Rasmussen's 1992 formulation centered on **causal systems** governed by physical law, such as mass balance and thermodynamics. Vicente's 1999 treatment widened the frame to a continuum running from causal domains to **intentional** ones, where constraints come from human conventions, purposes, and code ([Vicente](https://www.routledge.com/Cognitive-Work-Analysis-Toward-Safe-Productive-and-Healthy-Computer-Based-Work/Vicente/p/book/9780805823974)). Most everyday software sits at the intentional end, where no natural conservation law exists to project into geometry. There, **the architect must explicitly legislate domain invariants** that act as synthetic conservation laws.
3. **Missing the temporal and procedural flow**: EID excels at displaying a high-dimensional *state space* and its constraint boundaries, enabling spatial navigation and diagnosis. It is poor at guiding strict sequential consumption or multi-step linear procedures. State-space topology must be paired with a dedicated linear flow layer when the human wants to stop navigating and simply consume or publish a sequence.
4. **The automation blind spot**: Original EID assumed an operator directly manipulating valves and switches. In modern software the human supervises autonomous pipelines and agents that transform the system on their own. When an interface shows only the final output without exposing the automation's thresholds, provenance, and boundaries, the human is blindsided by what Nadine Sarter, David Woods, and Charles Billings called **automation surprises** (Sarter, Woods, and Billings). Bainbridge had already named the deeper problem: automation removes the practice that keeps the supervisor's model current while leaving the supervisor responsible for the cases the automation cannot handle ([Bainbridge](https://doi.org/10.1016/0005-1098%2883%2990046-8)).

**These pressures did not create cognitive systems engineering, which preceded EID by nearly a decade.** They drove elaboration inside it: the later phases of Cognitive Work Analysis, ecological displays extended to automated control, and the human-automation teaming work in which Christoffersen and Woods named the two properties an automated partner owes its humans, observability and directability ([Christoffersen and Woods](https://www.emerald.com/books/edited-volume/12728/chapter/83052182/1-How-to-make-automated-systems-team-players); [Klein et al.](https://doi.org/10.1109/MIS.2004.74)).

---

## 3. The modern synthesis, tested live in `post-pipe`

Those four failure modes are not merely academic theory; they appeared one by one during the live development of **`post-pipe`**, an engine that turns corpora of writing and syndication feeds into a navigable force-directed graph coupled with a multi-vocabulary tag translator (`rosetta-tagz`) and a dockable workspace host (`exoskeleton`). Watching where coding agents stumbled during `post-pipe`'s development, and examining the standing rules written into its repository (`CLAUDE.md` and `vision/DECOMPOSITION.md`) to correct them, provides a field laboratory for cognitive systems engineering.

### A. Intentional conservation laws and the eight-layer abstraction hierarchy

To solve the **causal versus intentional** gap, `post-pipe`'s architectural decomposition (`vision/DECOMPOSITION.md`) defines an explicit eight-layer Abstraction Hierarchy (`Layer 0 Exoskeleton` -> `Layer 1 Bundle` -> `Layer 2 Corpus and rosetta-tagz` -> `Layer 3 Lens` -> `Layer 4 Renderer` -> `Layer 5 Tile and Panel` -> `Layer 6 Flow` -> `Layer 7 Personal Infeed`), backed by two synthetic conservation laws:

- **Conservation of Emergence (`CLAUDE.md` Rule 2)**: *"A node exists because a file or a feed item exists. The engine never synthesizes content."*
- **Conservation of Provenance (`rtagz-labels-check.js`)**: Every tag label rendered anywhere in the graph must trace by an unbroken chain (`PROV` `wasDerivedFrom`) to an authored record, an item's text, an explicit override, or an enabled vocabulary, exiting with an error if any label appears without a conserved origin.

Layers 6 and 7 (`Flow` and `Personal Infeed`) resolve EID's **temporal and procedural flow** limitation. In the decomposition's words, *"The cosmos is for navigation. The infeed is for consumption."* The state-space graph (Layers 2–4) and the sequential consumption stream (Layers 6–7) are kept in distinct layers so neither corrupts the other.

### B. Direct perception and the "cards never disappear" rule

In Kevin Bennett and John Flach's synthesis, a configural display succeeds only when it preserves simultaneous visual access to **local semantic identity** and **global configural topology** ([Bennett and Flach](https://www.routledge.com/Display-and-Interface-Design-Subtle-Science-Exact-Art/Bennett-Flach/p/book/9781420064384)).

During an earlier refactor of `post-pipe`, a coding agent introduced a "semantic zoom" optimization: whenever the user zoomed out below thirty-five percent to view the whole graph, the renderer replaced every titled card with an unlabeled circular dot. Worse, another agent recorded that heuristic in persistent memory as the human's own rule. From a conventional UI textbook perspective, turning cards into dots at low zoom looks clean. From a joint cognitive systems perspective, it is catastrophic: the moment the titles vanish, a thinker who relies on externalized visual-verbal anchors loses the mapping between local piece identity and global cluster shape. Zooming out turns a meaningful territory into anonymous birdshot.

Correcting that failure produced **Rule 14 of `CLAUDE.md` (`Cards never disappear`)**: at every zoom a card is drawn as a card with its title and scales with the graph, and zoom changes no layout. The rule does more than fix the display. It names the dot and the older zoom-level notes as agent inventions and forbids any agent to cite them as the human's. Zoom changes camera distance, never ontological identity.

### C. Fixing at the domain layer and exposing automation provenance

When automated tag discovery (`rosetta-tagz`) began generating noisy hub tags across near-duplicate RSS items, the immediate temptation for a coding agent was to filter or hide the unwanted tags inside the viewer (`Layer 4`). In EID terms, patching a domain error inside the display renderer violates the Abstraction Hierarchy: the display now lies about the state of the corpus, and downstream consumers find cards tagged with hubs that the viewer refuses to show.

The fix required two moves:

1. **Fix at the layer that produces the problem**: Near-copy deduplication and the `sourceRatio` coherence bar were enforced inside `rtz-discover` and `rtz-emerge` (`Layer 2`), before the viewer ever receives the graph.
2. **Surface provenance on the edge**: Instead of hiding how the automation decided to link two pieces, hovering an edge or inspecting a tag exposes its `sourceRatio`, its weight, and its `wasDerivedFrom` assertion chain. When an external RSS feed fails to fetch, the top bar does not fail silently or show a generic error modal; it serves the last known good copy with an explicit staleness badge (`topBar.staleAge`) showing the exact age of the cached state. The automation's boundaries become directly observable as ambient geometry.

This is observability in Christoffersen and Woods's sense, built into a renderer.

### D. Epistemic actions: "options, not questions" and "add before you override"

The most important breakthrough in `post-pipe`'s agent rules connects embodied interaction and **epistemic action** directly to how coding agents should handle design ambiguity ([Dourish](https://www.dourish.com/embodied/); [Kirsh and Maglio](https://philarchive.org/rec/KIRODE)).

Kirsh and Maglio found that Tetris players rotate and shift pieces not only to move them toward a goal but to uncover information that would be slow or error-prone to compute mentally; Kirsh later extended the account to external representations generally ([Kirsh](https://link.springer.com/article/10.1007/s00146-010-0272-8)). When a coding agent encounters an open threshold or design trade-off, such as what `sourceRatio` bar should filter discovered tags or whether near-copy grouping should use single-linkage chains (`chain`) or complete cliques (`all-pairs`), the default AI behavior is either to guess silently or to halt and ask the human a text question in chat.

Asking the human *"Should the source coherence threshold be 1.4 or 1.6?"* forces the human to simulate a high-dimensional graph projection inside their head, which is impossible without seeing it. `post-pipe` answered with two rules. **Rule 12 (`Add before you override`)** says that when the human asks to change something that works but is not perfect, the agent first asks whether the change should be a new option beside the existing one, and names the choices. **Rule 13 (`Options, not questions`)** says that when a choice is legitimately open, the agent neither picks for the human nor stops to ask; it builds the choice as a switchable option (such as the logarithmic `sourceRatio` coherence slider that updates visible card and tag counts in real time without a rebuild, or a `settings.json` key), picks a sensible default, and tells the human what the switch is called.

A question in chat burns the human's twenty-watt budget on blind speculation. A live slider on the canvas turns that same question into a two-second perceptual-motor experiment. In Christoffersen and Woods's terms, it makes the agent's open decision directable.

### E. The instruction layer has provenance too

The semantic-zoom incident had a second half that version 1.0 of this paper reported without drawing its consequence. After one agent invented the dot, another recorded the invention in persistent memory as the human's own rule. That is a provenance failure, and it happened on the channel between human and agent: the rules file and memory store that future agents load before they act.

`post-pipe`'s `CLAUDE.md` already practices the correction. Its newer rules carry the name of the person who decided them and the date (*"Harold, 2026-10-25"*). Rule 7, *Humans name things*, reserves naming to the human. Rule 14 names the agent-invented zoom notes and forbids citing them as his. **The conservation law that governs tag labels in the graph governs the rules file too: every rule an agent operates under must trace to a human decision.** Section 7 states it as a protocol rule.

---

## 4. Three vertices, three interfaces

Version 1.0 drew the agent as a vertex and gave it only rules. But the agent is a cognitive system with its own specification, and the semantic-zoom failure started there.

A coding agent perceives text, not pixels. It does not see the canvas it builds unless something renders the canvas into a form it can read. It carries no spatial memory between sessions beyond what files hold, and its working context is bounded. Where the domain's constraints are silent, it acts from training priors about what interfaces usually do, and in boilerplate web software, interfaces usually collapse detail at low zoom. The dot was not carelessness. It was a prior filling a gap the agent had no way to perceive.

EID's central move is to make a domain's invariants perceptible so that a cognitive system can act on them without computing them. Applied to the agent, that move produces checks the agent can run and read. `rtagz-labels-check.js` exits with an error when any rendered label lacks a traced origin. Builds measured against frozen feeds report exact structural diffs. Headless renders turn the canvas into images and counts the agent can inspect. **These are the agent's ecological interface.** They make the provenance invariant, the layer boundaries, and the visual result perceptible to the vertex that cannot see the screen.

The triad therefore has three interfaces, one on each edge:

- **Human and canvas: direct perception.** Landmarks persist at every scale, provenance is visible on inspection, and open choices become controls the hand can move.
- **Agent and codebase: executable invariants.** Checkers, frozen-input diffs, and headless renders make domain rules and visual results perceptible to the agent.
- **Human and agent: the instruction layer.** Rules files and memory carry decisions across sessions, and each rule carries who decided it and when.

<svg viewBox="0 0 760 470" width="100%" role="img" aria-label="The joint cognitive system as a triangle of three vertices (human cognitive system, coding agent, ecological interface and domain stack) joined by three interfaces: the instruction layer between human and agent, direct perception between human and canvas, and executable invariants between agent and canvas." style="display:block;max-width:720px;margin:1.5em auto">
  <rect x="12" y="12" width="736" height="446" rx="8" fill="none" stroke="var(--color-divider)" stroke-width="1"/>
  <text x="380" y="42" text-anchor="middle" style="font-family:var(--font-body);font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase" fill="var(--color-neutral-400)">Three vertices, three interfaces</text>
  <rect x="40" y="70" width="230" height="112" rx="6" fill="none" stroke="var(--color-accent)" stroke-width="1.8"/>
  <text x="155" y="96" text-anchor="middle" style="font-family:var(--font-body);font-size:13px;font-weight:600" fill="var(--color-text)">Human cognitive system</text>
  <text x="58" y="122" style="font-family:var(--font-body);font-size:11.5px" fill="var(--color-neutral-400)">20-watt metabolic ceiling</text>
  <text x="58" y="142" style="font-family:var(--font-body);font-size:11.5px" fill="var(--color-neutral-400)">Screen as spatial memory</text>
  <text x="58" y="162" style="font-family:var(--font-body);font-size:11.5px" fill="var(--color-neutral-400)">Perceives configuration fast</text>
  <rect x="490" y="70" width="230" height="112" rx="6" fill="none" stroke="var(--color-neutral-400)" stroke-width="1.5"/>
  <text x="605" y="96" text-anchor="middle" style="font-family:var(--font-body);font-size:13px;font-weight:600" fill="var(--color-text)">Coding agent</text>
  <text x="508" y="122" style="font-family:var(--font-body);font-size:11.5px" fill="var(--color-neutral-400)">Perceives text, not pixels</text>
  <text x="508" y="142" style="font-family:var(--font-body);font-size:11.5px" fill="var(--color-neutral-400)">No memory beyond files</text>
  <text x="508" y="162" style="font-family:var(--font-body);font-size:11.5px" fill="var(--color-neutral-400)">Priors fill silent rules</text>
  <rect x="200" y="318" width="360" height="114" rx="6" fill="none" stroke="var(--color-accent)" stroke-width="1.8"/>
  <text x="380" y="344" text-anchor="middle" style="font-family:var(--font-body);font-size:13px;font-weight:600" fill="var(--color-accent)">Ecological interface and domain stack</text>
  <text x="222" y="370" style="font-family:var(--font-body);font-size:11.5px" fill="var(--color-neutral-400)">Landmarks persist at every scale</text>
  <text x="222" y="390" style="font-family:var(--font-body);font-size:11.5px" fill="var(--color-neutral-400)">Open choices become live controls</text>
  <text x="222" y="410" style="font-family:var(--font-body);font-size:11.5px" fill="var(--color-neutral-400)">Every node and tag traces to a source</text>
  <line x1="270" y1="126" x2="490" y2="126" stroke="var(--color-neutral-400)" stroke-width="1.4" stroke-dasharray="4 4"/>
  <text x="380" y="116" text-anchor="middle" style="font-family:var(--font-body);font-size:11.5px;font-weight:600" fill="var(--color-text)">Instruction layer</text>
  <text x="380" y="146" text-anchor="middle" style="font-family:var(--font-body);font-size:10.5px" fill="var(--color-neutral-400)">rules carry who decided, and when</text>
  <line x1="155" y1="182" x2="270" y2="318" stroke="var(--color-accent)" stroke-width="1.8"/>
  <text x="36" y="246" style="font-family:var(--font-body);font-size:11.5px;font-weight:600" fill="var(--color-accent)">Direct perception</text>
  <text x="36" y="264" style="font-family:var(--font-body);font-size:10.5px" fill="var(--color-neutral-400)">and epistemic action</text>
  <line x1="605" y1="182" x2="490" y2="318" stroke="var(--color-neutral-400)" stroke-width="1.6"/>
  <text x="724" y="246" text-anchor="end" style="font-family:var(--font-body);font-size:11.5px;font-weight:600" fill="var(--color-text)">Executable invariants</text>
  <text x="724" y="264" text-anchor="end" style="font-family:var(--font-body);font-size:10.5px" fill="var(--color-neutral-400)">checks, diffs, headless renders</text>
</svg>

*Figure 1: The triad as three interfaces. The canvas keeps landmarks and provenance perceptible to the human; executable checks keep the domain's invariants perceptible to the agent, which cannot see the screen; the instruction layer keeps every rule traceable to the human who decided it. The agent is an author on two of the three edges, which is what makes the system reflexive.*

---

## 5. The reflexive loop

In classical cognitive systems engineering, the automation and its display were built by designers and stayed separate in operation. A flight management system did not redesign the cockpit display through which the crew monitored it. In agentic coding that separation is gone. The agent writes the canvas, the canvas shapes the human's model of the system, and the agent writes the rules that govern future agents' work on both.

The semantic-zoom incident crossed all three edges in sequence. An agent changed the canvas; the change removed the human's landmarks; a second agent wrote the change into the instruction layer under the human's name. Each later correction closes one of those edges. Rule 14 restores the landmark on the canvas. The provenance checker and frozen-feed measurements make the agent's output inspectable by the agent itself. Dated, attributed rules keep the instruction layer honest about who decided what.

Bainbridge's irony sharpens the stakes ([Bainbridge](https://doi.org/10.1016/0005-1098%2883%2990046-8)). As the agent writes more of the system, the human holds less of its internal model, and the canvas becomes the main place where the human's model is kept current. An agent free to simplify that canvas is free to degrade the instrument its own supervision depends on. **The more of the code the agent writes, the more the joint system rests on the honesty of the canvas.**

---

## 6. Controls accumulate

Two of `post-pipe`'s rules pull against the twenty-watt budget they were written to protect. *Options, not questions* turns every legitimately open choice into a control. *Add before you override* keeps every working view until the human retires it. Together they define a path for adding controls and no path for retiring them. Each slider, toggle, and parallel view is itself something to perceive, and the surface only grows.

This is the training paradox from Section 2 returning as accretion. For the person who built the domain's grammar, a dense control surface stays legible longer than it would for anyone else. For a second user it becomes the DURESS problem. Over enough months it taxes even its author.

A control also still carries a choice. When an agent converts the question *"1.4 or 1.6?"* into a slider, it has decided which dimension became adjustable, over what range, on what scale, and with what default. The prior that would have shaped a guessed answer now shapes which axes exist. **Options, not questions moves the agent's judgment from the answer to the selection of axes, and that selection has to be visible too.**

The protocol answers both pressures the way `post-pipe` answers provenance: with a record. Each control and each parallel view an agent adds gets an entry stating what it adjusts, its range and default, why it was exposed, and whether the human has kept it, retired it, or not yet decided. Retirement, like naming, is the human's decision. The record makes the pending decisions visible instead of letting them pile up unseen.

---

## 7. An operating protocol for agentic coding

An architect cannot simply tell a language model to "use EID." Models trained on boilerplate web software default to hiding state in dropdowns, collapsing nodes at arbitrary zoom levels, and patching data bugs in CSS. The principles of this lineage have to be compiled into behavioral invariants inside the repository's instruction file (`AGENTS.md`, `CLAUDE.md`, or its equivalent).

The protocol has two parts. The first is a specification of the human half, which differs for every repository because the human differs. The second is nine rules. Six of them (2, 5, 6, 7, 8, and 9) are domain-general and transfer to any codebase. Three (1, 3, and 4) state general principles whose concrete form depends on the human-half specification; `post-pipe`'s versions are fitted to one perceptual profile. Each rule names its origin, as Rule 8 requires, and says plainly when a rule is proposed here rather than already adopted. The section is written to be copied from this paper's source file into a repository as it stands.

### The human half

Before the rules, the instruction file describes the person the system serves, in that person's own words: how they perceive and read (whether they hold mental imagery after the screen hides something, whether they read prose or scan lists, whether they listen through a screen reader or text-to-speech), what must never leave the screen, who names things, and which decisions stay with them. An agent cannot design for a joint cognitive system whose human half is undocumented, and a generic "user" is not a specification.

### The rules

1. **Design for the joint cognitive system.** Treat the human's working memory and visual cortex as a bounded resource and the screen as externalized spatial memory, as described in the human-half specification. Never hide structural relationships, active filters, or mode states behind memory requirements. If a constraint or threshold is active, its boundary and the number of items it excludes are visible on the surface. *Origin: Hollnagel and Woods; [[the-twenty-watt-watch]].*
2. **Fix at the layer that produces the problem.** Keep domain data, conservation and provenance rules, projection lenses, and renderers in separate layers. Never mask a domain or ingestion defect in the renderer. Every rendered node, edge, or label traces to a source artifact; if junk appears, fix the upstream filter rather than hiding it in the interface. *Origin: `post-pipe`'s `rosetta-tagz` deduplication; Vicente's abstraction hierarchy.*
3. **Preserve local identity and global configuration across scale.** Never invent semantic-zoom or responsive heuristics that strip an object's identity when the view changes scale. In `post-pipe` this is *Cards never disappear*: at every zoom a card is drawn with its title. *Origin: `post-pipe` `CLAUDE.md` Rule 14 (Harold, 2026-10-31); Bennett and Flach.*
4. **Options, not questions.** When a threshold, layout parameter, or grouping method is legitimately open, do not pick silently and do not stop to ask in prose. Build it as a live control or a declared configuration switch, choose a sensible default, and report the switch's name, the axis it exposes, its range, and why that axis was chosen. Names that reach the interface or documentation are the human's to choose. *Origin: `post-pipe` `CLAUDE.md` Rule 13 (Harold, 2026-10-31) and Rule 7; Kirsh and Maglio; directability in Christoffersen and Woods.*
5. **Add before you override, and record what awaits retirement.** Never replace a working view, command, or mode when adding a new one; offer the new behavior beside the baseline until the human retires the old one. Keep a record of every control and parallel view an agent has added, with its purpose, default, and status (kept, retired, or awaiting the human's decision), and surface the pending entries. *Origin: `post-pipe` `CLAUDE.md` Rule 12 (Harold, 2026-10-25). The record is proposed in this paper and not yet adopted in `post-pipe`.*
6. **Make automation provenance and boundaries observable.** Whenever a pipeline derives a tag, clusters items, or falls back to cached state, expose the reason on inspection: rule, weight, threshold, and cache age. Represent relationships as edges carrying provenance, never as unexamined scores. *Origin: `post-pipe`'s `rosetta-tagz` provenance and staleness badge; observability in Christoffersen and Woods; Sarter, Woods, and Billings.*
7. **Verify before and after on frozen inputs.** Before claiming a change improved the system, run the old and new builds against identical frozen inputs and report the structural diff: counts, labels, and headless renders. The human evaluates evidence rather than assurances, and the evidence keeps the human's model current as the agent writes more of the system. *Origin: `post-pipe`'s practice of measuring changes on frozen feeds; Bainbridge.*
8. **Every rule traces to a human decision.** Each rule in the instruction file carries who decided it and when. An agent never records its own heuristic in a rules file or memory store as the human's. When a rule of agent origin is found, it is named as such and retracted, as `post-pipe`'s Rule 14 does for the old zoom notes. *Origin: `post-pipe`'s dated, attributed rules and Rule 14. Stated as a standalone rule in this paper and not yet adopted as one in `post-pipe`.*
9. **Make the domain's invariants perceptible to the agent.** The agent does not see the canvas. Encode conservation and provenance rules as checks the agent runs and reads (a provenance checker that exits with an error on any untraced label, frozen-input diffs, headless renders), so that the agent perceives a violated invariant the way the human perceives a missing landmark. *Origin: `post-pipe`'s `rtagz-labels-check.js`. Proposed as a rule in this paper and not yet adopted in `post-pipe`.*

Bound by these rules, a coding agent preserves landmarks, keeps the domain layer honest, exposes provenance on every edge, hands the human live controls instead of prose questions, keeps a visible record of what those controls cost, and cannot quietly write its own preferences into the human's rulebook. When it leaves behind a deterministic check or a live control, it stops burning shit-tons of silicon tokens on a problem that a human hand and eye can settle in two seconds.

---

## 8. The short version

Cognitive Systems Engineering made the joint human-machine system its unit of analysis in 1983, and Ecological Interface Design grew inside that program: map a domain's purpose and conservation laws across an abstraction hierarchy, then project them onto visible geometry so the human can steer by perception instead of calculation. Four pressures on the 1992 formulation (training overhead, intentional domains, sequential flow, and automation the operator cannot see into) drove elaboration within CSE, not a migration into it. In agentic coding the joint system is a triad of human, canvas, and agent, joined by three interfaces: direct perception between human and canvas, executable invariants between agent and codebase, and an instruction layer between human and agent whose rules carry their provenance. Its new property is reflexive, because the agent builds the instrument through which it is supervised. The protocol keeps each interface honest, records the controls it adds so the surface does not silently outgrow the twenty-watt budget, and makes every rule trace to a human decision.

---

## Works Cited

- Bainbridge, Lisanne. ["Ironies of Automation."](https://doi.org/10.1016/0005-1098%2883%2990046-8) *Automatica*, vol. 19, no. 6, 1983, pp. 775–779. *Elsevier*.
- Bennett, Kevin B., and John M. Flach. [*Display and Interface Design: Subtle Science, Exact Art*](https://www.routledge.com/Display-and-Interface-Design-Subtle-Science-Exact-Art/Bennett-Flach/p/book/9781420064384). CRC Press, 2011. *Routledge*.
- Burns, Catherine M., and John R. Hajdukiewicz. [*Ecological Interface Design*](https://www.routledge.com/Ecological-Interface-Design/Burns-Hajdukiewicz/p/book/9780415283748). CRC Press, 2004. *Routledge*.
- Christoffersen, Klaus, and David D. Woods. ["How to Make Automated Systems Team Players."](https://www.emerald.com/books/edited-volume/12728/chapter/83052182/1-How-to-make-automated-systems-team-players) *Advances in Human Performance and Cognitive Engineering Research*, vol. 2, Emerald, 2002, pp. 1–12. *Emerald*.
- Dourish, Paul. [*Where the Action Is: The Foundations of Embodied Interaction*](https://www.dourish.com/embodied/). MIT Press, 2001. *Paul Dourish Author Archive*.
- Hollnagel, Erik, and David D. Woods. ["Cognitive Systems Engineering: New Wine in New Bottles."](https://doi.org/10.1016/S0020-7373%2883%2980034-0) *International Journal of Man-Machine Studies*, vol. 18, no. 6, 1983, pp. 583–600. *Elsevier*.
- ---. [*Joint Cognitive Systems: Foundations of Cognitive Systems Engineering*](https://www.routledge.com/Joint-Cognitive-Systems-Foundations-of-Cognitive-Systems-Engineering/Hollnagel-Woods/p/book/9780849328213). CRC Press, 2005. *Routledge*.
- Kirsh, David. ["Thinking with external representations."](https://link.springer.com/article/10.1007/s00146-010-0272-8) *AI & Society*, vol. 25, no. 4, 2010, pp. 441–454. *Springer Nature Link*.
- Kirsh, David, and Paul P. Maglio. ["On Distinguishing Epistemic from Pragmatic Action."](https://philarchive.org/rec/KIRODE) *Cognitive Science*, vol. 18, no. 4, 1994, pp. 513–549. *PhilArchive*.
- Klein, Gary, et al. ["Ten Challenges for Making Automation a 'Team Player' in Joint Human-Agent Activity."](https://doi.org/10.1109/MIS.2004.74) *IEEE Intelligent Systems*, vol. 19, no. 6, 2004, pp. 91–95. *IEEE*.
- Sarter, Nadine B., David D. Woods, and Charles E. Billings. "Automation Surprises." *Handbook of Human Factors and Ergonomics*, 2nd ed., edited by Gavriel Salvendy, Wiley, 1997.
- Vicente, Kim J. [*Cognitive Work Analysis: Toward Safe, Productive, and Healthy Computer-Based Work*](https://www.routledge.com/Cognitive-Work-Analysis-Toward-Safe-Productive-and-Healthy-Computer-Based-Work/Vicente/p/book/9780805823974). Lawrence Erlbaum Associates, 1999. *Routledge*.
- Vicente, Kim J., and Jens Rasmussen. ["Ecological Interface Design: Theoretical Foundations."](https://doi.org/10.1109/21.156574) *IEEE Transactions on Systems, Man, and Cybernetics*, vol. 22, no. 4, 1992, pp. 589–606. *IEEE Xplore*.

---

## Contribution

**Human:** the research brief tracing Ecological Interface Design from Vicente and Rasmussen through its counter-arguments to Bennett and Flach, Hollnagel and Woods, and Dourish and Kirsh; the core insistence that software and agentic workflows must be designed as a **joint cognitive system** that explicitly accounts for the human cognitive architecture; the hard-won engineering rules forged during the development of `post-pipe` (*"cards never disappear"*, *"options, not questions"*, *"add before you override"*, *"fix at the layer that produces the problem"*, and the practice of dating and attributing rules); and the call for a second version after review.

**Machine:** the structural mapping between Vicente's Abstraction Hierarchy and `post-pipe`'s eight-layer decomposition, the synthesis of epistemic action with `CLAUDE.md`'s rule against prose guessing, the compilation of the protocol, the diagram, and citation verification. In version 2.0: the review that found the reversed lineage and the unmarked four-mode taxonomy, the reading of the triad as three interfaces with the agent's own ecological interface, the analysis of control accretion, the human-half specification, Rules 8 and 9, and verification of the six added sources.

**Neither, exactly:** the rules in Section 7 were not deduced from academic literature and then applied to `post-pipe`, nor were they invented in `post-pipe` in ignorance of the literature. The human arrived at rules like *"options, not questions"* and *"cards never disappear"* by defending his own perceptual-cognitive system against agent anti-patterns in live production, and only afterward noticed that four decades of Cognitive Systems Engineering had arrived at the same theorems from the other side of the mountain. Version 1.0 then demonstrated the paper's thesis on itself. A lineage claim that reversed the field's chronology, EID "evolving into" CSE, entered the paper without a traced source, and it was caught on a different edge of the triad, when the finished paper came back to a machine reader for review. Version 2.0 is Rule 8 applied to the paper: the claim was traced, found to have no source, and retracted by name.

*Donated to the commons.*
