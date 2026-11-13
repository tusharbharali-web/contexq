import type { Metadata } from "next";
import View from "@/views/careers/View";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join ContexQ - build graph-native AI for enterprise decision intelligence.",
};

export default function CareersPage() {
  return (
    <div className="bg-[#02060f]">
      <View />
      <Footer />
    </div>
  );
}
