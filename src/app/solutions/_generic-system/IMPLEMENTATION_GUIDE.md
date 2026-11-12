# Solution Pages Implementation Guide

## Overview

This guide shows how to implement solution pages using the **configuration-driven template system**. Instead of writing custom JSX for each solution, you define content in a config object and the `GenericSolutionTemplate` renders everything automatically.

---

## Quick Start: 3 Simple Steps

### Step 1: Create Configuration (SOLUTIONS_CONFIG.ts)

```typescript
export const kycConfig: SolutionConfig = {
  slug: 'kyc',
  title: 'Know Your Customer',
  description: 'Customer resolution and network discovery',
  
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
    subheading: 'Clear picture from first interaction through entire lifecycle.',
    textCard: {
      enabled: true,
      rows: [
        {
          label: 'Signals in',
          content: [
            {label: 'CRM', color: '#10b981'},
            {label: 'KYC Forms', color: '#f97316'},
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
    '01': { /* Problem vs Solution */ },
    '03': { /* Platform Philosophy */ },
    '04': { /* Capabilities Grid */ }
  }
};

allSolutionsConfig['kyc'] = kycConfig;
```

### Step 2: Create Page File (1 file, 3 lines!)

Create `src/app/solutions/kyc/page.tsx`:

```typescript
'use client';
import GenericSolutionTemplate from '../GenericSolutionTemplate';
import { kycConfig } from '../SOLUTIONS_CONFIG';

export default function KYCPage() {
  return <GenericSolutionTemplate config={kycConfig} />;
}
```

### Step 3: Add Navigation

Update `src/data/coin-slices.json` Solutions slice:

```json
{
  "label": "Know Your Customer",
  "icon": "/assets/images/Solutions/kyc.png",
  "slug": "kyc"
}
```

**Done!** Page is live at `/solutions/kyc` ✅

---

## Template Structure (What Gets Rendered)

The `GenericSolutionTemplate` automatically renders:

**Key Features:**
- ✅ Hero section with visualization & text card
- ✅ Section 01: Problem vs Solution (split layout with optional visuals)
- ✅ Section 02: Outcomes comparison with timeline & summary card
- ✅ Section 03: Platform philosophy with visual & callout alert
- ✅ Section 04: Capabilities grid (auto-responsive)
- ✅ Header & Footer included
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ CSS custom properties for dynamic theming

