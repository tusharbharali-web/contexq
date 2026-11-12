import type { Metadata } from "next";
import View from "@/views/about/View";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Graph AI That Connects Your Enterprise Data",
  description:
    "ContexQ is graph-native AI that reads the connections inside your data, then enriches it with the world outside. 163M+ entities resolved. Sovereign-ready.",
};

export default function CompanyPage() {
  return (
    <div className="bg-[#02060f]">
      <View />
      <Footer />
    </div>
  );
}
