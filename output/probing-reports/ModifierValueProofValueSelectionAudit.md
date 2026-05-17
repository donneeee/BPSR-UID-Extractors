# Modifier Value Proof Gap Audit

Status audited: `needs-value-selection`

Total rows: 37

## Category Counts

| Category | Count |
| --- | --- |
| talents | 29 |
| seasonal-talents | 3 |
| factors | 2 |
| skills | 2 |
| buffs | 1 |


## Wording Buckets

| Bucket | Count |
| --- | --- |
| no-sample-text | 16 |
| attack-wording | 7 |
| critical-wording | 5 |
| generic-damage-wording | 4 |
| elemental-wording | 3 |
| lucky-wording | 2 |


## Category / Wording

| Category / Bucket | Count |
| --- | --- |
| talents / no-sample-text | 13 |
| talents / attack-wording | 4 |
| talents / generic-damage-wording | 4 |
| talents / critical-wording | 3 |
| talents / elemental-wording | 3 |
| factors / no-sample-text | 2 |
| seasonal-talents / critical-wording | 2 |
| skills / attack-wording | 2 |
| talents / lucky-wording | 2 |
| buffs / no-sample-text | 1 |
| seasonal-talents / attack-wording | 1 |


## Formula Readiness

| Readiness | Count |
| --- | --- |
| formula-replay-required | 25 |
| overlap-only | 6 |
| mixed-exact-and-replay | 5 |
| timing-model-required | 1 |


## Scope Value Gaps

| Component / Missing Scope | Count |
| --- | --- |
| critical-damage:all | 2 |
| critical-rate:all | 2 |
| critical-damage:party | 1 |
| critical-rate:owner | 1 |
| elemental-damage:all | 1 |
| generic-damage:all | 1 |
| generic-damage:target | 1 |
| seasonal-factor-damage:all | 1 |
| seasonal-factor-damage:owner | 1 |
| seasonal-factor-damage:party | 1 |
| seasonal-factor-damage:target | 1 |


## Owner/Party Scope Value Gaps

| Component / Missing Scope | Count |
| --- | --- |
| critical-damage:party | 1 |
| critical-rate:owner | 1 |
| seasonal-factor-damage:owner | 1 |
| seasonal-factor-damage:party | 1 |


## Owner/Party Scope Value Gaps By Category

| Category / Component / Scope | Count |
| --- | --- |
| talents / critical-damage:party | 1 |
| talents / critical-rate:owner | 1 |
| talents / seasonal-factor-damage:owner | 1 |
| talents / seasonal-factor-damage:party | 1 |


## Owner/Party Scope Value Gap Examples

| Key | Label | Category | Component | Scopes | Candidate Scopes | Missing | Values | Sources | Sample |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| talents:250 | Critical Cold | talents | critical-damage | all, owner, party | owner | party | owner:15% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | Crit DMG +15% \| increases Crit DMG dealt by 15% \| ระหว่างInfusion of Ice CRIT DMG +15% ระหว่างInfusion of Ice โอกาส CRIT ของเพื่อนร่วมทีม +3% Selama Ice Infuse aktif |
| talents:250 | Critical Cold | talents | critical-rate | all, owner, party | party | owner | party:3% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | Crit DMG +15% \| increases Crit DMG dealt by 15% \| ระหว่างInfusion of Ice CRIT DMG +15% ระหว่างInfusion of Ice โอกาส CRIT ของเพื่อนร่วมทีม +3% Selama Ice Infuse aktif |
| talents:235 | Cold Pulse | talents | seasonal-factor-damage | all, owner, party, target |  | owner, party |  | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | DMG dari Chill Pulse +20% \| increases Cold Pulse DMG by 20% \| ทุกครั้งที่ Frostbeam สร้าง DMG ครบ 50 ครั้ง จะระเบิด Cold Pulse ออกมา 1 ครั้ง Cold Pulse ยิ่งโจมตีโดนเป้าหมายเยอะ DMG จะยิ่งเพิ่มตัวละ +20% สูงสุดไม่เกิน 500% Setiap mengakibatka... |


## Scope Value Gaps By Category

