# Modifier Value Proof Table

This generated table selects deterministic modifier values where possible and records the proof still required before a value can become contribution math.

It is intentionally metadata only. Packet final damage remains the truth source, and correlation rows are not numeric contribution.

## Summary

| Metric | Value |
| --- | --- |
| Source entries | 33617 |
| Included entries | 33614 |
| Runtime entries | 8485 |
| Selected values | 6300 |
| Ready selected values | 1900 |
| Formula zones | 15 |
| Selector kinds | 15 |


## Status Counts

| Status | Count |
| --- | --- |
| missing-value-data | 25129 |
| non-damage-or-support | 2347 |
| packet-exact-value-not-required | 1704 |
| needs-timing-model | 1662 |
| value-ready | 1165 |
| needs-seasonal-factor-selector | 489 |
| needs-expected-model | 252 |
| needs-hit-count-model | 185 |
| needs-target-window-proof | 151 |
| needs-stat-conversion-model | 140 |
| needs-value-selection | 111 |
| needs-description-parameter-source | 109 |
| needs-skill-stage-selector | 62 |
| needs-value-ladder-selector | 42 |
| value-ready-runtime-scope | 25 |
| needs-scope-value | 15 |
| needs-tier-selection | 11 |
| needs-value-polarity | 6 |
| needs-value-ramp-model | 4 |
| needs-component-mapping | 3 |
| needs-threshold-model | 2 |


## Top Blockers

| Blocker | Count |
| --- | --- |
| missing-component-value-hint | 25132 |
| component:cooldown-or-resource:timing-model-required | 2004 |
| component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | 539 |
| component:haste-or-attack-speed:timing-model-required | 383 |
| component:critical-rate:expected-value-model-required | 299 |
| component:hit-count-model:hit-count-model-required | 252 |
| component:target-resistance-mitigation:target-window-proof-required | 178 |
| component:hit-count-model:ambiguous-scoped-value:all | 108 |
| component:target-vulnerability:target-window-proof-required | 100 |
| component:adaptive-primary-stat:stat-conversion-model-required | 87 |
| component:mastery-stat:stat-conversion-model-required | 70 |
| component:generic-damage:skill-stage-selector-required | 62 |
| component:versatility:stat-conversion-model-required | 61 |
| component:lucky-rate:expected-value-model-required | 50 |
| component:critical-rate:ambiguous-scoped-value:all | 47 |
| component:skill-multiplier:ambiguous-scoped-value:all | 44 |
| component:haste-or-attack-speed:stat-conversion-model-required | 35 |
| component:atk:value-ladder-selection-required | 34 |
| component:elemental-damage:value-ladder-selection-required | 25 |
| component:generic-damage:ambiguous-scoped-value:all | 25 |
| component:elemental-damage:ambiguous-scoped-value:all | 24 |
| component:atk:ambiguous-value-selection-required | 19 |
| component:critical-rate:value-ladder-selection-required | 17 |
| component:atk:stat-conversion-model-required | 14 |
| component:physical-magic-enhancement:stat-conversion-model-required | 14 |
| component:critical-damage:value-ladder-selection-required | 13 |
| component:atk:ambiguous-scoped-value:all | 11 |
| component:elemental-damage:value-ramp-selector-required | 11 |
| component:skill-multiplier:ambiguous-scoped-value:target | 10 |
| component:mastery-stat:ambiguous-scoped-value:all | 9 |


## Selector Counts

| Selector | Count |
| --- | --- |
| timing-cadence-model | 2387 |
| runtime-stack | 1101 |
| seasonal-factor-loadout-selector | 688 |
| critical-expected-value | 299 |
| stat-conversion-model | 288 |
| target-window-state | 278 |
| hit-count-model | 252 |
| runtime-scope | 193 |
| runtime-value-ladder | 102 |
| skill-stage-or-charge-selector | 69 |
| lucky-expected-value | 50 |
| runtime-tier-or-level | 28 |
| value-ramp-or-stack-selector | 16 |
| threshold-or-consumed-state | 9 |
| value-polarity-selector | 9 |


## Expected Value Models

| Model | Kind | Status | Selectors | Formula | Validation |
| --- | --- | --- | --- | --- | --- |
| critical-expected-v1 | critical | contract-ready-unvalidated | 299 | expected critical multiplier = 1 + critChance * (critDamageMultiplier - 1) | observed-rate-delta; min hits 100 |
| lucky-expected-v1 | lucky | contract-ready-unvalidated | 50 | expected lucky multiplier = luckyChance * (0.4 + 0.25 * luckyChance) * (1 + luckyChance + lucky/general damage bonuses) | paired-hit-or-observed-rate-delta; min hits 100 |


These contracts are still proof gates. They define the required inputs and validation policy for crit/lucky probability rows, but selector-blocked rows are not deterministic contribution totals.

## Value Ready

| Key | Label | Status | Terms | Selected Values | Blockers | Selectors |
| --- | --- | --- | --- | --- | --- | --- |
| battle-imagines:1002830 | Arcane! Frostquake | value-ready | baseAttackTerm, elementalDamage, generalDamage, physicalMagicEnhancement | elemental-attack:all=5flat |  |  |
| battle-imagines:3906 | Arcane! Frostquake | value-ready | baseAttackTerm, elementalDamage, generalDamage, physicalMagicEnhancement | elemental-attack:all=5flat |  |  |
| battle-imagines:3925 | Stunt! Invisible Impact | value-ready | baseAttackTerm, generalDamage, physicalMagicEnhancement, skillMultiplier | generic-damage:all=50percent; skill-multiplier:all=50percent |  |  |
| buffs:1201 | 冰法仗蓄力子弹变大BUFF | value-ready-runtime-scope | elementalDamage, generalDamage, luckyEnhancement, timingCadence | generic-damage:owner=1percent; generic-damage:party=0.5percent |  | runtime-scope |
| buffs:2010051 | War Dance Buff Lv.1 | value-ready | baseAttackTerm | atk:all=5percent |  |  |
| buffs:2010052 | War Dance Buff Lv.2 | value-ready | baseAttackTerm | atk:all=10percent |  |  |
| buffs:2010053 | War Dance Buff Lv.3 | value-ready | baseAttackTerm | atk:all=15percent |  |  |
| buffs:2010075 | Foodie's Grace | value-ready | allRoundDamage | versatility:all=2percent |  |  |
| buffs:2032010 | 物攻 | value-ready | baseAttackTerm, physicalMagicEnhancement | atk:all=30percent |  | runtime-stack |
| buffs:2032011 | Cuisine | value-ready | baseAttackTerm, luckyStrikeBaseTerm, physicalMagicEnhancement | atk:all=15flat |  |  |
| buffs:2032012 | Cuisine | value-ready | baseAttackTerm, luckyStrikeBaseTerm, physicalMagicEnhancement | atk:all=30flat |  |  |
| buffs:2032013 | Cuisine | value-ready | baseAttackTerm, luckyStrikeBaseTerm, physicalMagicEnhancement | atk:all=45flat |  |  |
| buffs:2032014 | Cuisine | value-ready | baseAttackTerm, luckyStrikeBaseTerm, physicalMagicEnhancement | atk:all=60flat |  |  |
| buffs:2032015 | Cuisine | value-ready | baseAttackTerm, luckyStrikeBaseTerm, physicalMagicEnhancement | atk:all=75flat |  |  |
| buffs:2032016 | Cuisine | value-ready | baseAttackTerm, luckyStrikeBaseTerm, physicalMagicEnhancement | atk:all=105flat |  |  |
| buffs:2032017 | Cuisine | value-ready | baseAttackTerm, luckyStrikeBaseTerm, physicalMagicEnhancement | atk:all=120flat |  |  |
| buffs:2032018 | Cuisine | value-ready | baseAttackTerm, luckyStrikeBaseTerm, physicalMagicEnhancement | atk:all=150flat |  |  |
| buffs:2032020 | 魔攻 | value-ready | baseAttackTerm, physicalMagicEnhancement | atk:all=30percent |  | runtime-stack |
| buffs:2032021 | Cuisine | value-ready | baseAttackTerm, luckyStrikeBaseTerm, physicalMagicEnhancement | matk:all=15flat; atk:all=15flat |  |  |
| buffs:2032022 | Cuisine | value-ready | baseAttackTerm, luckyStrikeBaseTerm, physicalMagicEnhancement | matk:all=30flat; atk:all=30flat |  |  |
| buffs:2032023 | Cuisine | value-ready | baseAttackTerm, luckyStrikeBaseTerm, physicalMagicEnhancement | matk:all=45flat; atk:all=45flat |  |  |
| buffs:2032024 | Cuisine | value-ready | baseAttackTerm, luckyStrikeBaseTerm, physicalMagicEnhancement | matk:all=60flat; atk:all=60flat |  |  |
| buffs:2032025 | Cuisine | value-ready | baseAttackTerm, luckyStrikeBaseTerm, physicalMagicEnhancement | matk:all=75flat; atk:all=75flat |  |  |
| buffs:2032026 | Cuisine | value-ready | baseAttackTerm, luckyStrikeBaseTerm, physicalMagicEnhancement | matk:all=105flat; atk:all=105flat |  |  |
| buffs:2032027 | Cuisine | value-ready | baseAttackTerm, luckyStrikeBaseTerm, physicalMagicEnhancement | matk:all=120flat; atk:all=120flat |  |  |
| buffs:2032028 | Cuisine | value-ready | baseAttackTerm, luckyStrikeBaseTerm, physicalMagicEnhancement | matk:all=150flat; atk:all=150flat |  |  |
| buffs:2032060 | 物攻+精英增伤 | value-ready | baseAttackTerm, generalDamage, physicalMagicEnhancement | atk:all=30percent |  | runtime-stack |
| buffs:2032065 | Cuisine | value-ready | baseAttackTerm, generalDamage, luckyEnhancement, luckyStrikeBaseTerm, physicalMagicEnhancement, skillMultiplier | atk:all=75flat; dmg-to-elites:all=5percent; generic-damage:all=5percent |  |  |
| buffs:2032067 | Cuisine | value-ready | baseAttackTerm, generalDamage, luckyEnhancement, luckyStrikeBaseTerm, physicalMagicEnhancement, skillMultiplier | atk:all=120flat; dmg-to-elites:all=10percent; generic-damage:all=10percent |  |  |
| buffs:2032070 | 魔攻+精英增伤 | value-ready | baseAttackTerm, generalDamage, physicalMagicEnhancement | atk:all=30percent |  | runtime-stack |


## Needs Expected Model

