---
title: Squash the triangle — an argument for teaching invariance before number
version: 3.0
audience: curriculum designers, educational researchers
license: donated to the commons
tags: [pedagogy, mathematics-education, graph-theory, invariance, curriculum, whitepaper]
links: ["[[topothink]]", "[[structure-before-number]]", "[[sandboxes-to-vector-spaces-structural-review]]"]
date: 2026-09-07
summary: Early mathematics teaches counting first because our tradition does, not because counting is simple. This argues for putting invariance first — clay, wire, pegboards — and makes the rigid/deformable comparison the load-bearing lesson rather than an aside.
references: ["Euler 1736 — Seven Bridges of Königsberg", "Klein 1872 — Erlangen Program", "Poincaré — on naming different things alike", "Froebel — the gifts", "Montessori — sensorial materials", "Papert 1980 — Mindstorms", "Van Hiele — levels of geometric reasoning", "Spelke — core knowledge systems", "Dehaene — the number sense"]
---

# Squash the triangle

## An argument for teaching invariance before number

---

In the 1700s the people of Königsberg had a puzzle. Seven bridges crossed the river through their town, and the question was whether you could walk a route that crossed each one exactly once. People tried it the obvious way: on foot, repeatedly, on Sundays.

Euler solved it in 1736 by throwing the town away. He kept the landmasses and which bridges joined which, and discarded everything else — the distances, the shapes of the banks, the river itself. What was left was four dots and seven lines, and with the town gone the answer fell out immediately. No such walk exists.

That move — dropping almost everything and finding that the answer was never in the dropped part — is the beginning of topology. It is also something a five-year-old can do with their hands, and this paper is about giving them the chance.

---

## 1. What's actually wrong

The usual complaint is that early mathematics is too abstract. Close, but not quite.

Counting is not simple. To say a pile has "five," a child has to match it against a standard set, one to one, and then hold the result as a property of the pile rather than of the matching. That is a real structural feat. We teach it first because it comes first in our tradition, not because it is easy. We just no longer remember it being hard.

Meanwhile, the things children do fluently before they arrive — moving through a room, stacking, joining, finding out what a thing will and won't do — are exactly the things that carry the heaviest load later. Degrees of freedom. Connection. Arrangement. Not advanced topics. The ones we postpone longest.

The bill comes due around age fifteen. A student meets $v = \Delta x / \Delta t$ and reads symbols to be rearranged, rather than a point allowed to move one way. A student meets a matrix and sees a grid of numbers, not an operation on an arrangement. The intuition that would have made both obvious has been sitting unused for a decade, and by then it doesn't get picked back up so much as re-derived from scratch, painfully, by the minority who persist.

---

## 2. Three things to build

### A. Movement under constraint

A dimension is how many independent ways a thing is allowed to move. Children meet this as a physical fact, not a definition.

- A bead glued into a block. It doesn't move.
- A bead on a taut wire. Forward and back, and that's the lot.
- A puck on a smooth board. Two ways.
- A ball in the air. Three.

The lesson isn't the count. It's that something is permitted and something is forbidden, and you can *feel* which — the wire pushes back.

### B. Networks that bend

Clay balls and toothpicks. Three balls joined by three sticks make a triangle. Add a fourth ball above and three more sticks and you have a tetrahedron, which children will discover is the first shape that refuses to go flat.

Then the important part. Pick it up and squash it.

> A child flattens her triangle against the table. Something has obviously happened to it. *Is it still a triangle?* She says yes, immediately, and cannot say why. *What changed?* The sides got longer. *What didn't?*
> 
> Long pause.
> 
> Three balls. Three sticks. One hole in the middle.

That pause is the whole curriculum. It is also, roughly, where topology came from — she has just done to her triangle what Euler did to Königsberg, and she got there in about four seconds with clay under her fingernails.

### C. Rows, columns, and stacks

A pegboard, three rows by four columns, holds twelve pegs. Turn it ninety degrees: still twelve. Stack a second board on top and the arrangement now needs three numbers to describe instead of two.

This gives a child *rank* — how many numbers it takes to find a spot — and *index* — which spot. That is precisely what's missing when a student first meets a matrix and freezes.

It does not give them tensors, and we should resist saying so. A tensor is defined by how it behaves when you change coordinates, and no pegboard shows that. Rank and index are enough. They're also the part that survives the trip to grade eleven.

---

## 3. The question underneath

Modules A and B are not the same kind of space, and the gap between them is the most valuable thing on offer here.

In A, rigidity *is* the content. Let the wire bend and the lesson dissolves. Distance is real, and measurable, and the point.

In B, rigidity is beside the point. Stretch the network into any shape you like and it remains the same network. Distance carries no information whatsoever.

Hand a child both without the comparison and they've had two nice afternoons. Ask them to compare, and they're holding the question that organises everything downstream: **which properties survive the change, and which don't?**

