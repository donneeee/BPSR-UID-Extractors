# BPSR Formula Surface Probe

Generated: 2026-04-28T06:17:14.485Z
Game package: `C:\Program Files (x86)\Steam\steamapps\common\Blue Protocol Star Resonance\bpsr\BPSR_STEAM_Data\StreamingAssets\container\m0.pkg`

## Executive Summary

- No dedicated, high-confidence numeric damage formula table was found by this broad scan.
- Exact contribution remains packet-exact only for separately emitted child damage ids. Formula replay may be possible for selected parameterized surfaces, but it needs table schema validation and runtime active-source proof before it should be shown as numeric contribution.
- CTB-like tables scanned: 3554
- CTB tables with formula-like text: 52
- High-confidence numeric formula tables: 0
- Parameterized Phantom Factor description surfaces: 147
- Exact non-base child damage rows already available from generated data: 311
- Source-only factor families: 82

## Scan Scope

- all CTB-like meta.pkg entries
- all CTB row data fields as u32 and float32 candidates
- all CTB int-pool array references reachable from row fields
- all CTB string pools
- all game localization byte tables
- generated parser outputs
- existing probe reports

## Confidence Model

- high: Same CTB table has formula-like text, nested parameter/effect records, known damage references, and known source references.
- medium: A table has formula-like text or Decision placeholders plus nested records, damage ids, or source ids.
- low: A table has nested records with known damage/source ids but no formula-like text.
- none: No formula-adjacent evidence under this probe's criteria.

## Dedicated Formula Table Name Check

- BasicAttrTable.ctb: hash 2345225393, m0.pkg offset 537714394, length 172
- FightAttrTable.ctb: hash 2490336417, m0.pkg offset 539781376, length 25564
- TempAttrTable.ctb: hash 2987434853, m0.pkg offset 605166039, length 31852

## Generated Evidence Baseline

- recountRows: 294
- skillBreakdownRows: 4764
- allNonBaseBreakdownRows: 1273
- exactNonBaseChildRows: 311
- directFactorFamilies: 5
- sourceOnlyFactorFamilies: 82
- effectSources: 1151
- effectSourcesWithDamageIds: 0
- effectSourcesWithRecountIds: 0
- phantomFamilies: 156
- parameterizedPhantomFamilies: 147
- phantomFamiliesWithDescriptionTargetRecountRows: 85
- talentRows: 646
- talentOpcode3BuffRecords: 591
- talentOpcode6SkillPairRecords: 15
- talentNumericFormulaMatches: 0

### Direct Factor Damage Samples
- 3052120 Frost Mage Rhapsody X1: damage=2305212011; recount=42; evidence=unknown
- 3053110 Marksman X11: damage=2305311004; recount=84; evidence=unknown
- 3054120 Shield Knight Rhapsody X1: damage=2305412003; recount=148; evidence=unknown
- 3059080 Stasis X8: damage=2305908003; recount=none; evidence=unknown
- 3059210 Heavy Guardian Stasis X2: damage=2305921003; recount=none; evidence=unknown

### Source-Only Factor Samples
- 3050010 Stormblade X1: damage=none; recount=49; evidence=unknown
- 3050020 Stormblade X2: damage=none; recount=53, 54; evidence=unknown
- 3050030 Stormblade X3: damage=none; recount=63, 64; evidence=unknown
- 3050040 Stormblade X4: damage=none; recount=62; evidence=unknown
- 3050060 Stormblade X6: damage=none; recount=58, 67; evidence=unknown
- 3050070 Stormblade X7: damage=none; recount=65, 66; evidence=unknown
- 3050080 Stormblade X8: damage=none; recount=56; evidence=unknown
- 3050090 Stormblade X9: damage=none; recount=50; evidence=unknown
- 3050100 Stormblade X10: damage=none; recount=50, 71; evidence=unknown
- 3050130 Stormblade Rhapsody X2: damage=none; recount=62; evidence=unknown
- 3050140 Stormblade Rhapsody X3: damage=none; recount=66; evidence=unknown
- 3050150 Stormblade Rhapsody X4: damage=none; recount=71; evidence=unknown
- 3051010 Wind Knight X1: damage=none; recount=12; evidence=unknown
- 3051020 Wind Knight X2: damage=none; recount=8, 9; evidence=unknown
- 3051030 Wind Knight X3: damage=none; recount=16; evidence=unknown
- 3051040 Wind Knight X4: damage=none; recount=15; evidence=unknown
- 3051050 Wind Knight X5: damage=none; recount=12; evidence=unknown
- 3051070 Wind Knight X7: damage=none; recount=11; evidence=unknown
- 3051080 Wind Knight X8: damage=none; recount=10; evidence=unknown
- 3051090 Wind Knight X9: damage=none; recount=20; evidence=unknown