| Key | Label | Status | Terms | Selected Values | Blockers | Selectors |
| --- | --- | --- | --- | --- | --- | --- |
| buffs:2010071 | Foodie's Grace | needs-expected-model | luckyChance, luckyEnhancement | lucky-rate:all=2percent | component:lucky-rate:expected-value-model-required | lucky-expected-value |
| buffs:2010072 | Foodie's Grace | needs-expected-model | critical | critical-rate:all=2percent | component:critical-rate:expected-value-model-required | critical-expected-value |
| buffs:2010082 | Foodie's Grace | needs-expected-model | critical | adaptive-primary-stat:all=2percent; critical-rate:all=1percent | component:adaptive-primary-stat:stat-conversion-model-required; component:critical-rate:expected-value-model-required | stat-conversion-model; critical-expected-value |
| buffs:2010083 | Foodie's Grace | needs-expected-model | luckyChance, luckyEnhancement | adaptive-primary-stat:all=2percent; lucky-rate:all=1percent | component:adaptive-primary-stat:stat-conversion-model-required; component:lucky-rate:expected-value-model-required | stat-conversion-model; lucky-expected-value |
| buffs:2100151 | True Sight | needs-expected-model | critical | critical-rate:all=35percent | component:critical-rate:expected-value-model-required | critical-expected-value |
| buffs:21412 | Fast Growth | needs-expected-model | baseAttackTerm, critical, physicalMagicEnhancement, timingCadence | cooldown-or-resource:all=50percent; critical-rate:all=10percent | component:cooldown-or-resource:timing-model-required; component:critical-rate:expected-value-model-required | timing-cadence-model; critical-expected-value |
| buffs:2200070 | 居合天授 | needs-expected-model | critical, elementalDamage, generalDamage |  | component:critical-damage:threshold-state-selector-required; component:critical-rate:ambiguous-scoped-value:all; component:critical-rate:expected-value-model-required | threshold-or-consumed-state; critical-expected-value; value-ramp-or-stack-selector |
| buffs:2200080 | 追击风袭 | needs-expected-model | critical, luckyChance, luckyEnhancement | critical-rate:all=12percent; lucky-rate:all=10percent | component:critical-rate:expected-value-model-required; component:lucky-rate:expected-value-model-required | critical-expected-value; lucky-expected-value |
| buffs:2200340 | 锐击传承 | needs-expected-model | critical, elementalDamage, generalDamage | critical-rate:all=10percent; elemental-damage:all=10percent | component:critical-rate:expected-value-model-required | critical-expected-value |
| buffs:2200342 | Sharp Strike | needs-expected-model | critical, elementalDamage, generalDamage | critical-rate:all=10percent; elemental-damage:all=10percent | component:critical-rate:expected-value-model-required | critical-expected-value |
| buffs:2200390 | Swift Blade | needs-expected-model | critical, elementalDamage, generalDamage, luckyEnhancement | critical-damage:all=5percent; critical-rate:all=5percent; lucky-damage:all=5percent | component:critical-rate:expected-value-model-required | critical-expected-value |
| buffs:2200450 | Violent Slash | needs-expected-model | critical, elementalDamage | critical-rate:all=12percent; elemental-damage:all=12percent | component:critical-rate:expected-value-model-required | critical-expected-value |
| buffs:2200460 | 追击风袭 | needs-expected-model | critical, luckyChance, luckyEnhancement | critical-rate:all=12percent; lucky-rate:all=10percent | component:critical-rate:expected-value-model-required; component:lucky-rate:expected-value-model-required | critical-expected-value; lucky-expected-value |
| buffs:2200470 | Dual Blade Intent | needs-expected-model | critical, elementalDamage | critical-rate:all=10percent; elemental-damage:all=10percent | component:critical-rate:expected-value-model-required | critical-expected-value |
| buffs:2200540 | Arcane | needs-expected-model | critical, generalDamage | critical-damage:all=10percent; critical-rate:all=10percent | component:critical-rate:expected-value-model-required | critical-expected-value |
| buffs:2200610 | 月刃电荷之种 | needs-expected-model | generalDamage, luckyChance, luckyEnhancement, timingCadence | cooldown-or-resource:all=25percent; generic-damage:all=25percent; lucky-rate:all=25percent | component:cooldown-or-resource:timing-model-required; component:lucky-rate:expected-value-model-required | timing-cadence-model; lucky-expected-value |
| buffs:2201710 | Rock Luck | needs-expected-model | critical, luckyChance, luckyEnhancement | critical-rate:all=50percent; lucky-rate:all=5percent | component:critical-rate:expected-value-model-required; component:lucky-rate:expected-value-model-required | critical-expected-value; lucky-expected-value |
| buffs:2201730 | 反击强化 | needs-expected-model | luckyChance, luckyEnhancement | lucky-rate:all=10percent | component:lucky-rate:expected-value-model-required | lucky-expected-value |
| buffs:2202660 | 能量勃发 | needs-expected-model | baseAttackTerm, critical, physicalMagicEnhancement, timingCadence | cooldown-or-resource:all=50percent; critical-rate:all=10percent | component:cooldown-or-resource:timing-model-required; component:critical-rate:expected-value-model-required | timing-cadence-model; critical-expected-value |
| buffs:2203200 | 锐射 | needs-expected-model | critical | critical-rate:all=7percent | component:critical-rate:expected-value-model-required | critical-expected-value |
| buffs:2203260 | 成熟之翼展 | needs-expected-model | baseAttackTerm, critical, generalDamage, timingCadence | atk:all=100percent; critical-damage:all=300percent; critical-rate:all=300percent | component:critical-rate:expected-value-model-required; component:hit-count-model:hit-count-model-required | critical-expected-value; hit-count-model |
| buffs:2203360 | Wolf Sharp Strike | needs-expected-model | critical, generalDamage | critical-damage:all=50percent; critical-rate:all=50percent | component:critical-rate:expected-value-model-required | critical-expected-value |
| buffs:2203560 | Sharp Double Arrow I | needs-expected-model | critical, generalDamage | critical-damage:all=15percent; critical-rate:all=15percent | component:critical-rate:expected-value-model-required | critical-expected-value |
| buffs:2203580 | Falcon Break | needs-expected-model | critical, generalDamage, physicalMagicEnhancement | critical-rate:all=40percent | component:critical-damage:threshold-state-selector-required; component:critical-rate:expected-value-model-required | threshold-or-consumed-state; critical-expected-value |
| buffs:2204260 | Icy Calm | needs-expected-model | critical, elementalDamage, luckyChance, luckyEnhancement, timingCadence | adaptive-primary-stat:target=2percent; critical-rate:all=2percent; haste-or-attack-speed:all=2percent | component:adaptive-primary-stat:stat-conversion-model-required; component:critical-rate:expected-value-model-required; component:haste-or-attack-speed:timing-model-required | stat-conversion-model; critical-expected-value; timing-cadence-model |
| buffs:2204261 | Icy Calm | needs-expected-model | critical, elementalDamage, luckyChance, luckyEnhancement, timingCadence | critical-rate:all=2percent; haste-or-attack-speed:all=2percent; lucky-rate:all=2percent | component:critical-rate:expected-value-model-required; component:haste-or-attack-speed:timing-model-required; component:lucky-rate:expected-value-model-required | critical-expected-value; timing-cadence-model; lucky-expected-value |
| buffs:2204300 | Icicle Spec | needs-expected-model | critical, elementalDamage, generalDamage, luckyEnhancement | critical-rate:all=30percent; elemental-damage:all=30percent | component:critical-rate:expected-value-model-required | critical-expected-value |
| buffs:2204441 | Frost Lance Crit | needs-expected-model | critical, elementalDamage, generalDamage | critical-damage:all=1.5percent; critical-rate:all=1.5percent | component:critical-rate:expected-value-model-required | runtime-stack; critical-expected-value |
| buffs:2206100 | 神谕 | needs-expected-model | critical, generalDamage, timingCadence | cooldown-or-resource:all=30percent; critical-damage:all=30percent; critical-rate:all=30percent | component:cooldown-or-resource:timing-model-required; component:critical-rate:expected-value-model-required | timing-cadence-model; critical-expected-value |
| buffs:2206110 | 裁决启示 | needs-expected-model | critical | critical-rate:all=50percent | component:critical-rate:expected-value-model-required | critical-expected-value |


## Needs Stat Conversion Model

| Key | Label | Status | Terms | Selected Values | Blockers | Selectors |
| --- | --- | --- | --- | --- | --- | --- |
| battle-imagines:2110053 | Muku King - Mastery Increase | needs-stat-conversion-model |  |  | component:mastery-stat:stat-conversion-model-required; component:mastery-stat:tier-or-level-selection-required | runtime-tier-or-level; stat-conversion-model |
| buffs:2010074 | Foodie's Grace | needs-stat-conversion-model |  | mastery-stat:all=2percent | component:mastery-stat:stat-conversion-model-required | stat-conversion-model |
| buffs:2010077 | Foodie's Grace | needs-stat-conversion-model |  | adaptive-primary-stat:all=5percent | component:adaptive-primary-stat:stat-conversion-model-required | stat-conversion-model |
| buffs:2010078 | Foodie's Grace | needs-stat-conversion-model |  | adaptive-primary-stat:all=5percent | component:adaptive-primary-stat:stat-conversion-model-required | stat-conversion-model |
| buffs:2010079 | Foodie's Grace | needs-stat-conversion-model |  | adaptive-primary-stat:all=5percent | component:adaptive-primary-stat:stat-conversion-model-required | stat-conversion-model |
| buffs:2010084 | Foodie's Grace | needs-stat-conversion-model | timingCadence | adaptive-primary-stat:all=2percent; haste-or-attack-speed:all=1percent | component:adaptive-primary-stat:stat-conversion-model-required; component:haste-or-attack-speed:timing-model-required | stat-conversion-model; timing-cadence-model |
| buffs:2010085 | Foodie's Grace | needs-stat-conversion-model |  | adaptive-primary-stat:all=2percent; mastery-stat:all=1percent | component:adaptive-primary-stat:stat-conversion-model-required; component:mastery-stat:stat-conversion-model-required | stat-conversion-model; stat-conversion-model |
| buffs:2010086 | Foodie's Grace | needs-stat-conversion-model | allRoundDamage | adaptive-primary-stat:all=2percent; versatility:all=1percent | component:adaptive-primary-stat:stat-conversion-model-required | stat-conversion-model |
| buffs:2033171 | Potion | needs-stat-conversion-model | baseAttackTerm, elementalDamage, physicalMagicEnhancement | physical-magic-enhancement:all=360flat | component:physical-magic-enhancement:stat-conversion-model-required | stat-conversion-model |
| buffs:2033172 | Potion | needs-stat-conversion-model | baseAttackTerm, elementalDamage, physicalMagicEnhancement | physical-magic-enhancement:all=360flat | component:physical-magic-enhancement:stat-conversion-model-required | stat-conversion-model |
| buffs:2033173 | Potion | needs-stat-conversion-model | baseAttackTerm, elementalDamage, physicalMagicEnhancement | physical-magic-enhancement:all=360flat | component:physical-magic-enhancement:stat-conversion-model-required | stat-conversion-model |
| buffs:2033174 | Potion | needs-stat-conversion-model | elementalDamage, physicalMagicEnhancement | physical-magic-enhancement:all=360flat | component:physical-magic-enhancement:stat-conversion-model-required | stat-conversion-model |
| buffs:2033175 | Potion | needs-stat-conversion-model | elementalDamage, physicalMagicEnhancement | physical-magic-enhancement:all=575flat | component:physical-magic-enhancement:stat-conversion-model-required | stat-conversion-model |
| buffs:2033176 | Potion | needs-stat-conversion-model | elementalDamage, physicalMagicEnhancement | physical-magic-enhancement:all=800flat | component:physical-magic-enhancement:stat-conversion-model-required | stat-conversion-model |
| buffs:2033181 | Potion | needs-stat-conversion-model | baseAttackTerm, elementalDamage, physicalMagicEnhancement | physical-magic-enhancement:all=360flat | component:physical-magic-enhancement:stat-conversion-model-required | stat-conversion-model |
| buffs:2033182 | Potion | needs-stat-conversion-model | baseAttackTerm, elementalDamage, physicalMagicEnhancement | physical-magic-enhancement:all=360flat | component:physical-magic-enhancement:stat-conversion-model-required | stat-conversion-model |
| buffs:2033183 | Potion | needs-stat-conversion-model | baseAttackTerm, elementalDamage, physicalMagicEnhancement | physical-magic-enhancement:all=360flat | component:physical-magic-enhancement:stat-conversion-model-required | stat-conversion-model |
| buffs:2033184 | Potion | needs-stat-conversion-model | elementalDamage, physicalMagicEnhancement | physical-magic-enhancement:all=360flat | component:physical-magic-enhancement:stat-conversion-model-required | stat-conversion-model |
| buffs:2033185 | Potion | needs-stat-conversion-model | elementalDamage, physicalMagicEnhancement | physical-magic-enhancement:all=575flat | component:physical-magic-enhancement:stat-conversion-model-required | stat-conversion-model |
| buffs:2033186 | Potion | needs-stat-conversion-model | elementalDamage, physicalMagicEnhancement | physical-magic-enhancement:all=800flat | component:physical-magic-enhancement:stat-conversion-model-required | stat-conversion-model |
| buffs:2110053 | Mastery Increase | needs-stat-conversion-model | elementalDamage |  | component:mastery-stat:stat-conversion-model-required; component:mastery-stat:tier-or-level-selection-required | runtime-tier-or-level; stat-conversion-model |
| buffs:2200030 | 敏捷转换（废弃） | needs-stat-conversion-model | baseAttackTerm, physicalMagicEnhancement |  | component:atk:ambiguous-scoped-value:all; component:atk:stat-conversion-model-required | stat-conversion-model |
| buffs:2200370 | 迅捷（废弃） | needs-stat-conversion-model | baseAttackTerm, timingCadence | atk:all=1percent; haste-or-attack-speed:all=1percent | component:atk:stat-conversion-model-required; component:haste-or-attack-speed:timing-model-required | stat-conversion-model; timing-cadence-model |
| buffs:2200560 | Advancement | needs-stat-conversion-model |  | mastery-stat:all=6percent | component:mastery-stat:stat-conversion-model-required | stat-conversion-model |
| buffs:2201150 | Fortune Bastion | needs-stat-conversion-model | baseAttackTerm, generalDamage, luckyEnhancement, physicalMagicEnhancement, timingCadence | cooldown-or-resource:all=3flat | component:cooldown-or-resource:timing-model-required; component:mastery-stat:ambiguous-scoped-value:all; component:mastery-stat:stat-conversion-model-required | timing-cadence-model; stat-conversion-model |
| buffs:2201330 | 护盾打击 | needs-stat-conversion-model | baseAttackTerm, elementalDamage, generalDamage | target-resistance-mitigation:all=0.6percent | component:adaptive-primary-stat:ambiguous-scoped-value:all; component:adaptive-primary-stat:stat-conversion-model-required; component:target-resistance-mitigation:target-window-proof-required | target-window-state; runtime-stack; stat-conversion-model |
| buffs:2201350 | Sandstone Rewind | needs-stat-conversion-model | baseAttackTerm, generalDamage, physicalMagicEnhancement, timingCadence | cooldown-or-resource:all=3flat | component:cooldown-or-resource:timing-model-required; component:mastery-stat:ambiguous-scoped-value:all; component:mastery-stat:stat-conversion-model-required | timing-cadence-model; stat-conversion-model |
| buffs:2201360 | 幸缘维护 | needs-stat-conversion-model | baseAttackTerm, generalDamage, physicalMagicEnhancement, timingCadence | atk:target=10percent; atk:all=-30percent | component:cooldown-or-resource:timing-model-required; component:mastery-stat:ambiguous-scoped-value:all; component:mastery-stat:stat-conversion-model-required | runtime-stack; timing-cadence-model; stat-conversion-model |
| buffs:2201490 | Recovery | needs-stat-conversion-model | baseAttackTerm, generalDamage | atk:all=1percent; generic-damage:all=20percent; adaptive-primary-stat:all=1percent | component:adaptive-primary-stat:stat-conversion-model-required | runtime-stack; stat-conversion-model |
| buffs:2201650 | Rampart Fortitude | needs-stat-conversion-model | baseAttackTerm, generalDamage, physicalMagicEnhancement, timingCadence | atk:all=-30percent; cooldown-or-resource:all=3flat | component:cooldown-or-resource:timing-model-required; component:mastery-stat:ambiguous-scoped-value:all; component:mastery-stat:stat-conversion-model-required | timing-cadence-model; stat-conversion-model |