```
┌─ HERO SECTION ──────────────────────────────────────┐
│ Left Column              Right Column                 │
│ ├─ Eyebrow              ├─ Visualization            │
│ ├─ Quote (with <em>)    │  (SVG/Canvas/Three.js)   │
│ ├─ H1 (3 animated words)│  (Square container)       │
│ └─ Subheading           │  (Aspect ratio 1:1)       │
│                         ├─ Text Card (below):        │
│                         │  ├─ Signals in (chips)    │
│                         │  └─ Outcome (text)        │
└─────────────────────────────────────────────────────┘

┌─ SECTION 01: Problem vs Solution ───────────────────┐
│ Left (Today's Reality)    Right (With ContexQ)       │
│ ├─ Heading                ├─ Heading (green if +)   │
│ ├─ Content paragraphs     ├─ Subheading (optional)  │
│ ├─ Quote (optional)       ├─ Content paragraphs     │
│ └─ Visualization (opt)    └─ Visualization (opt)    │
└─────────────────────────────────────────────────────┘

┌─ SECTION 02: Outcomes Comparison (with Timeline) ───┐
│ Intro:                                               │
│ ├─ Quote with emphasis                              │
│ └─ Description                                       │
│                                                      │
│ Left Side                Right Side                  │
│ ├─ Heading              ├─ Heading                  │
│ ├─ Subheading (opt)     ├─ Subheading (opt)         │
│ ├─ Timeline:            ├─ Timeline:                │
│ │  Days above line      │  Times above line         │
│ │  [● ● ● ● ●]         │  [● ● ● ● ●]             │
│ │  Labels below         │  Labels below             │
│ │                       ├─ Summary Card (optional): │
│ │                       │  ├─ Key1: Value1 [Status] │
│ │                       │  ├─ Key2: Value2 [Status] │
│ │                       │  ├─ Key3: Value3 [Status] │
│ │                       │  └─ Key4: Value4 [Status] │
│ └─ Outcome Box          └─ Outcome Box              │
│    (Bad: !, Good: ✓)       (Bad: !, Good: ✓)       │
└─────────────────────────────────────────────────────┘

┌─ SECTION 03: Platform Philosophy ──────────────────┐
│ ├─ Label & Title                                    │
│ ├─ Quote with emphasis                              │
│ ├─ Description                                      │
│ ├─ Visual Container (image or SVG):                 │
│ │  └─ Full-width visualization                     │
│ ├─ Callout Alert (optional):                        │
│ │  ├─ Bold tag/title                               │
│ │  └─ Description text                             │
│ └─ Pipeline (4 stages):                             │
│    ├─ Stage 01: Name & Description                 │
│    ├─ Stage 02: Name & Description                 │
│    ├─ Stage 03: Name & Description                 │
│    └─ Stage 04: Name & Description                 │
└─────────────────────────────────────────────────────┘

┌─ SECTION 04: Visual Showcase ──────────────────────┐
│ ├─ Label & Title                                    │
│ ├─ Quote with emphasis                              │
│ ├─ Description                                      │
│ └─ Visual Grid (3 items):                           │
│    ├─ [Visual 1]  [Visual 2]  [Visual 3]           │
│    │  Image/SVG   Image/SVG   Image/SVG            │
│    └─ (Responsive 3-column grid)                    │
└─────────────────────────────────────────────────────┘

┌─ HEADER & FOOTER ──────────────────────────────────┐
│ Automatically included at top and bottom             │
└─────────────────────────────────────────────────────┘
```

---

## Configuration Structure

### Hero Section

```typescript
hero: {
  eyebrow: string;        // Top label (e.g., "Know Your Customer")
  quote: string;          // Main quote with <em> tags for emphasis
  h1Words: [string, string, string];  // 3 animated words
  subheading: string;     // Supporting text
  textCard?: {
    enabled: boolean;     // Show/hide the card
    rows: Array<{
      label: string;      // "Signals in" or "Outcome"
      content: string[] | Array<{label: string; color: string}>;
      isChips?: boolean;  // True = colored chips, False = text
    }>;
  };
}
```

### Section 01: Problem vs Solution

```typescript
sections: {
  '01': {
    label: string;        // e.g., "The Challenge"
    title: string;        // e.g., "Today's Reality vs. With ContexQ"
    left: {
      heading: string;    // e.g., "Today's Reality" (displays with accent-colored dots)
      content: string[];  // Array of paragraphs
      quote?: string;     // Optional callout quote
      visualization?: {   // Optional visualization below content
        type: 'silos' | 'graph' | 'custom'; // Visualization type
        description?: string; // Alt text or description
      };
    };
    right: {
      heading: string;    // e.g., "With ContexQ" (displays with success-colored dots if isPositive)
      isPositive?: boolean; // Make heading green (success color) + green dots
      subheading?: string; // Optional subheading with <em> tags
      content: string[];  // Array of paragraphs
      visualization?: {   // Optional visualization below content
        type: 'silos' | 'graph' | 'custom'; // Visualization type
        description?: string; // Alt text or description
      };
    };
  }
}
```

**Heading Styling (Automatic):**
- Each heading displays with **concentric colored dots** before it
- **Left side** heading: Accent color dots (10px inner + 20px outer at 0.3 opacity)
- **Right side** heading (with `isPositive: true`): Success color dots (same style)
- Both headings **align at the same vertical position** (y-axis)
- Dots are perfectly centered and always visible