### Parameterized Phantom Factor Samples
- 200101 Stormblade X1: targets=49 Iaido Slash; params=G1: [140]; G2: [180]; G3: [220]; G4: [260]
- 200102 Stormblade X2: targets=53 Flash Strike, 54 Raijin Dash; params=G1: [200]; G2: [255]; G3: [311]; G4: [366]
- 200103 Stormblade X3: targets=63 Dracoflash, 64 Phantom Slash; params=G1: [350]; G2: [422]; G3: [494]; G4: [566]
- 200104 Stormblade X4: targets=62 Thunder Cut; params=G1: [280]; G2: [341]; G3: [403]; G4: [465]
- 200105 Stormblade X5: targets=none; params=G1: [700]; G2: [900]; G3: [1100]; G4: [1300]
- 200106 Stormblade X6: targets=58 Thundercut, 67 Thundercleave; params=G1: [180]; G2: [237]; G3: [295]; G4: [353]
- 200107 Stormblade X7: targets=65 Divine Sickle, 66 Storm Scythe; params=G1: [250]; G2: [316]; G3: [383]; G4: [450]
- 200108 Stormblade X8: targets=56 Moonblades; params=G1: [1000]; G2: [1236]; G3: [1473]; G4: [1710]
- 200109 Stormblade X9: targets=50 Moonstrike; params=G1: [1, 235]; G2: [1, 320]; G3: [1, 405]; G4: [1, 490]
- 200110 Stormblade X10: targets=50 Moonstrike, 71 Thunderstrike; params=G1: [1250, 300]; G2: [1500, 393]; G3: [1750, 486]; G4: [2000, 580]
- 200111 Stormblade X11: targets=none; params=G1: [9500, 670]; G2: [9000, 780]; G3: [8500, 880]; G4: [8000, 980]
- 200201 Wind Knight X1: targets=12 Valor Cyclone; params=G1: [175]; G2: [266]; G3: [358]; G4: [450]
- 200202 Wind Knight X2: targets=8 Spiral Thrust, 9 Breach Pursuit; params=G1: [1500]; G2: [2111]; G3: [2722]; G4: [3333]
- 200203 Wind Knight X3: targets=16 Vortex Strike; params=G1: [210]; G2: [307]; G3: [405]; G4: [503]
- 200204 Wind Knight X4: targets=15 Drake Cannon; params=G1: [1350]; G2: [1686]; G3: [2023]; G4: [2360]
- 200205 Wind Knight X5: targets=12 Valor Cyclone; params=G1: [60]; G2: [86]; G3: [113]; G4: [140]
- 200206 Wind Knight X6: targets=none; params=G1: [400]; G2: [800]; G3: [1200]; G4: [1600]
- 200207 Wind Knight X7: targets=11 Instant Edge; params=G1: [300]; G2: [422]; G3: [544]; G4: [666]
- 200208 Wind Knight X8: targets=10 Falcon Toss; params=G1: [280]; G2: [464]; G3: [648]; G4: [833]
- 200209 Wind Knight X9: targets=20 Tornado; params=G1: [150]; G2: [231]; G3: [312]; G4: [393]

## CTB Formula-Adjacent Tables

- No CTB table met the high-confidence criteria for a numeric formula table.

## Top Scored CTB Tables

- BuffTable.ctb: score=224084, confidence=medium, rows=8612, rowSize=95, stringHits=393, placeholders=1, knownIds=skill:46398, buff:9720, factorBuff:294, effectSourceEntity:28402
  - field +80: nestedRows=8612, opcodes=131072:17224
  - field +28: nestedRows=8607, opcodes=2:9933, 721:12771, 723:18447, 131072:14376, 196608:4257, 786432:8514
  - field +88: nestedRows=8600, opcodes=131072:17200
  - text: 记录combo层数，如果combo结束，则添加派生技伤害强化的buff
  - text: 由淬火域进出时光环添加，检测到该Buff后【终结技】tag技能均会释放携带火柱伤害的攻击
