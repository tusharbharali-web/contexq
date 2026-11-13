// ContexQ team shown in the coin's Team overlay (components/ui/TeamOverlay.tsx).
// Add a person or change a card by editing this file only.
// photoPosition: CSS object-position for the portrait (default "center top").

export type TeamMember = {
  slug: string;
  group: "founders" | "advisors";
  displayName: string;
  popupName: string;
  position: string;
  role: string;
  oneLiner: string;
  credentialLine: string;
  chipsLabel: string;
  chips: string[];
  bio: string;
  photo: string;
  photoPosition?: string;
  photoAlt: string;
  linkedinUrl: string;
};

// Logo shown in each company chip of the profile dialog, keyed by the chip's name.
// Files: public/assets/images/team-logos (small copies of public/assets/images/team exp).
const LOGO_DIR = "/assets/images/team-logos";
export const COMPANY_LOGOS: Record<string, string> = {
  Quantexa: `${LOGO_DIR}/quantexa.webp`,
  Teradata: `${LOGO_DIR}/teradata.webp`,
  "Standard Chartered": `${LOGO_DIR}/standard-chartered.webp`,
  Google: `${LOGO_DIR}/google.webp`,
  AWS: `${LOGO_DIR}/aws.webp`,
  LinkedIn: `${LOGO_DIR}/linkedin.webp`,
  Oracle: `${LOGO_DIR}/oracle.webp`,
  Maybank: `${LOGO_DIR}/maybank.webp`,
  "Tata Motors": `${LOGO_DIR}/tata-motors.webp`,
  "Spark Systems": `${LOGO_DIR}/spark-systems.webp`,
  SICC: `${LOGO_DIR}/sicc.webp`,
  "M-DAQ": `${LOGO_DIR}/m-daq.webp`,
  NVIDIA: `${LOGO_DIR}/nvidia.webp`,
  IBM: `${LOGO_DIR}/ibm.webp`,
  Kyndryl: `${LOGO_DIR}/kyndryl.webp`,
  "Danske Bank": `${LOGO_DIR}/danske-bank.webp`,
  OCBC: `${LOGO_DIR}/ocbc.webp`,
};

