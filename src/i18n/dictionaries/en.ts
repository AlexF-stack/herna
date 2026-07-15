export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  brand: {
    tagline: string;
    closing: string;
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
      "HERITAGE OF NATIONS (HERNA) is a holding company oriented toward developing activities across several strategic sectors.",
  },
  brand: {
    tagline: "Building the Future.\nHonoring the Legacy.",
    closing: "Building Africa's Legacy, for Generations.",
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
    downloadProfile: "Company Profile",
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
    { href: "#identity", label: "Identity" },
    { href: "#divisions", label: "Divisions" },
    { href: "#partners", label: "Partners" },
    { href: "#contact", label: "Contact" },
  ],
  hero: {
    actLabel: "Legacy",
    line1: "Building Africa's",
    line2: "enduring legacy.",
    subtitle:
      "A pan-African investment holding based in Cotonou, structuring projects across strategic sectors.",
    primaryCta: "Explore divisions",
    secondaryCta: "Discover HERNA",
  },
  about: {
    label: "About",
    headline: "A holding built for Africa’s next generation of value.",
    body: "HERITAGE OF NATIONS (HERNA) is a pan-African investment holding company based in Benin. We identify, finance and develop high-impact projects across strategic sectors. Our ambition is to build a lasting legacy through sustainable investments.",
  },
  mediaBand: {
    label: "Footprint",
    headline: "Capital deployed where progress is built.",
    body: "From infrastructure and energy to industry and agriculture, HERNA channels investment into sectors that shape long-term prosperity.",
  },
  identity: {
    label: "Our Identity",
    headline: "Vision, Mission & Approach",
  },
  vision: {
    label: "Vision",
    body: "To become a catalyst for Africa's economic transformation through strategic investments.",
  },
  mission: {
    label: "Mission",
    body: "To design, structure and support sustainable projects creating value for investors, communities and future generations.",
  },
  divisions: {
    sectionLabel: "Strategic Business Units",
    actLabel: "Divisions",
    headline: "Driving Growth Across 5 Strategic Business Units",
    intro:
      "We channel our expertise through distinct divisions, each focused on critical sectors essential for Africa's progress.",
    items: [
      {
        id: "equipment",
        title: "Equipment",
        description:
          "Supply, distribution, and maintenance of advanced technical and industrial solutions.",
        body: "Our Equipment division supplies, distributes and maintains advanced technical and industrial solutions for construction, mining and agricultural operators across the region. We work with established manufacturers to guarantee reliability, spare-parts availability and responsive after-sales support. This foundation allows partner companies to keep critical fleets and machinery running with confidence.",
        focus: [
          "Heavy machinery supply",
          "Spare parts distribution",
          "Preventive maintenance",
          "After-sales support",
        ],
        accent: "#8e322a",
        imageSrc: "/divisions/equipment.png",
      },
      {
        id: "real-estate",
        title: "Real Estate & Infrastructure",
        description:
          "Innovative real estate development, robust construction, and essential infrastructure projects.",
        body: "The Real Estate & Infrastructure division designs and delivers residential, commercial and public infrastructure projects that meet rising urban demand. From land structuring to construction execution, we coordinate design, financing and delivery under a single accountable framework. Our teams favor durable materials and building practices suited to the region's climate and growth trajectory.",
        focus: [
          "Urban & residential development",
          "Commercial real estate",
          "Public infrastructure",
          "Construction project management",
        ],
        accent: "#D8D6CE",
        imageSrc: "/divisions/real-estate.png",
      },
      {
        id: "mining",
        title: "Mining",
        description:
          "Exploration, development, and support of responsible and sustainable mining projects.",
        body: "Our Mining division explores, develops and supports responsible extraction projects, working alongside technical partners and local authorities. We place particular emphasis on rigorous environmental and community engagement standards throughout the project lifecycle. This approach positions HERNA as a long-term contributor to the sector's sustainable development.",
        focus: [
          "Exploration & geological studies",
          "Project development",
          "Environmental stewardship",
          "Community engagement",
        ],
        accent: "#B8934A",
        imageSrc: "/divisions/mining.png",
      },
      {
        id: "agriculture",
        title: "Agriculture & Livestock",
        description:
          "Agro-industry development, advanced processing, and enhancement of local value chains.",
        body: "The Agriculture & Livestock division develops agro-industrial capacity, from primary production to advanced processing, strengthening local value chains. We invest in facilities and partnerships that improve yield, traceability and market access for producers. The division's ambition is to help transform raw output into higher-value goods across the region.",
        focus: [
          "Agro-industrial processing",
          "Livestock development",
          "Value chain integration",
          "Producer partnerships",
        ],
        accent: "#2F4A3B",
        imageSrc: "/divisions/agriculture.png",
      },
      {
        id: "energy",
        title: "Energy",
        description:
          "Comprehensive electrical solutions, cutting-edge renewable energy, and energy efficiency initiatives.",
        body: "Our Energy division delivers comprehensive electrical solutions alongside renewable generation and energy efficiency initiatives. We support public and private clients in expanding reliable access to power while reducing environmental impact. The division combines engineering expertise with a long-term view of the continent's energy transition.",
        focus: [
          "Electrical engineering solutions",
          "Renewable energy generation",
          "Energy efficiency",
          "Grid & access projects",
        ],
        accent: "#2E5C8A",
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
    label: "Approach",
    intro:
      "Every HERNA endeavor is built upon a foundation of five unwavering principles that define our approach and commitment.",
    values: [
      {
        title: "Professionalism",
        description:
          "Achieving operational excellence and rigorous execution in every project.",
      },
      {
        title: "Quality",
        description:
          "Upholding international standards across all our diverse projects and operations.",
      },
      {
        title: "Innovation",
        description:
          "Developing tailored and forward-thinking solutions for unique African challenges.",
      },
      {
        title: "Partnership",
        description:
          "Cultivating strategic alliances for profound and sustainable impact.",
      },
      {
        title: "Sustainable Development",
        description:
          "Championing economic growth that profoundly respects both the environment and its people.",
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
        role: "Strategic collaborator",
        phone: "[+229] 0197298070",
        phoneTel: "+2290197298070",
        logoBg: "transparent",
        logoSrc: "/partners/tpg-clear.png",
      },
      {
        id: "hmd",
        name: "HMD",
        role: "Partner contributing specialized expertise to the portfolio",
        phone: null,
        phoneTel: null,
        logoBg: "transparent",
        logoSrc: "/partners/hmd-clear.png",
      },
      {
        id: "osgb",
        name: "OSGB — Oluwa Shola Global Business",
        role: "Partner for concrete solutions in Africa",
        phone: "[+229] 0197091910",
        phoneTel: "+2290197091910",
        logoBg: "transparent",
        logoSrc: "/partners/osgb-clear.png",
      },
      {
        id: "agetip",
        name: "AGETIP",
        role: "Strategic partner",
        phone: null,
        phoneTel: null,
        logoBg: "transparent",
        logoSrc: "/partners/agetip.svg",
      },
    ],
  },
  contact: {
    actLabel: "Contact",
    title: "Connect with HERNA HOLDING",
    invite:
      "We invite you to reach out and explore how we can collaborate to build a prosperous future for Africa.",
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
      "This policy explains how HERITAGE OF NATIONS (HERNA) collects and uses personal information submitted through herna.vercel.app and related contact channels.",
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