- CTB:174000495: score=188246, confidence=low, rows=8896, rowSize=52, stringHits=0, placeholders=0, knownIds=damage:2, recountDamage:1, skill:67942, buff:106, effectSourceEntity:67612
  - field +40: nestedRows=8896, opcodes=1:600, 2:150, 44396:150, 65536:9346, 98802:150, 121842:150, 126962:150, 196608:19050
  - field +44: nestedRows=8896, opcodes=65536:8896, 16777216:17792
  - field +24: nestedRows=8895, opcodes=65536:8742, 16777216:17790
- CTB:3107949667: score=188147, confidence=low, rows=8975, rowSize=60, stringHits=0, placeholders=0, knownIds=damage:2, recountDamage:1, skill:88699, buff:103, effectSourceEntity:88585
  - field +8: nestedRows=8975, opcodes=201:791, 402:309, 10001:214, 10002:83, 10005:876, 10008:1645, 10010:225, 10014:183
  - field +32: nestedRows=732, opcodes=1:110, 5:20, 9:67, 42:458, 43:64, 79:32
  - field +16: nestedRows=547, opcodes=1:1190, 294:84, 65536:1108, 196608:1100, 531456:1, 655360:11, 720896:5, 2010101:48
- CTB:1500244386: score=151071, confidence=medium, rows=6624, rowSize=73, stringHits=7, placeholders=0, knownIds=skill:45019, buff:18, effectSourceEntity:43987
  - field +68: nestedRows=6624, opcodes=155:29, 334:6595
  - field +8: nestedRows=6624, opcodes=334:6624
  - field +32: nestedRows=6624, opcodes=334:6624
  - text: 找艾露娜进行天赋提升
  - text: 提升生体元等级后再去找艾露娜吧
- SkillFightLevelTable.ctb: score=141646, confidence=low, rows=15641, rowSize=61, stringHits=8, placeholders=0, knownIds=damage:4, skill:63224, buff:476, effectSourceEntity:14093
  - field +8: nestedRows=8354, opcodes=0:3585, 104:840, 220:18366, 234:16848, 249:15977, 196608:13931, 3074048:374, 22085632:373
  - field +4: nestedRows=1992, opcodes=0:961, 210:481, 220:1728, 234:1538, 249:4041, 1311:4039, 1321:4088, 1435:46
  - field +24: nestedRows=1389, opcodes=0:1413, 1:5, 2:31
  - text: 召唤激光地面伤害范围
  - text: 艾露娜召唤兽ATK_01
- DamageAttrTable.ctb: score=136581, confidence=medium, rows=4819, rowSize=74, stringHits=85, placeholders=0, knownIds=damage:1793, recountDamage:570, skill:39283, buff:862, factorBuff:5, effectSourceEntity:20852
  - field +44: nestedRows=4819, opcodes=0:4819
  - field +60: nestedRows=4819, opcodes=0:4819
  - field +64: nestedRows=4819, opcodes=0:4819
  - text: 恩格伤害技能
  - text: 陶洛斯AIRATK
- ItemTable.ctb: score=117698, confidence=medium, rows=11772, rowSize=93, stringHits=143, placeholders=0, knownIds=skill:55567, buff:1481, effectSourceEntity:57084
  - text: item_icons_medicine_physical_attack_01
  - text: item_icons_medicine_physical_attack_02
- CTB:4072890565: score=106588, confidence=low, rows=4759, rowSize=199, stringHits=0, placeholders=0, knownIds=skill:45879, buff:419, effectSourceEntity:26297
  - field +148: nestedRows=4484, opcodes=0:4484, 2:4484, -1:8968
  - field +48: nestedRows=1189, opcodes=0:2249, 1:2070, 2:112, 23:63, 87:85, 132:1436, 698:4568, 3025:66
  - field +8: nestedRows=996, opcodes=0:216, 2:216, 87:216, 132:216, 698:432, 3025:216, 16448:216, 22272:216
- CTB:535668281: score=91086, confidence=low, rows=6814, rowSize=56, stringHits=0, placeholders=0, knownIds=skill:16724, buff:99, effectSourceEntity:3983
  - field +40: nestedRows=6806, opcodes=0:13612
  - field +20: nestedRows=6783, opcodes=0:13566
  - field +24: nestedRows=6763, opcodes=0:13503
