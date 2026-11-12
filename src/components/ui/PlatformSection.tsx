import Link from "next/link";

export default function PlatformSection() {
  return (
    <section
      style={{
        position: "relative",
        padding: "120px 0 100px",
        zIndex: 2,
        // Opaque enough for readability but keeps the world-map visual language
        backgroundImage:
          "linear-gradient(to bottom, rgba(10,18,34,0.78), rgba(10,18,34,0.82)), url(/assets/images/world_1.jpg)",
        backgroundSize: "cover, cover",
        backgroundPosition: "center top, center",
        backgroundRepeat: "no-repeat, no-repeat",
        color: "#e6ecf5",
        fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 48px" }}>

        {/* ================ FOUNDATIONS SECTION ================ */}
        <div style={{ marginBottom: 96 }}>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 44px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Foundations don&apos;t get built twice.
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.65,
              color: "#9aa5b8",
              maxWidth: 760,
              marginBottom: 56,
            }}
          >
            Most institutions rebuild the same data foundation for every risk
            programme. SarasW resolves your customers, counterparties and
            suppliers once, connects them continuously, and lets every use case
            after the first build on what&apos;s already there.
          </p>

          {/* COMPARISON CARDS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
              gap: 24,
            }}
          >
            {/* Without SarasW */}
            <div
              style={{
                background: "rgba(8,14,26,0.92)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: "32px 32px 28px",
                backdropFilter: "blur(6px)",
              }}
            >
              <div style={{ fontSize: 13, color: "#6b7a93", marginBottom: 8, letterSpacing: "0.02em" }}>
                Without SarasW
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 600, color: "#ffffff", marginBottom: 14 }}>
                Five teams, five silos.
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#8d99ac", marginBottom: 32 }}>
                AML, fraud, KYC, credit and procurement each build their own
                entity resolution and their own graph. Matching logic drifts,
                links get rediscovered, and no two teams agree on who the
                counterparty is.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 10, marginBottom: 16 }}>
                {["AML", "Fraud", "KYC", "Credit", "Procurement"].map((label) => (
                  <div key={label} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#c3cde0", marginBottom: 8 }}>{label}</div>
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}>
                      <div style={{ width: 1, height: 10, background: "rgba(146,163,195,0.3)" }} />
                    </div>
                    {["ER", "Graph", "Analytics"].map((row) => (
                      <div
                        key={row}
                        style={{
                          fontSize: 10.5,
                          color: "#9aa5b8",
                          padding: "6px 4px",
                          background: "rgba(146,163,195,0.08)",
                          border: "1px solid rgba(146,163,195,0.15)",
                          borderRadius: 4,
                          marginBottom: 4,
                        }}
                      >
                        {row}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: 10,
                marginBottom: 20,
                fontSize: 9.5,
                color: "#6b7a93",
                textAlign: "center",
              }}>
                <span>Dongguan Optech</span>
                <span>DG OPTECH CO</span>
                <span>Optech Dongguan</span>
                <span>东莞光电</span>
                <span>DGO HK HLDG</span>
              </div>

              <div style={{ fontSize: 12.5, color: "#8d99ac", textAlign: "center", marginBottom: 24 }}>
                Same supplier, five records, five answers.
              </div>

              <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 20 }} />

              <div style={{ fontSize: 13.5, color: "#9aa5b8" }}>
                Months per use case. Logic drifts. Trust erodes.
              </div>
            </div>

            {/* With SarasW */}
            <div
              style={{
                background: "rgba(8,14,26,0.92)",
                border: "1px solid rgba(45,180,220,0.3)",
                borderRadius: 16,
                padding: "32px 32px 28px",
                backdropFilter: "blur(6px)",
              }}
            >
              <div style={{ fontSize: 13, color: "#2ec4e6", marginBottom: 8, letterSpacing: "0.02em" }}>
                With SarasW
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 600, color: "#ffffff", marginBottom: 14 }}>
                One foundation, every use case.
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#8d99ac", marginBottom: 32 }}>
                Every source is resolved once, across systems, languages and
                scripts, then connected to the open world. New use cases read
                the same graph instead of rebuilding it.
              </p>

              <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 10,
                fontSize: 11,
                color: "#9aa5b8",
                flexWrap: "wrap",
                gap: 8,
              }}>
                {["Core banking", "Payments", "ERP", "Registries", "Sanctions", "Supply chain", "News"].map((s) => (
                  <span key={s} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{
                      width: 6, height: 6, borderRadius: "50%",
                      background: "#2ec4e6",
                    }} /> {s}
                  </span>
                ))}
              </div>

              {[
                { title: "Info fusion", meta: "internal + open-world data" },
                { title: "Entity resolution", meta: "resolved once" },
                { title: "Knowledge graph", meta: "connected continuously" },
                { title: "Contextual analytics", meta: "reasoning over relationships" },
                { title: "Evidence layer", meta: "every finding traceable" },
              ].map((layer, idx) => (
                <div
                  key={layer.title}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "11px 16px",
                    background: "rgba(45,180,220,0.06)",
                    border: "1px solid rgba(45,180,220,0.2)",
                    borderRadius: 6,
                    marginTop: idx === 0 ? 14 : 6,
                  }}
                >
                  <span style={{ fontSize: 13, fontWeight: 500, color: "#dbeaf7" }}>{layer.title}</span>
                  <span style={{ fontSize: 11.5, color: "#7aaec2" }}>{layer.meta}</span>
                </div>
              ))}

              <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 16,
                fontSize: 11,
                color: "#9aa5b8",
                flexWrap: "wrap",
                gap: 8,
              }}>
                {["AML", "Fraud", "KYC", "Credit", "Supply chain", "Tax", "Customs"].map((s) => (
                  <span key={s} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{
                      width: 6, height: 6, borderRadius: "50%",
                      background: "#2ec4e6",
                    }} /> {s}
                  </span>
                ))}
              </div>

              <div style={{ fontSize: 12.5, color: "#8d99ac", textAlign: "center", marginTop: 20, marginBottom: 20 }}>
                Five layers, built once, shared by every team.
              </div>

              <div style={{ height: 1, background: "rgba(45,180,220,0.15)", marginBottom: 20 }} />

              <div style={{ fontSize: 13.5, color: "#dbeaf7" }}>
                The first use case builds the foundation. Each one after deploys in weeks, not months.
              </div>
            </div>
          </div>

          <p style={{ marginTop: 40, fontSize: 14, color: "#8d99ac", maxWidth: 760 }}>
            <strong style={{ color: "#ffffff", fontWeight: 600 }}>Sits on the stack you already run.</strong>{" "}
            API-first on Snowflake, Databricks or on-premise, with no core-system change. Your data stays in your environment.
          </p>
        </div>

        {/* ================ THREE STEPS ================ */}
        <div style={{ marginBottom: 72 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 48,
              paddingTop: 48,
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {[
              {
                step: "Step 1",
                title: "Entities resolved once",
                body: "One identity per customer, counterparty and beneficiary, matched through aliases, typos, shell companies and native APAC scripts including Bahasa and CJK. Every team works from the same view instead of reconciling the same records again.",
              },
              {
                step: "Step 2",
                title: "Relationships discovered, not declared",
                body: "Your records are linked to registries, sanctions lists, supply-chain data and adverse media. The graph surfaces what no one recorded: hidden ownership chains, shared directors, indirect exposure. It updates as the data changes.",
              },
              {
                step: "Step 3",
                title: "Intelligence that compounds",
                body: "Scores, features and network patterns become shared assets. Every finding carries its evidence trail, so it holds up with boards and regulators. The next use case starts from what the last one built.",
              },
            ].map((item) => (
              <div key={item.step}>
                <div style={{ fontSize: 13, color: "#2ec4e6", marginBottom: 8, letterSpacing: "0.02em" }}>
                  {item.step}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: "#ffffff", marginBottom: 12 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "#8d99ac" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================ CTA ================ */}
        <div style={{ textAlign: "center", paddingTop: 32 }}>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 38px)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: 10,
            }}
          >
            Build the foundation once.
          </h2>
          <p
            style={{
              fontSize: "clamp(20px, 2.5vw, 26px)",
              fontWeight: 400,
              color: "#8d99ac",
              marginBottom: 36,
            }}
          >
            Let intelligence compound on top.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <Link
              href="/Platform"
              style={{
                display: "inline-block",
                padding: "12px 28px",
                borderRadius: 10,
                background: "linear-gradient(90deg, #2ec4e6 0%, #4aa8f0 100%)",
                color: "#0a1222",
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              Explore the platform
            </Link>
            <Link
              href="/solutions"
              style={{
                display: "inline-block",
                padding: "12px 28px",
                borderRadius: 10,
                background: "transparent",
                color: "#ffffff",
                fontWeight: 500,
                fontSize: 15,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              See use cases
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