## Needs Hit Count Model

| Key | Label | Status | Terms | Selected Values | Blockers | Selectors |
| --- | --- | --- | --- | --- | --- | --- |
| buffs:2110112 | 陶洛斯-麻痹 | needs-hit-count-model | baseAttackTerm, elementalDamage, generalDamage, physicalMagicEnhancement, timingCadence | cooldown-or-resource:all=150percent; generic-damage:all=40percent; hit-count-model:all=40percent | component:cooldown-or-resource:timing-model-required; component:hit-count-model:hit-count-model-required | timing-cadence-model; hit-count-model |
| buffs:2110114 | Dorothy Aid | needs-hit-count-model | baseAttackTerm, elementalDamage, generalDamage, physicalMagicEnhancement, timingCadence | cooldown-or-resource:all=150percent; generic-damage:all=40percent; hit-count-model:all=40percent | component:cooldown-or-resource:timing-model-required; component:hit-count-model:hit-count-model-required | timing-cadence-model; hit-count-model |
| buffs:2200050 | Keen Strike | needs-hit-count-model | baseAttackTerm, generalDamage, skillMultiplier, timingCadence | atk:all=10percent; generic-damage:all=10percent; hit-count-model:all=10percent | component:hit-count-model:hit-count-model-required | hit-count-model |
| buffs:2200060 | Keen Enhancement | needs-hit-count-model | timingCadence | hit-count-model:all=10percent | component:hit-count-model:hit-count-model-required | hit-count-model |
| buffs:2201050 | 卫刃派生 | needs-hit-count-model | baseAttackTerm, generalDamage, skillMultiplier, timingCadence | atk:all=10percent; generic-damage:all=10percent; hit-count-model:all=10percent | component:hit-count-model:hit-count-model-required | hit-count-model |
| buffs:2203280 | Sundering Arrow | needs-hit-count-model | baseAttackTerm, generalDamage, skillMultiplier, timingCadence | atk:all=15percent; generic-damage:all=15percent; hit-count-model:all=15percent | component:hit-count-model:hit-count-model-required | hit-count-model |
| buffs:2204240 | Frost Shock | needs-hit-count-model | elementalDamage, generalDamage, luckyEnhancement, timingCadence | elemental-damage:all=30percent; hit-count-model:all=30percent | component:hit-count-model:hit-count-model-required | hit-count-model |
| buffs:2204430 | 陨石数量+1 | needs-hit-count-model | elementalDamage, timingCadence | elemental-damage:all=10percent; hit-count-model:all=1flat | component:hit-count-model:hit-count-model-required | hit-count-model |
| buffs:2205650 | 刹那追击 | needs-hit-count-model | generalDamage, luckyEnhancement, skillMultiplier, timingCadence | hit-count-model:all=25percent; skill-multiplier:all=25percent | component:hit-count-model:hit-count-model-required | hit-count-model |
| buffs:2206400 | Holy Summon | needs-hit-count-model | critical, generalDamage, timingCadence | critical-damage:all=50percent; hit-count-model:all=10percent | component:hit-count-model:hit-count-model-required | hit-count-model |
| buffs:2207030 | 热情迸发加概率 | needs-hit-count-model | baseAttackTerm, timingCadence | hit-count-model:all=3percent | component:hit-count-model:hit-count-model-required | hit-count-model |
| buffs:3003220 | Illusory Countershock | needs-hit-count-model | timingCadence | hit-count-model:all=30percent | component:hit-count-model:hit-count-model-required | hit-count-model |
| buffs:3401098 | uid:3401098 | needs-hit-count-model | baseAttackTerm, elementalDamage, generalDamage, physicalMagicEnhancement, skillMultiplier, timingCadence | skill-multiplier:all=300percent; skill-multiplier:target=300percent | component:atk:threshold-state-selector-required; component:hit-count-model:ambiguous-scoped-value:all; component:hit-count-model:hit-count-model-required | hit-count-model; threshold-or-consumed-state |
| buffs:3401148 | uid:3401148 | needs-hit-count-model | physicalMagicEnhancement, skillMultiplier, timingCadence | hit-count-model:all=30percent; skill-multiplier:all=100percent | component:hit-count-model:hit-count-model-required | hit-count-model; runtime-stack |
| buffs:3401216 | uid:3401216 | needs-hit-count-model | elementalDamage, generalDamage, timingCadence | hit-count-model:all=30percent; elemental-damage:all=3percent | component:hit-count-model:hit-count-model-required | hit-count-model |
| buffs:55313 | Amplified Harmonic Anthem | needs-hit-count-model | generalDamage, timingCadence | hit-count-model:all=1flat | component:hit-count-model:hit-count-model-required | hit-count-model; runtime-stack |
| linktext-tooltips:1098 | Thundercleave | needs-hit-count-model | baseAttackTerm, skillMultiplier, timingCadence | skill-multiplier:all=300percent; skill-multiplier:target=300percent | component:atk:threshold-state-selector-required; component:hit-count-model:ambiguous-scoped-value:all; component:hit-count-model:hit-count-model-required | hit-count-model; threshold-or-consumed-state |
| linktext-tooltips:1148 | Steel Beak | needs-hit-count-model | skillMultiplier, timingCadence | hit-count-model:all=30percent; skill-multiplier:all=100percent | component:hit-count-model:hit-count-model-required | hit-count-model; runtime-stack |
| linktext-tooltips:1216 | Formless Flame Slash. | needs-hit-count-model | elementalDamage, generalDamage, timingCadence | hit-count-model:all=30percent; elemental-damage:all=3percent | component:hit-count-model:hit-count-model-required | hit-count-model |
| seasonal-talents:1602 | Illusory Countershock | needs-hit-count-model | baseAttackTerm, timingCadence | hit-count-model:all=30percent | component:hit-count-model:hit-count-model-required | hit-count-model |
| skills:1505 | Dance | needs-hit-count-model | baseAttackTerm, elementalDamage, generalDamage, timingCadence | hit-count-model:all=3flat | component:hit-count-model:hit-count-model-required | hit-count-model |
| skills:150501 | Dance | needs-hit-count-model | baseAttackTerm, elementalDamage, generalDamage, timingCadence | hit-count-model:all=3flat | component:hit-count-model:hit-count-model-required | hit-count-model |
| skills:150502 | Dance | needs-hit-count-model | baseAttackTerm, elementalDamage, generalDamage, timingCadence | hit-count-model:all=3flat | component:hit-count-model:hit-count-model-required | hit-count-model |
| skills:150503 | Dance | needs-hit-count-model | baseAttackTerm, elementalDamage, generalDamage, timingCadence | hit-count-model:all=3flat | component:hit-count-model:hit-count-model-required | hit-count-model |
| skills:150504 | Dance | needs-hit-count-model | baseAttackTerm, elementalDamage, generalDamage, timingCadence | hit-count-model:all=3flat | component:hit-count-model:hit-count-model-required | hit-count-model |
| skills:150505 | Dance | needs-hit-count-model | baseAttackTerm, elementalDamage, generalDamage, timingCadence | hit-count-model:all=3flat | component:hit-count-model:hit-count-model-required | hit-count-model |
| skills:150506 | Dance | needs-hit-count-model | baseAttackTerm, elementalDamage, generalDamage, timingCadence | hit-count-model:all=3flat | component:hit-count-model:hit-count-model-required | hit-count-model |
| skills:150507 | Dance | needs-hit-count-model | baseAttackTerm, elementalDamage, generalDamage, timingCadence | hit-count-model:all=3flat | component:hit-count-model:hit-count-model-required | hit-count-model |
| skills:150508 | Dance | needs-hit-count-model | baseAttackTerm, elementalDamage, generalDamage, timingCadence | hit-count-model:all=3flat | component:hit-count-model:hit-count-model-required | hit-count-model |
| skills:150509 | Dance | needs-hit-count-model | baseAttackTerm, elementalDamage, generalDamage, timingCadence | hit-count-model:all=3flat | component:hit-count-model:hit-count-model-required | hit-count-model |


## Needs Timing Model

