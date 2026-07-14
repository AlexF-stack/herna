import type { Dictionary } from "@/i18n/dictionaries/en";

export const fr: Dictionary = {
  meta: {
    title: "HERNA — Héritage des Nations",
    description:
      "HERITAGE OF NATIONS (HERNA) est une holding orientée vers le développement d'activités dans plusieurs secteurs stratégiques.",
  },
  brand: {
    tagline: "Construire l'avenir.\nHonorer l'héritage.",
    closing: "Construire l'héritage de l'Afrique, pour les générations.",
  },
  prologue: {
    lines: [
      "Chaque nation laisse un héritage.",
      "Certaines le reçoivent.",
      "D'autres le construisent.",
    ],
    skip: "Passer",
  },
  ui: {
    skipToContent: "Aller au contenu",
    loading: "Chargement",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    menu: "Menu",
    close: "Fermer",
    legalNotice: "Mentions légales",
    privacyPolicy: "Politique de confidentialité",
    backHome: "Retour à l'accueil",
    sent: "Envoyé.",
    formError: "Veuillez remplir tous les champs.",
    name: "Nom",
    email: "E-mail",
    message: "Message",
    send: "Envoyer",
    address: "Adresse",
    phone: "Téléphone",
    website: "Site web",
    contactForm: "Formulaire de contact",
    contactShort: "Contact",
    downloadProfile: "Profil d'entreprise",
    explore: "Explorer",
    themeLight: "Mode clair",
    themeDark: "Mode sombre",
    mapPlaceholder: "Cotonou, Bénin — carte (placeholder)",
    viewDivision: "Voir la division",
    allDivisions: "Toutes les divisions",
    insightsNav: "Actualités",
    backToDivisions: "Retour aux divisions",
  },
  nav: [
    { href: "#about", label: "À propos" },
    { href: "#identity", label: "Identité" },
    { href: "#divisions", label: "Divisions" },
    { href: "#partners", label: "Partenaires" },
    { href: "#contact", label: "Contact" },
  ],
  hero: {
    actLabel: "Héritage",
    line1: "Bâtir l'héritage",
    line2: "durable de l'Afrique.",
    subtitle:
      "Une holding d'investissement panafricaine basée à Cotonou, qui structure des projets dans des secteurs stratégiques.",
    primaryCta: "Explorer les divisions",
    secondaryCta: "Découvrir HERNA",
  },
  about: {
    label: "À propos",
    headline: "Une holding pensée pour la prochaine génération de valeur en Afrique.",
    body: "HERITAGE OF NATIONS (HERNA) est une holding d'investissement panafricaine basée au Bénin. Nous identifions, finançons et développons des projets à fort impact dans des secteurs stratégiques. Notre ambition est de bâtir un héritage durable grâce à des investissements responsables.",
  },
  mediaBand: {
    label: "Empreinte",
    headline: "Le capital là où le progrès se construit.",
    body: "Des infrastructures à l'énergie, de l'industrie à l'agriculture, HERNA oriente l'investissement vers les secteurs qui façonnent une prospérité durable.",
  },
  identity: {
    label: "Notre identité",
    headline: "Vision, Mission & Approche",
  },
  vision: {
    label: "Vision",
    body: "Devenir un catalyseur de la transformation économique de l'Afrique grâce à des investissements stratégiques.",
  },
  mission: {
    label: "Mission",
    body: "Concevoir, structurer et accompagner des projets durables créant de la valeur pour les investisseurs, les communautés et les générations futures.",
  },
  divisions: {
    sectionLabel: "Unités stratégiques",
    actLabel: "Divisions",
    headline: "Favoriser la croissance à travers 5 unités stratégiques",
    intro:
      "Nous concentrons notre action à travers des divisions distinctes, chacune dédiée à des secteurs critiques pour le progrès de l'Afrique.",
    items: [
      {
        id: "equipment",
        title: "Équipement",
        description:
          "Fourniture, distribution et maintenance de solutions techniques et industrielles avancées.",
        body: "Notre division Équipement assure la fourniture, la distribution et la maintenance de solutions techniques et industrielles avancées pour les opérateurs du BTP, des mines et de l'agriculture de la région. Nous collaborons avec des fabricants reconnus afin de garantir fiabilité, disponibilité des pièces détachées et un service après-vente réactif. Cette base permet aux entreprises partenaires de maintenir leurs flottes et équipements critiques en fonctionnement en toute confiance.",
        focus: [
          "Fourniture d'engins lourds",
          "Distribution de pièces détachées",
          "Maintenance préventive",
          "Support après-vente",
        ],
        accent: "#8e322a",
        imageSrc: "/divisions/equipment.jpg",
      },
      {
        id: "real-estate",
        title: "Immobilier & Infrastructures",
        description:
          "Développement immobilier innovant, construction robuste et projets d'infrastructures essentielles.",
        body: "La division Immobilier & Infrastructures conçoit et livre des projets résidentiels, commerciaux et d'infrastructures publiques répondant à la demande urbaine croissante. De la structuration foncière à l'exécution des travaux, nous coordonnons conception, financement et livraison au sein d'un cadre unique et responsable. Nos équipes privilégient des matériaux durables et des pratiques de construction adaptées au climat et à la trajectoire de croissance de la région.",
        focus: [
          "Développement urbain & résidentiel",
          "Immobilier commercial",
          "Infrastructures publiques",
          "Gestion de projets de construction",
        ],
        accent: "#D8D6CE",
        imageSrc: "/divisions/real-estate.jpg",
      },
      {
        id: "mining",
        title: "Mines",
        description:
          "Exploration, développement et accompagnement de projets miniers responsables et durables.",
        body: "Notre division Mines explore, développe et accompagne des projets d'extraction responsables, en lien avec des partenaires techniques et les autorités locales. Nous accordons une attention rigoureuse aux normes environnementales et à l'engagement communautaire à chaque étape du projet. Cette approche positionne HERNA comme un acteur de long terme au service du développement durable du secteur.",
        focus: [
          "Exploration & études géologiques",
          "Développement de projets",
          "Gestion environnementale",
          "Engagement communautaire",
        ],
        accent: "#B8934A",
        imageSrc: "/divisions/mining.jpg",
      },
      {
        id: "agriculture",
        title: "Agriculture & Élevage",
        description:
          "Développement agro-industriel, transformation avancée et renforcement des chaînes de valeur locales.",
        body: "La division Agriculture & Élevage développe les capacités agro-industrielles, de la production primaire à la transformation avancée, en renforçant les chaînes de valeur locales. Nous investissons dans des installations et des partenariats qui améliorent le rendement, la traçabilité et l'accès aux marchés pour les producteurs. L'ambition de la division est de contribuer à transformer la production brute en biens à plus forte valeur ajoutée dans la région.",
        focus: [
          "Transformation agro-industrielle",
          "Développement de l'élevage",
          "Intégration des chaînes de valeur",
          "Partenariats producteurs",
        ],
        accent: "#2F4A3B",
        imageSrc: "/divisions/agriculture.jpg",
      },
      {
        id: "energy",
        title: "Énergie",
        description:
          "Solutions électriques complètes, énergies renouvelables de pointe et initiatives d'efficacité énergétique.",
        body: "Notre division Énergie propose des solutions électriques complètes ainsi que des initiatives de production renouvelable et d'efficacité énergétique. Nous accompagnons les clients publics et privés dans l'élargissement d'un accès fiable à l'électricité tout en réduisant l'impact environnemental. La division combine expertise technique et vision de long terme de la transition énergétique du continent.",
        focus: [
          "Solutions d'ingénierie électrique",
          "Production d'énergie renouvelable",
          "Efficacité énergétique",
          "Projets de réseau & d'accès",
        ],
        accent: "#2E5C8A",
        imageSrc: "/divisions/energy.jpg",
      },
    ],
  },
  insights: {
    label: "Actualités",
    headline: "Les perspectives de la holding.",
    intro:
      "Les notes stratégiques et communications officielles paraîtront ici dès qu'elles seront publiées.",
    readMore: "Lire la suite",
    back: "Retour aux actualités",
    items: [],
  },
  approach: {
    label: "Approche",
    intro:
      "Chaque initiative HERNA repose sur cinq principes constants qui définissent notre approche et notre engagement.",
    values: [
      {
        title: "Professionnalisme",
        description:
          "Viser l'excellence opérationnelle et une exécution rigoureuse dans chaque projet.",
      },
      {
        title: "Qualité",
        description:
          "Respecter les normes internationales à travers l'ensemble de nos projets et opérations.",
      },
      {
        title: "Innovation",
        description:
          "Développer des solutions sur mesure et prospectives face aux défis spécifiques de l'Afrique.",
      },
      {
        title: "Partenariat",
        description:
          "Cultiver des alliances stratégiques pour un impact profond et durable.",
      },
      {
        title: "Développement durable",
        description:
          "Promouvoir une croissance économique qui respecte profondément l'environnement et les populations.",
      },
    ],
  },
  partners: {
    label: "Partenaires",
    headline: "Alliances stratégiques",
    items: [
      {
        id: "tpg",
        name: "TPG — The Pertinent Group",
        role: "Collaborateur stratégique",
        phone: "[+229] 0197298070",
        phoneTel: "+2290197298070",
        logoBg: "transparent",
        logoSrc: "/partners/tpg-clear.png",
      },
      {
        id: "hmd",
        name: "HMD",
        role: "Partenaire apportant une expertise spécialisée au portefeuille",
        phone: null,
        phoneTel: null,
        logoBg: "transparent",
        logoSrc: "/partners/hmd-clear.png",
      },
      {
        id: "osgb",
        name: "OSGB — Oluwa Shola Global Business",
        role: "Partenaire pour des solutions concrètes en Afrique",
        phone: "[+229] 0197091910",
        phoneTel: "+2290197091910",
        logoBg: "transparent",
        logoSrc: "/partners/osgb-clear.png",
      },
      {
        id: "agetip",
        name: "AGETIP",
        role: "Partenaire stratégique",
        phone: null,
        phoneTel: null,
        logoBg: "transparent",
        logoSrc: "/partners/agetip.svg",
      },
    ],
  },
  contact: {
    actLabel: "Contact",
    title: "Connectez-vous avec HERNA HOLDING",
    invite:
      "Nous vous invitons à nous contacter pour explorer comment collaborer afin de bâtir un avenir prospère pour l'Afrique.",
    partnerContactsLabel: "Contacts partenaires",
    entity: "HERNA HOLDING",
    partnerPhones: [
      { label: "TPG", phone: "[+229] 0197298070", phoneTel: "+2290197298070" },
      { label: "OSGB", phone: "[+229] 0197091910", phoneTel: "+2290197091910" },
    ],
  },
  legal: {
    copyright: `© ${new Date().getFullYear()} HERITAGE OF NATIONS (HERNA). Tous droits réservés.`,
    noticeTitle: "Mentions légales",
    noticeExtra:
      "Les détails d'immatriculation complémentaires seront publiés ici dès qu'ils seront fournis.",
    privacyTitle: "Politique de confidentialité",
    privacyIntro:
      "Cette page décrit la manière dont HERITAGE OF NATIONS (HERNA) traite les informations soumises via www.herna-group.com.",
    privacyContactHeading: "Contact",
    privacyContactBody: "Pour toute demande relative à la confidentialité, contactez",
    privacyDataHeading: "Données collectées",
    privacyDataBody:
      "Lorsque vous utilisez le formulaire de contact, nous pouvons traiter votre nom, votre adresse e-mail et le contenu de votre message uniquement pour répondre à votre demande.",
    privacyRetentionHeading: "Conservation",
    privacyRetentionBody:
      "Les messages sont conservés uniquement aussi longtemps que nécessaire pour traiter votre demande, sauf si une durée plus longue est exigée par la loi applicable.",
    privacyPlaceholder:
      "Ce résumé est un placeholder fonctionnel en attendant une validation juridique complète.",
  },
};
