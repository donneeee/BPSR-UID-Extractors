# Skill Coefficient Surface Probe

Generated: 2026-05-15T23:58:42.424Z
Game package: `C:\Program Files (x86)\Steam\steamapps\common\Blue Protocol Star Resonance\bpsr\BPSR_STEAM_Data\StreamingAssets\container\m0.pkg`
Ledger: `C:\Users\dbcas\Desktop\resonancelogs-cn-gh\BETA\resonance-logs-global\DEV_exports\skill-base-hit-ledger-latest4.json`

## Summary

- Target damage ids: 28
- Target recount ids: 15
- Target skill ids: 37
- Target buff ids: 10
- CTB tables scanned: 65
- Tables with target rows: 64
- Target rows found: 6487
- Chain candidates: 21

## Key Findings

- DamageAttr target rows in focused output: 28
- SkillEffect target rows in focused output: 4
- SkillFight target rows in focused output: 60
- Use these row surfaces to build a generated skill coefficient/value-cal bridge. Final hit totals remain anchored to live packets; these rows only identify the static formula inputs to peel back next.

## Top Target Tables

- ItemTable.ctb: 1120
- CTB:491123640: 860
- SkillFightLevelTable.ctb: 666
- BuffTable.ctb: 360
- CTB:3836439762: 364
- DamageAttrTable.ctb: 65
- CTB:1680629877: 289
- CTB:4072890565: 265
- CTB:2871405756: 185
- CTB:284255875: 174
- CTB:4087996281: 141
- CTB:755104775: 141

## Chain Candidates

- Exact DamageAttr rows: 21/21
- Rows with SkillEffect links: 15/21
- Rows with SkillFight links: 15/21
- Rows with non-zero SkillEffect float candidates: 8/21
- Multi-damage recount rows needing allocation: 15/21