- SkillEffectTable.ctb: score=59026, confidence=low, rows=4123, rowSize=67, stringHits=98, placeholders=0, knownIds=damage:3, skill:24551, buff:109, effectSourceEntity:16319
  - field +52: nestedRows=4071, opcodes=61:4042, 4390912:4074, 761217905:13, 761218994:13, 761220083:13, 761221172:13, 1092447888:6, 1092452244:4042
  - field +24: nestedRows=1887, opcodes=2:135, 19:48, 23:115, 27:37, 28:34, 30:42, 61:177, 4390912:131
  - field +8: nestedRows=1507, opcodes=2:1374, 23:1373, 61:1380, 4390912:6886, 623543635:1371, 623544724:1371, 638432536:1371, 638433625:1371
  - text: 博伊斯ATK_01
  - text: 博伊斯ATK_02
- CTB:491123640: score=58111, confidence=low, rows=2797, rowSize=93, stringHits=0, placeholders=0, knownIds=skill:14190, buff:262, effectSourceEntity:17601
  - field +48: nestedRows=2797, opcodes=0:2797
  - field +88: nestedRows=2797, opcodes=0:3319, 1:24, 131072:48
  - field +28: nestedRows=2796, opcodes=0:2796
- CTB:609661436: score=54868, confidence=low, rows=2619, rowSize=240, stringHits=0, placeholders=0, knownIds=skill:22416, buff:371, effectSourceEntity:19064
  - field +124: nestedRows=2610, opcodes=101201:10440
  - field +32: nestedRows=2587, opcodes=101201:3096
  - field +96: nestedRows=1064, opcodes=101201:1332
- CTB:2645491910: score=54366, confidence=none, rows=2086, rowSize=120, stringHits=0, placeholders=0, knownIds=skill:26970, buff:213, effectSourceEntity:24856
- CTB:2203279657: score=45810, confidence=low, rows=2652, rowSize=117, stringHits=0, placeholders=0, knownIds=skill:15899, buff:259, effectSourceEntity:8918
  - field +72: nestedRows=2652, opcodes=0:2652
  - field +60: nestedRows=2652, opcodes=0:2652
  - field +64: nestedRows=2521, opcodes=0:2521
- CTB:3309950377: score=40214, confidence=low, rows=1548, rowSize=85, stringHits=0, placeholders=0, knownIds=skill:10497, buff:11, effectSourceEntity:7481
  - field +28: nestedRows=1548, opcodes=393217:1548
  - field +40: nestedRows=1547, opcodes=393217:1547
  - field +80: nestedRows=1547, opcodes=393217:1547
- CTB:1456951466: score=38279, confidence=low, rows=3524, rowSize=32, stringHits=0, placeholders=0, knownIds=skill:8725, buff:139, effectSourceEntity:7988
  - field +12: nestedRows=3524, opcodes=0:3791
  - field +8: nestedRows=3524, opcodes=1:3339, 3:450, 5:2
  - field +24: nestedRows=3524, opcodes=35:125, 52:122, 54:125, 70:152, 81:122, 87:122, 90:128, 105:137
- CTB:1680629877: score=33055, confidence=low, rows=3808, rowSize=199, stringHits=1, placeholders=0, knownIds=damage:2, skill:11869, buff:503, effectSourceEntity:11316
  - field +148: nestedRows=2145, opcodes=0:25, 252:3, 1970:2130, 65536:53184, 110075822:2127, 110081031:1, 110081061:8
  - field +180: nestedRows=751, opcodes=0:1844, 1:339, 2:137, 3:28, 280:33, 10010259:26, 10010421:26, 10010422:26
  - field +176: nestedRows=693, opcodes=0:4699, 1:615, 2:123, 3:29, 280:68, 572:32, 1441792:54, 110084012:42
  - text: as_mon_solider-sssword_slash_attack01
- CTB:2115052343: score=32362, confidence=medium, rows=1117, rowSize=123, stringHits=5, placeholders=0, knownIds=skill:8612, buff:232, effectSourceEntity:9484
  - field +104: nestedRows=1117, opcodes=1092093:1112, 279040768:5
  - field +88: nestedRows=1117, opcodes=1092093:776, 279040768:341
  - field +80: nestedRows=1117, opcodes=59:6702, 256:1117, 20003:1117, 65536:4468, 1070046:1117, 1070047:1117, 1080126:1117, 1080129:1117
  - text: item_icons_medicine_physical_attack_01
  - text: item_icons_medicine_magic_attack_01
