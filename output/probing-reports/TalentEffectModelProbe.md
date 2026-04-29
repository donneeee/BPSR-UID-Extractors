# Talent Effect Model Probe

This is a worklist/report only. It separates direct game-file evidence from probe-only candidates and does not infer selected player talents.

## Summary

- talentPassiveRows: 646
- talentRowsWithDescriptions: 93
- descriptionLinkTextRefs: 24
- opcode3BuffRecords: 591
- opcode6SkillPairRecords: 15
- skillRowsWithAnyTalentEvidence: 38
- skillRowsWithOpcode6PairEvidence: 28
- skillRowsWithDescriptionLinkTextEvidence: 21
- skillRowsWithFormulaBuffEvidence: 3
- recountRowsWithProbeEvidence: 61
- recountRowsWithCurrentProductionTalentLinks: 44
- seasonTalentNodeRows: 116
- seasonTalentNodeGroups: 12
- seasonTalentNodeRowsWithDescriptions: 116
- seasonTalentOpcode3BuffRecords: 116
- seasonRogueEntryRows: 242
- seasonRogueEntryRowsWithDescriptions: 242
- seasonRogueEntryDifficultyGatedRows: 127
- seasonRogueEntryNightmareOnlyRows: 63
- seasonRogueEntryHardAndNightmareRows: 64
- seasonPhantomFactorRows: 1560
- seasonPhantomFactorFamilies: 156
- seasonPhantomFactorRowsWithDescriptions: 1470
- seasonPhantomFactorRowsWithClassGate: 1360
- seasonPhantomFactorClassGateIds: 1,2,4,5,9,11,12,13
- strictRuntimeStatus: probe-only

## Season Talent Node Trees

Source report: output/probing-reports/SeasonTalentNodeProbe.json

- Group 0 Fantasia Impact: 10 rows (1001 Fantasia Impact -> 3002010; 1002 Linkage -> 3002020; 1003 Reconstruct -> 3002030; 1004 Time-Step -> 3002040)
- Group 1 Phantom Execution: 10 rows (1101 Phantom Execution -> 3002210; 1102 Mirage Edge -> 3002220; 1103 Execution Force -> 3002230; 1104 Time-Slit -> 3002240)
- Group 2 Phantom Arrow: 10 rows (1201 Phantom Arrow -> 3002410; 1202 Dual Time -> 3002420; 1203 Dreamarrow Storm -> 3002430; 1204 Mirage Shot -> 3002440)
- Group 3 Mirage Dream: 10 rows (1301 Mirage Dream -> 3002610; 1302 Dual Ascension Formation -> 3002620; 1303 Battlestart - Rare -> 3002630; 1304 Cross the Mirage -> 3002640)
- Group 4 Dreamforce: 10 rows (1401 Dreamforce -> 3002810; 1402 Dream Massacre -> 3002820; 1403 Boundary -> 3002830; 1404 Unbreaking Might -> 3002840)
- Group 5 Oblivion Dream: 10 rows (1501 Oblivion Dream -> 3003010; 1502 Bloodbound Surge -> 3003020; 1503 Dream Obsession -> 3003070; 1504 Chrono Elixir -> 3002080)
- Group 6 Shattered Illusion: 10 rows (1601 Shattered Illusion -> 3003210; 1602 Illusory Countershock -> 3003220; 1603 Judgment - Sharp -> 3003230; 1604 Judgment - Break -> 3003240)
- Group 7 Endless Mind: 10 rows (1701 Endless Mind -> 3003410; 1702 Aegis of the Soul -> 3003420; 1703 Safeguard -> 3003430; 1704 Swiftflow -> 3003440)
- Group 40 Overload Crit: 9 rows (5001 Overload Crit -> 3004410; 5002 Crit Craving -> 3004420; 5003 Crit Legacy -> 3004430; 5004 Crit Fate -> 3004440)
- Group 41 Torrent of Fate: 9 rows (5101 Torrent of Fate -> 3003810; 5102 Luck's Favor -> 3003820; 5103 The Chosen One -> 3003830; 5104 Beginner's Fortune -> 3003840)
- Group 42 Imagine Acceleration: 9 rows (5201 Imagine Acceleration -> 3004010; 5202 Imagine Resonance -> 3004020; 5203 Nascent Mindscape -> 3004030; 5204 Dreamscape Emergence -> 3004040)
- Group 43 Coordinated Strike: 9 rows (5301 Coordinated Strike -> 3004210; 5302 Team Cohesion -> 3004220; 5303 Natural Leader -> 3004230; 5304 Precision Support -> 3004240)

