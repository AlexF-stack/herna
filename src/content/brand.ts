export const brandAssets = {
  name: "HERNA",
  holdingName: "HERNA HOLDING",
  fullName: "HERITAGE OF NATIONS",
  /** Official plaquette lockup (transparent PNG) — light & dark surfaces */
  logoSrc: "/brand/herna-logo-clear.png",
  logoClearSrc: "/brand/herna-logo-clear.png",
  /** Same official lockup (gold reads on navy) */
  logoOnDarkSrc: "/brand/herna-logo-clear.png",
  /** Transparent raster (plaquette crop, alpha) */
  logoClearPngSrc: "/brand/herna-logo-clear.png",
  logoNavClearSrc: "/brand/herna-logo-nav-clear.png",
  /** Transparent raster for OG / JSON-LD (no plate) */
  logoOpaqueSrc: "/brand/herna-logo-clear.png",
  logoOfficialSrc: "/brand/herna-logo-official.png",
  logoPlaquetteSrc: "/brand/herna-logo-clear.png",
  coverSrc: "/brand/herna-cover.jpg",
  markSrc: "/brand/herna-mark.svg",
  markClearSrc: "/brand/herna-mark-clear.png",
  markGoldSrc: "/brand/herna-mark-clear.png",
  ceoPortraitSrc: "/brand/ceo-wayisuhu-dossou.png",
  companyProfileSrc: "/company-profile.pdf",
  companyProfileDownloadName: "HERNA-Company-Profile-2026.pdf",
  website: "hernaholding.com",
  websiteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hernaholding.com",
  mashalUrl:
    process.env.NEXT_PUBLIC_MASHAL_URL ?? "https://mashal-web.vercel.app",
  portalUrl: "https://www.hernaholding.com",
  email: "contact@hernaholding.com",
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
