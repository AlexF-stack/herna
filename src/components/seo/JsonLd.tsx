import { brandAssets } from "@/content/brand";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

export function JsonLd({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brandAssets.holdingName,
    alternateName: [brandAssets.name, brandAssets.fullName],
    url: brandAssets.websiteUrl,
    logo: `${brandAssets.websiteUrl}${brandAssets.logoOpaqueSrc}`,
    description: dictionary.meta.description,
    email: brandAssets.email,
    telephone: brandAssets.phoneTel,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cotonou",
      addressCountry: "BJ",
    },
    sameAs: [brandAssets.websiteUrl],
    areaServed: "Africa",
    inLanguage: locale,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
