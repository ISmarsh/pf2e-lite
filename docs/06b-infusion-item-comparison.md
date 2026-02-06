# Artificer Infusions vs PF2e Remastered Items — Comparison Analysis

> **Status:** Reference document. Compares each drafted Artificer infusion against actual remastered magic items, runes, alchemical items, talismans, and worn items to identify overlaps, gaps, and design issues.
>
> **Data source:** Archives of Nethys Elasticsearch API, queried against GM Core, Player Core, Player Core 2, Rage of Elements, Howl of the Wild, War of Immortals, Divine Mysteries.

## Legend

- **ZERO overlap** — No PF2e item does this. Unique Artificer design space.
- **Temporal gap** — A rune or item does something similar, but at a later level. Infusion arrives first.
- **Inverted gap** — A rune arrives *earlier* than the infusion. **Design issue** — the infusion feels redundant.
- **Direct parallel** — Intentional Artificer equivalent of an existing item category (like Healing Draught ↔ Elixir of Life).
- **Partial overlap** — Similar concept, different mechanism. Usually fine.

---

## Weapon Infusions vs Property Runes

### Relevant PF2e Weapon Property Runes (L1-10)

| Rune | Lvl | Price | Effect |
|------|-----|-------|--------|
| Returning | 3 | 55 gp | Thrown weapon returns after Strike |
| Underwater | 3 | 50 gp | No underwater attack penalties |
| Ghost Touch | 4 | 75 gp | Harm incorporeal creatures normally |
| Fearsome | 5 | 160 gp | Crit → target frightened 1 |
| Vitalizing | 5 | 150 gp | +1d6 persistent vitality vs undead; crit: enfeebled |
| Shifting | 6 | 225 gp | Change weapon form (1 action) |
| Rooting | 7 | 360 gp | Crit: roots immobilize target |
| Wounding | 7 | 340 gp | +1d6 persistent bleed on hit |
| Corrosive | 8 | 500 gp | +1d6 acid; crit: +2d6 acid to armor/shield |
| Decaying | 8 | 500 gp | +1d4 void; crit: enfeebled 1 |
| Flaming | 8 | 500 gp | +1d6 fire; +1d10 persistent fire on crit |
| Frost | 8 | 500 gp | +1d6 cold; crit: slowed 1 (Fort save) |
| Shock | 8 | 500 gp | +1d6 electricity; crit: arcs to adjacent |
| Thundering | 8 | 500 gp | +1d6 sonic; crit: deafened (Fort save) |
| Extending | 9 | 700 gp | Extend reach (activation) |
| Grievous | 9 | 700 gp | Enhanced critical specialization |

### Infusion-by-Infusion Comparison

