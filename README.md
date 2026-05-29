# BPSR UID Extractors

This is a standalone toolkit for rebuilding Blue Protocol Star Resonance lookup JSONs from the installed game files. The scripts decode package data, CTB tables, and game localization byte tables, then write generated artifacts to `output`.

## What This Section Does

The generator section answers questions like:

- What item id maps to which localized item name?
- What buff id maps to which game buff name?
- What scene or monster id is shown in each supported locale?
- Which skill, damage, recount, or Aoyi-icon ids can be proven from current game tables?
- Which talents, passives, seasonal Phantom Factors, and effect-source buffs can be tied to modifier attribution?

Each script keeps provenance in the output where the game files expose it, such as source table, source offset, linked ids, name/description ids, and locale-keyed `Names`/`Notes` objects.

## Data Flow

1. Locate the game package files from `gamepath.json` or `--game`.
2. Read `meta.pkg` to find hashed package entries such as `SceneTable.ctb`, `SkillTable.ctb`, or `english.bytes`.
3. Read `m*.pkg` package payloads and decode CTB rows or localization byte tables.
4. Carry icon fields forward only when a direct game table string or generated game-derived bridge proves the relationship.
5. Write generated JSON under `output` unless `--out` or `--output-dir` points elsewhere.

Normal generators read game package data only. A generator may read another generated output when that file is an explicit game-derived dependency, such as `ItemDescriptionSources.gen` reading generated item names to attach static item/gear descriptions, `DamageAttrIdName.gen` reading `BuffName.json`, `ConsumableBuffBridge.gen` reading generated BuffName and item rows to label game-derived item-use relationships, or `EffectSources.gen` reading generated BuffName, item, monster, consumable-bridge, skill-breakdown, and probe outputs.

## Maintenance Rule

When adding or materially changing an extractor generator, update this README in the same change. At minimum, keep the script list, dependency order, output descriptions, and current boundaries accurate. If the generator creates icon-bearing JSON, place it before `ExtractIcons.gen` in `GenerateAll.gen` so icon discovery can see the new references.

## Folder Layout