This is not a pedagogical hunch. In 1872 Felix Klein proposed that a geometry simply *is* the study of what stays fixed under some group of transformations — that the way to tell geometries apart is to ask what each one refuses to give up. Mathematics agreed and has worked that way ever since. Then we went into the classroom and taught children the names of shapes.

Poincaré put the companion half of it more bluntly: *mathematics is the art of giving the same name to different things.* Three triangles of wildly different shape, one name. The child in §2B has already done it. She just hasn't been told it counts.

<svg width="100%" viewBox="0 0 680 360" role="img" xmlns="http://www.w3.org/2000/svg" style="max-width:680px"><title>Two kinds of space</title><desc>A bead locked on a wire, beside the same three-node network drawn three different ways.</desc>
<defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="var(--color-neutral-400)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>
<text x="180" y="40" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="14" font-weight="500" fill="var(--color-text)">space you're locked into</text>
<text x="500" y="40" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="14" font-weight="500" fill="var(--color-text)">space you can stretch</text>
<rect x="40" y="56" width="280" height="200" rx="12" fill="none" stroke="var(--color-neutral-800)" stroke-width="0.5" stroke-dasharray="4 4"/>
<rect x="360" y="56" width="280" height="200" rx="12" fill="none" stroke="var(--color-neutral-800)" stroke-width="0.5" stroke-dasharray="4 4"/>
<line x1="80" y1="125" x2="80" y2="175" stroke="var(--color-neutral-400)" stroke-width="3" stroke-linecap="round"/>
<line x1="280" y1="125" x2="280" y2="175" stroke="var(--color-neutral-400)" stroke-width="3" stroke-linecap="round"/>
<line x1="80" y1="150" x2="280" y2="150" stroke="var(--color-neutral-400)" stroke-width="1.5"/>
<circle cx="170" cy="150" r="11" fill="var(--color-accent)" stroke="var(--color-bg)" stroke-width="1"/>
<line x1="150" y1="180" x2="115" y2="180" stroke="var(--color-neutral-400)" stroke-width="1.5" marker-end="url(#ar)"/>
<line x1="190" y1="180" x2="225" y2="180" stroke="var(--color-neutral-400)" stroke-width="1.5" marker-end="url(#ar)"/>
<line x1="170" y1="132" x2="170" y2="112" stroke="var(--color-neutral-500)" stroke-width="0.5" stroke-dasharray="3 3"/>
<text x="170" y="104" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="12" fill="var(--color-neutral-400)">&#215;</text>
<text x="180" y="220" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="12" fill="var(--color-neutral-400)">only one thing can change</text>
<text x="180" y="238" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="12" fill="var(--color-neutral-400)">the constraint is the whole lesson</text>
<line x1="400" y1="185" x2="440" y2="185" stroke="var(--color-neutral-400)" stroke-width="1.5"/>
<line x1="400" y1="185" x2="420" y2="145" stroke="var(--color-neutral-400)" stroke-width="1.5"/>
<line x1="440" y1="185" x2="420" y2="145" stroke="var(--color-neutral-400)" stroke-width="1.5"/>
<circle cx="400" cy="185" r="5" fill="var(--color-accent-300)" stroke="var(--color-bg)" stroke-width="1"/>
<circle cx="440" cy="185" r="5" fill="var(--color-accent-300)" stroke="var(--color-bg)" stroke-width="1"/>
<circle cx="420" cy="145" r="5" fill="var(--color-accent-300)" stroke="var(--color-bg)" stroke-width="1"/>
<line x1="468" y1="185" x2="548" y2="185" stroke="var(--color-neutral-400)" stroke-width="1.5"/>
<line x1="468" y1="185" x2="524" y2="163" stroke="var(--color-neutral-400)" stroke-width="1.5"/>
<line x1="548" y1="185" x2="524" y2="163" stroke="var(--color-neutral-400)" stroke-width="1.5"/>
<circle cx="468" cy="185" r="5" fill="var(--color-accent-300)" stroke="var(--color-bg)" stroke-width="1"/>
<circle cx="548" cy="185" r="5" fill="var(--color-accent-300)" stroke="var(--color-bg)" stroke-width="1"/>
<circle cx="524" cy="163" r="5" fill="var(--color-accent-300)" stroke="var(--color-bg)" stroke-width="1"/>
<line x1="578" y1="188" x2="616" y2="176" stroke="var(--color-neutral-400)" stroke-width="1.5"/>
<line x1="578" y1="188" x2="598" y2="128" stroke="var(--color-neutral-400)" stroke-width="1.5"/>
<line x1="616" y1="176" x2="598" y2="128" stroke="var(--color-neutral-400)" stroke-width="1.5"/>
<circle cx="578" cy="188" r="5" fill="var(--color-accent-300)" stroke="var(--color-bg)" stroke-width="1"/>
<circle cx="616" cy="176" r="5" fill="var(--color-accent-300)" stroke="var(--color-bg)" stroke-width="1"/>
<circle cx="598" cy="128" r="5" fill="var(--color-accent-300)" stroke="var(--color-bg)" stroke-width="1"/>
<text x="500" y="220" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="12" fill="var(--color-neutral-400)">same three balls, same three sticks</text>
<text x="500" y="238" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="12" fill="var(--color-neutral-400)">3 corners, 3 links, 1 enclosed space</text>
<rect x="40" y="276" width="600" height="58" rx="8" fill="var(--color-surface)" stroke="var(--color-neutral-400)" stroke-width="0.5"/>
<text x="340" y="300" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="14" font-weight="500" fill="var(--color-text)">the lesson is the difference between these two panels</text>
<text x="340" y="321" text-anchor="middle" font-family="Inter, system-ui, sans-serif" font-size="12" fill="var(--color-neutral-400)">ask a child: what changed, and what stayed the same?</text>
</svg>

