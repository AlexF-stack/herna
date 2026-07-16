export const brandAssets = {
  name: "HERNA",
  holdingName: "HERNA HOLDING",
  fullName: "HERITAGE OF NATIONS",
  /** Transparent SVG lockup — light surfaces */
  logoSrc: "/brand/herna-logo-clear.svg",
  logoClearSrc: "/brand/herna-logo-clear.svg",
  /** Transparent SVG lockup — dark surfaces (white tagline) */
  logoOnDarkSrc: "/brand/herna-logo-on-dark.svg",
  /** Transparent raster (plaquette crop, alpha) */
  logoClearPngSrc: "/brand/herna-logo-clear.png",
  logoNavClearSrc: "/brand/herna-logo-nav-clear.png",
  /** Transparent raster for OG / JSON-LD (no plate) */
  logoOpaqueSrc: "/brand/herna-logo-clear.png",
  logoOfficialSrc: "/brand/herna-logo-clear.svg",
  logoPlaquetteSrc: "/brand/herna-logo-clear.png",
  coverSrc: "/brand/herna-cover.jpg",
  markSrc: "/brand/herna-mark.svg",
  markClearSrc: "/brand/herna-mark-clear.png",
  markGoldSrc: "/brand/herna-mark-clear.png",
  ceoPortraitSrc: "/brand/ceo-wayisuhu-dossou.png",
  companyProfileSrc: "/company-profile.pdf",
  companyProfileDownloadName: "HERNA-Company-Profile-2026.pdf",
  website: "herna-group.com",
  websiteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://herna.vercel.app",
  portalUrl: "https://www.herna-group.com",
  email: "contact@herna-group.com",
  phone: "+229 01 96 39 99 88",
  phoneTel: "+2290196399988",
  founded: 2012,
  ceo: {
    name: "Wayisuhu Zannude Dossou",
    titleEn: "President & Chief Executive Officer",
    titleFr: "Président & Directeur Général",
  },
  address: {
    en: "Embassy District, Cotonou, Republic of Benin",
    fr: "Quartier des Ambassades, Cotonou, République du Bénin",
  },
  presence: {
    en: "Pan-African",
    fr: "Panafricaine",
  },
} as const;
