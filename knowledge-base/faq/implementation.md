---
title: FAQ - Data, integration & deployment
url: /Ecosystem/faq
category: FAQ
status: live
source: src/app/Ecosystem/faq/faq-data.ts, src/app/Ecosystem/faq/FaqView.tsx, src/app/Ecosystem/faq/page.tsx
updated: 2026-11-23
---
# FAQ: Data, integration & deployment

This file holds the "Data, integration & deployment" section of the ContexQ Frequently Asked Questions page (Page: /Ecosystem/faq, section anchor /Ecosystem/faq#implementation). It is section 3 of 16 on the page, in the "Foundations" group, and appears in the page's "Jump to" topic bar as "Integration". It contains 8 questions, each with the answer exactly as published on the site.

## Section introduction

Questions about starting, connecting data, governance and working with existing systems.

Section link on the FAQ page: "Explore data & analytics", which leads to /Platform/analytics.

## Questions and answers

### Do we need perfect data before we begin?

No organisation needs to assume all data is already clean. Entity resolution is intended to help with fragmented and inconsistent records. A sensible starting point is to assess the quality and coverage of the data needed for one defined decision.

### What kinds of internal data are useful?

This depends on the use case. Typical inputs include customer and supplier masters, CRM or ERP records, transactions, claims, contracts, device or event logs, and case-management information. Only relevant, permitted data should be used.

### What external intelligence can be added?

Examples include company registries, ownership information, sanctions and watchlists, news, adverse media, trade data and environmental or disruption signals. Availability and licences need to be confirmed for each deployment.

### Can we use data providers and licences we already have?

ContexQ is designed to work with existing data sources and licences. The exact connectors, access rights and redistribution restrictions should be reviewed during scoping rather than assumed.

### Can ContexQ integrate with our CRM, ERP or investigation tools?

The platform is designed to complement existing systems and bring connected insights back into familiar workflows. Integration methods, permissions and the data exchanged would be agreed based on your environment.

### Can the solution be deployed in a private environment?

ContexQ supports private-cloud and other controlled deployment patterns. Which options are available for your use case, and the associated security and residency commitments, should be validated with the technical team.

### How are findings explained to reviewers?

ContexQ emphasises traceable relationships and source-backed findings. Reviewers should be able to see why a signal was raised and examine the underlying evidence, rather than relying on an unexplained score alone.

### What is a sensible first step for evaluation?

Choose one priority decision, agree the relevant data and success criteria, and review a representative set of cases with the business and technology teams. This helps establish fit before expanding to more functions or datasets.
