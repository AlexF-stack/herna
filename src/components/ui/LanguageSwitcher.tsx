"use client";

import { locales, type Locale } from "@/i18n/config";
import { useLocale } from "@/components/providers/LocaleProvider";
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
          <a
            key={l}
            href={href}
            hrefLang={l}
            className={
              active
                ? "font-semibold text-[color:var(--gold)]"
                : "text-[color:var(--muted)] transition-colors hover:text-[color:var(--ink)]"
            }
            aria-current={active ? "page" : undefined}
          >
            {l}
          </a>
        );
      })}
    </div>
  );
}
