import type { Metadata } from "next";
import View from "@/views/customer-government/View";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Customers: Government | ContexQ",
  description: 'One view across scattered public records.',
};

export default function CustomerGovernmentPage() {
  return (
    <div className="bg-[#02060f]">
      <View />
      <Footer />
    </div>
  );
}
