# Modifier Value Proof Gap Audit

Status audited: `needs-scope-value`

Total rows: 22

## Category Counts

| Category | Count |
| --- | --- |
| skills | 8 |
| talents | 8 |
| factors | 3 |
| seasonal-talents | 3 |


## Wording Buckets

| Bucket | Count |
| --- | --- |
| no-sample-text | 10 |
| attack-wording | 9 |
| critical-wording | 1 |
| generic-damage-wording | 1 |
| lucky-wording | 1 |


## Category / Wording

| Category / Bucket | Count |
| --- | --- |
| skills / attack-wording | 5 |
| factors / no-sample-text | 3 |
| skills / no-sample-text | 3 |
| talents / no-sample-text | 3 |
| seasonal-talents / attack-wording | 2 |
| talents / attack-wording | 2 |
| seasonal-talents / no-sample-text | 1 |
| talents / critical-wording | 1 |
| talents / generic-damage-wording | 1 |
| talents / lucky-wording | 1 |


## Formula Readiness

| Readiness | Count |
| --- | --- |
| formula-replay-required | 14 |
| mixed-exact-and-replay | 8 |


## Scope Value Gaps

| Component / Missing Scope | Count |
| --- | --- |
| generic-damage:target | 9 |
| generic-damage:all | 8 |
| generic-damage:owner | 6 |
| seasonal-factor-damage:owner | 6 |
| seasonal-factor-damage:party | 6 |
| seasonal-factor-damage:target | 6 |
| elemental-damage:target | 5 |
| season-damage:target | 5 |
| physical-magic-enhancement:all | 4 |
| physical-magic-enhancement:party | 4 |
| physical-magic-enhancement:target | 4 |
| skill-multiplier:all | 3 |
| skill-multiplier:owner | 3 |
| skill-multiplier:party | 3 |
| atk:all | 2 |
| critical-rate:party | 2 |
| elemental-damage:owner | 2 |
| elemental-damage:party | 2 |
| final-damage:party | 2 |
| atk:owner | 1 |
| atk:party | 1 |
| critical-damage:owner | 1 |
| elemental-damage:all | 1 |
| final-damage:owner | 1 |
| generic-damage:party | 1 |
| seasonal-factor-damage:all | 1 |


## Owner/Party Scope Value Gaps

| Component / Missing Scope | Count |
| --- | --- |
| generic-damage:owner | 6 |
| seasonal-factor-damage:owner | 6 |
| seasonal-factor-damage:party | 6 |
| physical-magic-enhancement:party | 4 |
| skill-multiplier:owner | 3 |
| skill-multiplier:party | 3 |
| critical-rate:party | 2 |
| elemental-damage:owner | 2 |
| elemental-damage:party | 2 |
| final-damage:party | 2 |
| atk:owner | 1 |
| atk:party | 1 |
| critical-damage:owner | 1 |
| final-damage:owner | 1 |
| generic-damage:party | 1 |


## Owner/Party Scope Value Gaps By Category

| Category / Component / Scope | Count |
| --- | --- |
| factors / seasonal-factor-damage:owner | 3 |
| factors / seasonal-factor-damage:party | 3 |
| skills / generic-damage:owner | 3 |
| skills / physical-magic-enhancement:party | 3 |
| skills / seasonal-factor-damage:owner | 3 |
| skills / seasonal-factor-damage:party | 3 |
| talents / generic-damage:owner | 3 |
| skills / skill-multiplier:owner | 2 |
| skills / skill-multiplier:party | 2 |
| talents / final-damage:party | 2 |
| seasonal-talents / atk:owner | 1 |
| seasonal-talents / atk:party | 1 |
| seasonal-talents / critical-damage:owner | 1 |
| seasonal-talents / critical-rate:party | 1 |
| seasonal-talents / elemental-damage:owner | 1 |
| seasonal-talents / elemental-damage:party | 1 |
| talents / critical-rate:party | 1 |
| talents / elemental-damage:owner | 1 |
| talents / elemental-damage:party | 1 |
| talents / final-damage:owner | 1 |
| talents / generic-damage:party | 1 |
| talents / physical-magic-enhancement:party | 1 |
| talents / skill-multiplier:owner | 1 |
| talents / skill-multiplier:party | 1 |


## Owner/Party Scope Value Gap Examples

