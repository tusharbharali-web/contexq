import type { Metadata } from "next";
import View from "@/views/eco-insights/View";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Insight Reports",
  description: "Practical thinking on decision intelligence, entity resolution and managing risk.",
};

export default function EcoInsightsPage() {
  return (
    <div className="bg-[#02060f]">
      <View />
      <Footer />
    </div>
  );
}
