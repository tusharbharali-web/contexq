import type { Metadata } from "next";
import View from "@/views/eco-press/View";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Press Releases",
  description: "News and announcements from ContexQ.",
};

export default function EcoPressPage() {
  return (
    <div className="bg-[#02060f]">
      <View />
      <Footer />
    </div>
  );
}
