"use client";

import {
  useDictionary,
  useLocale,
} from "@/components/providers/LocaleProvider";
import { brandAssets } from "@/content/brand";
import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  const dictionary = useDictionary();
  const { locale } = useLocale();
  const address = brandAssets.address[locale];
  const buildHref = (href: string) => `/${locale}${href}`;

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0d1520] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 0% 0%, rgba(201,162,75,0.12), transparent 40%), radial-gradient(ellipse at 100% 100%, rgba(90,122,154,0.15), transparent 45%)",
        }}
        aria-hidden
      />

      <div className="container-herna relative grid gap-10 py-12 sm:gap-12 sm:py-16 md:grid-cols-12 md:gap-10 md:py-20">
        <div className="md:col-span-5">
          <div className="inline-flex">
            <Image
              src={brandAssets.logoClearSrc}
              alt={brandAssets.holdingName}
              width={200}
              height={72}
              className="h-12 w-auto object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] sm:h-14"
            />
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
            {dictionary.brand.closing}
          </p>
          <div className="mt-8 space-y-1.5 text-sm text-white/70">
            <p className="font-display text-base text-white">
              {dictionary.contact.entity}
            </p>
            <p>{address}</p>
            <p>
              <a
                href={`tel:${brandAssets.phoneTel}`}
                className="transition hover:text-[color:var(--maroon)]"
              >
                {brandAssets.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${brandAssets.email}`}
                className="transition hover:text-[color:var(--maroon)]"
              >
                {brandAssets.email}
              </a>
            </p>
          </div>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
            {dictionary.ui.menu}
          </p>
          <ul className="mt-5 space-y-3">
            {dictionary.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={buildHref(link.href)}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">
            {dictionary.ui.legalNotice}
          </p>
          <ul className="mt-5 space-y-3">
            <li>
              <Link
                href={`/${locale}/legal-notice`}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {dictionary.ui.legalNotice}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/privacy-policy`}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {dictionary.ui.privacyPolicy}
              </Link>
            </li>
            <li>
              <a
                href={buildHref("#contact")}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {dictionary.ui.contactShort}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-herna flex flex-col gap-3 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>{dictionary.legal.copyright}</p>
          <p className="tracking-wide">{brandAssets.fullName}</p>
        </div>
      </div>
    </footer>
  );
}
