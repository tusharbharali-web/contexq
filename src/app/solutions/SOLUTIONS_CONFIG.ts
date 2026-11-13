/**
 * Solutions Configuration System
 *
 * This file defines the structure and content for all solution pages.
 * To create a new solution page, add an entry here following the SolutionConfig type,
 * then use the GenericSolutionTemplate component with this config.
 */

export interface SolutionConfig {
  // Basic metadata
  slug: string;           // URL slug (e.g., "supply-chain-intelligence")
  title: string;          // Solution name
  description: string;    // Meta description

  // Color scheme
  colors: {
    primary: string;      // Main accent color (hex)
    secondary: string;    // Secondary color
    accent: string;       // Warning/attention color
    success: string;      // Success/positive color
  };

  // Hero section
  hero: {
    eyebrow: string;      // Top label (e.g., "Supply Chain Intelligence")
    quote: string;        // Main quote with <em> tags for emphasis
    h1Words: [string, string, string]; // Three animated words (e.g., ["Lean", "Nimble", "Decisive"])
    subheading: string;   // Subtitle describing the solution
    visualization?: {
      type: 'canvas' | 'svg' | 'threejs'; // Type of hero visualization
      svgViewBox?: string;
      svgContent?: string; // Raw SVG content
    };
    // Text card below visualization (optional)
    textCard?: {
      enabled: boolean;   // Show/hide the text card
      rows: Array<{
        label: string;    // Label (e.g., "Signals in", "Outcome")
        content: string[] | Array<{label: string; color: string}>; // Content (text or items with colors)
        isChips?: boolean; // If true, content is treated as chip items with colors
      }>;
    };
  };

  // Sections
  sections: {
    '01': {
      label: string;      // Label under the number (e.g., "The Challenge")
      title: string;      // Section title
      left: {
        heading: string;  // Left side heading (e.g., "Today's Reality")
        subheading?: string; // Optional subheading with <em> tags
        content: string[]; // Array of paragraphs
        visualization?: {
          type: 'svg' | 'image';
          svgContent?: string; // Raw SVG content
          imageSrc?: string;   // Image path
          description?: string;
        };
        quote?: string;   // Optional callout quote
      };
      right: {
        heading: string;  // Right side heading (e.g., "With ContexQ")
        isPositive?: boolean; // Make heading green if true
        subheading?: string; // Optional subheading with <em> tags
        content: string[]; // Array of paragraphs
        visualization?: {
          type: 'svg' | 'image';
          svgContent?: string;
          imageSrc?: string;
          description?: string;
        };
      };
    };
    '02': {
      label: string;
      title: string;
      intro?: {
        quote: string;    // Section intro quote with <em> tags
        description: string;
      };
      left: {
        heading: string;
        subtext?: string; // Optional sub-heading
        content: string[];
        outcome: {
          type: 'bad' | 'good';
          icon: string;
          title: string;
          description: string;
        };
      };
      right: {
        heading: string;
        subtext?: string;
        content: string[];
        summary?: Array<{  // Optional summary card above outcome (max 4 items)
          key: string;
          value: string;   // Can include <strong> and <em> tags
          status?: string; // Status/confidence indicator (e.g., "conf 96%", "resolved")
        }>;
        outcome: {
          type: 'bad' | 'good';
          icon: string;
          title: string;
          description: string;
        };
      };
    };
    '03': {
      label: string;
      title: string;
      quote: string;      // Platform philosophy quote with <em> tags
      description: string;
      visual?: {          // Optional visual container below description
        type: 'svg' | 'image' | 'custom';
        svgContent?: string;  // Raw SVG markup (for type: 'svg')
        imageSrc?: string;    // Image path (for type: 'image')
        description?: string; // Alt text or description
      };
      callout?: {         // Optional alert/callout above pipeline stages
        tag: string;      // Bold tag/title (supports <br/> for line breaks)
        text: string;     // Description text (supports <em> and <strong> tags)
      };
      stages?: Array<{
        number: string;
        name: string;
        tag: string;      // e.g., "INPUT LAYER"
        description: string;
      }>;
    };
    '04'?: {          // Optional - not all solutions have Section 04
      label: string;
      title: string;
      quote: string;        // Quote with <em> tags
      description: string;  // Description text
      visuals: Array<{      // 3 visual containers (image or SVG)
        type: 'image' | 'svg';
        imageSrc?: string;  // For type: 'image'
        svgContent?: string; // For type: 'svg'
        description?: string;
      }>;
    };
  };

  // Timeline items (optional for section 02)
  timeline?: {
    left: Array<{
      day: string;
      label: string;
      type?: 'default' | 'warn' | 'danger';
      color?: string;   // Optional hex color (overrides type)
    }>;
    right: Array<{
      day: string;
      label: string;
      type?: 'default' | 'warn' | 'danger';
      color?: string;   // Optional hex color (overrides type)
    }>;
  };

  // Graph configuration (optional for interactive visualizations)
  graph?: {
    enabled: boolean;
    clusters?: Array<{
      x: number;
      y: number;
      color: string;
      label?: string;
    }>;
  };

  // SEO metadata
  seo?: {
    keywords?: string[];
    ogTitle?: string;
    ogDescription?: string;
  };
}

/**
 * Supply Chain Intelligence Configuration
 * Complete configuration for the Supply Chain solution page
 */
