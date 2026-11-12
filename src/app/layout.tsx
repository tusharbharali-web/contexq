import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/ui/Header";
import TeamProfileModal from "../components/ui/TeamProfileModal";
import { MobileDetector } from "../components/MobileDetector";

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
    <html lang="en" suppressHydrationWarning className={`${hankenGrotesk.variable} ${inter.variable}`}>
      <body
        className={`${geist.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
      >
        <MobileDetector />
        <Header />
        {children}
        <TeamProfileModal />
      </body>
    </html>
  );
}
