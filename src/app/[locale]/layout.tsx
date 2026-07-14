import { LocaleProvider } from "@/components/providers/LocaleProvider";
import { SecondaryChrome } from "@/components/site/SecondaryChrome";
import { JsonLd } from "@/components/seo/JsonLd";
import { brandAssets } from "@/content/brand";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);

  return {
    metadataBase: new URL(brandAssets.websiteUrl),
    title: {
      default: dictionary.meta.title,
      template: `%s · HERNA`,
    },
    description: dictionary.meta.description,
    keywords: [
      "HERNA",
      "Heritage of Nations",
      "HERNA HOLDING",
      "Cotonou",
      "Benin",
      "Africa",
      "investment holding",
      "pan-African",
    ],
    authors: [{ name: brandAssets.holdingName }],
    creator: brandAssets.holdingName,
    publisher: brandAssets.holdingName,
    category: "business",
    icons: {
      icon: [
        { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon.png", sizes: "48x48", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
      shortcut: "/favicon.png",
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        fr: "/fr",
        "x-default": "/en",
      },
    },
    openGraph: {
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      url: `/${locale}`,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: locale === "fr" ? ["en_US"] : ["fr_FR"],
      type: "website",
      siteName: "HERNA",
      images: [
        {
          url: brandAssets.logoSrc,
          width: 1200,
          height: 630,
          alt: brandAssets.holdingName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.meta.title,
      description: dictionary.brand.tagline,
      images: [brandAssets.logoSrc],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);

  return (
    <LocaleProvider locale={locale} dictionary={dictionary}>
      <JsonLd locale={locale} dictionary={dictionary} />
      <SecondaryChrome>{children}</SecondaryChrome>
    </LocaleProvider>
  );
}