- SkillTable.ctb: score=30171, confidence=low, rows=4120, rowSize=239, stringHits=125, placeholders=0, knownIds=damage:2, skill:12031, buff:194, effectSourceEntity:7443
  - field +28: nestedRows=3858, opcodes=4174:6, 122201:7734, 125301:3852, 155801:3852, 191601:3852, 10057601:6, 92995585:3852, 612696065:6
  - field +68: nestedRows=238, opcodes=1:51, 206:26, 4174:70, 65536:30, 122201:525, 152901:33, 153001:33, 155801:85
  - field +100: nestedRows=216, opcodes=122201:432, 125301:216, 155801:216, 191601:216, 92995585:216, -1802698751:216
  - text: 艾露娜ATK_01
  - text: ui/textures/skill_weapon_fh/weapon_fh_skill_atk
- CTB:954673010: score=30159, confidence=low, rows=1572, rowSize=139, stringHits=0, placeholders=0, knownIds=skill:10612, buff:166, effectSourceEntity:10183
  - field +16: nestedRows=1572, opcodes=0:8283, 2:1173, 8:1572, 59:798, 74:1173, 84:2346, 111:1572, 123:1173
  - field +76: nestedRows=1558, opcodes=2:60, 490:150, 510:49, 526:49, 564:49, 730:51, 754:56, 1064:76
  - field +80: nestedRows=1452, opcodes=14:2904, 127:2904, 1516:1452, 8694:1452, 21494:2904, 26354:1452, 31470:1452, 65536:2904
- CTB:2516150822: score=27639, confidence=low, rows=4466, rowSize=24, stringHits=0, placeholders=0, knownIds=skill:9072, buff:258, effectSourceEntity:8244
  - field +20: nestedRows=4401, opcodes=100:5756, 6619136:5431, 6684672:5756, 6750208:6786, 6815744:5431, 6881280:6786, 6946816:5756
  - field +8: nestedRows=4195, opcodes=100:2233, 6619136:2233, 6684672:2233, 6750208:2233, 6815744:2233, 6881280:2233, 6946816:2233
  - field +16: nestedRows=173, opcodes=100:180, 6619136:179, 6684672:181, 6750208:75, 6815744:169, 6881280:76, 6946816:171
- CTB:3901495857: score=26474, confidence=low, rows=1462, rowSize=52, stringHits=0, placeholders=0, knownIds=skill:11011, buff:31, effectSourceEntity:6751
  - field +28: nestedRows=1462, opcodes=0:1798
  - field +40: nestedRows=1462, opcodes=0:1462
  - field +44: nestedRows=1462, opcodes=0:1462
- CTB:2871405756: score=22759, confidence=low, rows=1293, rowSize=113, stringHits=0, placeholders=0, knownIds=skill:10191, buff:243, effectSourceEntity:5107
  - field +48: nestedRows=776, opcodes=702:775, 179968:56
  - field +20: nestedRows=173, opcodes=203:139, 333:16, 362:16, 689:7, 907:58, 1362:21
  - field +8: nestedRows=135, opcodes=2:47, 3:47, 4:47, 203:141, 333:47, 362:47, 702:452, 112128:104
- CTB:893835470: score=19568, confidence=medium, rows=1434, rowSize=81, stringHits=2, placeholders=0, knownIds=skill:3564, buff:40, effectSourceEntity:3191
  - field +48: nestedRows=1434, opcodes=0:2868
  - field +76: nestedRows=1433, opcodes=0:2866
  - field +28: nestedRows=1424, opcodes=0:2848
  - text: cutscene/new/dng003_dragonscar/dragonscar_1.1_separate
  - text: cutscene/new/other/cs_commercialization/cs_collaboration_01
- CTB:2553675475 SeasonPhantomFactor: score=17550, confidence=low, rows=1560, rowSize=44, stringHits=0, placeholders=0, knownIds=skill:5802, buff:2, effectSourceEntity:5512
  - field +12: nestedRows=1560, opcodes=1:160, 3:1470
  - field +16: nestedRows=1470, opcodes=0:1230, 6:10, 15:50, 21:10, 26:50, 36:10, 42:10, 51:10
  - field +20: nestedRows=1470, opcodes=1:14, 300:13, 400:14, 500:19, 600:15, 800:16, 1000:23, 1500:16
