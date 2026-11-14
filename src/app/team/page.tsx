import type { Metadata } from "next";
import Footer from "@/components/ui/Footer";
import TeamPageView from "./TeamPageView";

export const metadata: Metadata = {
  title: "Team | ContexQ",
  description: "The founders and advisors behind ContexQ.",
};

// Phones open the coin's Team slice here (a full page) instead of the overlay.
export default function TeamPage() {
  return (
    <>
      <TeamPageView />
      <Footer />
    </>
  );
}
