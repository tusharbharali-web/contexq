# Generic Solution System (Preserved)

This folder contains the configuration-driven template system for building solution pages. This approach uses TypeScript configurations to define content, which the `GenericSolutionTemplate` component renders automatically.

## Files

- **SOLUTIONS_CONFIG.ts** - Configuration interface and all solution configurations (supplyChainConfig, amlConfig, kycConfig, etc.)
- **GenericSolutionTemplate.tsx** - React component that renders solutions based on configuration
- **IMPLEMENTATION_GUIDE.md** - Complete guide on how to create new solutions using this system

## How It Works

Instead of writing custom JSX for each solution, you define a `SolutionConfig` object with:
- Solution metadata (title, description, slug)
- Color scheme
- Hero section content
- Sections 01-04 with left/right content, visualizations, quotes
- Timeline data
- Graph configuration
- SEO metadata

The `GenericSolutionTemplate` automatically renders all sections with consistent styling, animations, and layout.

## Current Solutions Using This System

None currently - the solutions folder now uses a hybrid approach:
- **Iframe-based solutions** (supply-chain-intelligence) - Load HTML files directly
- **Template-based solutions** - Use the SolutionTemplate component with SOLUTIONS_DATA

## To Use This System

Import `GenericSolutionTemplate` and pass a `SolutionConfig`:

```typescript
import GenericSolutionTemplate from '@/components/solutions/GenericSolutionTemplate';
import { supplyChainConfig } from '@/app/solutions/_generic-system/SOLUTIONS_CONFIG';

export default function SupplyChainPage() {
  return <GenericSolutionTemplate config={supplyChainConfig} />;
}
```

## Migration Path

If you want to transition a solution from iframe-based to this template system:

1. Create a `SolutionConfig` in SOLUTIONS_CONFIG.ts
2. Add `allSolutionsConfig[slug]` entry
3. Update the page route to use GenericSolutionTemplate
4. Remove the HTML file from public/html

See IMPLEMENTATION_GUIDE.md for detailed examples.
