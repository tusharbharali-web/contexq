import type { Metadata } from "next";
import Footer from "@/components/ui/Footer";
import FaqView from "./FaqView";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | ContexQ",
  description:
    "Explore frequently asked questions about ContexQ, graph intelligence, supply chain, KYC, AML, fraud, risk, customer intelligence and our industries.",
  alternates: { canonical: "https://contexq.com/Ecosystem/faq" },
};

export default function FAQPage() {
  return (
    <div className="bg-[#050F1C]">
      <FaqView />
      <Footer />
    </div>
  );
}
