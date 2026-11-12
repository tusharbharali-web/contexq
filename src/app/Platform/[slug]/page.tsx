import { notFound } from "next/navigation";

// The real Platform pages (cleansing, entity, network, scores, actions) are static
// routes next to this folder; any other /Platform/<slug> is a 404.
export default function PlatformFallback() {
  notFound();
}
