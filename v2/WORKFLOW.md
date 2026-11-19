# ContexQ AI Chatbot — End-to-End System Workflow & Architecture

This document provides a comprehensive technical walkthrough of the **ContexQ AI Chatbot Widget (v2)**, detailing its state transitions, message processing pipeline, lead capture flow, human handover mechanisms, and future API integration path for the **[contexq.com](https://contexq.com)** website.

---

## 1. High-Level System Architecture

The chatbot is built as an independent, embeddable floating widget that mounts onto any web page without interfering with existing DOM structures or navigation routes.

```
+-----------------------------------------------------------------------------------------+
|                                    ContexQ Web Page                                     |
|                                                                                         |
|   +---------------------------------------------------------------------------------+   |
|   |                      ChatWidget.tsx (Root Container)                            |   |
|   |                                                                                 |   |
|   |  +---------------------------+   +-------------------------------------------+  |   |
|   |  |     ChatLauncher.tsx      |   |            Expanded Chat Panel            |  |   |
|   |  |  (Floating Circular #328C |   |  (390px - 410px width, 620px desktop ht)  |  |   |
|   |  |   Button with unread dot) |   |                                           |  |   |
|   |  +-------------+-------------+   |  +-------------------------------------+  |  |   |
|   |                |                 |  | ChatHeader.tsx                      |  |  |   |
|   |         Toggles Open             |  | - ContexQ Logo                      |  |  |   |
|   |                v                 |  | - Status: Online                    |  |  |   |
|   |  +-------------+-------------+   |  | - Controls: Reset, Minimize, Close  |  |  |   |
|   |  |        useChat.ts         |   |  +-------------------------------------+  |  |   |
|   |  |     (Custom Hook /        |<--+  | ChatMessages.tsx                    |  |  |   |
|   |  |    State Coordinator)     |   |  | - Welcome Screen (empty state)      |  |  |   |
|   |  +-------------+-------------+   |  | - SuggestedQuestions.tsx            |  |  |   |
|   |                |                 |  | - ChatMessage.tsx (User & AI)       |  |  |   |
|   |       Processes Message          |  | - TypingIndicator.tsx               |  |  |   |
|   |                v                 |  +-------------------------------------+  |  |   |
|   |  +-------------+-------------+   |  | Interactive Overlays & Actions      |  |  |   |
|   |  |      chatService.ts       |   |  | - LeadCaptureForm.tsx (Talk to team)|  |  |   |
|   |  |  (Shared Interface /     |   |  | - HumanHandover.tsx (Callback req)  |  |  |   |
|   |  |   Pluggable Provider)     |   |  +-------------------------------------+  |  |   |
|   |  +-------------+-------------+   |  | ChatInput.tsx                       |  |  |   |
|   |                |                 |  | - Auto-growing Textarea             |  |  |   |
|   |     Resolves Query Match         |  | - Enter-to-Send, Shift+Enter newline|  |  |   |
|   |                v                 |  | - "Talk to our team" CTA Trigger    |  |  |   |
|   |  +-------------+-------------+   |  +-------------------------------------+  |  |   |
|   |  |    mockChatService.ts     |   +-------------------------------------------+  |   |
|   |  | - 5 Domain Categories     |                                                  |   |
|   |  | - Unknown Question Guard  |                                                  |   |
|   |  +---------------------------+                                                  |   |
|   +---------------------------------------------------------------------------------+   |
+-----------------------------------------------------------------------------------------+
```

---

## 2. User Interaction Workflow

### Phase 1: Inactive / Floating State
1. **Initial Mount**: The `ChatLauncher` button renders in the bottom-right corner (`bottom: 24px`, `right: 24px`).
2. **Notification Beacon**: An unread indicator badge displays on the button to draw the visitor's attention to the intelligence assistant.
3. **Trigger**: When the user clicks the launcher button, the circular button smoothly animates its icon from a `MessageSquare` to a close `X` using Framer Motion.

---

### Phase 2: Open / Welcome State
1. **Panel Expansion**: The chat panel animates in (`opacity: 1`, `scale: 1`, `y: 0`), rendering at `400px` width and `620px` height on desktop, or adapting to near-fullscreen on mobile screens (`<640px`).
2. **Empty History Detection**:
   * If `messages.length === 0`, `ChatMessages` mounts the `SuggestedQuestions` component.
   * Displays the **TODAY** date separator badge.
   * Displays the warm enterprise greeting:
     > *"Hello! Welcome to ContexQ."*  
     > *"I'm your AI assistant. I can help you understand our solutions, capabilities and how we support organisations with risk intelligence."*
3. **Pre-defined Topic Chips**:
   Displays 4 clickable recommendation cards:
   * **Card 1**: *"What does ContexQ do?"*
   * **Card 2**: *"Tell me about Supply Chain Intelligence."*
   * **Card 3**: *"How does Money Mule Detection work?"*
   * **Card 4**: *"What risk intelligence solutions do you offer?"*
4. **Instant Action**: Clicking any card immediately dispatches that string to the conversation pipeline without requiring manual typing.

---

### Phase 3: Message Processing & Simulated Engine Workflow

```
[User Input] 
      │
      ▼
[useChat.sendMessage] ──► Appends User Message to State
      │
      ├─► Sets isLoading = true (Triggers TypingIndicator)
      │
      ▼
[chatService.sendMessage(text, conversationId)]
      │
      ▼
[mockChatService.getMockResponse(message)]
      │
      ├─► Step 1: Simulates 550ms - 850ms network / inference delay
      ├─► Step 2: Normalizes text (lowercase, punctuation-stripped)
      ├─► Step 3: Evaluates keyword regex against MOCK_RESPONSE_CATEGORIES:
      │       ├── A. Company Overview
      │       ├── B. Supply Chain Intelligence
      │       ├── C. Money Mule Detection
      │       ├── D. Risk Management
      │       └── E. Contact & Enquiries
      │
      ├─► Step 4: If match found ──► Returns Verified Category Response
      │
      └─► Step 5: If no match ──► Returns UNKNOWN_QUESTION_RESPONSE:
            "I don't have verified information about that at the moment.
             I can connect you with the ContexQ team for clarification."
      │
      ▼
[useChat Receives ChatResponse]
      │
      ├─► Appends Assistant Message to State
      ├─► Checks `needsHumanHandover` flag
      │       └── If true, surfaces HumanHandover CTA
      ├─► Sets isLoading = false (Removes TypingIndicator)
      └─► Auto-scrolls viewport to message bottom
```

---

### Phase 4: Lead Capture Workflow ("Talk to our team")

The lead capture flow allows high-intent visitors to request a demo or detailed discussion directly from the widget.

1. **Trigger**:
   * Clicking the **"Talk to our team"** button at the bottom of `ChatInput`.
   * Or asking for contact/demo details in chat.
2. **Form Presentation**:
   * `LeadCaptureForm` smoothly slides up from the bottom of the widget (`y: 100% ➔ y: 0`).
   * Renders input fields:
     * **Full Name** *(Required)*
     * **Business Email** *(Required, verified with regex `^[^\s@]+@[^\s@]+\.[^\s@]+$`)*
     * **Company Name** *(Optional)*
     * **Topic / Message** *(Optional textarea)*
3. **Client-Side Validation**:
   * If submitted with empty fields or invalid email, inline red error messages highlight the offending fields.
4. **Submission**:
   * Saves the lead data in React component state.
   * Renders a success screen:
     > *"Thank you for your interest in ContexQ. Your enquiry has been recorded in this demonstration. Our team would be able to follow up once the backend integration is enabled."*
5. **Dismissal**:
   * Clicking **"Return to Chat"** closes the form and returns the user to the active message stream without losing chat history.

---

### Phase 5: Human Handover Workflow ("Request a callback")

1. **Trigger Condition**:
   * When an unverified query is encountered (`needsHumanHandover: true`).
   * Or when the user explicitly asks to speak to sales or support.
2. **Display**:
   * Surfaces the `HumanHandover` card directly inside the chat flow.
   * Displays: *"Would you like to speak with someone from our team?"*
   * Displays blue action button: *"Request a callback"*.
3. **Execution**:
   * Upon clicking, transitions to a confirmed state:
     > *"Your callback request has been logged. A ContexQ team representative will follow up with your organisation."*
   * Fully decoupled from live messaging, fulfilling Phase 1 requirements while maintaining complete UX readiness for future websocket or agent routing.

---

### Phase 6: Session Management & Minimization

* **Minimizing**: Clicking the minus icon (`—`) in `ChatHeader` shrinks the panel down to `68px` (just the header bar) at the bottom-right. The conversation remains in memory and can be restored with 1 click.
* **New Conversation / Reset**: Clicking the reload icon (`RotateCcw`) in `ChatHeader`:
  * Clears the `messages` array.
  * Resets `isLoading` and closed form states.
  * Generates a new unique `conversationId`.
  * Restores the initial `SuggestedQuestions` greeting.
* **Closing**: Clicking the `X` icon hides the panel and returns to the floating circular button.

---

## 3. Design System & Corporate Token Mapping

All styling strictly implements the ContexQ corporate identity specified in the Master Prompt:

| Token | Hex Value | Application |
| :--- | :--- | :--- |
| **Primary Blue** | `#328CFF` | Floating launcher, send button, active accents, focus rings, link text |
| **Hover Blue** | `#2574E0` | Hover states on primary buttons |
| **Light Blue** | `#EBF3FF` | User message bubble background, icon badges |
| **Dark Navy** | `#06111F` | Chat header background, ContexQ avatar background, dark headings |
| **Secondary Dark** | `#08182B` | Header borders, dark container accents |
| **Light Surface** | `#F5F8FC` | Main message stream background, form input background |
| **White** | `#FFFFFF` | Assistant message bubble background, input bar background, cards |
| **Secondary Text** | `#687B91` | Timestamps, subtitles, placeholders, helper labels |
| **Subtle Border** | `#E2E8F0` | Message bubble borders, card outlines, form dividers |
| **Font Family** | `'IBM Plex Sans'` | Clean enterprise typography with clear visual hierarchy |
| **Border Radius** | `16px` / `14px` | Panel corners (`16px`), Message bubble corners (`14px`) |

---

## 4. Phase 2 Roadmap: Connecting Real AI & Backend APIs

The codebase is engineered with dependency inversion so that switching from the local simulation to a live AI backend requires **zero modifications to React components**.

### Step 1: Create `ApiChatService`
In `v2/src/services/chatService.ts`, replace `MockChatService` with an HTTP or WebSocket client:

```ts
export class ApiChatService implements ChatService {
  private baseUrl: string;

  constructor(baseUrl = import.meta.env.VITE_API_URL || 'https://api.contexq.com') {
    this.baseUrl = baseUrl;
  }

  async sendMessage(message: string, conversationId: string): Promise<ChatResponse> {
    const res = await fetch(`${this.baseUrl}/api/v1/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, conversationId })
    });

    if (!res.ok) {
      throw new Error(`API error: ${res.statusText}`);
    }

    return res.json();
  }
}

