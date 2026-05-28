# Modifier Description Catalogs

Generated: 2026-05-27T21:20:02.797Z

## Boundaries

- These catalogs are generated evidence for modifier work, not runtime contribution math.
- Final damage totals remain packet-derived truth.
- Equipped gear statlines and rolled equipment values are packet/runtime-derived and are not supplied by these game-file catalogs.
- UI descriptions with Decision placeholders are preserved as description/value-source gaps, not demoted or discarded.
- Stacking, max-stack, target-stack, and owner/party split rows require runtime source/window/stack evidence before exact contribution replay.

## Catalog Coverage

| Category | Entries | Descriptions | Paragraph Breaks | Page Context | Bridged Context | Values | Structured Values | Decision Refs | Unresolved Decision Refs | Stack | Max Stack | Target Stack | Owner/Party Candidates | Output |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| buffs | 8751 | 2291 | 470 | 2262 | 318 | 2659 | 31 | 344 | 344 | 424 | 31 | 118 | 325 | `BuffDescriptions.json` |
| skills | 24948 | 6374 | 1 | 6374 | 0 | 9775 | 0 | 0 | 0 | 1263 | 99 | 602 | 602 | `SkillDescriptions.json` + `SkillDescriptions.locales/` (12 locales) |
| talents | 646 | 611 | 163 | 611 | 0 | 604 | 0 | 0 | 0 | 72 | 3 | 30 | 123 | `TalentDescriptions.json` |
| seasonal-talents | 358 | 358 | 131 | 358 | 0 | 323 | 0 | 0 | 0 | 43 | 8 | 10 | 63 | `SeasonalTalentDescriptions.json` |
| factors | 156 | 147 | 28 | 147 | 0 | 151 | 0 | 147 | 0 | 5 | 0 | 0 | 1 | `FactorDescriptions.json` |
| items | 9216 | 8701 | 1446 | 8701 | 0 | 2276 | 0 | 0 | 0 | 88 | 1 | 5 | 1 | `ItemDescriptions.json` + `ItemDescriptions.locales/` (13 locales) |
| battle-imagines | 165 | 117 | 68 | 50 | 68 | 52 | 44 | 0 | 0 | 2 | 1 | 2 | 43 | `BattleImagineDescriptions.json` |
| linktext-tooltips | 363 | 231 | 9 | 231 | 0 | 113 | 0 | 0 | 0 | 13 | 1 | 3 | 22 | `LinkTextTooltipDescriptions.json` |

## Notes

- buffs: Runtime buff/debuff rows from BuffName.json. Many rows are name-only until a structured description bridge exists.
- skills: Skill, recount, cooldown, and child-damage identity/text rows. Final damage remains packet truth.
- talents: Class talent/passive text and ownership evidence. Selected runtime talent state is still required before contribution math.
- seasonal-talents: Slumberdream node and rogue-entry rows. These are separate from normal class talents.
- factors: Season Phantom Factor text/value rows. Factor grade/runtime acquisition still needs runtime proof.
- items: Static item/gear descriptions and consumable scaffolding. Actual equipped gear statlines are packet/runtime-derived, not game-file-derived.
- battle-imagines: Battle Imagine/Aoyi owner and runtime buff/debuff text. Display renames still happen after row reduction.
- linktext-tooltips: Client linktext tooltip rows used by other descriptions, including stack/value fragments.
