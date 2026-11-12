"use client";

import dynamic from "next/dynamic";
import { CoinSliceData } from "./types";
import { CustomLoader } from "../ui/CustomLoader";

// Start downloading the 3D scene code as soon as this module is evaluated in the
// browser (with the page's own scripts) instead of waiting for React to render it.
const loadCoinScene = () => import("./CoinScene");
if (typeof window !== "undefined") void loadCoinScene();

// Lazy load 3D scene (SSR disabled)
const CoinScene = dynamic(loadCoinScene, {
  ssr: false,
  loading: () => <CustomLoader />
});

export default function ClientSceneWrapper({ slices }: { slices: CoinSliceData[] }) {
  return <CoinScene slices={slices} />;
}
