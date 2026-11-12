import type { Metadata } from "next";
import View from "@/views/industry-telco/View";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Telecom",
  description:
    "Cut telecom fraud, subscriber churn and revenue leakage. ContexQ resolves customers, dealers and identities across the network, explainably.",
};

export default function IndustryTelcoPage() {
  return (
    <div className="bg-[#02060f]">
      <View />
      <Footer />
    </div>
  );
}