| Category / Component / Scope | Count |
| --- | --- |
| seasonal-talents / critical-damage:all | 1 |
| seasonal-talents / critical-rate:all | 1 |
| talents / critical-damage:all | 1 |
| talents / critical-damage:party | 1 |
| talents / critical-rate:all | 1 |
| talents / critical-rate:owner | 1 |
| talents / elemental-damage:all | 1 |
| talents / generic-damage:all | 1 |
| talents / generic-damage:target | 1 |
| talents / seasonal-factor-damage:all | 1 |
| talents / seasonal-factor-damage:owner | 1 |
| talents / seasonal-factor-damage:party | 1 |
| talents / seasonal-factor-damage:target | 1 |


## Scope Value Gap Examples

| Key | Label | Category | Component | Scopes | Candidate Scopes | Missing | Values | Sources | Sample |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| seasonal-talents:252 | Marksman - Tidal Fury | seasonal-talents | critical-damage | all, owner, party | owner, party | all | owner:10%; party:1% | probing-reports\SeasonRogueEntryProbe.json | Every 1% of Crit Rate increases its Crit DMG by 10% \| dan setiap 1% Crit Rate meningkatkan 10% Crit DMG Hanya muncul pada tingkat kesulitan [Hard] dan [Nightmare] \| Torrent Volley จะติด Crit เสมอ และทุกๆ 1% Crit เรทจะเพิ่ม Crit DMG 10% ปรากฏเฉพาะในระดับ [ยาก] และ [Nightmare] Raging Shot pasti Crit |
| seasonal-talents:252 | Marksman - Tidal Fury | seasonal-talents | critical-rate | all, owner, party | owner, party | all | owner:10%; party:1% | probing-reports\SeasonRogueEntryProbe.json | Every 1% of Crit Rate increases its Crit DMG by 10% \| dan setiap 1% Crit Rate meningkatkan 10% Crit DMG Hanya muncul pada tingkat kesulitan [Hard] dan [Nightmare] \| Torrent Volley จะติด Crit เสมอ และทุกๆ 1% Crit เรทจะเพิ่ม Crit DMG 10% ปรากฏเฉพาะในระดับ [ยาก] และ [Nightmare] Raging Shot pasti Crit |
| talents:250 | Critical Cold | talents | critical-damage | all, owner, party | owner | party, all | owner:15% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | Crit DMG +15% \| increases Crit DMG dealt by 15% \| ระหว่างInfusion of Ice CRIT DMG +15% ระหว่างInfusion of Ice โอกาส CRIT ของเพื่อนร่วมทีม +3% Selama Ice Infuse aktif |
| talents:250 | Critical Cold | talents | critical-rate | all, owner, party | party | owner, all | party:3% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | Crit DMG +15% \| increases Crit DMG dealt by 15% \| ระหว่างInfusion of Ice CRIT DMG +15% ระหว่างInfusion of Ice โอกาส CRIT ของเพื่อนร่วมทีม +3% Selama Ice Infuse aktif |
| talents:263 | Frost Tide | talents | elemental-damage | all, owner, party | owner, party | all | owner:20%; party:5% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | grants 5% bonus Ice damage dealt instead for 3s \| Frostbeam has a fixed 20% chance to grant Frost Crystal \| เมื่อIce Rayสร้าง DMG มีโอกาสคงที่ 20% ที่จะได้รับน้ำแข็งทมิฬโดยตรง หากน้ำแข็งทมิฬถึงลิมิตแล้ว จะได้รับโบนัสธาตุน้ำแข็ง 5% เป็นเวลา 3วินาที Saat Ice Ray mengakibatkan DMG |
| talents:235 | Cold Pulse | talents | generic-damage | all, owner, party, target | owner, party | target, all | owner:500%; party:20% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | DMG dari Chill Pulse +20% \| increases Cold Pulse DMG by 20% \| ทุกครั้งที่ Frostbeam สร้าง DMG ครบ 50 ครั้ง จะระเบิด Cold Pulse ออกมา 1 ครั้ง Cold Pulse ยิ่งโจมตีโดนเป้าหมายเยอะ DMG จะยิ่งเพิ่มตัวละ +20% สูงสุดไม่เกิน 500% Setiap mengakibatka... |
| talents:235 | Cold Pulse | talents | seasonal-factor-damage | all, owner, party, target |  | owner, party, target, all |  | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | DMG dari Chill Pulse +20% \| increases Cold Pulse DMG by 20% \| ทุกครั้งที่ Frostbeam สร้าง DMG ครบ 50 ครั้ง จะระเบิด Cold Pulse ออกมา 1 ครั้ง Cold Pulse ยิ่งโจมตีโดนเป้าหมายเยอะ DMG จะยิ่งเพิ่มตัวละ +20% สูงสุดไม่เกิน 500% Setiap mengakibatka... |


