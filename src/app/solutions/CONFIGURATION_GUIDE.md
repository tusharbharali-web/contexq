# Solutions Configuration Guide

## Quick Start: Adding a New Solution Page

### 3-Step Setup

#### Step 1: Add Configuration (SOLUTIONS_CONFIG.ts)
Define your solution content once:

```typescript
export const kycConfig: SolutionConfig = {
  slug: 'kyc',
  title: 'Know Your Customer',
  // ... full config
};

allSolutionsConfig['kyc'] = kycConfig;  // Register it
```

#### Step 2: Create Page File
Create `src/app/solutions/kyc/page.tsx` with this single file:

```typescript
'use client';

import GenericSolutionTemplate from '../GenericSolutionTemplate';
import { kycConfig } from '../SOLUTIONS_CONFIG';

export default function KYCPage() {
  return <GenericSolutionTemplate config={kycConfig} />;
}
```

That's it! No JSX layout needed. The template renders everything from your config.

#### Step 3: Add Navigation Button
Update `src/data/coin-slices.json` Solutions slice:

```json
{
  "label": "Know Your Customer",
  "icon": "/assets/images/Solutions/kyc.png",
  "slug": "kyc"
}
```

Your page is now live at `/solutions/kyc` ✅

---

## Full Configuration Example

### Step 1: Create Configuration
Add a new configuration object in `SOLUTIONS_CONFIG.ts`:

```typescript
export const kycConfig: SolutionConfig = {
  slug: 'kyc',
  title: 'Know Your Customer',
  description: '...',
  
  colors: {
    primary: '#26C6DA',    // Cyan (default) or solution-specific color
    secondary: '#059669',
    accent: '#f97316',
    success: '#10b981',
  },

  hero: {
    eyebrow: 'Know Your Customer',
    quote: 'The form sees the applicant. <em>The graph sees the customer.</em>',
    h1Words: ['Customers', 'Resolved', 'Connected'],
    subheading: 'Subheading text...',
    signals: {
      label: 'Signals in',
      items: [
        {label: 'CRM', color: '#10b981'},
        {label: 'Registries', color: '#f97316'},
        // ... more items
      ],
    },
    outcome: 'Clear customer picture. Network visible. Risk surfaced.',
  },

  sections: {
    '01': {
      label: 'The Challenge',
      title: 'Today\'s Reality vs. With ContexQ',
      left: {
        heading: 'Today\'s Reality',
        content: [
          'First paragraph...',
          'Second paragraph...',
        ],
        quote: 'Optional callout quote',
      },
      right: {
        heading: 'With ContexQ',
        isPositive: true,
        subheading: 'Optional subheading with <em>emphasis</em>',
        content: [
          'Paragraph text...',
        ],
      },
    },
    // ... more sections
  },
};
```

### Step 2: Register Configuration
In the same file, add your config to `allSolutionsConfig`:

```typescript
export const allSolutionsConfig: Record<string, SolutionConfig> = {
  'supply-chain-intelligence': supplyChainConfig,
  'kyc': kycConfig,  // Add your new config here
};
```

### Step 3: Create Page File
Create `src/app/solutions/[solution-slug]/page.tsx`:

```typescript
'use client';

import { getSolutionConfig } from '../SOLUTIONS_CONFIG';
import GenericSolutionTemplate from '../GenericSolutionTemplate';

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const config = getSolutionConfig(params.slug);
  
  if (!config) {
    return <div>Solution not found</div>;
  }

  return <GenericSolutionTemplate config={config} />;
}
```

### Step 4: Update coin-slices.json (Navigation)
In `src/data/coin-slices.json`, make sure the Solutions slice includes your button:

```json
{
  "label": "Know Your Customer",
  "icon": "/assets/images/Solutions/kyc.png",
  "slug": "kyc"
}
```

---

## Configuration Structure Explained

### `colors` object
Define the color scheme for your solution. All colors are in hex format:

```typescript
colors: {
  primary: '#26C6DA',    // Main accent (buttons, highlights, emphasized text)
  secondary: '#059669',  // Secondary elements
  accent: '#f97316',     // Warning/attention states (orange)
  success: '#10b981',    // Success/positive states (green)
}
```