export const TEAM: TeamMember[] = [
  {
    slug: "ajay-kakarania",
    group: "founders",
    displayName: "Ajay Kakarania",
    popupName: "Ajay Kakarania",
    position: "Founder, CEO",
    role: "Founder, CEO",
    oneLiner: "CFA · FRM · INSEAD Global EMBA",
    credentialLine: "CFA · FRM · INSEAD Global EMBA",
    chipsLabel: "PREVIOUSLY AT",
    chips: ["Quantexa", "Teradata", "Standard Chartered"],
    bio: "Ajay began as a coder and grew through analytics lead to pre-sales across five banks (Standard Chartered, UOB, Credit Suisse, Deutsche Bank, Barclays) and three product companies (Quantexa, Avaloq, Teradata). He holds the CFA and FRM, a master’s in Mathematical Trading & Finance (London) and an INSEAD Global Executive MBA. At ContexQ he leads the vision of combining graph intelligence, AI and domain expertise.",
    photo: "/assets/images/Team/Ajay_Kakarania.webp",
    photoPosition: "center top",
    photoAlt: "Portrait of Ajay Kakarania",
    linkedinUrl: "https://www.linkedin.com/in/kakarania/",
  },
  {
    slug: "jean-michel-coeur",
    group: "founders",
    displayName: "Jean-Michel Coeur",
    popupName: "Jean-Michel Coeur",
    position: "Co-Founder, CTO",
    role: "Co-Founder, CTO",
    oneLiner: "Former Google APAC Data & AI Practice Lead",
    credentialLine: "Former Google APAC Data & AI Practice Lead",
    chipsLabel: "PREVIOUSLY AT",
    chips: ["Google", "AWS", "LinkedIn"],
    bio: "Jean-Michel led Google’s APAC Data Analytics & AI technology practice and, before that, AWS’s ASEAN analytics practice, after earlier roles at LinkedIn, TIBCO and Progress Software. His expertise spans industrial IoT, cloud data platforms and machine learning across manufacturing, telecom, aviation, media and oil & gas. At ContexQ he architects the AI platform, combining graph intelligence, machine learning and generative AI.",
    photo: "/assets/images/Team/Jean_Michel_Coeur.webp",
    photoPosition: "center top",
    photoAlt: "Portrait of Jean-Michel Coeur",
    linkedinUrl: "https://www.linkedin.com/in/jmcoeur/",
  },
  {
    slug: "meenakshy-iyer",
    group: "founders",
    displayName: "Meenakshy Iyer",
    popupName: "Meenakshy Iyer",
    position: "Co-Founder, CPO",
    role: "Co-Founder, CPO",
    oneLiner: "Ex-Oracle Financial Services · Ex-Maybank MBB Labs",
    credentialLine: "Ex-Oracle Financial Services · Ex-Maybank MBB Labs",
    chipsLabel: "PREVIOUSLY AT",
    chips: ["Oracle", "Maybank", "Tata Motors"],
    bio: "Meenakshy began at Tata Motors, then led engineering for Oracle Financial Services’ risk and regulatory products, including the Basel II capital solution, before building Maybank’s innovation hub, MBB Labs, from scratch into a 200-person team. She holds an MSc in Mathematics, and her team shipped patented AI products used across Maybank’s markets. At ContexQ she drives product strategy, combining deep banking expertise with AI-powered innovation.",
    photo: "/assets/images/Team/Meenakshy_Iyer.webp",
    photoPosition: "center top",
    photoAlt: "Portrait of Meenakshy Iyer",
    linkedinUrl: "https://www.linkedin.com/in/meenakshy-iyer-3a63529/",
  },
  {
    slug: "joo-seng-wong",
    group: "advisors",
    displayName: "Mr. Joo Seng Wong",
    popupName: "Mr. Joo Seng Wong",
    position: "Advisor",
    role: "Advisor",
    oneLiner: "SICC Chairman · Sr. Entrepreneur",
    credentialLine: "Chairman, SICC · Senior Entrepreneur",
    chipsLabel: "AFFILIATIONS",
    chips: ["Spark Systems", "SICC", "M-DAQ"],
    bio: "Joo Seng served as founding CEO of GK Goh Financial Services, co-founded M-DAQ, and is now Co-founder and CEO of Spark Systems, which builds FX trading platforms. He is Chairman of the Singapore International Chamber of Commerce (SICC). At ContexQ he advises on market strategy, fintech innovation and enterprise growth.",
    photo: "/assets/images/Team/Joo_Seng_Wong.jpg",
    photoPosition: "center top",
    photoAlt: "Portrait of Mr. Joo Seng Wong",
    linkedinUrl: "https://www.linkedin.com/in/wongjooseng/",
  },
  {
    slug: "simon-see",
    group: "advisors",
    displayName: "Prof. Dr. Simon See",
    popupName: "Prof. Dr. Simon See",
    position: "Advisor",
    role: "Advisor",
    oneLiner: "Global Head, NVIDIA AI Tech Centre",
    credentialLine: "Global Head, NVIDIA AI Technology Centre",
    chipsLabel: "AFFILIATIONS",
    chips: ["NVIDIA"],
    bio: "Simon is Global Head of the NVIDIA AI Technology Centre, directing AI solution research and development across Asia-Pacific and advising country leaders on frontier AI. A professor and adjunct at universities across Singapore, the UK, China, India and ASEAN, he works across high-performance computing, deep learning and enterprise AI. At ContexQ he advises on AI strategy, research direction and next-generation Graph AI.",
    photo: "/assets/images/Team/Simon.webp",
    photoPosition: "center top",
    photoAlt: "Portrait of Prof. Dr. Simon See",
    linkedinUrl: "https://www.linkedin.com/in/simonsee/",
  },
  {
    slug: "ritesh-jain",
    group: "advisors",
    displayName: "Ritesh Jain",
    popupName: "Ritesh Jain",
    position: "Advisor",
    role: "Advisor",
    oneLiner: "Google · Angel Investor · Board Member · Enterprise Sales",
    credentialLine: "Google · Angel Investor · Board Member",
    chipsLabel: "AFFILIATIONS",
    chips: ["Google", "IBM", "Kyndryl"],
    bio: "Ritesh works on strategic pursuits and key accounts at Google, after a career in enterprise sales and consulting at Tata Motors, Trilogy, Wipro, IBM and Kyndryl, serving automotive manufacturers including General Motors, Nissan, Toyota and Volkswagen. He is an angel investor and board member, and a mentor at Stanford GSB Seed Spark. At ContexQ he advises on enterprise sales and on reach across automotive and supply chain.",
    photo: "/assets/images/Team/Ritesh.webp",
    photoPosition: "center top",
    photoAlt: "Portrait of Ritesh Jain",
    linkedinUrl: "https://www.linkedin.com/in/ritesh-jain-9561471/",
  },
  {
    slug: "partha-dasgupta",
    group: "advisors",
    displayName: "Partha Dasgupta",
    popupName: "Partha Dasgupta",
    position: "Advisor",
    role: "Advisor",
    oneLiner: "Chief Mentor · Business Development, India & Middle East",
    credentialLine: "Chief Mentor & Head of Business Development, India & Middle East",
    chipsLabel: "AFFILIATIONS",
    chips: [], // add previous companies here (and their logos in COMPANY_LOGOS) when available
    bio: "Partha brings over 25 years of experience in business development, strategic leadership and market expansion across technology, finance and manufacturing, with a track record of building high-value partnerships and leading teams to significant milestones. He joined ContexQ in 2025 as Chief Mentor & Head of Business Development for India and the Middle East. At ContexQ he advises on growth strategy, partnerships and expansion across India and the Middle East.",
    photo: "/assets/images/Ecosystem/Partha-DasGupta-1.webp",
    photoPosition: "center top",
    photoAlt: "Portrait of Partha Dasgupta",
    linkedinUrl: "https://www.linkedin.com/in/partha-dasgupta-68088720/",
  },
  {
    slug: "gilbert-kohnke",
    group: "advisors",
    displayName: "Gilbert Kohnke",
    popupName: "Gilbert Kohnke",
    position: "Advisor",
    role: "Advisor",
    oneLiner: "Former Group Chief Risk Officer · Maybank, Danske Bank, OCBC",
    credentialLine: "30+ years in global financial services; former Group Chief Risk Officer at Maybank, Danske Bank and OCBC.",
    chipsLabel: "PREVIOUSLY AT",
    chips: ["Maybank", "Danske Bank", "OCBC"],
    bio: "Gilbert brings over 30 years of international experience in financial services, enterprise risk management and banking leadership. He has held senior risk leadership positions at Maybank, Danske Bank and OCBC Bank, leading risk strategy, governance and transformation across global financial institutions. At ContexQ, he brings deep industry expertise to advancing AI-driven risk intelligence and helping organisations make more informed decisions.",
    photo: "/assets/images/Team/Gilbert_Kohnke.webp",
    photoPosition: "center top",
    photoAlt: "Portrait of Gilbert Kohnke",
    linkedinUrl: "https://www.linkedin.com/in/gilbert-kohnke-5a84295/",
  },
];