| Key | Label | Status | Terms | Selected Values | Blockers | Selectors |
| --- | --- | --- | --- | --- | --- | --- |
| battle-imagines:1700440 | Arcane! Furious Hammer | needs-timing-model | baseAttackTerm, critical, generalDamage, physicalMagicEnhancement, timingCadence | cooldown-or-resource:all=2flat | component:cooldown-or-resource:timing-model-required | timing-cadence-model |
| battle-imagines:2110034 | Tina - Lower CD | needs-timing-model | timingCadence |  | component:cooldown-or-resource:tier-or-level-selection-required; component:cooldown-or-resource:timing-model-required | runtime-tier-or-level; timing-cadence-model |
| battle-imagines:2110042 | Crimson Foxen - Haste | needs-timing-model | timingCadence |  | component:haste-or-attack-speed:tier-or-level-selection-required; component:haste-or-attack-speed:timing-model-required | runtime-tier-or-level; timing-cadence-model |
| battle-imagines:2900340 | Arcane! Time Decree | needs-timing-model | timingCadence | cooldown-or-resource:all=100flat | component:cooldown-or-resource:timing-model-required | timing-cadence-model |
| battle-imagines:2900540 | Arcane! Flash Execution | needs-timing-model | baseAttackTerm, elementalDamage, generalDamage, physicalMagicEnhancement, timingCadence | cooldown-or-resource:target=20flat | component:cooldown-or-resource:timing-model-required | timing-cadence-model |
| battle-imagines:3921 | Arcane! Time Decree | needs-timing-model | timingCadence | cooldown-or-resource:all=100flat | component:cooldown-or-resource:timing-model-required | timing-cadence-model |
| battle-imagines:3922 | Arcane! Flash Execution | needs-timing-model | baseAttackTerm, elementalDamage, generalDamage, physicalMagicEnhancement, timingCadence | cooldown-or-resource:target=20flat | component:cooldown-or-resource:timing-model-required | timing-cadence-model |
| battle-imagines:3923 | Arcane! Furious Hammer | needs-timing-model | baseAttackTerm, critical, generalDamage, physicalMagicEnhancement, timingCadence | cooldown-or-resource:all=2flat | component:cooldown-or-resource:timing-model-required | timing-cadence-model |
| battle-imagines:3935 | Arcane! Thunder Roar | needs-timing-model | baseAttackTerm, elementalDamage, generalDamage, timingCadence | cooldown-or-resource:all=0.5flat | component:cooldown-or-resource:timing-model-required | timing-cadence-model |
| buffs:2010073 | Foodie's Grace | needs-timing-model | timingCadence | haste-or-attack-speed:all=2percent | component:haste-or-attack-speed:timing-model-required | timing-cadence-model |
| buffs:2110034 | Lower CD | needs-timing-model | timingCadence |  | component:cooldown-or-resource:tier-or-level-selection-required; component:cooldown-or-resource:timing-model-required | runtime-tier-or-level; timing-cadence-model |
| buffs:2110042 | Haste | needs-timing-model | baseAttackTerm, generalDamage, physicalMagicEnhancement, timingCadence |  | component:haste-or-attack-speed:tier-or-level-selection-required; component:haste-or-attack-speed:timing-model-required | runtime-tier-or-level; timing-cadence-model |
| buffs:2110115 | Frostforce | needs-timing-model | baseAttackTerm, elementalDamage, generalDamage, luckyStrikeBaseTerm, physicalMagicEnhancement, timingCadence | cooldown-or-resource:all=2flat | component:cooldown-or-resource:timing-model-required | timing-cadence-model; runtime-stack |
| buffs:2110116 | Frostforce - EXT | needs-timing-model | baseAttackTerm, elementalDamage, generalDamage, physicalMagicEnhancement, timingCadence | cooldown-or-resource:all=2flat | component:cooldown-or-resource:timing-model-required | timing-cadence-model; runtime-stack |
| buffs:2110123 | Flame of Luck | needs-timing-model | baseAttackTerm, elementalDamage, generalDamage, luckyEnhancement, physicalMagicEnhancement, timingCadence |  | component:cooldown-or-resource:timing-model-required | timing-cadence-model |
| buffs:2110134 | 法法菈-隐藏主动 | needs-timing-model | finalDamage, generalDamage, timingCadence | cooldown-or-resource:all=1flat | component:cooldown-or-resource:timing-model-required | timing-cadence-model; runtime-stack |
| buffs:2110135 | 罗罗拉-主动记时 | needs-timing-model | baseAttackTerm, generalDamage, timingCadence | cooldown-or-resource:all=2flat | component:cooldown-or-resource:timing-model-required | timing-cadence-model; runtime-stack |
| buffs:2110136 | 罗罗拉-玩家身上监控 | needs-timing-model | baseAttackTerm, generalDamage, timingCadence | cooldown-or-resource:all=2flat | component:cooldown-or-resource:timing-model-required | timing-cadence-model; runtime-stack |
| buffs:21416 | Slow | needs-timing-model | timingCadence | haste-or-attack-speed:all=30percent | component:haste-or-attack-speed:timing-model-required | timing-cadence-model |
| buffs:2200040 | Thunder Whirl | needs-timing-model | elementalDamage, timingCadence | cooldown-or-resource:all=1flat | component:cooldown-or-resource:timing-model-required | timing-cadence-model; runtime-stack |
| buffs:2200051 | Overdrive | needs-timing-model | baseAttackTerm, elementalDamage, generalDamage, physicalMagicEnhancement, timingCadence |  | component:cooldown-or-resource:timing-model-required | timing-cadence-model; runtime-stack |
| buffs:2200140 | 一闪狂刃 | needs-timing-model | elementalDamage, generalDamage, timingCadence | cooldown-or-resource:all=10percent; elemental-damage:all=10percent | component:cooldown-or-resource:timing-model-required | timing-cadence-model |
| buffs:2200150 | Bladewind Domain | needs-timing-model | elementalDamage, generalDamage, timingCadence |  | component:cooldown-or-resource:timing-model-required | timing-cadence-model |
| buffs:2200180 | 镰刀分裂 | needs-timing-model | elementalDamage, timingCadence | cooldown-or-resource:all=1flat | component:cooldown-or-resource:timing-model-required | timing-cadence-model |
| buffs:2200241 | Lightning Flash | needs-timing-model | baseAttackTerm, critical, elementalDamage, generalDamage, physicalMagicEnhancement, timingCadence | elemental-attack:all=2flat; haste-or-attack-speed:all=100percent | component:haste-or-attack-speed:timing-model-required | timing-cadence-model |
| buffs:2200330 | 幻影镰刀 | needs-timing-model | elementalDamage, timingCadence | cooldown-or-resource:all=2flat | component:cooldown-or-resource:timing-model-required | timing-cadence-model |
| buffs:2200400 | 雷符刀意 | needs-timing-model | baseAttackTerm, elementalDamage, generalDamage, timingCadence | cooldown-or-resource:all=20percent; target-resistance-mitigation:all=20percent | component:cooldown-or-resource:timing-model-required; component:target-resistance-mitigation:target-window-proof-required | timing-cadence-model; target-window-state |
| buffs:2200401 | Thunder Charm Blade Intent DMG Reduction | needs-timing-model | baseAttackTerm, elementalDamage, generalDamage, timingCadence | cooldown-or-resource:all=20percent; target-resistance-mitigation:all=20percent | component:cooldown-or-resource:timing-model-required; component:target-resistance-mitigation:target-window-proof-required | timing-cadence-model; target-window-state |
| buffs:2200410 | Infinite Thunder | needs-timing-model | elementalDamage, timingCadence | cooldown-or-resource:all=0.5flat | component:cooldown-or-resource:timing-model-required | timing-cadence-model |
| buffs:2200500 | Overdrive Refinement | needs-timing-model | baseAttackTerm, elementalDamage, generalDamage, physicalMagicEnhancement, timingCadence |  | component:cooldown-or-resource:timing-model-required | timing-cadence-model; runtime-stack |


## Needs Skill Stage Selector

| Key | Label | Status | Terms | Selected Values | Blockers | Selectors |
| --- | --- | --- | --- | --- | --- | --- |
| skills:1240 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |
| skills:124001 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |
| skills:124002 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |
| skills:124003 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |
| skills:124004 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |
| skills:124005 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |
| skills:124006 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |
| skills:124007 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |
| skills:124008 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |
| skills:124009 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |
| skills:124010 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |
| skills:124011 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |
| skills:124012 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |
| skills:124013 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |
| skills:124014 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |
| skills:124015 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |
| skills:124016 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |
| skills:124017 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |
| skills:124018 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |
| skills:124019 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |
| skills:124020 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |
| skills:124021 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |
| skills:124022 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |
| skills:124023 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |
| skills:124024 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |
| skills:124025 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |
| skills:124026 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |
| skills:124027 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |
| skills:124028 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |
| skills:124029 | Frozen Gale | needs-skill-stage-selector | elementalDamage, generalDamage, physicalMagicEnhancement |  | component:generic-damage:skill-stage-selector-required | skill-stage-or-charge-selector |


## Needs Value Ramp Model

| Key | Label | Status | Terms | Selected Values | Blockers | Selectors |
| --- | --- | --- | --- | --- | --- | --- |
| buffs:2200650 | Enhanced Thunderstrike | needs-value-ramp-model | elementalDamage, generalDamage, luckyEnhancement |  | component:elemental-damage:value-ramp-selector-required; component:generic-damage:threshold-state-selector-required | value-ramp-or-stack-selector; threshold-or-consumed-state |
| buffs:2205220 | Combat Expertise | needs-value-ramp-model | baseAttackTerm |  | component:atk:value-ramp-selector-required | value-ramp-or-stack-selector |
| buffs:2205221 | Combat Expertise | needs-value-ramp-model | baseAttackTerm |  | component:atk:value-ramp-selector-required | value-ramp-or-stack-selector |
| talents:163 | Enhanced Thunderstrike | needs-value-ramp-model | elementalDamage, generalDamage, luckyEnhancement | generic-damage:owner=20percent; generic-damage:party=1percent | component:elemental-damage:value-ramp-selector-required | runtime-scope; value-ramp-or-stack-selector |


## Needs Value Polarity

| Key | Label | Status | Terms | Selected Values | Blockers | Selectors |
| --- | --- | --- | --- | --- | --- | --- |
| buffs:3002270 | Cinder of Reverie | needs-value-polarity | generalDamage, seasonDamage |  | component:season-damage:value-polarity-selector-required | value-polarity-selector |
| buffs:700031 | ATK down | needs-value-polarity | baseAttackTerm |  | component:atk:value-polarity-selector-required | value-polarity-selector |
| buffs:881758 | Rock Serpents' Resent | needs-value-polarity | baseAttackTerm |  | component:atk:value-polarity-selector-required; component:atk:value-ramp-selector-required | value-ramp-or-stack-selector; value-polarity-selector; runtime-stack |
| buffs:882342 | Weak | needs-value-polarity | baseAttackTerm |  | component:atk:value-polarity-selector-required | value-polarity-selector |
| buffs:995248 | ATK -10% | needs-value-polarity | baseAttackTerm |  | component:atk:value-polarity-selector-required | value-polarity-selector |
| seasonal-talents:181 | Dreamscape Transfer | needs-value-polarity | finalDamage, generalDamage, seasonDamage, skillMultiplier | final-damage:owner=-40percent; final-damage:party=40percent; season-damage:all=40percent | component:skill-multiplier:value-polarity-selector-required | runtime-scope; value-polarity-selector |


## Needs Threshold Model

| Key | Label | Status | Terms | Selected Values | Blockers | Selectors |
| --- | --- | --- | --- | --- | --- | --- |
| buffs:3401105 | uid:3401105 | needs-threshold-model | baseAttackTerm, elementalDamage, generalDamage, physicalMagicEnhancement, skillMultiplier | skill-multiplier:all=150percent | component:elemental-attack:threshold-state-selector-required | threshold-or-consumed-state |
| linktext-tooltips:1105 | Ultimate Slash | needs-threshold-model | baseAttackTerm, skillMultiplier | skill-multiplier:all=150percent | component:elemental-attack:threshold-state-selector-required | threshold-or-consumed-state |


## Needs Target Window Proof

