---
title: Modern Entity Resolution (Entity Resolution)
url: /Platform/entity
category: Platform
status: live
source: src/app/Platform/entity/page.tsx, src/views/platform-entity/View.tsx, src/views/platform-entity/behavior.js, src/views/_runtime/manifest.json, src/data/coin-slices.json
updated: 2026-11-23
---
# Modern Entity Resolution (Entity Resolution)

This is the ContexQ platform page for entity resolution. In the site menu (Platform section) it is labelled "Modern Entity Resolution"; the browser page title is "Entity Resolution | ContexQ". Page: /Platform/entity. Entity resolution finds every record across your systems that belongs to the same person or company. The page explains what it is, why organisations need it, and the business impact for banks and corporates. All names and records on the page (John Smith, Northstar Trading and others) are fictional, illustrative examples.

Page meta description: "Entity resolution finds every record across your systems that belongs to the same person or company. See what it is, why organisations need it, and the business impact for banks and corporates."

## Many records. One entity.

Hero headline: "Many records. One entity."

Hero text: ContexQ connects the records your systems hold about each person and company, so you know who you are dealing with and how they are connected.

Hero button: "How it works" (jumps down to the next section on the same page).

### Hero animation (illustrative, fictional records)

Labelled "Illustrative example with fictional records". Small record tiles from registries, invoices, bank and card records, shipping documents, news and the web stream into the ContexQ globe. The animation steps are "Records from many systems", "Matched by ContexQ" and "People and companies, resolved". Resolved entities come out, people and companies together, each with the sources it was linked from:
- John Smith (person): Bank, KYC, registry
- Northstar Trading (company): Registry, invoices
- Maria Chen (person): Cards, KYC
- Harbour Ridge Holdings (company): Registry, news
- Kestrel Marine Ltd (company): Customs, invoices

## Scattered records. One John Smith. And one who isn't.

Entity resolution answers one question across all your data: do these records describe the same real-world person or company? Records that do are linked. Records that don't are kept apart.

Example (fictional) records:
- Retail banking: John Smith, born 1 Aug 1981
- Corporate banking: John A. Smith, born 01/08/1981
- KYC file: SMITH, JOHN, mobile •••• 4567
- Supplier list: J. Smith, Director, Northstar Trading

Result: One person, John Smith, with every record linked, each with its source. A different person: John Smith in the card system, born 14 Mar 1972, different ID. Kept separate.

## When records don't connect, decisions are made on half the picture.

Problems caused when records are not resolved:
- Duplicate customers and suppliers: The same John Smith is onboarded again, checked again and rated differently each time.
- Risk that never reaches the file: An adverse news story or a past exit is recorded under a different spelling, so the right reviewer never sees it.
- Two people treated as one: Two different John Smiths share one file, and one inherits the other's missed payments or risk rating.
- Exposure no one can total: Lending, spend or limits with one group are spread across systems that each see only a part.

## Real data hides John Smith in ways simple matching misses.

Exact matching and name comparison each catch part of the problem. ContexQ is designed to handle every one of these:
- Names change form. Example: John Smith · SMITH, JOHN · J. A. Smith · Джон Смит. Initials, word order and other scripts break simple name comparisons.
- Identifiers are partial. Example: S1234567A · S••••567A · not recorded. Masked or missing IDs still carry evidence, without unmasking anything.
- Details change over time. Example: 2019: Orchard Road · 2024: Marina Bay. A new address, phone or employer should extend his history, not start a new one.
- Same name, same home. Example: John Smith, 73 · John Smith, 45. Father and son share an address and a phone. They stay separate, linked as a household.
- Companies rename. Example: Northstar Trading · formerly Polaris Trading · "Northstar Group". Former, registered and trading names all belong to one company history.
- Identifiers are shared. Example: +65 9123 4567 on several unrelated accounts. A phone or email reused across customers can point to one person in control.

## Same name. Different answers.

A name alone proves nothing. The evidence around it decides. Two fictional comparisons:

Comparison 1, Retail banking "John Smith, born 1 Aug 1981" versus Corporate banking "John A. Smith, born 01/08/1981". Evidence:
- Same birth date, written differently
- His mobile is the second contact on the corporate file
- His two companies share a director
Verdict: Same person. Linked, with the evidence attached.

Comparison 2, Retail banking "John Smith, born 1 Aug 1981" versus Deposits "John Smith, born 3 May 1953". Evidence:
- Same address and phone
- Born 28 years apart
- Different ID numbers
Verdict: Two people. Father and son, kept apart and linked as a household.

Caveat on the page: "Fictional records. How much evidence is needed is set per use case, and borderline cases go to an analyst."

## Matching finds John Smith. Relationships show who he is connected to.

His companies and co-directors are separate entities, never merged into his profile. Linking them shows risk and opportunity that no single record holds, even when every name is encrypted.
- Risk: his co-director at Northstar Trading also directs a firm named in adverse news.
- Opportunity: his second company banks elsewhere.

### Encrypted network demo (step-by-step, fictional records)

The demo has four steps: 1 Separate, 2 Encrypted, 3 Connected, 4 Decrypted. Five records about John Smith, Northstar Trading, Harbour Ridge, Wei Ling Tan and Kestrel Ltd start in separate systems:
- John Smith
- Northstar Trading (source: Corporate banking; role: Customer)
- Harbour Ridge (source: Company registry; role: Banks elsewhere)
- Wei Ling Tan (source: Company registry; role: Co-director)
- Kestrel Ltd (source: News; role: Adverse news)

Demo step messages:
1. "Five records about John Smith sit in five different systems. Nothing links them."
2. After Encrypt: "Every name is now quantum-safe encrypted. No one can read who these records are about."
3. After Connect: "ContexQ links the encrypted records. The network forms and the risk is flagged without reading a single name."
4. After Decrypt: "Decrypted with your key: the same network, now with the real names."

The resulting network: John Smith is director of Northstar Trading and Harbour Ridge; his co-director Wei Ling Tan is also director of Kestrel Ltd, which is named in adverse news.

## What changes for each team.

- KYC and onboarding: Recognise existing, related or previously exited customers at the door, and stop repeating checks on the same person.
- Financial crime and fraud: Start investigations with the subject's records, aliases and adverse news already linked, and spot accounts controlled by one person.
- Credit and risk: See total exposure to a customer and its group across products, systems and countries.
- Procurement and suppliers: Find duplicate vendors and suppliers that share directors, addresses or owners.
- Customer and growth: See the companies and connections around a customer, and where the relationship can grow.
- Audit and regulators: Answer "why were these records linked?" with the sources behind every decision.

## How it fits into your data estate.

The ContexQ entity resolution pipeline has six stages:
1. Connect: Your systems and trusted external sources.
2. Catalogue: Schemas and field types detected automatically.
3. Standardise: Names, addresses, dates and phone numbers cleaned.
4. Match and cluster: Deterministic and probabilistic matching at scale.
5. Resolve: People and companies, with links, evidence and history.
6. Deliver: Alerts, on-demand insights, and your case and compliance systems.

Further properties of ContexQ entity resolution:
- Works with data as it is: Structured records and unstructured text such as news, in different schemas and languages. No single golden key is required.
- Explainable output: Every link, and every decision not to link, carries its evidence. Borderline pairs go to a review queue.
- Deployed under your controls: A dedicated single-tenant environment, least-privilege access, encryption at rest and in transit, and audit logs.
- Privacy-preserving option: Resolve your records against external data through encrypted computation, so neither side's plain-text records are exposed; only the resolved result is returned.

## See your own records resolved.

Closing call to action: Bring a customer, supplier or investigation use case and see how ContexQ resolves it.
- Button "Talk to the team" leads to the contact page (/contact).
- Or email inquiry@contexq.com (the link opens an email with the subject "Entity resolution enquiry").
