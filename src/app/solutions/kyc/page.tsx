import type { Metadata } from "next";
import View from "@/views/solution-kyc/View";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "KYC with Graph-Based Entity Resolution",
  description:
    "Fuse registries, bureaus, sanctions and adverse media to resolve customer identities, surface UBOs and related parties, and monitor risk with an audit trail.",
};

export default function SolutionKycPage() {
  return (
    <div className="bg-[#02060f]">
      <View />
      <Footer />
    </div>
  );
}