export const supplyChainConfig: SolutionConfig = {
  slug: 'supply-chain-intelligence',
  title: 'Supply Chain Intelligence',
  description: 'Real-time supply chain network visibility and disruption intelligence',

  colors: {
    primary: '#26C6DA',   // Cyan
    secondary: '#059669',
    accent: '#f97316',    // Orange
    success: '#10b981',   // Green
  },

  hero: {
    eyebrow: 'Supply Chain Intelligence',
    quote: 'We sat down with supply chain leaders across industries. <em>One pattern kept showing up.</em>',
    h1Words: ['Lean', 'Nimble', 'Decisive'],
    subheading: 'Not more dashboards. Not more vendors. A system that sees the whole network, reacts the moment it shifts, and points to the next move.',
    visualization: {
      type: 'svg',
      svgContent: '<svg class="orbit" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="orbitGlow" cx="50%" cy="50%" r="60%"><stop offset="0%" stop-color="#26C6DA" stop-opacity="0.08"/><stop offset="100%" stop-color="#26C6DA" stop-opacity="0"/></radialGradient><filter id="softGlow"><feGaussianBlur stdDeviation="1.5" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><rect cx="200" cy="200" width="400" height="400" fill="url(#orbitGlow)"/><g class="orbit-ring orbit-ring-outer" filter="url(#softGlow)"><circle cx="200" cy="200" r="170" fill="none" stroke="#BFB39C" stroke-width="0.5" opacity="0.4" stroke-dasharray="3,2"/></g><g class="orbit-ring orbit-ring-mid" filter="url(#softGlow)"><circle cx="200" cy="200" r="120" fill="none" stroke="#BFB39C" stroke-width="0.5" opacity="0.5" stroke-dasharray="3,2"/></g><g class="orbit-ring orbit-ring-inner" filter="url(#softGlow)"><circle cx="200" cy="200" r="70" fill="none" stroke="#BFB39C" stroke-width="0.5" opacity="0.6" stroke-dasharray="3,2"/></g><path class="flow-line" d="M 60 100 Q 150 150 200 200" fill="none" stroke="#10b981" stroke-width="1.2" opacity="0.8" stroke-dasharray="300" stroke-dashoffset="300"><animate attributeName="stroke-dashoffset" values="300;0;300;300" dur="3.5s" keyTimes="0;0.428;0.857;1" repeatCount="indefinite" begin="1.75s"/></path><path class="flow-line" d="M 340 80 Q 270 150 200 200" fill="none" stroke="#BD3D14" stroke-width="1.2" opacity="0.8" stroke-dasharray="300" stroke-dashoffset="300"><animate attributeName="stroke-dashoffset" values="300;0;300;300" dur="3.5s" keyTimes="0;0.428;0.857;1" repeatCount="indefinite"/></path><path class="flow-line" d="M 350 320 Q 280 270 200 200" fill="none" stroke="#10b981" stroke-width="1.2" opacity="0.8" stroke-dasharray="300" stroke-dashoffset="300"><animate attributeName="stroke-dashoffset" values="300;0;300;300" dur="3.5s" keyTimes="0;0.428;0.857;1" repeatCount="indefinite"/></path><path class="flow-line" d="M 70 330 Q 140 270 200 200" fill="none" stroke="#BD3D14" stroke-width="1.2" opacity="0.8" stroke-dasharray="300" stroke-dashoffset="300"><animate attributeName="stroke-dashoffset" values="300;0;300;300" dur="3.5s" keyTimes="0;0.428;0.857;1" repeatCount="indefinite"/></path><g class="pulse-node"><circle cx="60" cy="100" r="6" fill="#10b981" opacity="1"/><circle class="pulse-ring" cx="60" cy="100" r="14" fill="none" stroke="#10b981" stroke-width="0.8" opacity="0.6"/></g><g class="pulse-node"><circle cx="340" cy="80" r="6" fill="#BD3D14" opacity="1"/><circle class="pulse-ring" cx="340" cy="80" r="14" fill="none" stroke="#BD3D14" stroke-width="0.8" opacity="0.6"/></g><g class="pulse-node"><circle cx="350" cy="320" r="6" fill="#10b981" opacity="1"/><circle class="pulse-ring" cx="350" cy="320" r="14" fill="none" stroke="#10b981" stroke-width="0.8" opacity="0.6"/></g><g class="pulse-node"><circle cx="70" cy="330" r="6" fill="#BD3D14" opacity="1"/><circle class="pulse-ring" cx="70" cy="330" r="14" fill="none" stroke="#BD3D14" stroke-width="0.8" opacity="0.6"/></g><circle cx="200" cy="80" r="4" fill="#ffffff" opacity="0.8"/><circle cx="320" cy="200" r="4" fill="#ffffff" opacity="0.8"/><circle cx="200" cy="320" r="4" fill="#ffffff" opacity="0.8"/><circle cx="80" cy="200" r="4" fill="#ffffff" opacity="0.8"/><g class="pulse-node"><circle cx="200" cy="200" r="22" fill="#ffffff"/><circle class="pulse-ring" cx="200" cy="200" r="32" fill="none" stroke="#15110D" stroke-width="0.8" opacity="0.6"/></g><text x="200" y="205" text-anchor="middle" font-family="Fraunces, serif" font-size="11" font-style="italic" fill="#F1ECE2">CQ</text></svg>'
    },
    textCard: {
      enabled: true,
      rows: [
        {
          label: 'Signals in',
          content: [
            {label: 'Internal', color: '#10b981'},
            {label: 'External', color: '#f97316'},
            {label: 'Ecosystem', color: '#10b981'},
            {label: 'Competitor', color: '#f97316'},
          ],
          isChips: true,
        },
        {
          label: 'Outcome',
          content: ['Optimal supply, lean inventory, freed working capital.'],
          isChips: false,
        },
      ],
    },
  },

  sections: {
    '01': {
      label: 'The Picture Today vs. The Picture With ContexQ',
      title: '',
      left: {
        heading: 'Today\'s Reality',
        subheading: 'The data exists. Just <em>not in one place</em>, and not all of it.',
        content: [
          'Internal risk lives in one system. External signals in another. External signals (news, sanctions, weather, finance) in another. All fragmented across teams and tools. And n-tier risk? Most companies know it matters, but can\'t actually see past their direct suppliers.',
        ],
        visualization: {
          type: 'svg',
          svgContent: '<svg viewBox="0 0 850 550" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto;"><defs><style>.silo-box { fill: rgba(38,198,218,0.08); stroke: rgba(38,198,218,0.4); stroke-width: 1.5; border-radius: 8px; } .silo-name { font-size: 18px; font-weight: 500; fill: #ffffff; } .silo-bar { fill: #f97316; opacity: 0.7; } .gap-line { stroke: #ef4444; stroke-width: 1.5; stroke-dasharray: 3,4; opacity: 0.5; }</style></defs><g><rect class="silo-box" x="10" y="0" width="270" height="120" rx="8"/><text class="silo-name" x="120" y="30" text-anchor="middle">Rules-based TM</text><g transform="translate(35,0)"><rect class="silo-bar" x="0" y="90" width="40" height="18"/><rect class="silo-bar" x="45" y="78" width="40" height="30"/><rect class="silo-bar" x="90" y="94.5" width="40" height="13.5"/><rect class="silo-bar" x="135" y="81" width="40" height="27"/><rect class="silo-bar" x="180" y="88.5" width="40" height="19.5"/></g></g><g><rect class="silo-box" x="475" y="35" width="270" height="120" rx="8"/><text class="silo-name" x="595" y="65" text-anchor="middle">KYC / Customer 360</text><g transform="translate(500,70)"><rect class="silo-bar" x="0" y="56" width="40" height="16"/><rect class="silo-bar" x="45" y="61" width="40" height="11"/><rect class="silo-bar" x="90" y="58" width="40" height="14"/><rect class="silo-bar" x="135" y="65" width="40" height="7"/><rect class="silo-bar" x="180" y="62" width="40" height="10"/></g></g><g><rect class="silo-box" x="50" y="200" width="270" height="120" rx="8"/><text class="silo-name" x="150" y="240" text-anchor="middle">Device & Session</text><g transform="translate(75,225)"><rect class="silo-bar" x="0" y="59" width="40" height="13"/><rect class="silo-bar" x="45" y="64" width="40" height="8"/><rect class="silo-bar" x="90" y="53" width="40" height="19"/><rect class="silo-bar" x="135" y="60" width="40" height="12"/><rect class="silo-bar" x="180" y="57" width="40" height="15"/></g></g><g><rect class="silo-box" x="505" y="230" width="270" height="120" rx="8"/><text class="silo-name" x="610" y="270" text-anchor="middle">Watchlist Engine</text><g transform="translate(530,255)"><rect class="silo-bar" x="0" y="62" width="40" height="10"/><rect class="silo-bar" x="45" y="57" width="40" height="15"/><rect class="silo-bar" x="90" y="66" width="40" height="6"/><rect class="silo-bar" x="135" y="52" width="40" height="20"/><rect class="silo-bar" x="180" y="61" width="40" height="11"/></g></g><g><rect class="silo-box" x="10" y="400" width="270" height="120" rx="8"/><text class="silo-name" x="120" y="440" text-anchor="middle">Adverse Media</text><g transform="translate(35,425)"><rect class="silo-bar" x="0" y="63" width="40" height="9"/><rect class="silo-bar" x="45" y="53" width="40" height="19"/><rect class="silo-bar" x="90" y="61" width="40" height="11"/><rect class="silo-bar" x="135" y="58" width="40" height="14"/><rect class="silo-bar" x="180" y="54" width="40" height="18"/></g></g><g><rect class="silo-box" x="455" y="410" width="270" height="120" rx="8" style="stroke-dasharray: 4,3; fill: rgba(38,198,218,0.04);"/><text class="silo-name" x="545" y="450" text-anchor="middle" style="opacity: 0.6;">Cross-bank Network</text><circle cx="725" cy="415" r="15" fill="#d1d5db" stroke="#9ca3af" stroke-width="1.5"/><text x="725" y="420" text-anchor="middle" font-size="16" fill="#6b7280" font-weight="600">?</text></g><line class="gap-line" x1="350" y1="40" x2="350" y2="250"/><line class="gap-line" x1="330" y1="220" x2="575" y2="220"/><line class="gap-line" x1="280" y1="420" x2="485" y2="320"/></svg>'
        },
        quote: '"We know we\'re exposed two and three tiers down. We just can\'t see it yet."<br><cite style="font-style:normal;opacity:0.75">Head of Procurement, Tier-1 Auto OEM</cite>',
      },
      right: {
        heading: 'With ContexQ',
        isPositive: true,
        subheading: 'One graph. <em>Every disruption.</em> Connected.',
        content: [
          'Financial, sanctions, geographic, logistics, supplier, and raw material risk: all in a single living network. When something shifts anywhere, ContexQ knows where it propagates and what to do about it.',
        ],
        visualization: {
          type: 'image',
          imageSrc: '/assets/images/Solutions/supply_s012.png',
          description: 'Supply chain network graph'
        },
      },
    },

    '02': {
      label: 'What This Means When Something Actually Goes Wrong',
      title: '',
      intro: {
        quote: 'The cost of disruption isn\'t the disruption itself.<br><em>It\'s the days it takes to react.</em>',
        description: 'In a traditional setup, by the time the right people see the right data, the supply is already gone, or the price has already moved.',
      },
      left: {
        heading: 'Traditional Reaction · 5-10 Days',
        subtext: 'By the time you know, <em>you\'ve already lost the position.</em>',
        content: [],
        outcome: {
          type: 'bad',
          icon: '!',
          title: 'Supply secured at a premium, or not at all',
          description: 'Margin erosion, missed commitments, scramble pricing on alternates.',
        },
      },
      right: {
        heading: 'ContexQ · Minutes, Not Days',
        subtext: 'The early warning fires <em>before</em> the disruption. The action plan fires <em>during it.</em>',
        content: [],
        summary: [
          { key: 'T -7d', value: 'Tier-2 supplier financial health declining', status: 'WATCH' },
          { key: 'T 0', value: 'Port closure, 3 SKUs impacted', status: 'ALERT' },
          { key: '+02:00', value: '3 alternate routes ranked by cost & lead-time', status: 'READY' },
          { key: '+15:00', value: 'Re-route confirmed. Buyer notified.', status: 'DONE' }
        ],
        outcome: {
          type: 'good',
          icon: '✓',
          title: 'Critical supply secured. No premium paid.',
          description: 'Pre-mapped alternates, ranked by cost & lead-time, ready to execute.',
        },
      },
    },

    '03': {
      label: 'Why This Is a Platform, Not a Model',
      title: '',
      quote: 'The hard part isn\'t the AI. <em>It\'s the connected truth underneath it.</em>',
      description: 'Real supply chain decisions live in the connections between records, across name variants, ownership tiers, regions and time. ContexQ is built bottom-up to expose them. An LLM dropped on raw data answers fast and confidently. It also misses what matters.',
      visual: {
        type: 'image',
        imageSrc: '/assets/images/Solutions/supply_section4.png',
        description: 'Supply chain network and data fusion visualization'
      },
      callout: {
        tag: 'An LLM<br/>on raw data',
        text: 'Skip these layers and ask a model directly? <em>It will answer, confident, fluent, blind to the connection that mattered. Quietly. At scale.</em>'
      },
      stages: [
        {
          number: '01',
          name: 'Entity Resolution',
          tag: 'INPUT LAYER',
          description: 'Reconciles records across spelling, language, ownership, and time into a single resolved view.',
        },
        {
          number: '02',
          name: 'Knowledge Graph',
          tag: 'THE KEY UNLOCK',
          description: 'Surfaces n-tier relationships and hidden links, the context dashboards can\'t show.',
        },
        {
          number: '03',
          name: 'Real-time Fusion',
          tag: 'RELATIONSHIP LAYER',
          description: 'Internal data plus live external signals, continuously merged. No batch lag.',
        },
        {
          number: '04',
          name: 'Explainable Decisions',
          tag: 'OUTPUT LAYER',
          description: 'Every recommendation traces back to the records and links that produced it. Auditable.',
        },
      ],
    },

  },

  timeline: {
    left: [
      {day: 'DAY 0', label: 'Disruption hits', color: '#ffffff'},
      {day: 'DAY 2', label: 'News surfaces', type: 'warn'},
      {day: 'DAY 5', label: 'Manual investigation', type: 'warn'},
      {day: 'DAY 8', label: 'Premium pricing kicks in', type: 'danger'},
      {day: 'DAY 10', label: 'Critical supply lost', type: 'danger'},
    ],
    right: [
      {day: 'T −7d', label: 'Early warning', color: '#10b981'},
      {day: 'T 0', label: 'Disruption', color: '#fbbf24'},
      {day: '+ 2 min', label: 'Alternates ranked', color: '#10b981'},
      {day: '+ 15 min', label: 'Action approved', color: '#10b981'},
      {day: '+ 1 hr', label: 'Supply rerouted', color: '#10b981'},
    ],
  },

  graph: {
    enabled: true,
    clusters: [
      {x: 80, y: 80, color: '#10b981', label: 'Supplier'},
      {x: 460, y: 60, color: '#f97316', label: 'Financial'},
      {x: 460, y: 320, color: '#10b981', label: 'Logistics'},
      {x: 80, y: 320, color: '#f97316', label: 'Sanctions'},
    ],
  },

  seo: {
    keywords: ['supply chain', 'network intelligence', 'disruption detection', 'supply chain visibility'],
    ogTitle: 'Supply Chain Intelligence - ContexQ',
    ogDescription: 'Real-time supply chain network visibility and disruption intelligence',
  },
};

