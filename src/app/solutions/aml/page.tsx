import type { Metadata } from "next";
import View from "@/views/solution-aml/View";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "AML Detection & Network Entity Resolution",
  description:
    "Resolve customers and counterparties to real-world identities, map laundering networks across jurisdictions, and deliver regulator-ready, explainable scores.",
};

export default function SolutionAmlPage() {
  return (
    <div className="bg-[#02060f]">
      <View />
      <Footer />
    </div>
  );
}
