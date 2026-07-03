# Modifier Description Catalogs

Generated: 2026-06-09T10:48:41.842Z

## Boundaries

- These catalogs are generated evidence for modifier work, not runtime contribution math.
- Final damage totals remain packet-derived truth.
- Equipped gear statlines and rolled equipment values are packet/runtime-derived and are not supplied by these game-file catalogs.
- UI descriptions with Decision placeholders are preserved as description/value-source gaps, not demoted or discarded.
- Stacking, max-stack, target-stack, and owner/party split rows require runtime source/window/stack evidence before exact contribution replay.

## Catalog Coverage

| Category | Entries | Descriptions | Paragraph Breaks | Page Context | Bridged Context | Values | Structured Values | Decision Refs | Unresolved Decision Refs | Stack | Max Stack | Target Stack | Owner/Party Candidates | Output |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| buffs | 9890 | 2635 | 627 | 2605 | 377 | 3087 | 42 | 450 | 450 | 474 | 35 | 123 | 406 | `BuffDescriptions.json` |
| skills | 26940 | 6135 | 1 | 6135 | 0 | 10106 | 0 | 0 | 0 | 1312 | 99 | 631 | 749 | `SkillDescriptions.json` + `SkillDescriptions.locales/` (12 locales) |
| talents | 648 | 613 | 173 | 613 | 0 | 612 | 0 | 0 | 0 | 77 | 4 | 30 | 140 | `TalentDescriptions.json` |
| seasonal-talents | 464 | 464 | 147 | 464 | 0 | 415 | 0 | 0 | 0 | 48 | 8 | 12 | 86 | `SeasonalTalentDescriptions.json` |
| factors | 219 | 219 | 127 | 219 | 0 | 190 | 0 | 218 | 0 | 6 | 0 | 0 | 2 | `FactorDescriptions.json` |
| items | 12470 | 11880 | 2059 | 11880 | 0 | 2918 | 0 | 0 | 0 | 96 | 1 | 6 | 1 | `ItemDescriptions.json` + `ItemDescriptions.locales/` (13 locales) |
| battle-imagines | 221 | 138 | 70 | 69 | 70 | 70 | 58 | 0 | 0 | 6 | 1 | 2 | 57 | `BattleImagineDescriptions.json` |
| linktext-tooltips | 367 | 235 | 11 | 235 | 0 | 116 | 0 | 0 | 0 | 13 | 1 | 3 | 27 | `LinkTextTooltipDescriptions.json` |

## Notes

- buffs: Runtime buff/debuff rows from BuffName.json. Many rows are name-only until a structured description bridge exists.
- skills: Skill, recount, cooldown, and child-damage identity/text rows. Final damage remains packet truth.
- talents: Class talent/passive text and ownership evidence. Selected runtime talent state is still required before contribution math.
- seasonal-talents: Slumberdream node and rogue-entry rows. These are separate from normal class talents.
- factors: Season Phantom Factor text/value rows. Factor grade/runtime acquisition still needs runtime proof.
- items: Static item/gear descriptions and consumable scaffolding. Actual equipped gear statlines are packet/runtime-derived, not game-file-derived.
- battle-imagines: Battle Imagine/Aoyi owner and runtime buff/debuff text. Display renames still happen after row reduction.
- linktext-tooltips: Client linktext tooltip rows used by other descriptions, including stack/value fragments.
