# Modifier Value Proof Gap Audit

Status audited: `needs-value-ramp-model`

Total rows: 2

## Category Counts

| Category | Count |
| --- | --- |
| buffs | 1 |
| talents | 1 |


## Wording Buckets

| Bucket | Count |
| --- | --- |
| attack-wording | 1 |
| lucky-wording | 1 |


## Category / Wording

| Category / Bucket | Count |
| --- | --- |
| buffs / attack-wording | 1 |
| talents / lucky-wording | 1 |


## Formula Readiness

| Readiness | Count |
| --- | --- |
| description-grounded-needs-runtime-proof | 1 |
| formula-replay-required | 1 |


## Scope Value Gaps

| Component / Missing Scope | Count |
| --- | --- |
| generic-damage:all | 1 |


## Owner/Party Scope Value Gaps

_None._


## Owner/Party Scope Value Gaps By Category

_None._


## Owner/Party Scope Value Gap Examples

_None._


## Scope Value Gaps By Category

| Category / Component / Scope | Count |
| --- | --- |
| talents / generic-damage:all | 1 |


## Scope Value Gap Examples

| Key | Label | Category | Component | Scopes | Candidate Scopes | Missing | Values | Sources | Sample |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| talents:163 | Enhanced Thunderstrike | talents | generic-damage | all, owner, party | owner, party | all | owner:20%; party:1% | probing-reports\TalentEffectModelProbe.json, TalentSpecOwnership.json | Increases the DMG dealt by Thunderstrike by 20% \| Each 1% Luck grants Thunderstrike 1% more DMG dealt \| Setiap 1% Luck memberikan 1% Thunderstrike DMG Boost |


## Examples

| Key | Label | Category | Readiness | Zones | Sample |
| --- | --- | --- | --- | --- | --- |
| buffs:2205221 | Combat Expertise | buffs | description-grounded-needs-runtime-proof | baseAttackTerm | ATK +2 \| 5% ทุก 10 วินาที สูงสุด +10% ATK +2,5% setiap 10 detik \| Combat Expertise Combat Expertise 战斗专长 戰鬥專長 戦闘熟練 전투 특화 Expertise de combat Kampfexpertise Pericia de Combate Perícia de Combate Combat Expertise Combat Expertise 战斗专长_属性 ATK +2 |
| talents:163 | Enhanced Thunderstrike | talents | formula-replay-required | elementalDamage, generalDamage, luckyEnhancement | Increases the DMG dealt by Thunderstrike by 20% \| Each 1% Luck grants Thunderstrike 1% more DMG dealt \| Setiap 1% Luck memberikan 1% Thunderstrike DMG Boost |
