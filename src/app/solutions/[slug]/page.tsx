import SolutionTemplate from "@/components/solutions/SolutionTemplate";

const SOLUTIONS_DATA: Record<string, any> = {
  "customer-intelligence": {
    title: "Customer Intelligence",
    subtitle: "Unlock real-time behavioural insights to drive hyper-personalized engagement and retention.",
    problems: [
      {
        problem: "Fragmentation of customer data across disparate legacy silos prevents a unified view.",
        solution: "Automated entity resolution that bridges all touchpoints into a singular, high-fidelity profile."
      }
    ],
    capabilities: [
      {
        title: "Omnichannel Pulse",
        description: "Connect data from web, mobile, and offline POS in milliseconds for a unified behavioural stream.",
        impact: "300% increase in cross-channel attribution accuracy."
      },
      {
        title: "Predictive Intent",
        description: "Identify high-value intent signals before the user even reaches the checkout page.",
        impact: "Typically results in a 45% uplift in conversion velocity."
      },
      {
        title: "Persona Genesis",
        description: "AI-driven automated segmentation that evolves as customer behaviour shifts.",
        impact: "Reduces manual marketing overhead by 70%."
      }
    ],
    caseStudies: [{ company: "Vanguard Retail", result: "$25M Revenue Growth", quote: "ContexQ changed how we view our customers." }],
    faqs: [{ q: "How fast is it?", a: "Sub-50ms latency for all real-time events." }]
  },
  "fraud-detection": {
    title: "Fraud Detection",
    subtitle: "Protect your ecosystem with proactive, graph-based anomaly detection.",
    problems: [
      {
        problem: "Static rule-engines fail to catch multi-hop fraud rings.",
        solution: "Graph-native link analysis that flags relationship clusters instantly."
      }
    ],
    capabilities: [
      {
        title: "Graph Correlation",
        description: "Analyze deep-link relationships between IP, DeviceID, and PII to find hidden syndicates.",
        impact: "Detect 40% more fraud networks than standard ML models."
      },
      {
        title: "Biometric Rhythm",
        description: "Detect bot behaviour via movement velocity and typing cadence anomalies.",
        impact: "99.9% accuracy in human vs. bot differentiation."
      },
      {
        title: "Cognitive AI Score",
        description: "Explainable risk-scoring that provides human-readable context for every alert.",
        impact: "Reduces manual review cycles by 65%."
      }
    ],
    caseStudies: [{ company: "PayStream Global", result: "90% Reduction in Chargebacks", quote: "Uncovered rings we didn't know existed." }],
    faqs: [{ q: "Legacy support?", a: "Full API adapters for systems dating back to the 90s." }]
  }
};

// HELPER: Generate generic data for a slug if it doesn't exist
const getGenericData = (slug: string) => {
  const cleanTitle = slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  return {
    title: cleanTitle,
    subtitle: `Deep-dive into the ${cleanTitle} ecosystem. Empowering your strategy with advanced AI and graph-native intelligence.`,
    problems: [
      {
        problem: `Conventional ${cleanTitle} systems are often limited by static data silos and legacy architectures.`,
        solution: `Our graph-based engine provides a dynamic, $360^{\circ}$ view of the entire ${cleanTitle} landscape in real-time.`
      }
    ],
    capabilities: [
      {
        title: "Real-time Processing",
        description: `Optimize your ${cleanTitle} workflow with automated pipelines that process data in milliseconds.`,
        impact: `Typically results in a 45% increase in operational efficiency.`
      },
      {
        title: "Predictive Modeling",
        description: `Apply advanced machine learning to forecast future ${cleanTitle} outcomes and mitigate risk.`,
        impact: `Average precision improvement of 22% over baseline models.`
      }
    ],
    caseStudies: [
      {
        company: "Global Enterprise",
        result: "Transformed Performance",
        quote: "Our productivity tripled after integrating this specific solution module."
      }
    ],
    faqs: [
      {
        q: "How easy is the integration?",
        a: "Our modular API allows for full deployment in as little as two weeks."
      }
    ]
  };
};

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Otherwise use the template-based system
  const data = SOLUTIONS_DATA[slug] || getGenericData(slug);
  return <SolutionTemplate data={data} />;
}
