import type { Metadata } from 'next';

// Customer report area. Kept out of search engines, and drawn as a full-screen layer so the
// public site header (rendered by the root layout) stays hidden without being modified.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function CustomersLayout({ children }: { children: React.ReactNode }) {
  return <div className="fixed inset-0 z-[60] overflow-auto bg-[#0d1526] text-white">{children}</div>;
}