| Key | Label | Status | Terms | Selected Values | Blockers | Selectors |
| --- | --- | --- | --- | --- | --- | --- |
| buffs:2110025 | 绝技，猪突猛进 | needs-target-window-proof | baseAttackTerm, generalDamage, physicalMagicEnhancement | target-vulnerability:target=100percent; target-vulnerability:all=100percent | component:target-vulnerability:target-window-proof-required | target-window-state |
| buffs:2201331 | Earthfort Spec | needs-target-window-proof | baseAttackTerm, elementalDamage, generalDamage | target-resistance-mitigation:all=0.6percent; elemental-damage:all=6percent | component:target-resistance-mitigation:target-window-proof-required | target-window-state; runtime-stack |
| buffs:2204510 | Frost Assault | needs-target-window-proof | baseAttackTerm, elementalDamage | target-resistance-mitigation:all=10percent | component:target-resistance-mitigation:target-window-proof-required | target-window-state; runtime-stack |
| buffs:2206600 | 圣环守护 | needs-target-window-proof | baseAttackTerm, generalDamage, physicalMagicEnhancement | atk:all=1flat | component:target-resistance-mitigation:ambiguous-scoped-value:all; component:target-resistance-mitigation:target-window-proof-required | target-window-state |
| buffs:803063 | Bee Venom | needs-target-window-proof | baseAttackTerm | target-resistance-mitigation:all=25percent | component:target-resistance-mitigation:target-window-proof-required | target-window-state |
| buffs:827191 | Sunfire Sigil | needs-target-window-proof | baseAttackTerm, elementalDamage, generalDamage, skillMultiplier | target-vulnerability:all=5percent; skill-multiplier:all=5percent | component:target-vulnerability:target-window-proof-required | target-window-state; runtime-stack |
| buffs:827192 | Moonstrike Sigil | needs-target-window-proof | baseAttackTerm, elementalDamage, generalDamage, skillMultiplier | target-vulnerability:all=5percent; skill-multiplier:all=5percent | component:target-vulnerability:target-window-proof-required | target-window-state; runtime-stack |
| buffs:881613 | Void Corruption | needs-target-window-proof | generalDamage | target-vulnerability:target=1percent; target-vulnerability:all=1percent | component:target-vulnerability:target-window-proof-required | target-window-state; runtime-stack |
| buffs:900109 | 易伤50% | needs-target-window-proof | generalDamage | target-vulnerability:all=50percent | component:target-vulnerability:target-window-proof-required | target-window-state |
| buffs:995016 | Slow down by 80% | needs-target-window-proof | baseAttackTerm | target-resistance-mitigation:all=80percent | component:target-resistance-mitigation:target-window-proof-required | target-window-state |
| seasonal-talents:132 | Enfeeblement Aura | needs-target-window-proof | generalDamage | target-vulnerability:all=10percent; target-vulnerability:target=10percent | component:target-vulnerability:target-window-proof-required | target-window-state |
| skills:102640 | Stunt! Boarrier Rush | needs-target-window-proof | baseAttackTerm, generalDamage, physicalMagicEnhancement | target-vulnerability:target=100percent; target-vulnerability:all=100percent | component:target-vulnerability:target-window-proof-required | target-window-state |
| skills:10264001 | Stunt! Boarrier Rush | needs-target-window-proof | baseAttackTerm, generalDamage, physicalMagicEnhancement | target-vulnerability:target=100percent; target-vulnerability:all=100percent | component:target-vulnerability:target-window-proof-required | target-window-state |
| skills:102658 | Stunt! Boarrier Rush | needs-target-window-proof | baseAttackTerm, generalDamage, physicalMagicEnhancement | target-vulnerability:target=100percent; target-vulnerability:all=100percent | component:target-vulnerability:target-window-proof-required | target-window-state |
| skills:10265801 | Stunt! Boarrier Rush | needs-target-window-proof | baseAttackTerm, generalDamage, physicalMagicEnhancement | target-vulnerability:target=100percent; target-vulnerability:all=100percent | component:target-vulnerability:target-window-proof-required | target-window-state |
| skills:1090703 | Spiral Thrust | needs-target-window-proof | baseAttackTerm, generalDamage, physicalMagicEnhancement | target-vulnerability:target=50percent; target-vulnerability:all=50percent | component:target-vulnerability:target-window-proof-required | target-window-state |
| skills:109070301 | Spiral Thrust | needs-target-window-proof | baseAttackTerm, generalDamage, physicalMagicEnhancement | target-vulnerability:target=50percent; target-vulnerability:all=50percent | component:target-vulnerability:target-window-proof-required | target-window-state |
| skills:1421 | Spiral Thrust | needs-target-window-proof | baseAttackTerm, generalDamage, physicalMagicEnhancement | target-vulnerability:target=50percent; target-vulnerability:all=50percent | component:target-vulnerability:target-window-proof-required | target-window-state |
| skills:142101 | Spiral Thrust | needs-target-window-proof | baseAttackTerm, generalDamage, physicalMagicEnhancement | target-vulnerability:target=50percent; target-vulnerability:all=50percent | component:target-vulnerability:target-window-proof-required | target-window-state |
| skills:142102 | Spiral Thrust | needs-target-window-proof | baseAttackTerm, generalDamage, physicalMagicEnhancement | target-vulnerability:target=50percent; target-vulnerability:all=50percent | component:target-vulnerability:target-window-proof-required | target-window-state |
| skills:142103 | Spiral Thrust | needs-target-window-proof | baseAttackTerm, generalDamage, physicalMagicEnhancement | target-vulnerability:target=50percent; target-vulnerability:all=50percent | component:target-vulnerability:target-window-proof-required | target-window-state |
| skills:142104 | Spiral Thrust | needs-target-window-proof | baseAttackTerm, generalDamage, physicalMagicEnhancement | target-vulnerability:target=50percent; target-vulnerability:all=50percent | component:target-vulnerability:target-window-proof-required | target-window-state |
| skills:142105 | Spiral Thrust | needs-target-window-proof | baseAttackTerm, generalDamage, physicalMagicEnhancement | target-vulnerability:target=50percent; target-vulnerability:all=50percent | component:target-vulnerability:target-window-proof-required | target-window-state |
| skills:142106 | Spiral Thrust | needs-target-window-proof | baseAttackTerm, generalDamage, physicalMagicEnhancement | target-vulnerability:target=50percent; target-vulnerability:all=50percent | component:target-vulnerability:target-window-proof-required | target-window-state |
| skills:142107 | Spiral Thrust | needs-target-window-proof | baseAttackTerm, generalDamage, physicalMagicEnhancement | target-vulnerability:target=50percent; target-vulnerability:all=50percent | component:target-vulnerability:target-window-proof-required | target-window-state |
| skills:142108 | Spiral Thrust | needs-target-window-proof | baseAttackTerm, generalDamage, physicalMagicEnhancement | target-vulnerability:target=50percent; target-vulnerability:all=50percent | component:target-vulnerability:target-window-proof-required | target-window-state |
| skills:142109 | Spiral Thrust | needs-target-window-proof | baseAttackTerm, generalDamage, physicalMagicEnhancement | target-vulnerability:target=50percent; target-vulnerability:all=50percent | component:target-vulnerability:target-window-proof-required | target-window-state |
| skills:142110 | Spiral Thrust | needs-target-window-proof | baseAttackTerm, generalDamage, physicalMagicEnhancement | target-vulnerability:target=50percent; target-vulnerability:all=50percent | component:target-vulnerability:target-window-proof-required | target-window-state |
| skills:142111 | Spiral Thrust | needs-target-window-proof | baseAttackTerm, generalDamage, physicalMagicEnhancement | target-vulnerability:target=50percent; target-vulnerability:all=50percent | component:target-vulnerability:target-window-proof-required | target-window-state |
| skills:142112 | Spiral Thrust | needs-target-window-proof | baseAttackTerm, generalDamage, physicalMagicEnhancement | target-vulnerability:target=50percent; target-vulnerability:all=50percent | component:target-vulnerability:target-window-proof-required | target-window-state |


## Needs Tier Or Level Selection

| Key | Label | Status | Terms | Selected Values | Blockers | Selectors |
| --- | --- | --- | --- | --- | --- | --- |
| battle-imagines:2110024 | Muku Warrior - Super Critical | needs-tier-selection | critical, generalDamage |  | component:critical-damage:tier-or-level-selection-required; component:critical-rate:expected-value-model-required; component:critical-rate:tier-or-level-selection-required | runtime-tier-or-level; runtime-tier-or-level; critical-expected-value |
| battle-imagines:2110065 | Brigand Leader - Fiery Battle Will | needs-tier-selection | baseAttackTerm, luckyStrikeBaseTerm |  | component:atk:tier-or-level-selection-required | runtime-tier-or-level; runtime-scope |
| battle-imagines:2110095 | Muku Warrior - Crit Enhancement | needs-tier-selection | critical, generalDamage |  | component:critical-damage:tier-or-level-selection-required; component:critical-rate:expected-value-model-required; component:critical-rate:tier-or-level-selection-required | runtime-tier-or-level; runtime-tier-or-level; critical-expected-value |
| battle-imagines:2110107 | Boarrier Tyrant - Enhanced Special Attack | needs-tier-selection | baseAttackTerm, generalDamage |  | component:battle-imagine-value:tier-or-level-selection-required | runtime-tier-or-level |
| battle-imagines:2110121 | Crimson Foxen - Phantom Rally | needs-tier-selection | baseAttackTerm, luckyStrikeBaseTerm |  | component:atk:tier-or-level-selection-required | runtime-tier-or-level |
| buffs:2110024 | Super Critical | needs-tier-selection | baseAttackTerm, critical, generalDamage, physicalMagicEnhancement |  | component:critical-damage:tier-or-level-selection-required; component:critical-rate:expected-value-model-required; component:critical-rate:tier-or-level-selection-required | runtime-tier-or-level; runtime-tier-or-level; critical-expected-value |
| buffs:2110065 | Fiery Battle Will | needs-tier-selection | baseAttackTerm, elementalDamage, luckyStrikeBaseTerm |  | component:atk:tier-or-level-selection-required | runtime-tier-or-level; runtime-scope; runtime-stack |
| buffs:2110095 | Crit Enhancement | needs-tier-selection | baseAttackTerm, critical, generalDamage, physicalMagicEnhancement |  | component:critical-damage:tier-or-level-selection-required; component:critical-rate:expected-value-model-required; component:critical-rate:tier-or-level-selection-required | runtime-tier-or-level; runtime-tier-or-level; critical-expected-value |
| buffs:2110107 | Enhanced Special Attack | needs-tier-selection | baseAttackTerm, generalDamage, physicalMagicEnhancement | target-vulnerability:target=100percent; target-vulnerability:all=100percent | component:battle-imagine-value:tier-or-level-selection-required; component:target-vulnerability:target-window-proof-required | runtime-tier-or-level; target-window-state |
| buffs:2110117 | Caprahorn Shield | needs-tier-selection | finalDamage, generalDamage, timingCadence | cooldown-or-resource:all=1flat | component:battle-imagine-value:tier-or-level-selection-required; component:cooldown-or-resource:timing-model-required | runtime-tier-or-level; runtime-stack; timing-cadence-model |
| buffs:2110121 | Phantom Rally | needs-tier-selection | baseAttackTerm, generalDamage, luckyStrikeBaseTerm, physicalMagicEnhancement |  | component:atk:tier-or-level-selection-required | runtime-tier-or-level |


## Needs Seasonal Factor Selector

