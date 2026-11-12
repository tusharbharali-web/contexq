import type { Metadata } from "next";
import View from "@/views/industry-goods/View";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Retail & E-Commerce",
  description:
    "Stop e-commerce fraud, promo and refund abuse, and marketplace/seller risk. ContexQ resolves accounts, devices and orders into one trusted view.",
};

export default function IndustryGoodsPage() {
  return (
    <div className="bg-[#02060f]">
      <View />
      <Footer />
    </div>
  );
}
