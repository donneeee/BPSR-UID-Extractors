# Modifier Value Proof Gap Audit

Status audited: `needs-timing-model`

Total rows: 1473

## Category Counts

| Category | Count |
| --- | --- |
| skills | 1189 |
| talents | 120 |
| seasonal-talents | 71 |
| buffs | 66 |
| items | 13 |
| linktext-tooltips | 9 |
| factors | 3 |
| battle-imagines | 2 |


## Wording Buckets

| Bucket | Count |
| --- | --- |
| no-sample-text | 1116 |
| attack-wording | 129 |
| elemental-wording | 85 |
| generic-damage-wording | 66 |
| timing-wording | 42 |
| unbucketed-wording | 17 |
| seasonal-wording | 11 |
| critical-wording | 2 |
| defensive-or-sustain-wording | 2 |
| lucky-wording | 2 |
| skill-coefficient-wording | 1 |


## Category / Wording

| Category / Bucket | Count |
| --- | --- |
| skills / no-sample-text | 954 |
| skills / attack-wording | 99 |
| talents / no-sample-text | 67 |
| skills / elemental-wording | 64 |
| skills / generic-damage-wording | 62 |
| seasonal-talents / no-sample-text | 43 |
| buffs / no-sample-text | 29 |
| talents / timing-wording | 21 |
| buffs / timing-wording | 13 |
| items / no-sample-text | 13 |
| talents / attack-wording | 13 |
| talents / elemental-wording | 12 |
| seasonal-talents / attack-wording | 10 |
| seasonal-talents / seasonal-wording | 10 |
| buffs / unbucketed-wording | 8 |
| buffs / elemental-wording | 7 |
| buffs / attack-wording | 6 |
| linktext-tooltips / no-sample-text | 5 |
| seasonal-talents / timing-wording | 4 |
| skills / timing-wording | 4 |
| skills / unbucketed-wording | 4 |
| factors / no-sample-text | 3 |
| talents / unbucketed-wording | 3 |
| battle-imagines / no-sample-text | 2 |
| buffs / generic-damage-wording | 2 |
| skills / defensive-or-sustain-wording | 2 |
| talents / lucky-wording | 2 |
| buffs / seasonal-wording | 1 |
| linktext-tooltips / attack-wording | 1 |
| linktext-tooltips / elemental-wording | 1 |
| linktext-tooltips / generic-damage-wording | 1 |
| linktext-tooltips / unbucketed-wording | 1 |
| seasonal-talents / critical-wording | 1 |
| seasonal-talents / elemental-wording | 1 |
| seasonal-talents / skill-coefficient-wording | 1 |
| seasonal-talents / unbucketed-wording | 1 |
| talents / critical-wording | 1 |
| talents / generic-damage-wording | 1 |


## Formula Readiness

| Readiness | Count |
| --- | --- |
| description-grounded-needs-runtime-proof | 1277 |
| timing-model-required | 130 |
| formula-replay-required | 40 |
| overlap-only | 21 |
| mixed-exact-and-replay | 5 |


## Scope Value Gaps

| Component / Missing Scope | Count |
| --- | --- |
| elemental-damage:all | 4 |
| generic-damage:all | 2 |
| atk:all | 1 |
| season-damage:all | 1 |


## Owner/Party Scope Value Gaps

_None._


## Owner/Party Scope Value Gaps By Category

_None._


## Owner/Party Scope Value Gap Examples

_None._


## Scope Value Gaps By Category

| Category / Component / Scope | Count |
| --- | --- |
| talents / elemental-damage:all | 3 |
| talents / generic-damage:all | 2 |
| seasonal-talents / elemental-damage:all | 1 |
| seasonal-talents / season-damage:all | 1 |
| talents / atk:all | 1 |


## Scope Value Gap Examples

