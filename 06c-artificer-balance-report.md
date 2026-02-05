# Artificer Balance Report

Balance analysis of the Artificer class against empowered peers (Champion, Ranger, Thaumaturge), internal subclass balance, arcwright spell tuning, and production economy.

## Methodology

- Compared Artificer's base features, save progressions, and focus spells against all three empowered peers (Champion, Ranger, Thaumaturge) and the PF2e Inventor (source chassis).
- Queried AoN Elasticsearch API for PF2e Remaster data: Alchemist production numbers, Inventor Overdrive values, Ranger/Champion focus spells, save/proficiency progressions.
- Cross-referenced with system docs: crafting economics (14-crafting.md), core rules (01-core-rules.md), dedications (15-dedications.md).

## Findings

### 1. Defensive Gap — No Master Save at L10 (HIGH)

**Issue:** The Artificer reaches L10 with zero Master saves. Every other empowered class has at least one:

| Class | Master Saves by L10 | Details |
|-------|---------------------|---------|
| Thaumaturge | 2 | Will Master (L7), Perception Master (L9) |
| Ranger | 2 | Reflex Master (L7), Perception Master (L7) |
| Champion | 1 | Fortitude Master (L9) |
| **Artificer** | **0** | — |

The Inventor (Artificer's source chassis) gets Will Master at L11 — one level outside our L10 cap.

**Resolution:** Added **Resolve** (Will → Master) at L9, alongside Artificer Expertise. Will is the thematically correct save for an INT class with deep focus and mental discipline. Timing at L9 matches Champion's Fort Master and avoids crowding L7 (where Master Crafting already provides the level's headline feature).

**Follow-up:** Added **Vigilant Senses** (Perception → Expert) at L7. While not a Master save, Expert Perception improves initiative and threat detection. Partially closes the gap with Ranger (Perception Master at L7) and Thaumaturge (Perception Master at L9). The Artificer now has: Perception Expert (L7) + Will Master (L9) — still behind Ranger/Thaumaturge in raw defensive count, but the gap is narrower and Tamper's debuff provides additional proactive defense.

---

### 2. Energize Armament Undertuned (MEDIUM)

