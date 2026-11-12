import type { Metadata } from "next";
import View from "@/views/solution-risk/View";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Risk Analytics with Network Intelligence",
  description:
    "Fuse internal exposure, bureaus and registries to resolve borrowers, merchants and third parties, surfacing group-level risk with committee-ready audit trails.",
};

export default function SolutionRiskPage() {
  return (
    <div className="bg-[#02060f]">
      <View />
      <Footer />
    </div>
  );
}