### `hero` object
Defines the hero/landing section layout:

```
Left Column              Right Column
├─ eyebrow              ├─ visualization
├─ quote                │  (SVG/Canvas/3D)
├─ h1Words              │
└─ subheading           └─ textCard ← BELOW visualization
```

**Properties:**
- **eyebrow**: Small label above the quote (e.g., "Supply Chain Intelligence")
- **quote**: Main compelling quote. Use `<em>` tags to emphasize parts
- **h1Words**: Three words that animate in sequence (e.g., ["Lean", "Nimble", "Decisive"])
- **subheading**: Supporting text describing the solution
- **visualization** (optional): SVG, Canvas, or Three.js visualization config
- **textCard** (optional): Text card positioned BELOW the visualization
  ```typescript
  textCard: {
    enabled: boolean,  // Whether to show the card (set to false for solutions without it)
    rows: [
      {
        label: string,  // e.g., "Signals in" or "Outcome"
        content: string[] | Array<{label: string; color: string}>,  // Text or chip items
        isChips?: boolean  // If true, renders as colored chips with dots
      }
    ]
  }
  ```
  
  **Example with chips (colored indicators):**
  ```typescript
  textCard: {
    enabled: true,
    rows: [
      {
        label: 'Signals in',
        content: [
          {label: 'Internal', color: '#10b981'},
          {label: 'External', color: '#f97316'},
        ],
        isChips: true
      },
      {
        label: 'Outcome',
        content: ['Optimal supply, lean inventory.'],
        isChips: false
      }
    ]
  }
  ```

### `sections` object
Each section (01, 02, 03, 04) follows a specific structure:

#### Section 01: Problem vs Solution
```typescript
'01': {
  label: 'The Challenge',
  title: 'Today\'s Reality vs. With ContexQ',
  left: {
    heading: 'Today\'s Reality',
    content: ['Para 1', 'Para 2'],
    quote: 'Optional callout',
  },
  right: {
    heading: 'With ContexQ',
    isPositive: true,  // Makes heading green
    subheading: 'Optional with <em>emphasis</em>',
    content: ['Para 1'],
  },
}
```

#### Section 02: Impact/Timeline
```typescript
'02': {
  label: 'Impact',
  title: 'Section Title',
  intro: {
    quote: 'Main insight with <em>emphasis</em>',
    description: 'Context description',
  },
  left: {
    heading: 'Traditional Approach · 5–10 Days',
    subtext: 'Subheading with <em>emphasis</em>',
    content: [],  // Usually empty for timeline-based sections
    outcome: {
      type: 'bad',      // or 'good'
      icon: '!',        // or '✓'
      title: 'Outcome title',
      description: 'Outcome description',
    },
  },
  right: {
    heading: 'ContexQ · Minutes, Not Days',
    subtext: 'Subheading...',
    content: [],
    outcome: {
      type: 'good',
      icon: '✓',
      title: 'Positive outcome',
      description: 'Description...',
    },
  },
}
```

#### Section 03: Platform Philosophy
```typescript
'03': {
  label: 'Architecture',
  title: 'Why This Is a Platform, Not a Model',
  quote: 'Key insight with <em>emphasis</em>',
  description: 'Longer explanation paragraph...',
  stages: [
    {
      number: '01',
      name: 'Stage Name',
      tag: 'CATEGORY LABEL',
      description: 'Stage description with <strong>bold</strong> highlights',
    },
    // 4 stages typically
  ],
}
```

#### Section 04: Capabilities/Features
```typescript
'04': {
  label: 'Capabilities',
  title: 'What You Get',
  cards: [
    {
      title: 'Capability Name',
      description: 'Short description of this capability',
    },
    // 6 cards typically
  ],
}
```

### `timeline` object
Used in Section 02 for disruption timeline comparisons:

```typescript
timeline: {
  left: [
    {day: 'DAY 0', label: 'Event starts'},
    {day: 'DAY 5', label: 'Problem escalates', type: 'warn'},
    {day: 'DAY 10', label: 'Crisis', type: 'danger'},
  ],
  right: [
    {day: 'T 0', label: 'Alert triggered'},
    {day: '+ 2 min', label: 'Options ranked'},
    {day: '+ 1 hr', label: 'Resolved'},
  ],
}
```

Types: `'default' | 'warn' | 'danger'` (affects dot color)

### `graph` object (Optional)
For interactive graph visualizations in Section 01 right side:

```typescript
graph: {
  enabled: true,
  clusters: [
    {x: 80, y: 80, color: '#10b981', label: 'Supplier'},
    {x: 460, y: 60, color: '#f97316', label: 'Financial'},
    // positions in 540x380 SVG coordinate space
  ],
}
```

---

## Text Card Position

The text card appears **inside the right-side visualization container**, positioned **below** the visualization element:

```
┌─ solution-hero-visual ──────────────┐
│                                      │
│  ┌─ visualization ────────────────┐ │
│  │ (SVG/Canvas/3D renders here)  │ │
│  └────────────────────────────────┘ │
│                                      │
│  ┌─ textCard (hero-spec) ─────────┐ │
│  │ • Signals in: [chips with colors]│ │
│  │ • Outcome: Text description      │ │
│  └────────────────────────────────┘ │
└──────────────────────────────────────┘
```

The GenericSolutionTemplate automatically renders this positioning based on your `textCard` configuration.

---

## Text Card Examples

### Scenario 1: With Signal Chips & Outcome
Used by most solutions (Supply Chain, KYC, etc.):
```typescript
hero: {
  // ... other properties
  textCard: {
    enabled: true,
    rows: [
      {
        label: 'Signals in',
        content: [
          {label: 'CRM', color: '#10b981'},
          {label: 'Forms', color: '#f97316'},
          {label: 'Registers', color: '#10b981'},
        ],
        isChips: true
      },
      {
        label: 'Outcome',
        content: ['Clear customer picture. Network visible. Risk surfaced.'],
        isChips: false
      }
    ]
  }
}
```

### Scenario 2: Exception - No Text Card
For solutions that don't have this (e.g., some visualization-heavy pages):
```typescript
hero: {
  // ... other properties
  textCard: {
    enabled: false  // Hides the card entirely
  }
}
```

### Scenario 3: Text Only (No Chips)
For solutions with just explanatory text below the visualization:
```typescript
hero: {
  // ... other properties
  textCard: {
    enabled: true,
    rows: [
      {
        label: 'What You Get',
        content: [
          'Real-time network visibility',
          'Automated risk detection',
          'Actionable intelligence'
        ],
        isChips: false
      }
    ]
  }
}
```

---

## Color Scheme Recommendations

### By Solution Type

**Risk/Fraud Detection:**
- Primary: `#26C6DA` (Cyan)
- Accent: `#dc2626` (Red)
- Success: `#10b981` (Green)

**KYC/Compliance:**
- Primary: `#26C6DA` (Cyan)
- Accent: `#f97316` (Orange)
- Success: `#10b981` (Green)

**Data Management:**
- Primary: `#c8851a` (Gold)
- Accent: `#f97316` (Orange)
- Success: `#10b981` (Green)

**Supply Chain:**
- Primary: `#26C6DA` (Cyan)
- Accent: `#f97316` (Orange)
- Success: `#10b981` (Green)

---

## Text Formatting

### Emphasis Tags in Content
Use HTML tags in your text to apply styling:

```typescript
// Italic emphasis (for solution-specific highlights)
'The form sees the applicant. <em>The graph sees the customer.</em>'

// Strong/bold (for key concepts)
'See <strong>all transactions</strong> across your network'

// Line breaks (if needed, though rare)
'Line one\nLine two'
```

---

## How the Generic Template Works

### GenericSolutionTemplate.tsx

This component renders any solution page from a `SolutionConfig` object:

```typescript
import GenericSolutionTemplate from '../GenericSolutionTemplate';
import { kycConfig } from '../SOLUTIONS_CONFIG';

export default function KYCPage() {
  return <GenericSolutionTemplate config={kycConfig} />;
}
```