| Key | Label | Category | Component | Scopes | Candidate Scopes | Missing | Values | Sources | Sample |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| factors:3050040 | uid:3050040 | factors | seasonal-factor-damage | owner, party, target |  | owner, party |  | SeasonPhantomFactors.json |  |
| factors:3050130 | uid:3050130 | factors | seasonal-factor-damage | owner, party, target |  | owner, party |  | SeasonPhantomFactors.json |  |
| factors:3052120 | uid:3052120 | factors | seasonal-factor-damage | all, owner, party, target |  | owner, party |  | SeasonPhantomFactors.json |  |
| seasonal-talents:103 | All-Class Aura | seasonal-talents | atk | all, owner, party |  | owner, party |  | probing-reports\SeasonRogueEntryProbe.json | Increases ATK by 5% for the user and allies within 10m \| เพิ่ม ATK ให้ตัวเองและเพื่อนร่วมทีมในระยะ 10 เมตร +5% หากมี Role อื่นอยู่ในระยะ จะได้รับเพิ่มอีก +5% \| All-Class Aura All-Class Aura 全职光环 全職光環 全クラスオーラ 만능 오라 Aura multi-classe Allklassen-Aura Aura Multiclase Aura de Todas as Classes Full-time Halo Omni Aura 肉鸽词条-全职光环3 Increases ATK... |
| seasonal-talents:209 | Synergy Crit Field | seasonal-talents | critical-damage | owner, party | party | owner | party:+3% | probing-reports\SeasonRogueEntryProbe.json | increasing the Crit DMG of allies within 15m by +3% \| Aura ini akan membuat Crit rekan tim berjarak 15 meter di sekitar +3% \| เมื่อใช้การโจมตีพิเศษ จะได้รับออร่า CRIT เป็นเวลา 5 วินาที ทำให้เพื่อนร่วมทีมในระยะ 15 เมตรมีค่า CRIT +3% Saat melancarkan Special Attack |
| seasonal-talents:209 | Synergy Crit Field | seasonal-talents | critical-rate | owner, party | owner | party | owner:+3% | probing-reports\SeasonRogueEntryProbe.json | increasing the Crit DMG of allies within 15m by +3% \| Aura ini akan membuat Crit rekan tim berjarak 15 meter di sekitar +3% \| เมื่อใช้การโจมตีพิเศษ จะได้รับออร่า CRIT เป็นเวลา 5 วินาที ทำให้เพื่อนร่วมทีมในระยะ 15 เมตรมีค่า CRIT +3% Saat melancarkan Special Attack |
| seasonal-talents:260 | Marksman - Charged Execution | seasonal-talents | elemental-damage | owner, party |  | owner, party |  | probing-reports\SeasonRogueEntryProbe.json |  |
| skills:12301050101 | Flame's Rampage | skills | generic-damage | all, owner, party, target | party | owner | party:30% | SkillBreakdownDetails.json, skillnames.json | dealing Magic DMG equal to 350% ATK every 3s to targets it touches \| เมื่อ Heroic Melody เปิดใช้ Rhapsody of Flame จะเปลี่ยนเป็นเผาไหม้ ทุก 3 วินาที โจมตีเป้าหมายนี้จนสร้าง DMG 350% ของพลังโจมตีของ Magic DMG \| causando Dano Mágico igual a 350% do ATQ a cada 3 s a alvos que tocar |
| skills:203 | Flame's Rampage | skills | generic-damage | all, owner, party, target | party | owner | party:30% | skillnames.json | dealing Magic DMG equal to 350% ATK every 3s to targets it touches \| เมื่อ Heroic Melody เปิดใช้ Rhapsody of Flame จะเปลี่ยนเป็นเผาไหม้ ทุก 3 วินาที โจมตีเป้าหมายนี้จนสร้าง DMG 350% ของพลังโจมตีของ Magic DMG \| causando Dano Mágico igual a 350% do ATQ a cada 3 s a alvos que tocar |
| skills:2220743103 | Flame's Rampage | skills | generic-damage | all, owner, party, target | party | owner | party:30% | SkillBreakdownDetails.json, skillnames.json | dealing Magic DMG equal to 350% ATK every 3s to targets it touches \| เมื่อ Heroic Melody เปิดใช้ Rhapsody of Flame จะเปลี่ยนเป็นเผาไหม้ ทุก 3 วินาที โจมตีเป้าหมายนี้จนสร้าง DMG 350% ของพลังโจมตีของ Magic DMG \| causando Dano Mágico igual a 350% do ATQ a cada 3 s a alvos que tocar |
| skills:12301050101 | Flame's Rampage | skills | physical-magic-enhancement | all, owner, party, target | owner | party | owner:350% | SkillBreakdownDetails.json, skillnames.json | dealing Magic DMG equal to 350% ATK every 3s to targets it touches \| เมื่อ Heroic Melody เปิดใช้ Rhapsody of Flame จะเปลี่ยนเป็นเผาไหม้ ทุก 3 วินาที โจมตีเป้าหมายนี้จนสร้าง DMG 350% ของพลังโจมตีของ Magic DMG \| causando Dano Mágico igual a 350% do ATQ a cada 3 s a alvos que tocar |
| skills:203 | Flame's Rampage | skills | physical-magic-enhancement | all, owner, party, target | owner | party | owner:350% | skillnames.json | dealing Magic DMG equal to 350% ATK every 3s to targets it touches \| เมื่อ Heroic Melody เปิดใช้ Rhapsody of Flame จะเปลี่ยนเป็นเผาไหม้ ทุก 3 วินาที โจมตีเป้าหมายนี้จนสร้าง DMG 350% ของพลังโจมตีของ Magic DMG \| causando Dano Mágico igual a 350% do ATQ a cada 3 s a alvos que tocar |
| skills:2220743103 | Flame's Rampage | skills | physical-magic-enhancement | all, owner, party, target | owner | party | owner:350% | SkillBreakdownDetails.json, skillnames.json | dealing Magic DMG equal to 350% ATK every 3s to targets it touches \| เมื่อ Heroic Melody เปิดใช้ Rhapsody of Flame จะเปลี่ยนเป็นเผาไหม้ ทุก 3 วินาที โจมตีเป้าหมายนี้จนสร้าง DMG 350% ของพลังโจมตีของ Magic DMG \| causando Dano Mágico igual a 350% do ATQ a cada 3 s a alvos que tocar |
| skills:315510100 | Thunder Cut | skills | seasonal-factor-damage | owner, party, target |  | owner, party |  | SkillBreakdownDetails.json, skillnames.json |  |
| skills:315510200 | Thunder Cut | skills | seasonal-factor-damage | owner, party, target |  | owner, party |  | SkillBreakdownDetails.json, skillnames.json |  |
| skills:62 | Thunder Cut | skills | seasonal-factor-damage | owner, party, target |  | owner, party |  | skillnames.json |  |
| skills:2220506003 | Wind Rift Diffusion | skills | skill-multiplier | all, owner, party, target | target | owner, party | target:75% | SkillBreakdownDetails.json, skillnames.json | deal 1 additional hit of 75% DMG \| Expertise and Ultimates deal 10% more DMG to targets inflicted with Rend \| Mengenai target dengan efek Tear juga akan mengakibatkan 1 tambahan DMG sebesar 75% ATK |
| skills:23 | Wind Rift Diffusion | skills | skill-multiplier | all, owner, party, target | target | owner, party | target:75% | skillnames.json | deal 1 additional hit of 75% DMG \| Expertise and Ultimates deal 10% more DMG to targets inflicted with Rend \| Mengenai target dengan efek Tear juga akan mengakibatkan 1 tambahan DMG sebesar 75% ATK |
| talents:1322 | Critical Encore | talents | critical-rate | owner, party | owner | party | owner:1% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | Every 1% Crit Rate grants 1% trigger chance for Encore Strings \| โอกาส CRIT ทุก 1% เพิ่มโอกาสทำงาน 1% ของสายพิณ Encore Setiap 1% Critical Chance memberikan tambahan 1% peluang untuk memicu Encore Chords \| Critical Encore Critical Encore 安可暴击增幅 安可暴擊增幅 追奏会心増幅 앵콜 치명타 만능 Rappel critique Kritische Zugabe Bis Crítico Bis Crítico บูสต์ Encore CRIT Encore Critical Boost 安可暴击增幅 Every 1% Cri... |
| talents:1212 | Radiant Guard | talents | elemental-damage | all, owner, party |  | owner, party |  | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json |  |
| talents:1311 | Severed Chapter | talents | final-damage | owner, party, target | target | owner, party | target:+15% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | serta +15% Final DMG terhadap target yang dikalahkan \| you and Allies within 30 meters have an resilience break efficiency +30% and deal 15% more DMG to Resilience Broken targets \| หลังจากเปิดโซนาต้า - บทเพลงกล้าหาญ จะทำให้ตัวเองและเพื่อนร่วมทีมภายใน 30 เมตร ประสิทธิภาพเจาะเกราะ +30% และ DMG สุดท้ายที่ทำลายเป้าหมาย +15% |
| talents:510 | Smite Spec | talents | final-damage | owner, party | owner | party | owner:50% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | Increases the final DMG of Lucky Strikes by 50% \| DMG akhir yang diakibatkan Lucky Hit meningkat 50% \| Aumenta o dano final de Golpes de Sorte em 50% |
| talents:1322 | Critical Encore | talents | generic-damage | owner, party | party | owner | party:50% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | Every 1% Crit Rate grants 1% trigger chance for Encore Strings \| โอกาส CRIT ทุก 1% เพิ่มโอกาสทำงาน 1% ของสายพิณ Encore Setiap 1% Critical Chance memberikan tambahan 1% peluang untuk memicu Encore Chords \| Critical Encore Critical Encore 安可暴击增幅 安可暴擊增幅 追奏会心増幅 앵콜 치명타 만능 Rappel critique Kritische Zugabe Bis Crítico Bis Crítico บูสต์ Encore CRIT Encore Critical Boost 安可暴击增幅 Every 1% Cri... |
| talents:1327 | Critical Acclaim | talents | generic-damage | owner, party | party | owner | party:50% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json |  |
| talents:1342 | Flame's Rampage | talents | generic-damage | all, owner, party, target | party | owner | party:30% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | dealing Magic DMG equal to 350% ATK every 3s to targets it touches \| เมื่อ Heroic Melody เปิดใช้ Rhapsody of Flame จะเปลี่ยนเป็นเผาไหม้ ทุก 3 วินาที โจมตีเป้าหมายนี้จนสร้าง DMG 350% ของพลังโจมตีของ Magic DMG \| causando Dano Mágico igual a 350% do ATQ a cada 3 s a alvos que tocar |
| talents:258 | Law of Energy Surge | talents | generic-damage | owner, party | owner | party | owner:200% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json |  |
| talents:1342 | Flame's Rampage | talents | physical-magic-enhancement | all, owner, party, target | owner | party | owner:350% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | dealing Magic DMG equal to 350% ATK every 3s to targets it touches \| เมื่อ Heroic Melody เปิดใช้ Rhapsody of Flame จะเปลี่ยนเป็นเผาไหม้ ทุก 3 วินาที โจมตีเป้าหมายนี้จนสร้าง DMG 350% ของพลังโจมตีของ Magic DMG \| causando Dano Mágico igual a 350% do ATQ a cada 3 s a alvos que tocar |
| talents:405 | Wind Rift Diffusion | talents | skill-multiplier | all, owner, party, target | target | owner, party | target:75% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | deal 1 additional hit of 75% DMG \| Expertise and Ultimates deal 10% more DMG to targets inflicted with Rend \| Mengenai target dengan efek Tear juga akan mengakibatkan 1 tambahan DMG sebesar 75% ATK |


