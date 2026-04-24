# Probing Sources

Drop external JSON samples here when you want to compare them against the current generated outputs.

These files are audit inputs only. Normal generators do not read this folder, and sample values are never copied into generated output.

Run:

```powershell
node .\ProbeSources.gen --dry-run
node .\ProbeSources.gen
```

The probe report is written to `output/probing-reports/ProbeSourcesReport.json`. It shows which sample file matched a generator output, how many ids overlap, and which ids only appear on one side.
