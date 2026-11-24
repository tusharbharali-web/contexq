import type { ChatResponse } from '../../types/chat';

/**
 * Messages the chatbot answers WITHOUT calling the model (saves Groq free-tier tokens):
 * greetings, thanks, goodbyes, requests to talk to a person or book a meeting, and pricing.
 * Returns null when the message needs a real answer from the knowledge base.
 */

const GREETING = /^\s*(hi|hello|hey|hiya|good (morning|afternoon|evening)|greetings|namaste|yo)\b[\s!.,]*(there|team|contexq)?[\s!.,]*$/i;
const THANKS = /^\s*(thanks?|thank you|thx|ty|cheers|great|perfect|ok(ay)?|cool|got it|noted)\b[\s!.,]*(so much|a lot|very much)?[\s!.,]*$/i;
const BYE = /^\s*(bye|goodbye|see you|that'?s all|no thanks?|nothing else)\b[\s!.,]*$/i;

const HUMAN =
  /\b(speak|talk|chat) (to|with) (a |an |someone|somebody|a real |your |the )?(human|person|agent|representative|sales|team|someone|somebody)\b|\b(call me|call me back|contact me|reach me|get in touch with me|request a callback|callback)\b/i;
const MEETING =
  /\b(book|schedule|arrange|set up|setup|get|request|see|want|need|like) (a |an )?(meeting|call|demo|walkthrough|session|product demo)\b|\b(meet (with )?(you|your team))\b/i;
const PRICING =
  /\b(pric(e|es|ing)|quote|quotation|subscription fee|licen[cs](e|ing) (fee|cost)|how much (does|do|would|will|is) (it|this|contexq|the platform|sarasw|your (platform|product|solution))( cost)?|what does (it|contexq|the platform) cost|cost of (contexq|the platform|sarasw))\b/i;

export function answerWithoutModel(message: string): ChatResponse | null {
  const m = message.trim();

  if (GREETING.test(m)) {
    return {
      message:
        'Hello, and welcome to ContexQ. I can answer questions about our platform, solutions, industries, customer stories, team and careers. What would you like to know?',
    };
  }
  if (THANKS.test(m)) {
    return { message: 'You are welcome. Is there anything else you would like to know about ContexQ?' };
  }
  if (BYE.test(m)) {
    return { message: 'Thank you for visiting ContexQ. If you would like to talk to our team later, just ask here or visit our [contact page](/contact).' };
  }
  if (PRICING.test(m)) {
    return {
      message:
        'Pricing depends on your use case, data and deployment, so our team prepares it with you. Leave your phone number or email below and a ContexQ specialist will get back to you.',
      sources: [{ title: 'Contact ContexQ', category: 'Company', url: '/contact' }],
      needsHumanHandover: true,
    };
  }
  if (MEETING.test(m)) {
    return {
      message:
        'Happy to set that up. ContexQ offers a personalised walkthrough built around your business challenges. Leave your phone number or email below and our team will arrange a time with you, or use the form on our [contact page](/contact).',
      sources: [{ title: 'Contact ContexQ', category: 'Company', url: '/contact' }],
      needsHumanHandover: true,
    };
  }
  if (HUMAN.test(m)) {
    return {
      message: 'Of course. Tell us how you would like to be contacted below, and a ContexQ specialist will get back to you shortly.',
      needsHumanHandover: true,
    };
  }
  return null;
}

/** Reply when the search finds nothing relevant: no model call, offer the team instead. */
export const NOT_FOUND: ChatResponse = {
  message:
    'I could not find that on the ContexQ website. Our team can answer it directly: leave your details below and a specialist will get back to you, or try asking in a different way.',
  needsHumanHandover: true,
};
