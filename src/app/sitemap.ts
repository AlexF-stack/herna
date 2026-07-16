import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { brandAssets } from "@/content/brand";

const divisionSlugs = [
  "equipment",
  "real-estate",
  "mining",
  "agriculture",
  "energy",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = brandAssets.websiteUrl.replace(/\/$/, "");
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${base}/${locale}`,
      lastModified: new Date("2026-07-16"),
      changeFrequency: "weekly",
      priority: 1,
    });
    entries.push({
      url: `${base}/${locale}/legal-notice`,
      lastModified: new Date("2026-07-16"),
      changeFrequency: "monthly",
      priority: 0.4,
    });
    entries.push({
      url: `${base}/${locale}/privacy-policy`,
      lastModified: new Date("2026-07-16"),
      changeFrequency: "monthly",
      priority: 0.4,
    });
    for (const slug of divisionSlugs) {
      entries.push({
        url: `${base}/${locale}/divisions/${slug}`,
        lastModified: new Date("2026-07-16"),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return entries;
}