| Key | Label | Category | Component | Scopes | Candidate Scopes | Missing | Values | Sources | Sample |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| seasonal-talents:221 | Stormblade - Lingering Thunder Cut | seasonal-talents | elemental-damage | all, owner, party | owner, party | all | owner:60%; party:50% | probing-reports\SeasonRogueEntryProbe.json | DMG ในฝันของ Thunder Cut+60% ปรากฏเฉพาะใน [ระดับ ยาก] และ [ระดับ นรก] Thunder Cut Move Speed -50% \| Thunder Cut ความเร็วเคลื่อนที่ -50% \| -50% |
| seasonal-talents:221 | Stormblade - Lingering Thunder Cut | seasonal-talents | season-damage | all, owner, party | owner, party | all | owner:60%; party:50% | probing-reports\SeasonRogueEntryProbe.json | DMG ในฝันของ Thunder Cut+60% ปรากฏเฉพาะใน [ระดับ ยาก] และ [ระดับ นรก] Thunder Cut Move Speed -50% \| Thunder Cut ความเร็วเคลื่อนที่ -50% \| -50% |
| talents:343 | Soul Flame | talents | atk | all, owner, party | owner, party | all | owner:10%; party:3% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | immediately gains a buff: Increases ATK bonuses from all sources by 3% for 5s \| langsung mendapat 1 lapisan Buff: ATK meningkat 3% yang diperoleh dengan cara apa pun \| ช่องวิญญาณสีแดงจะได้รับการ Charge 10% ทันทีที่ได้รับ Buff 1 Stack: เพิ่มพลังโจมตีที่ได้รับในทุกวิธีขึ้น 3% เป็นเวลา 5 วินาที Buff นี้สามารถซ้อนทับได้สูงสุด 3 Stack Setiap 10% Char... |
| talents:112 | Flash Frenzy Blade | talents | elemental-damage | all, owner, party | owner, party | all | owner:25%; party:10% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json |  |
| talents:211 | Cold Wind Convergence | talents | elemental-damage | all, owner, party | owner, party | all | owner:100%; party:3% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | um 3 % \| and reduces the Ice Energy cost of skills by 3% for the next 15s \| restaura 5 de energía gélida y reduce el costo de energía gélida de las habilidades un 3 % durante 15 s |
| talents:259 | Power of Ice Crystals | talents | elemental-damage | all, owner, party | owner, party | all | owner:50%; party:8% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | deals 8% more Ice damage \| mendapatkan 8% Ice Boost \| causa 8% mais Dano de Gelo |
| talents:412 | Wind Chaser | talents | generic-damage | all, owner, party | owner, party | all | owner:20%; party:4% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | increase the DMG of Valor Cyclone by 4% \| tiap menggunakan 20 Courage akan membuat DMG dari Courage Wind Ring +4% \| ในช่วงปล่อยสกิล Courage Wind Ring ทุกการใช้ 20 แต้มที่เป็น Courage จะได้รับ DMG ของ Courage Wind Ring +4% สูงสุด +20% Selama melancarkan skill Courage Wind Ring |
| talents:443 | Whispering Breeze | talents | generic-damage | all, owner, party | owner, party | all | owner:50%; party:12% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | Courage Wind Ring DMG +12% \| increases the DMG Valor Cyclone deals by 12% \| เมื่อCourageปัจจุบันน้ำกว่าเท่ากับ50% Courage Wind Ringพลังงานจะใช้ลดลง2แต้ม เมื่อCourageปัจจุบันสูงกว่า50% Courage Wind Ring DMG +12% Saat Courage 50% atau kurang |


## Examples

