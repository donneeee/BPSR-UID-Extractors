#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import {
  displayPath,
  maybeWriteJson,
  parseArgs,
  printHelp,
  resolvePaths,
} from "./generator-common.mjs";

const EXPECTED_LOCALES = [
  "en",
  "de",
  "es",
  "fr",
  "id",
  "ja",
  "ko-KR",
  "pt-BR",
  "th",
  "zh-CN",
  "zh-TW",
];

const CJK_RE = /[\u3400-\u9fff]/;
const CJK_OK_LOCALES = new Set(["ja", "zh-CN", "zh-TW"]);
const LOCALE_OBJECT_KEYS = new Set(["Names", "names", "Descriptions", "descriptions"]);

main().catch((error) => {
  console.error(error.stack || error.message || String(error));
  process.exit(1);
});

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp(
      "AuditLocalizationCoverage - report generated data and UI locale gaps.",
      `
Notes:
  Scans extractor output, parser-data/generated, and src/lib/locales.
  This audit does not promote inferred labels; it only reports missing or suspicious locale coverage.
`,
    );
    process.exit(0);
  }

  const paths = resolvePaths(args, "LocalizationCoverageAudit.json");
  const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
  const normalizedRepoRoot =
    process.platform === "win32" && repoRoot.startsWith("/") ? repoRoot.slice(1) : repoRoot;
  const extractorDir = path.dirname(new URL(import.meta.url).pathname);
  const normalizedExtractorDir =
    process.platform === "win32" && extractorDir.startsWith("/") ? extractorDir.slice(1) : extractorDir;

  const generatedDirs = [
    path.join(normalizedExtractorDir, "output"),
    path.join(normalizedRepoRoot, "resonance-logs-global", "parser-data", "generated"),
  ];
  const uiLocalesDir = path.join(normalizedRepoRoot, "resonance-logs-global", "src", "lib", "locales");

  const generatedReports = [];
  for (const dir of generatedDirs) {
    if (!fs.existsSync(dir)) continue;
    generatedReports.push(...scanGeneratedDir(dir));
  }

  const uiReport = fs.existsSync(uiLocalesDir) ? scanUiLocales(uiLocalesDir) : null;

  const report = {
    schemaVersion: 1,
    generatedAt: new Date().toISOString(),
    expectedLocales: EXPECTED_LOCALES,
    summary: {
      generatedFiles: generatedReports.length,
      generatedFilesWithMissingLocales: generatedReports.filter((entry) => entry.missingLocaleRows > 0).length,
      generatedFilesWithSuspiciousLocaleText: generatedReports.filter((entry) => entry.suspiciousLocaleRows > 0).length,
      uiMissingKeys: uiReport?.summary.missingKeys ?? 0,
      uiSuspiciousValues: uiReport?.summary.suspiciousValues ?? 0,
    },
    generatedData: generatedReports,
    uiLocales: uiReport,
  };

  if (args.dryRun) {
    console.log(`Dry run: scanned localization coverage (${report.summary.generatedFiles} generated files).`);
    return;
  }

  maybeWriteJson(paths.out, report, false);
  const mdPath = paths.out.replace(/\.json$/i, ".md");
  fs.writeFileSync(mdPath, renderMarkdown(report), "utf8");
  console.log(`Wrote ${displayPath(mdPath)}`);
}

function scanGeneratedDir(dir) {
  return listJsonFiles(dir)
    .map((file) => scanGeneratedFile(file, dir))
    .filter((entry) => entry.localeObjectRows > 0 || entry.error);
}

function scanGeneratedFile(file, rootDir) {
  let data;
  try {
    data = JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    return {
      file: displayPath(path.relative(rootDir, file)),
      root: displayPath(rootDir),
      error: error.message,
    };
  }

  const counters = {
    localeObjectRows: 0,
    missingLocaleRows: 0,
    suspiciousLocaleRows: 0,
    missingByLocale: Object.fromEntries(EXPECTED_LOCALES.map((locale) => [locale, 0])),
    suspiciousByLocale: Object.fromEntries(EXPECTED_LOCALES.map((locale) => [locale, 0])),
    examples: [],
  };

  visit(data, [], (value, pathParts) => {
    if (!value || typeof value !== "object" || Array.isArray(value)) return;
    for (const key of LOCALE_OBJECT_KEYS) {
      const localeObject = value[key];
      if (!isLocaleObject(localeObject)) continue;
      counters.localeObjectRows += 1;
      const missing = EXPECTED_LOCALES.filter((locale) => !normalizeText(localeObject[locale]));
      const suspicious = EXPECTED_LOCALES.filter(
        (locale) => !CJK_OK_LOCALES.has(locale) && CJK_RE.test(normalizeText(localeObject[locale])),
      );
      for (const locale of missing) counters.missingByLocale[locale] += 1;
      for (const locale of suspicious) counters.suspiciousByLocale[locale] += 1;
      if (missing.length > 0) counters.missingLocaleRows += 1;
      if (suspicious.length > 0) counters.suspiciousLocaleRows += 1;
      if ((missing.length > 0 || suspicious.length > 0) && counters.examples.length < 25) {
        counters.examples.push({
          path: pathParts.concat(key).join("."),
          missing,
          suspicious,
          preferred: firstNonEmptyLocale(localeObject),
        });
      }
    }
  });

  return {
    file: displayPath(path.relative(rootDir, file)),
    root: displayPath(rootDir),
    ...counters,
  };
}