**Issue:** Energize Armament grants bonus force damage "equal to the number of weapon damage dice." Gravity Weapon (Ranger's equivalent rank 1 focus spell) grants a status bonus "equal to TWICE the number of weapon damage dice."

At level 5 with a Striking rune (2 weapon dice): Energize Armament = +2 force; Gravity Weapon = +4 status. The Artificer's core damage buff is exactly half the Ranger's.

Gravity Weapon's bonus is a status bonus (can be overwritten by Inspire Courage). Energize Armament's is untyped force damage (stacks with everything, bypasses resistances). The force typing partially compensates, but half the number is still too low — status bonus conflicts are situational, while the numerical gap is constant.

**Resolution:** Changed to "twice the number of weapon damage dice." Now matches Gravity Weapon's formula. Force typing (always stacks, bypasses resistances) vs status typing (conflicts with Inspire Courage) provides the differentiation, not raw number.

---

### 3. Production Slot Counts — INT Mod Formula (MEDIUM)

**Issue:** All three production subclasses (Alchemist, Gadgeteer, Enchanter) had "number TBD" for daily prep output. The Innovator has no production (always-on combat power instead), so it wasn't affected.

**Reference — PF2e Remaster Alchemist (PC2):**
- Advanced Alchemy: 4 + INT mod items per day (flat, not level-scaling)
- Versatile Vials: 2 + INT mod per day, recover 2 per 10-minute rest
- At INT +4: 8 daily items + 6 vials

**Design rationale:** Our Artificer subclass version should produce approximately 50–60% of the full PF2e Alchemist's output. The remaining power budget is spent on:
- Tamper (universal combat action — no PF2e Alchemist equivalent)
- Crafting auto-scaling (Expert@3, Master@7 — faster than any other class)
- Arcwright spells (focus spell access through feats)
- Cross-subclass versatility (formula book covers all common items, not just one category)

**Resolution — Uniform INT mod formula:**

| Subclass | Daily Prep Output | Recovery |
|----------|------------------|----------|
| Alchemist | INT mod Advanced Alchemy items + INT mod versatile vials | Vials: recover 2 per 10-min rest |
| Gadgeteer | INT mod daily gadgets | No recovery (tactical planning) |
| Enchanter | INT mod enchantment slots | No recovery (slots, not consumables) |

At INT +4 (standard for L1 key attribute): 4 items/vials/gadgets/slots each. Compared to full PF2e Alchemist (8 items + 6 vials = 14 consumables), the Artificer Alchemist produces 8 (4 items + 4 vials) = 57% of full Alchemist output. Appropriate for a subclass with additional power levers.

**Scaling:** INT mod naturally increases at L5 (partial boost, INT 19 → +4 unchanged or INT 20 → +5 with voluntary boost allocation) and L10 (apex item potential). The formula stays flat — complexity comes from item selection, not number tracking.

---

### 4. Animate Creation AC Formula (LOW)

**Issue:** Animate Creation (advanced arcwright spell, rank 2) gives the construct "AC equal to your class DC − 10." At level 4 when this becomes available:
- Artificer class DC: ~20 (10 + level 4 + INT 4 + Trained 2)
- Construct AC: 20 − 10 = **10**

An AC of 10 means virtually every enemy hits on any roll above a 2. The construct would be destroyed in a single round by most level-appropriate enemies.

PF2e animated objects (Animated Broom, level 2) have AC 16. Summoned creatures use their actual stat blocks. The class DC − 10 formula produces values far below what's expected for a combat-capable entity.

**Resolution:** Changed to "AC equal to 10 + your level." At level 4: AC 14 (comparable to animated objects). At level 10: AC 20 (reasonable for a sustained minion). Simple, predictable, and close to monster AC benchmarks for creatures 2-3 levels below the party.

---

### 5. Enchanter Feat Thinness (LOW — Expansion-Ready)

**Issue:** The Enchanter has the fewest dedicated class feats of any subclass:

| Subclass | Dedicated Feats | Levels Covered |
|----------|----------------|----------------|
| Alchemist | ~20 | L1, L2, L4, L6, L8, L10 |
| Innovator | ~14 | L1, L2, L4, L6, L8, L10 |
| Gadgeteer | ~7 | L1, L2, L4, L6, L8, L10 |
| Enchanter | ~6 | L1, L2, L4, L6, L8, L10 |

At each even level, an Enchanter player has 1-2 subclass options alongside 1-2 universal/arcwright options. This is thin but functional — Enchanters are expected to lean on arcwright feats and universal feats more than other subclasses.

**Resolution:** Noted in Enchanter design notes as expansion-ready. Possible future feats:
- Worn item enchantments (boots, goggles, cloaks — noted in existing design as excluded from base)
- Multi-rune application (apply 2 runes per slot at higher levels)
- Talisman-triggered buffs (specific effects when Remote Trigger fires)
- Enchantment transfer (move runes/talismans between items mid-day)

No changes needed for core balance — the subclass works, it just has less choice density.

---

### 6. Overdrive Numbers — Working as Intended

**Analysis:** Our Overdrive scales as:
- Success: +1 at Trained/Expert, +2 at Master
- Critical Success: double the bonus

PF2e Inventor Overdrive:
- Success: +half INT mod (+2 at INT 18)
- Critical Success: +INT mod (+4)
- Additional scaling: +1 at Expert, +2 at Master, +3 at Legendary

Our version is intentionally ~50% of PF2e Inventor's damage output. The gap is filled by:
- Tamper (universal debuff — Inventor doesn't have this)
- Crafting auto-scaling (Inventor gets Expert@7, Master@15 for Crafting; we get Expert@3, Master@7)
- Arcwright spells (focus spell investment is optional but adds damage/utility)
- Subclass production (Inventor doesn't produce consumables)

**No changes needed.**

---

### 7. Tamper Math — Working as Intended

**Analysis:** Tamper uses Crafting vs. Reflex DC:

| Level | Crafting Mod | Typical Reflex DC | Hit Rate |
|-------|-------------|-------------------|----------|
| 1 | +7 (T) | ~15 | 65% |
| 3 | +9 (E) | ~17 | 65% |
| 5 | +11 (E) | ~20 | 60% |
| 7 | +15 (M) | ~22 | 70% |
| 9 | +17 (M) | ~25 | 65% |

Follows standard PF2e sawtooth: ~65% base, dip before proficiency bumps, recovery after. The Expert@3 and Master@7 bumps align with the expected pattern. At-level enemies have Reflex DCs that keep Tamper in the 60-70% success range.

**No changes needed.**

**Follow-up — Tamper Duration Extended:** Changed Success duration from "ends at the start of your next turn" to "ends at the end of your next turn." This gives the debuff a full round of persistence — allies acting between the Artificer and the target benefit. Reduces the action tax of re-applying Tamper every round, narrowing the action economy gap vs Hunt Prey (all-day) and Exploit Vulnerability (until target dies). Critical Success remains unchanged (persists until Interact removes). Hit rate math is unaffected — this is a quality-of-life improvement, not a power buff to the check itself.

---

### 8. Self-Buff vs Party-Buff Balance — Working as Intended

**Analysis:** The four subclasses form a deliberate spectrum:

| Subclass | Self Power | Party Power | Style |
|----------|-----------|-------------|-------|
| Innovator | HIGH | LOW | Overdrive + Strikes |
| Alchemist | MEDIUM | MEDIUM | Flexible consumables |
| Gadgeteer | MEDIUM | MEDIUM | Battlefield control |
| Enchanter | LOW | HIGH | Runes + talismans on allies |

This mirrors how PF2e classes distribute power:
- Fighter (high self) vs Bard (high party) vs Ranger (medium both)
- The spectrum is intentional role diversity, not imbalance

**No changes needed.**

---

### 9. Arcwright Spell Tuning — Working as Intended (with Energize fix)

**Analysis after Energize Armament correction:**

| Spell | Comparable To | Assessment |
|-------|--------------|------------|
| Energize Armament | Gravity Weapon (Ranger) | Now matched (both +2× weapon dice) |
| Field Patch | Heal Companion (Ranger) | Comparable healing, different action scaling |
| Ablative Plating | — (no direct peer) | Unique defensive option, reasonable temp HP |
| Arcane Tether | — (no direct peer) | Control complement to Tamper |
| Animate Creation | Summoned creatures | AC fixed, HP reasonable for sustained minion |
| Deconstruct | — (niche anti-construct) | Appropriately specialized |
| Arcane Overcharge | Bramble/Thunderburst | 5d6 force in 15-ft emanation — competitive |
| Reconstruct | Soothing Mist (Ranger, rank 2) | Slightly delayed (rank 3 vs 2), compensated by object/construct utility |

**No additional changes needed** beyond the Energize and Animate Creation fixes.

---

### 10. Artificer Dedication Terminology — Housekeeping

**Issue:** 15-dedications.md still uses "infusion slots" and "infusion formulas" language from the original universal infusion design. The current Artificer has subclass-dependent production systems — no universal "infusion slots" exist.

**Resolution:** Updated Artificer Dedication to grant Tamper + formula book + Crafting training (signature mechanics). L8 expansion grants limited subclass production (choose one type, 2 items). Updated comparison table to match current design.

---

## Summary of Changes Applied

| # | Priority | Change | File |
|---|----------|--------|------|
| 1 | HIGH | Add Resolve (Will → Master) at L9 | 06-artificer.md |
| 2 | MEDIUM | Energize Armament: "twice the number of weapon damage dice" | 06-artificer.md |
| 3 | MEDIUM | Production slot counts: INT mod formula for Alchemist, Gadgeteer, Enchanter | 06-artificer.md |
| 4 | LOW | Animate Creation AC: "10 + your level" | 06-artificer.md |
| 5 | LOW | Enchanter feat thinness noted in design notes | 06-artificer.md |
| 6 | HOUSEKEEPING | Artificer Dedication terminology updated | 15-dedications.md |
| 7 | HOUSEKEEPING | Open Design Work section updated (production slots resolved) | 06-artificer.md |
| 8 | MEDIUM | Tamper Success duration: "end of your next turn" (was start) | 06-artificer.md |
| 9 | MEDIUM | Vigilant Senses (Perception → Expert) at L7 | 06-artificer.md |

## Deferred to Playtesting

- Specific damage dice, healing amounts, and temp HP formulas across all arcwright spells
- Feat-level damage/bonus values across all 54 class feats
- Perpetual Infusions/Gadgets/Enchantments item-level caps
- Gadget launcher range extension feat balance (Extended Launcher → 60 ft)
- Unstable flat check DC (currently 15 — may need adjustment based on feel)
- Enchanter fundamental rune impact on gold economy at higher levels
