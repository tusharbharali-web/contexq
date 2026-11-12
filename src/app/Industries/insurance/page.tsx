import type { Metadata } from "next";
import View from "@/views/industry-insurance/View";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Insurance",
  description:
    "Surface claims fraud, underwriting risk and organised networks in insurance. ContexQ resolves policyholders, parties and claims with explainable evidence.",
};

export default function IndustryHealthPage() {
  return (
    <div className="bg-[#02060f]">
      <View />
      <Footer />
    </div>
  );
}