| Key | Label | Status | Terms | Selected Values | Blockers | Selectors |
| --- | --- | --- | --- | --- | --- | --- |
| buffs:3050010 | 雷影G1 | needs-seasonal-factor-selector | generalDamage, seasonDamage |  | component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector |
| buffs:3050020 | 雷影G2 | needs-seasonal-factor-selector | generalDamage, seasonDamage |  | component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector |
| buffs:3050030 | 雷影G3 | needs-seasonal-factor-selector | generalDamage, seasonDamage |  | component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector |
| buffs:3050040 | 雷影G4 | needs-seasonal-factor-selector | generalDamage, seasonDamage |  | component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector |
| buffs:3050050 | 雷影G5 | needs-seasonal-factor-selector | generalDamage, seasonDamage, timingCadence | cooldown-or-resource:all=1flat | component:cooldown-or-resource:timing-model-required; component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector; timing-cadence-model |
| buffs:3050060 | 雷影G6 | needs-seasonal-factor-selector | generalDamage, seasonDamage |  | component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector |
| buffs:3050070 | 雷影G7 | needs-seasonal-factor-selector | generalDamage, seasonDamage |  | component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector |
| buffs:3050080 | 雷影G8 | needs-seasonal-factor-selector | generalDamage, seasonDamage |  | component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector |
| buffs:3050090 | 雷影G9 | needs-seasonal-factor-selector | baseAttackTerm, generalDamage, seasonDamage |  | component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector |
| buffs:3050100 | 雷影G10 | needs-seasonal-factor-selector | generalDamage, seasonDamage |  | component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector |
| buffs:3050130 | 无穷雷霆之力期间持续获得雷压 | needs-seasonal-factor-selector | generalDamage, seasonDamage |  | component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector; runtime-stack |
| buffs:3050140 | 镰车上限1，放雷霆之镰 | needs-seasonal-factor-selector | generalDamage, seasonDamage |  | component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector |
| buffs:3050150 | 千雷闪影之意期间霹雳连斩触发雷击，增加电荷 | needs-seasonal-factor-selector | generalDamage, seasonDamage, timingCadence | cooldown-or-resource:all=3flat | component:cooldown-or-resource:timing-model-required; component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector; timing-cadence-model |
| buffs:3051010 | 青岚G1 | needs-seasonal-factor-selector | generalDamage, seasonDamage |  | component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector |
| buffs:3051020 | 青岚G2 | needs-seasonal-factor-selector | generalDamage, seasonDamage |  | component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector |
| buffs:3051030 | 青岚G3 | needs-seasonal-factor-selector | generalDamage, seasonDamage |  | component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector |
| buffs:3051040 | 青岚G4 | needs-seasonal-factor-selector | generalDamage, seasonDamage |  | component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector |
| buffs:3051050 | 青岚G5 | needs-seasonal-factor-selector | generalDamage, luckyEnhancement, seasonDamage |  | component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector |
| buffs:3051070 | 青岚G7 | needs-seasonal-factor-selector | generalDamage, seasonDamage |  | component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector |
| buffs:3051080 | 青岚G8 | needs-seasonal-factor-selector | generalDamage, seasonDamage |  | component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector |
| buffs:3051090 | 青岚G9 | needs-seasonal-factor-selector | generalDamage, luckyEnhancement, seasonDamage |  | component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector |
| buffs:3051100 | 青岚G10 | needs-seasonal-factor-selector | critical, generalDamage, seasonDamage |  | component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector |
| buffs:3051110 | 青岚G11 | needs-seasonal-factor-selector | generalDamage, seasonDamage, timingCadence | cooldown-or-resource:all=5percent | component:cooldown-or-resource:timing-model-required; component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector; timing-cadence-model |
| buffs:3051120 | 勇气风环每命中多次，触发一次大的 | needs-seasonal-factor-selector | generalDamage, physicalMagicEnhancement, seasonDamage, skillMultiplier | skill-multiplier:all=1500percent | component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector |
| buffs:3052010 | 冰魔G1 | needs-seasonal-factor-selector | generalDamage, seasonDamage |  | component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector |
| buffs:3052020 | 冰魔G2 | needs-seasonal-factor-selector | generalDamage, seasonDamage |  | component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector |
| buffs:3052030 | 冰魔G3 | needs-seasonal-factor-selector | generalDamage, seasonDamage |  | component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector |
| buffs:3052040 | 冰魔G4 | needs-seasonal-factor-selector | generalDamage, seasonDamage |  | component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector |
| buffs:3052050 | 冰魔G5 | needs-seasonal-factor-selector | generalDamage, seasonDamage |  | component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector |
| buffs:3052060 | 冰魔G6 | needs-seasonal-factor-selector | generalDamage, seasonDamage |  | component:seasonal-factor-damage:value-ladder-selection-required:encounter-selected-factor-grade-required | seasonal-factor-loadout-selector |


## Needs Value Ladder Selector

| Key | Label | Status | Terms | Selected Values | Blockers | Selectors |
| --- | --- | --- | --- | --- | --- | --- |
| buffs:1301 | 法杖天生回能量BUFF | needs-value-ladder-selector | baseAttackTerm, luckyStrikeBaseTerm |  | component:atk:value-ladder-selection-required | runtime-value-ladder |
| buffs:3050110 | 雷影G11 | needs-value-ladder-selector | elementalDamage, generalDamage |  | component:elemental-damage:value-ladder-selection-required | runtime-value-ladder |
| buffs:3050120 | 终极一斩不再限制伤害上限 | needs-value-ladder-selector | baseAttackTerm, elementalDamage, generalDamage, skillMultiplier | elemental-attack:all=1flat; skill-multiplier:all=150percent | component:elemental-damage:value-ladder-selection-required | runtime-value-ladder |
| buffs:3054060 | 神盾G6 | needs-value-ladder-selector | baseAttackTerm, luckyStrikeBaseTerm | adaptive-primary-stat:all=1percent | component:adaptive-primary-stat:stat-conversion-model-required; component:atk:value-ladder-selection-required | runtime-value-ladder; stat-conversion-model |
| buffs:3054110 | 神盾G11 | needs-value-ladder-selector | baseAttackTerm, luckyStrikeBaseTerm |  | component:atk:value-ladder-selection-required | runtime-value-ladder |
| buffs:3054130 | 神盾狂想-挨打清算 | needs-value-ladder-selector | critical, generalDamage, timingCadence | hit-count-model:all=30percent | component:critical-damage:value-ladder-selection-required; component:hit-count-model:hit-count-model-required | runtime-value-ladder; hit-count-model |
| buffs:3055050 | 巨刃G5 | needs-value-ladder-selector | baseAttackTerm, luckyStrikeBaseTerm | adaptive-primary-stat:all=1percent | component:adaptive-primary-stat:stat-conversion-model-required; component:atk:value-ladder-selection-required | runtime-value-ladder; stat-conversion-model |
| buffs:3055150 | 巨刃狂想-岩怒反击 | needs-value-ladder-selector | critical, generalDamage |  | component:critical-damage:value-ladder-selection-required | runtime-value-ladder |
| buffs:3056070 | 森语G7 | needs-value-ladder-selector | baseAttackTerm, luckyStrikeBaseTerm, physicalMagicEnhancement |  | component:matk:value-ladder-selection-required | runtime-value-ladder |
| buffs:5001 | 斩计数Buff | needs-value-ladder-selector | critical | critical-rate:all=30percent | component:critical-damage:value-ladder-selection-required; component:critical-rate:expected-value-model-required | runtime-value-ladder; critical-expected-value |
| factors:3050110 | Stormblade X11 | needs-value-ladder-selector | elementalDamage, generalDamage |  | component:elemental-damage:value-ladder-selection-required | runtime-value-ladder |
| factors:3050120 | Stormblade Rhapsody X1 | needs-value-ladder-selector | baseAttackTerm, elementalDamage, generalDamage, skillMultiplier | elemental-attack:all=1flat; skill-multiplier:all=150percent | component:elemental-damage:value-ladder-selection-required | runtime-value-ladder |
| factors:3054060 | Shield Knight X6 | needs-value-ladder-selector | baseAttackTerm, luckyStrikeBaseTerm | adaptive-primary-stat:all=1percent | component:adaptive-primary-stat:stat-conversion-model-required; component:atk:value-ladder-selection-required | runtime-value-ladder; stat-conversion-model |
| factors:3054110 | Shield Knight X11 | needs-value-ladder-selector | baseAttackTerm, luckyStrikeBaseTerm |  | component:atk:value-ladder-selection-required | runtime-value-ladder |
| factors:3054130 | Shield Knight Rhapsody X2 | needs-value-ladder-selector | critical, generalDamage, timingCadence | hit-count-model:all=30percent | component:critical-damage:value-ladder-selection-required; component:hit-count-model:hit-count-model-required | runtime-value-ladder; hit-count-model |
| factors:3055050 | Heavy Guardian X5 | needs-value-ladder-selector | baseAttackTerm, luckyStrikeBaseTerm | adaptive-primary-stat:all=1percent | component:adaptive-primary-stat:stat-conversion-model-required; component:atk:value-ladder-selection-required | runtime-value-ladder; stat-conversion-model |
| factors:3055150 | Heavy Guardian Rhapsody X4 | needs-value-ladder-selector | critical, generalDamage |  | component:critical-damage:value-ladder-selection-required | runtime-value-ladder |
| factors:3056070 | Verdant Oracle X7 | needs-value-ladder-selector | baseAttackTerm, luckyStrikeBaseTerm, physicalMagicEnhancement |  | component:matk:value-ladder-selection-required | runtime-value-ladder |
| seasonal-talents:112 | Blood Pact (Curse) | needs-value-ladder-selector | baseAttackTerm, luckyStrikeBaseTerm |  | component:atk:value-ladder-selection-required | runtime-value-ladder |
| seasonal-talents:113 | Bloodwrath Conversion | needs-value-ladder-selector | baseAttackTerm, luckyStrikeBaseTerm |  | component:atk:value-ladder-selection-required | runtime-value-ladder |
| seasonal-talents:115 | Tide-Turner's Resolve | needs-value-ladder-selector | elementalDamage, generalDamage, luckyEnhancement |  | component:generic-damage:value-ladder-selection-required | runtime-value-ladder; runtime-stack |
| seasonal-talents:1301 | Mirage Dream | needs-value-ladder-selector | baseAttackTerm, generalDamage, luckyStrikeBaseTerm, seasonDamage |  | component:atk:value-ladder-selection-required | runtime-value-ladder; runtime-stack |
| seasonal-talents:1302 | Dual Ascension Formation | needs-value-ladder-selector | baseAttackTerm, luckyStrikeBaseTerm |  | component:atk:value-ladder-selection-required | runtime-value-ladder; runtime-stack |
| seasonal-talents:1303 | Battlestart - Rare | needs-value-ladder-selector | baseAttackTerm, luckyStrikeBaseTerm |  | component:atk:value-ladder-selection-required | runtime-value-ladder; runtime-stack |
| seasonal-talents:1305 | Rapid Assault Stacks | needs-value-ladder-selector | baseAttackTerm, luckyStrikeBaseTerm, timingCadence | haste-or-attack-speed:all=0.5percent | component:atk:value-ladder-selection-required; component:haste-or-attack-speed:timing-model-required | runtime-value-ladder; runtime-stack; timing-cadence-model |
| seasonal-talents:1310 | Grace | needs-value-ladder-selector | baseAttackTerm, critical, finalDamage, luckyEnhancement, luckyStrikeBaseTerm, timingCadence | critical-rate:all=5percent; mastery-stat:all=5percent; haste-or-attack-speed:all=5percent | component:atk:value-ladder-selection-required; component:critical-rate:expected-value-model-required; component:haste-or-attack-speed:timing-model-required | critical-expected-value; runtime-stack; runtime-value-ladder |
| seasonal-talents:138 | Overload Crit | needs-value-ladder-selector | critical, generalDamage |  | component:critical-damage:value-ladder-selection-required; component:critical-rate:expected-value-model-required; component:critical-rate:value-ladder-selection-required | runtime-value-ladder; runtime-value-ladder; critical-expected-value |
| seasonal-talents:5001 | Overload Crit | needs-value-ladder-selector | critical, generalDamage | critical-rate:all=30percent | component:critical-damage:value-ladder-selection-required; component:critical-rate:expected-value-model-required | runtime-value-ladder; critical-expected-value |
| talents:105 | Iaido Mastery | needs-value-ladder-selector | critical, elementalDamage, generalDamage, luckyEnhancement | generic-damage:all=25percent; mastery-stat:all=10percent | component:critical-damage:value-ladder-selection-required; component:critical-rate:expected-value-model-required; component:critical-rate:value-ladder-selection-required | runtime-value-ladder; runtime-value-ladder; critical-expected-value |
| talents:1106 | Direwolf's Hunger | needs-value-ladder-selector | baseAttackTerm, critical, generalDamage, luckyStrikeBaseTerm, skillMultiplier, timingCadence | adaptive-primary-stat:all=1percent; critical-damage:all=2percent; skill-multiplier:all=2percent | component:adaptive-primary-stat:stat-conversion-model-required; component:atk:value-ladder-selection-required; component:haste-or-attack-speed:timing-model-required | runtime-value-ladder; runtime-stack; stat-conversion-model |


