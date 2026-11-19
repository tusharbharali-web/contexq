import { ChatResponse, ChatService } from '../types/chat';
import { getMockResponse } from './mockChatService';

/**
 * MockChatService:
 * Current production-quality client-side simulated engine.
 * Fully decoupled from backend APIs, fulfilling Phase 1 requirements.
 */
export class MockChatService implements ChatService {
  async sendMessage(message: string, _conversationId: string): Promise<ChatResponse> {
    return getMockResponse(message);
  }
}

/**
 * ApiChatService (Future Integration Placeholder):
 *
 * In Phase 2, this class will communicate with a Node.js + Express backend.
 * The backend will be responsible for:
 * 1. GPT / Gemini model integration and prompt orchestration.
 * 2. ContexQ knowledge base retrieval and RAG.
 * 3. Approved corporate document filtering and compliance gating.
 * 4. Context-aware conversation history preservation.
 * 5. Source attribution (populating the `sources` field in `ChatResponse`).
 * 6. Lead capture and CRM ingestion.
 * 7. Live agent handover routing.
 *
 * Example implementation when backend is ready:
 * ```ts
 * export class ApiChatService implements ChatService {
 *   private baseUrl: string;
 *   constructor(baseUrl = process.env.VITE_API_URL || 'https://api.contexq.com') {
 *     this.baseUrl = baseUrl;
 *   }
 *
 *   async sendMessage(message: string, conversationId: string): Promise<ChatResponse> {
 *     const res = await fetch(`${this.baseUrl}/api/chat`, {
 *       method: 'POST',
 *       headers: { 'Content-Type': 'application/json' },
 *       body: JSON.stringify({ message, conversationId })
 *     });
 *     if (!res.ok) throw new Error('Failed to fetch AI response');
 *     return res.json();
 *   }
 * }
 * ```
 */

// Active service instance: swap with `new ApiChatService()` when backend is enabled.
export const defaultChatService: ChatService = new MockChatService();