**Visual Structure for Section 01:**
```
┌─────────────────────────────────────────────────────────────┐
│ Left Column             │ Right Column                       │
├─────────────────────────┼───────────────────────────────────┤
│ Heading                 │ Heading (green if isPositive)     │
│ Content paragraphs      │ Subheading (optional)             │
│ Quote (optional)        │ Content paragraphs                │
│                         │                                   │
│ ┌─────────────────────┐ │ ┌─────────────────────────────┐  │
│ │ Visualization       │ │ │ Visualization               │  │
│ │ (Silos, Graph, etc) │ │ │ (Graph, Network, etc)       │  │
│ │                     │ │ │                             │  │
│ └─────────────────────┘ │ └─────────────────────────────┘  │
└─────────────────────────┴───────────────────────────────────┘
```

**Example - Supply Chain Section 01:**
```typescript
'01': {
  label: 'The Challenge',
  title: 'Today\'s Reality vs. With ContexQ',
  left: {
    heading: 'Today\'s Reality',
    content: [
      'The data exists. Just not in one place, and not all of it.',
      'Internal risk lives in one system...'
    ],
    quote: '"We know we\'re exposed two and three tiers down..." — Head of Procurement',
    visualization: {
      type: 'silos',
      description: '6 disconnected data silos'
    }
  },
  right: {
    heading: 'With ContexQ',
    isPositive: true,
    subheading: 'One graph. <em>Every disruption.</em> Connected.',
    content: [
      'Financial, sanctions, geographic, logistics, supplier...'
    ],
    visualization: {
      type: 'graph',
      description: 'Unified network graph with clusters'
    }
  }
}
```

### Section 02: Outcomes Comparison (with Timeline)

```typescript
sections: {
  '02': {
    label: string;        // e.g., "Impact"
    title: string;        // e.g., "What This Means When Something Goes Wrong"
    intro?: {
      quote: string;      // Opening quote with <em> tags
      description: string; // Context explanation
    };
    left: {
      heading: string;    // e.g., "Traditional Reaction · Days"
      subtext?: string;   // e.g., "By the time you know..."
      content: string[];  // Not typically used (timeline replaces)
      outcome: {
        type: 'bad' | 'good';
        icon: string;     // '!' or '✓'
        title: string;    // Outcome title
        description: string; // Outcome details
      };
    };
    right: {
      heading: string;    // e.g., "ContexQ · Minutes"
      subtext?: string;   // e.g., "Early warning fires before..."
      content: string[];  // Not typically used (timeline replaces)
      summary?: Array<{   // Optional summary card above outcome (max 4 items)
        key: string;      // Label (e.g., "Trigger", "Customer")
        value: string;    // Value (supports <strong> and <em> tags)
        status?: string;  // Status/confidence indicator (e.g., "conf 99%", "verified", "detected")
      }>;
      outcome: {
        type: 'bad' | 'good';
        icon: string;     // '!' or '✓'
        title: string;    // Outcome title
        description: string; // Outcome details
      };
    };
  }
}
```

**Timeline Configuration (paired with Section 02):**
```typescript
timeline: {
  left: [
    { day: 'DAY 0', label: 'First milestone', type?: 'default' | 'warn' | 'danger' },
    { day: 'DAY 2', label: 'Second milestone', type?: 'warn' },
    { day: 'DAY 5', label: 'Third milestone', type?: 'warn' },
    { day: 'DAY 8', label: 'Fourth milestone', type?: 'danger' },
    { day: 'DAY 14', label: 'Fifth milestone', type?: 'danger' }
  ],
  right: [
    { day: 'T −2h', label: 'Early stage', type?: 'default' },
    { day: 'T 0', label: 'Start point', type?: 'default' },
    { day: '+ 14 ms', label: 'Fast action', type?: 'default' },
    { day: '+ 15 min', label: 'Implementation', type?: 'default' },
    { day: '+ 1 hr', label: 'Complete', type?: 'default' }
  ]
}
```

