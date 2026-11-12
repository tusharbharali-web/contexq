# Customers content

All copy for the four Customers pages (Trading, Banks, Manufacturing, Government) lives in one file:

- `data/customers.js` – the content (`window.CUSTOMERS_DATA = { ... }`, plain JSON inside)
- `data/customers.schema.json` – the shape of that content (JSON Schema)
- `assets/render.js` – builds each page from the data. Page files (`Trading.html` etc.) are just shells with `<body data-page="...">`.

## Replacing dummy content

1. Open `data/customers.js` and find the story (`pages[].stories[]`).
2. Replace each placeholder value with real, approved copy and **remove the `[Sample copy]` prefix**.
3. Remove the field name from `sampleFields`. When `sampleFields` is empty, set `"sample": false`.
4. Named customer: set `customerName` and `logo` (path to an image in this folder). Unnamed customer: both must stay `null`.
5. Outcomes must not contain numbers with `%` or a currency symbol unless approved and the rule is deliberately relaxed in `scripts/check-content.ps1`.
6. Keep the file valid JSON after the `window.CUSTOMERS_DATA =` prefix (double quotes, no trailing commas, no comments).

Adding a customer story = add an object to `stories` (copy an existing one). Adding a page = add an object to `pages` and a shell HTML file with the matching `data-page`.

## Sample badge

Stories with `sample: true` show a red "Sample copy" badge. It is on by default. To hide it on a production build, add `<script>window.SHOW_SAMPLE_BADGE = false;</script>` before `assets/render.js`. Hiding the badge does not make sample copy releasable; use the check below.

## Release check

```
npm run check:content
```

(or run `powershell -ExecutionPolicy Bypass -File scripts/check-content.ps1` directly; Node is not required.)

It prints every `sample: true` item and exits non-zero (blocking release) if:

- any story still has `sample: true`
- an `outcome` has a digit next to `%` or a currency symbol
- an unnamed customer (`customerName: null`) has a logo
- a `[Sample copy]` field is missing from `sampleFields`, or `sampleFields` lists a field that is not placeholder copy
- a stage/status value is invalid, a required field is missing, or a logo file is not found

## Rules

Never invent statistics, quotes, logos or customer names. Diagrams are illustrative; the footnote "Scenarios are illustrative." renders on every page.
