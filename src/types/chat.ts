export type MessageSender = 'user' | 'assistant';

export interface ChatSource {
  title: string;
  category: string;
  url?: string;
}

export interface ChatResponse {
  message: string;
  sources?: ChatSource[];
  needsHumanHandover?: boolean;
}

export interface Message {
  id: string;
  sender: MessageSender;
  content: string;
  timestamp: string;
  sources?: ChatSource[];
  needsHumanHandover?: boolean;
}

export interface SuggestedQuestion {
  id: string;
  question: string;
  category?: string;
}

export interface LeadFormData {
  fullName: string;
  businessEmail: string;
  companyName: string;
  topic: string;
}

export interface LeadFormErrors {
  fullName?: string;
  businessEmail?: string;
  companyName?: string;
}

/** One earlier turn of the conversation, sent so follow-up questions have context. */
export interface ChatHistoryTurn {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatService {
  sendMessage(
    message: string,
    conversationId: string,
    history?: ChatHistoryTurn[]
  ): Promise<ChatResponse>;
}

