import { formatInsightDate } from "@/i18n/formatDate";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { en } from "@/i18n/dictionaries/en";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const insightSlugs = en.insights.items.map((item) => item.id);

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    insightSlugs.map((slug) => ({ locale, slug })),
  );
}

function findInsight(locale: Locale, slug: string) {
  const dictionary = getDictionary(locale);
  return dictionary.insights.items.find((item) => item.id === slug) ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const item = findInsight(raw as Locale, slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.excerpt,
    alternates: {
      canonical: `/${raw}/insights/${slug}`,
    },
  };
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  const item = findInsight(locale, slug);
  if (!item) notFound();

  return (
    <main className="min-h-screen bg-[color:var(--bg)] text-[color:var(--ink)]">
      <article className="container-herna max-w-2xl py-16 md:py-24">
        <Link
          href={`/${locale}/insights`}
          className="link-underline text-sm text-[color:var(--gold)]"
        >
          ← {dictionary.insights.back}
        </Link>

        <div className="mt-8 flex items-center gap-3 text-xs text-[color:var(--muted)]">
          <span className="rounded-full bg-[color:var(--surface)] px-2.5 py-1 font-medium uppercase tracking-wide text-[color:var(--gold)]">
            {item.category}
          </span>
          <time dateTime={item.date}>
            {formatInsightDate(item.date, locale)}
          </time>
        </div>

        <h1 className="heading-display mt-5 text-display-lg">{item.title}</h1>

        <p className="mt-8 text-body-lg text-[color:var(--muted)]">
          {item.excerpt}
        </p>

        <div className="mt-12 border-t border-[color:var(--line)] pt-8">
          <Link
            href={`/${locale}#contact`}
            className="btn-primary"
            data-cursor-hover
          >
            {dictionary.ui.contactShort}
          </Link>
        </div>
      </article>
    </main>
  );
}
