# ContexQ AI Chatbot Widget (v2)

Production-ready, responsive AI chatbot interface designed to be embedded into the **[ContexQ](https://contexq.com)** corporate website.

Built using **React**, **TypeScript**, **Vite**, **Tailwind CSS**, **Lucide React**, and **Framer Motion**.

---

## 💎 Features & Capabilities

* **Floating Website Widget**: Clean circular blue floating button (`#328CFF`) with opening animation and unread badge, expanding to an enterprise panel (390–420px wide, ~620px tall on desktop; responsive near-fullscreen on mobile).
* **Corporate Visual Identity**: Strictly follows ContexQ's brand palette (Primary Blue `#328CFF`, Dark Navy `#06111F`, Secondary Dark `#08182B`, Light Surface `#F5F8FC`, Secondary Text `#687B91`, IBM Plex Sans typography).
* **Interactive Header**: Features ContexQ branding, `INTELLIGENCE ASSISTANT` subtitle, pulsing `Online` indicator, New Conversation (reset), Minimize, and Close controls.
* **Welcome Screen & Topic Recommendations**: Displays warm greeting, assistant icon, `TODAY` date divider, and 4 pre-configured clickable suggested questions.
* **Simulated AI Response Engine**: Category-driven response engine in `mockChatService.ts` and `mockResponses.ts` covering:
  - Company Overview
  - Supply Chain Intelligence
  - Money Mule Detection
  - Risk Intelligence & Management
  - Contact & Demo Inquiries
  - Verified Unknown Question Fallback (No hallucinated certifications/clients)
* **Lead Capture Interface**: Slide-over enquiry form collecting Full Name, Business Email, Company Name, and Topic with inline validation and state persistence.
* **Human Handover Placeholder**: Callback request flow that logs visitor interest and confirms follow-up.
* **Future API & RAG Ready**: Clean `ChatService` interface with support for source attribution (`sources?: ChatSource[]`), ready to link with a future Node.js + Express backend without touching UI components.

---

## 📂 Architecture

```
v2/
├── src/
│   ├── components/
│   │   └── chatbot/
│   │       ├── ChatWidget.tsx          # Master floating widget container
│   │       ├── ChatLauncher.tsx        # Floating circular blue trigger button
│   │       ├── ChatHeader.tsx          # ContexQ header with status & controls
│   │       ├── ChatMessages.tsx        # Scrollable stream & welcome screen
│   │       ├── ChatMessage.tsx         # User & Assistant message bubbles
│   │       ├── ChatInput.tsx           # Auto-growing prompt textarea & CTA
│   │       ├── SuggestedQuestions.tsx  # 4 one-click starter cards
│   │       ├── TypingIndicator.tsx     # Simulated reasoning animation
│   │       ├── LeadCaptureForm.tsx     # Validated lead enquiry slide-over
│   │       └── HumanHandover.tsx       # Callback request interface
│   ├── services/
│   │   ├── chatService.ts              # Pluggable ChatService provider interface
│   │   └── mockChatService.ts          # Simulated response & delay engine
│   ├── data/
│   │   ├── mockResponses.ts            # Predefined verified response catalog
│   │   └── suggestedQuestions.ts       # Starter question data
│   ├── types/
│   │   └── chat.ts                     # Strict TypeScript interfaces
│   ├── hooks/
│   │   └── useChat.ts                  # Chat state & conversation manager
│   ├── styles/
│   │   └── chatbot.css                 # Tailwind & typography directives
│   ├── App.tsx                         # Interactive embedding demo page
│   └── main.tsx                        # React DOM bootstrap
├── WORKFLOW.md                         # Detailed system workflow & state diagram
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### 1. Build and Run from Root

All dependencies (`framer-motion`, `lucide-react`, `react-markdown`, `remark-gfm`, etc.) are resolved.

To run the v2 application in development mode:

```bash
# Start Vite development server targeting v2
npx vite v2
```

To build and check TypeScript for v2:

```bash
# Typecheck
npx tsc --project v2/tsconfig.json --noEmit

# Production build
npx vite build v2
```

The production output will be generated into `v2/dist/`.

---

## 📖 Detailed Workflow Documentation

For the complete technical breakdown of state transitions, keyword evaluation, lead capture lifecycle, and future Node.js / Express integration steps, see **[WORKFLOW.md](file:///Users/tusharbharali/Documents/CONTEXQ%20CHATBOT/v2/WORKFLOW.md)**.