**Visual Structure for Section 02:**
```
┌──────────────────────────────────────────────────────────┐
│ Left Column              │ Right Column                   │
├──────────────────────────┼────────────────────────────────┤
│ Heading                  │ Heading                        │
│ Subheading (optional)    │ Subheading (optional)          │
│                          │                                │
│ Days above               │ Times above                    │
│ DAY 0  DAY 2  DAY 5      │ T −2h  T 0  +14ms              │
│   ●      ●      ●        │   ●      ●      ●             │
│   (dots on line)         │   (dots on line)              │
│ Labels below             │ Labels below                   │
│ Disrupt  News  Manual    │ Early  Disruption  Alternates  │
│                          │                                │
│                          │ ┌────────────────────────┐    │
│                          │ │ Summary (4 rows):      │    │
│                          │ │ Key1: Value1  [status] │    │
│                          │ │ Key2: Value2  [status] │    │
│                          │ │ Key3: Value3  [status] │    │
│                          │ │ Key4: Value4  [status] │    │
│                          │ └────────────────────────┘    │
│                          │                                │
│ ┌────────────────────┐   │ ┌────────────────────────┐    │
│ │ ! Bad Outcome      │   │ │ ✓ Good Outcome         │    │
│ │ Title & Details    │   │ │ Title & Details        │    │
│ └────────────────────┘   │ └────────────────────────┘    │
└──────────────────────────┴────────────────────────────────┘
```

**Example - AML Section 02:**
```typescript
'02': {
  label: 'Network Over Speed',
  title: 'When Money Moves Through the Network',
  intro: {
    quote: 'Catching the wire isn\'t the win. <em>Catching the network is.</em>',
    description: 'A traditional rules engine sees one suspicious payment...'
  },
  left: {
    heading: 'Rules-Engine Reaction',
    subtext: 'Days to Weeks',
    content: [],
    outcome: {
      type: 'bad',
      icon: '!',
      title: 'Funds laundered. Network unmapped.',
      description: 'High false positives, late STR, no trace...'
    }
  },
  right: {
    heading: 'ContexQ',
    subtext: 'Milliseconds to Hours',
    content: [],
    summary: [
      { key: 'Trigger', value: 'Cross-border wire · <strong>$9,840</strong> <em>(structured below threshold)</em>', status: 'detected' },
      { key: 'Customer', value: 'Marina Karpov · <strong>resolved across 3 IDs</strong> & 2 spelling variants', status: 'conf 99%' },
      { key: 'Counterparty', value: 'Shell Holdings Ltd · Cyprus · <strong>dissolved 2023</strong> · BvD match', status: 'verified' },
      { key: 'Network', value: '<strong>UBO flagged</strong> · sanctioned entity · 3-hop indirect link', status: 'critical' }
    ],
    outcome: {
      type: 'good',
      icon: '✓',
      title: 'Funds preserved. Network mapped.',
      description: 'Composite score traces back to every scenario...'
    }
  }
}
```

### Section 03: Platform Philosophy

```typescript
sections: {
  '03': {
    label: string;        // e.g., "Architecture"
    title: string;        // e.g., "Why This Is a Platform"
    quote: string;        // Main quote with <em> tags
    description: string;  // Longer explanation
    visual?: {            // Optional full-width visualization below description
      type: 'image' | 'svg' | 'custom';
      imageSrc?: string;  // Path to image (for type: 'image')
      svgContent?: string; // Raw SVG markup (for type: 'svg')
      description?: string; // Alt text or description
    };
    callout?: {           // Optional alert/callout above pipeline stages
      tag: string;        // Bold tag/title (supports <br/> for line breaks)
      text: string;       // Description (supports <em> and <strong> tags)
    };
    stages?: Array<{
      number: string;     // "01", "02", etc.
      name: string;       // Stage name
      tag: string;        // "INPUT LAYER", "KEY UNLOCK", etc.
      description: string; // Description with <strong> for bold
    }>;
  }
}
```

