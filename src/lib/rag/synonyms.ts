/**
 * Site-specific synonyms for the chatbot search. When a visitor's question contains a
 * phrase on the left, the words on the right are added to the search, so different
 * wording still finds the right knowledge base section. Keep entries lowercase.
 * Add to this list when the search test (npm run kb:eval) shows a miss.
 */
export const SYNONYMS: [RegExp, string][] = [
  // Company and people
  [/\b(ceo|founder|founders|co-?founder|who (runs|leads|started|founded|owns)|leadership|management|boss)\b/, 'team founder leadership chief executive'],
  [/\b(cto|technology head|tech lead)\b/, 'chief technology officer team'],
  [/\b(advisor|advisors|adviser|board)\b/, 'advisor advisory board team'],
  [/\b(who are you|about (you|contexq|the company)|what is contexq|what does contexq do|company)\b/, 'about company overview mission'],
  [/\b(where are you|located|location|office|offices|headquarter|hq|address)\b/, 'address singapore headquartered contact'],
  [/\b(job|jobs|hiring|vacanc|career|careers|work (for|at|with) you|openings?|internship)\b/, 'careers open roles apply'],
  [/\b(email|phone|call you|contact|reach you|whatsapp|get in touch)\b/, 'contact email phone inquiry'],
  [/\b(price|prices|pricing|cost|costs|quote|subscription|licen[cs]e fee)\b/, 'contact team walkthrough'],
  [/\b(demo|walkthrough|trial|pilot|poc|proof of (concept|value))\b/, 'walkthrough proof of value pilot contact'],

  [/\b(how (big|large)|how many (people|employees|staff)|team size|headcount|employees|staff)\b/, 'colleagues full-time team nationalities'],
  [/\b(train(ing)?( ai)? models?|use (our|my|customer) data|data (is |be )?used for)\b/, 'train outside models data never used principles'],
  [/\b(law|laws|jurisdiction|governing|governed|courts?)\b/, 'governed laws singapore courts'],
  [/\b(how long|remember|retention|retain|kept|keep)\b/, 'kept months retained period'],

  // Platform
  [/\b(sarasw|platform|product|how does (it|contexq) work|architecture)\b/, 'platform sarasw resolve infer explain'],
  [/\b(clean|cleansing|data quality|messy data|dedupe|deduplicat)\b/, 'data cleansing standardise repair'],
  [/\b(entity resolution|matching|match records|golden record|duplicates?|same person|identity)\b/, 'entity resolution match records'],
  [/\b(graph|network|relationships?|connections?|links?|knowledge graph)\b/, 'contextual network knowledge graph relationships'],
  [/\b(score|scores|scoring|rating|risk band|decision pack)\b/, 'composite scores decision packs bands'],
  [/\b(investigat|case|cases|recommend|action|actions|workflow|analyst)\b/, 'investigation recommendations actions'],
  [/\b(security|secure|encrypt|privacy|data residency|on[- ]prem|cloud|deploy|deployment|hosting)\b/, 'security deployment environment data'],
  [/\b(integrat|api|connect to|existing systems?|implementation|onboard|set ?up|how long)\b/, 'implementation integration systems'],

  [/\b(on its own|by itself|automatic(ally)?|autonomous(ly)?|without (a )?human|auto[- ]?(block|act|decide))\b/, 'people decide informs nothing happens automatically review'],
  [/\b(where (is|does) (my|our|the) data|data (live|stored|storage|location|residency)|physically|which country|region)\b/, 'stored country region choose private environment'],
  [/\b(circles?|circular|round[- ]trip|loops?|back to (the )?(start|origin))\b/, 'circular flows return where they began cycle'],
  [/\b(proof|prove|guilty|wrongdoing|mean (it'?s |its )?fraud|accus)\b/, 'not proof clue assess review wrongdoing'],
  [/\b(block|blocks|decline|declines|stop (orders|payments|transactions))\b/, 'does not approve decline block transactions'],

  [/\b(false positives?|false alarms?|fewer alerts|reduce (the )?alerts|cut (the )?alerts|alert volume|how much (can|could|will|would) (you|it) (cut|reduce|save))\b/, 'fewer false alarms alerts gains projections'],
  [/\b(label|labelled|labeled|brand|accuse|treat(ed)? as (a )?(criminal|launderer|fraudster))\b/, 'not proof wrongdoing review'],
  [/\b(collections?|recover(y|ies)|debt|arrears|delinquen)\b/, 'collections recoveries right party'],
  [/\b(pilot|trial|poc|proof of (concept|value)|try it|test it)\b/, 'replay year data bring us one call to action'],

  // Solutions
  [/\b(aml|anti[- ]money|money laundering|laundering|financial crime|sanction|str|sar)\b/, 'anti-money laundering aml financial crime'],
  [/\b(mule|mules|money mule|scam|scams|fraud|fraudulent|card testing)\b/, 'fraud mule scam'],
  [/\b(kyc|kyb|know your customer|due diligence|cdd|edd|onboarding checks?|ubo|beneficial owner|ownership)\b/, 'kyc know your customer due diligence ownership'],
  [/\b(supply chain|supplier|suppliers|vendor|vendors|procurement|sourcing|tier[- ]?[123])\b/, 'supply chain intelligence supplier procurement'],
  [/\b(risk|credit|exposure|early warning|default|portfolio|lending|borrower)\b/, 'risk credit early warning'],
  [/\b(customer intelligence|cross[- ]sell|upsell|growth|relationship manager|rm|wallet share|prospect)\b/, 'customer intelligence growth relationship'],

  // Industries and customers
  [/\b(bank|banks|banking|financial services|fintech|lender)\b/, 'banking finance financial services'],
  [/\b(insurance|insurer|claims?|policyholder|underwrit)\b/, 'insurance claims'],
  [/\b(telco|telecom|telecommunications|mobile operator|sim|subscriber)\b/, 'telecom telco subscriber'],
  [/\b(e-?commerce|retail|marketplace|online store|merchant|seller)\b/, 'ecommerce retail marketplace'],
  [/\b(manufactur|factory|factories|industrial|parts|production)\b/, 'manufacturing supplier'],
  [/\b(government|public sector|ministry|agency|agencies|tax|customs)\b/, 'public sector government'],
  [/\b(case stud(y|ies)|customer stor(y|ies)|who uses|using contexq|references?|tata|any (customers?|clients?)|your (customers?|clients?))\b/, 'customer stories'],

  // Ecosystem
  [/\b(award|awards|won|win|recognition|recognised|prize|finalist|grant)\b/, 'awards recognition'],
  [/\b(partner|partners|partnership|affiliat|member|investor|backed|backer)\b/, 'affiliations partners programmes'],
  [/\b(blog|article|articles|insight|insights|news|press|announcement|media)\b/, 'insights blog press release'],
  [/\b(cookie|cookies|tracking|analytics)\b/, 'cookie policy'],
  [/\b(privacy|personal data|gdpr|pdpa|data protection)\b/, 'privacy policy personal data'],
  [/\b(terms|conditions|legal|liability)\b/, 'terms conditions'],
];

/** Returns the extra search words for a question (empty string if none apply). */
export function expandQuery(question: string): string {
  const q = question.toLowerCase();
  return SYNONYMS.filter(([re]) => re.test(q))
    .map(([, words]) => words)
    .join(' ');
}
