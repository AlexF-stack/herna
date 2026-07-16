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

/** Stable date so crawlers don't see a fake "always updated" sitemap. */
const LAST_MOD = new Date("2026-07-16");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = brandAssets.websiteUrl.replace(/\/$/, "");
  const staticPaths = ["", "/legal-notice", "/privacy-policy"];
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      const languages = Object.fromEntries(
        locales.map((l) => [l, `${base}/${l}${path}`]),
      );
      entries.push({
        url: `${base}/${locale}${path}`,
        lastModified: LAST_MOD,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.4,
        alternates: { languages },
      });
    }
    for (const slug of divisionSlugs) {
      const path = `/divisions/${slug}`;
      const languages = Object.fromEntries(
        locales.map((l) => [l, `${base}/${l}${path}`]),
      );
      entries.push({
        url: `${base}/${locale}${path}`,
        lastModified: LAST_MOD,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: { languages },
      });
    }
  }

  return entries;
}