/**
 * Anti-Money Laundering Configuration
 */
export const amlConfig: SolutionConfig = {
  slug: 'aml',
  title: 'Financial Crime Intelligence - AML',
  description: 'Entity resolution, network mapping, and evidence-driven AML monitoring',

  colors: {
    primary: '#06B6D4',    // Cyan
    secondary: '#10b981',  // Green, stable
    accent: '#B0291C',     // Red for risk
    success: '#10b981',    // Green for resolution
  },

  hero: {
    eyebrow: 'Anti-Money Laundering',
    quote: 'Launderers don\'t get caught one wire at a time. <em>They get caught in the network.</em>',
    h1Words: ['Resolved', 'Networked', 'Explainable'],
    subheading: 'Internal and external data brought in up front, before any model runs. Customers, counterparties and non-bank entities resolved to real-world identities. Networks built across jurisdictions. Composite scores with audit trails ready for the regulator.',
    textCard: {
      enabled: true,
      rows: [
        {
          label: 'Signals in',
          content: [
            {label: 'Internal', color: '#10b981'},
            {label: 'External', color: '#BD3D14'},
            {label: 'Counterparty', color: '#10b981'},
            {label: 'Network', color: '#BD3D14'},
          ],
          isChips: true
        },
        {
          label: 'Outcome',
          content: ['Fewer false positives, faster STR preparation, mapped ring, not a re-tuned rule.'],
          isChips: false
        }
      ]
    }
  },

  sections: {
    '01': {
      label: 'The Picture Today vs. The Picture With ContexQ',
      title: '',
      left: {
        heading: 'Today\'s Reality',
        subheading: 'A thousand alerts. <em>Almost all blank. Almost none reportable.</em>',
        content: [
          'A rule fires on a transaction. The alert lands in a queue with one line of context. An investigator opens twelve other systems by hand to figure out who, what and why, across the corporate hierarchy, the counterparty, the watchlists. By the time the picture is built, the funds are layered.',
        ],
        visualization: {
          type: 'image',
          imageSrc: '/assets/images/Solutions/aml_s011.png',
          description: 'Alert without network context'
        },
        quote: 'When the most predictive feature in your alert model is which investigator worked the queue, the data, not the model, is the problem.'
      },
      right: {
        heading: 'With ContexQ',
        isPositive: true,
        subheading: 'One brief. <em>Pre-filled.</em> Network attached. STR-ready.',
        content: [
          'The same wire. But the brief that lands on the investigator\'s desk already has the resolved customer, the counterparty\'s corporate registry status, the network it sits inside, and the risk chips that triggered the score. The investigator opens one screen, and the case is already a case.',
        ],
        visualization: {
          type: 'image',
          imageSrc: '/assets/images/Solutions/aml_s012.png',
          description: 'Case brief with network context'
        }
      }
    },

    '02': {
      label: 'When Money Moves Through the Network',
      title: '',
      intro: {
        quote: 'Catching the wire isn\'t the win. <em>Catching the network is.</em>',
        description: 'A traditional rules engine sees one suspicious payment, queues it for triage, and loses the structure around it. By the time an investigator stitches the corporate hierarchy and counterparty network together by hand, the funds are layered three accounts deep, and the typology has been rotated.'
      },
      left: {
        heading: 'Rules-Engine Reaction · Days to Weeks',
        subtext: 'By the time the network is mapped, <em>the funds are layered.</em>',
        content: [
          ''
        ],
        outcome: {
          type: 'bad',
          icon: '!',
          title: 'Funds laundered. Network unmapped. Regulator queries the file.',
          description: 'High false positives, late STR filing, no trace of the wider topology, and the rule that missed it gets re-tuned next quarter.'
        }
      },
      right: {
        heading: 'ContexQ · Milliseconds to Hours',
        subtext: 'The network surfaces <em>before</em> the trigger. The evidence ships <em>during</em> it.',
        content: [
          ''
        ],
        summary: [
          { key: 'T -2h', value: 'Funnelling pattern · 4 shell counterparties · 3 jurisdictions · shared UBO', status: 'WATCH' },
          { key: 'T 0', value: 'Trigger · cross-border wire · pseudo-customer linked to a known malicious entity', status: 'ALERT' },
          { key: '+14ms', value: 'Network resolved · UBO confirmed via corporate registry · indirect link surfaced', status: 'RESOLVED' },
          { key: '+15:00', value: 'Block approved · STR draft generated · network evidence attached', status: 'DONE' }
        ],
        outcome: {
          type: 'good',
          icon: '✓',
          title: 'Funds preserved. Network mapped. STR auto-drafted with full evidence trail.',
          description: 'Composite score traces back to every contributing scenario. Investigators read the why. Regulators read the audit.'
        }
      }
    },

    '03': {
      label: 'Why this is a platform, not a model',
      title: '',
      quote: 'The hard part isn\'t the AI. <em>It\'s the data you put in front of it.</em>',
      description: 'Every prior wave of AML (rules, customer profiles, supervised ML, RPA) added a layer downstream and left the upstream untouched. ContexQ inverts the order: data fused, entities resolved and networks built before any rule, anomaly model or supervised classifier runs. The AI inherits context. So does the audit trail.',
      visual: {
        type: 'image',
        imageSrc: '/assets/images/Solutions/aml_s03.png',
        description: 'Data fusion and network flow visualization'
      },
      callout: {
        tag: 'An ML model on<br/>rules-engine alerts',
        text: 'Trains on the wrong data. <em>The most predictive feature becomes the investigator.</em> The problem lies in the data, not the model. Compensating downstream for bad upstream decisions only hides it.'
      },
      stages: [
        {
          number: '01',
          name: 'Data Up-Front',
          tag: 'DATA FUSION',
          description: 'Internal and external sources fused before any rule or model runs. No vendor schema lock-in. No ETL bottleneck between data and analyst.'
        },
        {
          number: '02',
          name: 'Entity Resolution',
          tag: 'NETWORK BUILDING',
          description: 'Customers, counterparties and non-bank entities resolved across spelling, language, transliteration and identifier. Pseudo-customers included.'
        },
        {
          number: '03',
          name: 'Network Context',
          tag: 'COMPOSITE SCORING',
          description: 'Corporate hierarchies, shareholder graphs and counterparty networks, multi-hop traversal surfacing indirect links and hidden UBOs.'
        },
        {
          number: '04',
          name: 'Code-First Scoring',
          tag: 'EXPLAINABILITY',
          description: 'Composite scorecards in code rather than through a user interface. Parameterisation, unit tests, CI/CD. Built for data scientists, used by investigators, audited by regulators.'
        }
      ]
    },

    '04': {
      label: 'Three Lenses  ·  Eight Typologies',
      title: '',
      quote: 'The same graph, read <em>three different ways.</em>',
      description: 'Eight typologies grouped into three categories, a balanced scorecard that reaches from rules-era transactional checks all the way to multi-hop network analysis. Each runs on the same resolved entities, the same fused data, the same code-first scoring fabric.',
      visuals: [
        {
          type: 'image',
          imageSrc: '/assets/images/Solutions/aml_s04.png',
          description: 'Three lenses: Transactional, External entity link, and Network analysis'
        }
      ]
    }
  },

  timeline: {
    left: [
      { day: 'DAY 0', label: 'Rule fires', color: '#ffffff' },
      { day: 'DAY 2', label: 'Triage queue', type: 'warn' },
      { day: 'DAY 5', label: 'Manual stitching', type: 'warn' },
      { day: 'DAY 8', label: 'Funds layered', type: 'danger' },
      { day: 'DAY 14', label: 'STR filed late', type: 'danger' }
    ],
    right: [
      { day: 'T −2h', label: 'Pattern emerging', color: '#10b981' },
      { day: 'T 0', label: 'Trigger wire', color: '#fbbf24' },
      { day: '+ 14 ms', label: 'Composite ≥ 0.9', color: '#10b981' },
      { day: '+ 15 min', label: 'Block + STR draft', color: '#10b981' },
      { day: '+ 1 hr', label: 'Case closed', color: '#10b981' }
    ]
  },

  seo: {
    keywords: ['AML', 'financial crime', 'entity resolution', 'network analysis', 'STR', 'suspicious transaction report'],
    ogTitle: 'Financial Crime Intelligence - AML | ContexQ',
    ogDescription: 'Entity resolution, network mapping, and evidence-driven anti-money laundering monitoring',
  },
};