## Scope Value Gaps By Category

| Category / Component / Scope | Count |
| --- | --- |
| skills / generic-damage:all | 5 |
| skills / generic-damage:target | 5 |
| factors / seasonal-factor-damage:owner | 3 |
| factors / seasonal-factor-damage:party | 3 |
| factors / seasonal-factor-damage:target | 3 |
| skills / elemental-damage:target | 3 |
| skills / generic-damage:owner | 3 |
| skills / physical-magic-enhancement:all | 3 |
| skills / physical-magic-enhancement:party | 3 |
| skills / physical-magic-enhancement:target | 3 |
| skills / season-damage:target | 3 |
| skills / seasonal-factor-damage:owner | 3 |
| skills / seasonal-factor-damage:party | 3 |
| skills / seasonal-factor-damage:target | 3 |
| talents / generic-damage:owner | 3 |
| talents / generic-damage:target | 3 |
| factors / elemental-damage:target | 2 |
| factors / season-damage:target | 2 |
| skills / skill-multiplier:all | 2 |
| skills / skill-multiplier:owner | 2 |
| skills / skill-multiplier:party | 2 |
| talents / final-damage:party | 2 |
| talents / generic-damage:all | 2 |
| factors / generic-damage:all | 1 |
| factors / generic-damage:target | 1 |
| factors / seasonal-factor-damage:all | 1 |
| seasonal-talents / atk:all | 1 |
| seasonal-talents / atk:owner | 1 |
| seasonal-talents / atk:party | 1 |
| seasonal-talents / critical-damage:owner | 1 |
| seasonal-talents / critical-rate:party | 1 |
| seasonal-talents / elemental-damage:owner | 1 |
| seasonal-talents / elemental-damage:party | 1 |
| talents / atk:all | 1 |
| talents / critical-rate:party | 1 |
| talents / elemental-damage:all | 1 |
| talents / elemental-damage:owner | 1 |
| talents / elemental-damage:party | 1 |
| talents / final-damage:owner | 1 |
| talents / generic-damage:party | 1 |
| talents / physical-magic-enhancement:all | 1 |
| talents / physical-magic-enhancement:party | 1 |
| talents / physical-magic-enhancement:target | 1 |
| talents / skill-multiplier:all | 1 |
| talents / skill-multiplier:owner | 1 |
| talents / skill-multiplier:party | 1 |


