import type { Metadata } from "next";
import View from "@/views/solution-fraud/View";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Money Mule & Fraud Detection",
  description:
    "Catch money mule rings with temporal graph analysis and soft-kernel scoring, replacing cliff-edge rules with explainable, STR-ready counterfactual evidence.",
};

export default function SolutionFraudPage() {
  return (
    <div className="bg-[#02060f]">
      <View />
      <Footer />
    </div>
  );
}