/**
 * Know Your Customer (KYC) Configuration
 * Entity resolution, relationship mapping, and live customer profiling
 */
export const kycConfig: SolutionConfig = {
  slug: 'kyc',
  title: 'Know Your Customer',
  description: 'Entity resolution, relationship mapping, and live customer profiling',

  colors: {
    primary: '#26C6DA',     // Cyan
    secondary: '#2A4A3C',   // Green
    accent: '#BD3D14',      // Terracotta
    success: '#10b981',     // Green
  },

  hero: {
    eyebrow: 'Know Your Customer',
    quote: 'The form sees the applicant. <em>The graph sees the customer.</em>',
    h1Words: ['Resolved', 'Linked', 'Live'],
    subheading: 'Internal CRM, registries, bureaus, sanctions and adverse media, fused before any rule runs. Customers resolved across spelling, language and identifier. UBOs, related parties and counterparties surfaced. From the annual file refresh to event-driven monitoring, with the audit trail your regulator already trusts.',
    textCard: {
      enabled: true,
      rows: [
        {
          label: 'Signals in',
          content: [
            {label: 'CRM', color: '#2A4A3C'},
            {label: 'Registry', color: '#BD3D14'},
            {label: 'Sanctions', color: '#2A4A3C'},
            {label: 'Adverse Media', color: '#BD3D14'},
          ],
          isChips: true,
        },
        {
          label: 'Outcome',
          content: ['From annual file refresh to live customer view, onboarding to exit.'],
          isChips: false,
        },
      ],
    },
  },

  sections: {
    '01': {
      label: 'The Profile Today vs. The Profile With ContexQ',
      title: '',
      left: {
        heading: 'Today\'s Reality',
        subheading: 'A filed form. <em>A 180-day file. A static risk tier.</em>',
        content: [
          'Onboarding takes weeks. The form has gaps. The profile becomes stale the moment it\'s filed. By next quarter, the customer\'s network has moved: new directors, new counterparties, a new UBO. And the KYC team won\'t see it until the annual review schedule says so.',
        ],
        visualization: {
          type: 'image',
          imageSrc: '/assets/images/Solutions/kyc_s011.png',
          description: 'KYC profile visualization'
        },
        quote: 'When 40% of risk assessments rest on insufficient data, and the file refreshes once a year, the model isn\'t the problem. The cadence is.',
      },
      right: {
        heading: 'With ContexQ',
        isPositive: true,
        subheading: 'One profile. <em>Networked. Live.</em> Audit-ready.',
        content: [
          'Same customer. The profile arrives enriched in milliseconds, UBOs resolved, related parties surfaced, adverse media attached, behaviour baseline live. The file no longer waits for the annual review. It updates the moment the network does.',
        ],
        visualization: {
          type: 'image',
          imageSrc: '/assets/images/Solutions/kyc_s012.png',
          description: 'KYC profile visualization'
        },

      },
    },

    '02': {
      label: 'When the File Goes Stale',
      title: '',
      intro: {
        quote: 'The customer changes daily. <em>The annual review changes once.</em>',
        description: 'An annual cadence covers a customer for one day a year. During the remaining 364 days the customer\'s network continues to change: new directors, a new UBO, fresh adverse media, a sanctioned counterparty. And the file says nothing. By the next refresh, the risk you accepted at onboarding doesn\'t match the customer you\'re carrying.',
      },
      left: {
        heading: 'Periodic Reviews · Quarters to Years',
        subtext: 'By the next refresh, <em>the customer is someone else.</em>',
        content: [],
        outcome: {
          type: 'bad',
          icon: '!',
          title: 'CRR is a year out of date. UBO change unrecorded. Regulator asks why.',
          description: 'High false positives on screening, low recall on real changes, and the team spends 90% of the cycle on backlog, 10% on customers.',
        },
      },
      right: {
        heading: 'ContexQ · Event-Driven · Live',
        subtext: 'The profile updates <em>when the network does.</em>',
        content: [],
        summary: [
          { key: 'T -0', value: 'Onboarding · 12 fields · UBO + 4 related parties resolved · CRR auto-tiered', status: 'ONBOARD' },
          { key: '+1d', value: 'Wire pattern delta · 3.2σ from baseline · review path triggered', status: 'EVENT' },
          { key: '+1w', value: 'Registry update · new director shared with sanctioned entity · CRR LOW → HIGH', status: 'PKYC' },
          { key: '+1m', value: 'EDD complete · evidence pack attached · monitoring continues', status: 'DONE' }
        ],
        outcome: {
          type: 'good',
          icon: '✓',
          title: 'Profile aligned in real time. Backlog cleared. Reviews fire on event, not date.',
          description: '85% fewer false positives on screening. Onboarding in minutes. Audit reads the lineage end-to-end.',
        },
      },
    },

    '03': {
      label: 'Why This Is a Platform, Not a Form',
      title: '',
      quote: 'The hard part isn\'t the rule. <em>It\'s the file you put in front of it.</em>',
      description: 'Every prior wave of KYC (questionnaires, screening, RPA, ML) added a layer on top and left the file underneath untouched. ContexQ inverts the order: CRM, registries, sanctions, bureaus and adverse media fused, customers resolved and networks built before any rule runs. The risk rating inherits context. So does the audit trail.',
      visual: {
        type: 'image',
        imageSrc: '/assets/images/Solutions/kyc_s03.png',
        description: 'KYC data fusion and network visualization'
      },
      callout: {
        tag: 'A screening rule on<br>a once-a-year file',
        text: 'Scores the file, not the customer. <em>The form passes screening on day one. The network around it changed in week two.</em> The problem lies in the cadence, not the model. Compensating downstream for a stale upstream only hides it.',
      },
      stages: [
        {
          number: '01',
          name: 'Data Up-Front',
          tag: 'INGESTION LAYER',
          description: 'CRM, sanctions, registries, bureaus and adverse media fused before any rule runs. No vendor schema lock-in. No ETL bottleneck between data and analyst.',
        },
        {
          number: '02',
          name: 'Entity Resolution',
          tag: 'IDENTITY LAYER',
          description: 'Customers, UBOs and related parties resolved across spelling, language, transliteration and identifier (pseudo-customers, DBA aliases and corporate aliases included).',
        },
        {
          number: '03',
          name: 'Network Context',
          tag: 'RELATIONSHIP LAYER',
          description: 'Corporate hierarchies, shareholder graphs and counterparty networks; multi-hop traversal surfaces related parties, shared UBOs and indirect risk.',
        },
        {
          number: '04',
          name: 'Continuous & Code-First',
          tag: 'OUTPUT LAYER',
          description: 'Event-driven monitoring, not annual refresh. Composite CRR in code with parameterisation, unit tests, CI/CD. Built for analysts, audited by regulators.',
        },
      ],
    },

    '04': {
      label: 'One Platform · Six Use-Cases · Three Lenses',
      title: '',
      quote: 'The same graph, read at <em>every stage of the customer lifecycle.</em>',
      description: 'Onboarding, perpetual review, exit: the same fused data, the same resolved customer, the same code-first risk fabric. Six ContexQ KYC use-cases grouped into three lenses across the customer lifecycle.',
      visuals: [
        {
          type: 'image',
          imageSrc: '/assets/images/Solutions/kyc_s04.png',
          description: 'Six KYC use-cases grouped into three lenses: Onboarding & Enhanced Due Diligence, Perpetual KYC & Risk Rating, Remediation & Exit'
        }
      ],
    },
  },

  timeline: {
    left: [
      {day: 'DAY 0', label: 'Onboarded', color: '#ffffff'},
      {day: '+90D', label: 'Behavior shifts', type: 'warn'},
      {day: '+180D', label: 'New UBO · unseen', type: 'warn'},
      {day: '+270D', label: 'Adverse media · unseen', type: 'danger'},
      {day: '+365D', label: 'Annual review · 9-month gap', type: 'danger'},
    ],
    right: [
      {day: 'T −0', label: 'Onboarded · resolved', color: '#10b981'},
      {day: '+14ms', label: 'Network attached', color: '#10b981'},
      {day: '+1d', label: 'Behavior delta · flagged', color: '#10b981'},
      {day: '+1w', label: 'New related party · CRR shift', color: '#10b981'},
      {day: '+1m', label: 'Profile aligned · live', color: '#10b981'},
    ],
  },

  seo: {
    keywords: ['KYC', 'know your customer', 'entity resolution', 'customer profiling', 'AML compliance'],
    ogTitle: 'Know Your Customer - KYC | ContexQ',
    ogDescription: 'Entity resolution, relationship mapping, and live customer profiling for continuous KYC',
  },
};

