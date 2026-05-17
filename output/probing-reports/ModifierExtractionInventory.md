# Modifier Extraction Inventory

Dev-only coverage report for rebuilding modifier grounding from generated/extracted data before runtime changes.

## Boundaries
- This report does not change parser/runtime behavior.
- Description and value evidence are discovery/coverage signals, not final contribution math.
- Actual equipped gear statlines are packet/runtime-derived; game files may only provide item scaffolding.
- Stack, max-stack, threshold, and target-stack rows require runtime stack evidence before contribution can be factual.

## Category Coverage

| Category | Rows | Desc | Value | Stack | UID Links | Runtime | Provenance | Missing Files |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| buffs | 8,588 | 11.9% | 2.3% | 1.4% | 100.0% | 0.0% | 100.0% | - |
| skills | 29,555 | 21.6% | 0.3% | 0.2% | 100.0% | 0.0% | 100.0% | - |
| talents | 1,292 | 50.0% | 50.0% | 4.8% | 100.0% | 0.0% | 69.5% | - |
| seasonal-talents | 358 | 100.0% | 100.0% | 10.6% | 100.0% | 0.0% | 100.0% | - |
| factors | 1,707 | 100.0% | 100.0% | 2.9% | 100.0% | 8.6% | 100.0% | - |
| items-consumables | 9,165 | 0.0% | 0.2% | 0.0% | 100.0% | 0.0% | 100.0% | - |
| imagines | 4,726 | 77.7% | 98.8% | 4.3% | 100.0% | 97.8% | 100.0% | - |
| linktext-tooltips | 3 | 66.7% | 33.3% | 0.0% | 33.3% | 0.0% | 66.7% | - |
| modifier-master | 13,672 | 42.1% | 63.1% | 1.5% | 100.0% | 86.4% | 71.8% | - |
| equipment-packet-derived | 0 | 0.0% | 0.0% | 0.0% | 0.0% | 0.0% | 0.0% | - |

## Proposed Category Schema
- **identity:** category, uid, parentUid, sourceId, sourceKind, sourceType, level, tier
- **text:** name, names, description, descriptions, cleanDescriptions, descriptionIds, linkTextIds
- **semantics:** role: offensive | defensive | supportive | utility | unknown, domain: damage | tanked | healing | support, formulaTerms, activationAliases, targetScope: self | party | target | enemy | external | unknown
- **stacking:** stackBuffIds, maxStacks, valuePerStack, maxStackCap, thresholdEffects, targetStackEffects, linkedMaxStackBuffIds, runtimeStackEvidenceRequired
- **values:** valueRows: level/tier/stack/value/unit/formulaTerm/targetScope, ownerPartySplit, durationSeconds, cooldownSeconds, confidence
- **relationships:** buffIds, targetDamageIds, targetRecountIds, sourceEntityIds, ownerClassIds, ownerSpecIds, itemIds, factorIds
- **provenance:** sourceFiles, sourceTables, sourceOffsets, nameIds, descriptionIds, evidence, notes

## Recommendations
- **high / buffs:** Description coverage is 11.9%. Add or strengthen category-specific description extraction before formula work.
- **medium / buffs:** Stack text exists without enough max/threshold classification. Add first-class stack schema before promoting contribution math.
- **medium / buffs:** Value-like text exists but runtime predicate/window evidence is sparse. Keep these rows as replay-required/evidence-only.
- **high / skills:** Description coverage is 21.6%. Add or strengthen category-specific description extraction before formula work.
- **medium / skills:** Stack text exists without enough max/threshold classification. Add first-class stack schema before promoting contribution math.
- **medium / skills:** Value-like text exists but runtime predicate/window evidence is sparse. Keep these rows as replay-required/evidence-only.
- **medium / talents:** Stack text exists without enough max/threshold classification. Add first-class stack schema before promoting contribution math.
- **medium / talents:** Value-like text exists but runtime predicate/window evidence is sparse. Keep these rows as replay-required/evidence-only.
- **medium / seasonal-talents:** Stack text exists without enough max/threshold classification. Add first-class stack schema before promoting contribution math.
- **medium / seasonal-talents:** Value-like text exists but runtime predicate/window evidence is sparse. Keep these rows as replay-required/evidence-only.
- **medium / factors:** Stack text exists without enough max/threshold classification. Add first-class stack schema before promoting contribution math.
- **medium / factors:** Value-like text exists but runtime predicate/window evidence is sparse. Keep these rows as replay-required/evidence-only.
- **high / items-consumables:** Description coverage is 0.0%. Add or strengthen category-specific description extraction before formula work.
- **medium / items-consumables:** Value-like text exists but runtime predicate/window evidence is sparse. Keep these rows as replay-required/evidence-only.
- **medium / imagines:** Stack text exists without enough max/threshold classification. Add first-class stack schema before promoting contribution math.
- **medium / linktext-tooltips:** Value-like text exists but runtime predicate/window evidence is sparse. Keep these rows as replay-required/evidence-only.
- **high / modifier-master:** Description coverage is 42.1%. Add or strengthen category-specific description extraction before formula work.
- **medium / modifier-master:** Stack text exists without enough max/threshold classification. Add first-class stack schema before promoting contribution math.
- **high / equipment-packet-derived:** Keep this as a packet/runtime decoder lane. Game files can only provide scaffolding for equipment.