function scanUiLocales(localeRoot) {
  const localeDirs = fs
    .readdirSync(localeRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((locale) => EXPECTED_LOCALES.includes(locale))
    .sort((a, b) => EXPECTED_LOCALES.indexOf(a) - EXPECTED_LOCALES.indexOf(b));

  const baseline = readUiLocaleTree(path.join(localeRoot, "en"));
  const localeReports = [];
  let missingKeys = 0;
  let suspiciousValues = 0;

  for (const locale of localeDirs) {
    const tree = readUiLocaleTree(path.join(localeRoot, locale));
    const missing = [];
    const suspicious = [];
    for (const [key, englishValue] of Object.entries(baseline)) {
      if (!(key in tree)) {
        missing.push(key);
        continue;
      }
      const value = normalizeText(tree[key]);
      if (!CJK_OK_LOCALES.has(locale) && CJK_RE.test(value)) {
        suspicious.push({ key, value, englishValue });
      }
    }
    missingKeys += missing.length;
    suspiciousValues += suspicious.length;
    localeReports.push({
      locale,
      keys: Object.keys(tree).length,
      missingKeys: missing.length,
      suspiciousValues: suspicious.length,
      missingExamples: missing.slice(0, 50),
      suspiciousExamples: suspicious.slice(0, 50),
    });
  }

  return {
    root: displayPath(localeRoot),
    summary: { locales: localeReports.length, baselineKeys: Object.keys(baseline).length, missingKeys, suspiciousValues },
    locales: localeReports,
  };
}

function readUiLocaleTree(localeDir) {
  const out = {};
  for (const file of listJsonFiles(localeDir)) {
    const rel = path.relative(localeDir, file).replaceAll(path.sep, "/");
    let data;
    try {
      data = JSON.parse(fs.readFileSync(file, "utf8"));
    } catch {
      continue;
    }
    flattenObject(data, rel.replace(/\.json$/i, ""), out);
  }
  return out;
}

function flattenObject(value, prefix, out) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    out[prefix] = value;
    return;
  }
  for (const [key, child] of Object.entries(value)) {
    flattenObject(child, `${prefix}.${key}`, out);
  }
}

function listJsonFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".git" || entry.name.endsWith(".locales")) continue;
      files.push(...listJsonFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".json")) {
      files.push(fullPath);
    }
  }
  return files;
}

function visit(value, pathParts, callback) {
  callback(value, pathParts);
  if (!value || typeof value !== "object") return;
  if (Array.isArray(value)) {
    value.forEach((child, index) => visit(child, pathParts.concat(String(index)), callback));
    return;
  }
  for (const [key, child] of Object.entries(value)) {
    visit(child, pathParts.concat(key), callback);
  }
}

function isLocaleObject(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const keys = Object.keys(value);
  return keys.some((key) => EXPECTED_LOCALES.includes(key)) && keys.some((key) => typeof value[key] === "string");
}

function normalizeText(value) {
  return typeof value === "string" ? value.trim() : "";
}

function firstNonEmptyLocale(localeObject) {
  for (const locale of EXPECTED_LOCALES) {
    const text = normalizeText(localeObject[locale]);
    if (text) return { locale, text };
  }
  return null;
}

function renderMarkdown(report) {
  const lines = [];
  lines.push("# Localization Coverage Audit");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Generated files scanned: ${report.summary.generatedFiles}`);
  lines.push(`- Generated files with missing locale rows: ${report.summary.generatedFilesWithMissingLocales}`);
  lines.push(`- Generated files with suspicious CJK values outside zh/ja locales: ${report.summary.generatedFilesWithSuspiciousLocaleText}`);
  lines.push(`- UI missing keys: ${report.summary.uiMissingKeys}`);
  lines.push(`- UI suspicious values: ${report.summary.uiSuspiciousValues}`);
  lines.push("");
  lines.push("## Generated Data Gaps");
  lines.push("");
  for (const entry of report.generatedData.filter((item) => item.missingLocaleRows || item.suspiciousLocaleRows || item.error).slice(0, 80)) {
    lines.push(`- ${entry.file}: missingRows=${entry.missingLocaleRows ?? 0}, suspiciousRows=${entry.suspiciousLocaleRows ?? 0}`);
    for (const example of entry.examples ?? []) {
      const missing = example.missing.length ? ` missing=${example.missing.join(",")}` : "";
      const suspicious = example.suspicious.length ? ` suspicious=${example.suspicious.join(",")}` : "";
      lines.push(`  - ${example.path}${missing}${suspicious}`);
    }
  }
  lines.push("");
  lines.push("## UI Locale Gaps");
  lines.push("");
  for (const locale of report.uiLocales?.locales ?? []) {
    if (!locale.missingKeys && !locale.suspiciousValues) continue;
    lines.push(`- ${locale.locale}: missingKeys=${locale.missingKeys}, suspiciousValues=${locale.suspiciousValues}`);
    for (const key of locale.missingExamples.slice(0, 20)) lines.push(`  - missing ${key}`);
    for (const example of locale.suspiciousExamples.slice(0, 20)) lines.push(`  - suspicious ${example.key}: ${example.value}`);
  }
  lines.push("");
  return `${lines.join("\n")}\n`;
}
