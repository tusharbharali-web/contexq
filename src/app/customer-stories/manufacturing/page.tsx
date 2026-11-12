import type { Metadata } from "next";
import View from "@/views/customer-manufacturing/View";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Customers: Manufacturing | ContexQ",
  description: 'Your suppliers’ suppliers are your risk.',
};

export default function CustomerManufacturingPage() {
  return (
    <div className="bg-[#02060f]">
      <View />
      <Footer />
    </div>
  );
}
