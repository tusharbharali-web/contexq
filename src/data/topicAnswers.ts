import type { ChatResponse } from '../types/chat';

/**
 * Pre-written answers for the suggested topic buttons (src/data/suggestedQuestions.ts).
 * Written only from the knowledge base and reviewed once, they are answered instantly
 * and use no Groq tokens. Keys are the button question, lowercased without punctuation.
 * If you change a button's question text, update its key here too.
 */
export const TOPIC_ANSWERS: Record<string, ChatResponse> = {
  "what does contexq do": {
    message: "ContexQ is a Singapore-headquartered decision intelligence company. Its platform, SarasW, resolves fragmented data into real people, companies and relationships across names, scripts and borders, so banks, corporates and governments can see the whole network behind every decision. It connects records about people, companies, accounts, suppliers and events, enriches them with relevant external information, and reveals relationships that may change a business or risk decision. ContexQ works alongside your existing systems rather than replacing them: every insight comes with its evidence, and your people make the call. [Learn more about ContexQ](/about)",
    sources: [{"title": "About ContexQ | Context in every decision", "category": "Company", "url": "/about"}, {"title": "FAQ - The ContexQ platform", "category": "FAQ", "url": "/Ecosystem/faq"}],
  },
  "tell me about supply chain intelligence": {
    message: "ContexQ Supply Chain Intelligence helps you see the suppliers behind your suppliers. It links your supplier and purchasing records (ERP, sourcing, planning and logistics, connected read-only) with company, ownership, trade, sanctions, news and hazard information, so you can:\n\n- Uncover shared dependencies where separate suppliers rely on the same source\n- Understand which sites and parts a weather, climate or geopolitical disruption could affect\n- Assess alternative suppliers alongside ownership, site exposure and qualification needs\n- Uncover procurement fraud such as ghost vendors, bid rigging and payment diversion\n\nIt works alongside your ERP and sourcing tools, and your team makes every decision. [Explore Supply Chain Intelligence](/solutions/supply-chain-intelligence)",
    sources: [{"title": "Supply chain intelligence - See the suppliers behind your suppliers", "category": "Solutions", "url": "/solutions/supply-chain-intelligence"}],
  },
  "how does money mule detection work": {
    message: "A mule account looks innocent on its own; it only looks suspicious alongside the others. ContexQ works alongside your existing fraud engine and:\n\n- Brings together accounts, payments, devices and sign-up records\n- Recognises the same person behind different accounts, apps, phones and spellings\n- Maps recruiters, shared phones, money flows and cash-out points into one view\n- Scores and explains the risk, so a whole mule ring becomes one case\n\nNew accounts are checked against known mule accounts, so one that shares a phone, recruiter or pattern with a known ring can be flagged on day one. Your analysts review and decide; nothing happens automatically. [See Fraud and mule detection](/solutions/fraud)",
    sources: [{"title": "Fraud and mule detection - Stop the fraud network, not just the account", "category": "Solutions", "url": "/solutions/fraud"}, {"title": "FAQ - Fraud & mule detection", "category": "FAQ", "url": "/Ecosystem/faq"}],
  },
  "what risk intelligence solutions do you offer": {
    message: "ContexQ Risk Management brings together information about your customers, their owners, their payments and the news around them, so your team spots risk early, for example before a first missed payment, and sees the evidence behind every alert. It recognises the same person or business across records, traces ownership through layers of companies, and turns signals into ranked cases with the evidence attached. It works on top of your existing checks and scores; results depend on your own data and history. Related solutions include [AML](/solutions/aml), [KYC](/solutions/kyc), [Fraud](/solutions/fraud) and [Supply Chain Intelligence](/solutions/supply-chain-intelligence). [Explore Risk Management](/solutions/risk)",
    sources: [{"title": "Risk management - See the warning signs. Understand the risk. Act sooner.", "category": "Solutions", "url": "/solutions/risk"}],
  },
};