/**
 * Customer Intelligence Configuration
 */
export const customerIntelligenceConfig: SolutionConfig = {
  slug: 'customer-intelligence',
  title: 'Customer Intelligence',
  description: 'Entity resolution, golden record creation, and unified customer data management',

  colors: {
    primary: '#3B82F6',     // Blue
    secondary: '#10b981',   // Green
    accent: '#F59E0B',      // Amber
    success: '#10b981',     // Green
  },

  hero: {
    eyebrow: 'Data Management Intelligence',
    quote: 'Your best customer doesn\'t show up as one. <em>They show up as dozens.</em>',
    h1Words: ['Resolved', 'Connected', 'Trusted'],
    subheading: 'Internal records, corporate registries, e-commerce, social, property and tax data brought in up front, before any 360-degree entity view is created or segmentation and risk models run. Duplicate records resolved across spelling, language, brand alias and registration form. One golden record. Audit-grade lineage.',
    visualization: {
      type: 'svg',
      svgContent: '<svg class="hero-viz" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="centerGlow" cx="50%" cy="50%" r="40%"><stop offset="0%" stop-color="#C8A84A" stop-opacity="0.3"/><stop offset="100%" stop-color="#C8A84A" stop-opacity="0"/></radialGradient><filter id="glow"><feGaussianBlur stdDeviation="2" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><g class="fragments"><circle cx="80" cy="60" r="3" fill="#4F8FBF" opacity="0.7"/><circle cx="140" cy="50" r="3" fill="#BD3D14" opacity="0.7"/><circle cx="200" cy="45" r="2.5" fill="#8C5CC8" opacity="0.6"/><circle cx="280" cy="65" r="3" fill="#2A8A85" opacity="0.7"/><circle cx="350" cy="90" r="2.5" fill="#C8A84A" opacity="0.6"/><circle cx="420" cy="120" r="3" fill="#D9722C" opacity="0.7"/><circle cx="70" cy="140" r="2.5" fill="#A89578" opacity="0.6"/><circle cx="120" cy="180" r="3" fill="#4F8FBF" opacity="0.7"/><circle cx="200" cy="210" r="3" fill="#BD3D14" opacity="0.7"/><circle cx="300" cy="200" r="2.5" fill="#8C5CC8" opacity="0.6"/><circle cx="400" cy="240" r="3" fill="#2A8A85" opacity="0.7"/><circle cx="450" cy="300" r="2.5" fill="#C8A84A" opacity="0.6"/><circle cx="350" cy="340" r="3" fill="#D9722C" opacity="0.7"/><circle cx="200" cy="360" r="3" fill="#4F8FBF" opacity="0.7"/><circle cx="80" cy="320" r="2.5" fill="#BD3D14" opacity="0.6"/><circle cx="40" cy="240" r="3" fill="#8C5CC8" opacity="0.7"/></g><g class="spokes"><line x1="250" y1="200" x2="80" y2="60" stroke="#C8851A" stroke-width="0.8" opacity="0.5"/><line x1="250" y1="200" x2="140" y2="50" stroke="#C8851A" stroke-width="0.8" opacity="0.5"/><line x1="250" y1="200" x2="420" y2="120" stroke="#C8851A" stroke-width="0.8" opacity="0.5"/><line x1="250" y1="200" x2="450" y2="300" stroke="#C8851A" stroke-width="0.8" opacity="0.5"/><line x1="250" y1="200" x2="350" y2="340" stroke="#C8851A" stroke-width="0.8" opacity="0.5"/><line x1="250" y1="200" x2="40" y2="240" stroke="#C8851A" stroke-width="0.8" opacity="0.5"/></g><circle cx="250" cy="200" r="50" fill="url(#centerGlow)" opacity="0.6"/><g class="center-node" filter="url(#glow)"><polygon points="250,175 268,187 268,213 250,225 232,213 232,187" fill="none" stroke="#C8851A" stroke-width="2"/><text x="250" y="208" text-anchor="middle" font-family="monospace" font-size="12" fill="#C8851A" font-weight="bold">ID</text></g><g class="corner-bracket top-left"><line x1="20" y1="20" x2="40" y2="20" stroke="#C8851A" stroke-width="1.5"/><line x1="20" y1="20" x2="20" y2="40" stroke="#C8851A" stroke-width="1.5"/></g><g class="corner-bracket top-right"><line x1="480" y1="20" x2="460" y2="20" stroke="#C8851A" stroke-width="1.5"/><line x1="480" y1="20" x2="480" y2="40" stroke="#C8851A" stroke-width="1.5"/></g><g class="corner-bracket bottom-left"><line x1="20" y1="380" x2="40" y2="380" stroke="#C8851A" stroke-width="1.5"/><line x1="20" y1="380" x2="20" y2="360" stroke="#C8851A" stroke-width="1.5"/></g><g class="corner-bracket bottom-right"><line x1="480" y1="380" x2="460" y2="380" stroke="#C8851A" stroke-width="1.5"/><line x1="480" y1="380" x2="480" y2="360" stroke="#C8851A" stroke-width="1.5"/></g><g class="verdict-card"><text x="250" y="320" text-anchor="middle" font-size="11" font-weight="600" fill="#C8851A">Golden record · 14 ms</text><text x="250" y="335" text-anchor="middle" font-size="9" fill="#d1d5db">Confidence 0.992</text></g></svg>'
    },
    textCard: {
      enabled: true,
      rows: [
        {
          label: 'Sources in',
          content: [
            {label: 'Internal Banking', color: '#3B82F6'},
            {label: 'Registry · Corp · Payroll · Tax', color: '#10b981'},
            {label: 'Commerce', color: '#F59E0B'},
            {label: 'Social', color: '#3B82F6'},
          ],
          isChips: true
        },
        {
          label: 'Outcome',
          content: ['One golden record. Network attached. Audit-ready.'],
          isChips: false
        }
      ]
    }
  },

  sections: {
    '01': {
      label: 'The Picture Today vs. The Picture With ContexQ',
      title: '',
      left: {
        heading: 'Today\'s Reality',
        subheading: 'Many systems. One entity. <em>None of them know.</em>',
        content: [
          'A person enters one system. Then another. A third. Each capture differs slightly in spelling, ID and format. <strong>Your own systems can\'t agree it\'s one entity.</strong> External sources make it worse. Downstream, every model and every dashboard inherits the chaos.',
        ],
        visualization: {
          type: 'svg',
          svgContent: '<svg viewBox="0 0 850 550" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto;"><defs><style>.silo-box { fill: rgba(59,130,246,0.08); stroke: rgba(59,130,246,0.3); stroke-width: 1.5; border-radius: 8px; } .silo-name { font-size: 18px; font-weight: 500; fill: #ffffff; } .silo-bar { fill: #ef4444; opacity: 0.7; } .gap-line { stroke: #ef4444; stroke-width: 1.5; stroke-dasharray: 3,4; opacity: 0.5; }</style></defs><g><rect class="silo-box" x="10" y="0" width="270" height="120" rx="8"/><text class="silo-name" x="120" y="30" text-anchor="middle">CRM / Database</text><g transform="translate(35,0)"><rect class="silo-bar" x="0" y="90" width="40" height="18"/><rect class="silo-bar" x="45" y="78" width="40" height="30"/><rect class="silo-bar" x="90" y="94.5" width="40" height="13.5"/><rect class="silo-bar" x="135" y="81" width="40" height="27"/><rect class="silo-bar" x="180" y="88.5" width="40" height="19.5"/></g></g><g><rect class="silo-box" x="475" y="35" width="270" height="120" rx="8"/><text class="silo-name" x="595" y="65" text-anchor="middle">E-commerce</text><g transform="translate(500,70)"><rect class="silo-bar" x="0" y="56" width="40" height="16"/><rect class="silo-bar" x="45" y="61" width="40" height="11"/><rect class="silo-bar" x="90" y="58" width="40" height="14"/><rect class="silo-bar" x="135" y="65" width="40" height="7"/><rect class="silo-bar" x="180" y="62" width="40" height="10"/></g></g><g><rect class="silo-box" x="50" y="200" width="270" height="120" rx="8"/><text class="silo-name" x="150" y="240" text-anchor="middle">Registry / Compliance</text><g transform="translate(75,225)"><rect class="silo-bar" x="0" y="59" width="40" height="13"/><rect class="silo-bar" x="45" y="64" width="40" height="8"/><rect class="silo-bar" x="90" y="53" width="40" height="19"/><rect class="silo-bar" x="135" y="60" width="40" height="12"/><rect class="silo-bar" x="180" y="57" width="40" height="15"/></g></g><g><rect class="silo-box" x="505" y="230" width="270" height="120" rx="8"/><text class="silo-name" x="610" y="270" text-anchor="middle">Social Media</text><g transform="translate(530,255)"><rect class="silo-bar" x="0" y="62" width="40" height="10"/><rect class="silo-bar" x="45" y="57" width="40" height="15"/><rect class="silo-bar" x="90" y="66" width="40" height="6"/><rect class="silo-bar" x="135" y="52" width="40" height="20"/><rect class="silo-bar" x="180" y="61" width="40" height="11"/></g></g><g><rect class="silo-box" x="10" y="400" width="270" height="120" rx="8"/><text class="silo-name" x="120" y="440" text-anchor="middle">Property Records</text><g transform="translate(35,425)"><rect class="silo-bar" x="0" y="63" width="40" height="9"/><rect class="silo-bar" x="45" y="53" width="40" height="19"/><rect class="silo-bar" x="90" y="61" width="40" height="11"/><rect class="silo-bar" x="135" y="58" width="40" height="14"/><rect class="silo-bar" x="180" y="54" width="40" height="18"/></g></g><g><rect class="silo-box" x="455" y="410" width="270" height="120" rx="8" style="stroke-dasharray: 4,3; fill: rgba(59,130,246,0.04);"/><text class="silo-name" x="545" y="450" text-anchor="middle" style="opacity: 0.6;">Network Relations</text><circle cx="725" cy="415" r="15" fill="#d1d5db" stroke="#9ca3af" stroke-width="1.5"/><text x="725" y="420" text-anchor="middle" font-size="16" fill="#6b7280" font-weight="600">?</text></g><line class="gap-line" x1="350" y1="40" x2="350" y2="250"/><line class="gap-line" x1="330" y1="220" x2="575" y2="220"/><line class="gap-line" x1="280" y1="420" x2="485" y2="320"/></svg>'
        },
        quote: 'When the most predictive feature in your model is which system you trust by default, the data, not the model, is the problem.'
      },
      right: {
        heading: 'With ContexQ',
        isPositive: true,
        subheading: 'One brief. <em>One entity.</em> Network attached. <em>Audit attached.</em>',
        content: [
          'The same entity, resolved. Every internal system, every external source, agreed. Every value with a source. Every conflict surfaced. <strong>The dashboard, the model and the audit trail all see the same truth at the same instant.</strong>',
        ],
        visualization: {
          type: 'image',
          imageSrc: '/assets/images/Solutions/ci_S012.png',
          description: 'Golden record with resolved entity'
        }
      }
    },

    '02': {
      label: 'When the Customer Walks Across the Street',
      title: '',
      intro: {
        quote: 'Cleaning the data isn\'t the win. <em>Resolving the entity is.</em>',
        description: 'Traditional MDM matches on exact identifiers. Without graph context, internal systems can\'t recognise the same entity, let alone link to external networks. By the time the unified view exists, the moment has passed and decisions have gone live on bad data.'
      },
      left: {
        heading: 'Legacy MDM · Quarters to Years',
        subtext: 'By the time the entity is unified, <em>the moment has passed.</em>',
        content: [],
        outcome: {
          type: 'bad',
          icon: '!',
          title: 'Decision made on bad data. Network never mapped. Trust eroded.',
          description: 'SQL JOIN matched half of internal systems. External data never reached downstream models. The MDM “just needs another data quality project.”'
        }
      },
      right: {
        heading: 'ContexQ · Milliseconds to Hours',
        subtext: 'The entity surfaces whole at the <em>moment of decision</em>. Truth ships with it.',
        content: [],
        summary: [
          { key: 'T -2h', value: 'Multiple records · same root identifiers · same address · pattern resolving', status: 'WATCH' },
          { key: 'T 0', value: 'Decision moment · dozens of records resolve to 1 entity across every source', status: 'RESOLVE' },
          { key: '+ 14 ms', value: 'Golden record · every attribute reconciled · audit trail attached', status: 'GOLDEN' },
          { key: '+ 1 hr', value: 'Network mapped · downstream models inherit context · dashboards inherit truth', status: 'DONE' }
        ],
        outcome: {
          type: 'good',
          icon: '✓',
          title: 'Decision made on good data. Network mapped. Audit trail attached.',
          description: 'Composite confidence traces back to every contributing source. Operators see the why. Regulators see the audit. Models see context, not noise.'
        }
      }
    },

    '03': {
      label: 'Why This Is a Platform, Not a Model',
      title: '',
      quote: 'Forty years of MDM. <em>The entity is still dozens of rows.</em>',
      description: 'Master data hubs, ETL pipelines, CDPs, RPA. Every wave added a layer downstream and left the upstream untouched. ContexQ inverts the order: entities resolved and networks built before any dashboard, model or scorecard runs. Downstream inherits context. So does the audit trail.',
      visual: {
        type: 'image',
        imageSrc: '/assets/images/Solutions/ci_s03.png',
        description: 'Data fusion, network, and audit trail visualization'
      },
      callout: {
        tag: 'An MDM project on<br/>conflicting sources',
        text: 'The most predictive feature becomes which system you trust by default. Fragmented upstream data isn\'t a tooling problem. It\'s a graph problem.'
      },
      stages: [
        {
          number: '01',
          name: 'Data Up-Front',
          tag: 'DATA FUSION',
          description: 'Internal and external sources fused before any model or dashboard runs. No vendor schema lock-in. No ETL bottleneck between data and analyst.',
        },
        {
          number: '02',
          name: 'Entity Resolution',
          tag: 'NETWORK BUILDING',
          description: 'Persons, organisations and counterparties resolved across spelling, transliteration, brand alias and registration form. Duplicates included.',
        },
        {
          number: '03',
          name: 'Network Context',
          tag: 'COMPOSITE TRUTH',
          description: 'Corporate hierarchies, employment graphs, transactional footprints, ownership trails; multi-hop traversal surfaces indirect links no SQL JOIN can draw.',
        },
        {
          number: '04',
          name: 'Composite Truth',
          tag: 'AUDIT TRAIL',
          description: 'Source reliability, temporal weighting, conflict resolution. Every value carries its full audit trail.',
        },
      ],
    },

    '04': {
      label: 'Three Lenses · Eight Patterns',
      title: '',
      quote: 'The same graph, read <em>three different ways.</em>',
      description: 'Three lenses on the same resolved fabric. Eight patterns of measurable ROI. Identity and integration. Network and risk. Knowledge, trust and federation.',
      visuals: [
        {
          type: 'image',
          imageSrc: '/assets/images/Solutions/ci_s04.png',
          description: 'Three lenses on data management: Identity & Integration, Network & Risk, Knowledge Trust & Federation'
        }
      ]
    },
  },

  timeline: {
    left: [
      {day: 'DAY 0', label: 'Record enters', color: '#ffffff'},
      {day: 'DAY 90', label: 'Duplicates emerge', type: 'warn'},
      {day: 'DAY 180', label: 'Wrong action taken', type: 'warn'},
      {day: 'DAY 365', label: 'Manual reconciliation begins', type: 'danger'},
      {day: 'DAY 540', label: 'Resolution arrives. Too late.', type: 'danger'},
    ],
    right: [
      {day: 'T −2h', label: 'Pattern emerging', color: '#10b981'},
      {day: 'T 0', label: 'Decision moment', color: '#F59E0B'},
      {day: '+ 14 ms', label: 'Golden record · 0.99', color: '#10b981'},
      {day: '+ 15 min', label: 'Network mapped · context', color: '#10b981'},
      {day: '+ 1 hr', label: 'Decision made · audit', color: '#10b981'},
    ],
  },

  seo: {
    keywords: ['data management', 'entity resolution', 'golden record', 'master data', 'customer data management'],
    ogTitle: 'Data Management Intelligence | ContexQ',
    ogDescription: 'Entity resolution, golden record creation, and unified customer data management',
  },
};

