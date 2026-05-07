"use strict";

const ICD_LOCKOUT_DESCRIPTION_PATTERNS = Object.freeze([
  /cannot be affected by (?:the )?same type(?: of effects?)?/i,
  /unaffected by same type(?: of effects?)?/i,
  /same type of effect within/i,
  /\u65e0\u6cd5\u53d7\u5230\u540c\u7c7b\u578b\u6548\u679c\u5f71\u54cd/,
  /\u7121\u6cd5\u53d7\u5230\u540c\u985e\u578b\u6548\u679c\u5f71\u97ff/,
]);

const ICD_LOCKOUT_NAME_TEXT =
  /\b(?:icd|lockout|stasis|exhausted(?::|\b)|weakened(?::|\b).*(?:wish|sealed))\b|\u51dd\u6ede|\u529b\u7aed|\u865a\u5f31.*(?:\u7948\u613f|\u7981\u6b62)/i;

function cleanMarkup(value) {
  return String(value || "")
    .replace(/[\u200b-\u200f\ufeff]/g, "")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]*>/g, "")
    .replace(/\{[^}]*\}/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&amp;/gi, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanDescriptionsByLocale(descriptions) {
  const out = {};
  for (const [localeId, text] of Object.entries(descriptions || {})) {
    const cleaned = cleanMarkup(text);
    if (cleaned) {
      out[localeId] = cleaned;
    }
  }
  return out;
}

function extractValueTexts(value) {
  const seen = new Set();
  const out = [];
  for (const match of String(value || "")
    .match(/[+-]?\d+(?:[.,]\d+)?\s*(?:%|s|sec|seconds?)?/gi) ?? []) {
    const text = match.trim();
    if (!text || seen.has(text)) continue;
    seen.add(text);
    out.push(text);
  }
  return out;
}

function preferredText(values, fallback = "") {
  return values?.en
    ?? values?.["zh-CN"]
    ?? values?.design
    ?? Object.values(values ?? {}).find(Boolean)
    ?? fallback
    ?? "";
}

function normalizeActivationText(value) {
  return String(value ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function hasIcdLockoutDescription(value) {
  const text = cleanMarkup(value);
  return ICD_LOCKOUT_DESCRIPTION_PATTERNS.some((pattern) => pattern.test(text));
}

function isIcdLockoutNameText(value) {
  return ICD_LOCKOUT_NAME_TEXT.test(cleanMarkup(value));
}

function extractIcdLockoutSeconds(value) {
  const text = cleanMarkup(value);
  if (!hasIcdLockoutDescription(text)) return null;
  const patternMatch = ICD_LOCKOUT_DESCRIPTION_PATTERNS
    .map((pattern) => {
      const match = text.match(pattern);
      return match ? { index: match.index ?? -1 } : null;
    })
    .filter((match) => match && match.index >= 0)
    .sort((left, right) => left.index - right.index)[0];
  const lockoutText = patternMatch ? text.slice(patternMatch.index, patternMatch.index + 240) : text;
  const secondsMatch = lockoutText.match(/\b(?:within|for)\s*(\d+(?:\.\d+)?)\s*(?:s|sec|secs|second|seconds)\b/i);
  if (secondsMatch) return Math.round(Number(secondsMatch[1]));
  const minutesMatch = lockoutText.match(/\b(?:within|for)\s*(\d+(?:\.\d+)?)\s*(?:m|min|mins|minute|minutes)\b/i);
  if (minutesMatch) return Math.round(Number(minutesMatch[1]) * 60);
  const chineseSecondsMatch = lockoutText.match(/(\d+(?:\.\d+)?)\s*\u79d2/);
  if (chineseSecondsMatch) return Math.round(Number(chineseSecondsMatch[1]));
  return null;
}

function classifyEffectSemantics(notes) {
  const texts = Object.values(notes || {}).map(cleanMarkup).filter(Boolean);
  const icdTexts = texts.filter(hasIcdLockoutDescription);
  if (!icdTexts.length) {
    return { effectTags: [], icdLockoutSeconds: null };
  }
  const seconds = icdTexts
    .map(extractIcdLockoutSeconds)
    .find((value) => Number.isFinite(value) && value > 0);
  return {
    effectTags: ["icd-lockout"],
    icdLockoutSeconds: seconds ?? null,
  };
}

module.exports = {
  ICD_LOCKOUT_DESCRIPTION_PATTERNS,
  cleanDescriptionsByLocale,
  cleanMarkup,
  classifyEffectSemantics,
  extractIcdLockoutSeconds,
  extractValueTexts,
  hasIcdLockoutDescription,
  isIcdLockoutNameText,
  normalizeActivationText,
  preferredText,
};