| Infusion | Lvl | Closest Rune/Item | Their Lvl | Overlap | Notes |
|----------|-----|-------------------|-----------|---------|-------|
| **Elemental Tincture** | 1 | Flaming / Frost / Shock / Corrosive | 8 | Temporal gap (7 levels) | Infusion adds damage *type* only (bypass weakness/resistance). Runes add +1d6 damage dice + crit riders. Clean coexistence: Flaming sword + Elemental Tincture (cold) = fire AND cold type tags. Infusion is the "early access" version; rune is the "powerful permanent" version. **Design is sound.** |
| **Maneuvering Attachment** | 1 | — | — | ZERO overlap | No property rune grants weapon traits (trip, shove, disarm). Unique Artificer space at all levels. |
| **Grappling Modification** | 2 | — | — | ZERO overlap | Same as above. Grapple trait has no rune source. |
| **Backstabber's Edge** | 3 | Wounding (L7) | 7 | Low overlap | Wounding adds +1d6 persistent bleed on *every hit*. Our version adds backstabber trait + conditional 1 persistent bleed (requires flat-footed + existing backstabber). Much weaker, much narrower. Clean. |
| **Extending Haft** | 4 | Extending rune | 9 | Temporal gap (5 levels) | Both grant reach. Rune also has an activation for 120ft Strike (Greater version). Infusion is melee-only, earlier, simpler. At L9 the rune obsoletes it for most cases. **Design is sound** — follows the "available earlier, weaker" pattern. |
| **Spiritual Tincture** | 4 | Vitalizing (L5), Astral (L8) | 5 / 8 | Partial overlap | Vitalizing: +1d6 persistent vitality vs undead. Astral: ghost touch + spirit damage. Our version adds spirit or void *type tag only*. Strictly weaker than both but arrives 1 level before Vitalizing. The void option (anti-fiend/anti-living) has no rune equivalent — unique angle. |
| **Phasing Edge** | 5 | Ghost Touch | 4 | **Inverted gap** | Ghost Touch arrives at L4 (75 gp). Our infusion at L5 is strictly worse — available later AND uses an infusion slot instead of a one-time 75 gp purchase. **FLAG: Move to L3 or add a rider** (e.g., also negates incorporeal's physical resistance, or adds spirit damage type tag). |
| **Silver Plating** | 5 | Silver material weapons (L2+) | varies | Partial overlap | Permanent silver weapons exist at various price points. Infusion trades gold for slot flexibility — apply to any weapon daily, swap tomorrow. Fair tradeoff. Silver Armor (Low-Grade) is L5 / 140 gp permanent. |
| **Cold Iron Lining** | 5 | Cold Iron material weapons (L2+) | varies | Partial overlap | Same analysis as Silver Plating. Flexibility vs. permanence. |
| **Returning Mechanism** | 6 | Returning rune | 3 | **Inverted gap** | Returning rune arrives at L3 (55 gp). Our infusion at L6 is 3 levels late. The secondary effect (grants thrown 20 ft to non-thrown weapons) is unique. **FLAG: Lower to L2, or make the primary effect "grants thrown 20 ft + returning" (unique combo).** The "make any weapon throwable and returning" angle is much more interesting than competing with a cheap L3 rune. |
| **Forceful Augment** | 7 | — | — | ZERO overlap | Forceful trait has no rune source. Unique. |
| **Versatile Conversion** | 8 | Shifting (L6) | 6 | Partial overlap | Shifting changes entire weapon form (1 action). Versatile Conversion adds versatile (switch B/P/S per Strike, no action). Different use cases: Shifting is "I want a different weapon," Versatile is "I want to switch damage types mid-turn." Low conflict. |
| **Rune Amplifier** | 9 | — | — | ZERO overlap | Meta-rune effect. No PF2e item enhances existing runes. Unique bridge between infusion and rune systems. |
| **Trait Fusion** | 10 | — | — | ZERO overlap | Two maneuver traits on one weapon. No rune or item does this. Capstone-worthy. |

### Weapon Infusion Summary

- **8 of 14 have zero or very low overlap** — strong unique design space
- **2 have inverted gaps (Phasing Edge, Returning Mechanism)** — need fixes
- **4 have intentional temporal gaps** — working as designed
- Overall weapon infusion list is well-differentiated from runes

---

## Armor Infusions vs Property Runes & Material Armors

### Relevant PF2e Armor Runes (L1-10)

| Rune/Material | Lvl | Price | Effect |
|---------------|-----|-------|--------|
| Cold Iron Armor (Low-Grade) | 5 | 140 gp | Weakness trigger vs fey/demons on crit fail |
| Silver Armor (Low-Grade) | 5 | 140 gp | Weakness trigger vs lycanthropes/devils |
| Shadow | 5 | 55 gp | +1 item bonus to Stealth |
| Slick | 5 | 45 gp | +1 item bonus to Escape/Squeeze |
| Raiment | 5 | 140 gp | Disguise armor with a thought |
| Ready | 6 | 200 gp | Fast donning |
| Size-Changing | 7 | 350 gp | Change wearer's size |
| Energy-Resistant | 8 | 420 gp | Resistance 5 to one energy type |
| Invisibility | 8 | 500 gp | 10 min invisible, 1/day |
| Resilient | 8 | 340 gp | +1 item bonus to saves |
| Malleable | 9 | 650 gp | Swap energy resistance type |

### Infusion-by-Infusion Comparison

| Infusion | Lvl | Closest Rune/Item | Their Lvl | Overlap | Notes |
|----------|-----|-------------------|-----------|---------|-------|
| **Resistant Coating** | 1 | Energy-Resistant | 8 | Temporal gap (7 levels) | R2 at L1 vs R5 at L8. Infusion covers the entire pre-rune era. At L8+, they coexist covering different elements. Auto-scaling (R3 at L5, R5 at L9) means the infusion grows to match the rune's value. **Consider: scaling should cap below rune value** (e.g., R2 → R3 → R4 instead of R5) to maintain rune superiority. |
| **Featherlight Treatment** | 1 | — | — | ZERO overlap | No rune reduces check/speed penalties. Pure utility, always relevant. |
| **Reactive Shield Plating** | 2 | — | — | ZERO overlap | "Shield absorbs chosen energy type entirely during Block" has no rune parallel. Tactical, reactive — good design space for Wardsmith. |
| **Impact Dampener** | 3 | Fortification (L12), Adamantine Armor (L12) | 12 | ZERO overlap (in range) | Physical damage resistance has no rune in L1-10. Fortification (crit prevention) is L12 and a different mechanic. |
| **Fortifying Weave** | 4 | — | — | ZERO overlap | "Crit fail → regular fail for one condition" is unique. Narrow but clutch. |
| **Environmental Seal** | 5 | Electric Eelskin (L10, underwater only) | 10 | Temporal gap + broader | Eelskin only covers underwater. Our version covers heat, cold, underwater, or toxic. Available 5 levels earlier. |
| **Displacement Mesh** | 7 | Invisibility rune (L8) | 8 | Low overlap | Invisibility is proactive (10 min invisible). Displacement Mesh is reactive (concealed for 1 round when hit, 1/encounter). Completely different tactical use. |
| **Adamantine Lacing** | 8 | Adamantine Armor (L12) | 12 | Temporal gap (4 levels) | Real adamantine armor is L12. Our version at L8 is a subset of the benefit (ignores first 3 points of crit physical damage). |
| **Rune Resonance** | 9 | — | — | ZERO overlap | Meta-rune for armor. Same unique space as Rune Amplifier. |
| **Aegis Protocol** | 10 | Energy-Resistant Greater (L12) | 12 | Temporal gap | Greater E-R is R10 to one type at L12. Our version is R5 to *two* types at L10 — different coverage profile. |

### Armor Infusion Summary

- **7 of 10 have zero overlap** — armor infusions are extremely well-differentiated
- **3 have temporal gaps** — intentional early access to effects that runes provide later
- **No inverted gaps** — every armor infusion arrives before its nearest rune counterpart
- Armor infusions are the strongest infusion category for unique design space

---

## Gear Infusions vs Worn Items

### Key PF2e Worn Items (L1-10)

| Item | Lvl | Price | Effect |
|------|-----|-------|--------|
| Aerial Cloak | 3 | 60 gp | Cushion falls, reduce fall damage |
| Arboreal Boots | 5 | 160 gp | +1 Stealth, improved climbing on plants |
| Obsidian Goggles | 5 | 150 gp | Low-light vision, +1 to spot visual illusions |
| Charm of Resistance | 6 | 245 gp | Resistance 5 to one damage type |
| Clandestine Cloak | 6 | 230 gp | Become unremarkable, +1 Stealth |
| Boots of Bounding | 7 | 340 gp | High Jump as 1 action, +10 to jump distances |
| Aeon Stone (Envisioning) | 8 | 425 gp | Telepathy 100 ft |
| Extra Lung | 8 | 500 gp | Breathe underwater |
| Eyes of the Cat | 9 | 700 gp | Low-light vision, +2 Perception in dark |
| Daredevil Boots | 10 | 900 gp | +2 Acrobatics, balance on narrow surfaces |
| Winged Sandals | 10 | 850 gp | Fly speed (activation) |

### Infusion-by-Infusion Comparison

| Infusion | Lvl | Closest Worn Item | Their Lvl | Overlap | Notes |
|----------|-----|-------------------|-----------|---------|-------|
| **Nighteye Modification** | 1 | Darkvision Elixir (L2, 10 min) | L2 (consumable) | Temporal gap + duration | Elixir: 10 min, consumable. Infusion: all-day. No permanent worn item grants darkvision in L1-10. Obsidian Goggles (L5) only give low-light. Eyes of the Cat (L9) give low-light + Perception. **Darkvision is a huge gap in the worn item space** — this infusion fills it perfectly. |
| **Sure-Footed Soles** | 2 | Feather Step Stone (L3 talisman, 8 gp) | L3 (single use) | Low overlap | Talisman is one Step. Infusion is all-day ignore non-magical difficult terrain. Massively stronger sustained effect. |
| **Climbing Grips** | 3 | Arboreal Boots (L5, 160 gp) | L5 | Temporal gap (2 levels) | Arboreal Boots give +1 Stealth + climb bonus on plants. Our version gives raw climb speed (half land speed). Different: ours is movement mode, theirs is skill bonus. |
| **Scent Amplifier** | 3 | — | — | ZERO overlap | No worn item in L1-10 grants scent. Unique sensory enhancement. |
| **Aquatic Apparatus** | 4 | Extra Lung (L8, 500 gp), Electric Eelskin (L10) | L8-10 | Temporal gap (4-6 levels) | Breathe underwater + swim speed at L4. Nearest permanent worn items are L8-L10. Huge temporal advantage. |
| **Whispering Resonator** | 5 | Aeon Stone Envisioning (L8, 425 gp) | L8 | Temporal gap (3 levels) | Our version: 30 ft telepathy. Aeon Stone: 100 ft telepathy. Earlier but shorter range. At L8 the aeon stone is strictly better if you can afford it. |
| **Terrain Skimmers** | 6 | — | — | ZERO overlap | Ignore ALL difficult terrain (including magical). No worn item provides this. Upgrade path from Sure-Footed Soles. |
| **Leaping Springs** | 7 | Boots of Bounding (L7, 340 gp) | 7 | **Direct overlap** | Both at L7, both enhance jumping. Boots: High Jump as 1 action, +10 distances. Infusion: no initial Stride for jumps, +10 distances. Very similar effects. **FLAG: The 340 gp permanent item does almost the same thing as a daily infusion slot.** Either differentiate more (e.g., infusion grants +20 feet or adds a minor flight component) or lean into it as "the budget version that costs a slot instead of gold." |
| **Gliding Apparatus** | 8 | Winged Sandals (L10, 850 gp) | L10 | Temporal gap (2 levels) | Sandals grant full fly speed (activation). Our version: 15 ft fly, must land each turn. Weaker but 2 levels earlier. Already flagged for balance. |
| **Displacement Locus** | 10 | Fire-Jump Ring (L10, 940 gp) | L10 | Low overlap | Fire-Jump Ring requires fire source for teleport. Our version: line-of-sight 15 ft teleport 1/round, no fire requirement. Different mechanic. Already flagged for balance. |

### Gear Infusion Summary

- **3 of 10 have zero overlap** — unique sensory/movement effects
- **5 have temporal gaps** — infusions as early access to effects worn items provide later
- **1 has direct overlap (Leaping Springs ↔ Boots of Bounding)** — needs differentiation
- **Darkvision is a standout gap** — no permanent worn item grants darkvision in L1-10, making Nighteye Modification extremely valuable
- Gear infusions occupy the "movement modes and senses" space that worn items spread across many price points

---

## Consumable Infusions vs Alchemical Items & Talismans

### Key PF2e Parallels

| PF2e Item | Category | Scaling | Our Parallel |
|-----------|----------|---------|--------------|
| Elixir of Life | Alchemical Elixir | Minor 1d6 (L1) → Moderate 5d6+12 (L9) | Healing Draught |
| Antidote | Alchemical Elixir | +2 to +4 Fort vs poison | Antidote Vial |
| Darkvision Elixir | Alchemical Elixir | 10 min (L2) → 1 hour (L8) | (Nighteye is persistent) |
| Mistform Elixir | Alchemical Elixir | Concealed, varying durations | Displacement Elixir |
| Smoke Ball | Alchemical Tool | 5 ft burst (L1) → 20 ft (L8) | Smoke Bomb |
| Bottled Lightning | Alchemical Bomb | 1d6 (L1) → scaling | Bottled Lightning |
| Glue Bomb | Alchemical Bomb | Immobilize, scaling | Tanglefoot Bag |
| Silver Salve | Alchemical Tool | Silver coating, 1 min | Silver Plating (persistent) |
| Various talismans | Talisman | Single-use, affixed | Emergency Talisman, Phoenix Salve |

### Infusion-by-Infusion Comparison

| Infusion | Lvl | Closest PF2e Item | Overlap | Notes |
|----------|-----|-------------------|---------|-------|
| **Healing Draught** | 1 | Elixir of Life | Direct parallel | Intentional. 1d8 scaling vs 1d6+bonus scaling. Our version is slightly frontloaded (better raw dice, no flat bonus). Apothecary subclass makes these better — mirrors Chirurgeon Alchemist. |
| **Antidote Vial** | 1 | Antidote (alchemical) | Direct parallel | Our version adds "attempt new save against active poison" — slightly stronger than the alchemical version. |
| **Energy Ward Flask** | 2 | Drakeheart Mutagen (AC), Charm of Resistance | Low overlap | Temp R5 to one energy type for 1 minute. No direct alchemical equivalent at this level. |
| **Smoke Bomb** | 2 | Smoke Ball | Direct parallel | Our version is a powered-up Smoke Ball (10 ft radius, 1 min vs 5 ft, 1 round at Lesser). Priced as higher-tier consumable. |
| **Flash Pellet** | 3 | Dread Ampoule (mental), various bombs | Low overlap | Dazzle/blind effect. Dread Ampoule does mental damage. No exact "flash" bomb in PF2e alchemical list. |
| **Snare Trap** | 3 | Snare crafting system | Partial | PF2e has full snare rules. This is the simplified infusion version. |
| **Emergency Talisman** | 4 | PF2e talismans (general design) | Low overlap | Talisman-style trigger (0 HP → temp HP). No exact PF2e talisman does this at L4. Closest: Aeon Stone (Delaying) at L7 prevents dying 4 death. |
| **Thunderstone** | 4 | Blasting Stone (L1+, sonic) | Direct parallel | PF2e has actual Thunderstones. Our version at L4 with 2d4 sonic + deafen is comparable to Moderate Blasting Stone (L3, 2d4 sonic). Fine. |
| **Volatile Tincture** | 5 | Weapon oils, Silver Salve | Low overlap | "Next hit deals +2d6 energy" — no exact alchemical equivalent. Silver Salve adds silver trait, not energy damage. |
| **Tanglefoot Bag** | 5 | Glue Bomb (Moderate: L3, immobilize) | Direct parallel | PF2e's Glue Bomb does essentially the same thing. Our version at L5 adds "slowed 1 for 1 min after Escape." Stronger rider. |
| **Displacement Elixir** | 6 | Mistform Elixir (L1+) | Direct parallel | PF2e's Mistform Elixir grants concealed. Our version at L6 for 1 minute matches Greater Mistform. |
| **Neutralizing Agent** | 6 | Antidote + Antiplague (separate) | Stronger than parallels | "Immediately end one poison, disease, or persistent damage" is much stronger than the +bonus-to-saves pattern of antidotes/antiplagues. **FLAG: This is closer to a Panacea (L13+ in PF2e) compressed to L6.** Consider: end one condition if target succeeds at a flat check (DC 10), or limit to poisons only (diseases require Philosopher's Draught). |
| **Panacea** | 7 | Bottled Catharsis (L2+) | Partial overlap | Catharsis counteracts mental conditions with a modifier check. Our version flat reduces any condition by 2. Broader and more reliable. Reasonable at L7. |
| **Bottled Lightning** | 7 | Bottled Lightning (PF2e, L1+) | Direct parallel | Same name! PF2e's version scales from 1d6 (L1) to 4d6 (L11). Our L7 version at 4d6 + stunned 1 on fail is comparable to PF2e's Greater version (L11). **We're giving L11-equivalent bomb power at L7.** Consider: reduce to 3d6 (matches L5-8 power band) or accept as "Artificer bombs are better than Alchemist bombs at same count." |
| **Reconstituent** | 8 | — | ZERO overlap | Focus point recovery is intentionally scarce in PF2e. Already flagged. Very strong. |
| **Philosopher's Draught** | 9 | Cleanse Affliction (rank 2 spell) | Low overlap | Curse/condition removal as consumable. No alchemical equivalent. Spell-in-a-bottle design. Powerful but fits Artificer identity. |
| **Phoenix Salve** | 10 | — | ZERO overlap (in consumable space) | Death prevention as consumable. Already flagged for 2-per-slot concern. |

### Consumable Infusion Summary

- **6 are direct parallels to alchemical items** — intentional, these are the Artificer's version of the Alchemist's toolkit
- **3 have zero or very low overlap** — unique effects (Reconstituent, Phoenix Salve, Volatile Tincture)
- **2 are stronger than their PF2e counterparts (Neutralizing Agent, Bottled Lightning)** — may need tuning
- The direct parallels are by design — the Artificer *should* produce potions and bombs, just through infusions instead of Advanced Alchemy

---

## Cross-Cutting Findings

### Design Issues to Fix

1. **Phasing Edge (L5)** — Ghost Touch rune arrives at L4. Move infusion to L3, or add a rider (ignore incorporeal physical resistance, or add spirit type tag).

2. **Returning Mechanism (L6)** — Returning rune arrives at L3 (55 gp). Rework: lower to L2 and make the primary effect "grants thrown 20 ft + returning" (the unique combo), not just returning on already-thrown weapons.

3. **Leaping Springs (L7)** — Near-identical to Boots of Bounding (L7, 340 gp). Differentiate: increase jump bonus to +20 ft, or add a minor aerial component (e.g., "you can change direction mid-jump" or "you don't provoke reactions while jumping").

4. **Neutralizing Agent (L6)** — Too strong at L6 for instant condition removal. Options: add a flat check (DC 10), limit to poisons only (let diseases need Philosopher's Draught), or raise to L7-8.

5. **Bottled Lightning (L7)** — 4d6 + stunned 1 matches PF2e's L11 Greater Bottled Lightning. Reduce to 3d6, or accept as intentional Artificer power.

### Confirmed Design Strengths

1. **Weapon traits (Maneuvering Attachment, Grappling Modification, Forceful Augment, Trait Fusion)** — Completely unique design space. No PF2e rune or item adds weapon traits. This is the Artificer's strongest differentiator.

2. **Meta-rune effects (Rune Amplifier, Rune Resonance)** — No PF2e item enhances existing runes. Brilliant L9 design that bridges infusions and the rune system.

3. **All-day darkvision at L1** — Nighteye Modification fills a genuine gap. No permanent worn item grants darkvision in L1-10. Signature Artificer utility.

4. **Armor infusion category** — 7 of 10 have zero overlap. Best-differentiated category overall.

5. **Temporal gap pattern** — Energy resistance, reach, environmental protection, underwater breathing, and telepathy all arrive significantly before their rune/item equivalents. The "available earlier, weaker" pattern works throughout.

### Level Tier Validation

| Tier | Infusion Design Goal | Validation |
|------|---------------------|------------|
| **L1-4** (Pre-Rune Era) | Infusions provide capabilities nobody else can | ✅ Confirmed. Darkvision, energy type tags, weapon traits, energy resistance, difficult terrain — all uniquely available through infusions at these levels. |
| **L5-7** (Transition) | Shift toward effects runes can't replicate | ✅ Mostly confirmed. Weapon traits, environmental protection, scent, magical terrain bypass all have zero rune overlap. Two exceptions (Phasing Edge, Returning Mechanism) need fixes. |
| **L8-10** (Rune Saturation) | Unique territory: trait combos, meta-rune, teleport, flight | ✅ Confirmed. Rune Amplifier/Resonance, Trait Fusion, Displacement Locus, Aegis Protocol — all occupy space runes explicitly don't. |

### Item Economy Observations

Infusions compete with worn items and runes for the "equipment enhancement" budget, but on a fundamentally different economic axis:

- **Runes:** One-time gold cost, permanent. Weapon Potency +1 (35 gp) is forever.
- **Worn items:** One-time gold cost, uses an invest slot. Boots of Bounding (340 gp) is permanent but takes a slot.
- **Infusions:** No gold cost, uses a daily infusion slot. Flexible (swap daily) but limited (slot count caps throughput).

This means infusions are strongest when:
- The party can't afford the permanent item yet (L1-4 especially)
- Flexibility matters more than permanence (dungeon has fire elementals today, undead tomorrow)
- The effect has no permanent item equivalent at all (weapon traits, scent, meta-rune)

And weakest when:
- A cheap permanent item already exists (Ghost Touch at 75 gp, Returning at 55 gp)
- The party is flush with gold (L8+ treasure tables)
- The infusion slot could be used for something unique instead

---

## Recommendations Summary

### Must Fix (inverted gaps — infusion is redundant)
- [ ] **Phasing Edge:** L5 → L3 (or add rider beyond ghost touch)
- [ ] **Returning Mechanism:** L6 → L2 (refocus on "grants thrown + returning" combo)

### Should Tune (power level concerns)
- [ ] **Resistant Coating:** Cap auto-scaling at R4 (not R5) to preserve Energy-Resistant rune superiority
- [ ] **Neutralizing Agent:** Add restriction (flat check, or poison-only at L6)
- [ ] **Bottled Lightning:** Reduce to 3d6 (or accept as intentional)
- [ ] **Leaping Springs:** Differentiate from Boots of Bounding (+20 ft or aerial rider)

### Already Flagged (from 06a balance flags)
- [ ] Reconstituent focus recovery power level
- [ ] Displacement Locus teleport balance
- [ ] Gliding Apparatus fly speed conditions
- [ ] Phoenix Salve 2-for-1 concern
- [ ] Apothecary Healing Draught scaling at L9
- [ ] Resistant Coating scaling model
