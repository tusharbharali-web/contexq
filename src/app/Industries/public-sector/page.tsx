import type { Metadata } from "next";
import View from "@/views/industry-public-sector/View";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Public Sector",
  description:
    "Detect benefit and tax fraud, customs and procurement risk. ContexQ resolves citizens, entities and networks to support investigations and enforcement.",
};

export default function IndustryPublicSectorPage() {
  return (
    <div className="bg-[#02060f]">
      <View />
      <Footer />
    </div>
  );
}
