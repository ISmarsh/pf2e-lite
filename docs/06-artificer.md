# Artificer

## Identity

INT arcane-empowered crafter. The system's best crafter — combat, exploration, and downtime all flow through the Crafting skill. Modeled on PF2e Inventor and Alchemist chassis: defined by preparation, production, and Crafting expertise, not by spellcasting.

## Design Sources

- **Inventor** — Tamper, Crafting proficiency auto-scaling (Expert Overdrive / Master Overdrive model), Overdrive (→ Innovator subclass)
- **Alchemist** — Advanced Alchemy daily prep model, consumable batch production, versatile vials (→ Alchemist subclass)
- **Gadget + Snare items** (Guns & Gears Remastered, Player Core 2) — Clockwork/mechanical devices and traps, merged under unified "gadget" category (→ Gadgeteer subclass)
- **Original infusion design** — Qualitative equipment enhancements (→ Enchanter subclass, see [06a](06a-artificer-infusions.md) for backup drafts)

## Base Class Proficiencies

| Stat | Proficiency | Notes |
|------|-------------|-------|
| **Key Attribute** | INT | |
| **HP** | 8 + CON | Matches Inventor, Alchemist, Thaumaturge |
| **Perception** | Trained | Matches Inventor, Alchemist |
| **Fortitude** | Expert | |
| **Reflex** | Trained | Inventor save profile |
| **Will** | Expert | |
| **Simple Weapons** | Trained | |
| **Martial Weapons** | Trained | |
| **Unarmed Attacks** | Trained | |
| **Light Armor** | Trained | |
| **Medium Armor** | Trained | |
| **Unarmored Defense** | Trained | |
| **Artificer Class DC** | Trained | |
| **Skills** | Crafting + 3 + INT | Matches Inventor |

## Universal Base Class Features (L1-10)

### Level 1

- **Tamper** (1 action, manipulate) — Requires a free hand. Choose a weapon held or armor worn by an enemy within your reach. Crafting check vs. target's Reflex DC. Ported from Inventor (L1 feat in PF2e, promoted to base feature here). The Artificer's repeatable in-combat action, paralleling Champion's Reaction, Hunt Prey, and Exploit Vulnerability.
  - **Critical Success:** Weapon: -2 circumstance penalty to attack and damage rolls. Armor: target is flat-footed and takes -10 ft speed penalty. Lasts until target uses Interact to remove.
  - **Success:** Same effects, but ends at the end of your next turn.
  - **Failure:** No effect.
  - **Critical Failure:** Backfire — you take fire damage equal to your level.
- **Formula Book** — Starts with common item formulas. Gains 2 formulas per level. Subclass determines which specialty crafting category is accessible.
- **Subclass Feature** — Choose Alchemist, Innovator, Gadgeteer, or Enchanter. Determines production category and grants relevant specialty crafting feat.
- **Artificer Feats** — 1st level and every even level.

### Level 3

- **Expert Crafting** — Crafting → Expert. Follows Inventor's Expert Overdrive model. Also unlocks Quick Repair and Field Crafting via [Crafting](14-crafting.md) proficiency auto-unlocks. Improves Tamper checks.

### Level 5

- **Artificer Weapon Expertise** — Simple, martial, unarmed → Expert. Standard empowered class timing.
- **Reflex Expertise** — Reflex → Expert. Pairs with weapon training as a general combat competence bump.

### Level 7

- **Master Crafting** — Crafting → Master. Follows Inventor's Master Overdrive model. Unlocks Efficient Crafting auto-unlock. Crafting time drops to 1 day. Further improves Tamper.
- **Weapon Specialization** — Standard (+2 damage with expert weapons).
- **Vigilant Senses** — Perception → Expert. Matches Ranger's Alertness timing (L9 in PF2e, but Ranger gets Perception Master at L7). The Artificer's workshop awareness translates to field awareness at high levels.

### Level 9

- **Artificer Expertise** — Class DC → Expert. Standard empowered class timing.
- **Resolve** — Will → Master. Grants mental resilience expected at high levels. Thaumaturge gets Will Master at L7, Champion gets Fort Master at L9. The Artificer's arrives at L9 — later than Thaumaturge, same timing as Champion.

### Focus Spells — Arcwright Spells

No focus spells at base. Arcane focus spells ("arcwright spells") available through class feats, following Ranger's warden spell model — the magical crafter is implicitly magical, but active spellcasting is opt-in. Parallel: Ranger and Thaumaturge also gate focus spells behind feats.

**Naming:** Arcwright = arcane + wright (craftsperson). The subset of Artificers who channel arcane energy through their creations rather than relying on purely mundane craftsmanship. Parallel to Ranger's "wardens" — a magical specialization within a largely non-magical class.

**Core identity:** Every arcwright spell works THROUGH an object, tool, or creation. The Artificer doesn't cast a bolt of force — they channel energy through their tools. They don't conjure a wall — they construct a barricade of hardened force. This distinguishes arcwright spells from Wizard school spells (academic/theoretical) and from other traditions' focus spells.

#### Arcwright Feat Chain

| Feat | Level | Prerequisite | Effect |
|------|-------|-------------|--------|
| **Initiate Arcwright** | 1 | — | Gain 1 initial arcwright spell. Gain a focus pool (1 point). Become trained in arcane spell attacks and spell DCs (key attribute: INT). |
| **Advanced Arcwright** | 4 | Initiate Arcwright | Gain 1 advanced arcwright spell. +1 focus point (max 3). |
| **Expert Arcwright** | 6 | Initiate Arcwright | Gain 1 expert arcwright spell. +1 focus point (max 3). |
| **Master Arcwright** | 10 | Initiate Arcwright | Gain 1 master arcwright spell. +1 focus point (max 3). |

All four feats are repeatable — choose a different spell from the same tier each time. Additional selections don't grant extra focus points. Standard focus point recovery via Refocus (10 minutes, recover 1 point; 30 minutes for all points with multiple arcwright feats).

Matches Ranger warden spell pacing exactly: L1 / L4 / L6 / L10 → spell rank 1 / 2 / 3 / 5.

#### Initial Arcwright Spells (Rank 1)

**Energize Armament** — 1 action, manipulate. Duration 1 minute.

You channel arcane energy into a weapon you're holding, causing it to crackle with force. On your first weapon Strike each round, you deal additional force damage equal to twice the number of weapon damage dice. This extra damage is force, bypassing most resistances.

*Parallel: Gravity Weapon (Ranger). Matches Gravity Weapon's formula (+2× weapon dice). Gravity Weapon grants a status bonus (conflicts with Inspire Courage); Energize grants untyped force damage (always stacks, bypasses resistances). Different typing is the differentiator, not raw number. Core damage buff for Artificers who want to contribute through Strikes. Particularly valuable for Gadgeteer and Enchanter subclasses that lack built-in damage. Doesn't compete with Overdrive (Innovator) — Overdrive adds an untyped bonus, Energize adds force damage.*

**Field Patch** — 1 or 2 actions, manipulate. Range touch or 30 feet. Target 1 willing creature.

You apply rapid arcane-enhanced medical treatment, sealing wounds with threads of force and alchemical adhesive. Restore 1d10 Hit Points to the target. The number of actions determines range and effectiveness:
- **1 action (manipulate):** Range touch.
- **2 actions (concentrate, manipulate):** Range 30 feet, restore additional 8 Hit Points.

Heightened (+1): Healing increases by 1d10, and the additional healing for the 2-action version increases by 8.

*Parallel: Heal Companion (Ranger). The Artificer's only native healing option outside Alchemist subclass. Thematically treats wounds as things to be repaired — force sutures, alchemical sealant, arcane cauterization. Particularly valuable for non-Alchemist subclasses in parties lacking a dedicated healer.*

