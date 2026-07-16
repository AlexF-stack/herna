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
  nav: { href: string; label: string }[];
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
  partners: {
    label: string;
    headline: string;
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
    title: "HERNA — Heritage of Nations",
    description:
      "HERNA HOLDING is a pan-African investment holding company based in Cotonou, Benin — building the future, honoring the legacy through five strategic business units.",
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
      "Africa holds extraordinary potential. At HERNA Holding, we are committed to investing in a sustainable future for our nations — transforming opportunity into lasting prosperity.",
      "Since our establishment in 2012, we have built a pan-African investment platform dedicated to high-impact projects across strategic sectors. Our ambition is clear: accelerate economic transformation while creating value for investors, communities and generations to come.",
      "Through integrity, innovation and excellence, we structure partnerships that deliver impactful solutions. We invest today to build a better Africa tomorrow.",
      "I invite you to discover our vision, our divisions and the allies who walk this journey with us.",
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
      "Maximizing return, ensuring reliability, and building a prosperous African tomorrow.",
    items: [
      {
        title: "Pan-African vision",
        body: "Anchored in Benin, bridging regional markets to catalyze structural continental integration.",
      },
      {
        title: "Strong governance",
        body: "Uncompromising compliance, financial audit rigor, and complete operational transparency.",
      },
      {
        title: "Experienced leadership",
        body: "A multi-disciplinary executive team driving complex transactions with execution safety.",
      },
      {
        title: "Strategic partnerships",
        body: "Co-investing alongside global funding groups, sovereign agencies, and local state actors.",
      },
      {
        title: "Long-term value",
        body: "Prioritizing business resilience, predictable asset cash flows, and sustainable capital return.",
      },
      {
        title: "Responsible investments",
        body: "Systematically embedding ESG protocols across our energy, agricultural, and mineral assets.",
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
      "Principles shaping our investment vision and conduct — integrity at the foundation of sustainable growth.",
    values: [
      {
        title: "Integrity",
        description: "We do what is right.",
      },
      {
        title: "Innovation",
        description: "We embrace new ideas.",
      },
      {
        title: "Partnership",
        description: "We achieve more together.",
      },
      {
        title: "Excellence",
        description: "We deliver quality.",
      },
      {
        title: "Sustainability",
        description: "We build for the future.",
      },
    ],
  },
  partners: {
    label: "Partners",
    headline: "Strategic Alliances",
    items: [
      {
        id: "tpg",
        name: "TPG — The Pertinent Group",
        role: "Joint venture alignment, global funding structuring, and high-level cross-border asset orchestration.",
        phone: "[+229] 0197298070",
        phoneTel: "+2290197298070",
        logoBg: "transparent",
        logoSrc: "/partners/tpg-clear.png",
      },
      {
        id: "hmd",
        name: "HMD",
        role: "Primary logistical deployment, technical equipment lifecycle engineering, and supply chain resilience.",
        phone: null,
        phoneTel: null,
        logoBg: "transparent",
        logoSrc: "/partners/hmd-clear.png",
      },
      {
        id: "osgb",
        name: "OSGB — Oluwa Shola Global Business",
        role: "Operational management, regional regulatory compliance, and project governance optimizing productivity.",
        phone: "[+229] 0197091910",
        phoneTel: "+2290197091910",
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
    partnerPhones: [
      { label: "TPG", phone: "[+229] 0197298070", phoneTel: "+2290197298070" },
      { label: "OSGB", phone: "[+229] 0197091910", phoneTel: "+2290197091910" },
    ],
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
      "This policy explains how HERITAGE OF NATIONS (HERNA) collects and uses personal information submitted through herna-group.com and related contact channels.",
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