## Proposed Output Split
- `BuffDescriptions.json`: runtime buff/debuff names, descriptions, levels, and stack-ish BuffTable evidence
- `SkillDescriptions.json`: skill labels, descriptions, cooldowns, emitted damage rows, and child damage relationships
- `TalentDescriptions.json`: talent/passive descriptions, class/spec ownership, activation aliases, and buff/source links
- `SeasonalTalentDescriptions.json`: seasonal/slumberdream node and rogue-entry descriptions, predicates, and source links
- `FactorDescriptions.json`: seasonal factor names, grade rows, values, icons, and affected damage/recount links
- `ItemDescriptions.json`: item/consumable names, food/potion buff bridge rows, tiers, and static item text
- `BattleImagineDescriptions.json`: Battle Imagine owner/source rows, Aoyi skill labels, and runtime buff/debuff bridges
- `LinkTextDescriptions.json`: client linktext tooltip descriptions, including text embedded in other descriptions
- `ModifierUidMaster.json`: UID relationships, reportability gates, role classification, and contribution-readiness metadata
- `EquipmentStatDecoder.json` packet/runtime-derived: actual equipped gear statlines and rolled values must come from packets/runtime state, not game files

## Example Gaps

### buffs

**missingDescription**
- 201 id=201 (BuffName.json)
- 301 id=301 (BuffName.json)
- 401 id=401 (BuffName.json)
- 501 id=501 (BuffName.json)
- 601 id=601 (BuffName.json)
- 701 id=701 (BuffName.json)
- 801 id=801 (BuffName.json)
- 901 id=901 (BuffName.json)

**stackWithoutValue**
- 6501 id=6501 (BuffName.json)
- 6601 id=6601 (BuffName.json)
- 27015 id=27015 (BuffName.json)
- 27016 id=27016 (BuffName.json)
- 41401 id=41401 (BuffName.json)
- 55313 id=55313 (BuffName.json)
- 55414 id=55414 (BuffName.json)
- 55415 id=55415 (BuffName.json)

**valueNeedsRuntimeEvidence**
- 21413 id=21413 (BuffName.json)
- 25201 id=25201 (BuffName.json)
- 25202 id=25202 (BuffName.json)
- 50034 id=50034 (BuffName.json)
- 50071 id=50071 (BuffName.json)
- 55306 id=55306 (BuffName.json)
- 55322 id=55322 (BuffName.json)
- 55430 id=55430 (BuffName.json)

### skills

**missingDescription**
- Red Light Counter id=1 (skillnames.json)
- Lucky Strike id=2 (skillnames.json)
- Windborne Grace id=3 (skillnames.json)
- Gale Thrust id=4 (skillnames.json)
- Skyfall id=5 (skillnames.json)
- Typhoon Cleave id=6 (skillnames.json)
- Galeform id=7 (skillnames.json)
- Spiral Thrust id=8 (skillnames.json)

**valueNeedsRuntimeEvidence**
- Cracking Echo id=1907 (skillnames.json)
- Sandshroud id=1927 (skillnames.json)
- 2200101存储30%伤害 id=90052 (skillnames.json)
- 弩箭哥布林4s蓄力贯通箭-英雄本 id=100732 (skillnames.json)
- 弩箭哥布林4s蓄力分裂箭-英雄本 id=100736 (skillnames.json)
- 哥布林巫师-害怕2 id=2002210 (skillnames.json)
- 嫌疑人冲刺2 id=3080111 (skillnames.json)
- Nappo gets stunned after the 1st hit. id=3340150 (skillnames.json)

