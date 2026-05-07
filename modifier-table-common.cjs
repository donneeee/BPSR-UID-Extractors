const crypto = require("node:crypto");

function stableClone(value) {
  if (Array.isArray(value)) return value.map(stableClone);
  if (!value || typeof value !== "object") return value;
  const out = {};
  for (const key of Object.keys(value).sort()) {
    const child = stableClone(value[key]);
    if (child !== undefined) out[key] = child;
  }
  return out;
}

function hashEntry(entry) {
  const stable = JSON.stringify(stableClone(entry));
  return crypto.createHash("sha1").update(stable).digest("hex").slice(0, 12);
}

function toPositiveNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : null;
}

function sortedNumbers(values) {
  return [...new Set(Array.from(values || []).map(toPositiveNumber).filter((value) => value !== null))]
    .sort((left, right) => left - right);
}

function localizedEntryNames(entry) {
  return [
    entry.sourceName,
    ...Object.values(entry.sourceNames || {}),
  ].map((value) => String(value || "").trim()).filter(Boolean);
}

function isOwnerQualifiedSource(entry) {
  return localizedEntryNames(entry).some((value) => /\s+-\s+|!|\uFF01/.test(value));
}

function displayOwnerKind(entry) {
  if (entry.sourceKind === "imagine" && !isOwnerQualifiedSource(entry)) return "battle-imagine";
  return undefined;
}

function providerAggregation(entry) {
  if (entry.sourceKind === "observed-buff") return "source-uid";
  return "actor-kind";
}

function stripUndefined(value) {
  if (Array.isArray(value)) return value.map(stripUndefined);
  if (!value || typeof value !== "object") return value;
  const out = {};
  for (const [key, inner] of Object.entries(value)) {
    if (inner === undefined || inner === null) continue;
    if (Array.isArray(inner) && inner.length === 0) continue;
    if (inner && typeof inner === "object" && !Array.isArray(inner)) {
      const stripped = stripUndefined(inner);
      if (Object.keys(stripped).length === 0) continue;
      out[key] = stripped;
      continue;
    }
    out[key] = inner;
  }
  return out;
}

function compactRecountEntry(entry) {
  const out = {};
  for (const key of [
    "sourceId",
    "sourceKind",
    "sourceType",
    "sourceEntityId",
    "runtimeDetection",
    "buffIds",
    "evidence",
    "reportPolicy",
    "sourceIndexReportPolicy",
    "runtimeReportReason",
    "rowPolicy",
    "contributionStatus",
    "contributionGroups",
    "predicateTags",
    "relationshipKinds",
    "componentClasses",
    "attributionModel",
    "talentOwnership",
    "targetDamageIds",
    "targetRecountIds",
    "providerAggregation",
  ]) {
    if (entry[key] !== undefined) out[key] = entry[key];
  }
  out.providerAggregation ||= providerAggregation(out);
  out.buffIds = sortedNumbers(out.buffIds);
  out.targetDamageIds = sortedNumbers(out.targetDamageIds);
  out.targetRecountIds = sortedNumbers(out.targetRecountIds);
  out.evidence = [...new Set(out.evidence || [])].sort();
  return out;
}

function compactDisplayEntry(entry) {
  return stripUndefined({
    sourceId: String(entry.sourceId || "").trim() || undefined,
    sourceName: String(entry.sourceName || "").trim() || undefined,
    sourceNames: entry.sourceNames,
    iconPath: String(entry.iconPath || "").trim() || undefined,
    displayOwnerKind: entry.displayOwnerKind || displayOwnerKind(entry),
  });
}

function hasStaticTargets(entry) {
  return sortedNumbers(entry.targetDamageIds).length > 0 || sortedNumbers(entry.targetRecountIds).length > 0;
}

const NON_STATIC_RUNTIME_SOURCE_KINDS = new Set([
  "active-skill",
  "buff-proc",
  "consumable",
  "imagine",
  "lucky-strike",
  "runtime-buff",
  "set-effect",
  "skill-proc",
]);

const BROAD_EVIDENCE_SOURCE_KINDS = new Set([
  "phantom-factor",
  "season-rogue-entry",
  "season-talent-node",
  "talent-passive",
  "talent-skill",
]);