| Key | Label | Category | Readiness | Zones | Sample |
| --- | --- | --- | --- | --- | --- |
| battle-imagines:2110034 | Tina - Lower CD | battle-imagines | timing-model-required | timingCadence |  |
| battle-imagines:2110042 | Crimson Foxen - Haste | battle-imagines | timing-model-required | timingCadence |  |
| buffs:2010073 | Foodie's Grace | buffs | description-grounded-needs-runtime-proof | timingCadence | secara tak terduga membawa efek spesial! Haste +2%! \| it triggers a special effect! Haste +2%! When delicious food collides with an aura from another world \| secara tak terduga membawa efek spesial! Haste +2%! When delicious food collides with an aura from another world |
| buffs:21416 | Slow | buffs | description-grounded-needs-runtime-proof | timingCadence | Move Speed berkurang 30% \| Move Speed berkurang 30% Slowed \| : Reduces move SPD by 30% Slowed |
| buffs:2200241 | Lightning Flash | buffs | description-grounded-needs-runtime-proof | baseAttackTerm, elementalDamage, timingCadence | Increases Moonblades' Attack Speed by 100% \| Moon Blade ความเร็วโจมตี +100% Attack Speed dari Moonblade +100% \| Lightning Flash Lightning Flash 霹雳之光 霹靂之光 荒れ狂う光 벽력의 빛 Éclair fulgurant Lichtblitz Destello Relámpago Raio Luminoso Lightning Flash Thunderbolt Light 霹雳之光_效果 Increases Moonblades'... |
| buffs:2200401 | Thunder Charm Blade Intent DMG Reduction | buffs | description-grounded-needs-runtime-proof | baseAttackTerm, elementalDamage, generalDamage, timingCadence | Ganha 20% de Redução de Dano ao consumir Intenção da Lâmina เมื่อใช้ Blade Intent ได้รับลด DMG 20% Mendapat 20% DR saat menggunakan Bladewill \| Confère 20 % de réduction de dégâts en consommant de l'Intention de la lame \| Gewährt 20 % SCH-Reduktion beim Verbrauch von Klingenwille Gana un 20 % de reducción de DÑO al consumir Voluntad del Filo |
| buffs:2202081 | Arcane of Green | buffs | description-grounded-needs-runtime-proof | generalDamage, timingCadence | and Stag Charge damage +20% \| Wild Bloom และ Deer Charge +20% DMG dari Infuse \| dan Deer Charge +20% |
| buffs:2202671 | Transcendence | buffs | description-grounded-needs-runtime-proof | baseAttackTerm, physicalMagicEnhancement, timingCadence | ATK +30% Segera mendapat 100 Energi \| 10s \| Instantly gain 100 energy |
| buffs:2203051 | Psychic Surge | buffs | description-grounded-needs-runtime-proof | timingCadence | The next Arrow Rain gains 100% Photon Energy boost \| A próxima Chuva de Flechas ganha 100% de reforço de Energia de Fóton \| ฝนธนูครั้งถัดไปได้รับ Light Energy เพิ่มขึ้น 100% Arrow Rain berikutnya akan mendapat peningkatan 100% Light |
| buffs:2203061 | Demon Wolf Roar | buffs | description-grounded-needs-runtime-proof | timingCadence | Self and Wild Wolf Haste +10% \| ตัวเองและ Wild Wolf Haste +10% ต่อเนื่อง 3 วินาที ซ้อนทับมากสุด 3 Stack Haste diri sendiri dan Wildwolf +10% selama 3 detik \| Demon Wolf Roar Demon Wolf Roar 魔狼咆哮 魔狼咆哮 魔狼の咆哮 늑대 마수의 포효 Rugissement du Loup-démon Gebrüll des Dämonenwolfs Rugido del Lobo Demoniaco Rugido do Lobo Demoníaco Demon Wolf Roar Dem... |
| buffs:2203071 | Direwolf's Hunger | buffs | description-grounded-needs-runtime-proof | timingCadence | You and your Companion gain 2% Haste \| คุณและ Beast ของคุณรวดเร็ว +2% ซ้อนทับมากสุด 5 Stack Haste kamu dan Beast-mu +2% \| Direwolf's Hunger Direwolf's Hunger 魔狼之嗜 魔狼之嗜 臣狼の爪 늑대 마수의 탐욕 Faim du loup sinistre Hunger des Schreckenswolfs Hambre del Lobo Huargo Fome do Lobo Atroz Demon Wolf's Hunger Demonic... |
| buffs:2203161 | Swift | buffs | description-grounded-needs-runtime-proof | baseAttackTerm, timingCadence | Attack Speed +10% \| ความเร็วโจมตี +10% ซ้อนทับสูงสุด 3 Stack Attack Speed +10% \| Swift Swift 迅捷 迅捷 迅速 신속함 Vivacité Flink Rapidez Rapidez Swift Swift 猎鹰之息_迅捷 Attack Speed +10% |
| buffs:2204111 | Cold Wind Convergence | buffs | description-grounded-needs-runtime-proof | elementalDamage, timingCadence | สกิลใช้ Frost Energy -5% ซ้อนทับมากสุด 6 Stack Ice Energy yang digunakan skill -5% \| Ice Energy cost of skills -5% \| Custo de Energia de Gelo das habilidades -5% |
| buffs:2204371 | Endless Cold | buffs | description-grounded-needs-runtime-proof | elementalDamage, generalDamage, timingCadence | Increases Meteor Storm DMG by 150% \| Meteor Storm DMG +150% และไม่เข้าสู่ CD ไม่ใช้ Frost Energy ในช่วงนี้ไม่สามารถได้รับ Mystic Ice จากธนูน้ำแข็งที่ทำงาน Meteor Storm Meteor Storm DMG +150% \| Endless Cold Endless Cold 无尽苦寒 無盡苦寒 無尽極寒 끝없는 혹한 Froid éternel Endlose Kälte Frío Interminable Frio Interminável หนาวเหน็บไม่สิ้นสุด Endless Frost 无尽苦寒-子BUFF Increases Meteor Storm... |
| buffs:2205271 | Divine Concealment | buffs | description-grounded-needs-runtime-proof | timingCadence | Increases Haste by 1% and Move Speed by 2% \| รวดเร็ว +1% ความเร็วเคลื่อนที่ +2% ซ้อนทับมากสุด 5 Stack Haste +1% \| Divine Concealment Divine Concealment 神隐 神隱 神隠 신의 은폐 Dissimulation divine Göttliche Verborgenheit Ocultamiento Divino Ocultação Divina Divine Concealment Divine Concealment 暗影锋刃_效... |
| buffs:2205501 | Spiral Flame | buffs | description-grounded-needs-runtime-proof | elementalDamage, timingCadence | Haste+25% Haste +25% \| Increases Haste by 25% \| Haste+25% Haste +25% Increases Haste by 25% |
| buffs:2206111 | Judgment Revelation | buffs | description-grounded-needs-runtime-proof | timingCadence |  |
| buffs:2206542 | Bold Fearless | buffs | description-grounded-needs-runtime-proof | timingCadence | Haste +3% for 10s \| Haste +3% ต่อเนื่อง 10 วินาที ซ้อนทับสูงสุด 10 Stack Haste +3% \| Bold Fearless Bold Fearless 悍勇无畏 悍勇無畏 剛勇無畏 용감무쌍 Courage intrépide Kühne Furchtlosigkeit Intrepidez Absoluta Valentia Destemida Brave and Fearless Fearless Valor Bold Fearless Hast... |
| buffs:25202 | Slow | buffs | description-grounded-needs-runtime-proof | timingCadence | Move Speed berkurang 30% \| Move Speed berkurang 30% Slowed \| : Reduces move SPD by 30% Slowed |
| buffs:3002242 | Time-Slit - Dream | buffs | description-grounded-needs-runtime-proof | baseAttackTerm, seasonDamage, timingCadence | Expertise Skill CD Boost +12% Special Attack \| Expertise Skill CD Boost +12% 特殊攻击，专精技能冷却加速+12% 特殊攻擊，專精技能冷卻加速+12% 特殊攻撃、マスタリースキルのリキャスト加速+12% 특수 공격 \| Reforço de TR da Habilidade de Perícia +12% เร่งความเร็วคูลดาวน์ของการโจมตีพิเศษและสกิลพิเศษเฉพาะ +12% CD Boost pada Special Attack dan Expertise Skill +12% |
| buffs:3050180 | Stormblade - Iai Flash | buffs | description-grounded-needs-runtime-proof | elementalDamage, generalDamage, timingCadence |  |
| buffs:3051190 | Wind Knight - Extreme Galeform | buffs | description-grounded-needs-runtime-proof | timingCadence |  |
| buffs:3051270 | Wind Knight - Wind Fury Celerity | buffs | description-grounded-needs-runtime-proof | generalDamage, timingCadence | Wind Knight - Wind Fury Celerity Wind Knight - Wind Fury Celerity 青岚骑士·风怒极速 青嵐騎士·風怒極速 ゲイルランサー・風怒迅撃 윈드 나이트・초고속 바람의 분노 Chevalier du vent - Célérité de Fureur du vent Windritter – Wi... \| +100% |
| buffs:3054251 | 炽热清算攻速+100% | buffs | description-grounded-needs-runtime-proof | timingCadence |  |
| buffs:3055260 | Heavy Guardian - Weak Spot CD Reduction | buffs | description-grounded-needs-runtime-proof | timingCadence |  |
| buffs:3056310 | Verdant Oracle - Wishing Bud | buffs | description-grounded-needs-runtime-proof | timingCadence |  |
| buffs:3056340 | Verdant Oracle - High-Cost Special | buffs | description-grounded-needs-runtime-proof | baseAttackTerm, timingCadence | Verdant Oracle - High-Cost Special Verdant Oracle - High-Cost Special 森语者·特攻极耗 森語者·特攻極耗 ヴァーダントオラクル・特攻消尽 실반 오라클・특수 공격 극한 소모 Oracle verdoyant - Spécial coûteux Grünes Orakel – Koste... \| -90% |
| buffs:3057270 | Beat Performer - Flaming Strings | buffs | description-grounded-needs-runtime-proof | critical, elementalDamage, timingCadence |  |
| buffs:31602 | Inspire | buffs | description-grounded-needs-runtime-proof | timingCadence | Haste +10% \| Haste+10% ต่อเนื่อง 10 วินาที Haste +10% selama 10 detik \| Inspire Inspire 激励 激勵 激励 격려 Inspiration Inspirieren Inspiración Inspiração Motivate Motivation Inspire Haste +10% |
| buffs:510031 | Haste Bonus | buffs | description-grounded-needs-runtime-proof | timingCadence | Celeridade +40% Haste เพิ่มขึ้น 40% Haste meningkat 40% \| Haste +40% 急速提升40% 急速提升40% ファスト+40% 속공 40% 증가 Célérité +40 % \| Haste Bonus Haste Bonus 急速提升 急速提升 ファストアップ 속공 증가 Bonus de célérité Tempobonus Bonus de presteza Bônus de Celeridade Haste เพิ่มขึ้น Haste Increase 属性球-急速-属性增加 Haste +40% Haste +40%... |
| buffs:510032 | Haste Bonus | buffs | description-grounded-needs-runtime-proof | timingCadence | Cada acúmulo aumenta a Celeridade em 5% ทุก Stack SPD เพิ่มขึ้น 5% Haste meningkat 5% tiap tumpuk \| Cada acúmulo aumenta a Celeridade em 5% ทุก Stack SPD เพิ่มขึ้น 5% Haste meningkat 5% tiap tumpuk Each stack increases Haste by 5% 每层提升5%急速 每層提升5%急速 1スタックにつきファスト+5% 스택당 속공이 5% 증가한다 \| Chaque cumul augmente la célérité de 5 % |
| buffs:510065 | Slow | buffs | description-grounded-needs-runtime-proof | timingCadence | Move Speed berkurang 30% \| Move Speed berkurang 30% Slowed \| : Reduces move SPD by 30% Slowed |
| buffs:510542 | Slow | buffs | description-grounded-needs-runtime-proof | timingCadence | Move Speed berkurang 30% \| 이동속도 30% 감소 Ralentissement \| Move Speed berkurang 30% Slowed |
| buffs:681702 | Interdimensional Punishment Registration Cooldown | buffs | description-grounded-needs-runtime-proof | timingCadence |  |
| buffs:683814 | 绣球-1技能减cd | buffs | description-grounded-needs-runtime-proof | timingCadence |  |
| buffs:683817 | Luck (Hearts) | buffs | description-grounded-needs-runtime-proof | luckyEnhancement, timingCadence |  |
| buffs:6901 | 太刀镰SKILL03零蓄返还怒气和CD | buffs | description-grounded-needs-runtime-proof | timingCadence |  |
| buffs:700042 | Void Boost | buffs | description-grounded-needs-runtime-proof | timingCadence | Cada acúmulo aumenta a Celeridade em 20% e a Velocidade em 30% ทุก Stack เพิ่ม Haste 20% และ SPD 30% Setiap tumpuk meningkatkan 20% Haste dan 30% Move Speed \| 이동속도 30% 증가 Chaque cumul augmente la célérité de 20 % et la vitesse de 30 % \| Jeder Stapel erhöht das Tempo um 20 % und die Geschwindigkeit um 30 % Cada acumulación aumenta la presteza en un 20 % y la velocidad en un 30 % |
| buffs:700043 | Void Boost | buffs | description-grounded-needs-runtime-proof | timingCadence | Cada acúmulo aumenta a Celeridade em 10% e a Velocidade em 30% ทุก Stack เพิ่ม Haste 10% และ SPD 30% Setiap tumpuk meningkatkan 10% Haste dan 30% Move Speed \| 이동속도 30% 증가 Chaque cumul augmente la célérité de 10 % et la vitesse de 30 % \| Jeder Stapel erhöht das Tempo um 10 % und die Geschwindigkeit um 30 % Cada acumulación aumenta la presteza en un 10 % y la velocidad en un 30 % |
| buffs:833541 | 5× Charge | buffs | description-grounded-needs-runtime-proof | elementalDamage, timingCadence |  |
