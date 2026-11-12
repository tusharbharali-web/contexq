window.CUSTOMERS_DATA = {
  "footnote": "Scenarios are illustrative.",
  "defaultSlug": "trading",
  "pages": [
    {
      "slug": "trading",
      "file": "Trading.html",
      "tabLabel": "Trading",
      "hero": {
        "eyebrow": "CUSTOMERS · TRADING",
        "headline": "Know who you trade with, before the deal closes.",
        "subline": "ContexQ shows who really owns and runs the companies on the other side of your trades, with the evidence behind every finding.",
        "chips": ["Ownership mapping", "Enhanced due diligence", "Evidence trail"],
        "diagram": {
          "caption": "The path surfaces a hidden link, with the evidence. (illustrative)",
          "nodes": [
            { "id": "counterparty", "label": "Counterparty", "x": 20, "y": 18 },
            { "id": "holding", "label": "Holding company", "x": 76, "y": 18 },
            { "id": "director", "label": "Director", "x": 76, "y": 60 },
            { "id": "unlinked", "label": "Unlinked company", "x": 22, "y": 82 }
          ],
          "edges": [
            { "from": "counterparty", "to": "holding", "dashed": false, "tag": null },
            { "from": "holding", "to": "director", "dashed": false, "tag": null },
            { "from": "director", "to": "unlinked", "dashed": true, "tag": "Review required" }
          ]
        }
      },
      "stories": [
        {
          "id": "trading-tata-international",
          "customerName": "Tata International",
          "customerDescriptor": null,
          "logo": "/assets/images/customers/Tata_logo.jpeg",
          "logoPlaceholder": null,
          "stage": "Customer",
          "status": null,
          "title": null,
          "description": "We provided Tata International with comprehensive KYC forensic intelligence and enhanced due diligence to support the assessment of a potential multi-billion-dollar M&A transaction. By examining relevant entities, uncovering potential risks, and providing deeper insights into the parties involved, we helped strengthen their risk assessment, support informed decision-making, and bring greater confidence to the evaluation of this high-value transaction.",
          "challenge": null,
          "approach": null,
          "outcome": null,
          "diagram": null,
          "sample": false,
          "sampleFields": []
        },
        {
          "id": "trading-sg-trading-company",
          "customerName": null,
          "customerDescriptor": "A large Singapore-based trading company",
          "logo": null,
          "logoPlaceholder": null,
          "stage": "Proof of concept",
          "status": "Ongoing",
          "title": "Enhanced due diligence on a Tanzanian construction company",
          "description": "Deeper checks on a high-risk counterparty in one place: ownership down to the real people, links to other companies, and sanctions or negative news, each with its evidence.",
          "challenge": "Little visibility into who owns and controls an overseas counterparty.",
          "approach": "Build the ownership map automatically and put deeper checks on a high-risk customer in one place.",
          "outcome": "Evaluation in progress.",
          "diagram": null,
          "sample": false,
          "sampleFields": []
        }
      ],
      "process": null,
      "comingSoon": null,
      "cta": { "headline": "Skeptical? Good. Bring your counterparties.", "buttonLabel": "Talk to the team" }
    },
    {
      "slug": "banks",
      "file": "banking.html",
      "tabLabel": "Banks",
      "hero": {
        "eyebrow": "CUSTOMERS · BANKING",
        "headline": "Enhanced due diligence on SMEs with a thin file.",
        "subline": "When a small company has little public history, ContexQ builds the picture from ownership, trade and open data, and shows the evidence.",
        "chips": ["Ownership down to real people", "Evidence-checked credit view", "Always-current reviews"],
        "diagram": {
          "caption": "Ownership mapped down to the real people. (illustrative)",
          "nodes": [
            { "id": "sme", "label": "SME borrower", "x": 20, "y": 18 },
            { "id": "owner", "label": "Owner", "x": 76, "y": 18 },
            { "id": "related", "label": "Related company", "x": 76, "y": 60 },
            { "id": "verified", "label": "Verified", "x": 22, "y": 82 }
          ],
          "edges": [
            { "from": "sme", "to": "owner", "dashed": false, "tag": null },
            { "from": "sme", "to": "verified", "dashed": false, "tag": null },
            { "from": "owner", "to": "related", "dashed": true, "tag": "Review required" }
          ]
        }
      },
      "stories": [
        {
          "id": "banks-universal-bank",
          "customerName": null,
          "customerDescriptor": "A large universal bank",
          "logo": null,
          "logoPlaceholder": null,
          "stage": "Beta / proof of value",
          "status": "Ongoing",
          "title": "Enhanced due diligence on SME corporates with a thin file",
          "description": "The platform builds the ownership map automatically, puts deeper checks on high-risk customers in one place, and checks the borrower's own claims against independent sources.",
          "challenge": "Checks take hours and go stale, and thin files give little to check.",
          "approach": "Build the ownership map, run deeper checks on high-risk customers, and verify claims against independent data.",
          "outcome": "Beta in progress.",
          "diagram": null,
          "sample": false,
          "sampleFields": []
        }
      ],
      "process": [
        { "step": 1, "title": "Match", "text": "One identity across sources" },
        { "step": 2, "title": "Connect", "text": "Who owns, runs or pays whom" },
        { "step": 3, "title": "Explain", "text": "Every finding with its evidence" }
      ],
      "comingSoon": null,
      "cta": { "headline": "Skeptical? Good. Bring your portfolio.", "buttonLabel": "Talk to the team" }
    },
    {
      "slug": "manufacturing",
      "file": "Manufacturing.html",
      "tabLabel": "Manufacturing",
      "hero": {
        "eyebrow": "CUSTOMERS · MANUFACTURING",
        "headline": "Your suppliers' suppliers are your risk.",
        "subline": "ContexQ maps the supplier layers beneath your direct suppliers, so you find hidden risk and better alternatives before you negotiate.",
        "chips": ["N-tier supplier map", "Risk scoring", "Ranked alternates"],
        "diagram": {
          "caption": "Three \"independent\" suppliers, one hidden dependency. (illustrative)",
          "nodes": [
            { "id": "t1", "label": "Tier-1", "x": 17, "y": 16 },
            { "id": "t2", "label": "Tier-2", "x": 50, "y": 16 },
            { "id": "t3", "label": "Tier-3", "x": 83, "y": 16 },
            { "id": "plant", "label": "Shared plant", "x": 50, "y": 76, "tag": "Single source", "highlight": true }
          ],
          "edges": [
            { "from": "t1", "to": "plant", "dashed": false, "tag": null },
            { "from": "t2", "to": "plant", "dashed": false, "tag": null },
            { "from": "t3", "to": "plant", "dashed": false, "tag": null }
          ]
        }
      },
      "stories": [
        {
          "id": "manufacturing-manufacturer",
          "customerName": null,
          "customerDescriptor": "A manufacturing company",
          "logo": null,
          "logoPlaceholder": null,
          "stage": "Proof of concept",
          "status": "Ongoing",
          "title": "Identifying key supplier risks and alternatives to negotiate better",
          "description": "Rebuilds the supplier network layer by layer, scores each supplier for failure, fraud and geopolitical risk, and suggests better alternates.",
          "challenge": "Hidden shared dependencies behind suppliers that look independent.",
          "approach": "Map the supplier network by tier, score risk, and rank alternates.",
          "outcome": "POC in progress.",
          "diagram": null,
          "sample": false,
          "sampleFields": []
        }
      ],
      "process": [
        { "step": 1, "title": "See beyond Tier-1", "text": null },
        { "step": 2, "title": "Find better alternates", "text": null },
        { "step": 3, "title": "Negotiate with the full picture", "text": null }
      ],
      "comingSoon": null,
      "cta": { "headline": "Skeptical? Good. Bring your supplier list.", "buttonLabel": "Talk to the team" }
    },
    {
      "slug": "government",
      "file": "Government.html",
      "tabLabel": "Government",
      "hero": {
        "eyebrow": "CUSTOMERS · GOVERNMENT",
        "headline": "One view across scattered public records.",
        "subline": "Tax, customs and justice agencies work with fragmented records and hidden links. This is our direction for the public sector.",
        "chips": ["Tax", "Customs", "Justice"],
        "diagram": {
          "caption": "Illustrative: three names, one party.",
          "nodes": [
            { "id": "i1", "label": "Importer A", "x": 17, "y": 16 },
            { "id": "i2", "label": "Importer B", "x": 50, "y": 16 },
            { "id": "i3", "label": "Importer C", "x": 83, "y": 16 },
            { "id": "shared", "label": "Shared owner and address", "x": 50, "y": 76, "highlight": true }
          ],
          "edges": [
            { "from": "i1", "to": "shared", "dashed": false, "tag": null },
            { "from": "i2", "to": "shared", "dashed": false, "tag": null },
            { "from": "i3", "to": "shared", "dashed": false, "tag": null }
          ]
        }
      },
      "stories": [],
      "process": null,
      "comingSoon": {
        "title": "Coming soon"
      },
      "cta": { "headline": "Working in tax, customs or justice?", "buttonLabel": "Talk to the team" }
    }
  ]
};
