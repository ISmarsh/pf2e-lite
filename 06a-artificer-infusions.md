# Artificer Infusions — First Draft

> **Status:** First draft. All numbers are provisional and need playtesting.
> See [Artificer](06-artificer.md) for class design, principles, and subclass descriptions.
> See [Infusion vs Item Comparison](06b-infusion-item-comparison.md) for analysis against PF2e Remastered runes, worn items, alchemical items, and talismans.

## Infusion Slot Progression

| Level | Infusion Slots | Formulas Known |
|-------|---------------|----------------|
| 1     | 2             | 4 + INT        |
| 2     | 3             | 6 + INT        |
| 3     | 3             | 8 + INT        |
| 4     | 4             | 10 + INT       |
| 5     | 5             | 12 + INT       |
| 6     | 5             | 14 + INT       |
| 7     | 6             | 16 + INT       |
| 8     | 7             | 18 + INT       |
| 9     | 7             | 20 + INT       |
| 10    | 8             | 22 + INT       |

- **Persistent infusions:** 1 slot each. Last until next daily prep.
- **Consumable infusions:** 1 slot = 2 single-use items.
- **INT adds versatility, not throughput.** INT modifier increases formulas known (more options to choose from) but not infusion slots (how many you can prep). This distinguishes from Alchemist, where INT directly increases reagent count.
- **Learning:** Start with 4 + INT formulas. Learn 2 new formulas each level (your level or lower). Class feats and subclass features can expand the repertoire further.

## Persistent Infusions

Applied during daily prep. One infusion per item. Item can have both a permanent rune and an infusion — no conflict, different design space.

### Weapon Infusions

| Name | Lvl | Effect |
|------|-----|--------|
| Elemental Tincture | 1 | Choose acid, cold, electricity, or fire. Weapon Strikes deal the chosen damage type alongside normal damage. Type tag only — no extra damage dice. Allows triggering weaknesses and bypassing resistances. |
| Maneuvering Attachment | 1 | Weapon gains one maneuver trait (choose: trip, shove, or disarm). If it already has the chosen trait, the wielder gains +1 circumstance bonus to that maneuver. |
| Grappling Modification | 2 | Weapon gains the grapple trait. If already has grapple, +1 circumstance to Grapple. |
| Backstabber's Edge | 3 | Weapon gains the backstabber trait. If it already has backstabber, Strikes against flat-footed targets also deal 1 persistent bleed damage. |
| Extending Haft | 4 | Weapon gains the reach trait. Melee weapons only. |
| Spiritual Tincture | 4 | Choose spirit or void. Weapon Strikes deal the chosen damage type alongside normal damage. Type tag only. (Remaster damage types — strong against undead and fiends respectively.) |
| Phasing Edge | 5 | Ghost touch. Weapon Strikes affect incorporeal creatures normally (no flat check, full damage). |
| Silver Plating | 5 | Weapon counts as silver for the purpose of bypassing weaknesses and resistances. |
| Cold Iron Lining | 5 | Weapon counts as cold iron for the purpose of bypassing weaknesses and resistances. |
| Returning Mechanism | 6 | If the weapon has the thrown trait, it gains returning (returns after each throw). If it lacks thrown, it gains thrown 20 ft. |
| Forceful Augment | 7 | Weapon gains the forceful trait (second Strike in a turn deals +1 damage die, third deals +2 damage dice). |
| Versatile Conversion | 8 | Weapon gains versatile with a damage type it doesn't already deal (B, P, or S). Wielder can switch between types on each Strike. |
| Rune Amplifier | 9 | Enhance one property rune already etched on the weapon. The rune's numerical effects increase by one step (e.g., Flaming 1d6 fire becomes 1d8, persistent damage increases by 1). If the rune has a limited-use ability, it gains one additional use per day. |
| Trait Fusion | 10 | Weapon gains two maneuver traits (choose from trip, shove, disarm, grapple). |

### Armor Infusions

| Name | Lvl | Effect |
|------|-----|--------|
| Resistant Coating | 1 | Armor grants resistance 2 to one energy type (acid, cold, electricity, fire). Scales: resistance 3 at level 5, resistance 5 at level 9. |
| Featherlight Treatment | 1 | Reduce armor's check penalty by 1 (minimum 0) and speed penalty by 5 feet (minimum 0). |
| Reactive Shield Plating | 2 | Applied to a shield. When you use Shield Block, choose one energy damage type — the shield absorbs that type entirely during the block (no shield damage from that type). |
| Impact Dampener | 3 | Armor grants resistance 1 to one physical damage type (choose: bludgeoning, piercing, or slashing). Scales: resistance 2 at level 7. |
| Fortifying Weave | 4 | Choose one condition (frightened, sickened, stupefied, or clumsy). When the wearer critically fails a save that would impose the chosen condition, treat the result as a regular failure instead. |
| Environmental Seal | 5 | Armor protects against one extreme environment (choose: heat, cold, underwater, or toxic atmosphere). Wearer ignores environmental damage and can breathe normally in the chosen environment. |
| Displacement Mesh | 7 | Once per encounter, when the wearer is hit by an attack, they can use a reaction to become concealed until the start of their next turn. |
| Adamantine Lacing | 8 | Armor is treated as adamantine. The wearer ignores the first 3 points of physical damage from critical hits. |
| Rune Resonance | 9 | Enhance one property rune already etched on the armor. The rune's effect increases by one step (e.g., Energy-Resistant resistance increases by 2, a limited-use ability gains one additional use). |
| Aegis Protocol | 10 | Armor grants resistance 5 to two energy types (chosen during daily prep). |

