import type { Metadata } from "next";
import View from "@/views/eco-awards/View";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Awards & Recognition",
  description: "Awards, recognition and programmes that back ContexQ.",
};

export default function EcoAwardsPage() {
  return (
    <div className="bg-[#02060f]">
      <View />
      <Footer />
    </div>
  );
}
