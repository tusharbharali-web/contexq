import type { Metadata } from "next";
import View from "@/views/customer-banks/View";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Customers: Banks | ContexQ",
  description: 'Enhanced due diligence on SMEs with a thin file.',
};

export default function CustomerBanksPage() {
  return (
    <div className="bg-[#02060f]">
      <View />
      <Footer />
    </div>
  );
}
