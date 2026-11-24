import { ChatHistoryTurn, ChatResponse, ChatService } from '../types/chat';
import { getMockResponse } from './mockChatService';

const UNAVAILABLE =
  'I am unable to answer right now. Please try again in a moment, or email inquiry@contexq.com and our team will get back to you.';

/**
 * ApiChatService: sends the visitor's question (plus recent turns) to the site's own
 * /api/chat route, which answers from the ContexQ knowledge base. The OpenAI key stays
 * on the server; the browser only ever talks to /api/chat.
 */
export class ApiChatService implements ChatService {
  constructor(private endpoint = '/api/chat') {}

  async sendMessage(message: string, conversationId: string, history: ChatHistoryTurn[] = []): Promise<ChatResponse> {
    try {
      const res = await fetch(this.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, conversationId, history }),
      });
      const data = (await res.json().catch(() => null)) as ChatResponse | null;
      if (data && typeof data.message === 'string') return data;
      return { message: UNAVAILABLE, needsHumanHandover: true };
    } catch {
      return { message: UNAVAILABLE, needsHumanHandover: true };
    }
  }
}

/**
 * MockChatService: canned offline answers, kept only for tests and local UI work.
 * It is not used on the live site.
 */
export class MockChatService implements ChatService {
  async sendMessage(message: string): Promise<ChatResponse> {
    return getMockResponse(message);
  }
}

// Active service: the live knowledge base answers via /api/chat.
export const defaultChatService: ChatService = new ApiChatService();