- CTB:419248314: score=17261, confidence=medium, rows=862, rowSize=72, stringHits=4, placeholders=0, knownIds=skill:5007, buff:82, effectSourceEntity:3332
  - field +40: nestedRows=856, opcodes=131072:856
  - field +32: nestedRows=848, opcodes=131072:848
  - field +56: nestedRows=847, opcodes=986:6, 4719:4, 5607:3, 11507:3, 12701:3, 18019:6, 28013:3, 131072:840
  - text: OpenModIllustrated
  - text: hideseek_illustrations_window
- CTB:2517142245: score=16374, confidence=low, rows=1608, rowSize=153, stringHits=0, placeholders=0, knownIds=damage:2, skill:6501, buff:17, effectSourceEntity:6323
  - field +100: nestedRows=1471, opcodes=0:2942, 1:1471, 14:1471, 39:2942
  - field +108: nestedRows=220, opcodes=0:440, 1:220, 14:220, 39:440
  - field +28: nestedRows=111, opcodes=196608:111
- CTB:755104775: score=14792, confidence=none, rows=573, rowSize=113, stringHits=0, placeholders=0, knownIds=skill:7368, buff:28, effectSourceEntity:5412
- CTB:4087996281: score=13952, confidence=low, rows=1685, rowSize=101, stringHits=0, placeholders=0, knownIds=skill:5153, buff:121, effectSourceEntity:4086
  - field +20: nestedRows=1610, opcodes=0:1610, 1:1610, 2:1610
  - field +92: nestedRows=652, opcodes=0:5493, 1:4, 2:4, 19:210, 400:8515, 1992:62, 131072:4
  - field +72: nestedRows=447, opcodes=0:3555, 1:73, 2:37, 19:56, 400:5429, 1992:84, 131072:62
- CTB:4273671749: score=13654, confidence=low, rows=1758, rowSize=29, stringHits=0, placeholders=0, knownIds=skill:5855, buff:54, effectSourceEntity:686
  - field +8: nestedRows=1517, opcodes=0:8, 1:4, 11:6, 26:2, 256:2, 65536:4, 131072:8, 196608:6
  - field +12: nestedRows=176, opcodes=65536:92, 16777216:84
  - field +16: nestedRows=122, opcodes=0:15, 1:172, 9:6, 26:2, 39:1, 43:4, 52:1, 59:4
- CTB:534438717: score=13570, confidence=low, rows=3469, rowSize=44, stringHits=0, placeholders=0, knownIds=skill:6749, buff:35, effectSourceEntity:6292
  - field +36: nestedRows=1, opcodes=0:1
  - field +40: nestedRows=1, opcodes=0:1
- TalentTable.ctb: score=13453, confidence=low, rows=646, rowSize=60, stringHits=16, placeholders=0, knownIds=skill:3701, buff:21, effectSourceEntity:4050
  - field +28: nestedRows=646, opcodes=1:1292, 242:21964, 2550:1292
  - field +52: nestedRows=646, opcodes=1:1292, 242:21964, 2550:1292
  - field +36: nestedRows=646, opcodes=1:41, 3:591, 4:12, 6:15
  - text: ui/atlas/weaponhero/new/common_attrluck
  - text: 暴击伤害+3%
- CTB:915137620: score=13218, confidence=low, rows=2691, rowSize=53, stringHits=1, placeholders=0, knownIds=skill:4059, buff:771, effectSourceEntity:3371
  - field +12: nestedRows=2350, opcodes=0:2350, 492:28200, 5366:2350, 6229:2350, 11254:2350, 16630:2350, 35314:2350, 460062720:2350
  - field +4: nestedRows=711, opcodes=0:400, 8:172, 329:625, 492:5728, 512:44, 1222:22, 1266:22, 2014:28
  - field +8: nestedRows=363, opcodes=0:177, 8:231, 329:266, 492:545, 512:20, 906:9, 1222:9, 1266:9
  - text: attack
