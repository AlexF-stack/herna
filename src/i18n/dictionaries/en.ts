export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  brand: {
    tagline: string;
    closing: string;
    footprint: string;
  };
  prologue: {
    lines: [string, string, string];
    skip: string;
  };
  ui: {
    skipToContent: string;
    loading: string;
    openMenu: string;
    closeMenu: string;
    menu: string;
    close: string;
    legalNotice: string;
    privacyPolicy: string;
    backHome: string;
    sent: string;
    formError: string;
    name: string;
    email: string;
    message: string;
    send: string;
    address: string;
    phone: string;
    website: string;
    contactForm: string;
    contactShort: string;
    downloadProfile: string;
    founded: string;
    headquarters: string;
    businessScope: string;
    strategicUnits: string;
    explore: string;
    themeLight: string;
    themeDark: string;
    mapPlaceholder: string;
    viewDivision: string;
    allDivisions: string;
    insightsNav: string;
    backToDivisions: string;
  };
  nav: { href: string; label: string; external?: boolean }[];
  hero: {
    actLabel: string;
    line1: string;
    line2: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  about: {
    label: string;
    headline: string;
    body: string;
    purposeLabel: string;
    purpose: string;
    philosophy: string;
  };
  story: {
    label: string;
    headline: string;
    body: string;
    items: { year: string; title: string; body: string }[];
  };
  leadership: {
    label: string;
    headline: string;
    paragraphs: string[];
    quote: string;
  };
  businessModel: {
    label: string;
    headline: string;
    intro: string;
    steps: { title: string; body: string }[];
    strengthsLabel: string;
    strengths: { title: string; body: string }[];
    quote: string;
  };
  whyInvest: {
    label: string;
    headline: string;
    intro: string;
    items: { title: string; body: string }[];
    quote: string;
  };
  mediaBand: {
    label: string;
    headline: string;
    body: string;
  };
  identity: {
    label: string;
    headline: string;
  };
  vision: {
    label: string;
    body: string;
  };
  mission: {
    label: string;
    body: string;
  };
  purpose: {
    label: string;
    body: string;
  };
  divisions: {
    sectionLabel: string;
    actLabel: string;
    headline: string;
    intro: string;
    items: {
      id: string;
      title: string;
      description: string;
      body: string;
      focus: string[];
      accent: string;
      imageSrc: string;
    }[];
  };
  insights: {
    label: string;
    headline: string;
    intro: string;
    readMore: string;
    back: string;
    items: {
      id: string;
      title: string;
      excerpt: string;
      date: string;
      category: string;
    }[];
  };
  approach: {
    label: string;
    intro: string;
    values: {
      title: string;
      description: string | null;
    }[];
  };
  subsidiaries: {
    label: string;
    headline: string;
    intro: string;
    tagline: string;
    visitSite: string;
    items: {
      id: string;
      name: string;
      sector: string;
      services: string[];
      logoSrc: string;
      href?: string;
    }[];
  };
  partners: {
    label: string;
    headline: string;
    intro: string;
    items: {
      id: string;
      name: string;
      role: string;
      phone: string | null;
      phoneTel: string | null;
      logoBg: string;
      logoSrc: string;
    }[];
  };
  contact: {
    actLabel: string;
    title: string;
    invite: string;
    partnerContactsLabel: string;
    entity: string;
    partnerPhones: {
      label: string;
      phone: string;
      phoneTel: string;
    }[];
  };
  legal: {
    copyright: string;
    noticeTitle: string;
    noticeDescription: string;
    noticeExtra: string;
    privacyTitle: string;
    privacyIntro: string;
    privacyContactHeading: string;
    privacyContactBody: string;
    privacyDataHeading: string;
    privacyDataBody: string;
    privacyRetentionHeading: string;
    privacyRetentionBody: string;
    privacyPlaceholder: string;
  };
};