- `gamepath.json`: launcher preset, output folder, and probe folder settings.
- `gamepath.local.json`: optional private override for a machine-specific game path.
- `generator-common.mjs`: shared package, CTB, localization, JSON, and path helpers.
- `effect-semantics.cjs`: shared description cleanup, value extraction, activation text normalization, and ICD/lockout semantic helpers used by production and probe generators.
- `talent-model-common.cjs`: shared talent/passive CTB constants, class/spec buckets, localized text lookup, opcode-3/6 effect-record decoding, and collection helpers used by talent/spec evidence generators.
- `modifier-table-common.cjs`: shared stable source-rule id and compact table helpers used by the modifier display, description, recount, and classification generators.
- `*.gen`: individual generator entrypoints.
- `GenerateAll.gen`: runs the current generators in dependency order.
- `ExtractIcons.gen`: resolves icon references to game texture or sprite-atlas assets and writes PNG work manifests.
- `ExportIconPngs.gen`: decodes those game assets to PNG using temporary bundle files that are removed after export.
- `ProbeSources.gen`: compares external JSON samples against the current generated outputs.
- `FormulaSurfaceProbe.gen`: scans CTB-like package entries, localization byte tables, generated outputs, and existing probe reports for damage-formula-adjacent surfaces.
- `EffectDescriptionSurfaceProbe.gen`: scans decodable CTB string pools, all loaded game localization strings, and generated parser/probe strings for effect-bearing descriptions and broad predicate tags.
- `EffectPredicateAudit.gen`: scans generated modifier/source outputs for effect rows that need extra runtime predicates, such as elite-or-stronger targets, companion/summon-only damage, timed windows, stack states, defensive direction, or missing talent/module description text.
- `EffectComponentWorklist.gen`: classifies broad effect-description and predicate-audit rows into component, behavior, predicate, and required-runtime-evidence work buckets.
- `ItemDescriptionSources.gen`: writes compact static item/gear descriptions from `ItemTable.ctb`, item identity rows, and game localization tables into `ItemDescriptionSources.json`. It deliberately does not claim equipped/rolled gear statlines, which are packet/runtime-derived.
- `LinkTextDescriptions.gen`: writes localized client linktext tooltip descriptions from `CTB:2325832469`, resolving description references through `CTB:4192598123`. These are game-file tooltip rows such as Mirage Dream's per-stack ATK text, used by `EffectSources.gen` before formula-readiness classification.
- `ModifierObservedUidBridge.gen`: writes a compact bridge for observed modifier UIDs that are not direct source rows. It consumes the unresolved modifier UID audit plus generated BuffName/predicate/worklist evidence, keeps prior validated mappings stable across runs, aliases observed helper/child ids to proven parent ids, ignores helper/internal ids only when the parent or name evidence is strong, and promotes only high-confidence localized observed sources such as `Power of Unity` or module buffs that still need stat-state proof.
- `ModifierDisplayTable.gen`: writes post-reduction display metadata from `ModifierSourceIndex.json` into `ModifierDisplayTable.json`, keyed by stable source-rule ids. Runtime reports join this table only after recount filtering to attach names, icons, and Battle Imagine display-owner hints.
- `ModifierDescriptions.gen`: writes lazy display descriptions from `ModifierSourceIndex.json` plus RecountTable/SkillCooldowns owner-skill bridges into `ModifierDescriptions.json`, keyed by stable source-rule ids with source-id pointers. Runtime reports fetch hover text only after final rows are reduced.
- `ModifierRecountTable.gen`: compiles `ModifierSourceIndex.json` into a compact UID/rule report gate with de-duplicated source rules, reportable/debug/ignored buff ids, and row-policy stats. Parser history reports use it to reduce observed modifier buckets before localization and rendering. It deliberately keeps display names, icons, display-owner hints, descriptions, and rich relationship edges out of the hot table, and keeps broad formula/timing evidence in debug unless the source has a static damage/recount map or is a direct runtime source such as a consumable, Battle Imagine buff/debuff, active-skill buff, set effect, or proven proc. The same generator also writes `ModifierRelationshipTable.json`, a sidecar keyed by source-rule id with typed UID relationship edges for audit/formula work.
- `ModifierContributionTable.gen`: classifies each recount source rule into exact produced damage, formula-replay candidate, timing-only, defensive, or overlap-only contribution mode. It writes the full audit table plus compact `ModifierContributionRuntime.json`; parser history reports use the runtime table after recount/display/classification joins so separately emitted damage rows can carry factual contribution totals while formula/timing rows remain overlap/readiness evidence with required-evidence blockers. Replay-required rows also carry compact typed component value hints when the generated effect text has numeric values; two percentage values are treated as owner/party splits with the larger value for the owner/caster and the smaller value for party recipients.
- `LuckyStrikeRuntime.gen`: rebuilds full `LuckyStrikeTable.json` and compact parser-facing `LuckyStrikeRuntime.json` from the modifier source/recount/contribution tables and `TalentSpecOwnership.json`. This table keeps exact Lucky Strike produced damage, Lucky Strike chance/damage/multiplier/final-damage terms, Luck stat scaling, Luck entry acquisition, and Luck entry damage scaling separate so global Luck behavior is not inferred from a single class/spec sample. Two percentage values are treated as owner/party only when the text is not a Luck conversion such as `Every 1% Luck grants 0.5% ...`.
- `ModifierExtractionInventory.gen`: writes a dev-only extraction coverage report for rebuilding modifier grounding. It scans existing generated outputs by category and reports description, value, stack, max-stack/threshold, UID relationship, runtime evidence, provenance, and packet-only equipment gaps without changing parser/runtime behavior.
- `SeasonEffectDescriptions.gen`: writes `SeasonEffectDescriptions.json` from direct `CTB:4192598123` rows where field `+0` is the buff/effect UID and field `+4` is the localized UI description id. This promotes only proven UI-page description text into the extractor layer; runtime activation, stack state, owner/party scope, and exact contribution math remain separate proof layers.
- `ModifierDescriptionCatalogs.gen`: writes category-separated description/value catalogs for buffs, skills, talents, seasonal talents, factors, items, Battle Imagines, and linktext tooltips. These catalogs normalize localized text, clean text, text-derived numeric hints, owner/party split candidates, stacking/max-stack/target-stack evidence, UID relationships, and provenance while keeping exact contribution math and equipped gear statlines out of the runtime parser path.
- `ModifierFormulaTermTable.gen`: joins the category description catalogs with `ModifierContributionTable.json` into a UID-keyed formula/value/proof grounding table. It also promotes conservative description clauses such as damage dealt, ATK, crit, elemental, final, season, and timing/resource text into scoped component value hints. It writes `ModifierFormulaTermTable.json`, compact `ModifierFormulaTermRuntime.json`, and a Markdown coverage report that names each formula bucket, scope kind, stack policy, value resolution, and runtime proof requirement without changing packet-derived DPS truth.
- `ModifierValueProofTable.gen`: refines `ModifierFormulaTermTable.json` into deterministic value-selection/proof metadata. It writes full and compact value-proof tables plus a Markdown report, separating ready values from owner/party scope requirements, tier/level selection, stack selectors, probability expected-value model contracts, static UID/grade value ladders, runtime-selected value ladders, ambiguous scoped values, duplicate-locale value rows, and missing component mappings.
- `TalentSpecOwnership.gen`: classifies talent/passive rows by class bucket and conservative spec ownership evidence so parser filtering can distinguish class-wide, spec-exclusive, spec-interaction, and unresolved rows without one-off per-spec blacklists.
- `Probing Sources/`: optional audit input folder for external JSON samples.
- `ui/`: local generator UI served by `npm run ui`.
- `output/`: generated JSON artifacts and probe reports.

## Probing Sources

`Probing Sources` is for optional samples from any external tool. JSON samples can be compared against generated outputs. Icon probes can go in `Probing Sources/images` or `Probing Sources/text`, and additional image or text probe folders can be listed in `gamepath.json` when you intentionally want to audit them. By default, icon generation uses the generated JSON outputs and current game files only.

Run:

```powershell
node .\ProbeSources.gen --dry-run
node .\ProbeSources.gen
```

