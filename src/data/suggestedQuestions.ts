import { SuggestedQuestion } from '../types/chat';

export const SUGGESTED_QUESTIONS: (SuggestedQuestion & { badge: string; iconType: string })[] = [
  {
    id: 'sq-1',
    question: 'What does ContexQ do?',
    category: 'company_overview',
    badge: 'Platform overview',
    iconType: 'Building'
  },
  {
    id: 'sq-2',
    question: 'Tell me about Supply Chain Intelligence',
    category: 'supply_chain',
    badge: 'Supply chain intelligence',
    iconType: 'Boxes'
  },
  {
    id: 'sq-3',
    question: 'How does Money Mule Detection work?',
    category: 'money_mule',
    badge: 'AML and financial crime',
    iconType: 'Shield'
  },
  {
    id: 'sq-4',
    question: 'What risk intelligence solutions do you offer?',
    category: 'risk_management',
    badge: 'Risk management',
    iconType: 'Cpu'
  }
];