/**
 * Risk Management Configuration
 */
export const riskConfig: SolutionConfig = {
  slug: 'risk',
  title: 'Risk Management',
  description: 'Group-level risk detection, network exposure mapping, and aggregate scoring',

  colors: {
    primary: '#06B6D4',     // Cyan
    secondary: '#10b981',   // Green
    accent: '#EF4444',      // Red
    success: '#10b981',     // Green
  },

  hero: {
    eyebrow: 'Risk Management',
    quote: 'A bureau score sees the borrower. <em>The network sees the risk.</em>',
    h1Words: ['Linked', 'Scored', 'Decided'],
    subheading: 'Internal exposure, bureaus, registries and counterparties fused before any model runs. Borrowers, merchants and third parties resolved to real-world entities. Group-level risk surfaced, with the audit trail decision committees already trust.',
    textCard: {
      enabled: true,
      rows: [
        {
          label: 'Signals in',
          content: [
            {label: 'Bureau', color: '#F59E0B'},
            {label: 'Registry', color: '#10b981'},
            {label: 'Internal', color: '#3B82F6'},
            {label: 'Network', color: '#8C5CC8'},
          ],
          isChips: true
        },
        {
          label: 'Outcome',
          content: ['Group exposure visible at decision time, not at default'],
          isChips: false
        }
      ]
    }
  },

  sections: {
    '01': {
      label: 'The Decision Today vs. The Decision With ContexQ',
      title: '',
      left: {
        heading: 'Today\'s Reality',
        subheading: 'A clean file. <em>A blind decision.</em>',
        content: [
          'The applicant looks fine. The bureau score is green. The committee never sees the four other entities the same beneficial owner controls, two of which already defaulted last year, at another bank, under a different spelling.',
        ],
        visualization: {
          type: 'image',
          imageSrc: '/assets/images/Solutions/risk_s011.png',
          description: 'Blind decision without group visibility'
        },
        quote: 'When the loss only becomes visible after the funds are drawn, the bureau score isn\'t the problem. The data behind it is.'
      },
      right: {
        heading: 'With ContexQ',
        isPositive: true,
        subheading: 'One brief. <em>Group attached.</em> Decision-ready.',
        content: [
          'Same applicant. The brief surfaces the resolved beneficial owner, the related entities, the aggregate exposure, the prior defaults, and the chips that move the score. The committee opens one screen, and the case is already a case.',
        ],
        visualization: {
          type: 'image',
          imageSrc: '/assets/images/Solutions/risk_012.png',
          description: 'Group-level risk with network visibility'
        }
      }
    },

    '02': {
      label: 'When Risk Hides in Plain Sight',
      title: '',
      intro: {
        quote: 'Approving the borrower isn\'t the call. <em>Reading the group is.</em>',
        description: 'A name-only credit decision looks fine on day one. By day 90, the same beneficial owner has drawn three more facilities across three banks, and the loss is already booked. The score didn\'t fail. The data behind it did.'
      },
      left: {
        heading: 'Single-Name View · Days to Quarters',
        subtext: 'By the time the group surfaces, <em>the loss is provisioned.</em>',
        content: [],
        outcome: {
          type: 'bad',
          icon: '!',
          title: 'Loss provisioned. Group never mapped. Audit asks why no one connected the dots.',
          description: 'High loss-given-default, low recovery, and the bureau score that missed it gets recalibrated next cycle.'
        }
      },
      right: {
        heading: 'ContexQ · Milliseconds to Hours',
        subtext: 'The group surfaces <em>before</em> the approval. The decision ships <em>during</em> it.',
        content: [],
        summary: [
          { key: 'T -0', value: 'Application · single-name bureau · 712 clean · facility $4.5M', status: 'watch' },
          { key: '+ 14 ms', value: 'UBO resolved · 3 IDs · 4 related entities · 2 in default', status: 'alert' },
          { key: '+ 15 min', value: 'Group exposure $14.2M across 3 banks · PD lifts 0.18 → 0.74', status: 'resolved' },
          { key: '+ 1 hr', value: 'Cap to $1.2M · re-price +180bp · evidence pack attached', status: 'done' }
        ],
        outcome: {
          type: 'good',
          icon: '✓',
          title: 'Capital preserved. Group mapped. Decision pack auto-drafted with full audit trail.',
          description: 'Composite score traces back to every contributing scenario. Credit reads the why. Audit reads the lineage.'
        }
      }
    },

    '03': {
      label: 'Why This Is a Platform, Not a Model',
      title: '',
      quote: 'The hard part isn\'t the model. <em>It\'s the data you put in front of it.</em>',
      description: 'Every prior wave of risk (bureau scores, expert rules, supervised ML, RPA) added a layer on top and left the data underneath untouched. ContexQ inverts the order: internal exposure, registries, bureaus and counterparties fused, entities resolved and networks built before any model runs. The score inherits context. So does the audit trail.',
      visual: {
        type: 'image',
        imageSrc: '/assets/images/Solutions/risk_s03.png',
        description: 'Data fusion, network, and scoring visualization'
      },
      callout: {
        tag: 'An ML model on<br/>single-name bureau',
        text: 'Trains on the wrong unit. The borrower scores clean while the group already defaulted next door. <em>Compensating downstream for a single-name view is not a model problem, it\'s a data problem.</em>'
      },
      stages: [
        {
          number: '01',
          name: 'Data Up-Front',
          tag: 'DATA FUSION',
          description: 'Internal exposure, bureaus, registries and counterparties fused before any rule or model runs. No vendor schema lock-in. No ETL bottleneck between data and decision.',
        },
        {
          number: '02',
          name: 'Entity Resolution',
          tag: 'NETWORK BUILDING',
          description: 'Borrowers, merchants and third parties resolved across spelling, language, transliteration and identifier (pseudo-customers and DBA aliases included).',
        },
        {
          number: '03',
          name: 'Network Context',
          tag: 'COMPOSITE SCORING',
          description: 'Corporate hierarchies, shareholder graphs and counterparty networks; multi-hop traversal surfaces related parties, shared UBOs and group exposure.',
        },
        {
          number: '04',
          name: 'Code-First Scoring',
          tag: 'AUDIT TRAIL',
          description: 'Composite scorecards in code with parameterisation, unit tests, CI/CD. Built for data scientists, used by credit, audited by regulators.',
        },
      ],
    },

    '04': {
      label: 'One Platform · Three Risk Lenses',
      title: '',
      quote: 'The same graph, read <em>three different ways.</em>',
      description: 'Credit, merchant and counterparty risk all share the same root cause: the entity behind the application is connected to entities you can\'t see. The same fused data, the same resolved entities, the same code-first scoring fabric, three different decisions.',
      visuals: [
        {
          type: 'image',
          imageSrc: '/assets/images/Solutions/risk_s04.png',
          description: 'Three risk lenses: Credit, Merchant, Counterparty'
        }
      ]
    },
  },

  timeline: {
    left: [
      {day: 'DAY 0', label: 'Bureau · clean', color: '#ffffff'},
      {day: 'DAY 30', label: 'Drawdown', type: 'warn'},
      {day: 'DAY 60', label: 'Linked default', type: 'warn'},
      {day: 'DAY 90', label: 'Missed payment', type: 'danger'},
      {day: 'Q + 1', label: 'Provision · writedown', type: 'danger'},
    ],
    right: [
      {day: 'T −0', label: 'Application in', color: '#10b981'},
      {day: '+ 14 ms', label: 'Group resolved', color: '#F59E0B'},
      {day: '+ 1 s', label: 'PD ≥ 0.7 · group', color: '#10b981'},
      {day: '+ 15 min', label: 'Limit · price · escalate', color: '#10b981'},
      {day: '+ 1 hr', label: 'Decision committed', color: '#10b981'},
    ],
  },

  seo: {
    keywords: ['risk management', 'group exposure', 'entity resolution', 'network risk', 'credit scoring'],
    ogTitle: 'Risk Management | ContexQ',
    ogDescription: 'Group-level risk detection, network exposure mapping, and aggregate scoring',
  },
};

