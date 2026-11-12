'use client';

/**
 * Example: Using the GenericSolutionTemplate
 *
 * This shows how simple it is to create a solution page using the template.
 * Just import the config and render it!
 *
 * To use this approach:
 * 1. Replace the content of page.tsx with this file
 * 2. Make sure SOLUTIONS_CONFIG.ts has your solution configured
 * 3. Done! No need to write any JSX
 */

import GenericSolutionTemplate from '../GenericSolutionTemplate';
import { supplyChainConfig } from '../SOLUTIONS_CONFIG';

export default function SupplyChainPage() {
  return <GenericSolutionTemplate config={supplyChainConfig} />;
}