**Ablative Plating** — 1 action, manipulate. Duration 1 minute.

You project a thin shell of hardened arcane force over yourself or your armor, absorbing incoming damage. Gain temporary Hit Points equal to 2 + double the spell rank (4 at rank 1, 6 at rank 2, etc.). These temporary HP are lost first when you take damage.

Heightened: Scales automatically via rank formula.

*No direct parallel in Ranger. Fills the defensive gap — the Artificer has no Champion's Reaction, no Shield Block specialization, and wears medium armor at best. Temp HP avoids bonus type conflicts entirely. The "plating" flavor is pure artificer — you're conjuring a force-hardened shell, not casting a traditional ward.*

**Arcane Tether** — 1 action, concentrate, manipulate. Range 30 feet. Target 1 creature. Duration sustained up to 1 minute. Defense: Fortitude.

You launch a thin strand of arcane force that latches onto the target, restricting its movement. The target must attempt a Fortitude save.
- **Critical Success:** Unaffected.
- **Success:** Target's Speed is reduced by 5 feet until the start of your next turn.
- **Failure:** Target's Speed is reduced by 10 feet for the duration. While tethered, the target can't move more than 30 feet from you without making a new Fortitude save to snap the tether (ending the spell on success).
- **Critical Failure:** As failure, and the target is also flat-footed for 1 round.

Heightened (+2): Speed penalty increases by 5 feet.

*No direct parallel. Control spell that complements Tamper — Tamper debuffs equipment at reach, Arcane Tether restricts movement at range. Together they define a "battlefield engineer" combat style: slow targets down, then sabotage their gear when they close. Valuable for Gadgeteer (keep enemies in gadget zones) and Enchanter (keep enemies away from buffed allies).*

#### Advanced Arcwright Spells (Rank 2)

**Animate Creation** — 2 actions, concentrate, manipulate. Range 30 feet. Duration sustained up to 1 minute. Target 1 unattended object within range.

You breathe arcane life into a mundane object — a chair, a tool, a spare weapon. The object animates as a Tiny or Small construct under your command. While you Sustain the spell, the construct can Stride (Speed 25) or Strike (1d8 bludgeoning, attack modifier = your spell attack modifier) once per turn.

The construct has AC equal to 10 + your level, HP equal to 4 × spell rank (8 at rank 2), and is immune to bleed, death effects, disease, healing, mental, poison, unconscious, and vitality/void damage.

Heightened (+2): HP increases by 8, damage die increases by one step.

*The signature arcane artificer fantasy — bringing your creations to life. Gives every subclass access to a construct minion without the complexity of a full companion. Sustained action cost keeps it balanced — you're trading your own actions for the construct's. Innovators rarely want this (Overdrive is better), but Enchanters and Gadgeteers gain a combat-capable body.*

**Deconstruct** — 2 actions, concentrate, manipulate. Range 30 feet. Target 1 object or creature with the construct trait.

You analyze the target's physical and arcane construction and magically unravel it. Objects take 4d6 force damage (ignoring Hardness up to your level). Constructs take 4d6 force damage with a basic Fortitude save; on a failure, they also take a −1 circumstance penalty to AC for 1 minute (structural weakening).

Heightened (+1): Damage increases by 2d6.

*Niche but powerful. The Artificer understands how things are built — and therefore how they come apart. Force damage + Hardness bypass makes this the premier anti-object spell. Construct riders give the INT class an edge against golems and animated objects that other classes lack. Doesn't compete with Tamper (which targets wielded/worn equipment on creatures, not constructs or standalone objects).*

**Arcane Analysis** — 1 action, concentrate. Range 30 feet. Target 1 creature or object.

You rapidly analyze the target's physical and magical structure through an artificer's lens. Attempt a Recall Knowledge check using Crafting (for constructs, objects, and traps) or Arcana (for other creatures). You gain a +1 status bonus to this check.

On a success, in addition to normal Recall Knowledge information, you learn one of the following (your choice): the target's highest weakness, one immunity, or (if a creature) the properties of one visible item it carries.

Heightened (4th): The status bonus increases to +2. On a critical success, learn two pieces of additional information instead of one.

*Parallel: Hunter's Luck (Ranger — Fortune on Recall Knowledge). Different execution: Arcane Analysis gives a bonus and extra information, Hunter's Luck gives a reroll. The Artificer's version is more reliable (bonus) and more informative (item identification) but less swingy (no fortune reroll). Reinforces the INT class's knowledge role.*

**Reinforce Equipment** — 2 actions, manipulate. Range 30 feet. Target 1 willing creature's weapon, armor, or shield. Duration 1 minute.

You channel arcane energy into an ally's equipment, magically reinforcing it. Choose one effect when you cast:
- **Weapon:** The weapon deals an additional 1 force damage per weapon damage die.
- **Armor:** The wearer gains resistance 2 to physical damage (bludgeoning, piercing, slashing).
- **Shield:** The shield gains temporary Hit Points equal to twice the spell rank (4 at rank 2), applied before the shield's own HP when using Shield Block.

Heightened (+2): Weapon bonus increases by +1 per die, armor resistance increases by 2, shield temp HP increases by 4.