## Needs Value Selection

| Key | Label | Status | Terms | Selected Values | Blockers | Selectors |
| --- | --- | --- | --- | --- | --- | --- |
| buffs:2200600 | 神罚镰刃 | needs-value-selection | critical, elementalDamage, finalDamage, generalDamage, luckyChance, luckyEnhancement | lucky-rate:all=45percent | component:elemental-damage:ambiguous-scoped-value:all; component:final-damage:ambiguous-scoped-value:all; component:lucky-rate:expected-value-model-required | lucky-expected-value |
| buffs:2200601 | Divine Scythe | needs-value-selection | critical, elementalDamage, finalDamage, generalDamage, luckyChance, luckyEnhancement, seasonDamage | lucky-rate:all=45percent | component:critical-rate:expected-value-model-required; component:critical-rate:value-ladder-selection-required; component:elemental-damage:ambiguous-scoped-value:all | runtime-value-ladder; critical-expected-value; runtime-value-ladder |
| buffs:2200641 | Chaos Breaker | needs-value-selection | baseAttackTerm, critical, elementalDamage, generalDamage, physicalMagicEnhancement, skillMultiplier, timingCadence | skill-multiplier:all=500percent | component:elemental-attack:ambiguous-scoped-value:all | runtime-stack |
| buffs:2200680 | Moonstrike Sharp Strike | needs-value-selection | baseAttackTerm, critical, elementalDamage, generalDamage, physicalMagicEnhancement, skillMultiplier, timingCadence | skill-multiplier:all=500percent | component:elemental-attack:ambiguous-scoped-value:all |  |
| buffs:2200740 | 雷霆神威 | needs-value-selection | elementalDamage, generalDamage |  | component:elemental-damage:ambiguous-scoped-value:all |  |
| buffs:2201500 | Starfall | needs-value-selection | baseAttackTerm, elementalDamage, generalDamage, physicalMagicEnhancement, skillMultiplier, timingCadence | elemental-damage:all=10percent | component:cooldown-or-resource:timing-model-required; component:skill-multiplier:ambiguous-scoped-value:all; component:skill-multiplier:ambiguous-scoped-value:target | timing-cadence-model; runtime-stack |
| buffs:2201501 | Starfall | needs-value-selection | baseAttackTerm, elementalDamage, generalDamage, physicalMagicEnhancement, skillMultiplier, timingCadence | elemental-damage:all=10percent | component:cooldown-or-resource:timing-model-required; component:skill-multiplier:ambiguous-scoped-value:all; component:skill-multiplier:ambiguous-scoped-value:target | timing-cadence-model; runtime-stack |
| buffs:2201510 | Rock Master | needs-value-selection | baseAttackTerm, elementalDamage, generalDamage, physicalMagicEnhancement, skillMultiplier, timingCadence | cooldown-or-resource:all=500percent; elemental-damage:all=10percent | component:cooldown-or-resource:timing-model-required; component:skill-multiplier:ambiguous-scoped-value:all; component:skill-multiplier:ambiguous-scoped-value:target | timing-cadence-model |
| buffs:2201511 | Rock Master | needs-value-selection | baseAttackTerm, elementalDamage, generalDamage, physicalMagicEnhancement, skillMultiplier, timingCadence | cooldown-or-resource:all=500percent; elemental-damage:all=10percent | component:cooldown-or-resource:timing-model-required; component:skill-multiplier:ambiguous-scoped-value:all; component:skill-multiplier:ambiguous-scoped-value:target | timing-cadence-model |
| buffs:2202570 | Luck Damage | needs-value-selection | generalDamage, luckyEnhancement, skillMultiplier |  | component:lucky-damage:ambiguous-scoped-value:all; component:skill-multiplier:ambiguous-scoped-value:all |  |
| buffs:2203040 | Wolf Pact | needs-value-selection | baseAttackTerm, generalDamage, physicalMagicEnhancement, skillMultiplier, timingCadence | atk:all=30percent; hit-count-model:all=30percent | component:hit-count-model:hit-count-model-required; component:skill-multiplier:ambiguous-scoped-value:all | hit-count-model |
| buffs:2203070 | Direwolf's Hunger | needs-value-selection | baseAttackTerm, critical, generalDamage, skillMultiplier, timingCadence | adaptive-primary-stat:all=1percent; critical-damage:all=2percent; skill-multiplier:all=2percent | component:adaptive-primary-stat:stat-conversion-model-required; component:atk:ambiguous-scoped-value:all; component:haste-or-attack-speed:timing-model-required | stat-conversion-model; runtime-stack; timing-cadence-model |
| buffs:2203150 | 光能之矢 | needs-value-selection | baseAttackTerm, critical, elementalDamage, generalDamage, skillMultiplier, timingCadence | cooldown-or-resource:target=2flat; critical-damage:all=1percent; elemental-damage:target=1percent | component:cooldown-or-resource:timing-model-required; component:critical-rate:ambiguous-scoped-value:all; component:critical-rate:expected-value-model-required | timing-cadence-model; runtime-stack; critical-expected-value |
| buffs:2203190 | Meteor | needs-value-selection | baseAttackTerm, critical, elementalDamage, generalDamage, physicalMagicEnhancement, skillMultiplier, timingCadence | cooldown-or-resource:target=2flat; critical-damage:all=1percent; elemental-damage:target=1percent | component:cooldown-or-resource:timing-model-required; component:critical-rate:ambiguous-scoped-value:all; component:critical-rate:expected-value-model-required | timing-cadence-model; runtime-stack; critical-expected-value |
| buffs:2203220 | 暴击双生 | needs-value-selection | critical, generalDamage, timingCadence | cooldown-or-resource:all=2flat; critical-rate:all=1percent | component:cooldown-or-resource:timing-model-required; component:critical-damage:ambiguous-scoped-value:all; component:critical-rate:expected-value-model-required | timing-cadence-model; critical-expected-value |
| buffs:2203230 | Focused Shot | needs-value-selection | baseAttackTerm, critical, elementalDamage, generalDamage, skillMultiplier, timingCadence | cooldown-or-resource:target=2flat; critical-damage:all=1percent; elemental-damage:target=1percent | component:cooldown-or-resource:timing-model-required; component:critical-rate:ambiguous-scoped-value:all; component:critical-rate:expected-value-model-required | timing-cadence-model; runtime-stack; critical-expected-value |
| buffs:2203231 | Focused Shot | needs-value-selection | baseAttackTerm, critical, elementalDamage, generalDamage, skillMultiplier, timingCadence | cooldown-or-resource:target=2flat; critical-damage:all=1percent; elemental-damage:target=1percent | component:cooldown-or-resource:timing-model-required; component:critical-rate:ambiguous-scoped-value:all; component:critical-rate:expected-value-model-required | timing-cadence-model; runtime-stack; critical-expected-value |
| buffs:2203370 | Beast Tidal Power | needs-value-selection | elementalDamage |  | component:elemental-damage:ambiguous-scoped-value:all |  |
| buffs:2203540 | Focused Concentration | needs-value-selection | baseAttackTerm, critical, elementalDamage, generalDamage, skillMultiplier, timingCadence | cooldown-or-resource:target=2flat; critical-damage:all=1percent; elemental-damage:target=1percent | component:cooldown-or-resource:timing-model-required; component:critical-rate:ambiguous-scoped-value:all; component:critical-rate:expected-value-model-required | timing-cadence-model; runtime-stack; critical-expected-value |
| buffs:2203541 | Focused Concentration | needs-value-selection | baseAttackTerm, critical, elementalDamage, generalDamage, skillMultiplier, timingCadence | cooldown-or-resource:target=2flat; critical-damage:all=1percent; elemental-damage:target=1percent | component:cooldown-or-resource:timing-model-required; component:critical-rate:ambiguous-scoped-value:all; component:critical-rate:expected-value-model-required | timing-cadence-model; runtime-stack; critical-expected-value |
| buffs:2203570 | Light Energy Stasis | needs-value-selection | baseAttackTerm, critical, elementalDamage, generalDamage, physicalMagicEnhancement, skillMultiplier, timingCadence | cooldown-or-resource:target=2flat; critical-damage:all=1percent; elemental-damage:target=1percent | component:cooldown-or-resource:timing-model-required; component:critical-rate:ambiguous-scoped-value:all; component:critical-rate:expected-value-model-required | timing-cadence-model; runtime-stack; critical-expected-value |
| buffs:2203590 | 鹰眼 | needs-value-selection | baseAttackTerm, critical, elementalDamage, generalDamage, physicalMagicEnhancement, skillMultiplier, timingCadence | cooldown-or-resource:target=2flat; critical-damage:all=1percent; elemental-damage:target=1percent | component:cooldown-or-resource:timing-model-required; component:critical-rate:ambiguous-scoped-value:all; component:critical-rate:expected-value-model-required | timing-cadence-model; runtime-stack; critical-expected-value |
| buffs:2203591 | Eagle Eye | needs-value-selection | baseAttackTerm, critical, elementalDamage, generalDamage, physicalMagicEnhancement, skillMultiplier, timingCadence | cooldown-or-resource:target=2flat; critical-damage:all=1percent; elemental-damage:target=1percent | component:cooldown-or-resource:timing-model-required; component:critical-rate:ambiguous-scoped-value:all; component:critical-rate:expected-value-model-required | timing-cadence-model; runtime-stack; critical-expected-value |
| buffs:2203600 | Celestial Eagle | needs-value-selection | baseAttackTerm, critical, elementalDamage, generalDamage, physicalMagicEnhancement, skillMultiplier, timingCadence | cooldown-or-resource:target=2flat; critical-damage:all=1percent; elemental-damage:target=1percent | component:cooldown-or-resource:timing-model-required; component:critical-rate:ambiguous-scoped-value:all; component:critical-rate:expected-value-model-required | timing-cadence-model; runtime-stack; critical-expected-value |
| buffs:2203610 | 光能裂隙-爆炸箭增伤 | needs-value-selection | baseAttackTerm, critical, elementalDamage, generalDamage, physicalMagicEnhancement, skillMultiplier, timingCadence | cooldown-or-resource:target=2flat; critical-damage:all=1percent; elemental-damage:target=1percent | component:cooldown-or-resource:timing-model-required; component:critical-rate:ambiguous-scoped-value:all; component:critical-rate:expected-value-model-required | timing-cadence-model; runtime-stack; critical-expected-value |
| buffs:2203660 | 天界雄鹰不消耗钢制喙 | needs-value-selection | baseAttackTerm, critical, elementalDamage, generalDamage, skillMultiplier, timingCadence | cooldown-or-resource:target=2flat; critical-damage:all=1percent; elemental-damage:target=1percent | component:cooldown-or-resource:timing-model-required; component:critical-rate:ambiguous-scoped-value:all; component:critical-rate:expected-value-model-required | timing-cadence-model; runtime-stack; critical-expected-value |
| buffs:2204060 | Tide Mastery | needs-value-selection | baseAttackTerm, critical, elementalDamage, finalDamage, generalDamage, luckyEnhancement, physicalMagicEnhancement, timingCadence | adaptive-primary-stat:all=10percent; cooldown-or-resource:target=15flat; critical-damage:all=15percent | component:adaptive-primary-stat:stat-conversion-model-required; component:cooldown-or-resource:timing-model-required; component:critical-rate:ambiguous-scoped-value:all | stat-conversion-model; runtime-scope; timing-cadence-model |
| buffs:2204070 | Crystal Resonance | needs-value-selection | baseAttackTerm, elementalDamage, finalDamage, generalDamage, luckyEnhancement, physicalMagicEnhancement, skillMultiplier, timingCadence | adaptive-primary-stat:all=10percent; cooldown-or-resource:target=15flat; final-damage:all=50percent | component:adaptive-primary-stat:stat-conversion-model-required; component:cooldown-or-resource:timing-model-required; component:elemental-damage:value-ramp-selector-required | stat-conversion-model; timing-cadence-model; value-ramp-or-stack-selector |
| buffs:2204071 | Crystal Resonance | needs-value-selection | baseAttackTerm, elementalDamage, finalDamage, generalDamage, luckyEnhancement, physicalMagicEnhancement, skillMultiplier, timingCadence | adaptive-primary-stat:all=10percent; cooldown-or-resource:target=15flat; final-damage:all=50percent | component:adaptive-primary-stat:stat-conversion-model-required; component:cooldown-or-resource:timing-model-required; component:elemental-damage:value-ramp-selector-required | stat-conversion-model; runtime-stack; timing-cadence-model |
| buffs:2204110 | Cold Wind Convergence | needs-value-selection | elementalDamage, generalDamage, physicalMagicEnhancement, timingCadence |  | component:cooldown-or-resource:timing-model-required; component:generic-damage:ambiguous-scoped-value:all | timing-cadence-model; runtime-stack |


