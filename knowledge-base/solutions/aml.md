---
title: Anti-money laundering (AML) - See the network behind every alert
url: /solutions/aml
category: Solutions
status: live
source: src/app/solutions/aml/page.tsx, src/views/solution-aml/View.tsx, src/views/solution-aml/behavior.js, src/views/_runtime/manifest.json
updated: 2026-11-23
---
# Anti-money laundering (AML): See the network behind every alert

The ContexQ anti-money laundering (AML) solution page (Page: /solutions/aml) explains how ContexQ works alongside a bank's existing AML systems and adds context: who customers and their counterparties really are, and how they link. It covers where ContexQ fits in the AML process (customer checks, screening, monitoring, investigation), how it works, four example patterns, recommended next steps on cases, three layers of detection, projected benefits (labelled as projections, not customer results), and trust and security points. ContexQ does not replace existing AML systems.

Page metadata:
- Browser title: "Anti-money laundering: see the network behind every alert | ContexQ"
- Description: "ContexQ works alongside your existing AML systems, connecting customers, companies and payments with outside information so your team clears fewer false alarms and finds the risk single alerts miss."
- The route metadata also uses the title "AML Detection & Network Entity Resolution" with the description "Resolve customers and counterparties to real-world identities, map laundering networks across jurisdictions, and deliver regulator-ready, explainable scores."

## Hero: See the network behind every alert.

Headline: "See the network behind every alert."

ContexQ works alongside your existing AML systems and adds the context they need: who customers and their counterparties really are, and how they link. Your team spends less time clearing alerts and more time on real risk.

- Button: "See where ContexQ fits" (jumps to the "Where ContexQ fits" section on the same page).
- Note under the button: "No replacement of your current systems."

### Hero animation (illustrative)

The hero shows an illustrative animation of a money-laundering trail. Money moves from cash deposits through a personal account, a shell company, another account and a trading company to a final beneficiary across several countries, covering the stages of placement, layering and integration:
- Cash deposits (Country A)
- Personal account (Country A)
- Shell company (Country B)
- Account (Country C)
- Trading company (Country D)
- Final beneficiary (Country E)

Two alerts each see one step and are closed as normal ("Alert closed: looks normal"). ContexQ takes in customer (KYC), registry and watchlist records and traces the whole trail. It finds that the two companies share a hidden owner ("Same hidden owner") and that the final beneficiary is a relative of a sanctioned person. The result is one case covering the full money trail: "One case: the full money trail" with the points "Funds layered through several countries", "Two companies, one hidden owner" and "Linked to a sanctioned person".

The animation has four steps:
1. Money moves: each alert sees one step.
2. ContexQ connects: records joined up.
3. Trail revealed: hidden owner, sanctioned link.
4. One case: ready for review.

Legend: Money; Record into ContexQ; Hidden link.

## Why it matters: AML effort keeps rising. Context makes it count.

Teams review alerts one at a time and gather information by hand across many systems. With the right context, every step can focus on the cases that matter.

Statistics shown on the AML page (labelled "Commonly cited industry estimates."):
- 90%+ of alerts are typically closed with no action.
- 60 to 80% of investigator time goes on gathering information.
- <1% (less than 1%) of laundered money worldwide is estimated to be seized.

## Where ContexQ fits: Keep your AML systems. Make every step stronger.

ContexQ doesn't replace anything. It joins your data with outside sources once, and every step you already run benefits. The AML page compares four steps, today versus with ContexQ:

1. Customer checks
   - Today: Ownership is taken as declared.
   - With ContexQ: Real owners and links to sanctioned people are surfaced.
2. Screening
   - Today: Name matches on lists and news create many hits to clear.
   - With ContexQ: News read in any language and matched on more than a name.
3. Monitoring
   - Today: Alerts are reviewed one at a time.
   - With ContexQ: Related alerts grouped and ranked by risk.
4. Investigation
   - Today: Evidence is gathered by hand across systems.
   - With ContexQ: Ownership, payments and news in one place, ready to review.

## How it works: Built once. Used by every check.

ContexQ joins up your customer, payment and outside data once. Every check you already run can then draw on it. The four steps of how ContexQ AML works:

1. Bring the data together: Your customer, account and payment records, joined with company registries, watchlists and news.
2. Recognise the real parties: The same person or company identified across systems, spellings and languages.
3. Map the connections: Owners, directors, shared addresses and money flows linked into one view.
4. Score and explain: Risk judged on everyone involved, with the reason behind every alert.

Feedback loop: Your investigators' decisions feed back in, so results improve over time.

## See the difference: What an alert sees. What ContexQ reveals.

Four patterns, and what each looks like with and without ContexQ:

1. Money in, straight out
   - Without ContexQ: Payments from several countries reach a fund. Each looks normal.
   - With ContexQ: The money leaves the next day, to the fund CEO's personal account.
2. A hidden connection
   - Without ContexQ: A company pays a person abroad. No list match.
   - With ContexQ: That person's business partners are related to a sanctioned individual.
3. Customers acting together
   - Without ContexQ: Many customers buy and sell currency, each raising an alert.
   - With ContexQ: Three share a director and address: one real case to review.
4. Is this news about your customer?
   - Without ContexQ: A news article mentions a similar name ("name match?", "one of thousands of hits").
   - With ContexQ: Matched in its own language on places, business and associates: a strong hit. The diagram shows a news article with language tags "ES", "中文" and "عربي", checked against your customer on Name, Places, Business and Associate.

## From insight to action: Every case arrives with a recommended next step.

ContexQ explains why a case was raised, ranks it against your other work, and suggests what to do next, inside the case manager your team already uses.

- Prioritised: The highest-risk cases come first.
- Explained: Plain reasons, each linked to the records behind it.
- Actionable: Suggested steps your team can approve, edit or dismiss.

### Example case card: Possible layering through a fund

Priority: High priority.

Why it was raised:
- Inflows from several countries
- Paid out the next day
- To the CEO's personal account
- Same total in and out

Suggested next steps:
1. Review the fund's inflows and outflows together
2. Ask the customer for the source of funds
3. Prepare a suspicious-transaction report with the evidence attached

"Your investigator reviews and decides. Nothing happens automatically."

## Detection: Three layers of risk, not one.

Keep the checks your regulator already knows, and add what outside data and connections reveal. The three layers of ContexQ AML detection (shown building up as "Your data", "+ Outside data", "+ The network"):

1. Layer one, what you check today: Your transactions. Money moving fast through an account, payments split to stay under limits, unusual cash.
2. Layer two, adds outside data: Who you are dealing with. Payments to companies that have closed, links to watchlists, one person behind dozens of companies.
3. Layer three, adds connections: Who they are connected to. Risky parties two or more steps away, and money funnelled through linked accounts.

Built to grow with you: Detection is written as tested, version-controlled code, so your team can add new checks without waiting for a product release.

## What your bank gains: Fewer false alarms. Faster cases. Hidden risk found.

Start with the alerts you already have. Each step is proven on your own data before the next.

1. Fewer false alarms: Low-risk alerts are closed with clear reasons, so teams focus on what matters. Figure: "Up to 60-90% fewer alerts to review"*.
2. Faster investigations: Investigators start from a ready-made picture of who is involved, not a blank page. Figure: "10%+ of alerts worth working, from under 1%"*.
3. Hidden risk found: Links to risky parties through companies, owners and other accounts come to light. Result: "New cases that only show when records are linked".

*Caveat shown on the page: "Projections, not customer results. A pilot confirms each figure on your data."

## Built for regulated banks: Explainable, secure and easy to start.

Designed for the scrutiny of your regulator, auditors and security team.

- Works with your systems: Keep your monitoring, case management and reporting.
- Every decision explained: Each case shows why it was raised, traced to its source.
- Your data stays with you: Runs inside your bank's environment.
- Your team decides: ContexQ ranks and explains. People make the call.

## Call to action: See what ContexQ finds in your alerts.

A short session with your financial crime team to agree a pilot.

- Button: "Talk to the team" (links to the contact page, /contact).
- Or email: inquiry@contexq.com (the email link pre-fills the subject "AML enquiry").