*Extends the Enchanter's party-buff identity to all subclasses, but at focus spell cost rather than daily prep. Less efficient than Enchanter's Temporary Enchantments (which don't cost focus points) but available to any Artificer who takes the feat. Deliberately modest numbers — this supplements existing equipment, not replaces Enchanter rune production.*

#### Expert Arcwright Spells (Rank 3)

**Arcane Overcharge** — 2 actions, concentrate, manipulate. Area 15-foot emanation. Defense: basic Reflex.

You channel excess arcane energy through your tools and creations, releasing it in a devastating burst of force. Creatures in the area take 5d6 force damage (basic Reflex save). If you are currently affected by Overdrive (Innovator subclass), the damage increases by your Overdrive bonus.

Heightened (+1): Damage increases by 2d6.

*The Artificer's AoE option. Force damage typed, centered on self (the Artificer is in the middle of the fight, tinkering). Innovator synergy is a bonus, not a requirement — 5d6 base is competitive on its own. Compare: Ranger's Bramble (rank 3) is control, not damage; Thunderburst (Oracle, rank 3) is 2d6 bludgeoning + 2d6 sonic. Arcane Overcharge is more damage, AoE-only, self-centered.*

**Reconstruct** — 2 actions, concentrate, manipulate. Range 30 feet. Target 1 willing creature, object, or construct.

You rapidly reassemble and repair the target's structure with arcane precision.
- **Creature:** Restore 4d8 Hit Points and end one source of persistent bleed or persistent physical damage.
- **Object:** Repair 4d8 damage (removes broken condition if HP restored above threshold). Ignores the normal Repair time requirement.
- **Construct:** Restore 4d8 Hit Points and grant a +1 circumstance bonus to AC for 1 round (structural reinforcement).

Heightened (+1): Healing/repair increases by 1d8.

*Stronger Field Patch. The 2-tier healing progression (Field Patch at rank 1, Reconstruct at rank 3) mirrors Ranger's Heal Companion → Soothing Mist. The object/construct riders make this uniquely valuable in the Artificer's hands — no other class can efficiently repair objects mid-combat.*

**Force Barricade** — 2 actions, concentrate, manipulate. Range 60 feet. Duration 1 minute.

You construct a barricade of hardened arcane force. The barricade is a straight line up to 10 feet long, 5 feet tall, and 1 inch thick. It provides standard cover (+2 circumstance to AC) for creatures behind it and blocks movement through its space.

The barricade has Hardness 5, HP equal to 4 × spell rank (12 at rank 3), and is immune to critical hits and precision damage. When destroyed, it collapses into difficult terrain for 1 round.

Heightened (+2): Length increases by 10 feet, HP increases by 8.

*Battlefield construction — the Artificer builds things, even in combat. Provides cover, channels movement, protects squishy allies. Complements Gadgeteer's Deploy Gadget (set traps behind the barricade) and Enchanter's Remote Trigger (protect allies whose talismans you're managing). Compare: Earthworks (Wizard, rank 1) raises small barriers but is an emanation; Force Barricade is targeted placement at range with better durability.*

#### Master Arcwright Spells (Rank 5)

**Instant Fabrication** — 3 actions, concentrate, manipulate.

You draw on deep arcane reserves to conjure a fully formed item from raw magical energy. Create one temporary item whose level doesn't exceed half your level (maximum level 5 at character level 10). You must know the item's formula. The item lasts until your next daily prep, then dissolves into residual arcane energy.

The item functions identically to a normally crafted version. It can be a mundane item, an alchemical item, a gadget, a talisman, or a rune — matching your formula book's contents. It cannot be a permanent magic item above level 1. Only one Instant Fabrication item can exist at a time; creating a new one dissolves the previous.

*The ultimate crafter fantasy: making something from nothing. 3-action cost and level cap keep it balanced. Formula book is the real constraint — you can only fabricate what you know. Primarily utility (conjure the right tool for the situation) but can also produce combat consumables in a pinch. One-at-a-time limit prevents stockpiling.*

**Arcane Detonation** — 2 actions, concentrate, manipulate. Area 30-foot emanation. Defense: basic Reflex.

You overload your tools and creations with arcane energy, then release it in a massive explosion of force. Creatures in the area take 10d6 force damage (basic Reflex save). After casting, you are stunned 1 as the energy discharge overwhelms your senses.

Heightened (+1): Damage increases by 2d6.

*Big AoE finisher. The stunned 1 cost mirrors Innovator's Unstable risk/reward philosophy — power at a price. 30-foot emanation is the largest Artificer AoE. 10d6 force at rank 5 compares favorably to rank 5 offensive spells (Cone of Cold: 12d6 cold, 60-ft cone; Arcane Detonation: 10d6 force, 30-ft emanation + stunned self). Force typing and emanation shape justify the lower number.*

**Total Deconstruction** — 2 actions, concentrate, manipulate. Range 30 feet. Target 1 creature or object. Defense: basic Fortitude (creatures only).

You unravel the target at a structural level, tearing apart its physical and arcane bonds.
- **Creature:** 8d6 force damage (basic Fortitude save). On a failure, one piece of equipment the creature is wearing or holding (your choice) takes the same damage, ignoring Hardness equal to your level.
- **Object:** 12d6 force damage, ignoring Hardness entirely.
- **Construct:** As creature, but 12d6 force damage instead of 8d6.

Heightened (+1): Creature damage increases by 2d6, object and construct damage increases by 3d6.

*The ultimate expression of "understanding how things are built means understanding how they come apart." Single-target destruction spell. Equipment-targeting rider on creatures is unique to the Artificer and plays into the class's anti-equipment identity (Tamper debuffs equipment, Total Deconstruction destroys it). The construct bonus reflects the Artificer's deep understanding of constructed beings.*

#### Arcwright Spell Summary

| Tier | Feat Level | Spell Rank | Spells |
|------|-----------|------------|--------|
| Initial | 1 | 1 | Energize Armament, Field Patch, Ablative Plating, Arcane Tether |
| Advanced | 4 | 2 | Animate Creation, Deconstruct, Arcane Analysis, Reinforce Equipment |
| Expert | 6 | 3 | Arcane Overcharge, Reconstruct, Force Barricade |
| Master | 10 | 5 | Instant Fabrication, Arcane Detonation, Total Deconstruction |

**Total: 14 arcwright spells** (Ranger has ~12 base warden spells in Player Core, expanded to ~20 across all sources).

#### Design Notes

- **Every spell involves an object or construction.** Energize works through a weapon. Field Patch uses tools and materials. Ablative Plating creates force armor. Animate Creation brings objects to life. This is the line between arcwright spells (applied arcane engineering) and Wizard school spells (theoretical arcane study).
- **Role coverage across tiers.** Each tier has at least one damage, one utility, and one support option. No Artificer build is forced into a single playstyle by their focus spell choices.
- **Subclass synergy without subclass dependency.** Arcane Overcharge has an Overdrive rider for Innovators, but works for everyone. Reinforce Equipment extends the Enchanter's buff identity but is available to all. Animate Creation gives Gadgeteers and Enchanters a combat body. No spell requires a specific subclass.
- **Healing progression mirrors Ranger.** Field Patch (rank 1) → Reconstruct (rank 3) parallels Heal Companion (rank 1) → Soothing Mist (rank 2). The Artificer's healing is slightly behind (rank 3 vs rank 2 for the upgrade) but includes unique object/construct repair.
- **Anti-equipment/anti-construct niche.** Deconstruct (rank 2) → Total Deconstruction (rank 5) gives the Artificer a unique combat identity: the class that understands construction, and therefore destruction. No other class has focused anti-object spells at this level.
- **Damage balance.** Energize Armament (rank 1, self-buff) → Arcane Overcharge (rank 3, AoE) → Arcane Detonation (rank 5, big AoE). Linear damage progression. Force typing means rarely resisted. Stunned 1 on Detonation is the safety valve.
- **Number tuning deferred.** Specific damage dice, temp HP formulas, and healing amounts listed here are first-pass estimates. Subject to balance pass alongside subclass production slot counts and feat lists.
- **No overlap with Wizard.** Wizard school spells are freestanding magical effects (Force Bolt, Earthworks, Charming Push). Arcwright spells are object-mediated. Wizard gets Interdisciplinary Incantation (copy other spells); Artificer gets Instant Fabrication (create items). Completely different design space.
- **Tradition note.** All arcwright spells are arcane tradition. If a non-Artificer somehow gains access (e.g., through a future dedication), they use arcane spell attacks and DCs.

## Comparison to Empowered Peers

| | Champion | Ranger | Thaumaturge | Artificer |
|---|---|---|---|---|
| **Signature action** | Champion's Reaction (reaction) | Hunt Prey (1 action, all-day) | Exploit Vulnerability (1 action, check) | Tamper (1 action, persists through next turn) |
| **Passive damage boost** | — | Hunter's Edge (subclass) | Implement's Empowerment (+2/die) | — (subclass-dependent) |
| **Focus spells** | 1 at base (devotion spell) | Feat-gated (warden spells) | Feat-gated | Feat-gated (arcwright spells) |
| **Class skill identity** | Religion | Nature, Survival | Esoteric Lore (special) | Crafting (auto-scaling) |
| **Skill auto-scaling** | — | — | Esoteric Lore (E@3, M@7) | Crafting (E@3, M@7) |
| **L3 headline** | Blessing of the Devoted | Will → Expert | Ref → Expert | Crafting → Expert |
| **L5 headline** | Devotion spell upgrade | Weapon Expert | Weapon Expert, Thaumaturge Expertise | Weapon Expert, Ref → Expert |
| **L7 headline** | Armor Expert + spec | Ref Master, Perception Master | Implement Adept, Will Master | Crafting → Master, Perception Expert |
| **L9 headline** | Fort Master | Alertness (Perception Expert) | Perception Master | Class DC Expert, Will Master |
| **Master saves by L10** | 1 (Fort) | 2 (Ref, Perception) | 2 (Will, Perception) | 1 (Will) |

### Crafting Auto-Scaling vs Esoteric Lore

Identical progression: Trained → Expert @ 3 → Master @ 7 → Legendary @ 15 (outside L10 cap).

Key difference: Esoteric Lore is narrow (creature/haunt/curse identification only). Crafting is broad (Tamper, Repair, item creation, Earn Income, Field Crafting). Each Crafting bump carries more inherent weight because it touches combat, exploration, and downtime simultaneously.

## Subclasses (4)

Subclass pacing follows the Thaumaturge implement model: features at **L1 / L5 / L7**. Specialization within a subclass comes through feat lines, not sub-subclass choices.

### Alchemist

**Absorbs PF2e Alchemist.** Produces alchemical items (bombs, elixirs, poisons, mutagens). Party role: flexible — damage, healing, debuff, or self-buff depending on feat choices.

**Subclass pacing:** L1 / L5 / L7 (Thaumaturge implement model). Specialization (bomber, healer, poisoner, mutagen user) comes through feat lines, not a sub-subclass.

#### L1 — Alchemist's Craft

- **Alchemical Crafting** (free feat) — Unlocks alchemical item crafting category.
- **Advanced Alchemy** — During daily prep, produce a number of alchemical items from your formula book equal to your **INT modifier** (minimum 1). Items last until next daily prep.
- **Versatile Vials** — Gain a number of versatile vials per day equal to your **INT modifier** (minimum 1). Recover 2 vials during each 10-minute rest. Vials are the fuel for Quick Alchemy — separate from daily prep items.
- **Quick Alchemy** (1 action) — Spend a versatile vial to create an alchemical consumable from your formula book. The item is potent until the start of your next turn. In-combat improvisation counterpart to Advanced Alchemy's planning.

#### L5 — Powerful Alchemy

- Alchemical items you create (both Advanced Alchemy and Quick Alchemy) use your **Artificer class DC** instead of the item's listed DC. Critical for scaling — without this, bomb and poison DCs fall behind enemy saves by mid-levels.

#### L7 — Perpetual Infusions

- Choose **2 alchemical items** of level 1 or lower from your formula book. You can create these with Quick Alchemy **without spending a versatile vial**. Represents mastery — your simplest creations are effortless.

#### Specialization via Feat Lines

Instead of locking into a research field at L1, specialization comes through **Artificer class feats**. Four thematic lines, but no gates — players can mix freely.

| Line | Fantasy | Feat Chain |
|------|---------|------------|
| **Bomber** | AoE damage specialist | Calculated Splash (1) → Directional Bombs (6) → Expanded Splash (10) |
| **Healer** | Combat medic | Field Medic (1) → Healing Bomb (4) → Combine Elixirs (6) |
| **Poisoner** | Debuffer | Pernicious Poison (2) → Tenacious Toxins (4) → Sticky Poison (6) → Pinpoint Poisoner (8) |
| **Mutagen** | Self-buffer | Revivifying Mutagen (2) → Mutant Physique (8) |

General Alchemist feats (Quick Bomber, Far Lobber, Soothing Vials, Smoke Bomb, Efficient Alchemy, Debilitating Bomb, Sticky Bomb, Greater Debilitating Bomb) complement any line. See [Class Feats](#class-feats) for the complete list.

#### Design Notes

- **Daily prep vs improvisation.** Advanced Alchemy items are pre-made during morning prep (planning). Versatile vials fuel Quick Alchemy in the moment (improvisation). This PF2e Remaster separation is clean and worth keeping.
- **Research fields → feat lines.** Avoids sub-subclass nesting. Players aren't locked into a specialty at L1 — they build toward one (or dabble) through feat choices at even levels.
- **Production numbers set.** INT mod items (Advanced Alchemy) + INT mod vials (Versatile Vials), recover 2 vials per 10-min rest. At INT +4: 4 items + 4 vials = 57% of PF2e Remaster Alchemist output (8 items + 6 vials). Appropriate given Tamper, Crafting auto-scaling, and arcwright access. See [Balance Report](06c-artificer-balance-report.md). Perpetual infusion level cap still TBD (playtesting).

### Innovator

**Absorbs PF2e Inventor.** Personal prototype (armor or weapon) with a modification system. Party role: self-buffing martial striker, most combat-capable subclass.

**Subclass pacing:** L1 / L5 / L7. Innovation type (armor/weapon) is the specialization — determines which modification lists you access.

#### L1 — Innovation

- **Innovation** — Choose **armor** or **weapon**. Your personal prototype, built and maintained by you. Determines available modifications.
  - **Armor:** Worn prototype. Two styles — power suit (heavy, tanky) or subterfuge suit (light, stealth). Grants special armor abilities. 7 initial modifications, 8 breakthrough modifications — ported directly from PF2e Inventor.
  - **Weapon:** Pick a base weapon, enhance it with innovative traits (e.g., add reach, change damage type, add versatile). Your signature tool. 10 initial modifications, 7 breakthrough modifications — ported directly from PF2e Inventor.
- **Initial Modification** — Pick one modification from your innovation type's list. Customizes your prototype at creation.
- **Overdrive** (1 action) — Crafting check vs. set DC (scales with level, not enemy stats). Push your innovation into overdrive for 1 minute.
  - **Success:** Bonus damage to Strikes (+1, scales with Crafting proficiency: +1 at Trained/Expert, +2 at Master).
  - **Critical Success:** Double the bonus.
  - **Failure:** No effect.
  - **Critical Failure:** Fire backlash (take damage, can't Overdrive again this encounter).
  - After Overdrive ends normally, 1-minute cooldown before reuse.

#### L5 — Reconfigure

- During daily prep, you can **swap one modification** on your innovation for another of the same tier. Gives build flexibility after living with your initial choices.

#### L7 — Breakthrough Modification

- Add a second modification from the **breakthrough list** — more powerful options than initial modifications. Major upgrade to your prototype.

#### Unstable Actions

Some Innovator class feats carry the **Unstable** trait (Explode, Megaton Strike, Megavolt). These are high-risk, high-reward abilities that push your innovation past safe limits.

After using an Unstable action, make a **DC 15 flat check**:
- **Success:** No consequence, innovation holds together.
- **Failure:** You can't use Unstable actions for the **rest of the encounter**. Your innovation and other features (Overdrive, Tamper, modifications) still work normally.

Simplified from PF2e's version — failure locks out risky actions, not your entire innovation. Still meaningful risk/reward without the feel-bad of bricking your core kit mid-fight.

#### Design Notes

- **Overdrive + Tamper complement.** Tamper (base class) debuffs the enemy. Overdrive (subclass) buffs your own damage. Together they define the Innovator's combat loop: weaken targets, power up, strike.
- **Overdrive scales with Crafting proficiency.** The base class grants Expert@3 and Master@7 — Overdrive damage rides those bumps automatically. No separate "Expert Overdrive" / "Master Overdrive" features needed.
- **Innovation types are not sub-subclasses.** They're fundamental to how the subclass works — your innovation IS your thing. Modification lists are gated by type, but all Innovators share Overdrive, Reconfigure, and Breakthrough.
- **Construct dropped.** Construct innovation requires companion action economy rules and dedicated design work disproportionate to its niche appeal. Deferred to expansion. Armor and weapon provide sufficient variety (32 total modifications across both types).

#### Armor Innovation — Initial Modifications (7)

| Name | Restriction | Effect |
|------|-------------|--------|
| Harmonic Oscillator | — | Resistance 3 + half level to force and sonic. +2 during Overdrive. |
| Metallic Reactance | — | Resistance 3 + half level to acid and electricity. +2 during Overdrive. |
| Muscular Exoskeleton | Power Suit | +1 circumstance to Athletics during Overdrive (+2 at Master Crafting). |
| Otherworldly Protection | — | Resistance 3 + half level to void and spirit damage. |
| Phlogistonic Regulator | — | Resistance half level to cold and fire. +2 during Overdrive. |
| Speed Boosters | — | +5 ft status to Speed (+10 ft during Overdrive). |
| Subtle Dampeners | Subterfuge Suit | +1 circumstance to Stealth during Overdrive (+2 at Master Crafting). |

#### Armor Innovation — Breakthrough Modifications (8)

| Name | Restriction | Effect |
|------|-------------|--------|
| Antimagic Plating | — | +1 circumstance to saves and AC vs spells (+4 vs spells targeting armor directly). |
| Camouflage Pigmentation | Subterfuge Suit | Hide without cover or concealment. |
| Dense Plating | — | Resistance half level to slashing. |
| Enhanced Resistance | — | One initial resistance mod uses full level instead of half level. |
| Heavy Construction | Power Suit | Innovation becomes heavy armor (AC +5, Dex Cap +1, bulwark, entrench). No Speed penalty at STR +3. |
| Hyper Boosters | Req: Speed Boosters | +10 ft status to Speed (+20 ft during Overdrive). |
| Layered Mesh | — | Resistance half level to piercing. |
| Tensile Absorption | — | Resistance half level to bludgeoning. |

#### Weapon Innovation — Initial Modifications (10)

| Name | Restriction | Effect |
|------|-------------|--------|
| Blunt Shot | Ranged | Gains concussive and ranged trip. |
| Complex Simplicity | Simple weapon | +1 damage die step. Gains two traits (versatile B/P/S or razing). |
| Dynamic Weighting | 1H Melee (not agile/attached/free-hand) | Gains two-hand (die +1 step) and versatile B. Thrown gains tethered. |
| Entangling Form | Melee | Gains disarm, grapple, and trip. |
| Hampering Spikes | Melee | Gains hampering, trip, and versatile P. |
| Hefty Composition | Melee | Gains shove, razing, and versatile B. |
| Modular Head | — | Gains modular (B/P/S). Can toggle nonlethal via Interact. |
| Pacification Tools | Melee | Gains disarm, hampering, and nonlethal (toggleable). |
| Razor Prongs | Melee | Gains tearing, trip, and versatile S. |
| Segmented Frame | — | Gains modular (B/P/S). Collapsible to light Bulk (concealable, +2 Stealth to hide weapon). |

#### Weapon Innovation — Breakthrough Modifications (7)

| Name | Restriction | Effect |
|------|-------------|--------|
| Advanced Rangefinder | Ranged | Gains backstabber. +20 ft range increment. |
| Aerodynamic Construction | Melee | Gains sweep and versatile S. |
| Inconspicuous Appearance | Melee | Gains backstabber and versatile P. Light Bulk also gains concealable. |
| Integrated Gauntlet | 1H (not two-hand/fatal aim) | Gains free-hand. |
| Manifold Alloy | — | Weapon counts as cold iron and silver. |
| Rope Shot | Ranged | Gains climbing and ranged trip. Thrown also gains tethered. |
| Tangle Line | Thrown | Gains parry, ranged trip, and tethered. |

### Gadgeteer

**Original subclass.** Draws from PF2e Gadget items (Guns & Gears Remastered) and Snare items (Player Core 2), rebranded under a unified "gadget" category. Produces clockwork/mechanical devices deployed into the environment. Party role: battlefield controller, tactical utility, ranged support.

**Subclass pacing:** L1 / L5 / L7. No sub-specialization at L1 — gadget variety comes from formula book breadth and feat choices.

#### L1 — Gadgeteer's Workshop

- **Gadget Crafting** (free feat) — New specialty feat. Replaces and subsumes Snare Crafting. Unlocks the full "gadget" formula pool: published PF2e gadget items (Guns & Gears Remastered) and snare items (Player Core 2), all treated as gadgets. ~98 items at L1-10. Covers traps, scouts, smoke devices, deployable cover, launchers, and other mechanical creations.
- **Daily Gadgets** — During daily prep, produce a number of gadgets from your formula book equal to your **INT modifier** (minimum 1). Items last until next daily prep. No in-combat recovery — what you prepped is what you've got.
- **Gadget Launcher** — Class-specific simple ranged weapon. Your signature tool — fires small bolts normally, or delivers gadgets at range via Deploy Gadget.

  | Stat | Value |
  |------|-------|
  | Category | Simple |
  | Damage | 1d4 P |
  | Range | 30 ft |
  | Hands | 1 |
  | Reload | 0 |
  | Group | Dart |
  | Traits | Free-hand, gadget |

  Proficiency scales with Artificer weapon proficiency (Trained → Expert at L5). Modeled on Wrist Launcher (Firebrands). Free-hand trait preserves hand economy for Tamper. Damage is deliberately modest — gadget effects are the real payload.

- **Deploy Gadget** (1 action, manipulate, gadget) — Place or fire one prepared gadget. Two modes:
  - **Place:** Set in an adjacent unoccupied square. Trap-type gadgets (snares) arm immediately and trigger per their description. No Crafting check — pre-built during daily prep.
  - **Fire:** Load and launch through your gadget launcher at a point or creature within the launcher's range (30 ft). Area effects center on impact point. Single-target effects use the gadget's save DC (item DC, or class DC at L5+ via Reliable Gadgets).
  - Some powerful gadgets (large area denial, complex deployables) cost **2 actions** — noted per-gadget.

  **Published item examples (place):** Alarm Snare (L1), Hampering Snare (L1), Trip Snare (L4), Clockwork Chirper (L3)
  **Published item examples (fire):** Smoke Fan (L2), Explosive Mine (L1), Cryomister (L1)

#### L5 — Reliable Gadgets

- Gadgets you deploy use your **Artificer class DC** for saves. Parallel to Powerful Alchemy — critical for keeping gadget effects relevant at mid-levels.

#### L7 — Ubiquitous Gadgets

- Choose **2 gadgets** of level 1 or lower from your formula book. You can deploy these **without consuming daily prep slots**. Parallel to Perpetual Infusions — your simplest devices are effortless. Always have a smoke round and a tripwire ready.

#### Design Notes

- **No in-combat creation.** Unlike Alchemist's Quick Alchemy, Gadgeteer has no improvised creation. What you prepped is what you've got. Rewards strategic planning — the INT crafter fantasy at its purest.
- **Gadget launcher is a hybrid weapon.** Strike with it for 1d4 P (modest fallback damage), or Deploy Gadget (fire) through it to deliver gadget effects at 30 ft range. One item, two uses — always in your hand. Modeled on Wrist Launcher (1d4, 1H, free-hand) and Bomb Launcher (consumable delivery at range). A class feat could extend range to 60 ft (Bomb Launcher parity) at higher levels.
- **Battlefield controller identity.** Alchemist uses personal consumables. Innovator buffs themselves. Gadgeteer shapes the environment — creates favorable conditions, then fights in the terrain they've built.
- **Simpler resource model than Alchemist.** No vial system, no improvised creation. Just daily gadgets and deployment. Tactical complexity comes from placement and timing, not resource juggling.
- **Merged gadget + snare pool.** Published gadgets alone (~45 items/variants L1-10, mostly Guns & Gears Remastered) were too thin. Published snares (~53 items L1-10, Player Core 2 + Guns & Gears Remastered) provide excellent coverage. Combined pool of ~98 items is very healthy — real selection pressure at every level. Many snares are already clockwork devices (Clockwork Monkey, Detonating Gears, Flame Drake Snare, Frost Worm Snare). Natural/organic snares (poison barbs, dream pollen, grasping tree) trivially reflavored as alchemical/mechanical variants.
- **Gadget Crafting replaces Snare Crafting.** The Gadgeteer doesn't take Snare Crafting — Gadget Crafting subsumes it. Any character can still take Snare Crafting as a skill feat for the basic snare pool; the Gadgeteer's advantage is daily prep volume, class DC scaling (Reliable Gadgets at L5), and perpetual gadgets at L7. Rangers keep their Snare Crafting feat chain — different economy (feat-gated free snares vs daily prep slots), no conflict.
- **Rarity access.** The common core (~18 snares, mostly Player Core 2) is available to all Gadgeteers via Gadget Crafting. Uncommon items (~66 items) require finding formulas — formula book is the real constraint. Rare items (~9) require GM permission as usual. This mirrors Alchemist and Enchanter formula book models.

### Enchanter

**Original subclass.** Temporary magic item crafter — applies runes and talismans from the PF2e catalog during daily prep. Party role: party buffer through qualitative equipment upgrades. The most party-oriented subclass — power is distributed across allies' gear, not concentrated on your own turn.

**Subclass pacing:** L1 / L5 / L7. No sub-specialization at L1 — breadth comes from formula book variety and feat choices.

#### L1 — Enchanter's Art

- **Magical Crafting** (free feat) — Unlocks magical item crafting category (runes, talismans, and other permanent magic items during downtime).
- **Temporary Enchantments** — During daily prep, create temporary magic items from your formula book. Items last until next daily prep. You have a number of **enchantment slots** equal to your **INT modifier** (minimum 1). Two production modes:
  - **Runes** (persistent): 1 slot = 1 rune applied to a weapon, armor, or shield. Includes fundamental runes (Weapon Potency, Striking, Armor Potency) and property runes (Flaming, Ghost Touch, Energy-Resistant, etc.). Standard PF2e rune restrictions apply — property rune capacity tied to potency level, no stacking same-type fundamentals with permanent runes. A temporary Weapon Potency +1 enables one property rune slot (permanent or temporary).
  - **Talismans** (consumable): 1 slot = 2 talismans. Single-use, consumed when triggered. Affixed to weapons, armor, or shields during prep. Scales: 1 slot = 3 at L5, 1 slot = 4 at L8. The Enchanter's talisman mastery grows as fundamental rune advantages diminish — mid-to-late-level identity shifts toward talisman volume.
- **Rapid Affixture** (free) — You can Affix a Talisman in 1 minute instead of 10 minutes. Normally a level 7 general skill feat requiring Master Crafting — the Enchanter's talisman specialty grants it at level 1. Combat-speed affixing (3-action activity) available through class feats.
- **Remote Trigger** (reaction) — **Trigger:** An ally within 30 feet has one of your temporary talismans, and the talisman's trigger condition is met. **Effect:** You activate the talisman using your reaction instead of the ally's. The ally benefits from the talisman as normal. This frees allies to use their reactions for Attacks of Opportunity, Shield Block, Champion's Reaction, etc. The Enchanter's combat contribution: distributing talismans before the fight, then quarterbacking their activation during it.
- **Item level cap** — Temporary runes and talismans can't exceed your Artificer level.

#### L5 — Empowered Enchantments

- Talismans you create use your **Artificer class DC** instead of the item's listed DC. Parallel to Powerful Alchemy (Alchemist) and Reliable Gadgets (Gadgeteer). Critical for keeping talisman save DCs relevant at mid-levels.

#### L7 — Perpetual Enchantments

- Choose **2 talismans** of level 1 or lower from your formula book. You can create these **without spending enchantment slots**. Parallel to Perpetual Infusions (Alchemist) and Ubiquitous Gadgets (Gadgeteer). Your simplest enchantments are effortless — always have a Potency Crystal or Jade Cat ready.

#### Design Notes

- **Existing items, not custom infusions.** The Enchanter's formula list draws from published PF2e runes and talismans rather than bespoke infusion effects. The class adds value by making permanent magic items temporary and slot-based instead of gold-based. See [06a](06a-artificer-infusions.md) for the original custom infusion design (retained as backup/reference).
- **Fundamental runes are a conscious exception** to the "qualitative over quantitative" design principle. Weapon Potency +1 and Striking are numerical bonuses — but low-level buff spells (Runic Weapon) already grant similar effects on a per-encounter basis. Temporary enchantments are the daily-prep equivalent. May need rebalancing if they trivialize gold economy at higher levels.
- **Rune restrictions preserve balance.** Standard PF2e rules mean the Enchanter fills gaps, not piles on. Low-level party with no runes gets Weapon Potency +1 and Striking from the Enchanter. High-level party with permanent runes gets property runes filling remaining slots, or shifts Enchanter resources toward talismans.
- **Remote Trigger is low-bespoke by design.** Talismans already define their own trigger conditions and effects — Remote Trigger only changes who spends the reaction. One-sentence rule, no new checks or damage formulas. The Enchanter's combat identity: distribute talismans before the fight, quarterback their activation during it. Trades your own reaction economy for allies keeping theirs.
- **Talisman output scaling replaces rune dominance.** L1-4, the Enchanter's value is free fundamental runes. L5+, talisman volume becomes the identity — 3/slot at L5, 4/slot at L8 means dedicating 2-3 slots to talismans floods the party with triggered effects. This parallels Alchemist consumable scaling and ensures the Enchanter's power curve doesn't dip when the party starts buying their own runes.
- **Compared to Talisman Dabbler archetype.** The Enchanter is strictly better at talismans: more daily production (slots vs Dabbler's fixed 2+2+2), Rapid Affixture from L1 (Dabbler needs Quick Fix at L4), class DC scaling (Dabbler uses item DC). The Enchanter also adds runes — territory Talisman Dabbler doesn't touch.
- **Compared to Thaumaturge Talisman Esoterica.** Same 2→4→6 progression (L2/L8/L14) but capped at half character level. Enchanter's full-level cap and slot-based volume are the power levers. Thaumaturge/Dabbler know all common talisman formulas for free — Enchanter's formula book is a real constraint. Remote Trigger has no parallel in either comparison.
- **Possible feat-line improvements:** (a) *Encyclopedic Enchantments* — know formulas for all common talismans at your level or lower (removes formula book constraint, parallels Thaumaturge/Dabbler). (b) *Dual Enchantment* — one item can bear two of your talismans simultaneously (parallels Grand Talisman Esoterica / Talismanic Sage at L14; for our L10 cap, could land at L8-10 as a class feat).
- **Worn items excluded at base.** Temporary worn items (goggles, boots, cloaks) are a natural expansion via class feats but add complexity. Base Enchanter sticks to runes and talismans — simpler formula list, cleaner slot math.
- **Feat thinness — expansion-ready.** The Enchanter has the fewest dedicated class feats (~6) of any subclass. Functional but thin — Enchanter players lean on arcwright and universal feats more than other subclasses. Natural expansion candidates: worn item enchantments, multi-rune application, talisman-triggered buffs, enchantment transfer between items mid-day.

## Class Feats

Artificer feats are gained at 1st level and every even level thereafter (1, 2, 4, 6, 8, 10). Each feat lists a prerequisite — **Artificer** means any subclass; a subclass name means that subclass only.

Arcwright spell feats (Initiate through Master) compete with subclass feats for the same slots — choosing to invest in focus spells means passing on subclass specialization at that level.

### Trait Glossary

- **Additive** (Alchemist): When using Quick Alchemy, add this feat's effect to the item you create. One additive per item. Can't be applied to items created during daily prep.
- **Unstable** (Innovator): After use, DC 15 flat check — failure locks out Unstable actions for the encounter. See [Unstable Actions](#unstable-actions).
- **Modification** (Innovator): Adds a modification to your innovation, using a feat slot instead of the normal modification progression. Stacks with Initial and Breakthrough modifications.

### Level 1

| Feat | Prerequisite | Traits | Summary |
|------|-------------|--------|---------|
| **Initiate Arcwright** | Artificer | — | Gain 1 initial arcwright spell. Gain a focus pool (1 point). Trained in arcane spell attacks and DCs (INT). See [Arcwright Spells](#focus-spells--arcwright-spells). |
| **Calculated Splash** | Alchemist | — | When you throw an alchemical bomb, its splash damage equals your INT modifier (minimum 1) instead of the bomb's base splash. Bomber chain entry. |
| **Field Medic** | Alchemist | — | Use Crafting instead of Medicine for Treat Wounds on creatures you've administered an elixir of life to within the last hour. Healer chain entry. |
| **Quick Bomber** | Alchemist | — | Interact to draw an alchemical bomb, then Strike with it, as a single action. |
| **Far Lobber** | Alchemist | — | +10 ft to range increment when you throw alchemical items. |
| **Soothing Vials** | Alchemist | — | When a creature drinks one of your elixirs of life, they also reduce their frightened condition by 1. |
| **Explosive Leap** | Innovator | Unstable, Fire, Move | Aim an explosion from your innovation downward. Leap up to 30 ft in any direction without triggering reactions based on movement. |
| **Haphazard Repair** | Innovator | Unstable | 1 action: Repair your innovation for 2d6 HP, ignoring the normal Repair time. |
| **Variable Core** | Innovator | Modification | Your innovation's explosive effects (Overdrive backfire, Unstable feat damage) deal acid, cold, electricity, or fire damage. Choose when you take this feat; change during daily prep. |
| **Prepared Trapper** | Gadgeteer | — | When you roll initiative, Deploy Gadget as a free action, placing one prepared gadget in an adjacent space. |
| **Encyclopedic Enchantments** | Enchanter | — | You automatically know formulas for all common talismans with a level ≤ your level. Your formula book still limits rune and non-talisman formulas. |

### Level 2

| Feat | Prerequisite | Traits | Summary |
|------|-------------|--------|---------|
| **Reverse Engineer** | Artificer | — | +2 circumstance bonus to Crafting checks to learn an item's formula. You can reverse-engineer a formula in 1 hour instead of the normal downtime period. |
| **Smoke Bomb** | Alchemist | Additive | Bomb creates a 5-ft smoke cloud on impact, lasting 1 round. Creatures in the cloud are concealed. |
| **Pernicious Poison** | Alchemist | Additive | Injury poison also splashes: adjacent creatures take splash damage equal to INT modifier (poison). Poisoner chain entry. |
| **Revivifying Mutagen** | Alchemist | — | When a mutagen's duration expires naturally (not dismissed), regain HP equal to twice the mutagen's item level. Mutagen chain entry. |
| **Searing Restoration** | Innovator | Unstable, Fire, Healing | 1 action: Cauterize wounds via innovation. You or adjacent willing creature restores 1d10 HP but takes 1 fire damage (can't be reduced). Heightened at L5: 2d10, L9: 3d10. |
| **Collapse Innovation** | Innovator | — | Innovation collapses to compact form. Don/remove armor innovation or stow/draw weapon innovation as a single action instead of normal time. |
| **Concealed Gadgets** | Gadgeteer | — | +2 circumstance to Stealth checks to conceal gadgets and launcher. When you Deploy Gadget, attempt Stealth vs. observers' Perception DC to do so unnoticed. |
| **Combat Affixture** | Enchanter | — | Affix a Talisman as a 3-action activity (manipulate) during combat. Extends Rapid Affixture into combat at the cost of most of your turn. |

### Level 4

| Feat | Prerequisite | Traits | Summary |
|------|-------------|--------|---------|
| **Advanced Arcwright** | Artificer (Initiate Arcwright) | — | Gain 1 advanced arcwright spell. +1 focus point (max 3). Repeatable. See [Arcwright Spells](#focus-spells--arcwright-spells). |
| **Healing Bomb** | Alchemist | Additive | Convert elixir of life to thrown form — hurl it at a willing creature within 30 ft. Target regains HP as normal. |
| **Efficient Alchemy** | Alchemist | — | During daily prep, create 2 additional alchemical items beyond your normal Advanced Alchemy allotment. |
| **Tenacious Toxins** | Alchemist | — | Poisons you create last 1 additional stage before removal on a successful save. |
| **Megaton Strike** | Innovator | — | 2 actions: Strike with innovation weapon, adding an extra weapon damage die. On a critical hit, add 2 extra dice instead. |
| **Dual-Form Weapon** | Innovator | Modification | Weapon innovation transforms between two base weapon forms (choose both when you take this feat). Switch with an Interact action. Both forms benefit from modifications. |
| **Surprise Deployment** | Gadgeteer | — | Deploy Gadget into a space occupied by an enemy. Trap-type gadgets trigger immediately; target takes -2 circumstance penalty to its save. |
| **Extended Launcher** | Gadgeteer | — | Gadget Launcher range increment increases to 60 ft. Deploy Gadget (fire) range also increases to 60 ft. |
| **Talisman Rotation** | Enchanter | — | During a 10-minute rest, swap up to 2 of your temporary talismans between items, replace them with different formulas, or remove them. Doesn't cost enchantment slots. |

### Level 6

| Feat | Prerequisite | Traits | Summary |
|------|-------------|--------|---------|
| **Expert Arcwright** | Artificer (Initiate Arcwright) | — | Gain 1 expert arcwright spell. +1 focus point (max 3). Repeatable. See [Arcwright Spells](#focus-spells--arcwright-spells). |
| **Directional Bombs** | Alchemist | — | Shape bomb splash into a 15-ft cone originating from the target instead of normal splash area. Allies in the cone's origin square are unaffected. |
| **Debilitating Bomb** | Alchemist | Additive | Choose a debilitation when creating a bomb: dazzled, flat-footed, -5 ft Speed, or -1 circumstance to attack rolls. On a hit, target gains that condition until the start of your next turn. |
| **Sticky Poison** | Alchemist | — | Applied injury poison persists through 2 successful Strikes instead of being consumed on the first. |
| **Combine Elixirs** | Alchemist | Additive | Add a second elixir's effects when creating an elixir via Quick Alchemy (costs 1 additional versatile vial). Target gains both benefits from a single dose. |
| **Megavolt** | Innovator | Electricity | 2 actions: 30-ft line of electricity from your innovation. 4d12 electricity damage (basic Reflex). While in Overdrive, line extends to 60 ft. |
| **Clockwork Celerity** | Innovator | Unstable | 1 action: Gain Quickened 1 until end of your turn. Extra action can only be Stride or Strike. |
| **Remote Gadget Trigger** | Gadgeteer | — | Reaction: When a creature enters a space containing your deployed gadget, trigger it from up to 100 ft away. You choose whether to trigger or let the gadget wait for its normal trigger. |
| **Reactive Enchantment** | Enchanter | — | When you use Remote Trigger to activate a talisman for an ally, the ally also gains +1 circumstance bonus to their next saving throw before the end of their next turn. |

### Level 8

| Feat | Prerequisite | Traits | Summary |
|------|-------------|--------|---------|
| **Helpful Tinkering** | Artificer | — | 1 action (manipulate): Touch an ally's weapon, armor, or tool. Until the start of your next turn, the ally gains +1 circumstance bonus to the next attack roll, AC check, or skill check using that item. |
| **Sticky Bomb** | Alchemist | Additive | Bomb contents adhere to the target on a hit. Target takes persistent damage equal to the bomb's splash damage for 3 rounds. |
| **Mutant Physique** | Alchemist | — | While under a physical mutagen, choose one: claws (1d8 agile, finesse unarmed), +5 ft reach on all melee attacks, or Squeeze at full Speed without penalty. |
| **Pinpoint Poisoner** | Alchemist | — | When you hit a flat-footed creature with a poisoned weapon, the DC to resist your poison increases by 2. |
| **Gigaton Strike** | Innovator (Megaton Strike) | — | On a successful Megaton Strike, target is pushed 5 ft. On a critical hit, pushed 10 ft and knocked prone. |
| **Overdrive Ally** | Innovator | — | 1 action (manipulate): While in Overdrive, fling a mechanism to an ally within 30 ft. Until start of your next turn, the ally adds your Overdrive damage bonus to their next Strike. |
| **Manifold Modifications** | Innovator | — | Add one additional initial modification from your innovation type's list, in addition to your Initial Modification (L1) and Breakthrough Modification (L7). |
| **Giant Gadget** | Gadgeteer | — | Gadgets you deploy can cover a 10-ft square (4 squares) instead of a single 5-ft square. Trap-type gadgets affect any creature entering the area. |
| **Deeper Enchantments** | Enchanter | — | Gain 2 additional enchantment slots per day for creating temporary runes or talismans during daily prep. |

### Level 10

| Feat | Prerequisite | Traits | Summary |
|------|-------------|--------|---------|
| **Master Arcwright** | Artificer (Initiate Arcwright) | — | Gain 1 master arcwright spell. +1 focus point (max 3). Repeatable. See [Arcwright Spells](#focus-spells--arcwright-spells). |
| **Expanded Splash** | Alchemist | — | Bombs' splash radius increases by 5 ft. Splash damage increases by your INT modifier. |
| **Greater Debilitating Bomb** | Alchemist (Debilitating Bomb) | — | Unlock stronger debilitations: confused (1 round), enfeebled 2, stupefied 2, or immobilized (1 round). |
| **Electrify Armor** | Innovator (armor innovation) | Electricity | When a creature hits you with a melee Strike, it takes 1d12 electricity damage. While in Overdrive, increases to 2d12. |
| **Distracting Explosion** | Innovator | — | Reaction: When an enemy within 30 ft attempts to Cast a Spell or Sustain a Spell, create an explosive distraction. Enemy must succeed at Fortitude save vs. class DC or lose the action. |
| **Rapid Deployment** | Gadgeteer | — | Once per round, Deploy Gadget as a free action. Additional deployments in the same round still cost an action. |
| **Repurposed Parts** | Gadgeteer | — | When a deployed gadget is triggered or destroyed, recover components. Deploy a gadget of equal or lower level without spending a daily slot. Once per 10 minutes. |
| **Dual Enchantment** | Enchanter | — | One item can bear two of your temporary talismans simultaneously. When triggered, the bearer chooses which activates (or you choose via Remote Trigger). |

### Class Feat Design Notes

- **54 feats total** (11 + 8 + 9 + 9 + 9 + 8). Each subclass player sees ~15-20 options across their career, selecting 6 feats.
- **Alchemist has the most feats** (~20) because four specialization lines create breadth. Gadgeteer and Enchanter are leaner (~9 and ~7) because their subclass features are front-loaded.
- **Additive feats** are the Alchemist's signature — they modify items created via Quick Alchemy, rewarding in-combat improvisation.
- **Unstable feats** give the Innovator high-risk/high-reward options. Players can go Unstable-heavy or avoid Unstable entirely.
- **Modification feats** expand the Innovator's innovation beyond the 2 standard modifications (Initial + Breakthrough). Each costs a feat slot.
- **No hard prerequisites within chains** except where noted (Gigaton → Megaton, Greater Debilitating → Debilitating, Electrify → armor innovation).
- **Sources.** Alchemist feats ported from PF2e Alchemist (Player Core 2). Innovator feats ported from PF2e Inventor (Guns & Gears Remastered). Gadgeteer feats adapted from Snarecrafter archetype and Ranger snare feats (Player Core 2). Enchanter feats adapted from Talisman Dabbler archetype and crafting skill feats, plus new designs.
- **Number tuning deferred.** Damage dice, healing amounts, bonus values, and DCs are first-pass estimates. Subject to balance pass alongside production slot counts.

## Artificer and Crafting

The Artificer is the system's best crafter. Crafting auto-scaling (Expert @ 3, Master @ 7) is faster than any other class achieves through normal skill increases. Combined with our crafting system's proficiency-based time scaling (3d/2d/1d) and auto-unlocks (Quick Repair, Field Crafting, Efficient Crafting), the Artificer gets meaningful rewards at every proficiency tier.

Any character with Crafting investment should feel good about it — the Artificer just reaches higher proficiency faster and has Tamper as an additional combat use of the skill.

## Design Principles (Retained)

- **Qualitative over quantitative.** Subclass production adds capabilities, not numerical bonuses. Avoids competing with PF2e's tightly tuned math. Exception: Enchanter's temporary fundamental runes (Weapon Potency, Striking, Armor Potency) are numerical — accepted because low-level buff spells already occupy this space, and standard rune restrictions prevent stacking.
- **No competing with existing bonus types.** Avoids stepping on Bard (status), magic items (item), or spell buffs (circumstance).
- **One signature system.** No mana pool, no base spellcasting. Daily prep crafting IS the magical identity. Focus spells opt-in through feats.
- **Versatility through preparation.** Morning prep determines what the party has available. Each subclass defines a different production category.

## Caveats & Watch Items

- **Crafting auto-unlock dependency.** Our crafting system ([14-crafting.md](14-crafting.md)) grants Quick Repair and Field Crafting at Expert, Efficient Crafting at Master as proficiency auto-unlocks. If the auto-unlock system shifts (e.g., skill feat reform, changes to what auto-grants exist), Artificer features that assume those unlocks may need adjustment.
- **No passive damage boost at base.** Tamper contributes through debuff, not direct damage. Subclasses may provide damage options (Innovator especially). Watch during playtesting — if the base class feels too passive in combat, Tamper scaling or a small universal boost may be needed.
- **Focus spell feat chain.** Arcwright spell system designed — see Focus Spells section. Energize Armament and Animate Creation rebalanced (see [Balance Report](06c-artificer-balance-report.md)). Remaining number tuning deferred to playtesting.

## Open Design Work

- ~~Subclass production slot counts~~ — Done. INT mod formula for all three production subclasses (Alchemist, Gadgeteer, Enchanter). See [Balance Report](06c-artificer-balance-report.md).
- ~~Gadgeteer formula list~~ — Resolved. Merged gadget + snare pools (~98 items L1-10). No bespoke additions needed.
- ~~Gadget Launcher stats~~ — Done. 1d4 P, 30 ft, 1H, free-hand, dart group. Wrist Launcher model.
- ~~Deploy Gadget action~~ — Done. 1 action (manipulate, gadget), place adjacent or fire via launcher at 30 ft.
- ~~Innovator modification lists~~ — Done. 7+8 armor, 10+7 weapon ported from PF2e Inventor.
- ~~Focus spell feat chain~~ — Done. Arcwright spell system: 4-tier feat chain (L1/L4/L6/L10), 14 spells across 4 tiers. Numbers TBD.
- ~~Class feat lists~~ — Done. 54 feats across L1-10 (11/8/9/9/9/8 per level). Alchemist research fields converted to 4 feat chains. Number tuning TBD.
- ~~Balance between self-buffing (Innovator) and party-buffing (Alchemist, Enchanter) subclasses~~ — Reviewed: intentional role spectrum. See [Balance Report](06c-artificer-balance-report.md).
- Number tuning across feats, arcwright spells, and slot counts (deferred to playtesting)

## Reference Material

- [Artificer Infusions — First Draft](06a-artificer-infusions.md) — Original bespoke infusion design (52 formulas). Retained as backup/reference. Enchanter subclass now uses published PF2e runes and talismans instead.
- [Infusion vs Item Comparison](06b-infusion-item-comparison.md) — Analysis of original infusions against PF2e Remastered items. Documents overlap between custom infusions and published items, validating the Enchanter's shift to existing items.
- [Artificer Balance Report](06c-artificer-balance-report.md) — Balance analysis vs empowered peers, production economy, arcwright spell tuning. Documents all changes with rationale.
