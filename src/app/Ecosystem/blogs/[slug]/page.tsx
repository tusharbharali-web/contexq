import type { Metadata } from "next";
import View from "@/views/eco-blog-article/View";
import Footer from "@/components/ui/Footer";

// Title/description of the original per-article HTML pages, keyed by slug.
const META: Record<string, { title?: string; description?: string }> = {
  "entity-resolution-business-intelligence": {
    "title": "Unlock Business Intelligence with Entity Resolution — ContexQ"
  },
  "future-proofing-modern-supply-chains": {
    "title": "Optimizing & Future-Proofing Modern Supply Chains — ContexQ"
  },
  "data-driven-decision-intelligence": {
    "title": "How ContexQ Delivers Data-Driven Decision Intelligence — ContexQ"
  }
};

export function generateStaticParams() {
  return Object.keys(META).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const m = META[slug];
  return m ? { title: { absolute: m.title ?? "Insight Reports" }, description: m.description } : { title: "Insight Reports" };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="bg-[#02060f]">
      {/* key: a new article must re-run the article script */}
      <View key={slug} slug={slug} />
      <Footer />
    </div>
  );
}
