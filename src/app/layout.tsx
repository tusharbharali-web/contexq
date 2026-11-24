import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/ui/Header";
import InstantHistoryScroll from "../components/ui/InstantHistoryScroll";
import TeamProfileModal from "../components/ui/TeamProfileModal";
import { ChatWidget } from "../components/chatbot/ChatWidget";
import "../styles/chatbot.css";
import CookieConsentManager from "../components/consent/CookieConsentManager";
import "../styles/cookies.css";
import { TRACKING } from "../lib/tracking/config";

// Fonts are self-hosted (src/app/fonts, the same Latin variable files Google Fonts
// serves) so builds don't depend on fetching fonts.googleapis.com at build time.
// Only Geist (the body font of the first screen) is preloaded; the others load as
// soon as text using them renders, without competing with the 3D scene at startup.
const geist = localFont({
  variable: "--font-geist",
  src: [{ path: "./fonts/geist-latin-normal.woff2", weight: "300 700", style: "normal" }],
});

const geistMono = localFont({
  variable: "--font-geist-mono",
  preload: false,
  src: [{ path: "./fonts/geist-mono-latin-normal.woff2", weight: "400 500", style: "normal" }],
});

const fraunces = localFont({
  variable: "--font-fraunces",
  preload: false,
  src: [
    { path: "./fonts/fraunces-latin-normal.woff2", weight: "400 700", style: "normal" },
    { path: "./fonts/fraunces-latin-italic.woff2", weight: "400 700", style: "italic" },
  ],
});

const hankenGrotesk = localFont({
  variable: "--font-hanken-grotesk",
  preload: false,
  display: "swap",
  src: [
    { path: "./fonts/hanken-grotesk-latin-normal.woff2", weight: "100 900", style: "normal" },
    { path: "./fonts/hanken-grotesk-latin-italic.woff2", weight: "100 900", style: "italic" },
  ],
});

const inter = localFont({
  variable: "--font-inter",
  preload: false,
  display: "swap",
  src: [{ path: "./fonts/inter-latin-normal.woff2", weight: "300 700", style: "normal" }],
});

// Browser UI (mobile address/tool bars) in the site's navy instead of white.
export const viewport: Viewport = {
  themeColor: "#050F1C",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://contexq.com"),
  title: {
    default: "ContexQ - Context in Every Decision",
    template: "%s | ContexQ",
  },
  description:
    "ContexQ resolves every entity once and connects them continuously, graph AI for fraud detection, financial crime compliance, and enterprise risk analytics.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    siteName: "ContexQ",
    locale: "en_SG",
    url: "https://contexq.com",
    title: "ContexQ - Context in Every Decision",
    description:
      "ContexQ resolves every entity once and connects them continuously, graph AI for fraud detection, financial crime compliance, and enterprise risk analytics.",
    images: [{ url: "/assets/icons/logo_low.png", alt: "ContexQ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ContexQ - Context in Every Decision",
    description:
      "ContexQ resolves every entity once and connects them continuously, graph AI for fraud detection, financial crime compliance, and risk analytics.",
    images: ["/assets/icons/logo_low.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/icons/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/assets/icons/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning className={`${hankenGrotesk.variable} ${inter.variable}`}>
      <head>
        {/* Google Tag Manager (every page). Consent Mode v2 defaults are set FIRST, then this
            same script adds gtm.js (Google's standard loader), so Google tags in the container
            stay in "denied" mode until the visitor accepts cookies in the banner
            (CookieConsentManager sends the update). */}
        {TRACKING.gtmId && (
            <script
              id="gtm-init"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'denied', wait_for_update: 500 });
gtag('js', new Date());
dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
(function(){var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtm.js?id=${TRACKING.gtmId}';var f=document.getElementsByTagName('script')[0];f.parentNode.insertBefore(s,f);})();`,
              }}
            />
        )}
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
      >
        <InstantHistoryScroll />
        <Header />
        {children}
        <TeamProfileModal />
        <ChatWidget />
        <CookieConsentManager />
      </body>
    </html>
  );
}
