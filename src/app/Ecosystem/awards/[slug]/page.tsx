import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AWARD_VIEWS, AWARD_META } from "@/views/eco-award/View";
import Footer from "@/components/ui/Footer";

export function generateStaticParams() {
  return Object.keys(AWARD_VIEWS).map((slug) => ({ slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const m = AWARD_META[slug];
  return m ? { title: { absolute: m.title ?? "Awards & Recognition" }, description: m.description } : {};
}

export default async function AwardPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const AwardView = AWARD_VIEWS[slug];
  if (!AwardView) notFound();
  return (
    <div className="bg-[#02060f]">
      <AwardView key={slug} />
      <Footer />
    </div>
  );
}
