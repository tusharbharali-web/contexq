import { ChatResponse } from '../types/chat';
import { MOCK_RESPONSE_CATEGORIES, UNKNOWN_QUESTION_RESPONSE } from '../data/mockResponses';

/**
 * Normalizes an input string by trimming, lowercasing, and stripping punctuation.
 */
function normalizeQuery(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .trim();
}

/**
 * Evaluates the user query against predefined keyword collections.
 * Returns the matching response or the fallback verified unknown response.
 */
export async function getMockResponse(message: string): Promise<ChatResponse> {
  // Simulate a realistic cognitive/network processing delay (500ms - 850ms)
  const delayMs = Math.floor(550 + Math.random() * 300);
  await new Promise((resolve) => setTimeout(resolve, delayMs));

  const normalized = normalizeQuery(message);

  if (!normalized) {
    return {
      message: "How can I assist you with ContexQ's decision and risk intelligence solutions today?",
      sources: []
    };
  }

  // Iterate through predefined response categories
  for (const item of MOCK_RESPONSE_CATEGORIES) {
    const hasMatch = item.keywords.some((keyword) => {
      const normalizedKeyword = normalizeQuery(keyword);
      return normalized.includes(normalizedKeyword) || normalizedKeyword.includes(normalized);
    });

    if (hasMatch) {
      return item.response;
    }
  }

  // Fallback for unverified questions
  return UNKNOWN_QUESTION_RESPONSE;
}