**Visual Structure for Section 03:**
```
┌─ Section Tag & Title ──────────────────────────────┐
│ 03 Why This Is a Platform                          │
└────────────────────────────────────────────────────┘

Quote: "The hard part isn't the AI. It's the data..."

Description: "Every prior wave of AML..."

┌─ Full-Width Visual Container ──────────────────────┐
│ ┌──────────────────────────────────────────────┐  │
│ │ Image or SVG visualization                   │  │
│ │ (Data flow, architecture, process diagram)   │  │
│ └──────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────┘

┌─ Callout Alert Box ────────────────────────────────┐
│ Tag: "An ML model on rules-engine alerts"          │
│ Text: "Trains on the wrong data. The most..."      │
└────────────────────────────────────────────────────┘

┌─ Pipeline Stages (4 columns) ──────────────────────┐
│ [01]          [02]          [03]          [04]    │
│ Stage         Stage         Stage         Stage    │
│ Description   Description   Description   Description
└────────────────────────────────────────────────────┘
```

**Example - AML Section 03 with Image:**
```typescript
'03': {
  label: 'Why This Is a Platform',
  title: 'Data Fusion Before Intelligence',
  quote: 'The hard part isn\'t the AI. <em>It\'s the data you put in front of it.</em>',
  description: 'Every prior wave of AML — rules, customer profiles, supervised ML, RPA — added a layer downstream and left the upstream untouched. ContexQ inverts the order: data fused, entities resolved and networks built before any rule, anomaly model or supervised classifier runs.',
  visual: {
    type: 'image',
    imageSrc: '/assets/images/Solutions/aml-flow.png',
    description: 'Data fusion and network flow visualization'
  },
  stages: [
    {
      number: '01',
      name: 'Ingestion',
      tag: 'DATA FUSION',
      description: 'Internal banking, corporate registries, watchlists, leaks and adverse media — ingested <strong>before</strong> any rule or model.'
    },
    // ... more stages
  ]
}
```

### Section 04: Visual Showcase

```typescript
sections: {
  '04': {
    label: string;        // e.g., "Three Lenses"
    title: string;        // e.g., "Eight Typologies — One Graph"
    quote: string;        // Opening quote with <em> tags
    description: string;  // Description text
    visuals: Array<{      // 3 visual containers (image or SVG)
      type: 'image' | 'svg';
      imageSrc?: string;  // Image path (for type: 'image')
      svgContent?: string; // SVG markup (for type: 'svg')
      description?: string; // Alt text or description
    }>;
  }
}
```

**Example - AML Section 04:**
```typescript
'04': {
  label: 'Three Lenses',
  title: 'Eight Typologies — One Graph',
  quote: 'The same graph, read <em>three different ways.</em>',
  description: 'Eight typologies grouped into three categories — a balanced scorecard that reaches from rules-era transactional checks all the way to multi-hop network analysis.',
  visuals: [
    {
      type: 'image',
      imageSrc: '/assets/images/Solutions/aml-transactional.png',
      description: 'Transactional visualization'
    },
    {
      type: 'image',
      imageSrc: '/assets/images/Solutions/aml-external-link.png',
      description: 'External entity link visualization'
    },
    {
      type: 'image',
      imageSrc: '/assets/images/Solutions/aml-network.png',
      description: 'Network analysis visualization'
    }
  ]
}
```

---

## TextCard Positioning

The text card appears **completely separate and BELOW** the visualization container:

```
Right Column Layout
├─ solution-hero-visual (bordered box)
│  └─ Visualization area (280px height)
│     • SVG / Canvas / 3D visualization
│     • Orbit, Graph, Canvas, etc.
│     • Contained within 280px box
│
├─ (16px gap)
│
└─ hero-spec-container (separate)
   └─ hero-spec (bordered box, same width)
      ├─ Signals in: [chip] [chip] [chip]
      └─ Outcome: "Text description here..."
```

