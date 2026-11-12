// This file is a fallback for any unmatched industry routes
// Individual industry pages are defined in: finance/, mfg/, goods/, health/, telco/, public-sector/

export default function NotFound() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Industry Not Found</h1>
      <p>This industry page does not exist.</p>
    </main>
  );
}
