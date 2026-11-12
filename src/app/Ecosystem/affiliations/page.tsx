import type { Metadata } from "next";
import View from "@/views/eco-affiliations/View";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Affiliations",
  description: "The programmes and industry bodies behind ContexQ.",
};

export default function EcoAffiliationsPage() {
  return (
    <div className="bg-[#02060f]">
      <View />
      <Footer />
    </div>
  );
}