The probe report is written to `output/probing-reports/ProbeSourcesReport.json`. It records matched files, output coverage, id overlap, sample-only ids, and generated-only ids.

Probe samples never become output data. If a probe exposes a useful missing id or icon, add or improve a direct game-file bridge, then regenerate from the game files.

## Formula Surface Probe

`FormulaSurfaceProbe.gen` is a broad audit tool for parser research. It scans every CTB-like package entry it can decode, row numeric fields, nested int-pool arrays, CTB strings, localization byte tables, generated parser outputs, and existing probe reports for damage formula surfaces.

Run:

```powershell
npm run probe:formula
node .\FormulaSurfaceProbe.gen --max-samples 80
```

The report is written to `output/probing-reports/FormulaSurfaceProbe.json` and `output/probing-reports/FormulaSurfaceProbe.md`. Treat the Markdown report as the community-shareable summary. It separates exact emitted child damage rows, source-only factor evidence, parameterized Phantom Factor descriptions, talent/passive evidence, ID-construction formula hits, and candidate numeric formula tables. A formula-like text hit is not proof of runtime contribution math until the table schema, active source state, target skill scope, stacking rules, and base total semantics are all validated.

## Scripts

- `ItemNames.gen`: rebuilds `itemnames.json` by scanning item table families, resolving game name ids through the language-byte localization tables, using package string fallback when the game lacks a localization hit, and attaching direct `ItemTable.ctb` icon paths when present.
- `ItemDescriptionSources.gen`: rebuilds `ItemDescriptionSources.json` from `itemnames.json`, `ItemTable.ctb`, item identity rows, and game localization tables. It carries localized static item/gear descriptions and value text for later category catalogs while keeping actual equipped gear statlines packet/runtime-only.
- `BuffNames.gen`: rebuilds `BuffName.json` from BuffTable rows and BuffTable name ids. It can also recover unambiguous secondary names and non-generic icon paths through direct module-effect table bridges.
- `DamageAttrIdName.gen`: rebuilds `DamageAttrIdName.json` from `DamageAttrTable.ctb`. It prefers direct DamageAttr design names, then direct linked bridges through BuffName, SkillEffect, SkillTable, and SkillFightLevel data, carrying linked skill/buff names and icon paths where proven.
- `RecountTable.gen`: rebuilds `RecountTable.json` from direct `RecountTable.ctb` rows and the packed damage-id pool, including localized recount labels, icon paths inherited from generated DamageAttr rows, strict current-game talent/passive name bridges from `CTB:3345237628`, direct talent-buff formula bridges when localized names differ, and strict base-skill ownership bridges from `SkillTable.ctb`.
- `SkillAoyiIcons.gen`: rebuilds `skill_aoyi_icons.json` from `SkillAoyiTable.ctb` and proven `SkillTable.ctb` adjacent Aoyi icon paths.
- `MonsterNames.gen`: rebuilds `monsternames.json` from the monster table and game localization files. If the game localization for a monster is only replacement/question-mark text, the row keeps its id and `MonsterType` but receives an explicit localized `Unknown Monster <id>` placeholder instead of leaking corrupt text.
- `SceneNames.gen`: rebuilds `scenenames.json` from the scene table and game localization files.
- `SkillNames.gen`: rebuilds `skillnames.json` from direct game-derived skill, recount, DamageAttr, SkillEffect, SkillFightLevel, SkillTable, TempAttr, and talent/passive name bridges. It carries localized `Notes` from direct `SkillTable.ctb` description ids, proven talent/passive description ids, and the runtime buff-to-description bridge `CTB:4192598123` when the talent/passive row itself has an empty description id, preserving `DescriptionIds`/`NoteSources` provenance. SkillEffect and SkillFightLevel rows can inherit localized names, icons, and notes from their proven parent `SkillTable.ctb` row. Shared `effect-semantics.cjs` helpers tag descriptions that state a player cannot be affected by the same type of effect again with `EffectTags: ["icd-lockout"]` plus `IcdLockoutSeconds` when the lockout duration is present, keeping internal-cooldown semantics global instead of one-off. Monster-owner bridges ignore localization values that are only question-mark/replacement placeholders, so corrupt monster names do not become player-facing skill detail labels.
- `SkillCooldowns.gen`: rebuilds `SkillCooldowns.json` from direct `SkillFightLevelTable.ctb` PvE cooldown rows, generated `skillnames.json` labels/descriptions/ICD tags, and parser logic `SkillEffectTable.json`/`TempAttrTable.json` cooldown metadata. It indexes base cooldowns by skill level and base skill id, marks `no CD reduce` skill tags, carries same-type-effect lockout seconds, and lists cooldown temp-attr rules for flat reduction, percent reduction, and cooldown acceleration. This gives the parser a generated catalog for Tina-style timing attribution without hard-coding individual cooldown accelerators.
- `ClassLabels.gen`: rebuilds class/spec label data from generated skill and class evidence.
- `SkillBreakdownDetails.gen`: rebuilds `SkillBreakdownDetails.json` from generated direct-game `DamageAttrIdName.json` and `RecountTable.json`, classifying runtime damage rows as base skill hits, procs, talents, buffs, Lucky Strike, set effects, or Imagine/Arcane rows. It preserves both the Recount owner skill/talent and the underlying DamageAttr/SkillFight source, so reused hit rows can be displayed under the correct parent while still keeping the lower-level source evidence. If a Recount-owned damage row reuses another skill's hit formula, the output keeps the Recount owner as the display name and records the reused underlying source separately.
- `SeasonTalentNodeProbe.gen`: probes seasonal talent-node rows and writes source evidence used by modifier generators.
- `SeasonEffectDescriptions.gen`: rebuilds `SeasonEffectDescriptions.json` from direct `CTB:4192598123` buff/effect UID to localized description-id rows. The output is consumed by `ModifierDescriptionCatalogs.gen` as direct buff/effect UI-page description evidence, including set/season effect rows that would otherwise remain name-only.
- `SeasonRogueEntryProbe.gen`: probes seasonal rogue-entry rows and writes source evidence used by modifier generators.
- `SeasonPhantomFactorProbe.gen`: probes seasonal Phantom Factor rows, localized descriptions, icon paths, buff ids, and affected damage/recount links.
- `ClassSpecSkillModelProbe.gen`: probes direct class/spec/base-skill/talent evidence from game files. It shares the `talent-model-common.cjs` talent/passive CTB decoder with `TalentEffectModelProbe.gen`, but keeps class/spec reporting separate so source-table entity types are not collapsed by name alone.
- `TalentEffectModelProbe.gen`: probes talent/effect model rows used to connect talent/passive sources to generated parser rows. It uses the shared `talent-model-common.cjs` opcode-3/6 effect-record decoder, then layers on description, linktext, Recount, and seasonal probe evidence. For talent/passive rows with opcode-3 runtime buff records but no direct description id, it resolves `CTB:4192598123` buff-to-description references and carries the selected localized description plus source buff id into the probe output.
- `TalentSpecOwnership.gen`: writes `output/TalentSpecOwnership.json` and `output/TalentSpecOwnership.md` from `TalentEffectModelProbe.json`, `ClassSpecSkillModelProbe.json`, and `class-labels.json`. It uses the stable talent-id class buckets centralized in `talent-model-common.cjs`, spec selector rows, localized description link text, styled description terms, and opcode-6 skill-pair evidence to classify each talent/passive as `spec-selector`, `spec-exclusive`, `spec-interaction`, `spec-leaning`, `ambiguous`, or `class-wide-candidate`. This is ownership metadata only: live selected-talent/passive state remains authoritative, and only high-confidence spec-exclusive rows are marked `hardFilterEligible`.
- `SeasonPhantomFactors.gen`: rebuilds `SeasonPhantomFactors.json` from `SeasonPhantomFactorProbe.json` and generated breakdown rows, promoting seasonal Phantom Factor buff ids, icon paths, grade evidence, and affected damage/recount links into parser-shaped production data. It uses shared `effect-semantics.cjs` value extraction so factor values stay consistent with broader effect-source generation.
- `ConsumableBuffBridge.gen`: rebuilds `ConsumableBuffBridge.json` from `CTB:1485987280`, `ItemTable.ctb`, generated `itemnames.json`, and generated `BuffName.json`. It maps every food item-use row to the runtime food buff effect row. Shared food buff ids are labeled by effect family, with exact dish names preserved only as candidate evidence because active-buff packets expose the effect buff, not the consumed item. Compound food effects are split into `effectComponents`; for example `ATK + DMG to Elites` becomes a global ATK component plus a target-gated elite damage component.
- `EffectSources.gen`: rebuilds `EffectSources.json` from generated BuffName, item, monster, skill breakdown, consumable bridge, linktext tooltip, and probe outputs, promoting talents, passives, Battle Imagine-owned buff sources, consumable food/potion buff sources, BuffName-linked mechanic sources, seasonal nodes, rogue-entry buffs, and Phantom Factors into a conservative modifier/source evidence index for parser attribution. Runtime reports may still apply post-recount display decoration from BuffName owner metadata, so factual source evidence can remain stable even when the best player-facing label is resolved later. Unresolved runtime Battle Imagine buff/debuff rows in the `2110xxx` family are still promoted when they have localized game names and buff/debuff icon evidence, so active sources such as `Highland Blood` are available while lockout rows such as `Element Stasis`, `Time Stasis`, `Exhausted:*`, or `Weakened:* Wish/Sealed` classify as `imagine-icd` timing-only sources. Generic item-name contains matches are not enough to classify a design-only runtime buff as a Battle Imagine source, so class/runtime rows with broad owner tokens such as bow remain generic runtime buffs instead of being attached to an unrelated Imagine. BuffName rows that exactly match a localized Recount skill label are also promoted as active skill buff windows, covering state buffs such as `Galeform` without hard-coded ids. Food buff item names are candidate evidence from `ConsumableBuffBridge.json` because many dishes share one runtime effect buff, while potion item names are still used only when BuffName and itemnames share the proven final-three-digit id family. Consumable `effectComponents` are carried forward so parser attribution can apply global stat, target-gated elite damage, and incoming elite-reduction predicates separately. Shared `effect-semantics.cjs` helpers keep value extraction, activation alias normalization, and ICD/lockout detection consistent with `SkillNames.gen` and `SeasonPhantomFactors.gen`. Description inference now distinguishes resistance break/down, armor/defense break/down, armor/defense-scaling damage, and super-armor damage so target mitigation can be estimated separately from defensive self stats or produced damage rows. The generator now also writes an `attributionModel` on each source, mapping known components to `DamageFormula.json` term ids/contribution groups and labeling rows as formula candidates, uptime-only evidence, proc damage, timing-only, defensive/non-damage, or still needing mapping. It enriches `<linktext=...>` descriptions from `LinkTextDescriptions.json` before formula classification, so client tooltip rows such as Mirage Dream's per-stack ATK values are available without runtime CTB scans. It treats `Basic Attack`, `Normal Attack`, `Special Attack`, and similar skill-family phrases as activation/mechanic text instead of ATK-stat evidence unless a real `ATK` token or attack-stat phrase is present. It tags description-level same-type-effect lockouts as `icd-lockout` evidence without forcing the skill's active buff/damage semantics to become timing-only. Monster names are fallback owner evidence only when another generated bridge proves the buff/source relationship. `TalentEffectModelProbe` descriptions, including `CTB:4192598123` buff-description references, are merged into existing generated sources so late probe evidence can enrich sources created earlier in the pipeline. `TalentSpecOwnership.json` is attached to `talent:*` sources as conservative class/spec ownership metadata, including parser policy hints for high-confidence spec-exclusive rows. `ClassSpecSkillModelProbe.sharedLocalizedNames` is used as a runtime alias bridge, so child buff rows such as `Focused Concentration` can resolve back to their parent talent without implying formula semantics. It also derives activation aliases from shared base-skill/buff groups plus talent descriptions or conservative name-stem matches, so buff windows such as `Focus` can activate related passive rows like `Focused Shot` and `Focused Concentration` without hard-coded ID one-offs.
  Battle Imagine source-config owner resolution also reads `skill_aoyi_icons.json`, de-duplicates duplicate aoyi records, and scans design-only `2110xxx` source-config rows for unique aoyi owner tokens. When a localized runtime buff immediately follows a matched source-config row, the generated source is owner-qualified and indexed by both ids; for example `2110064` (`战斧逻辑`) plus `2110065` (`Fiery Battle Will`) becomes `Arcane! Blazing Axe - Fiery Battle Will`.
  Design-only `buff-source:*` rows are post-processed before export: if the same runtime buff id has a localized generated sibling, such as a Phantom Factor or talent, the design-only row is collapsed into that source; otherwise a unique localized parent Recount row can supply the display label. Exact owner plus known design-suffix rows can receive conservative English runtime names, such as `Rorola - Player Monitor`, while broad class/runtime rows can be promoted as generic runtime buffs when the design token and suffix are understood. Rows with no proven localized sibling, unique Recount parent, or conservative design-token fallback keep their design evidence but receive localized `Unmapped Buff <id>` placeholders across supported app locales instead of leaking raw CN labels into the UI.
