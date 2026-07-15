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
      className={`flex items-center gap-1.5 text-[0.68rem] font-medium uppercase tracking-[0.16em] ${className}`}
      role="navigation"
      aria-label="Language"
    >
      {locales.map((l: Locale, i) => {
        const active = l === locale;
        const href = `/${l}${rest}`;
        return (
          <span key={l} className="flex items-center gap-1.5">
            {i > 0 ? (
              <span className="opacity-30" aria-hidden>
                /
              </span>
            ) : null}
            <a
              href={href}
              hrefLang={l}
              className={
                active
                  ? "opacity-100"
                  : "opacity-45 transition-opacity hover:opacity-90"
              }
              aria-current={active ? "page" : undefined}
            >
              {l}
            </a>
          </span>
        );
      })}
    </div>
  );
}
