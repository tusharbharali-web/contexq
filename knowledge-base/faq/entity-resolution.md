---
title: FAQ - Entity resolution & graph intelligence
url: /Ecosystem/faq
category: FAQ
status: live
source: src/app/Ecosystem/faq/faq-data.ts, src/app/Ecosystem/faq/FaqView.tsx, src/app/Ecosystem/faq/page.tsx
updated: 2026-11-23
---
# FAQ: Entity resolution & graph intelligence

This file holds the "Entity resolution & graph intelligence" section of the ContexQ Frequently Asked Questions page (Page: /Ecosystem/faq, section anchor /Ecosystem/faq#entity-resolution). It is section 2 of 16 on the page, in the "Foundations" group, and appears in the page's "Jump to" topic bar as "Entity Resolution". It contains 6 questions, each with the answer exactly as published on the site.

## Section introduction

Understand how scattered records become a usable picture of customers, companies and networks.

Section link on the FAQ page: "Explore entity resolution", which leads to /Platform/entity.

## Questions and answers

### What is entity resolution?

Entity resolution identifies records that may refer to the same real-world person, company, place or other entity, even when names, formats or identifiers differ. It helps teams move from disconnected records to a more consistent view.

### How is entity resolution different from simple deduplication?

Deduplication often focuses on removing duplicate entries in one dataset. Entity resolution can assess evidence across multiple sources and connect records that look different but refer to the same underlying entity.

### Can ContexQ connect records with spelling differences or different scripts?

ContexQ uses matching approaches designed to work across variants of names, languages and scripts. Actual coverage and matching quality depend on the source data, identifiers and the configuration evaluated for a use case.

### What is a knowledge graph?

A knowledge graph represents entities and the relationships between them. It can show, for example, how a borrower connects to directors and suppliers, or how several accounts connect through a device, address or beneficiary.

### How is ContexQ different from a graph database?

A graph database is primarily a way to store and query connected data. ContexQ provides a broader intelligence workflow that includes resolving entities, linking sources, enriching context and supporting evidence-based analysis. The underlying storage architecture is a separate implementation choice.

### What is network generation and why does it matter?

Network generation assembles relevant entities and their connections around a question. It helps an analyst trace indirect ownership, find a shared upstream supplier or see accounts that appear unrelated when examined individually.