- `ModifierSourceIndex.gen`: rebuilds `ModifierSourceIndex.json` from `EffectSources.json` and `SeasonPhantomFactors.json`. This is the shared generated source bridge used to derive smaller parser tables: it keeps row-candidate metadata, target damage/recount ids, contribution/status tags, ignored/debug policy, display evidence, and description evidence. Runtime modifier reports should use the derived recount, display, classification, and description tables instead of loading the full source graph or inventing raw fallback rows from every observed bucket id.
- `ModifierObservedUidBridge.gen`: rebuilds `ModifierObservedUidBridge.json` from the app's unresolved modifier UID audit and generated game-file evidence. This table is a bridge, not a display table: it stores UID aliases, helper/internal ignores, and a small set of promoted observed source ids so recount can resolve observed modifier buckets without runtime scans or one-off code patches.
- `ModifierDisplayTable.gen`: rebuilds `ModifierDisplayTable.json` from `ModifierSourceIndex.json` and `ModifierObservedUidBridge.json`. This is the post-recount display table: it stores source names, candidate localized names, icon paths, and display-owner hints under stable source-rule ids, plus source-id-to-rule-id pointers. The app joins it while preparing the modifier catalog, then applies encounter-local provider labels and Battle Imagine owner replacement after the factual row set is known.
- `ModifierDescriptions.gen`: rebuilds `ModifierDescriptions.json` from `ModifierSourceIndex.json`, `RecountTable.json`, and `SkillCooldowns.json`. This is the lazy display table for modifier hover descriptions. Direct source descriptions are used first; Battle Imagine/proc rows without direct text can inherit their owner skill description through target recount ids or owner-name prefixes. Description text is stored once under stable source-rule ids with source-id pointers, so it does not bloat the hot reportable-id gate or worker payload.
- `ModifierRecountTable.gen`: rebuilds `ModifierRecountTable.json` from `ModifierSourceIndex.json` plus `ModifierObservedUidBridge.json` and writes `ModifierRelationshipTable.json` as a sidecar. The recount table is the runtime gate: it stores de-duplicated source rules under stable ids, maps buff ids to those rules, and exports reportable/debug/ignored id sets so the parser can drop non-reportable modifier buckets before row localization. The bridge aliases observed child/source-config ids after sibling aliases converge, and child aliases of ignored helper parents are ignored with the parent. The relationship sidecar keeps typed UID edges such as observed buff, runtime buff alias, source entity, target damage/recount row, activation alias, owner/source evidence, owner/spec evidence, and formula-term scope. The source index may preserve broad candidate evidence for later formula/display work; the hot recount table is the stricter user-facing report contract and deliberately omits names, icons, display-owner hints, description text, and rich relationship edges.
- `ModifierClassificationTable.gen`: rebuilds `ModifierClassificationTable.json` and compact parser-facing `ModifierClassificationRuntime.json` from `ModifierRecountTable.json`, `ModifierSourceIndex.json`, `EffectSources.json`, and `TalentSpecOwnership.json`. This is the UID-first master classification layer for modifier reports: it indexes source rules by buff id, source id, source entity id, class, and spec, then tags each source as offensive, defensive, supportive, utility, or unknown with report domains for damage/tanked/healing/support. High-confidence spec-exclusive talent rows carry generated allowed/blacklisted spec ids so parser filtering can be table-driven instead of one-off. The runtime file intentionally keeps only rule id, report role/domain, row model, effect kind, classification tags, and compact ownership to avoid loading the full audit table in the app.
- `ModifierContributionTable.gen`: rebuilds full `ModifierContributionTable.json` and compact parser-facing `ModifierContributionRuntime.json` from `ModifierRecountTable.json`, `ModifierClassificationTable.json`, and parser `DamageFormula.json`. This is the contribution-readiness layer: exact produced-damage/proc rows with static target maps are eligible for factual contribution totals from emitted hit buckets, formula rows are marked replay-required with formula terms and runtime blockers, timing rows stay cooldown/resource readiness, defensive rows stay out of damage contribution totals, and remaining report rows are overlap-only. The runtime file intentionally keeps only rule id, source id, contribution mode/tier/confidence for every row, plus formula terms, contribution groups, predicate tags, required runtime evidence, blockers, compact component value hints, and short notes only for replay-required rows, so the app does not import the full audit table. Component value hints are UID-attached readiness evidence, not final net-added damage; the worker resolves owner versus party values against encounter-local source actors before a formula row can advance toward replay math.
- `LuckyStrikeRuntime.gen`: rebuilds `LuckyStrikeTable.json` and `LuckyStrikeRuntime.json` from `EffectSources.json`, `ModifierSourceIndex.json`, `ModifierRecountTable.json`, `ModifierContributionRuntime.json`, and `TalentSpecOwnership.json`. It is the global Luck/Lucky bridge for formula proof: exact Lucky Strike damage rows stay packet-exact, Lucky Strike expected-value terms stay separate from Luck stat and Luck-entry terms, and class/spec ownership remains UID-attached so later replay math can apply only to eligible sources.
- `ModifierExtractionInventory.gen`: writes `output/probing-reports/ModifierExtractionInventory.json` and `.md`. This is the extraction restart report for modifier work: it measures existing generated data by category before category-specific description/value tables are promoted. It intentionally treats actual equipment statlines as packet/runtime-derived rather than game-file-derived, and treats stack/max-stack/target-stack/value text as evidence that still needs runtime stack/window proof.
- `ModifierDescriptionCatalogs.gen`: writes `BuffDescriptions.json`, `SkillDescriptions.json`, `TalentDescriptions.json`, `SeasonalTalentDescriptions.json`, `FactorDescriptions.json`, `ItemDescriptions.json`, `BattleImagineDescriptions.json`, `LinkTextTooltipDescriptions.json`, and `ModifierDescriptionCatalogs.json`, plus `output/probing-reports/ModifierDescriptionCatalogs.md`. This is the category-description grounding layer for rebuilding modifiers from the ground up: it keeps localization/text/value extraction separate from the compact recount/runtime gates and marks owner/party split, stack, max-stack, target-stack, and gear-stat evidence as needing runtime proof before exact damage replay.
- `ModifierFormulaTermTable.gen`: writes `ModifierFormulaTermTable.json`, `ModifierFormulaTermRuntime.json`, and `output/probing-reports/ModifierFormulaTermTable.md` from the category description catalogs plus `ModifierContributionTable.json`. This is the strict value/term bridge: each UID gets formula-zone buckets, source-rule links, source-rule and description-clause scoped value hints, stack policy, owner/party/target ambiguity, and required runtime proof before a row can advance into exact replay math.
- `ModifierValueProofTable.gen`: writes `ModifierValueProofTable.json`, `ModifierValueProofRuntime.json`, and `output/probing-reports/ModifierValueProofTable.md` from `ModifierFormulaTermTable.json`. This is the value-selection gate for future replay math: deterministic scoped values are selected where possible, duplicate locale rows with identical values are collapsed, season-damage grade ladders can be selected from source UID/grade evidence, owner/party values stay runtime-scoped, probability terms expose crit/lucky expected-value model contracts plus selectors, and tier/level/stack/value-ladder-sensitive values expose runtime selectors until runtime state can pick the active value.
- `EffectDescriptionSurfaceProbe.gen`: writes `output/probing-reports/EffectDescriptionSurfaceProbe.json` and `.md`. It scans decodable CTB string pools, all loaded game localization strings, and generated parser/probe strings for effect-bearing text, then tags broad semantics such as stat/attribute components, elite predicates, timed windows, stack states, focus windows, companion/summon sources, and compound rows that must be split before attribution. Direct CTB string-pool hits are intentionally broad and can include quest/shop/meta text; use them as discovery evidence until a structured row bridge proves parser semantics.
- `EffectPredicateAudit.gen`: writes `output/probing-reports/EffectPredicateAudit.json` and `.md`. It flags predicate-sensitive rows across `EffectSources.json`, `SeasonPhantomFactors.json`, `ConsumableBuffBridge.json`, module-like BuffName rows, and talent/passive probe rows. Use this as a checklist before parser attribution changes: rows tagged `target.elite-or-stronger` need target monster type, rows tagged `source.companion-or-summon` need original attacker/top-summoner evidence, and rows tagged `needs.description-extraction` or `needs.module-description-extraction` need richer game-file description extraction before exact semantics are trusted.
- `EffectComponentWorklist.gen`: writes `output/probing-reports/EffectComponentWorklist.json` and `.md`. It consumes `EffectDescriptionSurfaceProbe.json` and `EffectPredicateAudit.json`, then groups rows into effect component buckets such as offense stats, damage modifiers, damage reduction, healing/shields, proc damage, cooldown/resource effects, timed windows, stack/ramp effects, target-rank predicates, companion/summon source predicates, party/external predicates, target debuffs, stat-conversion chains, and required parser evidence. It is a promotion worklist only; it does not write production attribution data.
- `ExtractIcons.gen`: scans generated JSON files plus configured probe folders for icon-like references, resolves texture and sprite-atlas bridges through the game catalogs, and writes manifests under `output/icons`.
- `ExportIconPngs.gen`: reads icon manifests, temporarily loads the required game bundles, exports PNG files under `output/icons/<group>/`, verifies probe-image pixel matches when available, and removes the temporary bundle files.
- `ExportParserAssets.gen`: stages a parser-shaped image tree under `output/parser-assets/static/images` and writes `asset-path-map.json` with the game-file-derived parser image path for each exported asset.
- `GenerateAll.gen`: runs the generator set in dependency order.
- `ProbeSources.gen`: audits external JSON samples against generated outputs.
- `FormulaSurfaceProbe.gen`: builds a conservative formula-surface report for parser developers, highlighting exact child damage ids separately from source-only or parameterized modifier evidence.
- `EffectDescriptionSurfaceProbe.gen`: builds a broad effect-description surface report for parser developers, highlighting component, predicate, timing, stack, focus, companion/summon, and compound-effect text across CTB string pools, game localization, and generated JSON.
- `EffectPredicateAudit.gen`: builds a conservative modifier predicate report for parser developers, highlighting rows that need target monster, source actor, direction, timing, stack, or description-extraction work before contribution math can be exact.
- `EffectComponentWorklist.gen`: builds the next-step classification worklist from the broad surface and predicate audit, separating discovery-only text from structured component candidates and runtime-evidence blockers.
- `ModifierExtractionInventory.gen`: builds the extraction restart coverage report, separating category-description gaps from compact runtime table work and packet-only equipment statline decoding.
- `TalentSpecOwnership.gen`: builds the class/spec ownership worklist for all talent/passive rows, separating high-confidence spec-exclusive rows from class-wide candidates and ambiguous DPS-relevant rows.