### Gear Infusions

Applied to worn items (goggles, boots, gloves, cloaks, belts, etc.).

| Name | Lvl | Effect |
|------|-----|--------|
| Nighteye Modification | 1 | Wearer gains darkvision. If they already have darkvision, they can see through magical darkness of 2nd rank or lower. |
| Sure-Footed Soles | 2 | Wearer ignores non-magical difficult terrain. |
| Climbing Grips | 3 | Wearer gains a climb speed equal to half their land speed (minimum 10 feet). |
| Scent Amplifier | 3 | Wearer gains imprecise scent with a range of 30 feet. |
| Aquatic Apparatus | 4 | Wearer can breathe underwater and gains a swim speed equal to half their land speed (minimum 10 feet). |
| Whispering Resonator | 5 | Wearer can communicate telepathically with one willing creature within 30 feet. Simple concepts need no shared language. |
| Terrain Skimmers | 6 | Wearer ignores all difficult terrain, including magical. |
| Leaping Springs | 7 | Wearer can High Jump and Long Jump without the initial Stride. Jump distances increase by 10 feet. |
| Gliding Apparatus | 8 | Wearer gains a fly speed of 15 feet, but must end each turn on a solid surface or begin falling. |
| Displacement Locus | 10 | Wearer can teleport up to 15 feet as a single action, once per round. Requires line of sight to destination. |

## Consumable Infusions

1 slot = 2 items. Single-use (consumed, thrown, or triggered). Apothecary subclass produces these more efficiently and at higher potency.

| Name | Lvl | Effect |
|------|-----|--------|
| Healing Draught | 1 | Consume (1 action): regain 1d8 HP. Scales: 2d8 at L3, 3d8 at L5, 4d8 at L7, 5d8 at L9. |
| Antidote Vial | 1 | Consume: +2 circumstance bonus to saves vs poison for 1 hour, or immediately attempt a new save against one active poison. |
| Energy Ward Flask | 2 | Consume: gain resistance 5 to one energy type for 1 minute (10 rounds). |
| Smoke Bomb | 2 | Throw (range 30 ft): creates a 10-foot-radius smoke cloud that lasts 1 minute. Creatures in the cloud are concealed. |
| Flash Pellet | 3 | Throw (range 30 ft): 10-foot burst. Targets must succeed at a Fortitude save or be dazzled for 1 round (blinded on critical failure). |
| Snare Trap | 3 | Place on a square (1 action). Next creature to enter: Escape (class DC) or be immobilized. Visible with Perception DC = class DC. |
| Emergency Talisman | 4 | Affix to armor (during prep). Trigger: wearer falls to 0 HP. Reaction: gain temporary HP equal to level, remaining conscious until end of next turn. |
| Thunderstone | 4 | Throw (range 30 ft): 2d4 sonic damage in a 10-foot burst (basic Fortitude save). Failure: deafened for 1 round. |
| Volatile Tincture | 5 | Apply to weapon (during prep). Triggered on next hit: +2d6 damage of a chosen energy type. Single use, then consumed. |
| Tanglefoot Bag | 5 | Throw (range 30 ft): target is immobilized (Escape at class DC). After escaping: slowed 1 for 1 minute. |
| Displacement Elixir | 6 | Consume: become concealed for 1 minute (blur equivalent). |
| Neutralizing Agent | 6 | Consume: immediately end one poison, disease, or persistent damage effect. |
| Panacea | 7 | Consume: reduce one condition's value by 2 (frightened, sickened, clumsy, enfeebled, or stupefied). |
| Bottled Lightning | 7 | Throw (range 30 ft): 4d6 electricity damage in a 10-foot burst (basic Reflex save). Failure: stunned 1. |
| Reconstituent | 8 | Consume: regain 1 focus point. Once per day per creature. |
| Philosopher's Draught | 9 | Consume: end one curse or one permanent negative condition affecting the drinker. |
| Phoenix Salve | 10 | Affix as talisman (during prep). Trigger: wearer dies. Effect: wearer immediately stabilizes at 1 HP instead. Single use. |

## Subclass Infusion Notes

The general list above is available to all Artificers. Each subclass modifies the infusion system:

### Apothecary

- **Consumable specialist.** Gets bonus infusion slots that can only be used for consumable infusions.
- **Enhanced potency.** Healing Draughts and condition-removing consumables are more effective (extra die, lower condition value, etc.).
- **Expanded consumable list.** Gains access to subclass-exclusive consumables (greater antidotes, condition-specific cures).
- **Design space:** The party's potion crafter. Floods the group with consumable options without competing on persistent infusion count.

### Wardsmith

