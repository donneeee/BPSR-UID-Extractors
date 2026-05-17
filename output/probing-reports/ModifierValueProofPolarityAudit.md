# Modifier Value Proof Gap Audit

Status audited: `needs-value-polarity`

Total rows: 5

## Category Counts

| Category | Count |
| --- | --- |
| buffs | 4 |
| seasonal-talents | 1 |


## Wording Buckets

| Bucket | Count |
| --- | --- |
| attack-wording | 4 |
| generic-damage-wording | 1 |


## Category / Wording

| Category / Bucket | Count |
| --- | --- |
| buffs / attack-wording | 4 |
| seasonal-talents / generic-damage-wording | 1 |


## Formula Readiness

| Readiness | Count |
| --- | --- |
| description-grounded-needs-runtime-proof | 4 |
| formula-replay-required | 1 |


## Scope Value Gaps

| Component / Missing Scope | Count |
| --- | --- |
| final-damage:all | 1 |


## Owner/Party Scope Value Gaps

_None._


## Owner/Party Scope Value Gaps By Category

_None._


## Owner/Party Scope Value Gap Examples

_None._


## Scope Value Gaps By Category

| Category / Component / Scope | Count |
| --- | --- |
| seasonal-talents / final-damage:all | 1 |


## Scope Value Gap Examples

| Key | Label | Category | Component | Scopes | Candidate Scopes | Missing | Values | Sources | Sample |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| seasonal-talents:181 | Dreamscape Transfer | seasonal-talents | final-damage | all, owner, party | owner, party | all | owner:-40%; party:+40% | probing-reports\SeasonRogueEntryProbe.json | Final damage dealt -40% \| DMG akhir yang diakibatkan Battle Fantasy +40% \| Final damage dealt by Battle Imagine +40% Final damage dealt -40% |


## Examples

| Key | Label | Category | Readiness | Zones | Sample |
| --- | --- | --- | --- | --- | --- |
| buffs:700031 | ATK down | buffs | description-grounded-needs-runtime-proof | baseAttackTerm | ATQ -50% ATK ลดลง 50% ATK berkurang 50% \| ATQ -50% ATK ลดลง 50% ATK berkurang 50% ATK -50% 攻击力下降50% 攻擊力下降50% 攻撃力-50% 공격력 50% 감소 Attaque -50 % ANG −50 % ATQ -50 % \| ATK down ATK down 攻击力降低 攻擊力降低 攻撃力低下 공격력 감소 Baisse d'attaque ANG-Verringerung ATQ reducido ATQ Reduzido ATK ลดลง Attack Down S1虚蚀残影降攻击力 ATK -50% ATK -50% ATK -50% 攻击力下降50% 攻擊力下降50%... |
| buffs:881758 | Rock Serpents' Resent | buffs | description-grounded-needs-runtime-proof | baseAttackTerm | ATK -30% per stack \| ลดพลังโจมตีลง 30% ต่อชั้น Setiap lantai mengurangi 30% ATK \| ANG −30 % pro Stapel |
| buffs:882342 | Weak | buffs | description-grounded-needs-runtime-proof | baseAttackTerm | ATQ -50% ATK ลดลง 50% Attack Down 50% \| ATQ -50% ATK ลดลง 50% Attack Down 50% ATK -50% 攻击力降低50% 攻擊力降低50% 攻撃力-50% 공격력 50% 감소 Attaque -50 % ANG −50 % ATQ -50 % \| Weak Weak 削弱 削弱 弱体化 약화 Faiblesse Schwach Débil Fraco อ่อนแอ Weaken 光灵-减攻击力50% ATK -50% ATK -50% ATK -50% 攻击力降低50% 攻擊力降低50% 攻撃力-50% 공격력 50% 감소 Attaque -50 % ANG −50 % ATQ -50 % |
| buffs:995248 | ATK -10% | buffs | description-grounded-needs-runtime-proof | baseAttackTerm | ATK -10% ATK -10% 攻击力降低10% 攻擊力降低10% 攻撃力-10% 공격력 10% 감소 Attaque -10 % ANG −10 % ATQ -10 % ATQ -10% ATK ลดลง 10% Attack Down 10% 攻击力降低10%-每秒检测 \| 10% \| -10% |
| seasonal-talents:181 | Dreamscape Transfer | seasonal-talents | formula-replay-required | finalDamage, generalDamage, seasonDamage, skillMultiplier | Final damage dealt -40% \| DMG akhir yang diakibatkan Battle Fantasy +40% \| Final damage dealt by Battle Imagine +40% Final damage dealt -40% |