## Running

From this folder:

```powershell
node .\GenerateAll.gen --dry-run
node .\GenerateAll.gen
```

`GenerateAll.gen` currently runs in this order:

1. `ItemNames.gen`
2. `ItemDescriptionSources.gen`
3. `BuffNames.gen`
4. `ConsumableBuffBridge.gen`
5. `DamageAttrIdName.gen`
6. `RecountTable.gen`
7. `SkillAoyiIcons.gen`
8. `MonsterNames.gen`
9. `SceneNames.gen`
10. `SkillNames.gen`
11. `SkillCooldowns.gen`
12. `ClassLabels.gen`
13. `SkillBreakdownDetails.gen`
14. `ClassSpecSkillModelProbe.gen`
15. `SeasonTalentNodeProbe.gen`
16. `SeasonEffectDescriptions.gen`
17. `SeasonRogueEntryProbe.gen`
18. `TalentEffectModelProbe.gen`
19. `TalentSpecOwnership.gen`
20. `SeasonPhantomFactors.gen`
21. `LinkTextDescriptions.gen`
22. `EffectSources.gen`
23. `ModifierSourceIndex.gen`
24. `ModifierObservedUidBridge.gen`
25. `ModifierDisplayTable.gen`
26. `ModifierDescriptions.gen`
27. `ModifierRecountTable.gen`
28. `ModifierClassificationTable.gen`
29. `ModifierContributionTable.gen`
30. `LuckyStrikeRuntime.gen`
31. `ModifierDescriptionCatalogs.gen`
32. `ModifierFormulaTermTable.gen`
33. `ModifierValueProofTable.gen`
34. `EffectDescriptionSurfaceProbe.gen`
35. `EffectPredicateAudit.gen`
36. `EffectComponentWorklist.gen`
36. `ExtractIcons.gen`
37. `ExportIconPngs.gen`
38. `ExportParserAssets.gen`

