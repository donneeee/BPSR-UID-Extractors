function uniqueStrings(values) {
  return [...new Set((values || []).map((value) => String(value || "").trim()).filter(Boolean))]
    .sort((left, right) => left.localeCompare(right));
}

function lowerSet(values) {
  return new Set(uniqueStrings(values).map((value) => value.toLowerCase()));
}

function hasAny(set, values) {
  return values.some((value) => set.has(String(value).toLowerCase()));
}

function entryFormulaTermIds(entry) {
  return uniqueStrings([
    ...(entry.formulaTermIds || []),
    ...(entry.attributionModel?.formulaTermIds || []),
    ...((entry.attributionModel?.components || []).flatMap((component) => component.formulaTermIds || [])),
  ]);
}

function entryContributionGroups(entry) {
  return uniqueStrings([
    ...(entry.contributionGroups || []),
    ...(entry.attributionModel?.contributionGroups || []),
    ...((entry.attributionModel?.components || []).flatMap((component) => component.contributionGroups || [])),
  ]);
}

function entryComponentKeys(entry) {
  return uniqueStrings((entry.attributionModel?.components || []).map((component) => component.componentKey));
}

function entryComponentClasses(entry) {
  return uniqueStrings([
    ...(entry.componentClasses || []),
    ...((entry.attributionModel?.components || []).map((component) => component.effectClass)),
  ]);
}

function hasStaticTargets(entry) {
  return (entry.targetDamageIds || []).length > 0 || (entry.targetRecountIds || []).length > 0;
}

const FORMULA_ZONE_RULES = Object.freeze({
  baseAttackTerm: {
    formulaTermIds: ["primaryAttack", "refinedOrElementalAttack", "resistance", "targetArmorMitigation"],
    contributionGroups: ["baseAttack", "targetMitigation"],
    componentKeys: ["atk", "matk", "target-resistance-mitigation", "target-armor-mitigation"],
    componentClasses: ["offense-stat", "target-mitigation", "target-armor-mitigation"],
  },
  luckyStrikeBaseTerm: {
    formulaTermIds: ["primaryAttack", "refinedOrElementalAttack"],
    contributionGroups: ["baseAttack"],
    componentKeys: ["atk", "matk"],
    componentClasses: ["offense-stat"],
  },
  skillMultiplier: {
    formulaTermIds: ["skillMultiplier"],
    contributionGroups: ["skillCoefficient"],
    componentKeys: ["skill-multiplier"],
    componentClasses: ["skill-coefficient"],
  },
  fixedDamage: {
    formulaTermIds: ["flatDamage"],
    contributionGroups: ["flatDamage"],
    componentKeys: ["fixed-damage", "flat-damage"],
    componentClasses: ["flat-damage"],
  },
  generalDamage: {
    formulaTermIds: ["genericDamagePct"],
    contributionGroups: ["genericDamage"],
    componentKeys: ["generic-damage", "dmg-to-elites", "super-armor-damage", "target-vulnerability"],
    componentClasses: ["damage-modifier", "target-vulnerability"],
  },
  elementalDamage: {
    formulaTermIds: ["elementalDamagePct"],
    contributionGroups: ["elemental"],
    componentKeys: ["elemental-damage"],
    componentClasses: ["elemental-damage"],
  },
  allRoundDamage: {
    formulaTermIds: ["versatilityDamagePct"],
    contributionGroups: ["versatility"],
    componentKeys: ["versatility"],
    componentClasses: ["versatility-stat"],
  },
  critical: {
    formulaTermIds: ["critMultiplier"],
    contributionGroups: ["critical"],
    componentKeys: ["critical-rate", "critical-damage"],
    componentClasses: ["critical-stat", "critical-damage-stat"],
  },
  physicalMagicEnhancement: {
    formulaTermIds: ["physicalMagicEnhancementPct"],
    contributionGroups: ["physicalMagicEnhancement"],
    componentKeys: ["physical-magic-enhancement"],
    componentClasses: ["physical-magic-enhancement"],
  },
  finalDamage: {
    formulaTermIds: ["finalDamagePct"],
    contributionGroups: ["finalDamage"],
    componentKeys: ["final-damage"],
    componentClasses: ["final-damage"],
  },
  seasonDamage: {
    formulaTermIds: ["seasonDamagePct"],
    contributionGroups: ["seasonDamage"],
    componentKeys: ["season-damage", "seasonal-factor-damage"],
    componentClasses: ["season-damage", "seasonal-factor-damage"],
  },
  seasonSuppression: {
    formulaTermIds: ["seasonSuppressionPct"],
    contributionGroups: ["seasonSuppression"],
    componentKeys: ["season-suppression"],
    componentClasses: ["season-suppression"],
  },
  luckyChance: {
    formulaTermIds: ["luckyChance"],
    contributionGroups: ["luckyChance"],
    componentKeys: ["lucky-rate", "lucky-chance"],
    componentClasses: ["lucky-stat"],
  },
  luckyMultiplier: {
    formulaTermIds: ["luckyMultiplier"],
    contributionGroups: ["luckyMultiplier"],
    componentKeys: ["lucky-multiplier"],
    componentClasses: ["lucky-multiplier"],
  },
  luckyEnhancement: {
    formulaTermIds: ["genericDamagePct", "luckyDamagePct", "luckyEffectDamagePct"],
    contributionGroups: ["genericDamage", "luckyDamage"],
    componentKeys: ["generic-damage", "lucky-damage"],
    componentClasses: ["damage-modifier", "lucky-damage"],
  },
  exactLuckyProducedDamage: {
    match(entry, state) {
      const sourceKind = String(entry.sourceKind || "").toLowerCase();
      const sourceId = String(entry.sourceId || "").toLowerCase();
      return (sourceKind === "lucky-strike" || sourceId.includes("lucky"))
        && (hasStaticTargets(entry) || state.groups.has("procdamage"));
    },
  },
  timingCadence: {
    contributionGroups: ["hitTiming"],
    componentKeys: ["haste-or-attack-speed", "cooldown-or-resource", "hit-count-model"],
    componentClasses: ["hit-timing", "cooldown-or-resource", "hit-count-model"],
  },
});

