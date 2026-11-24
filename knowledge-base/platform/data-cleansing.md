---
title: AI Data Cleansing (AI Cleansing)
url: /Platform/analytics
category: Platform
status: live
source: src/app/Platform/analytics/page.tsx, src/views/platform-analytics/View.tsx, src/views/platform-analytics/behavior.js, src/views/_runtime/manifest.json, src/data/coin-slices.json
updated: 2026-11-23
---
# AI Data Cleansing (AI Cleansing)

This is the ContexQ platform page for AI data cleansing. In the site menu (Platform section) it is labelled "AI Data Cleansing"; the browser page title is "AI Cleansing | ContexQ". Page: /Platform/analytics (the route is named "analytics", but the page is about data cleansing). ContexQ AI Cleansing turns partial, inaccurate, duplicated and scattered data into clean, standardised and labelled information, without mapping schemas by hand.

Page meta description: "ContexQ AI Cleansing turns partial, inaccurate, duplicated and scattered data into clean, standardised and labelled information, without mapping schemas by hand."

## Messy data in. Trusted information out.

Hero headline: "Messy data in. Trusted information out."

Hero text: Data is often partial, inaccurate, duplicated or scattered across internal and external sources. ContexQ cleans it automatically, without mapping schemas by hand, and labels everything it changed.

Hero button: "See what it fixes" (jumps down to the "Bad data rarely announces itself" section on the same page).

### Hero animation (illustrative, fictional customer)

The hero shows an illustrative animation with a fictional customer, John Smith. Its captions are:
- "Messy data arrives from everywhere."
- "ContexQ works out what each piece is, and what it should be."
- "Clean, standardised information comes out."
- "Nothing is guessed silently: estimates and doubts are labelled."

Fragments about John Smith arrive in different formats, each tagged with its problem:
- SMITH, JOHN (format)
- J. Smth (typo)
- Джон Смит (script)
- DOB 01/08/81 (date?)
- 12 lake rd #4b (address)
- ID S••••567A (masked)
- Mobile: - (missing)
- John Smith (duplicate)

They flow into the ContexQ globe, which runs a cleaning cycle: detect, standardise, repair and verify. A "Cleaned record" card for "Customer · John Smith" comes out, field by field:
- Name: John Smith (spellings merged)
- Date of birth: 1 Aug 1981 (standardised)
- Address: 12 Lake Road, #04-B (standardised)
- Mobile: +65 9123 4567 (from bank record, i.e. filled from the bank's own record)
- ID: S••••567A (kept masked)
- Income band: Middle (estimate, marked as an estimate)
- Occupation: values conflict (sent to a person for review)

## Bad data rarely announces itself.

Bad data hides in formats, spellings, gaps and copies, and quietly weakens every match, score and decision built on top of it. The page shows six kinds of bad data that ContexQ AI Cleansing fixes, each with a before and after example:
- Inconsistent formats: "01/08/81" and "1981-08-01" become "1 Aug 1981".
- Misspellings and scripts: "J. Smth" and "Джон Смит" become "John Smith".
- Missing details: "Mobile: -" becomes "+65 9123 4567", from bank record.
- Duplicates: "SMITH, JOHN" and "John Smith" become "The same customer, once".
- Conflicting values: "Engineer" and "Analyst" are "Sent for review" (not resolved automatically).
- Free text: "…director J. Smith of the firm said…" becomes "Person and company named".

## A cleaning cycle that knows what it is looking for.

Load data as it is. ContexQ sniffs out what each field means, cleans it, and hands back information that is sorted and labelled. The ContexQ cleaning cycle has four steps:
1. Detect: Recognises tables, fields, data types, languages and hierarchies automatically. No mapping project before you start.
2. Standardise: Puts names, addresses, dates, phone numbers, company names and scripts into consistent forms.
3. Repair: Merges aliases and duplicates, fills gaps from other trusted sources, and models what is still missing.
4. Verify: Checks the result, sends uncertain items to a person and keeps the source behind every field.

Guardrail, "Never guesses quietly":
- Originals are kept
- Estimates are labelled
- Doubts go to a person

## When a detail is missing, ContexQ looks for the clue.

Like an investigator, ContexQ uses what other records reveal, then shows exactly how it got there. Four examples (clue, what ContexQ works out, and the label shown):
- Clue: The loan application has no date of birth. What ContexQ works out: Once both are matched to the same John Smith, the bank's customer record supplies it. Label: "Filled · source shown".
- Clue: Only part of an ID is visible: S••••567A. What ContexQ works out: It still counts as evidence when another record carries the same characters. Nothing is unmasked. Label: "Used, never revealed".
- Clue: A private company has not filed its accounts. What ContexQ works out: Its financials are modelled from what is available, and clearly marked as such. Label: "Estimate".
- Clue: A news report names a director in another script. What ContexQ works out: The name is matched to the registry record for the same person. Label: "Linked · source shown".

## No clean-up project before the clean-up.

ContexQ AI Cleansing does not need a data preparation project first:
- No schema mapping up front: Different structures and field names are expected.
- No golden key needed: Records connect even without a shared ID.
- Tables and free text: From system exports to news articles.
- Many languages and scripts: Names are read as they were written.

Data sources shown on the page:
- Your data: Customer records, Transactions, KYC files, Supplier records, Products.
- External data: Company registries, Sanctions lists, News and media, ESG data, Trade records.

Both flow into ContexQ and come out "Cleaned, standardised and labelled, ready for matching, scoring and decisions."

## Better data underneath. Better decisions on top.

Business impact of ContexQ AI Cleansing:
- Use new data sooner: Bring in a new source without months of manual preparation.
- Match with confidence: Fewer missed connections and fewer false ones when records are clean.
- Decide on the full picture: Gaps are filled where evidence allows, and visible where it does not.
- Explain every change: Each value keeps its source, so reviewers and auditors can follow it.

## See what ContexQ makes of your data.

Closing call to action: Bring a messy source and see it come back cleaned, standardised and labelled.
- Button "Talk to the team" leads to the contact page (/contact).
- Or email inquiry@contexq.com (the link opens an email with the subject "AI data cleansing enquiry").
