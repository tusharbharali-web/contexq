import type { Metadata } from "next";
import View from "@/views/eco-partners/View";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Partners & Affiliations",
  description: "The programmes and industry bodies behind ContexQ.",
};

export default function EcoPartnersPage() {
  return (
    <div className="bg-[#02060f]">
      <View />
      <Footer />
    </div>
  );
}
