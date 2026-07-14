import { brandAssets } from "@/content/brand";
import { formatInsightDate } from "@/i18n/formatDate";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

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
  const dictionary = getDictionary(raw as Locale);
  return {
    title: dictionary.insights.headline,
    description: dictionary.insights.intro,
    alternates: { canonical: `/${raw}/insights` },
  };
}

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);

  return (
    <main className="min-h-screen bg-[color:var(--bg)] text-[color:var(--ink)]">
      <div className="container-herna py-16 md:py-24">
        <Link
          href={`/${locale}`}
          className="link-underline text-sm text-[color:var(--gold)]"
        >
          ← {brandAssets.name}
        </Link>

        <div className="mt-10 max-w-2xl">
          <p className="label-act">{dictionary.insights.label}</p>
          <h1 className="heading-display mt-4 text-display-lg">
            {dictionary.insights.headline}
          </h1>
          <p className="mt-5 text-body-lg text-[color:var(--muted)]">
            {dictionary.insights.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dictionary.insights.items.map((insight) => (
            <Link
              key={insight.id}
              href={`/${locale}/insights/${insight.id}`}
              className="group flex h-full flex-col rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg-elevated)] p-6 shine-border transition duration-500 hover:border-[color:var(--gold)]/35 md:p-7"
            >
              <div className="flex items-center gap-3 text-xs text-[color:var(--muted)]">
                <span className="rounded-full bg-[color:var(--surface)] px-2.5 py-1 font-medium uppercase tracking-wide text-[color:var(--gold)]">
                  {insight.category}
                </span>
                <time dateTime={insight.date}>
                  {formatInsightDate(insight.date, locale)}
                </time>
              </div>
              <h2 className="mt-5 font-display text-lg leading-snug text-[color:var(--ink)] md:text-xl">
                {insight.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[color:var(--muted)]">
                {insight.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--gold)] transition group-hover:gap-3">
                {dictionary.insights.readMore}
                <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
