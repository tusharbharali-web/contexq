import type { Metadata } from "next";
import View from "@/views/customer-trading/View";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Customers: Trading | ContexQ",
  description: 'Know who you trade with, before the deal closes.',
};

export default function CustomerTradingPage() {
  return (
    <div className="bg-[#02060f]">
      <View />
      <Footer />
    </div>
  );
}
