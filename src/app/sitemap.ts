import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { brandAssets } from "@/content/brand";

const divisionSlugs = [
  "equipment",
  "real-estate",
  "mining",
  "agriculture",
  "energy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = brandAssets.websiteUrl;
  const staticPaths = ["", "/legal-notice", "/privacy-policy"];
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${base}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.4,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${base}/${l}${path}`]),
          ),
        },
      });
    }
    for (const slug of divisionSlugs) {
      const path = `/divisions/${slug}`;
      entries.push({
        url: `${base}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${base}/${l}${path}`]),
          ),
        },
      });
    }
  }

  return entries;
}