## Season Rogue Entries

Source report: output/probing-reports/SeasonRogueEntryProbe.json

- 215 Stormblade - Phantom Edgewind -> 3050160 [Nightmare]: Dealing damage with Iaido Slash is guaranteed to trigger Bladewind Domain. Bladewind Domain's CD reduction for Oblivion Combo is increase...
- 216 Stormblade - Surging Thunderseal -> 3050170 [Hard+Nightmare]: Doubles the Thunder Sigil limit. Overdrive's Thunder Sigil recovery efficiency is increased by 300%. Available only in [Hard] and [Nightm...
- 217 Stormblade - Iai Flash -> 3050180 [Hard+Nightmare]: Iaido Slash's CD is reduced by 50%, and Iaido Slash's Dream DMG is increased by 50%. Available only in [Hard] and [Nightmare].
- 218 Stormblade - Ultimate Violent Slash -> 3050190 [Nightmare]: Doubles Ultimate Slash's Crit DMG. Available only in [Nightmare].
- 219 Stormblade - Dragonfall Echo -> 3050200 [Nightmare]: Casting Dracoflash or Phantom Slash extends Volt Surge's duration by 10s. Dracoflash and Phantom Slash's Dream DMG is increased by 500%. ...
- 220 Stormblade - Thunderclap Reset -> 3050210 [Nightmare]: During Volt Surge, Crits from Flash Strike and Raijin Dash will reset their CDs. Flash Strike and Raijin Dash's Dream DMG is increased by...
- 221 Stormblade - Lingering Thunder Cut -> 3050220 [Hard+Nightmare]: Thunder Cut's Movement Speed is reduced by 50%, and Thunder Cut's Dream DMG is increased by 60%. Available only in [Hard] and [Nightmare].
- 222 Stormblade - Overwhelming Current -> 3050230 [Hard+Nightmare]: Doubles the efficiency of gaining Thundrage. Available only in [Hard] and [Nightmare].
- 223 Stormblade - Moonstrike Scythe Dance -> 3050240 [Hard+Nightmare]: Moonstrike no longer consumes Thunder Sigils, and casting Moonstrike will trigger Storm Scythe (requires the Storm Scythe Talent). Availa...
- 224 Stormblade - Stacking Divine Retribution -> 3050250 [Nightmare]: Increases Divine Sickle's max stacks by 7. Casting Divine Sickle consumes all stacks, increasing Dream DMG by 15% per stack. Available on...
- 225 Stormblade - Moonstrike Sync -> 3050260 [Hard+Nightmare]: When casting Divine Sickle, Moonblades will also simultaneously summon Divine Sickle. Available only in [Hard] and [Nightmare].
- 226 Stormblade - Expanded Moonstrike -> 3050270 [Nightmare]: Increases the max number of Moonblades by 2. Available only in [Nightmare].
- 227 Stormblade - Quintuple Thunderstorm -> 3050280 [Hard+Nightmare]: For every 5 times Thunderstrike is triggered, the next Thunderstrike will also trigger a Thunderstorm. Available only in [Hard] and [Nigh...
- 228 Stormblade - Instinctive Divine Retribution -> 3050290 [Nightmare]: Divine Sickle is cast automatically. Each cast reduces the CD of Stormflash by 2s. Available only in [Nightmare].
- 229 Stormblade - Lucky Thunderstrike -> 3050300 [Hard+Nightmare]: Thunderstrike and Storm Scythe can now trigger a Lucky Strike. Available only in [Hard] and [Nightmare].
- 230 Stormblade - Luck Multiplier -> 3050310 [Nightmare]: Lucky Strike Multiplier is increased by 100%. Luck Boost is doubled. Available only in [Nightmare].
- 231 Frost Mage - Iceflow Pulse -> 3052280 [Hard+Nightmare]: When Frostbeam hits a target, Cold Pulse counter is increased by 5, and Cold Pulse Crit DMG is increased by 50%. (Triggers only once per ...
- 232 Frost Mage - Pulse Reduction -> 3052290 [Hard+Nightmare]: Each time Cold Pulse is triggered, the CD of Permafrost is reduced by 1s. Available only in [Hard] and [Nightmare].
- 233 Frost Mage - Permafrost Might -> 3052300 [Nightmare]: When Cold Pulse deals damage, it permanently increases Ice Attack by 2 points. (Triggers only once per cast, even on multiple hits.) Avai...
- 234 Frost Mage - Stacking Frostbolts -> 3052310 [Nightmare]: When Cold Pulse deals damage, it increases Ice Arrow damage by 5% for 5s. This effect stacks up to 50 times. (Triggers only once per cast...
- 235 Frost Mage - Frigid Infusion -> 3052240 [Hard+Nightmare]: While in the Ultra Cold state, Frozen Gale gains the Permafrost effect, and its Dream DMG is increased by 200%. Available only in [Hard] ...
- 236 Frost Mage - Deca-Vortex -> 3052250 [Nightmare]: For every 10 times Frostbeam deals damage to the main target, it randomly triggers Water Vortex, Tidal Vortex, or Crystal Veil (if equipp...
- 237 Frost Mage - Cascading Gyre -> 3052260 [Hard+Nightmare]: When Crystal Veil's frozen explosion occurs, it creates a Tidal Vortex at its location that lasts for 5s (this Tidal Vortex will not spli...
- 238 Frost Mage - Shatter Vortex -> 3052270 [Nightmare]: After its frozen explosion, Tidal Vortex splits into two new Tidal Vortexes (they will not split again). Tidal Vortex's Dream DMG is incr...
- 239 Frost Mage - Orbital Lance -> 3052200 [Nightmare]: Every 1.5s, Crystal Veil fires a Piercing Ice Lance at a random target (or forward if there is no target). When Piercing Ice Lance deals ...
- 240 Frost Mage - Lance Count -> 3052210 [Hard+Nightmare]: Reduces the count required for Piercing Ice Lance by 5. Available only in [Hard] and [Nightmare].
- 241 Frost Mage - Dual Frost Crystal Lance -> 3052220 [Nightmare]: When casting Frost Lance with more than 2 Frost Crystals, it will consume 1 additional Frost Crystal to trigger Frost Lance twice consecu...
- 242 Frost Mage - Lance Reduction -> 3052230 [Hard+Nightmare]: When Piercing Ice Lance deals damage, the CD of Permafrost is reduced by 0.3s. Available only in [Hard] and [Nightmare].
- 243 Frost Mage - Orbital Tempest -> 3052160 [Hard+Nightmare]: Casting Crystal Veil also casts Blizzard. When Blizzard deals damage, the CD of Crystal Veil is reduced by 0.3s. Available only in [Hard]...
- 244 Frost Mage - Triple Storm -> 3052170 [Hard+Nightmare]: Blizzard becomes an instant cast, and it summons three at once. Blizzard's Dream DMG is increased by 200%. Available only in [Hard] and [...

## Season Phantom Factors

Source report: output/probing-reports/SeasonPhantomFactorProbe.json

- 200401 Marksman X1 - G10 -> 3053010: Storm Arrow Dream DMG +41%
- 200402 Marksman X2 - G10 -> 3053020: Wild Wolf - Tail Sweep Dream DMG +17.5%
- 200403 Marksman X3 - G10 -> 3053030: Wild Wolf - Bite Dream DMG +5.5%
- 200404 Marksman X4 - G10 -> 3053040: Lightseeker Arrow Dream DMG +35%; The Crit DMG of Lightseeker Arrow reaches 233%
- 200405 Marksman X5 - G10 -> 3053050: Dream DMG of Double Arrow and Quadraflare +19.4%
- 200406 Marksman X6 - G10 -> 3053060: Falcon Strike Dream DMG +14.1%
- 200407 Marksman X7 - G10 -> 3053070: Lightning Break Dream DMG +32.4%
- 200408 Marksman X8 - G10 -> 3053080: During Torrent Volley, Focus duration is paused; Torrent Volley Dream DMG +14%
- 200409 Marksman X9 - G10 -> 3053090: Each 4% Haste increases Radiance Barrage hit count by 1; Radiance Barrage Dream DMG increases by 20.6%
- 200410 Marksman X10 - G10 -> 3053100: For the next 10s after Blast Shot is cast, Falcon (Strike, Lightning Break, Phantom Falcon) Dream DMG + 14%
- 200411 Marksman X11 - G10 -> 3053110: Powerdraw hit count +1 (Total DMG unchanged); Powerdraw Dream DMG +35%
- 201105 Marksman Stasis X1 - G10 -> 3059160: During Focus, Dream DMG Resistance +15%
- 201106 Marksman Stasis X2 - G10 -> 3059170: During Deter Shot, Magic DMG Resistance +25%; Deter Shot CD −2.8s
- 201216 Marksman Rhapsody X1 - G10 -> 3053120: For 15 seconds after casting Wildcall, the Companion's Attack SPD +100%. Wild Wolf - Tail Sweep Dream DMG +100%.

## Stormblade Check

### 1714 Iaido Slash
- Recount rows: 49 Iaido Slash
- Opcode 6 skill-pair mentions: 157 Moonstrike Spec
- Description linktext mentions: none
- Formula/buff matches: none

### 1715 Moonstrike
- Recount rows: 50 Moonstrike
- Opcode 6 skill-pair mentions: 157 Moonstrike Spec
- Description linktext mentions: 157 Moonstrike Spec
- Formula/buff matches: none

## Opcode 6 Skill Pair Examples

- 434 Battle Cry: 1426 Typhoon Cleave -> 1410 Typhoon Cleave
- 930 Block Spec: 1922 Shield Bash -> 1930 Countercrush
- 535 Bloomheal: 1509 Divine Circle Bloom -> 1527 Bloomheal
- 1330 Concert Circuit: 2314 Rock the Stage -> 2336 Concert Circuit
- 1317 Concerto Spec: 2306 Amplified Beat -> 2307 Healing Beat
- 1317 Concerto Spec: 2321 String Strike -> 2301 Resonant Strings
- 342 Crimson Expertise Spec: 1605 Blazing Ascension -> 1606 Frenzied Slash
- 1129 Falconry Spec: 2220 Storm Arrow -> 2222 Double Arrow
- 212 Frostbeam Spec: 1242 Frost Lance -> 1241 Frostbeam
- 1329 Infinite Rhapsody: 2314 Rock the Stage -> 2335 Infinite Rhapsody
- 531 Lifebind Spec: 1518 Wild Bloom -> 1507 Life Bloom
- 157 Moonstrike Spec: 1714 Iaido Slash -> 1715 Moonstrike
- 1218 Shield Spec: 2405 Valor Bash -> 2406 Vanguard Strike
- 432 Skyward Spec: 1418 Gale Thrust -> 1419 Skyfall
- 533 Vital Surge: 1509 Divine Circle Bloom -> 1528 Vital Surge

## Description Linktext Examples

- 434 Battle Cry: 1152 Sharp; 1525 Typhoon Cleave
- 930 Block Spec: 1126 Lucky Block; 1538 Countercrush
- 535 Bloomheal: 1531 Divine Circle Bloom; 1552 Bloomheal
- 1330 Concert Circuit: 1579 Rock the Stage; 1613 Concert Circuit
- 342 Crimson Expertise Spec: 1626 Wildfire Dance
- 1129 Falconry Spec: 1547 Double Arrow
- 212 Frostbeam Spec: 1161 Frost Crystal; 1509 Frostbeam; 1515 Permafrost
- 1329 Infinite Rhapsody: 1579 Rock the Stage; 1612 Infinite Rhapsody
- 531 Lifebind Spec: 1108 Regen Bud; 1527 Life Bloom
- 157 Moonstrike Spec: 1167 Blade Intent; 1507 Moonstrike
- 1218 Shield Spec: 1566 Vanguard Strike
- 432 Skyward Spec: 1152 Sharp; 1520 Skyfall
- 533 Vital Surge: 1531 Divine Circle Bloom; 1551 Vital Surge