- CTB:2119703852: score=13145, confidence=low, rows=1350, rowSize=36, stringHits=0, placeholders=0, knownIds=skill:5696, buff:36, effectSourceEntity:5568
  - field +28: nestedRows=686, opcodes=0:17, 690:30, 1380:32, 2258:18, 2260:25, 6045:21, 6695:28, 223027:18
  - field +20: nestedRows=382, opcodes=600:6, 153600:5, 783360:4, 1720320:4, 39321602:5, 377487360:4, 1962934528:5, -122880:4
  - field +24: nestedRows=290, opcodes=600:3, 1680:3, 1980:3, 6295:3, 153600:3, 223027:3, 1720320:3, 1850880:3
- CTB:3506303102: score=12522, confidence=none, rows=3235, rowSize=32, stringHits=0, placeholders=0, knownIds=skill:6248, buff:13, effectSourceEntity:2940
- CTB:4052750840: score=12322, confidence=low, rows=738, rowSize=56, stringHits=0, placeholders=0, knownIds=skill:3934, buff:63, effectSourceEntity:3045
  - field +32: nestedRows=738, opcodes=1020151:162, 1020152:90, 1020153:72, 1020154:84, 1020155:72, 1020156:78, 1020157:90, 1020158:90
  - field +28: nestedRows=738, opcodes=9:123, 17:738
  - field +40: nestedRows=738, opcodes=7:738
- CTB:1551315654: score=10518, confidence=low, rows=941, rowSize=53, stringHits=0, placeholders=0, knownIds=skill:4237, buff:58, effectSourceEntity:3071
  - field +24: nestedRows=941, opcodes=10008:326, 20003:65, 1022303:18, 1052002:65, 1070006:25, 1070008:82, 1070026:29, 1070027:81
  - field +4: nestedRows=360, opcodes=0:260, 186:213, 1366:511, 3830:133, 10008:526, 20003:526, 65536:297, 1052002:542
  - field +44: nestedRows=287, opcodes=0:119, 16:63, 186:183, 1366:213, 10008:558, 20003:548, 65536:138, 131072:85
- CTB:3816620168: score=10051, confidence=low, rows=1023, rowSize=147, stringHits=0, placeholders=0, knownIds=skill:2698, buff:380, effectSourceEntity:2989
  - field +32: nestedRows=1023, opcodes=0:1023, 1:1023
  - field +40: nestedRows=1015, opcodes=0:649, 1:649, 2:366
  - field +108: nestedRows=543, opcodes=0:178, 1:374, 3:3, 4:2
- CTB:284255875: score=9905, confidence=low, rows=582, rowSize=56, stringHits=0, placeholders=0, knownIds=skill:3487, buff:175, effectSourceEntity:3606
  - field +48: nestedRows=561, opcodes=0:561
  - field +44: nestedRows=561, opcodes=0:561
  - field +36: nestedRows=508, opcodes=0:508
- CTB:3997506903: score=9642, confidence=low, rows=466, rowSize=214, stringHits=0, placeholders=0, knownIds=skill:3194, buff:63, effectSourceEntity:2612
  - field +92: nestedRows=466, opcodes=1:466, 9:466, 106:466
  - field +28: nestedRows=442, opcodes=1:166, 2:5, 9:326, 14:164, 53:163, 105:3, 106:118
  - field +84: nestedRows=379, opcodes=1:379, 9:379, 106:379

## Localization Formula Text

- Localization strings scanned: 1524988
- Formula-like localization hits: 55196
- Decision placeholders: 3782
- english: 9816 hits
- chinese: 5981 hits
- traditionalchinese: 5980 hits
- japanese: 2936 hits
- korean: 3000 hits
- french: 5572 hits
- german: 2296 hits
- spanish: 1766 hits
- portuguese: 1399 hits
- thai: 4911 hits
- indonesian: 11539 hits

## Parser Development Implications

- Keep exact contribution tied to emitted child damage ids.
- Source-only rows can be shown when runtime active buff/factor/talent evidence exists, but value columns should remain non-numeric unless replay semantics are proven.
- A future derived/experimental mode can allocate a parent total only when the active source, modifier parameters, stacking rules, target skill scope, and base total are all proven.
- The best next community help would be table schema names, DummyDll/Panda table definitions, or controlled captures where one factor/talent is toggled at a time.

## Important Boundary

This report is intentionally conservative. Formula-like text and parameter arrays prove that the game has configurable modifier data; they do not by themselves prove the server's runtime damage equation or contribution split.