// Activate the real backend service:
export const defaultChatService: ChatService = new ApiChatService();
```

### Step 2: Backend Pipeline (Node.js + Express)
The future Node.js service will orchestrate:
1. **Model Gateway**: Connection to OpenAI GPT-4o or Google Gemini 1.5 Pro with enterprise system prompts.
2. **RAG & Vector Search**: Ingestion of verified ContexQ PDFs, whitepapers, and documentation via Pinecone / Milvus / pgvector.
3. **Approved Document Filtering**: Restricting answers strictly to sanctioned corporate knowledge.
4. **Source Attribution**: Returning populated `sources: [{ title, category, url }]` arrays which `ChatMessage.tsx` is already formatted to render automatically.
5. **CRM / Lead Webhook**: Forwarding submissions from `LeadCaptureForm.tsx` to HubSpot / Salesforce.
6. **Handover Routing**: Triggering Zendesk / Intercom / Slack alerts when `needsHumanHandover` is activated.

---

## 5. How to Embed Into `contexq.com`

### Method A: Direct React Import
When integrating into a Next.js, Vite, or React corporate site:

```tsx
import { ChatWidget } from './components/chatbot/ChatWidget';
import './styles/chatbot.css';

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <ChatWidget />
    </>
  );
}
```

### Method B: Standalone Web Component / Script Tag
Compile `v2` as a standalone web bundle using Vite library mode:

```html
<!-- Added before </body> in contexq.com HTML -->
<div id="contexq-ai-chatbot"></div>
<script type="module" src="https://assets.contexq.com/chatbot/v2/chatbot.js"></script>
```