- **Armor self-buff.** When applying armor infusions to your own armor, choose one bonus effect: +1 to the resistance value, gain temporary HP equal to half your level at dawn, or the infusion's defensive reaction gains a +1 circumstance bonus.
- **Enhanced armor infusions.** Gains access to subclass-exclusive armor infusions (e.g., retributive damage on Shield Block, stance-like defensive modes).
- **Design space:** Tankiest Artificer. Self-buffed armor makes you surprisingly durable. Focus spells cover reactive defense.

### Armsmith

- **Weapon infusion expert.** When applying weapon infusions, choose one additional minor effect: +1 circumstance to the weapon's maneuver trait, or the damage type addition also applies to the weapon's critical specialization effect.
- **Martial hybrid.** Better weapon proficiency than other Artificer subclasses (martial weapons at Expert instead of Trained).
- **Design space:** The combat Artificer. Makes the party's weapons more versatile AND holds their own in a fight.

### Provisioner

- **Flexible prep.** Can swap one active infusion during a 10-minute rest (other Artificers are locked into morning prep).
- **Utility specialist.** Gear infusions gain a minor combat rider when applied by a Provisioner (e.g., Sure-Footed Soles also grants +1 circumstance to Reflex saves vs trip/shove, Climbing Grips also grant +1 circumstance to grab ledges when falling).
- **Design space:** The Swiss army knife. Less impressive in raw combat, dominates exploration and preparation. Adaptability over power.

## Design Notes

### Why No Quick Infusion?

The open design work in [06-artificer.md](06-artificer.md) asks whether there should be a Quick Infusion equivalent (like Quick Alchemy — 1-action combat infusion creation). Recommendation: **no.** Focus spells already fill the in-combat active magic role. Adding Quick Infusion would create two parallel combat systems (focus spells AND improvised infusions) and make the class harder to run.

The Provisioner's 10-minute swap is the "flexibility" answer at a slower timescale — exploration-mode adaptability rather than combat-round reactivity.

### Level Tier Design Philosophy

- **L1-4 (Pre-Rune Era):** Infusions are the only source of qualitative equipment enhancement. The party has no property runes yet. This is where the Artificer shines most visibly — elemental damage, weapon traits, darkvision, and resistance are things nobody else can provide.
- **L5-7 (Transition):** A few property runes trickle in (Ghost Touch L4, Armor Potency L5). Infusions should increasingly occupy space runes don't — material bypasses, movement modes, environmental protection, talisman-style triggers.
- **L8-10 (Rune Saturation):** Flaming, Frost, Energy-Resistant, and Resilient all arrive. Infusions shift hard into unique territory: trait combos, meta-rune effects (Rune Amplifier/Resonance), teleportation, flight. The Artificer's value proposition changes from "I give you things runes will eventually give you" to "I give you things runes can't."

### Rune Coexistence

An item can have permanent runes AND an Artificer infusion simultaneously. No stacking conflict because infusions are qualitative:

- Flaming sword (rune: +1d6 fire) + Maneuvering Attachment (infusion: trip trait) = fire sword that trips. Clean.
- Resilient armor (rune: +1 saves) + Environmental Seal (infusion: breathe underwater) = tough armor that works underwater. Clean.
- The only interaction point is Rune Amplifier / Rune Resonance (L9), which explicitly enhances existing runes. These are the high-level "bridge" between the two systems.

### Balance Flags

Areas that need playtesting or further design:

- **Resistant Coating scaling (R2 → R3 → R5):** Is automatic scaling within one formula correct, or should higher values be separate formulas at higher levels?
- **Reconstituent (L8 consumable, regain focus point):** Extremely powerful. Focus points are deliberately scarce. The 1/day-per-creature limit may not be restrictive enough if the Artificer makes two per slot. Consider: only works on Artificer's own focus points, or remove entirely and let focus recovery stay gated by Refocus.
- **Displacement Locus (L10 teleport):** 15-foot teleport as 1 action, 1/round is very strong. Compare to Dimension Door (rank 4 spell, 120 ft but 2 actions). The short range and daily-prep cost may balance it, but needs table testing.
- **Gliding Apparatus (L8 fly speed):** Even a conditional 15-ft fly speed is a major tactical advantage. Must end on solid surface to avoid falling — is this restrictive enough? Consider: only works outdoors, or usable only for X rounds per encounter.
- **Phoenix Salve (L10 consumable):** Death prevention is a capstone effect. At 2 per slot, the party could have multiple "extra lives." Consider: only 1 per slot (exception to the 2-for-1 consumable rule), or single-use per daily prep regardless of slots spent.
- **Apothecary Healing Draught scaling:** At L9, two 5d8 healing draughts per slot. An Apothecary with 7 slots could produce 14 healing draughts at 5d8 each. That's a lot of out-of-combat healing. May need to cap consumable-only bonus slots or reduce scaling.
- **Formulas known vs available:** At L1, there are 7 persistent + 2 consumable = 9 formulas. With 4 + INT known (~8), you know almost everything. Fine at low levels (slot pressure matters, not knowledge). By L10, ~22 + INT known out of 52 total — roughly half. Is that enough selection pressure?
