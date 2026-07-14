"use client";

import { locales, type Locale } from "@/i18n/config";
import { useLocale } from "@/components/providers/LocaleProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";

function stripLocale(pathname: string) {
  return pathname.replace(/^\/(en|fr)(?=\/|$)/, "") || "";
}

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale } = useLocale();
  const pathname = usePathname() || "/";
  const rest = stripLocale(pathname);

  return (
    <div
      className={`flex items-center gap-2 text-xs uppercase tracking-[0.12em] ${className}`}
      role="navigation"
      aria-label="Language"
    >
      {locales.map((l: Locale) => {
        const active = l === locale;
        const href = `/${l}${rest}`;
        return (
          <Link
            key={l}
            href={href}
            hrefLang={l}
            prefetch
            className={
              active
                ? "font-semibold text-[color:var(--gold)]"
                : "text-[color:var(--muted)] transition-colors hover:text-[color:var(--ink)]"
            }
            aria-current={active ? "page" : undefined}
            onClick={(e) => {
              if (active) {
                e.preventDefault();
                return;
              }
              // Preserve in-page hash (usePathname omits it)
              const hash =
                typeof window !== "undefined" ? window.location.hash : "";
              if (hash) {
                e.preventDefault();
                window.location.assign(`${href}${hash}`);
              }
            }}
          >
            {l}
          </Link>
        );
      })}
    </div>
  );
}