**What it renders:**
- ✅ Hero section (with textCard if enabled)
- ✅ Section 01 (Problem vs Solution)
- ✅ Section 03 (Platform Philosophy with stages)
- ✅ Section 04 (Capabilities grid)
- ✅ All styling, animations, responsive layout
- ✅ Header and Footer

**What you provide:**
- 📋 Configuration object (SOLUTIONS_CONFIG.ts)
- 🎨 Colors (in config)
- 📝 Text content (in config)
- 🖼️ Visualization placeholder (customize separately if needed)

No need to write layout JSX at all!

### File Structure
```
src/app/solutions/
├── GenericSolutionTemplate.tsx    ← Renders any config
├── SOLUTIONS_CONFIG.ts             ← All solution content
├── CONFIGURATION_GUIDE.md
├── supply-chain-intelligence/
│   └── page.tsx                    ← Just one line!
├── kyc/
│   └── page.tsx                    ← Just one line!
└── [other solutions]/
    └── page.tsx
```

---

## File Routing

When you create a configuration with slug `"my-solution"`, the page is automatically accessible at:
```
/solutions/my-solution
```

Make sure:
1. Config slug matches the directory name
2. coin-slices.json button slug matches the config slug
3. Button newpage is set to `true` in coin-slices.json

---

## Example: Complete KYC Configuration