## No Formula Value Needed

| Key | Label | Status | Terms | Selected Values | Blockers | Selectors |
| --- | --- | --- | --- | --- | --- | --- |
| battle-imagines:2002440 | Arcane! Thunderfall Grasp | non-damage-or-support | elementalDamage, generalDamage, physicalMagicEnhancement |  |  |  |
| battle-imagines:2020006 | 奥义技能测试 | packet-exact-value-not-required |  |  |  |  |
| battle-imagines:2110012 | Arcane! Pulse Benediction | packet-exact-value-not-required | elementalDamage |  |  |  |
| battle-imagines:2110026 | Boarrier Tyrant - Wound | non-damage-or-support |  |  | component:healing-received:tier-or-level-selection-required | runtime-tier-or-level |
| battle-imagines:2110062 | Goblin Axe - Roar Command | packet-exact-value-not-required | baseAttackTerm |  |  |  |
| battle-imagines:2110066 | Brigand Guard Captain - Earth Shield | non-damage-or-support |  |  |  |  |
| battle-imagines:2110068 | Inferno Ogre - Protective Field | non-damage-or-support | elementalDamage |  |  |  |
| battle-imagines:2110069 | Tetanus | non-damage-or-support |  |  |  |  |
| battle-imagines:2110075 | Breaking Out of the Cocoon | non-damage-or-support |  |  |  |  |
| battle-imagines:2110083 | Arcane! Flame Roar | packet-exact-value-not-required | elementalDamage, physicalMagicEnhancement |  |  |  |
| battle-imagines:2110084 | Shield of Flowing Fire | non-damage-or-support | elementalDamage |  |  |  |
| battle-imagines:2110085 | Arcane! Flash Execution | packet-exact-value-not-required | baseAttackTerm, elementalDamage, generalDamage, physicalMagicEnhancement, timingCadence | cooldown-or-resource:target=20flat | component:cooldown-or-resource:timing-model-required | timing-cadence-model |
| battle-imagines:2110096 | Boarrier King - Electro Shield | packet-exact-value-not-required | baseAttackTerm, elementalDamage, generalDamage |  |  |  |
| battle-imagines:2110099 | Arcane! Poison Explosion | packet-exact-value-not-required | baseAttackTerm, generalDamage, physicalMagicEnhancement |  |  |  |
| battle-imagines:2110100 | Iron Fang - Healing Prohibition | non-damage-or-support |  |  |  |  |
| battle-imagines:2110108 | Goblin Sword - Enhanced Block | non-damage-or-support |  |  |  |  |
| battle-imagines:2110111 | Rorola - Enchantment | non-damage-or-support | baseAttackTerm, generalDamage, luckyEnhancement, physicalMagicEnhancement |  |  |  |
| battle-imagines:2110117 | Fafala - Caprahorn Shield | non-damage-or-support | generalDamage |  | component:battle-imagine-value:tier-or-level-selection-required | runtime-tier-or-level |
| battle-imagines:2110118 | Fafala - Edge of Defense | packet-exact-value-not-required | generalDamage |  | component:battle-imagine-value:tier-or-level-selection-required | runtime-tier-or-level |
| battle-imagines:2110123 | Flamehorn - Flame of Luck | packet-exact-value-not-required | elementalDamage, luckyEnhancement, timingCadence |  |  |  |
| battle-imagines:2110128 | Foxen - Mastery Specialization | non-damage-or-support |  |  |  |  |
| battle-imagines:2110130 | Armor Conversion | packet-exact-value-not-required | generalDamage |  |  |  |
| battle-imagines:2110131 | Goblin Mage - Healing Spell | packet-exact-value-not-required | generalDamage |  |  |  |
| battle-imagines:2900240 | Arcane! Blessing of Life | non-damage-or-support |  |  |  |  |
| battle-imagines:3210021 | Arcane! Meteor Shower | packet-exact-value-not-required | generalDamage, physicalMagicEnhancement |  |  |  |
| battle-imagines:3210022 | Arcane! Meteor Shower | packet-exact-value-not-required | generalDamage, physicalMagicEnhancement |  |  |  |
| battle-imagines:3210031 | Arcane! Thunderfall Grasp | packet-exact-value-not-required | elementalDamage, generalDamage, physicalMagicEnhancement |  |  |  |
| battle-imagines:3210051 | Arcane! Blazing Axe | packet-exact-value-not-required | baseAttackTerm, elementalDamage |  |  |  |
| battle-imagines:3210092 | Arcane! Silent Tide | packet-exact-value-not-required | baseAttackTerm, elementalDamage, generalDamage, physicalMagicEnhancement |  |  |  |
| battle-imagines:3901 | Arcane! Flame Roar | packet-exact-value-not-required | elementalDamage, physicalMagicEnhancement |  |  |  |


## Needs Component Mapping

| Key | Label | Status | Terms | Selected Values | Blockers | Selectors |
| --- | --- | --- | --- | --- | --- | --- |
| buffs:2402150 | S2冰矛4件套 | needs-component-mapping | critical, elementalDamage, luckyEnhancement |  | missing-component-value-hint |  |
| buffs:3002610 | Mirage Dream | needs-component-mapping | baseAttackTerm, generalDamage, seasonDamage |  | missing-component-value-hint |  |
| buffs:3002620 | Dual Ascension Formation | needs-component-mapping |  |  | missing-component-value-hint |  |


## Missing Value Data

| Key | Label | Status | Terms | Selected Values | Blockers | Selectors |
| --- | --- | --- | --- | --- | --- | --- |
| battle-imagines:1002440 | Stunt! Super Critical | missing-value-data | baseAttackTerm, critical, generalDamage, physicalMagicEnhancement |  | missing-component-value-hint |  |
| battle-imagines:1005240 | Stunt! Predator Slash | missing-value-data | baseAttackTerm, generalDamage, physicalMagicEnhancement |  | missing-component-value-hint |  |
| battle-imagines:1006940 | Arcane! Cocoon Tech | missing-value-data | baseAttackTerm, generalDamage, physicalMagicEnhancement |  | missing-component-value-hint |  |
| battle-imagines:1008440 | Arcane! Azure Gale | missing-value-data | baseAttackTerm, elementalDamage, generalDamage, physicalMagicEnhancement, timingCadence |  | missing-component-value-hint |  |
| battle-imagines:1008540 | Arcane! Silent Tide | missing-value-data | baseAttackTerm, elementalDamage, generalDamage, physicalMagicEnhancement |  | missing-component-value-hint |  |
| battle-imagines:1008640 | Stunt! Falling Star | missing-value-data | elementalDamage, generalDamage, physicalMagicEnhancement |  | missing-component-value-hint |  |
| battle-imagines:1008641 | Stunt! Whirlwind Strike | missing-value-data | baseAttackTerm, elementalDamage, generalDamage, physicalMagicEnhancement |  | missing-component-value-hint |  |
| battle-imagines:1010440 | Stunt! Thunder Suppress | missing-value-data | elementalDamage, generalDamage, luckyEnhancement, physicalMagicEnhancement, seasonSuppression |  | missing-component-value-hint |  |
| battle-imagines:1010540 | Stunt! Water of Silence | missing-value-data | elementalDamage, generalDamage, physicalMagicEnhancement |  | missing-component-value-hint |  |
| battle-imagines:1011010 | Stunt! Lightning Smite | missing-value-data | elementalDamage |  | missing-component-value-hint |  |
| battle-imagines:1011214 | Stunt! Cabbage Blitz | missing-value-data | elementalDamage |  | missing-component-value-hint |  |
| battle-imagines:1011906 | Arcane! Blazing Flames | missing-value-data | elementalDamage |  | missing-component-value-hint |  |
| battle-imagines:1100504 | Stunt! Frost Breath | missing-value-data | elementalDamage |  | missing-component-value-hint |  |
| battle-imagines:1102306 | Arcane! Flame Spirit's Fortune | missing-value-data | elementalDamage |  | missing-component-value-hint |  |
| battle-imagines:2001740 | Stunt! Blink Ambush | missing-value-data | baseAttackTerm, generalDamage, physicalMagicEnhancement |  | missing-component-value-hint |  |
| battle-imagines:2110050 | Element Stasis | missing-value-data | elementalDamage |  | missing-component-value-hint |  |
| battle-imagines:2110055 | Exhausted: Flame Devour | missing-value-data | elementalDamage |  | missing-component-value-hint |  |
| battle-imagines:2110056 | Time Stasis | missing-value-data |  |  | missing-component-value-hint |  |
| battle-imagines:2110057 | Weakened: Wish Sealed | missing-value-data |  |  | missing-component-value-hint |  |
| battle-imagines:2110060 | Swift Vortex | missing-value-data | elementalDamage, timingCadence |  | missing-component-value-hint |  |
| battle-imagines:2110061 | Tatta - Heart of Flames | missing-value-data | elementalDamage |  | missing-component-value-hint |  |
| battle-imagines:2110070 | Demoralizing Roar | missing-value-data | baseAttackTerm, luckyStrikeBaseTerm |  | missing-component-value-hint |  |
| battle-imagines:2110076 | Breaking Out of the Cocoon | missing-value-data |  |  | missing-component-value-hint |  |
| battle-imagines:2110077 | Intimidation | missing-value-data | baseAttackTerm, luckyStrikeBaseTerm |  | missing-component-value-hint |  |
| battle-imagines:2110078 | Shock Defense Break | missing-value-data | baseAttackTerm |  | missing-component-value-hint |  |
| battle-imagines:2110101 | Void Bzzar | missing-value-data |  |  | missing-component-value-hint |  |
| battle-imagines:2110102 | Wind Goblin King - Lucky enhancement | missing-value-data | luckyEnhancement |  | missing-component-value-hint |  |
| battle-imagines:2110103 | Celestial Flier - Azure Gale | missing-value-data | timingCadence |  | missing-component-value-hint |  |
| battle-imagines:2110109 | Goblin Crossbow - Lucky Goblin | missing-value-data | luckyEnhancement |  | missing-component-value-hint |  |
| battle-imagines:2110110 | Murloc's Luck | missing-value-data | generalDamage, luckyEnhancement |  | missing-component-value-hint |  |

