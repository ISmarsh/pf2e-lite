# Dedications

## Overview

Multiclass dedications allow any character to gain basic features of another class by spending class feats (or Free Archetype feats, since Free Archetype is standard). Ported from PF2e with mana conversion for caster dedications. Full feat data in `.aon-cache/dedication-feats.json` (62 dedications) and `.aon-cache/archetype-feats.json` (330 archetype feats).

**Restriction (per PF2e):** Can't take a new Dedication until you've taken at least two other feats from your current archetype. Prevents cherry-picking.

## Three Dedication Templates

### Full Caster Dedications (Wizard, Cleric, Druid, Bard)

- **Dedication feat (level 2):** Cantrips + trained in tradition's spell attacks/DCs + class-specific minor feature
- **Basic Spellcasting (level 4):** Mana progression (quarter caster, see [Spellcasting](10-spellcasting.md))
- **Basic Class Feat (level 4):** Pick a class feat of half your level or lower
- **Advanced Class Feat (level 6):** Pick a class feat of your level or lower

### Empowered Dedications (Champion, Ranger, Artificer, Thaumaturge)

- **Dedication feat (level 2):** Signature mechanic + skill training
- **Basic Class Feat (level 4):** Pick a class feat of half your level or lower
- **Advanced Class Feat (level 6):** Pick a class feat of your level or lower
- **Signature Mechanic Expansion (level 8):** Deepens the signature feature
- **No mana path** -- empowered classes don't grant spellcasting through dedications

### Martial Dedications (Fighter, Rogue, Barbarian, Monk)

- **Dedication feat (level 2):** Weapon/armor training + reduced signature feature
- **Basic Class Feat (level 4):** Pick a class feat of half your level or lower
- **Advanced Class Feat (level 6):** Pick a class feat of your level or lower
- **No spellcasting path**

## Mana Conversion Notes

All four caster dedications (Wizard, Cleric, Druid, Bard) port with "spell slots" replaced by mana progression via Basic Spellcasting. Healing Font is NOT granted by Cleric dedication. Monk dedication ports directly from Player Core 2.

## Artificer Dedication (New Design)

- **Prerequisite:** INT 14
- **Grants:** Trained in Crafting (if not already), **Tamper** ability (Crafting vs. Reflex DC), formula book with **4 common formulas** of your level or lower
- **Level 8 -- Expanded Artificer:** Choose one Artificer subclass production type (Advanced Alchemy, Daily Gadgets, or Temporary Enchantments). During daily prep, produce **2 items** of that type from your formula book. Items use item DC (no class DC scaling).

### Empowered Dedication vs Full Class (Artificer Example)

| Feature | Full Artificer | Dedication |
|---------|---------------|------------|
| Tamper | Full progression (Expert@3, Master@7 Crafting) | Basic only (Trained Crafting) |
| Subclass production | INT mod items/slots (4 at INT +4) + subclass features | 2 items from one chosen type (L8+), item DC only |
| Formulas known | Extensive, grows each level | 4 common formulas |
| Subclass | Yes (L1 choice) | No (limited L8 access) |

## Eldritch Trickster Resolution

Rogue's Eldritch Trickster racket grants a free **full caster** multiclass dedication at level 1. Player chooses Wizard, Cleric, Druid, or Bard -- gaining cantrips and eventual mana access through Basic Spellcasting.

## Generic Archetypes

Non-multiclass archetypes providing thematic specialization through self-contained feat chains. With Free Archetype as standard (see [Core Rules](01-core-rules.md)), every character gets archetype feats at levels 2, 4, 6, 8, 10. All from Player Core 2 (ORC-licensed, remastered).

### High Priority -- Port-Ready, Broadly Useful

- **Marshal** -- Party leadership aura. Deep feat chain (14 feats L2-L10). Fills unique party role no class covers. Ports cleanly.
- **Medic** -- Enhanced healing. Thin but high-impact chain (4 feats L2-L6). Our Expert Medicine auto-grants 10-min Treat Wounds immunity (see [Skills](07-skills.md)) -- Medic's unique value is healing bonus and Battle Medicine immunity bypass, no overlap. Ports cleanly.
- **Sentinel** -- Armor proficiency access. 5 feats L2-L8. Essential for squishier classes wanting armor via Free Archetype. No prerequisites. Ports cleanly.
- **Bastion** -- Shield specialization. Deepest chain (13 feats L2-L12, only L2-L10 available). Natural companion to our simplified shield system. Shield terminology ports as-is.

### Medium Priority -- Viable but Narrower

- **Archer** -- Ranged combat specialist (11 feats L1-L10). Includes Eldritch Archer sub-archetype that grants quarter-caster mana pool. Ports with mana conversion.
- **Acrobat** -- Agility specialist (6 feats L1-L10). Ports cleanly.
- **Beastmaster** -- Animal companion specialist (6 feats L1-L10). **Blocked** on animal companion rules.
- **Blessed One** -- Divine healing via Lay on Hands focus spell (3 feats L1-L10). Blessed Spell (L8) triggers on casting using mana. Ports with mana conversion.
- **Archaeologist** -- Exploration/knowledge specialist. Niche but clean port.

### Low Priority / Deferred

- **Assassin** -- Core feat Assassinate is L12, above our level cap. Detection references need minor rephrasing for two-tier system.

## System Interaction Summary

| System | Archetypes Affected | Adaptation Needed |
|--------|-------------------|-------------------|
| Mana system | Archer (Eldritch Archer), Blessed One | "Spell slots" -> mana |
| Shield terminology | Bastion | "Hardness" kept as-is |
| Medicine proficiency | Medic | No conflict |
| Conditions | Assassin | Observed->default, Undetected->Hidden |
| Animal companions | Beastmaster | Blocked until rules defined |
| Level cap (L1-10) | All archetypes | Higher-level feats naturally excluded |

## Open Design Work

- Animal companion rules (blocks Beastmaster, also affects Druid/Ranger)
- Verify all multiclass dedication features against system changes (mana, conditions, etc.)