export const en: Dictionary = {
  meta: {
    title: "HERNA HOLDING — Pan-African Investment Holding | Cotonou, Benin",
    description:
      "HERNA HOLDING (Heritage of Nations) is a pan-African investment holding company based in Cotonou, Benin — equipment, mining, agriculture, energy, and real estate & infrastructure.",
  },
  brand: {
    tagline: "Building the Future, Honoring the Legacy",
    closing: "Creating lasting value for Africa.",
    footprint: "Driving investments. Building nations. Creating lasting value.",
  },
  prologue: {
    lines: [
      "Every nation leaves a legacy.",
      "Some inherit it.",
      "Others build it.",
    ],
    skip: "Skip",
  },
  ui: {
    skipToContent: "Skip to content",
    loading: "Loading",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menu: "Menu",
    close: "Close",
    legalNotice: "Legal notice",
    privacyPolicy: "Privacy policy",
    backHome: "Back to home",
    sent: "Sent.",
    formError: "Please complete all fields.",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    address: "Address",
    phone: "Phone",
    website: "Website",
    contactForm: "Contact form",
    contactShort: "Contact",
    downloadProfile: "Download company profile",
    founded: "Founded",
    headquarters: "Head office",
    businessScope: "Business scope",
    strategicUnits: "Strategic business units",
    explore: "Explore",
    themeLight: "Light mode",
    themeDark: "Dark mode",
    mapPlaceholder: "Cotonou, Benin — map placeholder",
    viewDivision: "View division",
    allDivisions: "All divisions",
    insightsNav: "Insights",
    backToDivisions: "Back to divisions",
  },
  nav: [
    { href: "#about", label: "About" },
    { href: "#leadership", label: "Leadership" },
    { href: "#identity", label: "Identity" },
    { href: "#divisions", label: "Divisions" },
    { href: "#subsidiaries", label: "Subsidiaries" },
    {
      href: "https://mashal-web.vercel.app",
      label: "Mashal Equipment",
      external: true,
    },
    { href: "#partners", label: "Partners" },
    { href: "#contact", label: "Contact" },
  ],
  hero: {
    actLabel: "Legacy",
    line1: "Building the future,",
    line2: "honoring the legacy.",
    subtitle:
      "A pan-African investment holding company based in Cotonou, Benin — investing today, transforming tomorrow across five strategic business units.",
    primaryCta: "Explore divisions",
    secondaryCta: "Discover HERNA",
  },
  about: {
    label: "Who we are",
    headline: "Building Africa's future through strategic investments.",
    body: "HERNA is a pan-African investment holding company established in 2012 and headquartered in Cotonou, Benin. We focus on high-impact projects that accelerate Africa’s sustainable economic transformation — industrial growth, infrastructure, energy, food security and responsible resource management.",
    purposeLabel: "Our purpose",
    purpose:
      "We invest in strategic opportunities that accelerate Africa’s development while creating sustainable prosperity for future generations.",
    philosophy:
      "We believe that Africa’s greatest opportunities lie in sustainable investments that create economic growth, empower communities, and build a lasting legacy for future generations.",
  },
  story: {
    label: "Our story",
    headline: "From vision to impact",
    body: "HERNA was founded with a clear ambition: to create an investment platform capable of transforming strategic opportunities into sustainable development across Africa. Today, HERNA continues expanding its activities while developing long-term partnerships with governments, financial institutions and private investors.",
    items: [
      {
        year: "2012",
        title: "Foundation",
        body: "Launch of the platform with a clear ambition to transform African potential into industrial realities.",
      },
      {
        year: "2026",
        title: "Expansion",
        body: "Portfolio consolidation, sector diversification, and reinforcing multi-national impact.",
      },
      {
        year: "2035",
        title: "Horizon 2035",
        body: "The go-to leader in sustainable impact investment and economic transformation in Africa.",
      },
    ],
  },
  leadership: {
    label: "Message from the",
    headline: "President & CEO",
    paragraphs: [
      "Africa stands at a defining moment in its history — a continent of immense potential, rich resources, and a dynamic, visionary population.",
      "At HERNA Holding, we have chosen to invest in this potential and to be a driving force in shaping a prosperous and sustainable future for our nations.",
      "Since our establishment in 2012, our mission has been clear: to create sustainable value by investing in strategic sectors that transform economies, improve lives, and build enduring legacy. Guided by integrity, innovation, and excellence, we partner with governments, institutions, and private sector leaders to deliver impactful solutions that stand the test of time.",
      "We are more than an investment holding company. We are builders, partners, and catalysts for growth. Together, let us build Africa’s future and honor the legacy we will leave for generations to come.",
    ],
    quote: "We invest today to build a better Africa tomorrow.",
  },
  businessModel: {
    label: "How we work",
    headline: "Our business model",
    intro:
      "A disciplined investment cycle designed to turn opportunity into sustainable value.",
    steps: [
      {
        title: "Investment opportunities",
        body: "Rigorous sourcing and market analysis to identify high-potential projects.",
      },
      {
        title: "Project structuring",
        body: "Designing robust legal, financial, and operational frameworks.",
      },
      {
        title: "Financing",
        body: "Securing diverse funding through strategic partnerships and internal capital.",
      },
      {
        title: "Execution",
        body: "Implementing projects with a focus on speed, quality, and compliance.",
      },
      {
        title: "Operations",
        body: "Managing assets efficiently to guarantee long-term viability.",
      },
      {
        title: "Sustainable value creation",
        body: "Delivering consistent financial returns while empowering local economies.",
      },
    ],
    strengthsLabel: "Our strengths",
    strengths: [
      {
        title: "Strategic vision",
        body: "Anticipating market trends to position our investments ahead of the curve.",
      },
      {
        title: "Operational excellence",
        body: "A hands-on approach combined with world-class management standards.",
      },
      {
        title: "Strong partnerships",
        body: "Fostering trusted relationships with global investors and local governments.",
      },
      {
        title: "Responsible investments",
        body: "Prioritizing Environmental, Social, and Governance (ESG) criteria in every decision.",
      },
    ],
    quote:
      "Our model is built on resilience, ensuring every venture translates into collective wealth and shared progress.",
  },
  whyInvest: {
    label: "Why HERNA",
    headline: "Why invest with HERNA?",
    intro:
      "Strategic advantages. Sustainable returns. Lasting legacy. At HERNA HOLDING, we combine vision, expertise, and a strong ecosystem to create value for investors, partners, and communities across Africa.",
    items: [
      {
        title: "Strategic diversification",
        body: "A diversified investment portfolio across key sectors ensures stability, resilience, and long-term value creation.",
      },
      {
        title: "High growth potential",
        body: "We invest in high-impact sectors with strong growth prospects driving sustainable returns and economic transformation.",
      },
      {
        title: "Experienced leadership",
        body: "Our leadership team brings deep industry expertise, integrity, and a proven track record of delivering results across Africa.",
      },
      {
        title: "Strong partnerships",
        body: "We collaborate with reputable partners, governments, and institutions to execute projects that create shared value and lasting impact.",
      },
      {
        title: "Sustainable & responsible",
        body: "We are committed to ESG principles ensuring our investments promote environmental stewardship, social impact, and good governance.",
      },
      {
        title: "Pan-African focus",
        body: "With a strong presence and networks across Africa, we understand local realities and deliver solutions that drive inclusive development.",
      },
      {
        title: "Diversified group structure",
        body: "A strong portfolio of specialized subsidiaries delivering integrated solutions across multiple industries for greater impact and efficiency.",
      },
      {
        title: "Long-term value creation",
        body: "We aim beyond profitability — building a legacy that empowers nations, transforms communities, and benefits future generations.",
      },
    ],
    quote: "Investing today to shape tomorrow.",
  },
  mediaBand: {
    label: "Footprint",
    headline: "Driving investments. Building nations.",
    body: "From mining and equipment to agriculture, energy, real estate and infrastructure — HERNA channels capital into sectors that create lasting value for Africa.",
  },
  identity: {
    label: "Our identity",
    headline: "Vision, Mission & Purpose",
  },
  vision: {
    label: "Vision",
    body: "To become Africa’s leading investment holding company, creating sustainable economic transformation through strategic investments.",
  },
  mission: {
    label: "Mission",
    body: "To identify, structure, finance and manage projects that generate long-term value for investors, communities and future generations.",
  },
  purpose: {
    label: "Purpose",
    body: "Building prosperous nations while preserving a lasting legacy.",
  },
  divisions: {
    sectionLabel: "Strategic Business Units",
    actLabel: "Divisions",
    headline: "Driving sustainable growth across five critical sectors",
    intro:
      "Driving sustainable growth and long-term value across critical economic sectors through five distinct strategic business units.",
    items: [
      {
        id: "equipment",
        title: "Equipment",
        description:
          "Providing high-performance machinery, industrial tooling, and complete technical support services for major regional ventures.",
        body: "Our Equipment division supplies high-performance machinery, industrial tooling and complete technical support for major regional ventures. We source and deploy earthmoving, mining and construction fleets, guarantee genuine OEM spare parts, and deliver 24/7 technical assistance so partners keep critical assets running with confidence.",
        focus: [
          "Heavy equipment supply",
          "Spare parts & supply",
          "Industrial machinery",
          "Assistance & maintenance",
        ],
        accent: "#c9a24b",
        imageSrc: "/divisions/equipment.png",
      },
      {
        id: "real-estate",
        title: "Real Estate & Infrastructure",
        description:
          "Constructing smart cities, residential assets, and critical logistics frameworks for tomorrow’s growth.",
        body: "The Real Estate & Infrastructure division develops modern residential and commercial assets, master-planned urban frameworks, road corridors and engineering services. We support Africa’s urban transformation through high-quality, smart and resilient infrastructure projects.",
        focus: [
          "Real estate development",
          "Urban development",
          "Road infrastructure",
          "Engineering services",
        ],
        accent: "#1a2433",
        imageSrc: "/divisions/real-estate.png",
      },
      {
        id: "mining",
        title: "Mining",
        description:
          "Advancing responsible mineral exploration, extraction, and asset development with world-class safety standards.",
        body: "Our Mining division advances responsible exploration, extraction and asset development. From geological assessment to project structuring and on-site support, we develop mining projects that create sustainable economic value while respecting local environments.",
        focus: [
          "Mining exploration",
          "Mining equipment",
          "Project development",
          "Consultancy & support",
        ],
        accent: "#8a6a2e",
        imageSrc: "/divisions/mining.png",
      },
      {
        id: "agriculture",
        title: "Agriculture & Livestock",
        description:
          "Empowering regional food security through precision farming, livestock practices, and optimized distribution.",
        body: "The Agriculture & Livestock division strengthens regional food security via precision farming, modern livestock practices, food processing and mechanized value chains. We invest in agro-industrial capacity that turns primary production into lasting prosperity.",
        focus: [
          "Agro-industrial projects",
          "Food processing & tech",
          "Livestock development",
          "Mechanization & value chain",
        ],
        accent: "#121826",
        imageSrc: "/divisions/agriculture.png",
      },
      {
        id: "energy",
        title: "Energy",
        description:
          "Securing transition-ready power through solar, wind, and sustainable energy initiatives at scale.",
        body: "Our Energy division delivers reliable, innovative and sustainable energy solutions — from utility-scale renewables and efficiency systems to electrical infrastructure and industrial electrification — to fuel continental industrial and social development.",
        focus: [
          "Renewable energy & solar",
          "Energy efficiency systems",
          "Electrical infrastructure",
          "Industrial electrification",
        ],
        accent: "#d4b06a",
        imageSrc: "/divisions/energy.png",
      },
    ],
  },
  insights: {
    label: "Insights",
    headline: "Perspectives from across the holding.",
    intro:
      "Strategic notes and corporate updates will appear here when official communications are published.",
    readMore: "Read more",
    back: "Back to insights",
    items: [],
  },
  approach: {
    label: "Core values",
    intro:
      "Principles shaping our investment vision and global conduct — integrity is the foundation of sustainable growth.",
    values: [
      {
        title: "Professionalism",
        description:
          "Upholding absolute rigor, competence, and ethical standards across all projects.",
      },
      {
        title: "Innovation",
        description:
          "Embracing pioneering models, creative approaches, and modern industrial tech.",
      },
      {
        title: "Partnership",
        description:
          "Cultivating robust alliances with investors, stakeholders, and communities.",
      },
      {
        title: "Quality",
        description:
          "Ensuring flawless execution and tier-one deliverables that sustain value over time.",
      },
      {
        title: "Sustainable development",
        description:
          "Structuring environmental conservation, social impact, and long-term economic prosperity into every decision.",
      },
    ],
  },
  subsidiaries: {
    label: "Our subsidiaries",
    headline: "Building excellence through specialized companies",
    intro:
      "HERNA HOLDING brings together specialized subsidiaries that operate across strategic sectors, delivering integrated solutions and contributing to Africa’s sustainable development.",
    tagline: "Three specialized companies. One vision. One legacy.",
    visitSite: "Visit website",
    items: [
      {
        id: "mashal",
        name: "Mashal Equipment",
        sector: "Heavy equipment & industrial solutions",
        services: [
          "Operator training",
          "Consulting & technical assistance",
          "After-sales service",
          "Spare parts",
          "Construction, mining & hydraulic site management",
        ],
        logoSrc: "/subsidiaries/mashal.png",
        href: "https://mashal-web.vercel.app",
      },
      {
        id: "tsalach",
        name: "Tsalach Development & Infrastructures",
        sector: "Engineering • Construction • Real estate",
        services: [
          "Infrastructure development",
          "Civil engineering",
          "Building construction",
          "Real estate development",
          "Project management",
        ],
        logoSrc: "/subsidiaries/tsalach.png",
      },
      {
        id: "tpg",
        name: "The Pertinent Group",
        sector: "Business advisory • Investment • Strategy",
        services: [
          "Business consulting",
          "Investment advisory",
          "Project structuring",
          "Strategic partnerships",
          "Business development",
        ],
        logoSrc: "/subsidiaries/tpg.png",
      },
    ],
  },
  partners: {
    label: "Partners",
    headline: "Strategic Partners",
    intro:
      "Building strong alliances. Creating lasting impact. HERNA HOLDING collaborates with trusted strategic partners to accelerate sustainable investments, infrastructure development, industrial growth and innovation across Africa.",
    items: [
      {
        id: "agetip",
        name: "AGETIP-BENIN",
        role: "A leading engineering and industrial group providing innovative solutions in construction, energy, industry and specialized services.",
        phone: null,
        phoneTel: null,
        logoBg: "transparent",
        logoSrc: "/partners/agetip-clear.png",
      },
      {
        id: "hmd",
        name: "HMD",
        role: "A dynamic construction and infrastructure company delivering high-quality projects that shape communities and drive development.",
        phone: null,
        phoneTel: null,
        logoBg: "transparent",
        logoSrc: "/partners/hmd-clear.png",
      },
      {
        id: "osgb",
        name: "OSGB",
        role: "A global business advisory and investment firm creating cross-border opportunities and sustainable value across Africa.",
        phone: null,
        phoneTel: null,
        logoBg: "transparent",
        logoSrc: "/partners/osgb-clear.png",
      },
    ],
  },
  contact: {
    actLabel: "Contact",
    title: "Connect with HERNA HOLDING",
    invite:
      "Partnering to structure Africa’s industrial and economic legacy. Reach out to explore how we can collaborate.",
    partnerContactsLabel: "Partner Contacts",
    entity: "HERNA HOLDING",
    partnerPhones: [],
  },
  legal: {
    copyright: `© ${new Date().getFullYear()} HERITAGE OF NATIONS (HERNA). All rights reserved.`,
    noticeTitle: "Legal notice",
    noticeDescription:
      "Legal information about HERNA HOLDING — Heritage of Nations: publisher, hosting and intellectual property.",
    noticeExtra:
      "HERNA strives to keep the information on this website accurate and up to date. However, we cannot guarantee completeness or uninterrupted availability. Use of the site is at your own risk. Corporate registration numbers will be published here as soon as they are available.",
    privacyTitle: "Privacy policy",
    privacyIntro:
      "This policy explains how HERITAGE OF NATIONS (HERNA) collects and uses personal information submitted through hernaholding.com and related contact channels.",
    privacyContactHeading: "Contact",
    privacyContactBody: "For privacy requests, contact",
    privacyDataHeading: "Data collected",
    privacyDataBody:
      "When you use the contact form, we may process your name, email address and message content solely to respond to your inquiry. Technical logs (IP address, browser type, pages visited) may be processed by our hosting provider for security and performance.",
    privacyRetentionHeading: "Retention",
    privacyRetentionBody:
      "Messages are retained only as long as needed to handle your request, unless a longer period is required by applicable law. Hosting logs follow the retention practices of our infrastructure provider.",
    privacyPlaceholder:
      "Depending on applicable law, you may have the right to access, rectify or delete personal data concerning you, and to object to or restrict certain processing. Contact us at the email above to exercise these rights. This policy may be updated; the version published on this page is the one in force.",
  },
};
