import type { Metadata } from "next";
import View from "@/views/solution-supply-chain/View";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Supply Chain Network Intelligence",
  description:
    "See your whole supplier network, react the moment conditions shift, and act on next-best moves to optimise supply, lean inventory and free working capital.",
};

export default function SolutionSupplyChainPage() {
  return (
    <div className="bg-[#02060f]">
      <View />
      <Footer />
    </div>
  );
}