**stackWithoutValue**
- Rage Burst id=1940 (skillnames.json)
- 【引燃】Buff堆叠上限变化 id=90009 (skillnames.json)
- 【自然恩赐】Buff堆叠上限变化 id=90092 (skillnames.json)
- 【治疗链】Buff堆叠上限变化 id=90093 (skillnames.json)
- 【治疗种子】Buff堆叠上限变化 id=90094 (skillnames.json)
- 玄武背击堆叠上限 id=90099 (skillnames.json)
- 【锐利】Buff堆叠上限变化 id=90103 (skillnames.json)
- 【剑盾】英勇盾击buff叠层 id=90128 (skillnames.json)

**missingProvenance**
- sources id=sources (SkillCooldowns.json)
- summary id=summary (SkillCooldowns.json)
- skillCooldownsBySkillId id=skillCooldownsBySkillId (SkillCooldowns.json)
- cooldownTempAttrRules id=cooldownTempAttrRules (SkillCooldowns.json)
- affectedSkillIdsByTempAttrId id=affectedSkillIdsByTempAttrId (SkillCooldowns.json)
- sources id=sources (SkillDamageChainBridge.json)
- semantics id=semantics (SkillDamageChainBridge.json)
- summary id=summary (SkillDamageChainBridge.json)

### talents

**valueNeedsRuntimeEvidence**
- Absolute Center Stage id=1348 (probing-reports/TalentEffectModelProbe.json)
- Absolute Center Stage id=1366 (probing-reports/TalentEffectModelProbe.json)
- Advancement id=154 (probing-reports/TalentEffectModelProbe.json)
- Adversity Enhancement id=1251 (probing-reports/TalentEffectModelProbe.json)
- Aegis Ward's Anthem id=1213 (probing-reports/TalentEffectModelProbe.json)
- Aegis Ward's Retribution id=1215 (probing-reports/TalentEffectModelProbe.json)
- Agility id=3 (probing-reports/TalentEffectModelProbe.json)
- Agility Conversion id=101 (probing-reports/TalentEffectModelProbe.json)

**missingDescription**
- Strength (TalentSpecOwnership.json)
- Intellect (TalentSpecOwnership.json)
- Agility (TalentSpecOwnership.json)
- Endurance (TalentSpecOwnership.json)
- Crit (TalentSpecOwnership.json)
- Haste (TalentSpecOwnership.json)
- Luck (TalentSpecOwnership.json)
- Mastery (TalentSpecOwnership.json)

**missingProvenance**
- Strength (TalentSpecOwnership.json)
- Intellect (TalentSpecOwnership.json)
- Agility (TalentSpecOwnership.json)
- Endurance (TalentSpecOwnership.json)
- Crit (TalentSpecOwnership.json)
- Haste (TalentSpecOwnership.json)
- Luck (TalentSpecOwnership.json)
- Mastery (TalentSpecOwnership.json)

### seasonal-talents

**valueNeedsRuntimeEvidence**
- Fantasia Impact id=1001 (probing-reports/SeasonTalentNodeProbe.json)
- Linkage id=1002 (probing-reports/SeasonTalentNodeProbe.json)
- Reconstruct id=1003 (probing-reports/SeasonTalentNodeProbe.json)
- Time-Step id=1004 (probing-reports/SeasonTalentNodeProbe.json)
- Multi-Phasic Strike id=1005 (probing-reports/SeasonTalentNodeProbe.json)
- Ripple of Fate id=1006 (probing-reports/SeasonTalentNodeProbe.json)
- Dual id=1007 (probing-reports/SeasonTalentNodeProbe.json)
- Chrono Elixir id=1008 (probing-reports/SeasonTalentNodeProbe.json)

### factors

**valueNeedsRuntimeEvidence**
- Stormblade X1 - G1 (probing-reports/SeasonPhantomFactorProbe.json)
- Stormblade X1 - G2 (probing-reports/SeasonPhantomFactorProbe.json)
- Stormblade X1 - G3 (probing-reports/SeasonPhantomFactorProbe.json)
- Stormblade X1 - G4 (probing-reports/SeasonPhantomFactorProbe.json)
- Stormblade X1 - G5 (probing-reports/SeasonPhantomFactorProbe.json)
- Stormblade X1 - G6 (probing-reports/SeasonPhantomFactorProbe.json)
- Stormblade X1 - G7 (probing-reports/SeasonPhantomFactorProbe.json)
- Stormblade X1 - G8 (probing-reports/SeasonPhantomFactorProbe.json)