| Damage | Name | Final Total | Recount | DamageAttr | SkillEffect | SkillFight | Candidates | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2220329107 | Falcon Strike | 53.2m | 94:Falcon Strike | linked=2203291; kind=Attack; name= |  |  |  | no non-zero SkillEffectTable.floatAt16 candidate yet |
| 2220329109 | Falcon Lightning Strike | 15.6m | 95:Falcon Lightning Strike | linked=2203291; kind=Attack; name= |  |  |  | no non-zero SkillEffectTable.floatAt16 candidate yet |
| 122330103 | Powerdraw | 13.5m | 84:Powerdraw | linked=2233; kind=Attack; name= | 223301/2233::f16=0 | 223301/2233->223301:lv1:f28=1; 223302/2233->223301:lv2:f28=1; 223303/2233->223301:lv3:f28=1; 223304/2233->223301:lv4:f28=1; 223305/2233->223301:lv5:f28=1 |  | no non-zero SkillEffectTable.floatAt16 candidate yet; SkillEffect row exists but its candidate coefficient field is zero; SkillFight rows provide level/effect linkage; floatAt28 may be cooldown or timing until schema is proven |
| 322010600 | Double Arrow | 11.6m | 77:Double Arrow | linked=220106; kind=Attack; name=罗特罗亚尼-弓-普攻子弹 | 220101/2201:罗特罗亚尼-弓-ATK_01:f16=15; 222201/2222:罗特罗亚尼-弓-特殊攻击B:f16=0 | 220106/2201->220101:lv6:f28=0; 220101/2201->220101:lv1:f28=0; 220102/2201->220101:lv2:f28=0; 220103/2201->220101:lv3:f28=0; 220104/2201->220101:lv4:f28=0 | 220101/2201:15 | SkillFight rows provide level/effect linkage; floatAt28 may be cooldown or timing until schema is proven |
| 25524003 | Radiance Barrage | 9.8m | 85:Radiance Barrage | linked=55240; kind=Attack; name= | 223401/2234:聚能射击:f16=0 | 223401/2234->223401:lv1:f28=30; 223402/2234->223401:lv2:f28=30; 223403/2234->223401:lv3:f28=30; 223404/2234->223401:lv4:f28=30; 223405/2234->223401:lv5:f28=30 |  | no non-zero SkillEffectTable.floatAt16 candidate yet; multi-damage recount parent needs chain allocation before per-skill base math; SkillEffect row exists but its candidate coefficient field is zero; SkillFight rows provide level/effect linkage; floatAt28 may be cooldown or timing until schema is proven |
| 2220352105 | Implosion | 7.6m | 101:Implosion | linked=2203521; kind=Attack; name= |  |  |  | no non-zero SkillEffectTable.floatAt16 candidate yet |
| 322011300 | Phantom Falcon | 6.4m | 96:Phantom Falcon | linked=220113; kind=Attack; name=幻影雄鹰 | 220101/2201:罗特罗亚尼-弓-ATK_01:f16=15 | 220113/2201->220101:lv13:f28=0; 220101/2201->220101:lv1:f28=0; 220102/2201->220101:lv2:f28=0; 220103/2201->220101:lv3:f28=0; 220104/2201->220101:lv4:f28=0 | 220101/2201:15 | multi-damage recount parent needs chain allocation before per-skill base math; SkillFight rows provide level/effect linkage; floatAt28 may be cooldown or timing until schema is proven |
| 25523102 | Blast Shot | 3.8m | 87:Blast Shot | linked=55231; kind=Attack; name=爆炸箭BUFF | 223801/2238:爆炸箭一段:f16=0 | 223801/2238->223801:lv1:f28=15; 223802/2238->223801:lv2:f28=15; 223803/2238->223801:lv3:f28=15; 223804/2238->223801:lv4:f28=15; 223805/2238->223801:lv5:f28=15 |  | no non-zero SkillEffectTable.floatAt16 candidate yet; multi-damage recount parent needs chain allocation before per-skill base math; SkillEffect row exists but its candidate coefficient field is zero; SkillFight rows provide level/effect linkage; floatAt28 may be cooldown or timing until schema is proven |
| 322011100 | ​Quadraflare​ | 3.4m | 78:​Quadraflare​ | linked=220111; kind=Attack; name=罗特罗亚尼-弓-普攻子弹 | 220101/2201:罗特罗亚尼-弓-ATK_01:f16=15 | 220111/2201->220101:lv11:f28=0; 220101/2201->220101:lv1:f28=0; 220102/2201->220101:lv2:f28=0; 220103/2201->220101:lv3:f28=0; 220104/2201->220101:lv4:f28=0 | 220101/2201:15 | multi-damage recount parent needs chain allocation before per-skill base math; SkillFight rows provide level/effect linkage; floatAt28 may be cooldown or timing until schema is proven |
| 322010100 | Bullseye | 2.4m | 75:Bullseye | linked=220101; kind=Attack; name=罗特罗亚尼-弓-普攻子弹 | 220101/2201:罗特罗亚尼-弓-ATK_01:f16=15 | 220101/2201->220101:lv1:f28=0; 220102/2201->220101:lv2:f28=0; 220103/2201->220101:lv3:f28=0; 220104/2201->220101:lv4:f28=0; 220105/2201->220101:lv5:f28=0 | 220101/2201:15 | multi-damage recount parent needs chain allocation before per-skill base math; SkillFight rows provide level/effect linkage; floatAt28 may be cooldown or timing until schema is proven |
| 2220362101 | Light Prism | 2.3m | 102:Light Prism | linked=2203621; kind=Attack; name= |  |  |  | no non-zero SkillEffectTable.floatAt16 candidate yet; multi-damage recount parent needs chain allocation before per-skill base math |
| 122940101 | ​Quadraflare​ | 2.0m | 78:​Quadraflare​ | linked=2294; kind=Attack; name=夺命射击虚拟体 | 229401/2294:夺命射击虚拟体:f16=0 | 229401/2294->229401:lv1:f28=0 |  | no non-zero SkillEffectTable.floatAt16 candidate yet; multi-damage recount parent needs chain allocation before per-skill base math; SkillEffect row exists but its candidate coefficient field is zero; SkillFight rows provide level/effect linkage; floatAt28 may be cooldown or timing until schema is proven |
| 322011000 | Blast Shot | 1.7m | 87:Blast Shot | linked=220110; kind=Attack; name=罗特罗亚尼-弓-普攻子弹 | 220101/2201:罗特罗亚尼-弓-ATK_01:f16=15; 223801/2238:爆炸箭一段:f16=0 | 220110/2201->220101:lv10:f28=0; 220101/2201->220101:lv1:f28=0; 220102/2201->220101:lv2:f28=0; 220103/2201->220101:lv3:f28=0; 220104/2201->220101:lv4:f28=0 | 220101/2201:15 | multi-damage recount parent needs chain allocation before per-skill base math; SkillFight rows provide level/effect linkage; floatAt28 may be cooldown or timing until schema is proven |
| 25524004 | Radiance Barrage | 1.4m | 85:Radiance Barrage | linked=55240; kind=Attack; name= | 223401/2234:聚能射击:f16=0 | 223401/2234->223401:lv1:f28=30; 223402/2234->223401:lv2:f28=30; 223403/2234->223401:lv3:f28=30; 223404/2234->223401:lv4:f28=30; 223405/2234->223401:lv5:f28=30 |  | no non-zero SkillEffectTable.floatAt16 candidate yet; multi-damage recount parent needs chain allocation before per-skill base math; SkillEffect row exists but its candidate coefficient field is zero; SkillFight rows provide level/effect linkage; floatAt28 may be cooldown or timing until schema is proven |
| 322020300 | ​Quadraflare​ | 1.4m | 78:​Quadraflare​ | linked=220203; kind=Attack; name=罗特罗亚尼-弓-重击子弹 | 220201/2202:罗特罗亚尼-弓-ATK_02:f16=15 | 220203/2202->220201:lv3:f28=0; 220201/2202->220201:lv1:f28=0; 220202/2202->220201:lv2:f28=0; 220204/2202->220201:lv4:f28=0; 220205/2202->220201:lv5:f28=0 | 220201/2202:15 | multi-damage recount parent needs chain allocation before per-skill base math; SkillFight rows provide level/effect linkage; floatAt28 may be cooldown or timing until schema is proven |
| 123520103 | Celestial Eagle | 930.7k | 97:Celestial Eagle | linked=2352; kind=Attack; name= | 235201/2352::f16=0; 224101/2241:天界雄鹰:f16=0 | 235201/2352->235201:lv1:f28=0; 224101/2241->224101:lv1:f28=0 |  | no non-zero SkillEffectTable.floatAt16 candidate yet; multi-damage recount parent needs chain allocation before per-skill base math; SkillEffect row exists but its candidate coefficient field is zero; SkillFight rows provide level/effect linkage; floatAt28 may be cooldown or timing until schema is proven |
| 322010800 | Explosive Arrow | 593.7k | 106:Explosive Arrow | linked=220108; kind=Attack; name=法杖协同攻击 | 220101/2201:罗特罗亚尼-弓-ATK_01:f16=15 | 220108/2201->220101:lv8:f28=0; 220101/2201->220101:lv1:f28=0; 220102/2201->220101:lv2:f28=0; 220103/2201->220101:lv3:f28=0; 220104/2201->220101:lv4:f28=0 | 220101/2201:15 | multi-damage recount parent needs chain allocation before per-skill base math; SkillFight rows provide level/effect linkage; floatAt28 may be cooldown or timing until schema is proven |
| 123520101 | Celestial Eagle | 563.7k | 97:Celestial Eagle | linked=2352; kind=Attack; name= | 235201/2352::f16=0; 224101/2241:天界雄鹰:f16=0 | 235201/2352->235201:lv1:f28=0; 224101/2241->224101:lv1:f28=0 |  | no non-zero SkillEffectTable.floatAt16 candidate yet; multi-damage recount parent needs chain allocation before per-skill base math; SkillEffect row exists but its candidate coefficient field is zero; SkillFight rows provide level/effect linkage; floatAt28 may be cooldown or timing until schema is proven |
| 2203110903 | Lucky Strike | 386.3k | 74:Lucky Strike | linked=2031109; kind=AttackLucky; name=弓箭-幸运 |  |  |  | no non-zero SkillEffectTable.floatAt16 candidate yet; multi-damage recount parent needs chain allocation before per-skill base math |
| 322010300 | Bullseye | 301.9k | 75:Bullseye | linked=220103; kind=Attack; name=罗特罗亚尼-弓-普攻子弹 | 220101/2201:罗特罗亚尼-弓-ATK_01:f16=15 | 220103/2201->220101:lv3:f28=0; 220101/2201->220101:lv1:f28=0; 220102/2201->220101:lv2:f28=0; 220104/2201->220101:lv4:f28=0; 220105/2201->220101:lv5:f28=0 | 220101/2201:15 | multi-damage recount parent needs chain allocation before per-skill base math; SkillFight rows provide level/effect linkage; floatAt28 may be cooldown or timing until schema is proven |
| 2300267103 | Mirage Dream - Immortal Stance | 0 | 286:Mirage Dream - Immortal Stance | linked=3002671; kind=SpHeal; name=迷幻梦境-不灭战姿子BUFF |  |  |  | no non-zero SkillEffectTable.floatAt16 candidate yet |