The modifier generators intentionally run before icon extraction. This lets `ExtractIcons.gen` discover nested `yinzi_*` and `kuangxiangyinzi_*` references from `SeasonPhantomFactors.json`, `EffectSources.json`, `ModifierSourceIndex.json`, `ModifierObservedUidBridge.json`, `ModifierDisplayTable.json`, `ModifierDescriptions.json`, `ModifierRecountTable.json`, `ModifierRelationshipTable.json`, `ModifierClassificationTable.json`, `ModifierContributionTable.json`, `ModifierContributionRuntime.json`, `LuckyStrikeTable.json`, `LuckyStrikeRuntime.json`, `ModifierFormulaTermTable.json`, `ModifierFormulaTermRuntime.json`, `ModifierValueProofTable.json`, and `ModifierValueProofRuntime.json`, then lets `ExportParserAssets.gen` stage those factor images under `static/images/season_phantom_factor`.

Run the standalone generator UI:

```powershell
npm run ui
```

The UI starts a local server at `http://127.0.0.1:8735/`. It runs the same `.gen` files from this folder and shows current output status without requiring the parser app.

Run one generator when you are working on a single table:

```powershell
node .\DamageAttrIdName.gen --dry-run
node .\SkillNames.gen --dry-run
```

Use `--out <file>` or `--output-dir <dir>` to redirect output. By default, output stays under `output`.