### items-consumables

**missingDescription**
- 1 id=1 (itemnames.json)
- 2 id=2 (itemnames.json)
- 3 id=3 (itemnames.json)
- 4 id=4 (itemnames.json)
- 5 id=5 (itemnames.json)
- 8 id=8 (itemnames.json)
- 9 id=9 (itemnames.json)
- 10 id=10 (itemnames.json)

**valueNeedsRuntimeEvidence**
- 1031179 id=1031179 (itemnames.json)
- 1031191 id=1031191 (itemnames.json)
- 1061076 id=1061076 (itemnames.json)
- 1062102 id=1062102 (itemnames.json)
- 1062103 id=1062103 (itemnames.json)
- 1070101 id=1070101 (itemnames.json)
- 1070102 id=1070102 (itemnames.json)
- 1070103 id=1070103 (itemnames.json)

### imagines

**missingDescription**
- Legendary Boar - Howl id=2350 (skill_aoyi_icons.json)
- Arcane! Flame Roar id=3901 (skill_aoyi_icons.json)
- Arcane! Thunderfall Grasp id=3902 (skill_aoyi_icons.json)
- Arcane! Blazing Axe id=3903 (skill_aoyi_icons.json)
- Stunt! Super Critical id=3904 (skill_aoyi_icons.json)
- Stunt! Boarrier Rush id=3905 (skill_aoyi_icons.json)
- Arcane! Frostquake id=3906 (skill_aoyi_icons.json)
- Stunt! Falling Star id=3907 (skill_aoyi_icons.json)

**valueNeedsRuntimeEvidence**
- Arcane! Blazing Axe id=3903 (skill_aoyi_icons.json)
- Stunt! Super Critical id=3904 (skill_aoyi_icons.json)
- Stunt! Boarrier Rush id=3905 (skill_aoyi_icons.json)
- Arcane! Frostquake id=3906 (skill_aoyi_icons.json)
- Stunt! Falling Star id=3907 (skill_aoyi_icons.json)
- Arcane! Pulse Benediction id=3908 (skill_aoyi_icons.json)
- Arcane! Heart of Flame id=3911 (skill_aoyi_icons.json)
- Stunt! Electro Bomb id=3913 (skill_aoyi_icons.json)

### linktext-tooltips

**valueNeedsRuntimeEvidence**
- linkTextsById id=linkTextsById (LinkTextDescriptions.json)

**missingDescription**
- descriptionKeyToLinkTextIds id=descriptionKeyToLinkTextIds (LinkTextDescriptions.json)

**missingProvenance**
- descriptionKeyToLinkTextIds id=descriptionKeyToLinkTextIds (LinkTextDescriptions.json)

### modifier-master

**missingDescription**
- Windborne Grace id=buff-source:1401 kind=buff-proc (ModifierSourceIndex.json)
- 水剑粒子显示 id=buff-source:1601 kind=buff-proc (ModifierSourceIndex.json)
- Judgment Cut id=buff-source:1701 kind=buff-proc (ModifierSourceIndex.json)
- Granite id=buff-source:1901 kind=talent-skill (ModifierSourceIndex.json)
- 法杖冰盾BUFF id=buff-source:2101 kind=buff-proc (ModifierSourceIndex.json)
- Resonant Strings id=buff-source:2301 kind=buff-proc (ModifierSourceIndex.json)
- Blade of Justice id=buff-source:2401 kind=buff-proc (ModifierSourceIndex.json)
- 冰法杖3技能BD替换技能 id=buff-source:3001 kind=talent-skill (ModifierSourceIndex.json)

**missingProvenance**
- inputs id=inputs (ModifierObservedUidBridge.json)
- stats id=stats (ModifierObservedUidBridge.json)
- mrs:131bb151b5d4 id=observed-buff:683115 (ModifierRelationshipTable.json)
- mrs:87e94739c6f0 id=observed-buff:2302120 (ModifierRelationshipTable.json)
- unnamed (ModifierRecountTable.json)
- unnamed (ModifierRecountTable.json)
- unnamed (ModifierRecountTable.json)
- unnamed (ModifierRecountTable.json)