const RUNTIME_WINDOW_ROW_POLICIES = new Set([
  "formula",
  "timing",
  "uptime",
]);

const RUNTIME_WINDOW_GROUPS = new Set([
  "baseAttack",
  "critical",
  "elemental",
  "genericDamage",
  "hitTiming",
  "targetMitigation",
  "versatility",
]);

const RUNTIME_WINDOW_SOURCE_KINDS = new Set([
  "active-skill",
  "consumable",
  "imagine",
  "runtime-buff",
  "season-rogue-entry",
  "season-talent-node",
  "set-effect",
  "talent-passive",
  "talent-skill",
]);

function effectiveReportPolicy(entry) {
  const sourcePolicy = entry.reportPolicy || "include";
  const status = entry.contributionStatus || "unknown";
  const sourceKind = entry.sourceKind || "effect-source";
  const sourceType = entry.sourceType || "";
  const rowPolicy = entry.rowPolicy || "unknown";
  const componentClasses = new Set(entry.componentClasses || []);

  if (sourcePolicy === "ignore") {
    return { policy: "ignore", reason: "source-index-ignore" };
  }

  if (status === "defensive-or-non-damage" || rowPolicy === "defensive") {
    return { policy: "ignore", reason: "defensive-or-non-damage" };
  }

  if (sourceType === "imagine-icd") {
    return { policy: "ignore", reason: "internal-cooldown-marker" };
  }

  if (componentClasses.has("damage-reduction") || componentClasses.has("defense-stat")) {
    return { policy: "ignore", reason: "defensive-component" };
  }

  if (sourcePolicy === "debug-only") {
    return { policy: "debug-only", reason: "source-index-debug-only" };
  }

  if (hasStaticTargets(entry)) {
    return { policy: "include", reason: "static-target-map" };
  }

  if (BROAD_EVIDENCE_SOURCE_KINDS.has(sourceKind)) {
    return { policy: "debug-only", reason: "broad-source-needs-static-map" };
  }

  if (NON_STATIC_RUNTIME_SOURCE_KINDS.has(sourceKind)) {
    return { policy: "include", reason: "direct-runtime-source" };
  }

  return { policy: "debug-only", reason: "unmapped-runtime-source" };
}

function entryContributionGroups(entry) {
  return [
    ...(entry.contributionGroups || []),
    ...(entry.attributionModel?.contributionGroups || []),
  ].filter(Boolean);
}

function isRuntimeWindowTransportEntry(entry) {
  const rowPolicy = entry.rowPolicy || "unknown";
  if (!RUNTIME_WINDOW_ROW_POLICIES.has(rowPolicy)) return false;
  if (hasStaticTargets(entry)) return false;

  const groups = entryContributionGroups(entry);
  if (groups.some((group) => RUNTIME_WINDOW_GROUPS.has(group))) return true;

  if (rowPolicy === "uptime") {
    const sourceKind = entry.sourceKind || "";
    const sourceType = String(entry.sourceType || "").toLowerCase();
    return RUNTIME_WINDOW_SOURCE_KINDS.has(sourceKind)
      || sourceType.includes("buff")
      || sourceType.includes("debuff");
  }

  return false;
}

function prepareRecountEntry(rawEntry) {
  const entry = compactRecountEntry(rawEntry || {});
  const sourceIndexPolicy = entry.reportPolicy || "include";
  const effective = effectiveReportPolicy(entry);
  entry.sourceIndexReportPolicy = sourceIndexPolicy;
  entry.reportPolicy = effective.policy;
  entry.runtimeReportReason = effective.reason;
  return { entry, sourceIndexPolicy, effective };
}

function sourceRuleIdForRecountEntry(entry) {
  return `mrs:${hashEntry(entry)}`;
}

module.exports = {
  compactDisplayEntry,
  compactRecountEntry,
  displayOwnerKind,
  effectiveReportPolicy,
  hashEntry,
  isRuntimeWindowTransportEntry,
  prepareRecountEntry,
  sourceRuleIdForRecountEntry,
  sortedNumbers,
  stripUndefined,
  toPositiveNumber,
};
