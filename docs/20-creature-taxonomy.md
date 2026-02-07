# Creature Taxonomy

> **Source:** Adapted from SMARS design documents. Layers on PF2e's existing trait system without disrupting stat blocks or balance.

## Overview

The SMARS creature taxonomy provides a **compositional hierarchy** that makes trait assignment structured rather than ad hoc. PF2e already uses traits extensively -- this contribution is a formal tree structure that gives GMs a consistent framework for assigning them.

## Simple Creatures

Simple Creatures exist only in Physical space. They have only Physical abilities (Strength, Dexterity, Constitution) -- or at minimum, their Mental abilities are negligible. Three categories:

### Elementals

Beings of pure elemental matter. Subtypes: **Fire, Air, Water, Earth**.

An Elemental is the most basic form of animated matter -- Aether condensed into a single state and given motion. A fire elemental is animated plasma. An earth elemental is animated solid matter.

### Plants

Living organisms rooted in elemental matter. Subtypes: **Photosynthetic, Parasitic, Carnivorous, Fungus**.

Plants represent the first step beyond raw elemental matter -- organized biological structures that process energy but lack mobility or sapience.

### Animals

Mobile living organisms. Subtypes: **Reptile, Bird, Fish, Mammal**.

Animals are the most complex Simple Creatures -- mobile, responsive, capable of instinct and learned behavior, but lacking the Mental dimension bridge that would make them sapient.

## Complex Creatures

Complex Creatures exist at the intersection of Physical and Mental space. They have all six abilities. Three categories:

### Humanoids

Sapient bipedal creatures. May have no Simple subtypes (e.g., Humans) or may incorporate them (ancestry-dependent). Most player ancestries are Humanoids.

### Constructs

Sapient beings assembled from Simple matter. Defined by their component Simple types. A Warforged is a Construct with Elemental subtypes Earth and Fire -- its material nature determines its resistances and thematic flavor.

### Chimeras

Sapient beings combining multiple Simple creature types. A Dragon is a Chimera with Animal subtypes Reptile and Bird, plus an Elemental subtype for its breath weapon.

## Trait Cascading

Every creature carries traits derived from its type hierarchy. The full trait set is determined by walking the tree:

**Example: A fire-breathing wyvern**
1. Category: Complex -> Chimera
2. Simple components: Animal [Reptile, Bird] + Elemental [Fire]
3. Full trait list: **Chimera, Animal, Reptile, Bird, Elemental, Fire**

**Example: A treant**
1. Category: Simple -> Plant -> Photosynthetic
2. Full trait list: **Plant, Photosynthetic**

**Example: A flesh golem**
1. Category: Complex -> Construct
2. Simple components: Animal [Mammal]
3. Full trait list: **Construct, Animal, Mammal**

Each trait can be mechanically referenced by spells, abilities, and items (e.g., "affects Animals" is broader than "affects Reptiles").

## PF2e Integration

### Backward Compatibility

Existing PF2e creatures can be retroactively classified without changing stat blocks:

| PF2e Creature | Taxonomy Classification | Trait Set |
|--------------|------------------------|-----------|
| Fire Elemental | Simple -> Elemental -> Fire | Elemental, Fire |
| Wolf | Simple -> Animal -> Mammal | Animal, Mammal |
| Treant | Simple -> Plant -> Photosynthetic | Plant, Photosynthetic |
| Hill Giant | Complex -> Humanoid | Humanoid |
| Iron Golem | Complex -> Construct -> Elemental [Earth] | Construct, Elemental, Earth |
| Young Red Dragon | Complex -> Chimera -> Animal [Reptile, Bird] + Elemental [Fire] | Chimera, Animal, Reptile, Bird, Elemental, Fire |
| Dryad | Complex -> Chimera -> Plant [Photosynthetic] + Humanoid | Chimera, Humanoid, Plant, Photosynthetic |

### Benefits Over Flat Traits

- **Consistency:** Two different GMs building a similar creature arrive at similar trait sets instead of guessing.
- **Mechanical hooks:** Spells and abilities can target at any level of the hierarchy. "Affects Animals" is broader than "affects Reptiles" -- this is already how PF2e traits work, but the taxonomy gives it a formal tree.
- **Compositional Constructs:** A Construct's Simple components define what it's made of, driving resistances, vulnerabilities, and thematic flavor.
- **Design guidance:** Simple Creatures should lean heavily on physical stats with minimal mental stat investment, reinforcing the lore that they exist only in Physical space.

### What This Doesn't Change

- Stat blocks remain PF2e standard. The taxonomy adds classification metadata, not new mechanical numbers.
- PF2e's existing creature traits (e.g., Mindless, Incorporeal) continue to function as-is alongside the taxonomy traits.
- The taxonomy is a tool for GMs building homebrew creatures and a classification aid for existing ones -- it's not a mandatory system.

## Open Questions

- Should the taxonomy traits interact mechanically with any existing spells or abilities beyond what PF2e traits already provide?
- How does the Undead category fit? Undead are Complex (once sapient) but have lost their Mental dimension bridge. Possible classification: Complex -> Humanoid with the Undead trait as a modifier that overrides the Mental dimension.
- Fey, Fiends, Celestials -- where do extraplanar creatures fit? These may need a third space beyond Physical and Mental, or may be classified as Complex Creatures with unique dimensional origins.
- See [Open Questions](18-open-questions.md) for the full list.
