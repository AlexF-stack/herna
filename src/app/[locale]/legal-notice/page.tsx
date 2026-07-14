import { brandAssets } from "@/content/brand";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dictionary = getDictionary(raw as Locale);
  return {
    title: dictionary.legal.noticeTitle,
    description: dictionary.legal.noticeTitle,
  };
}

export default async function LegalNoticePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  const address = brandAssets.address[locale];
  const isFr = locale === "fr";

  return (
    <main className="min-h-screen bg-[color:var(--bg)] pb-24 pt-28 text-[color:var(--ink)]">
      <div className="container-herna max-w-3xl">
        <Link href={`/${locale}`} className="link-underline text-sm text-[color:var(--gold)]">
          ← {dictionary.ui.backHome}
        </Link>
        <h1 className="heading-display mt-10 text-display-md">
          {dictionary.legal.noticeTitle}
        </h1>
        <div className="mt-10 space-y-8 text-[color:var(--muted)]">
          <section>
            <h2 className="font-display text-lg text-[color:var(--ink)]">
              {isFr ? "Éditeur" : "Publisher"}
            </h2>
            <p className="mt-3 leading-relaxed">
              <span className="text-[color:var(--ink)]">{brandAssets.holdingName}</span>
              {" — "}
              {brandAssets.fullName} ({brandAssets.name})
            </p>
            <p className="mt-2">{address}</p>
            <p className="mt-2">
              {dictionary.ui.phone}:{" "}
              <a href={`tel:${brandAssets.phoneTel}`} className="text-[color:var(--gold)] hover:underline">
                {brandAssets.phone}
              </a>
            </p>
            <p className="mt-2">
              Email:{" "}
              <a href={`mailto:${brandAssets.email}`} className="text-[color:var(--gold)] hover:underline">
                {brandAssets.email}
              </a>
            </p>
            <p className="mt-2">
              {dictionary.ui.website}:{" "}
              <a href={brandAssets.websiteUrl} className="text-[color:var(--gold)] hover:underline">
                {brandAssets.website}
              </a>
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg text-[color:var(--ink)]">
              {isFr ? "Hébergement" : "Hosting"}
            </h2>
            <p className="mt-3 leading-relaxed">
              {isFr
                ? "Le site est hébergé par Vercel Inc. Les coordonnées d'hébergement seront complétées après mise en production définitive."
                : "This website is hosted by Vercel Inc. Full hosting particulars will be completed after final production launch."}
            </p>
          </section>
          <section>
            <h2 className="font-display text-lg text-[color:var(--ink)]">
              {isFr ? "Propriété intellectuelle" : "Intellectual property"}
            </h2>
            <p className="mt-3 leading-relaxed">
              {isFr
                ? "L'ensemble des contenus (textes, images, marques, logo) est la propriété de HERITAGE OF NATIONS (HERNA), sauf mention contraire. Toute reproduction non autorisée est interdite."
                : "All content (texts, images, trademarks, logo) is owned by HERITAGE OF NATIONS (HERNA) unless otherwise stated. Unauthorized reproduction is prohibited."}
            </p>
          </section>
          <p className="text-sm italic">{dictionary.legal.noticeExtra}</p>
          <p className="text-sm">{dictionary.legal.privacyPlaceholder}</p>
        </div>
      </div>
    </main>
  );
}
