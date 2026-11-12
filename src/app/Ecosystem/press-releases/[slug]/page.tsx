import type { Metadata } from "next";
import View from "@/views/eco-press-article/View";
import Footer from "@/components/ui/Footer";

// Title/description of the original per-article HTML pages, keyed by slug.
const META: Record<string, { title?: string; description?: string }> = {
  "jean-michel-coeur-joins-contexq-co-founder-cto": {
    "title": "Jean-Michel Coeur Joins ContexQ as Co-Founder & CTO — ContexQ",
    "description": "We’re excited to welcome Jean-Michel Coeur as the Co-Founder and Chief Technology Officer (CTO) at ContexQ, bringing a unique blend of deep technical expertise, entrepreneurial vision, and global perspective to lead our product and technology strategy."
  },
  "jean-michel-cto-speak-asia-tech-x-singapore-2026": {
    "title": "Jean-Michel, CTO, to Speak at Asia Tech x Singapore 2026 — ContexQ",
    "description": "Jean-Michel, Chief Technology Officer at ContexQ, will be speaking at Asia Tech x Singapore (ATxSG), one of Asia’s leading technology forums, held in Singapore."
  },
  "partha-dasgupta-appointed-chief-mentor": {
    "title": "ContexQ Appoints Partha Dasgupta as Chief Mentor & Head of Business Development — ContexQ",
    "description": "ContexQ, a B2B deep tech startup with a contextual decision intelligence platform, today announced the strategic appointment of Partha Dasgupta as its Chief Mentor & Head of Business Development, India."
  }
};

export function generateStaticParams() {
  return Object.keys(META).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const m = META[slug];
  return m ? { title: { absolute: m.title ?? "Press Releases" }, description: m.description } : { title: "Press Releases" };
}

export default async function PressReleasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="bg-[#02060f]">
      {/* key: a new article must re-run the article script */}
      <View key={slug} slug={slug} />
      <Footer />
    </div>
  );
}