## Focused Rows

| Table | Row | Offset | Known Shape | Matches | Float Fields | Strings |
| --- | --- | --- | --- | --- | --- | --- |
| DamageAttrTable.ctb | 172 | 304958698 | damageId=25523102; directName=爆炸箭BUFF; linkedId=55231; damageKind=Attack | +0:u64 25523102 damage; +0:u32 25523102 linked; +20:u32 55231 buff/linked |  | +12:爆炸箭BUFF |
| DamageAttrTable.ctb | 174 | 304958846 | damageId=25523501; directName=强化特攻小箭AOE; linkedId=55235; damageKind=Attack | +0:u64 25523501 damage; +0:u32 25523501 linked; +20:u32 55235 buff/linked |  | +12:强化特攻小箭AOE |
| DamageAttrTable.ctb | 1315 | 305043280 | damageId=322010100; directName=罗特罗亚尼-弓-普攻子弹; linkedId=220101; damageKind=Attack | +0:u64 322010100 damage; +0:u32 322010100 linked; +20:u32 220101 skill/linked |  | +12:罗特罗亚尼-弓-普攻子弹 |
| DamageAttrTable.ctb | 1317 | 305043428 | damageId=322010300; directName=罗特罗亚尼-弓-普攻子弹; linkedId=220103; damageKind=Attack | +0:u64 322010300 damage; +0:u32 322010300 linked; +20:u32 220103 skill/linked |  | +12:罗特罗亚尼-弓-普攻子弹 |
| DamageAttrTable.ctb | 1320 | 305043650 | damageId=322010600; directName=罗特罗亚尼-弓-普攻子弹; linkedId=220106; damageKind=Attack | +0:u64 322010600 damage; +0:u32 322010600 linked; +20:u32 220106 skill/linked |  | +12:罗特罗亚尼-弓-普攻子弹 |
| DamageAttrTable.ctb | 1324 | 305043946 | damageId=322011000; directName=罗特罗亚尼-弓-普攻子弹; linkedId=220110; damageKind=Attack | +0:u64 322011000 damage; +0:u32 322011000 linked; +20:u32 220110 skill/linked |  | +12:罗特罗亚尼-弓-普攻子弹 |
| DamageAttrTable.ctb | 1325 | 305044020 | damageId=322011100; directName=罗特罗亚尼-弓-普攻子弹; linkedId=220111; damageKind=Attack | +0:u64 322011100 damage; +0:u32 322011100 linked; +20:u32 220111 skill/linked |  | +12:罗特罗亚尼-弓-普攻子弹 |
| DamageAttrTable.ctb | 1330 | 305044390 | damageId=322020300; directName=罗特罗亚尼-弓-重击子弹; linkedId=220203; damageKind=Attack | +0:u64 322020300 damage; +0:u32 322020300 linked; +20:u32 220203 skill/linked |  | +12:罗特罗亚尼-弓-重击子弹 |
| DamageAttrTable.ctb | 1467 | 305054528 | damageId=2203110903; directName=弓箭-幸运; linkedId=2031109; damageKind=AttackLucky | +0:u64 2203110903 damage; +0:u32 2203110903 linked; +20:u32 2031109 buff/linked |  | +12:弓箭-幸运 |
| DamageAttrTable.ctb | 1628 | 305066442 | damageId=2300267103; directName=迷幻梦境-不灭战姿子BUFF; linkedId=3002671; damageKind=SpHeal | +0:u64 2300267103 damage; +0:u32 2300267103 linked; +20:u32 3002671 buff/linked |  | +12:迷幻梦境-不灭战姿子BUFF |
| DamageAttrTable.ctb | 175 | 304958920 | damageId=25524003; linkedId=55240; damageKind=Attack | +0:u64 25524003 damage; +0:u32 25524003 linked; +20:u32 55240 buff/linked |  |  |
| DamageAttrTable.ctb | 176 | 304958994 | damageId=25524004; linkedId=55240; damageKind=Attack | +0:u64 25524004 damage; +0:u32 25524004 linked; +20:u32 55240 buff/linked |  |  |
| DamageAttrTable.ctb | 641 | 304993404 | damageId=122330103; linkedId=2233; damageKind=Attack | +0:u64 122330103 damage; +0:u32 122330103 linked; +20:u32 2233 skill/linked |  |  |
| DamageAttrTable.ctb | 650 | 304994070 | damageId=122940101; directName=夺命射击虚拟体; linkedId=2294; damageKind=Attack | +0:u64 122940101 damage; +0:u32 122940101 linked; +20:u32 2294 skill/linked |  |  |
| DamageAttrTable.ctb | 652 | 304994218 | damageId=122960102; directName=幻影魔狼; linkedId=2296; damageKind=Attack | +0:u64 122960102 damage; +0:u32 122960102 linked; +20:u32 2296 skill/linked |  |  |
| DamageAttrTable.ctb | 696 | 304997474 | damageId=123520101; linkedId=2352; damageKind=Attack | +0:u64 123520101 damage; +0:u32 123520101 linked; +20:u32 2352 skill/linked |  |  |
| DamageAttrTable.ctb | 697 | 304997548 | damageId=123520103; linkedId=2352; damageKind=Attack | +0:u64 123520103 damage; +0:u32 123520103 linked; +20:u32 2352 skill/linked |  |  |
| DamageAttrTable.ctb | 1322 | 305043798 | damageId=322010800; directName=法杖协同攻击; linkedId=220108; damageKind=Attack | +0:u64 322010800 damage; +0:u32 322010800 linked; +20:u32 220108 skill/linked |  |  |
| DamageAttrTable.ctb | 1327 | 305044168 | damageId=322011300; directName=幻影雄鹰; linkedId=220113; damageKind=Attack | +0:u64 322011300 damage; +0:u32 322011300 linked; +20:u32 220113 skill/linked |  |  |
| DamageAttrTable.ctb | 1468 | 305054602 | damageId=2203110904; linkedId=2031109; damageKind=PHealLucky | +0:u64 2203110904 damage; +0:u32 2203110904 linked; +20:u32 2031109 buff/linked |  |  |
| DamageAttrTable.ctb | 1553 | 305060892 | damageId=2220329107; linkedId=2203291; damageKind=Attack | +0:u64 2220329107 damage; +0:u32 2220329107 linked; +20:u32 2203291 buff/linked |  |  |
| DamageAttrTable.ctb | 1554 | 305060966 | damageId=2220329109; linkedId=2203291; damageKind=Attack | +0:u64 2220329109 damage; +0:u32 2220329109 linked; +20:u32 2203291 buff/linked |  |  |
| DamageAttrTable.ctb | 1556 | 305061114 | damageId=2220331101; directName=爆破箭矢伤害aoe; linkedId=220108; damageKind=Attack | +0:u64 2220331101 damage; +0:u32 2220331101 linked; +20:u32 220108 skill/linked |  |  |
| DamageAttrTable.ctb | 1558 | 305061262 | damageId=2220352105; linkedId=2203521; damageKind=Attack | +0:u64 2220352105 damage; +0:u32 2220352105 linked; +20:u32 2203521 buff/linked |  |  |
| DamageAttrTable.ctb | 1560 | 305061410 | damageId=2220362101; linkedId=2203621; damageKind=Attack | +0:u64 2220362101 damage; +0:u32 2220362101 linked; +20:u32 2203621 buff/linked |  |  |
| DamageAttrTable.ctb | 1561 | 305061484 | damageId=2220362105; linkedId=2203621; damageKind=Attack | +0:u64 2220362105 damage; +0:u32 2220362105 linked; +20:u32 2203621 buff/linked |  |  |
| DamageAttrTable.ctb | 1562 | 305061558 | damageId=2220362204; linkedId=2203622; damageKind=Attack | +0:u64 2220362204 damage; +0:u32 2220362204 linked; +20:u32 2203622 buff/linked |  |  |
| DamageAttrTable.ctb | 1563 | 305061632 | damageId=2220362207; linkedId=2203622; damageKind=Attack | +0:u64 2220362207 damage; +0:u32 2220362207 linked; +20:u32 2203622 buff/linked |  |  |
| SkillFightLevelTable.ctb | 7897 | 526230028 | fightId=220101; skillId=2201; level=1; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220101 skill/linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7898 | 526230089 | fightId=220102; skillId=2201; level=2; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220102 linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7899 | 526230150 | fightId=220103; skillId=2201; level=3; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220103 skill/linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7900 | 526230211 | fightId=220104; skillId=2201; level=4; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220104 linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7901 | 526230272 | fightId=220105; skillId=2201; level=5; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220105 linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7902 | 526230333 | fightId=220106; skillId=2201; level=6; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220106 skill/linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7903 | 526230394 | fightId=220107; skillId=2201; level=7; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220107 linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7904 | 526230455 | fightId=220108; skillId=2201; level=8; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220108 skill/linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7905 | 526230516 | fightId=220109; skillId=2201; level=9; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220109 linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7906 | 526230577 | fightId=220110; skillId=2201; level=10; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220110 skill/linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7907 | 526230638 | fightId=220111; skillId=2201; level=11; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220111 skill/linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7908 | 526230699 | fightId=220112; skillId=2201; level=12; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220112 linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7909 | 526230760 | fightId=220113; skillId=2201; level=13; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220113 skill/linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7910 | 526230821 | fightId=220114; skillId=2201; level=14; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220114 linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7911 | 526230882 | fightId=220115; skillId=2201; level=15; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220115 linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7912 | 526230943 | fightId=220116; skillId=2201; level=16; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220116 linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7913 | 526231004 | fightId=220117; skillId=2201; level=17; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220117 linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7914 | 526231065 | fightId=220118; skillId=2201; level=18; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220118 linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7915 | 526231126 | fightId=220119; skillId=2201; level=19; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220119 linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7916 | 526231187 | fightId=220120; skillId=2201; level=20; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220120 linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7917 | 526231248 | fightId=220121; skillId=2201; level=21; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220121 linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7918 | 526231309 | fightId=220122; skillId=2201; level=22; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220122 linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7919 | 526231370 | fightId=220123; skillId=2201; level=23; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220123 linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7920 | 526231431 | fightId=220124; skillId=2201; level=24; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220124 linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7921 | 526231492 | fightId=220125; skillId=2201; level=25; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220125 linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7922 | 526231553 | fightId=220126; skillId=2201; level=26; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220126 linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7923 | 526231614 | fightId=220127; skillId=2201; level=27; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220127 linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7924 | 526231675 | fightId=220128; skillId=2201; level=28; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220128 linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7925 | 526231736 | fightId=220129; skillId=2201; level=29; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220129 linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7926 | 526231797 | fightId=220130; skillId=2201; level=30; effectId=220101; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220130 linked; +4:u32 2201 skill; +12:u32 220101 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7927 | 526231858 | fightId=220201; skillId=2202; level=1; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220201 skill/linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7928 | 526231919 | fightId=220202; skillId=2202; level=2; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220202 linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7929 | 526231980 | fightId=220203; skillId=2202; level=3; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220203 skill/linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7930 | 526232041 | fightId=220204; skillId=2202; level=4; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220204 linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7931 | 526232102 | fightId=220205; skillId=2202; level=5; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220205 linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7932 | 526232163 | fightId=220206; skillId=2202; level=6; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220206 linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7933 | 526232224 | fightId=220207; skillId=2202; level=7; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220207 linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7934 | 526232285 | fightId=220208; skillId=2202; level=8; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220208 linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7935 | 526232346 | fightId=220209; skillId=2202; level=9; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220209 linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7936 | 526232407 | fightId=220210; skillId=2202; level=10; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220210 linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7937 | 526232468 | fightId=220211; skillId=2202; level=11; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220211 linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7938 | 526232529 | fightId=220212; skillId=2202; level=12; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220212 linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7939 | 526232590 | fightId=220213; skillId=2202; level=13; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220213 linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7940 | 526232651 | fightId=220214; skillId=2202; level=14; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220214 linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7941 | 526232712 | fightId=220215; skillId=2202; level=15; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220215 linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7942 | 526232773 | fightId=220216; skillId=2202; level=16; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220216 linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7943 | 526232834 | fightId=220217; skillId=2202; level=17; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220217 linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7944 | 526232895 | fightId=220218; skillId=2202; level=18; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220218 linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7945 | 526232956 | fightId=220219; skillId=2202; level=19; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220219 linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7946 | 526233017 | fightId=220220; skillId=2202; level=20; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220220 linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7947 | 526233078 | fightId=220221; skillId=2202; level=21; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220221 linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7948 | 526233139 | fightId=220222; skillId=2202; level=22; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220222 linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7949 | 526233200 | fightId=220223; skillId=2202; level=23; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220223 linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7950 | 526233261 | fightId=220224; skillId=2202; level=24; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220224 linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7951 | 526233322 | fightId=220225; skillId=2202; level=25; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220225 linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7952 | 526233383 | fightId=220226; skillId=2202; level=26; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220226 linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7953 | 526233444 | fightId=220227; skillId=2202; level=27; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220227 linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7954 | 526233505 | fightId=220228; skillId=2202; level=28; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220228 linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7955 | 526233566 | fightId=220229; skillId=2202; level=29; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220229 linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| SkillFightLevelTable.ctb | 7956 | 526233627 | fightId=220230; skillId=2202; level=30; effectId=220201; designName=罗特罗亚尼-弓; floatAt28=0 | +0:u32 220230 linked; +4:u32 2202 skill; +12:u32 220201 skill/linked |  | +16:罗特罗亚尼-弓 |
| CTB:4072890565 | 9 | 733860161 |  | +0:u32 101 linked; +20:u32 101 linked | +24=1; +64=-0.15; +68=-2.4; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 10 | 733860360 |  | +0:u32 102 linked; +20:u32 102 linked | +24=1; +64=-0.15; +68=-2.4; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4087996281 | 1314 | 735285865 |  | +64:u32 74 linked; +72:u32 74 linked; +80:u32 74 linked | +56=-2 |  |
| ItemTable.ctb | 109 | 664383753 |  | +8:u32 2238 skill; +16:u32 101 linked; +28:u32 101 linked | +36=0.01387 |  |
| CTB:2645491910 | 6 | 563285903 |  | +40:u32 84 linked; +88:u32 94 linked; +96:u32 96 linked |  |  |
| CTB:2871405756 | 2 | 590510206 |  | +16:u32 77 linked; +52:u32 102 linked; +88:u32 97 linked |  |  |
| SkillTable.ctb | 320 | 604779802 | skillId=2201; designName=罗特罗亚尼-弓-ATK_01; nameId=1817980336; parentSkillId=0 | +0:u32 2201 skill; +12:u32 1817980336 skill | +64=-2048; +80=0.2 | +4:罗特罗亚尼-弓-ATK_01 |
| SkillTable.ctb | 321 | 604780041 | skillId=2202; designName=罗特罗亚尼-弓-ATK_02; nameId=0; parentSkillId=2201 | +0:u32 2202 skill; +16:u32 2201 skill | +64=-2048; +80=0.2 | +4:罗特罗亚尼-弓-ATK_02 |
| SkillEffectTable.ctb | 320 | 604052204 | effectId=220101; level=1; designName=罗特罗亚尼-弓-ATK_01; skillId=2201; floatAt16=15; u32At20=0; u32At24=2; u32At28=7662 | +0:u32 220101 skill/linked; +12:u32 2201 skill | +16=15 | +8:罗特罗亚尼-弓-ATK_01 |
| SkillEffectTable.ctb | 321 | 604052271 | effectId=220201; level=1; designName=罗特罗亚尼-弓-ATK_02; skillId=2202; floatAt16=15; u32At20=0; u32At24=2; u32At28=7662 | +0:u32 220201 skill/linked; +12:u32 2202 skill | +16=15 | +8:罗特罗亚尼-弓-ATK_02 |
| SkillEffectTable.ctb | 336 | 604053276 | effectId=222201; level=1; designName=罗特罗亚尼-弓-特殊攻击B; skillId=2222; floatAt16=0; u32At20=0; u32At24=2; u32At28=8000 | +0:u32 222201 skill/linked; +12:u32 2222 skill |  | +8:罗特罗亚尼-弓-特殊攻击B |
| CTB:1680629877 | 290 | 295148946 |  | +176:u32 1160 skill; +180:u32 1162 skill | +20=1.4; +24=2; +136=0.125 |  |
| CTB:4072890565 | 1261 | 734109309 |  | +36:u32 102 linked | +24=0.7; +64=-0.02; +68=-0.02; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 1464 | 734149706 |  | +36:u32 102 linked | +24=1; +64=-0.15; +68=-2.4; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| SkillEffectTable.ctb | 6 | 604031166 | effectId=120101; level=1; designName=博伊斯ATK_01; skillId=1201; floatAt16=15; u32At20=26; u32At24=2; u32At28=2 | +8:u32 96 linked; +44:u32 78 linked | +16=15; +48=15 |  |
| CTB:4072890565 | 33 | 733864937 |  | +36:u32 102 linked | +24=0.7; +64=-1.07; +68=-0.02; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 35 | 733865335 |  | +36:u32 102 linked | +24=0.7; +64=-0.02; +68=-0.02; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 63 | 733870907 |  | +36:u32 102 linked | +24=0.7; +64=-0.02; +68=-0.02; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 64 | 733871106 |  | +36:u32 102 linked | +24=0.7; +64=-1.07; +68=-0.02; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 77 | 733873693 |  | +36:u32 102 linked | +24=0.7; +64=-0.02; +68=-0.02; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 78 | 733873892 |  | +36:u32 102 linked | +24=0.7; +64=-1.07; +68=-0.02; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 99 | 733878071 |  | +36:u32 102 linked | +24=0.8; +64=-0.02; +68=-0.02; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 119 | 733882051 |  | +36:u32 102 linked | +24=1; +64=-0.02; +68=-0.02; +76=180; +84=1; +108=1.2; +112=1; +120=1.3 |  |
| CTB:4072890565 | 134 | 733885036 |  | +36:u32 102 linked | +24=0.7; +64=-1.07; +68=-0.02; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 135 | 733885235 |  | +36:u32 102 linked | +24=0.7; +64=-0.02; +68=-0.02; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 143 | 733886827 |  | +36:u32 102 linked | +24=1; +64=-1.07; +68=-0.02; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 153 | 733888817 |  | +36:u32 102 linked | +24=0.7; +64=-1.07; +68=-0.02; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 154 | 733889016 |  | +20:u32 1131 skill | +24=0.9; +64=-0.68; +68=-0.02; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 267 | 733911503 |  | +36:u32 102 linked | +24=0.9; +64=-1.07; +68=-0.02; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 1015 | 734060355 |  | +36:u32 102 linked | +24=1.3; +64=-1.07; +68=-0.02; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 1019 | 734061151 |  | +36:u32 102 linked | +24=0.7; +64=-0.02; +68=-0.02; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 1126 | 734082444 |  | +36:u32 102 linked | +24=1.3; +64=-0.15; +68=-2.4; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 1134 | 734084036 |  | +36:u32 102 linked | +24=1; +64=-0.15; +68=-2.4; +76=180; +84=1; +108=2; +112=1; +120=1 |  |
| CTB:4072890565 | 1136 | 734084434 |  | +36:u32 102 linked | +24=1; +64=-0.15; +68=-2.4; +76=180; +84=1; +108=2; +112=1; +120=1 |  |
| CTB:4072890565 | 1182 | 734093588 |  | +36:u32 102 linked | +24=1; +64=-0.15; +68=-2.4; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 1250 | 734107120 |  | +36:u32 102 linked | +24=0.7; +64=-1.07; +68=-0.02; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 1251 | 734107319 |  | +36:u32 102 linked | +24=0.7; +64=-1.07; +68=-0.02; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 1254 | 734107916 |  | +36:u32 102 linked | +24=0.7; +64=-1.07; +68=-0.02; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 1277 | 734112493 |  | +36:u32 102 linked | +24=1.2; +64=-0.02; +68=-0.02; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 1318 | 734120652 |  | +36:u32 102 linked | +24=1; +64=-0.15; +68=-2.4; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 1333 | 734123637 |  | +36:u32 102 linked | +24=0.7; +64=-0.02; +68=-0.02; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 1334 | 734123836 |  | +36:u32 102 linked | +24=0.7; +64=-0.02; +68=-0.02; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 1372 | 734131398 |  | +36:u32 102 linked | +24=1; +64=-0.15; +68=-2.4; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 1457 | 734148313 |  | +36:u32 102 linked | +24=1; +64=-0.15; +68=-2.4; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 1458 | 734148512 |  | +36:u32 102 linked | +24=1; +64=-0.15; +68=-2.4; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 1460 | 734148910 |  | +36:u32 102 linked | +24=1; +64=-0.15; +68=-2.4; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 1483 | 734153487 |  | +36:u32 102 linked | +24=1; +64=-0.15; +68=-2.4; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 1487 | 734154283 |  | +36:u32 102 linked | +24=1.3; +64=-0.15; +68=-2.4; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 1583 | 734173387 |  | +36:u32 102 linked | +24=0.7; +64=-0.02; +68=-0.02; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 1626 | 734181944 |  | +36:u32 102 linked | +24=0.7; +64=-1.07; +68=-0.02; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 1627 | 734182143 |  | +36:u32 102 linked | +24=0.7; +64=-0.02; +68=-0.02; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 1635 | 734183735 |  | +36:u32 102 linked | +24=1.1; +64=-0.15; +68=-2.4; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 1636 | 734183934 |  | +36:u32 102 linked | +24=1.4; +64=-0.15; +68=-2.4; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 1639 | 734184531 |  | +36:u32 102 linked | +24=1.4; +64=-0.15; +68=-2.4; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 1643 | 734185327 |  | +36:u32 102 linked | +24=0.8; +64=-0.15; +68=-2.4; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 1653 | 734187317 |  | +36:u32 102 linked | +24=0.7; +64=-1.07; +68=-0.02; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 1654 | 734187516 |  | +36:u32 102 linked | +24=0.7; +64=-0.02; +68=-0.02; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4072890565 | 1662 | 734189108 |  | +36:u32 102 linked | +24=1.1; +64=-1.07; +68=-0.02; +76=180; +84=1; +108=1.2; +112=1; +120=1 |  |
| CTB:4087996281 | 1325 | 735286976 |  | +72:u32 75 linked; +80:u32 75 linked | +88=8192.040039 |  |
| CTB:4087996281 | 1637 | 735318488 |  | +64:u32 101 linked; +72:u32 101 linked | +84=-512 |  |
| ItemTable.ctb | 86 | 664381614 |  | +16:u32 101 linked; +28:u32 101 linked | +36=0.013837 |  |
| ItemTable.ctb | 87 | 664381707 |  | +16:u32 101 linked; +28:u32 101 linked | +36=0.013837 |  |
| ItemTable.ctb | 88 | 664381800 |  | +16:u32 101 linked; +28:u32 101 linked | +36=0.013837 |  |
| ItemTable.ctb | 89 | 664381893 |  | +16:u32 101 linked; +28:u32 101 linked | +36=0.013837 |  |
| ItemTable.ctb | 90 | 664381986 |  | +16:u32 101 linked; +28:u32 101 linked | +36=0.013837 |  |
| ItemTable.ctb | 91 | 664382079 |  | +16:u32 101 linked; +28:u32 101 linked | +36=0.013837 |  |
| ItemTable.ctb | 92 | 664382172 |  | +16:u32 101 linked; +28:u32 101 linked | +36=0.013837 |  |
| ItemTable.ctb | 93 | 664382265 |  | +16:u32 101 linked; +28:u32 101 linked | +36=0.013837 |  |
| ItemTable.ctb | 94 | 664382358 |  | +16:u32 101 linked; +28:u32 101 linked | +36=0.013837 |  |
| ItemTable.ctb | 95 | 664382451 |  | +16:u32 101 linked; +28:u32 101 linked | +36=0.013837 |  |
| ItemTable.ctb | 96 | 664382544 |  | +16:u32 101 linked; +28:u32 101 linked | +36=0.013837 |  |
| ItemTable.ctb | 97 | 664382637 |  | +16:u32 101 linked; +28:u32 101 linked | +36=0.013837 |  |

## Parser Boundary

These are game-file surfaces, not finished contribution math. The next bridge should map each observed damage row to static coefficient/value-cal inputs, then the replay code can remove modifiers from the trusted final-hit totals in formula order.