/**
 * Fraud Detection Configuration
 */
export const fraudConfig: SolutionConfig = {
  slug: 'fraud',
  title: 'Fraud Detection',
  description: 'Mule ring detection, behavioural scoring, and continuous fraud monitoring',

  colors: {
    primary: '#06B6D4',     // Cyan
    secondary: '#10b981',   // Green
    accent: '#EF4444',      // Red
    success: '#10b981',     // Green
  },

  hero: {
    eyebrow: 'Fraud Detection',
    quote: 'Mules don\'t get caught one transaction at a time. <em>They get caught in the ring.</em>',
    h1Words: ['Continuous', 'Connected', 'Explainable'],
    subheading: 'Probabilistic scoring instead of hard-threshold rules. A temporal graph instead of isolated alerts. Counterfactual evidence instead of opaque scores. STR-ready by default.',
    textCard: {
      enabled: false,
      rows: [
        {
          label: 'Typologies',
          content: [
            {label: 'Pass-Through Flow', color: '#06B6D4'},
            {label: 'Threshold Evasion', color: '#10b981'},
            {label: 'Ring Topology', color: '#EF4444'},
            {label: 'Device Cluster', color: '#06B6D4'},
          ],
          isChips: true
        },
        {
          label: 'Outcome',
          content: ['Coordinated ring · 14 accounts, 3 banks, 1 herder'],
          isChips: false
        }
      ]
    }
  },

  sections: {
    '01': {
      label: 'The Picture Today vs. The Picture With ContexQ',
      title: '',
      left: {
        heading: 'A thousand rules. <em>And the same three problems.</em>',
        subheading: 'Every threshold is a cliff. Mules learn it. Honest customers fall off it.',
        content: [
          'Investigators stitch context across systems by hand. By the time the ring is mapped, the funds are layered three accounts deep, and the regulator wants to know why the rule that was tuned last quarter missed it.',
        ],
        visualization: {
          type: 'svg',
          svgContent: '<svg viewBox="0 0 850 550" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto;"><defs><style>.silo-box { fill: rgba(249,147,22,0.08); stroke: rgba(249,147,22,0.3); stroke-width: 1.5; border-radius: 8px; } .silo-name { font-size: 18px; font-weight: 500; fill: #ffffff; } .silo-bar { fill: #ef4444; opacity: 0.7; } .gap-line { stroke: #ef4444; stroke-width: 1.5; stroke-dasharray: 3,4; opacity: 0.5; }</style></defs><g><rect class="silo-box" x="10" y="0" width="270" height="120" rx="8"/><text class="silo-name" x="120" y="30" text-anchor="middle">Rules Engine</text><g transform="translate(35,0)"><rect class="silo-bar" x="0" y="90" width="40" height="18"/><rect class="silo-bar" x="45" y="78" width="40" height="30"/><rect class="silo-bar" x="90" y="94.5" width="40" height="13.5"/><rect class="silo-bar" x="135" y="81" width="40" height="27"/><rect class="silo-bar" x="180" y="88.5" width="40" height="19.5"/></g></g><g><rect class="silo-box" x="475" y="35" width="270" height="120" rx="8"/><text class="silo-name" x="595" y="65" text-anchor="middle">Device / Session</text><g transform="translate(500,70)"><rect class="silo-bar" x="0" y="56" width="40" height="16"/><rect class="silo-bar" x="45" y="61" width="40" height="11"/><rect class="silo-bar" x="90" y="58" width="40" height="14"/><rect class="silo-bar" x="135" y="65" width="40" height="7"/><rect class="silo-bar" x="180" y="62" width="40" height="10"/></g></g><g><rect class="silo-box" x="50" y="200" width="270" height="120" rx="8"/><text class="silo-name" x="150" y="240" text-anchor="middle">KYC / Customer</text><g transform="translate(75,225)"><rect class="silo-bar" x="0" y="59" width="40" height="13"/><rect class="silo-bar" x="45" y="64" width="40" height="8"/><rect class="silo-bar" x="90" y="53" width="40" height="19"/><rect class="silo-bar" x="135" y="60" width="40" height="12"/><rect class="silo-bar" x="180" y="57" width="40" height="15"/></g></g><g><rect class="silo-box" x="505" y="230" width="270" height="120" rx="8"/><text class="silo-name" x="610" y="270" text-anchor="middle">Watchlist Engine</text><g transform="translate(530,255)"><rect class="silo-bar" x="0" y="62" width="40" height="10"/><rect class="silo-bar" x="45" y="57" width="40" height="15"/><rect class="silo-bar" x="90" y="66" width="40" height="6"/><rect class="silo-bar" x="135" y="52" width="40" height="20"/><rect class="silo-bar" x="180" y="61" width="40" height="11"/></g></g><g><rect class="silo-box" x="10" y="400" width="270" height="120" rx="8"/><text class="silo-name" x="120" y="440" text-anchor="middle">Adverse Media</text><g transform="translate(35,425)"><rect class="silo-bar" x="0" y="63" width="40" height="9"/><rect class="silo-bar" x="45" y="53" width="40" height="19"/><rect class="silo-bar" x="90" y="61" width="40" height="11"/><rect class="silo-bar" x="135" y="58" width="40" height="14"/><rect class="silo-bar" x="180" y="54" width="40" height="18"/></g></g><g><rect class="silo-box" x="455" y="410" width="270" height="120" rx="8" style="stroke-dasharray: 4,3; fill: rgba(249,147,22,0.04);"/><text class="silo-name" x="545" y="450" text-anchor="middle" style="opacity: 0.6;">Ring / Network</text><circle cx="725" cy="415" r="15" fill="#d1d5db" stroke="#9ca3af" stroke-width="1.5"/><text x="725" y="420" text-anchor="middle" font-size="16" fill="#6b7280" font-weight="600">?</text></g><line class="gap-line" x1="350" y1="40" x2="350" y2="250"/><line class="gap-line" x1="330" y1="220" x2="575" y2="220"/><line class="gap-line" x1="280" y1="420" x2="485" y2="320"/></svg>'
        },
        quote: 'We tune the rules. They learn the rules. We tune again.'
      },
      right: {
        heading: 'With ContexQ',
        isPositive: true,
        subheading: 'Six topologies. <em>One temporal graph.</em> Continuous scoring.',
        content: [
          'Every disruption pattern in mule fraud (pass-through flows, threshold evasion, ring topologies, device clusters, identity collisions, watchlist contagion) runs as a probabilistic scorecard on the same temporal graph. No cliffs to tune around. The composite stays calibrated as mules adapt.',
        ],
        visualization: {
          type: 'image',
          imageSrc: '/assets/images/Solutions/mule_s012.png',
          description: 'Temporal graph with six typology clusters'
        }
      }
    },

    '02': {
      label: 'The Day a Mule Ring Goes Live',
      title: '',
      intro: {
        quote: 'Catching the mule isn\'t the win. <em>Catching the ring is.</em>',
        description: 'Most rules engines flag a single suspicious payment, queue it for review, and lose the ring around it. By the time a human stitches the network, the funds are layered three accounts deep and the herder has spun up a new wave.'
      },
      left: {
        heading: 'Rules-Engine Reaction · Days to Weeks',
        subtext: 'By the time the ring is mapped, <em>the funds are gone.</em>',
        content: [],
        outcome: {
          type: 'bad',
          icon: '!',
          title: 'Money laundered. Ring grows. Regulator comments.',
          description: 'High false positives, late STR filing, no map of the wider ring, and the rule that missed it gets re-tuned next quarter.'
        }
      },
      right: {
        heading: 'ContexQ · Milliseconds to Hours',
        subtext: 'The ring surfaces <em>before</em> the trigger. The evidence ships <em>during</em> it.',
        content: [],
        summary: [
          { key: 'T -2h', value: 'SC-09 synchrony · 12 accounts pulse together · shared device', status: 'WATCH' },
          { key: 'T 0', value: 'Trigger · $58k cross-border · pass-through pattern', status: 'ALERT' },
          { key: '+ 14 ms', value: 'Composite 0.94 · ring M-2841 resolved · herder identified', status: 'RESOLVED' },
          { key: '+ 1 hr', value: 'Block approved · STR draft generated · evidence attached', status: 'DONE' }
        ],
        outcome: {
          type: 'good',
          icon: '✓',
          title: 'Funds preserved. Ring mapped. STR auto-drafted with kernel-level evidence.',
          description: 'Composite score traces back to every contributing kernel. Investigators read the why. Regulators read the audit.'
        }
      }
    },

    '03': {
      label: 'Why a Model Alone Won\'t Catch a Ring',
      title: '',
      quote: 'The hard part isn\'t the AI. <em>It\'s the soft kernel underneath it.</em>',
      description: 'Real mule detection lives in the math between rules: continuous membership instead of binary cliffs, peer cohorts learned nightly, scorecards combining into a composite that traces back to evidence. A model dropped on raw transactions answers fast. It also misses the ring.',
      visual: {
        type: 'image',
        imageSrc: '/assets/images/Solutions/mule_s03.png',
        description: 'Data fabric, entity resolution, temporal graph visualization'
      },
      callout: {
        tag: 'A rules engine<br/>for mules',
        text: 'Draws a line. Mules walk around it. You re-tune. They re-learn. Every quarter. <em>The sharp threshold isn\'t a flaw in rules engines, it is the rules engine.</em>'
      },
      stages: [
        {
          number: '01',
          name: 'Soft Kernels',
          tag: 'INPUT LAYER',
          description: 'Continuous membership functions, not binary cliffs. The 11-minute mule scores almost the same as the 10-minute one, no edge to operate around.',
        },
        {
          number: '02',
          name: 'Entity Resolution',
          tag: 'THE KEY UNLOCK',
          description: 'One person resolved across N accounts, N devices, N profiles. Across spelling, language, biometric and behavioural fingerprint.',
        },
        {
          number: '03',
          name: 'Ring Detection',
          tag: 'CONTEXT LAYER',
          description: 'Cycles, herder centrality, community taint, surfaced from the temporal graph in milliseconds, not in the next day’s batch.',
        },
        {
          number: '04',
          name: 'STR-Ready Evidence',
          tag: 'DECISION LAYER',
          description: 'Counterfactual explanations and contributing-feature traces on every score. Investigators read the why; regulators read the audit.',
        },
      ],
    },

    '04': {
      label: 'Three X-Rays · Twenty Scorecards',
      title: '',
      quote: 'We catch the bot by the <em>rhythm</em>, not the password.',
      description: 'Twenty probabilistic scorecards, combining into a composite. Three of them tell the story: the rhythm of behaviour, the no-cliff curve, and the fan-in that exposes the herder.',
      visuals: [
        {
          type: 'image',
          imageSrc: '/assets/images/Solutions/mule_s04.png',
          description: 'Three scorecards: Behavioural Biometrics, Soft-Kernel Scoring, Mule-Herder Hub'
        }
      ]
    },
  },

  timeline: {
    left: [
      {day: 'DAY 0', label: 'Rule fires', color: '#ffffff'},
      {day: 'DAY 2', label: 'Triage queue', type: 'warn'},
      {day: 'DAY 5', label: 'Manual stitching', type: 'warn'},
      {day: 'DAY 8', label: 'Funds layered', type: 'danger'},
      {day: 'DAY 14', label: 'STR filed late', type: 'danger'},
    ],
    right: [
      {day: 'T −2h', label: 'Cluster forming', color: '#10b981'},
      {day: 'T 0', label: 'Trigger payment', color: '#fbbf24'},
      {day: '+ 14 ms', label: 'Composite ≥ 0.9', color: '#10b981'},
      {day: '+ 15 min', label: 'Block + STR draft', color: '#10b981'},
      {day: '+ 1 hr', label: 'Case closed', color: '#10b981'},
    ],
  },

  seo: {
    keywords: ['fraud detection', 'mule detection', 'behavioural scoring', 'ring detection', 'financial crime'],
    ogTitle: 'Fraud Detection | ContexQ',
    ogDescription: 'Mule ring detection, behavioural scoring, and continuous fraud monitoring',
  },
};

/**
 * All solutions configurations
 * Add new solutions here as they are created
 */
export const allSolutionsConfig: Record<string, SolutionConfig> = {
  'supply-chain-intelligence': supplyChainConfig,
  'aml': amlConfig,
  'kyc': kycConfig,
  'customer-intelligence': customerIntelligenceConfig,
  'risk': riskConfig,
  'fraud': fraudConfig,
};

/**
 * Get configuration for a specific solution
 * @param slug - Solution slug (e.g., 'supply-chain-intelligence')
 * @returns Solution configuration or undefined
 */
export function getSolutionConfig(slug: string): SolutionConfig | undefined {
  return allSolutionsConfig[slug];
}

/**
 * Get all solution slugs
 */
export function getAllSolutionSlugs(): string[] {
  return Object.keys(allSolutionsConfig);
}