```typescript
export const kycConfig: SolutionConfig = {
  slug: 'kyc',
  title: 'Know Your Customer',
  description: 'Customer resolution, perpetual monitoring, and network discovery',

  colors: {
    primary: '#26C6DA',
    secondary: '#059669',
    accent: '#f97316',
    success: '#10b981',
  },

  hero: {
    eyebrow: 'Know Your Customer',
    quote: 'The form sees the applicant. <em>The graph sees the customer.</em>',
    h1Words: ['Customers', 'Resolved', 'Connected'],
    subheading: 'Clear picture from first interaction through entire lifecycle. Refresh it automatically.',
    textCard: {
      enabled: true,
      rows: [
        {
          label: 'Signals in',
          content: [
            {label: 'CRM', color: '#10b981'},
            {label: 'KYC Forms', color: '#f97316'},
            {label: 'Registers', color: '#10b981'},
            {label: 'Adverse Media', color: '#f97316'},
          ],
          isChips: true
        },
        {
          label: 'Outcome',
          content: ['Clear customer picture. Network visible. Risk surfaced.'],
          isChips: false
        }
      ]
    }
  },

  sections: {
    '01': {
      label: 'The Challenge',
      title: 'Today\'s Reality vs. With ContexQ',
      left: {
        heading: 'Today\'s Reality',
        content: [
          'Annual KYC updates miss 364 days of change.',
          'Customer networks are invisible. Related-party risk is a guess. And perpetual monitoring? Most firms have it on the roadmap, not production.',
        ],
        quote: '"By the time we see the risk, the account is already compromised." — AML Manager, Tier-1 Bank',
      },
      right: {
        heading: 'With ContexQ',
        isPositive: true,
        subheading: 'Customer resolved. <em>Network visible.</em> Perpetually.',
        content: [
          'Merge fragmented customer records into one truth. Surface connected entities and beneficial owners in real time. Monitor and refresh without manual intervention.',
        ],
      },
    },

    '02': {
      label: 'Impact',
      title: 'The Cost of Delay',
      intro: {
        quote: 'KYC isn\'t about compliance. <em>It\'s about knowing who you\'re doing business with.</em>',
        description: 'And knowing how they\'re connected to risk.',
      },
      left: {
        heading: 'Annual KYC Refresh',
        subtext: 'By the time you know, <em>they\'ve already moved money.</em>',
        content: [],
        outcome: {
          type: 'bad',
          icon: '!',
          title: 'Compliance checkbox. Risk blind.',
          description: 'Missed connections, late alerts, customer intelligence buried in spreadsheets.',
        },
      },
      right: {
        heading: 'ContexQ: Perpetual Refresh',
        subtext: 'You know <em>the moment</em> something changes.',
        content: [],
        outcome: {
          type: 'good',
          icon: '✓',
          title: 'Network mapped. Risk visible. Decision ready.',
          description: 'Real-time alerts on related-party risk, network changes, and adverse media.',
        },
      },
    },

    '03': {
      label: 'Architecture',
      title: 'Why This Is a Platform',
      quote: 'Customer resolution is only hard if you do it on dirty data. <em>We start with the connections.</em>',
      description: 'KYC decisions live in relationships — between customer records, their beneficial owners, and their networks. Most platforms resolve entities in isolation and stop there.',
      stages: [
        {
          number: '01',
          name: 'Ingest & Normalize',
          tag: 'INPUT',
          description: 'CRM, KYC forms, registers, news — <strong>one truth table.</strong>',
        },
        {
          number: '02',
          name: 'Entity Merge',
          tag: 'KEY UNLOCK',
          description: '<strong>Same customer, 5 names, 1 identity.</strong> With confidence scoring.',
        },
        {
          number: '03',
          name: 'Network Discovery',
          tag: 'RELATIONSHIP LAYER',
          description: '<strong>Beneficial owners, shell structures, hidden connections.</strong> All in the graph.',
        },
        {
          number: '04',
          name: 'Perpetual Refresh',
          tag: 'OUTCOME',
          description: '<strong>News, registers, adverse media — automated.</strong> No manual KYC refresh needed.',
        },
      ],
    },

    '04': {
      label: 'Capabilities',
      title: 'What You Can Do',
      cards: [
        {title: 'Customer Resolution', description: 'Merge fragmented records into one truth'},
        {title: 'UBO Discovery', description: 'Uncover beneficial owners and structures'},
        {title: 'Network Mapping', description: 'See all connections and related entities'},
        {title: 'Perpetual Monitoring', description: 'Automated refresh without manual intervention'},
        {title: 'Risk Scoring', description: 'Customer and network risk in one view'},
        {title: 'Audit Trail', description: 'Full traceability of decisions'},
      ],
    },
  },

  timeline: {
    left: [
      {day: 'DAY 0', label: 'KYC form filed'},
      {day: 'DAY 30', label: 'Approval delayed', type: 'warn'},
      {day: 'DAY 90', label: 'Passed compliance'},
      {day: 'DAY 365', label: 'Next refresh due', type: 'warn'},
    ],
    right: [
      {day: 'T 0', label: 'Form received'},
      {day: '+ 1 hour', label: 'Network discovered'},
      {day: '+ 2 hours', label: 'Risk surfaced'},
      {day: 'Continuous', label: 'Perpetually refreshed'},
    ],
  },

  seo: {
    keywords: ['KYC', 'customer onboarding', 'beneficial owner detection', 'perpetual monitoring'],
    ogTitle: 'Know Your Customer - Entity Resolution & Network Discovery',
    ogDescription: 'Customer resolution, perpetual monitoring, and network discovery platform',
  },
};
```

---

## Testing Your Configuration

1. **Add to allSolutionsConfig** in SOLUTIONS_CONFIG.ts
2. **Create the page file**: `src/app/solutions/[slug]/page.tsx`
3. **Update navigation**: Add button to coin-slices.json
4. **Visit the page**: http://localhost:3000/solutions/[your-slug]
5. **Verify styling**: Check that colors and typography match expectations
6. **Test responsiveness**: View on mobile, tablet, desktop

---

## Troubleshooting

**Page not found:**
- Check config slug matches directory name
- Check coin-slices.json slug matches config slug
- Verify page file exists in correct directory

**Colors not applying:**
- Check hex colors are valid (e.g., `#26C6DA` not `26C6DA`)
- Refresh browser after code changes

**Text not formatting:**
- Make sure to use `<em>` for emphasis and `<strong>` for bold
- HTML tags should be inside quoted strings
- Line breaks use `\n` in template literals

**Timeline not showing:**
- Verify `timeline` object is defined in config
- Check type values are `'default' | 'warn' | 'danger'`
- Ensure section 02 is properly configured

---

For more details, see the main IMPLEMENTATION_GUIDE.md and existing implementations.
