import type { Metadata } from "next";
import View from "@/views/industry-mfg/View";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Manufacturing",
  description:
    "Assess supplier, third-party and export risk in manufacturing. ContexQ resolves suppliers across tiers and screens for sanctions, ESG and counterfeit exposure.",
};

export default function IndustryMfgPage() {
  return (
    <div className="bg-[#02060f]">
      <View />
      <Footer />
    </div>
  );
}