*Figure 1. On the left, the constraint is everything: the bead has one way to go. On the right, the shape is nothing: three balls and three sticks stay the same network however you bend them. The curriculum is the comparison, not either panel.*

---

## 4. Where this has stood before, and what happened

Froebel's gifts and Montessori's materials put structure into children's hands a century ago without the vocabulary to name what they'd put there. Papert's *Mindstorms* made the sharper case — that geometry learned through your own body is learned differently — and remains the nearest prior statement of this argument. Van Hiele supplied a sequence for geometric reasoning that any implementation should be checked against. And developmental work on early cognition (Spelke, Dehaene) finds number and spatial geometry running on separate early systems, with number sense approximate rather than symbolic. That last is the strongest support this proposal has, and unlike the rest of it, it's empirical.

The cautionary tale is equally on record. New Math put abstract structure first in the 1960s and collapsed. Not because the structure was beyond the children — it wasn't — but because it was beyond the preparation given to teachers and beyond what parents could recognise as mathematics at the kitchen table. §3 in particular asks a teacher to hold rigid constraint and deformation invariance in mind at the same time and then stage the collision between them on purpose. That is a genuinely demanding thing to ask of an adult, and it is the true cost of this programme. Cost it honestly or repeat 1965.

---

## 5. What gets built on it

| Stage       | Already in hand                       | What it becomes                                                                                                                     |
| ----------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Grades 1–4  | movement along a constraint; networks | adding and subtracting as movement along a line; multiplying as rows and columns; routing and scheduling puzzles                    |
| Grades 5–8  | rank, index, invariance               | coordinates as addresses; slope as direction; functions as things that move a grid; centre and spread from scattered points         |
| Grades 9–12 | all of it                             | motion in one dimension as a point on a constraint; matrices as operations on arrangements; limits as the spacing shrinking to zero |

Nothing in that table is a new kind of object. Each row hands notation to something the student has already been doing since they were five.

---

## 6. How we would know

Everything above is a hypothesis with one load-bearing assumption: that intuition built at five is still available, and correctly filed, at fifteen. Nobody has shown that. Four measurements would.

1. **Transfer.** At grade 6, trained cohorts beat controls on unfamiliar graph-structured problems that look nothing like clay and toothpicks. If the advantage only shows up on tasks that resemble the materials, nothing transferred and the thesis is wrong.
2. **Retention.** At grade 4, with no instruction in between, students can still answer what changed and what stayed the same when a network is deformed.
3. **Arithmetic cost.** At grade 3, computational fluency is not below controls. If structure is bought with fluency, say the price out loud rather than discovering it in year four.
4. **Teacher fidelity.** Implementation quality of §3 plotted against teacher preparation hours. If fidelity demands substantial preparation, this is a teacher-development programme with a curriculum attached — which is a fine thing to be, but it should be funded as what it is.

---

## 7. The short version

Mathematicians settled a century and a half ago on what geometry is about: the things that don't move when everything else does. Children get taught the names of shapes and are told the interesting part later, if they last.

The interesting part fits in a fist. Squash the triangle. Ask what's still true.

---

## Contribution

**Human:** the thesis, the sequencing, and the call to make the rigid/deformable comparison the load-bearing element rather than an aside.

**Machine:** drafting, structuring, the figure.

**Neither, exactly:** an earlier draft was written under an instruction to keep the language simple. Simplification eats qualifiers first — and qualifiers are where accuracy is kept — so the draft came back more confident and less correct, including a claim that pegboards are tensors, since withdrawn. A register instruction turns out to be an epistemic one wearing a friendly coat. Noted here because the standard two-column contribution statement has nowhere to put it, and because it seems worth knowing.

*Donated to the commons.*