function orderedContractZones(contract) {
  return [...(contract?.zones || [])]
    .filter((zone) => zone?.id)
    .sort((left, right) => Number(left.order || 0) - Number(right.order || 0) || String(left.id).localeCompare(String(right.id)));
}

function ruleMatches(rule, state, entry) {
  if (!rule) return false;
  if (typeof rule.match === "function" && rule.match(entry, state)) return true;
  return hasAny(state.terms, rule.formulaTermIds || [])
    || hasAny(state.groups, rule.contributionGroups || [])
    || hasAny(state.componentKeys, rule.componentKeys || [])
    || hasAny(state.componentClasses, rule.componentClasses || []);
}

function formulaZoneIdsForEntry(entry, contract) {
  const state = {
    terms: lowerSet(entryFormulaTermIds(entry)),
    groups: lowerSet(entryContributionGroups(entry)),
    componentKeys: lowerSet(entryComponentKeys(entry)),
    componentClasses: lowerSet(entryComponentClasses(entry)),
  };
  const zones = orderedContractZones(contract);
  const zoneIds = zones.length > 0
    ? zones.map((zone) => zone.id)
    : Object.keys(FORMULA_ZONE_RULES);
  return zoneIds.filter((zoneId) => ruleMatches(FORMULA_ZONE_RULES[zoneId], state, entry));
}

function compactFormulaZoneContract(contract) {
  const zones = orderedContractZones(contract).map((zone) => ({
    id: zone.id,
    order: zone.order,
    label: zone.label,
    contributionMath: zone.contributionMath,
    captureStatus: zone.captureStatus,
    appliesTo: zone.appliesTo,
  }));
  return zones.length > 0 ? { schemaVersion: contract?.schemaVersion, zones } : undefined;
}

function formulaZoneCounts(entries) {
  const counts = {};
  for (const entry of entries || []) {
    for (const zoneId of entry.formulaZoneIds || []) {
      counts[zoneId] = (counts[zoneId] || 0) + 1;
    }
  }
  return Object.fromEntries(Object.entries(counts).sort(([left], [right]) => left.localeCompare(right)));
}

module.exports = {
  compactFormulaZoneContract,
  formulaZoneCounts,
  formulaZoneIdsForEntry,
  uniqueStrings,
};
