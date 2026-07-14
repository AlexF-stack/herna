import { SoftImage } from "@/shared/ui/SoftImage";
import { BackLink } from "@/components/site/BackLink";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const divisionSlugs = [
  "equipment",
  "real-estate",
  "mining",
  "agriculture",
  "energy",
] as const;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    divisionSlugs.map((slug) => ({ locale, slug })),
  );
}

function findDivision(locale: Locale, slug: string) {
  const dictionary = getDictionary(locale);
  return dictionary.divisions.items.find((item) => item.id === slug) ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const item = findDivision(raw as Locale, slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.description,
    alternates: {
      canonical: `/${raw}/divisions/${slug}`,
    },
    openGraph: {
      title: item.title,
      description: item.description,
      images: [{ url: item.imageSrc }],
    },
  };
}

export default async function DivisionPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = getDictionary(locale);
  const item = findDivision(locale, slug);
  if (!item) notFound();

  return (
    <main className="min-h-screen bg-[color:var(--bg)] text-[color:var(--ink)]">
      <div className="container-herna pb-16 pt-28 md:pb-24 md:pt-32">
        <BackLink href={`/${locale}`}>
          {dictionary.ui.backToDivisions}
        </BackLink>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-[color:var(--line)]">
              <SoftImage
                src={item.imageSrc}
                alt={item.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
                wrapperClassName="absolute inset-0"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-[3px]"
                style={{ background: item.accent }}
                aria-hidden
              />
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="label-act">{dictionary.divisions.actLabel}</p>
            <h1 className="heading-display mt-4 text-display-lg">
              {item.title}
            </h1>
            <p className="mt-6 text-body-lg text-[color:var(--muted)]">
              {item.body}
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {item.focus.map((focus) => (
                <li
                  key={focus}
                  className="flex items-start gap-2.5 rounded-xl border border-[color:var(--line)] bg-[color:var(--bg-elevated)] px-4 py-3 text-sm text-[color:var(--ink)]"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: item.accent }}
                    aria-hidden
                  />
                  {focus}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href={`/${locale}#contact`}
                className="btn-primary"
                data-cursor-hover
              >
                {dictionary.ui.contactShort}
              </Link>
              <Link
                href={`/${locale}#divisions`}
                className="text-sm font-medium tracking-wide text-[color:var(--muted)] underline-offset-4 transition hover:text-[color:var(--ink)] hover:underline"
              >
                {dictionary.ui.allDivisions}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