## Scope Value Gap Examples

| Key | Label | Category | Component | Scopes | Candidate Scopes | Missing | Values | Sources | Sample |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| factors:3050040 | uid:3050040 | factors | elemental-damage | owner, party, target | owner, party | target | owner:60%; party:50% | SeasonPhantomFactors.json |  |
| factors:3050130 | uid:3050130 | factors | elemental-damage | owner, party, target | owner, party | target | owner:60%; party:50% | SeasonPhantomFactors.json |  |
| factors:3052120 | uid:3052120 | factors | generic-damage | all, owner, party, target | owner, party | target, all | owner:500%; party:20% | SeasonPhantomFactors.json |  |
| factors:3050040 | uid:3050040 | factors | season-damage | owner, party, target | owner, party | target | owner:60%; party:50% | SeasonPhantomFactors.json |  |
| factors:3050130 | uid:3050130 | factors | season-damage | owner, party, target | owner, party | target | owner:60%; party:50% | SeasonPhantomFactors.json |  |
| factors:3050040 | uid:3050040 | factors | seasonal-factor-damage | owner, party, target |  | owner, party, target |  | SeasonPhantomFactors.json |  |
| factors:3050130 | uid:3050130 | factors | seasonal-factor-damage | owner, party, target |  | owner, party, target |  | SeasonPhantomFactors.json |  |
| factors:3052120 | uid:3052120 | factors | seasonal-factor-damage | all, owner, party, target |  | owner, party, target, all |  | SeasonPhantomFactors.json |  |
| seasonal-talents:103 | All-Class Aura | seasonal-talents | atk | all, owner, party |  | owner, party, all |  | probing-reports\SeasonRogueEntryProbe.json | Increases ATK by 5% for the user and allies within 10m \| เพิ่ม ATK ให้ตัวเองและเพื่อนร่วมทีมในระยะ 10 เมตร +5% หากมี Role อื่นอยู่ในระยะ จะได้รับเพิ่มอีก +5% \| All-Class Aura All-Class Aura 全职光环 全職光環 全クラスオーラ 만능 오라 Aura multi-classe Allklassen-Aura Aura Multiclase Aura de Todas as Classes Full-time Halo Omni Aura 肉鸽词条-全职光环3 Increases ATK... |
| seasonal-talents:209 | Synergy Crit Field | seasonal-talents | critical-damage | owner, party | party | owner | party:+3% | probing-reports\SeasonRogueEntryProbe.json | increasing the Crit DMG of allies within 15m by +3% \| Aura ini akan membuat Crit rekan tim berjarak 15 meter di sekitar +3% \| เมื่อใช้การโจมตีพิเศษ จะได้รับออร่า CRIT เป็นเวลา 5 วินาที ทำให้เพื่อนร่วมทีมในระยะ 15 เมตรมีค่า CRIT +3% Saat melancarkan Special Attack |
| seasonal-talents:209 | Synergy Crit Field | seasonal-talents | critical-rate | owner, party | owner | party | owner:+3% | probing-reports\SeasonRogueEntryProbe.json | increasing the Crit DMG of allies within 15m by +3% \| Aura ini akan membuat Crit rekan tim berjarak 15 meter di sekitar +3% \| เมื่อใช้การโจมตีพิเศษ จะได้รับออร่า CRIT เป็นเวลา 5 วินาที ทำให้เพื่อนร่วมทีมในระยะ 15 เมตรมีค่า CRIT +3% Saat melancarkan Special Attack |
| seasonal-talents:260 | Marksman - Charged Execution | seasonal-talents | elemental-damage | owner, party |  | owner, party |  | probing-reports\SeasonRogueEntryProbe.json |  |
| skills:315510100 | Thunder Cut | skills | elemental-damage | owner, party, target | owner, party | target | owner:60%; party:50% | SkillBreakdownDetails.json, skillnames.json |  |
| skills:315510200 | Thunder Cut | skills | elemental-damage | owner, party, target | owner, party | target | owner:60%; party:50% | SkillBreakdownDetails.json, skillnames.json |  |
| skills:62 | Thunder Cut | skills | elemental-damage | owner, party, target | owner, party | target | owner:60%; party:50% | skillnames.json |  |
| skills:12301050101 | Flame's Rampage | skills | generic-damage | all, owner, party, target | party | owner, target, all | party:30% | SkillBreakdownDetails.json, skillnames.json | dealing Magic DMG equal to 350% ATK every 3s to targets it touches \| เมื่อ Heroic Melody เปิดใช้ Rhapsody of Flame จะเปลี่ยนเป็นเผาไหม้ ทุก 3 วินาที โจมตีเป้าหมายนี้จนสร้าง DMG 350% ของพลังโจมตีของ Magic DMG \| causando Dano Mágico igual a 350% do ATQ a cada 3 s a alvos que tocar |
| skills:203 | Flame's Rampage | skills | generic-damage | all, owner, party, target | party | owner, target, all | party:30% | skillnames.json | dealing Magic DMG equal to 350% ATK every 3s to targets it touches \| เมื่อ Heroic Melody เปิดใช้ Rhapsody of Flame จะเปลี่ยนเป็นเผาไหม้ ทุก 3 วินาที โจมตีเป้าหมายนี้จนสร้าง DMG 350% ของพลังโจมตีของ Magic DMG \| causando Dano Mágico igual a 350% do ATQ a cada 3 s a alvos que tocar |
| skills:2220506003 | Wind Rift Diffusion | skills | generic-damage | all, owner, party, target | owner, party | target, all | owner:75%; party:10% | SkillBreakdownDetails.json, skillnames.json | deal 1 additional hit of 75% DMG \| Expertise and Ultimates deal 10% more DMG to targets inflicted with Rend \| Mengenai target dengan efek Tear juga akan mengakibatkan 1 tambahan DMG sebesar 75% ATK |
| skills:2220743103 | Flame's Rampage | skills | generic-damage | all, owner, party, target | party | owner, target, all | party:30% | SkillBreakdownDetails.json, skillnames.json | dealing Magic DMG equal to 350% ATK every 3s to targets it touches \| เมื่อ Heroic Melody เปิดใช้ Rhapsody of Flame จะเปลี่ยนเป็นเผาไหม้ ทุก 3 วินาที โจมตีเป้าหมายนี้จนสร้าง DMG 350% ของพลังโจมตีของ Magic DMG \| causando Dano Mágico igual a 350% do ATQ a cada 3 s a alvos que tocar |
| skills:23 | Wind Rift Diffusion | skills | generic-damage | all, owner, party, target | owner, party | target, all | owner:75%; party:10% | skillnames.json | deal 1 additional hit of 75% DMG \| Expertise and Ultimates deal 10% more DMG to targets inflicted with Rend \| Mengenai target dengan efek Tear juga akan mengakibatkan 1 tambahan DMG sebesar 75% ATK |
| skills:12301050101 | Flame's Rampage | skills | physical-magic-enhancement | all, owner, party, target | owner | party, target, all | owner:350% | SkillBreakdownDetails.json, skillnames.json | dealing Magic DMG equal to 350% ATK every 3s to targets it touches \| เมื่อ Heroic Melody เปิดใช้ Rhapsody of Flame จะเปลี่ยนเป็นเผาไหม้ ทุก 3 วินาที โจมตีเป้าหมายนี้จนสร้าง DMG 350% ของพลังโจมตีของ Magic DMG \| causando Dano Mágico igual a 350% do ATQ a cada 3 s a alvos que tocar |
| skills:203 | Flame's Rampage | skills | physical-magic-enhancement | all, owner, party, target | owner | party, target, all | owner:350% | skillnames.json | dealing Magic DMG equal to 350% ATK every 3s to targets it touches \| เมื่อ Heroic Melody เปิดใช้ Rhapsody of Flame จะเปลี่ยนเป็นเผาไหม้ ทุก 3 วินาที โจมตีเป้าหมายนี้จนสร้าง DMG 350% ของพลังโจมตีของ Magic DMG \| causando Dano Mágico igual a 350% do ATQ a cada 3 s a alvos que tocar |
| skills:2220743103 | Flame's Rampage | skills | physical-magic-enhancement | all, owner, party, target | owner | party, target, all | owner:350% | SkillBreakdownDetails.json, skillnames.json | dealing Magic DMG equal to 350% ATK every 3s to targets it touches \| เมื่อ Heroic Melody เปิดใช้ Rhapsody of Flame จะเปลี่ยนเป็นเผาไหม้ ทุก 3 วินาที โจมตีเป้าหมายนี้จนสร้าง DMG 350% ของพลังโจมตีของ Magic DMG \| causando Dano Mágico igual a 350% do ATQ a cada 3 s a alvos que tocar |
| skills:315510100 | Thunder Cut | skills | season-damage | owner, party, target | owner, party | target | owner:60%; party:50% | SkillBreakdownDetails.json, skillnames.json |  |
| skills:315510200 | Thunder Cut | skills | season-damage | owner, party, target | owner, party | target | owner:60%; party:50% | SkillBreakdownDetails.json, skillnames.json |  |
| skills:62 | Thunder Cut | skills | season-damage | owner, party, target | owner, party | target | owner:60%; party:50% | skillnames.json |  |
| skills:315510100 | Thunder Cut | skills | seasonal-factor-damage | owner, party, target |  | owner, party, target |  | SkillBreakdownDetails.json, skillnames.json |  |
| skills:315510200 | Thunder Cut | skills | seasonal-factor-damage | owner, party, target |  | owner, party, target |  | SkillBreakdownDetails.json, skillnames.json |  |
| skills:62 | Thunder Cut | skills | seasonal-factor-damage | owner, party, target |  | owner, party, target |  | skillnames.json |  |
| skills:2220506003 | Wind Rift Diffusion | skills | skill-multiplier | all, owner, party, target | target | owner, party, all | target:75% | SkillBreakdownDetails.json, skillnames.json | deal 1 additional hit of 75% DMG \| Expertise and Ultimates deal 10% more DMG to targets inflicted with Rend \| Mengenai target dengan efek Tear juga akan mengakibatkan 1 tambahan DMG sebesar 75% ATK |
| skills:23 | Wind Rift Diffusion | skills | skill-multiplier | all, owner, party, target | target | owner, party, all | target:75% | skillnames.json | deal 1 additional hit of 75% DMG \| Expertise and Ultimates deal 10% more DMG to targets inflicted with Rend \| Mengenai target dengan efek Tear juga akan mengakibatkan 1 tambahan DMG sebesar 75% ATK |
| talents:1212 | Radiant Guard | talents | atk | all, owner, party | owner, party | all | owner:300%; party:150% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json |  |
| talents:1322 | Critical Encore | talents | critical-rate | owner, party | owner | party | owner:1% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | Every 1% Crit Rate grants 1% trigger chance for Encore Strings \| โอกาส CRIT ทุก 1% เพิ่มโอกาสทำงาน 1% ของสายพิณ Encore Setiap 1% Critical Chance memberikan tambahan 1% peluang untuk memicu Encore Chords \| Critical Encore Critical Encore 安可暴击增幅 安可暴擊增幅 追奏会心増幅 앵콜 치명타 만능 Rappel critique Kritische Zugabe Bis Crítico Bis Crítico บูสต์ Encore CRIT Encore Critical Boost 安可暴击增幅 Every 1% Cri... |
| talents:1212 | Radiant Guard | talents | elemental-damage | all, owner, party |  | owner, party, all |  | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json |  |
| talents:1311 | Severed Chapter | talents | final-damage | owner, party, target | target | owner, party | target:+15% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | serta +15% Final DMG terhadap target yang dikalahkan \| you and Allies within 30 meters have an resilience break efficiency +30% and deal 15% more DMG to Resilience Broken targets \| หลังจากเปิดโซนาต้า - บทเพลงกล้าหาญ จะทำให้ตัวเองและเพื่อนร่วมทีมภายใน 30 เมตร ประสิทธิภาพเจาะเกราะ +30% และ DMG สุดท้ายที่ทำลายเป้าหมาย +15% |
| talents:510 | Smite Spec | talents | final-damage | owner, party | owner | party | owner:50% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | Increases the final DMG of Lucky Strikes by 50% \| DMG akhir yang diakibatkan Lucky Hit meningkat 50% \| Aumenta o dano final de Golpes de Sorte em 50% |
| talents:1311 | Severed Chapter | talents | generic-damage | owner, party, target | owner, party | target | owner:+30%; party:15% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | serta +15% Final DMG terhadap target yang dikalahkan \| you and Allies within 30 meters have an resilience break efficiency +30% and deal 15% more DMG to Resilience Broken targets \| หลังจากเปิดโซนาต้า - บทเพลงกล้าหาญ จะทำให้ตัวเองและเพื่อนร่วมทีมภายใน 30 เมตร ประสิทธิภาพเจาะเกราะ +30% และ DMG สุดท้ายที่ทำลายเป้าหมาย +15% |
| talents:1322 | Critical Encore | talents | generic-damage | owner, party | party | owner | party:50% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | Every 1% Crit Rate grants 1% trigger chance for Encore Strings \| โอกาส CRIT ทุก 1% เพิ่มโอกาสทำงาน 1% ของสายพิณ Encore Setiap 1% Critical Chance memberikan tambahan 1% peluang untuk memicu Encore Chords \| Critical Encore Critical Encore 安可暴击增幅 安可暴擊增幅 追奏会心増幅 앵콜 치명타 만능 Rappel critique Kritische Zugabe Bis Crítico Bis Crítico บูสต์ Encore CRIT Encore Critical Boost 安可暴击增幅 Every 1% Cri... |
| talents:1327 | Critical Acclaim | talents | generic-damage | owner, party | party | owner | party:50% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json |  |
| talents:1342 | Flame's Rampage | talents | generic-damage | all, owner, party, target | party | owner, target, all | party:30% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | dealing Magic DMG equal to 350% ATK every 3s to targets it touches \| เมื่อ Heroic Melody เปิดใช้ Rhapsody of Flame จะเปลี่ยนเป็นเผาไหม้ ทุก 3 วินาที โจมตีเป้าหมายนี้จนสร้าง DMG 350% ของพลังโจมตีของ Magic DMG \| causando Dano Mágico igual a 350% do ATQ a cada 3 s a alvos que tocar |
| talents:258 | Law of Energy Surge | talents | generic-damage | owner, party | owner | party | owner:200% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json |  |
| talents:405 | Wind Rift Diffusion | talents | generic-damage | all, owner, party, target | owner, party | target, all | owner:75%; party:10% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | deal 1 additional hit of 75% DMG \| Expertise and Ultimates deal 10% more DMG to targets inflicted with Rend \| Mengenai target dengan efek Tear juga akan mengakibatkan 1 tambahan DMG sebesar 75% ATK |
| talents:1342 | Flame's Rampage | talents | physical-magic-enhancement | all, owner, party, target | owner | party, target, all | owner:350% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | dealing Magic DMG equal to 350% ATK every 3s to targets it touches \| เมื่อ Heroic Melody เปิดใช้ Rhapsody of Flame จะเปลี่ยนเป็นเผาไหม้ ทุก 3 วินาที โจมตีเป้าหมายนี้จนสร้าง DMG 350% ของพลังโจมตีของ Magic DMG \| causando Dano Mágico igual a 350% do ATQ a cada 3 s a alvos que tocar |
| talents:405 | Wind Rift Diffusion | talents | skill-multiplier | all, owner, party, target | target | owner, party, all | target:75% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | deal 1 additional hit of 75% DMG \| Expertise and Ultimates deal 10% more DMG to targets inflicted with Rend \| Mengenai target dengan efek Tear juga akan mengakibatkan 1 tambahan DMG sebesar 75% ATK |


