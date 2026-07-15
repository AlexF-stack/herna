import { brandAssets } from "@/content/brand";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { localeUrl } from "@/lib/seo";

export function JsonLd({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const organization = {
    "@type": "Organization",
    "@id": `${brandAssets.websiteUrl}/#organization`,
    name: brandAssets.holdingName,
    alternateName: [brandAssets.name, brandAssets.fullName],
    url: brandAssets.websiteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${brandAssets.websiteUrl}${brandAssets.logoOpaqueSrc}`,
    },
    description: dictionary.meta.description,
    email: brandAssets.email,
    telephone: brandAssets.phoneTel,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cotonou",
      addressCountry: "BJ",
    },
    areaServed: "Africa",
    inLanguage: locale,
  };

  const website = {
    "@type": "WebSite",
    "@id": `${brandAssets.websiteUrl}/#website`,
    url: brandAssets.websiteUrl,
    name: brandAssets.name,
    description: dictionary.meta.description,
    publisher: { "@id": `${brandAssets.websiteUrl}/#organization` },
    inLanguage: [locale],
    potentialAction: {
      "@type": "ReadAction",
      target: [localeUrl(locale), localeUrl(locale === "en" ? "fr" : "en")],
    },
  };

  const data = {
    "@context": "https://schema.org",
    "@graph": [organization, website],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