**Visual Representation:**
```
┌─ Visualization Box (280px) ────┐
│  SVG/Canvas/3D in center       │
└────────────────────────────────┘
         (16px gap)
┌─ TextCard Box ─────────────────┐
│ Signals in: [chips]            │
│ Outcome: Text                  │
└────────────────────────────────┘
```

### TextCard Examples

**With Colored Chips + Text:**
```typescript
textCard: {
  enabled: true,
  rows: [
    {
      label: 'Signals in',
      content: [
        {label: 'Internal', color: '#10b981'},
        {label: 'External', color: '#f97316'},
        {label: 'Ecosystem', color: '#10b981'},
      ],
      isChips: true
    },
    {
      label: 'Outcome',
      content: ['Optimal supply, lean inventory, freed working capital.'],
      isChips: false
    }
  ]
}
```

**Text Only (No Chips):**
```typescript
textCard: {
  enabled: true,
  rows: [
    {
      label: 'Key Benefits',
      content: ['Real-time visibility', 'Risk detection', 'Smart decisions'],
      isChips: false
    }
  ]
}
```

**Exception (Disabled):**
```typescript
textCard: {
  enabled: false  // Don't show text card for this solution
}
```

---

## Color Scheme

### By Solution Type

**Risk/Fraud Detection:**
```typescript
colors: {
  primary: '#26C6DA',    // Cyan
  secondary: '#059669',
  accent: '#dc2626',     // Red for danger
  success: '#10b981',    // Green for safe
}
```

**KYC/Compliance:**
```typescript
colors: {
  primary: '#26C6DA',    // Cyan
  secondary: '#059669',
  accent: '#f97316',     // Orange
  success: '#10b981',    // Green for resolved
}
```

**Data Management:**
```typescript
colors: {
  primary: '#c8851a',    // Gold
  secondary: '#059669',
  accent: '#f97316',     // Orange
  success: '#10b981',    // Green
}
```

**Supply Chain:**
```typescript
colors: {
  primary: '#26C6DA',    // Cyan
  secondary: '#059669',
  accent: '#f97316',     // Orange
  success: '#10b981',    // Green
}
```

---

## Text Formatting

HTML tags work in text fields for styling:

```typescript
// Emphasis (italic, colored with primary color)
'The form sees the applicant. <em>The graph sees the customer.</em>'

// Bold (white text with emphasis)
'See <strong>all transactions</strong> across your network'

// Works in quotes, descriptions, stage descriptions
'Financial, <strong>sanctions</strong>, geographic, logistics — all in <em>one network.</em>'
```

---

## File Structure

```
src/app/solutions/
├── GenericSolutionTemplate.tsx     ← Universal renderer
├── SOLUTIONS_CONFIG.ts              ← All solution configs
├── CONFIGURATION_GUIDE.md           ← Config documentation
├── IMPLEMENTATION_GUIDE.md          ← This file
│
├── supply-chain-intelligence/
│   └── page.tsx                     ← 3 lines!
├── kyc/
│   └── page.tsx                     ← 3 lines!
├── fraud/
│   └── page.tsx                     ← 3 lines!
├── risk/
│   └── page.tsx                     ← 3 lines!
├── data-management/
│   └── page.tsx                     ← 3 lines!
└── customer-intelligence/
    └── page.tsx                     ← 3 lines!
```

---

## Solution-by-Solution Content

### 1. **Supply Chain Intelligence** ✅ Complete
**Status:** Implemented with GenericSolutionTemplate  
**File:** `src/app/solutions/supply-chain-intelligence/`

**Key Content:**
- Hero Quote: "We sat down with supply chain leaders across industries. One pattern kept showing up."
- H1 Words: Lean, Nimble, Decisive
- TextCard: Signals in (4 chips) + Outcome
- Section 01: Silos vs. Unified Network
- Section 03: 4-stage platform (Fusion → Resolution → Connection → Synthesis)
- Section 04: 6 capabilities

