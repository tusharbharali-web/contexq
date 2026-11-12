import type { Metadata } from "next";
import View from "@/views/industry-finance/View";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Banking",
  description:
    "Detect fraud, money-laundering networks and KYC risk in banking. ContexQ resolves customers, counterparties and UBOs across six domains, explainably.",
};

export default function IndustryFinancePage() {
  return (
    <div className="bg-[#02060f]">
      <View />
      <Footer />
    </div>
  );
}
