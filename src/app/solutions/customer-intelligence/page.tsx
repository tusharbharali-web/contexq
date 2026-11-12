import type { Metadata } from "next";
import View from "@/views/solution-customer-intelligence/View";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Entity Resolution & Customer 360",
  description:
    "Resolve duplicate records across registries, e-commerce, social and tax data into one golden customer record with audit-grade lineage and 360-degree entity views.",
};

export default function SolutionCustomerIntelligencePage() {
  return (
    <div className="bg-[#02060f]">
      <View />
      <Footer />
    </div>
  );
}