## Examples

| Key | Label | Category | Readiness | Zones | Sample |
| --- | --- | --- | --- | --- | --- |
| factors:3050040 | uid:3050040 | factors | formula-replay-required | elementalDamage, generalDamage, seasonDamage |  |
| factors:3050130 | uid:3050130 | factors | formula-replay-required | elementalDamage, generalDamage, seasonDamage |  |
| factors:3052120 | uid:3052120 | factors | mixed-exact-and-replay | generalDamage, luckyEnhancement, physicalMagicEnhancement, seasonDamage |  |
| seasonal-talents:103 | All-Class Aura | seasonal-talents | formula-replay-required | allRoundDamage, baseAttackTerm, luckyStrikeBaseTerm | Increases ATK by 5% for the user and allies within 10m \| เพิ่ม ATK ให้ตัวเองและเพื่อนร่วมทีมในระยะ 10 เมตร +5% หากมี Role อื่นอยู่ในระยะ จะได้รับเพิ่มอีก +5% \| All-Class Aura All-Class Aura 全职光环 全職光環 全クラスオーラ 만능 오라 Aura multi-classe Allklassen-Aura Aura Multiclase Aura de Todas as Classes Full-time Halo Omni Aura 肉鸽词条-全职光环3 Increases ATK... |
| seasonal-talents:209 | Synergy Crit Field | seasonal-talents | formula-replay-required | baseAttackTerm, critical, generalDamage | increasing the Crit DMG of allies within 15m by +3% \| Aura ini akan membuat Crit rekan tim berjarak 15 meter di sekitar +3% \| เมื่อใช้การโจมตีพิเศษ จะได้รับออร่า CRIT เป็นเวลา 5 วินาที ทำให้เพื่อนร่วมทีมในระยะ 15 เมตรมีค่า CRIT +3% Saat melancarkan Special Attack |
| seasonal-talents:260 | Marksman - Charged Execution | seasonal-talents | formula-replay-required | elementalDamage, generalDamage, seasonDamage |  |
| skills:315510100 | Thunder Cut | skills | formula-replay-required | elementalDamage, seasonDamage |  |
| skills:315510200 | Thunder Cut | skills | formula-replay-required | elementalDamage, seasonDamage |  |
| skills:62 | Thunder Cut | skills | formula-replay-required | elementalDamage, seasonDamage |  |
| skills:12301050101 | Flame's Rampage | skills | mixed-exact-and-replay | baseAttackTerm, elementalDamage, generalDamage, luckyEnhancement, physicalMagicEnhancement, skillMultiplier, timingCadence | dealing Magic DMG equal to 350% ATK every 3s to targets it touches \| เมื่อ Heroic Melody เปิดใช้ Rhapsody of Flame จะเปลี่ยนเป็นเผาไหม้ ทุก 3 วินาที โจมตีเป้าหมายนี้จนสร้าง DMG 350% ของพลังโจมตีของ Magic DMG \| causando Dano Mágico igual a 350% do ATQ a cada 3 s a alvos que tocar |
| skills:203 | Flame's Rampage | skills | mixed-exact-and-replay | baseAttackTerm, elementalDamage, generalDamage, luckyEnhancement, physicalMagicEnhancement, skillMultiplier, timingCadence | dealing Magic DMG equal to 350% ATK every 3s to targets it touches \| เมื่อ Heroic Melody เปิดใช้ Rhapsody of Flame จะเปลี่ยนเป็นเผาไหม้ ทุก 3 วินาที โจมตีเป้าหมายนี้จนสร้าง DMG 350% ของพลังโจมตีของ Magic DMG \| causando Dano Mágico igual a 350% do ATQ a cada 3 s a alvos que tocar |
| skills:2220506003 | Wind Rift Diffusion | skills | mixed-exact-and-replay | baseAttackTerm, generalDamage, luckyEnhancement, luckyStrikeBaseTerm, skillMultiplier, timingCadence | deal 1 additional hit of 75% DMG \| Expertise and Ultimates deal 10% more DMG to targets inflicted with Rend \| Mengenai target dengan efek Tear juga akan mengakibatkan 1 tambahan DMG sebesar 75% ATK |
| skills:2220743103 | Flame's Rampage | skills | mixed-exact-and-replay | baseAttackTerm, elementalDamage, generalDamage, luckyEnhancement, physicalMagicEnhancement, skillMultiplier, timingCadence | dealing Magic DMG equal to 350% ATK every 3s to targets it touches \| เมื่อ Heroic Melody เปิดใช้ Rhapsody of Flame จะเปลี่ยนเป็นเผาไหม้ ทุก 3 วินาที โจมตีเป้าหมายนี้จนสร้าง DMG 350% ของพลังโจมตีของ Magic DMG \| causando Dano Mágico igual a 350% do ATQ a cada 3 s a alvos que tocar |
| skills:23 | Wind Rift Diffusion | skills | mixed-exact-and-replay | baseAttackTerm, generalDamage, luckyEnhancement, luckyStrikeBaseTerm, skillMultiplier, timingCadence | deal 1 additional hit of 75% DMG \| Expertise and Ultimates deal 10% more DMG to targets inflicted with Rend \| Mengenai target dengan efek Tear juga akan mengakibatkan 1 tambahan DMG sebesar 75% ATK |
| talents:1212 | Radiant Guard | talents | formula-replay-required | baseAttackTerm, elementalDamage, luckyStrikeBaseTerm, skillMultiplier |  |
| talents:1311 | Severed Chapter | talents | formula-replay-required | finalDamage, generalDamage, luckyEnhancement | serta +15% Final DMG terhadap target yang dikalahkan \| you and Allies within 30 meters have an resilience break efficiency +30% and deal 15% more DMG to Resilience Broken targets \| หลังจากเปิดโซนาต้า - บทเพลงกล้าหาญ จะทำให้ตัวเองและเพื่อนร่วมทีมภายใน 30 เมตร ประสิทธิภาพเจาะเกราะ +30% และ DMG สุดท้ายที่ทำลายเป้าหมาย +15% |
| talents:1322 | Critical Encore | talents | formula-replay-required | critical, generalDamage, luckyEnhancement | Every 1% Crit Rate grants 1% trigger chance for Encore Strings \| โอกาส CRIT ทุก 1% เพิ่มโอกาสทำงาน 1% ของสายพิณ Encore Setiap 1% Critical Chance memberikan tambahan 1% peluang untuk memicu Encore Chords \| Critical Encore Critical Encore 安可暴击增幅 安可暴擊增幅 追奏会心増幅 앵콜 치명타 만능 Rappel critique Kritische Zugabe Bis Crítico Bis Crítico บูสต์ Encore CRIT Encore Critical Boost 安可暴击增幅 Every 1% Cri... |
| talents:1327 | Critical Acclaim | talents | formula-replay-required | baseAttackTerm, critical, generalDamage, luckyEnhancement |  |
| talents:258 | Law of Energy Surge | talents | formula-replay-required | elementalDamage, generalDamage, luckyEnhancement, timingCadence |  |
| talents:510 | Smite Spec | talents | formula-replay-required | elementalDamage, finalDamage, generalDamage, luckyEnhancement | Increases the final DMG of Lucky Strikes by 50% \| DMG akhir yang diakibatkan Lucky Hit meningkat 50% \| Aumenta o dano final de Golpes de Sorte em 50% |
| talents:1342 | Flame's Rampage | talents | mixed-exact-and-replay | baseAttackTerm, elementalDamage, generalDamage, luckyEnhancement, physicalMagicEnhancement, skillMultiplier, timingCadence | dealing Magic DMG equal to 350% ATK every 3s to targets it touches \| เมื่อ Heroic Melody เปิดใช้ Rhapsody of Flame จะเปลี่ยนเป็นเผาไหม้ ทุก 3 วินาที โจมตีเป้าหมายนี้จนสร้าง DMG 350% ของพลังโจมตีของ Magic DMG \| causando Dano Mágico igual a 350% do ATQ a cada 3 s a alvos que tocar |
| talents:405 | Wind Rift Diffusion | talents | mixed-exact-and-replay | baseAttackTerm, generalDamage, luckyEnhancement, luckyStrikeBaseTerm, skillMultiplier, timingCadence | deal 1 additional hit of 75% DMG \| Expertise and Ultimates deal 10% more DMG to targets inflicted with Rend \| Mengenai target dengan efek Tear juga akan mengakibatkan 1 tambahan DMG sebesar 75% ATK |