---

### 2. **KYC (Know Your Customer)** 📝 Ready
**Status:** HTML analyzed, ready for config  
**Source:** `scripts/contexq-kyc (1).html`

**Key Content:**
- Hero Quote: "The form sees the applicant. The graph sees the customer."
- H1 Words: Customers, Resolved, Connected
- TextCard: Signals in + Outcome
- Section 01: Annual KYC vs. Perpetual Refresh
- Section 03: 4 stages of customer intelligence
- Section 04: 6 use cases

---

### 3. **Fraud / Mule Detection** 📝 Ready
**Status:** HTML analyzed, ready for config  
**Source:** `scripts/contexq-mule-merged (1).html`

**Key Content:**
- Hero Quote: "Mules don't get caught one transaction at a time. They get caught in the ring."
- H1 Words: Coordinated, Ring, Caught
- TextCard: Detection signals + Outcome
- Section 01: 3 safe banks illusion vs. Coordinated ring
- Section 03: 4-stage pipeline
- Section 04: Detection capabilities

---

### 4. **Risk Management** 📝 Ready
**Status:** HTML analyzed, ready for config  
**Source:** `scripts/contexq-risk (1).html`

**Key Content:**
- Hero Quote: "A bureau score sees the borrower. The network sees the risk."
- H1 Words: Group, Risk, Surface
- TextCard: Signals + Decision confidence
- Section 01: Blind decision vs. Informed decision
- Section 03: Group risk discovery
- Section 04: Risk capabilities

---

### 5. **Data Management** 📝 Ready
**Status:** HTML analyzed, ready for config  
**Source:** `scripts/contexq-data-management (2).html`

**Key Content:**
- Hero Quote: "Your best customer doesn't show up as one. They show up as dozens."
- H1 Words: Resolved, Connected, Trusted
- TextCard: Data sources + Golden record
- Section 01: Fragmented vs. Golden Record
- Section 03: 4-stage resolution
- Section 04: 6+ patterns/capabilities

---

### 6. **Customer Intelligence** 📝 New
**Status:** No HTML source yet, pattern-based

**Suggested Content:**
- Hero Quote: "A transaction shows the moment. The network shows the customer."
- H1 Words: Unified, Customer, Intelligence
- TextCard: Data touchpoints + Intelligence value
- Section 01: Siloed view vs. Unified view
- Section 03: Customer intelligence layers
- Section 04: 6 capabilities

---

## How to Add a New Solution

1. **Copy the config structure** from `supplyChainConfig` in `SOLUTIONS_CONFIG.ts`
2. **Update all text fields** with your solution content
3. **Register the config** in `allSolutionsConfig`
4. **Create the page file** (3 lines of code)
5. **Add the button** to `coin-slices.json`
6. **Visit** `/solutions/[your-slug]` ✅

That's it! No JSX layout needed.

---

## Key Benefits

| Aspect | Before | After |
|--------|--------|-------|
| Lines per solution | 600+ JSX | 50 config + 3 page |
| Update styling | Edit every file | Edit template once |
| Add new section | Custom code | Add to config |
| Maintain consistency | Manual | Automatic |
| Time to add solution | 30+ minutes | 5 minutes |

---

## Troubleshooting

**Page not found:**
- Check config slug matches directory name
- Check coin-slices.json slug matches config slug
- Verify page file exists in correct directory

**TextCard not showing:**
- Ensure `textCard.enabled: true`
- Check rows array has at least one item
- Verify `isChips` boolean is set correctly

**Colors not applying:**
- Check hex colors are valid (#RRGGBB format)
- Verify colors object has all 4 properties
- Colors should be in quotes

**Text not formatting:**
- Use `<em>` for emphasis
- Use `<strong>` for bold
- HTML tags must be inside quoted strings
- Content arrays should use `\n` for line breaks

---

For detailed config structure, see `CONFIGURATION_GUIDE.md`