`gamepath.json` defaults to the Steam launcher preset:

```json
{
  "gamePath": "steam"
}
```

Supported presets are `steam`, `epic`, `standalone`, and `auto`. Use `--game <path|preset>` for a one-off run. For a machine-specific install path, create `gamepath.local.json`; it is ignored by git and overrides `gamepath.json`.

Extract icons from generated outputs and configured probe folders:

```powershell
node .\ExtractIcons.gen --dry-run
node .\ExtractIcons.gen
node .\ExportIconPngs.gen
node .\ExportParserAssets.gen --dry-run
node .\ExportParserAssets.gen
```

Icon extraction writes manifests first, then PNG files. Durable icon output is PNG plus provenance JSON only. The manifests record the original field or probe, game asset address, address hash, bundle hash, sprite or texture name, PNG file, image size, and probe pixel-match status when applicable.

Parser asset staging does not write into the parser repository. It produces `output/parser-assets/static/images`, `output/parser-assets/asset-path-map.json`, and `output/parser-assets/manifest.json` so the staged tree can be compared before anything is copied over parser assets. Use `--compare-static-dir <path>` to compare against an existing parser `static/images` folder.

PNG export uses local Python decoder packages. Install them into the extractor folder when needed:

```powershell
python -m pip install --target .\.pydeps UnityPy Pillow texture2ddecoder
```

