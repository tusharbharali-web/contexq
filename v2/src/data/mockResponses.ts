import { ChatResponse } from '../types/chat';

export interface PredefinedCategory {
  category: 'company_overview' | 'supply_chain' | 'money_mule' | 'risk_management' | 'contact' | 'unknown';
  keywords: string[];
  response: ChatResponse;
}

export const MOCK_RESPONSE_CATEGORIES: PredefinedCategory[] = [
  // A. Company Overview
  {
    category: 'company_overview',
    keywords: [
      'what does contexq do',
      'tell me about contexq',
      'about contexq',
      'what services do you offer',
      'what do you do',
      'company overview',
      'who are you',
      'overview'
    ],
    response: {
      message: `ContexQ is a decision intelligence and graph analytics company that helps organisations resolve fragmented data into unified networks to manage risk and compliance.

Our core focus areas include:
* **Composite Graph Intelligence**: Connecting disparate enterprise silos with external context to map complex entity relationships and ownership trails.
* **Cross-Script Entity Resolution**: Disambiguating and matching records, aliases, and identifiers across multiple languages and alphabets.
* **Specialised Risk Solutions**: Providing targeted intelligence for anti-money laundering, supply chain visibility, and corporate risk management.

Would you like to explore our Supply Chain Intelligence, Money Mule Detection, or speak with our team?`,
      sources: []
    }
  },

  // B. Supply Chain Intelligence
  {
    category: 'supply_chain',
    keywords: [
      'supply chain',
      'supply chain intelligence',
      'supplier risk',
      'third-party risk',
      'third party risk',
      'tier-2',
      'tier-3',
      'suppliers',
      'vendor risk'
    ],
    response: {
      message: `ContexQ's Supply Chain Intelligence helps enterprises identify hidden dependencies and vulnerabilities across extended supplier networks.

Key capabilities include:
* **Multi-Tier Visibility**: Mapping connections beyond direct Tier-1 vendors to uncover upstream Tier-2 and Tier-3 dependencies.
* **Geographic & Concentration Risk**: Pinpointing critical chokepoints where multiple suppliers rely on a single facility, region, or sub-supplier.
* **Ownership & Integrity Screening**: Checking suppliers against beneficial ownership records and compliance signals to maintain supply chain continuity.

If your team is managing vendor or supply chain risks, you can request a discussion through the form below.`,
      sources: []
    }
  },

  // C. Money Mule Detection
  {
    category: 'money_mule',
    keywords: [
      'money mule',
      'mule detection',
      'mule account',
      'financial crime',
      'financial institutions',
      'aml',
      'fraud ring',
      'money laundering'
    ],
    response: {
      message: `Money Mule Detection at ContexQ enables financial institutions to uncover networks of accounts used to funnel illicit funds.

Our methodology focuses on:
* **Network-Level Analysis**: Moving beyond isolated transactions to inspect connected clusters of accounts and entities.
* **Behavioral and Relationship Patterns**: Identifying circular capital flows, rapid cross-account movement, and shared digital identifiers.
* **Beneficial Entity Matching**: Linking account holders across aliases and variations to surface coordinated fraud rings.

Would you like to speak with a ContexQ specialist to learn more about how this applies to financial compliance?`,
      sources: []
    }
  },

  // D. Risk Management
  {
    category: 'risk_management',
    keywords: [
      'risk intelligence',
      'risk management',
      'investigate risks',
      'risk capabilities',
      'manage risk',
      'compliance',
      'kyc',
      'investigation'
    ],
    response: {
      message: `ContexQ provides risk intelligence solutions designed to give investigation and compliance teams defensible, contextual insight.

Our platform supports organisations by:
* **Unifying Internal and External Context**: Merging proprietary enterprise records with corporate registries, sanctions lists, and relevant public intelligence.
* **Explainable Risk Paths**: Ensuring every score or alert can be traced back to clear graph relationships for audit and regulatory compliance.
* **Proactive Monitoring**: Highlighting emerging connections to high-risk entities or jurisdictions before transactions settle.

You can submit an enquiry below to discuss how our risk capabilities integrate with your workflow.`,
      sources: []
    }
  },

  // E. Contact and Enquiries
  {
    category: 'contact',
    keywords: [
      'contact',
      'schedule a demo',
      'demo',
      'speak with your team',
      'talk to team',
      'reach out',
      'sales',
      'meeting',
      'call back',
      'email'
    ],
    response: {
      message: `You can connect directly with the ContexQ team to schedule a demo or discuss your organisation's requirements.

Please use the **"Talk to our team"** button below to submit your details, or request a callback, and our team will get in touch with you.`,
      needsHumanHandover: true,
      sources: []
    }
  }
];

export const UNKNOWN_QUESTION_RESPONSE: ChatResponse = {
  message: "I don't have verified information about that at the moment. I can connect you with the ContexQ team for clarification.",
  needsHumanHandover: true,
  sources: []
};