## Examples

| Key | Label | Category | Readiness | Zones | Sample |
| --- | --- | --- | --- | --- | --- |
| buffs:3055080 | 巨刃G8 | buffs | formula-replay-required | baseAttackTerm, luckyStrikeBaseTerm |  |
| factors:3055080 | uid:3055080 | factors | formula-replay-required | baseAttackTerm, luckyStrikeBaseTerm |  |
| factors:3057070 | uid:3057070 | factors | mixed-exact-and-replay | baseAttackTerm, generalDamage, luckyStrikeBaseTerm, seasonDamage |  |
| seasonal-talents:252 | Marksman - Tidal Fury | seasonal-talents | formula-replay-required | critical, generalDamage, skillMultiplier | Every 1% of Crit Rate increases its Crit DMG by 10% \| dan setiap 1% Crit Rate meningkatkan 10% Crit DMG Hanya muncul pada tingkat kesulitan [Hard] dan [Nightmare] \| Torrent Volley จะติด Crit เสมอ และทุกๆ 1% Crit เรทจะเพิ่ม Crit DMG 10% ปรากฏเฉพาะในระดับ [ยาก] และ [Nightmare] Raging Shot pasti Crit |
| seasonal-talents:265 | Verdant Oracle - Critical Pulse | seasonal-talents | formula-replay-required | critical, generalDamage | and its Crit DMG is increased by 2,000% \| dan Crit DMG +2000% Hanya muncul pada [Nightmare] kesulitan \| Regen Pulse จะ Crit เสมอ และ Crit DMG+2000% ปรากฏเฉพาะในระดับ [นรก] Regen Pulse pasti Crit |
| seasonal-talents:1110 | Swift-Calc | seasonal-talents | timing-model-required | baseAttackTerm, critical, generalDamage, seasonDamage, timingCadence | Melee Attack +3 \| Melee Attack -3,5 detik \| เมื่อ Class Skills ประเภท DMG โดยตรงที่ไม่ใช่การโจมตีทั่วไปทำ CRIT DMG จำนวนนับของ Dream Execution จะ +1 |
| skills:12301060101 | Flame Note | skills | mixed-exact-and-replay | baseAttackTerm, luckyStrikeBaseTerm, seasonDamage, skillMultiplier | dealing Magic DMG equal to 700% of ATK and granting Note to allies it touches \| เมื่อปล่อยสกิลเฉพาะพิเศษ Rhapsody of Flame จะโจมตีตาม Rhythm 1 ครั้งเท่ากับ 700%Magic DMG ขณะเดียวกัน จะมอบโน้ตให้พันธมิตรเพิ่ม โน้ต When you use an Expertise Skill \| causando Dano Mágico igual a 700% de ATQ e concedendo Nota a aliados que tocar |
| skills:204 | Flame Note | skills | mixed-exact-and-replay | baseAttackTerm, luckyStrikeBaseTerm, seasonDamage, skillMultiplier | dealing Magic DMG equal to 700% of ATK and granting Note to allies it touches \| เมื่อปล่อยสกิลเฉพาะพิเศษ Rhapsody of Flame จะโจมตีตาม Rhythm 1 ครั้งเท่ากับ 700%Magic DMG ขณะเดียวกัน จะมอบโน้ตให้พันธมิตรเพิ่ม โน้ต When you use an Expertise Skill \| causando Dano Mágico igual a 700% de ATQ e concedendo Nota a aliados que tocar |
| talents:1102 | Vulnerable Strike | talents | formula-replay-required | generalDamage, luckyEnhancement, skillMultiplier | Vulnerability: Increases the DMG you deal to the target by 10% for 5s \| Vulnerable: Target menerima +10% DMG dari diri sendiri selama 5 detik \| Dealing DMG grants a fixed 30% chance to apply Vulnerability to the enemy |
| talents:1200 | Lightforged Body | talents | formula-replay-required | baseAttackTerm, elementalDamage, luckyStrikeBaseTerm |  |
| talents:1204 | Lightforge Continuum | talents | formula-replay-required | baseAttackTerm, elementalDamage, luckyStrikeBaseTerm, timingCadence |  |
| talents:1214 | Fearless Shield | talents | formula-replay-required | baseAttackTerm, elementalDamage, generalDamage | akan mendapat Light Holyshield sebesar 37,5% ATK \| ganha Escudo Radiante igual a 37,5% do ATQ \| vous gagnez un Bouclier radieux égal à 37,5 % de l'attaque |
| talents:1313 | Healing Note | talents | formula-replay-required | baseAttackTerm, generalDamage, luckyStrikeBaseTerm, timingCadence |  |
| talents:1339 | Resonant Counterpoint | talents | formula-replay-required | baseAttackTerm, critical, luckyStrikeBaseTerm, timingCadence |  |
| talents:1340 | Sonic Cure | talents | formula-replay-required | baseAttackTerm, generalDamage, luckyStrikeBaseTerm |  |
| talents:1341 | Sonic Therapy | talents | formula-replay-required | baseAttackTerm, luckyStrikeBaseTerm |  |
| talents:158 | Divine Sickle | talents | formula-replay-required | critical, elementalDamage, finalDamage, generalDamage, luckyChance, luckyEnhancement, seasonDamage | final damage increases by 200% \| DMG akhir yang diakibatkan +200% \| Divine Sickle's final damage increases by 100% |
| talents:247 | Frost Lance Crit | talents | formula-replay-required | critical, elementalDamage, generalDamage | 5% more Crit DMG \| Crit DMG +1,5% selama 6 detik \| เมื่อFrost Spear ติด CRIT ทำให้ CRIT DMG +1 |
| talents:250 | Critical Cold | talents | formula-replay-required | critical, elementalDamage, generalDamage | Crit DMG +15% \| increases Crit DMG dealt by 15% \| ระหว่างInfusion of Ice CRIT DMG +15% ระหว่างInfusion of Ice โอกาส CRIT ของเพื่อนร่วมทีม +3% Selama Ice Infuse aktif |
| talents:252 | Sharp Blizzard | talents | formula-replay-required | critical, elementalDamage, generalDamage | Ice Storm Crit DMG +15% \| Increases the Crit DMG of Blizzard by 15% \| Ice Storm CRIT +50% CRIT DMG ของIce Storm +15% Ice Storm Crit +50% |
| talents:263 | Frost Tide | talents | formula-replay-required | elementalDamage, generalDamage, luckyEnhancement, skillMultiplier | grants 5% bonus Ice damage dealt instead for 3s \| Frostbeam has a fixed 20% chance to grant Frost Crystal \| เมื่อIce Rayสร้าง DMG มีโอกาสคงที่ 20% ที่จะได้รับน้ำแข็งทมิฬโดยตรง หากน้ำแข็งทมิฬถึงลิมิตแล้ว จะได้รับโบนัสธาตุน้ำแข็ง 5% เป็นเวลา 3วินาที Saat Ice Ray mengakibatkan DMG |
| talents:402 | Vulnerable Strike | talents | formula-replay-required | generalDamage, luckyEnhancement, skillMultiplier | Vulnerability: Increases the DMG you deal to the target by 10% for 5s \| Vulnerable: Target menerima +10% DMG dari diri sendiri selama 5 detik \| Dealing DMG grants a fixed 30% chance to apply Vulnerability to the enemy |
| talents:404 | Sharp Expansion | talents | formula-replay-required | baseAttackTerm, luckyStrikeBaseTerm |  |
| talents:409 | Sharp Expansion | talents | formula-replay-required | baseAttackTerm, luckyStrikeBaseTerm |  |
| talents:418 | Sharp Expansion | talents | formula-replay-required | baseAttackTerm, luckyStrikeBaseTerm |  |
| talents:420 | Sharp Expansion | talents | formula-replay-required | baseAttackTerm, luckyStrikeBaseTerm |  |
| talents:436 | Sharp Expansion | talents | formula-replay-required | baseAttackTerm, luckyStrikeBaseTerm |  |
| talents:438 | Sharp | talents | formula-replay-required | baseAttackTerm, luckyStrikeBaseTerm | bonus ATK dari Sharp meningkat 6% \| the additional ATK from Sharp increases to 6% \| 筋力が500ptに達すると、鋭利が付与する攻撃力が6%にアップする |
| talents:459 | Sharp Expansion | talents | formula-replay-required | baseAttackTerm, luckyStrikeBaseTerm |  |
| talents:1343 | Flame Note | talents | mixed-exact-and-replay | baseAttackTerm, generalDamage, luckyStrikeBaseTerm, physicalMagicEnhancement, seasonDamage, skillMultiplier | dealing Magic DMG equal to 700% of ATK and granting Note to allies it touches \| เมื่อปล่อยสกิลเฉพาะพิเศษ Rhapsody of Flame จะโจมตีตาม Rhythm 1 ครั้งเท่ากับ 700%Magic DMG ขณะเดียวกัน จะมอบโน้ตให้พันธมิตรเพิ่ม โน้ต When you use an Expertise Skill \| causando Dano Mágico igual a 700% de ATQ e concedendo Nota a aliados que tocar |
| talents:235 | Cold Pulse | talents | mixed-exact-and-replay | generalDamage, luckyEnhancement, seasonDamage, skillMultiplier | DMG dari Chill Pulse +20% \| increases Cold Pulse DMG by 20% \| ทุกครั้งที่ Frostbeam สร้าง DMG ครบ 50 ครั้ง จะระเบิด Cold Pulse ออกมา 1 ครั้ง Cold Pulse ยิ่งโจมตีโดนเป้าหมายเยอะ DMG จะยิ่งเพิ่มตัวละ +20% สูงสุดไม่เกิน 500% Setiap mengakibatka... |
| talents:1103 | Wolf Pact | talents | overlap-only | baseAttackTerm, generalDamage, physicalMagicEnhancement, skillMultiplier, timingCadence | mengakibatkan PDMG sebesar 60% ATK \| dealing Attack DMG equal to 60% ATK \| mengakibatkan PDMG sebesar 100% ATK |
| talents:1137 | Beast Tidal Power | talents | overlap-only | elementalDamage |  |
| talents:1161 | Radiant Charge | talents | overlap-only | elementalDamage, generalDamage, skillMultiplier | Explosive Shot berikutnya mendapatkan +20% DMG \| increases the DMG of the next Blast Shot by 20% \| ศรที่ Light Energy Rift ยิงสร้าง DMG ทุก 1 ครั้ง จะทำให้ Explosive Shot ครั้งถัดไป DMG +20% สูงสุดไม่เกิน 100% Setiap kali panah dari Light Rift mengakibatkan 1 kali DMG |
| talents:1338 | Luck Multiplier | talents | overlap-only | generalDamage, luckyEnhancement, skillMultiplier | 5% Lucky Strike DMG Multiplier \| Lucky ทุก 1% จะเพิ่มอัตราเท่า DMG ของ Lucky Strike 0 \| 5% หลังจากเปิดโซนาต้า - บทเพลงกล้าหาญประสิทธิภาพที่แปลงจะทวีคูณ Setiap 1% Luck memberikan tambahan 0,5% Lucky Hit DMG Multiplier |
| talents:245 | Deep Cold Magic Spear | talents | overlap-only | elementalDamage, generalDamage, physicalMagicEnhancement | Frost Lance deals 70% more DMG \| DMG Frost Spear + 70% Frost Spearเวลาร่าย + 100% DMG Frost Spear +70% \| Waktu Cast Frost Spear +100% |
| talents:553 | Luck Damage | talents | overlap-only | generalDamage, luckyEnhancement, skillMultiplier | 2% Lucky Strike DMG Multiplier \| 2% Lucky Hit DMG Multiplier +5% \| Lucky Strike DMG Multiplier +5% |