## Current Boundaries

The current generators intentionally exclude ids that cannot be proven from current game files.

- DamageAttr ids must exist as current `DamageAttrTable.ctb` rows.
- Skill rows need a direct name, recount, damage, effect, fight-level, table, or TempAttr bridge.
- Skill hover `Notes` are generated where a structured description id is present, including direct `SkillTable.ctb` ids, direct talent/passive ids, and talent/passive runtime buff description refs from `CTB:4192598123`. Remaining misses need another structured source bridge before they can be promoted from discovery evidence.
- Aoyi icon rows need a current game table bridge for the id and icon/name relationship.
- Modifier source rows need generated source evidence from current game tables or generated game-derived probes; BuffName-linked mechanic sources are promoted when `SkillBreakdownDetails` proves the buff id and affected damage/recount row. Targetless Battle Imagine-owned buff catalog rows are promoted only when `BuffName.json` plus `itemnames.json` proves the owner. Food and potion runtime buffs are promoted from the 2032xxx/2033xxx BuffName ranges; exact consumable names are attached only when the matching 1012xxx/1015xxx item row exists under the same final-three-digit id family. Monster owner names may enrich already-proven rows but do not create targetless sources by themselves. Probe-only samples are not promoted by themselves. Broad class/spec/season/factor formula candidates without static target ids remain available for audits but are not reportable modifier rows until another generator proves their target map or a direct runtime source.
- Seasonal Phantom Factor output currently depends on the probe chain plus generated skill-breakdown evidence, then stages icon refs during parser asset export.
- Some BuffName rows only expose design/internal strings because the game row has no localization name id.
- Monster and scene rows currently emit names only; no direct icon field has been proven for those tables. Monster rows with corrupt localization-only question marks are preserved with synthetic `Unknown Monster <id>` placeholders so target-rank predicates can still use the generated `MonsterType`.

When a row is missing, use the probe report to guide a game-file search, then update the direct bridge that proves it.
