"use client";

import { locales, type Locale } from "@/i18n/config";
import { useLocale } from "@/components/providers/LocaleProvider";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale } = useLocale();
  const pathname = usePathname() || "/";
  const router = useRouter();
  const [, startTransition] = useTransition();

  const rest = pathname.replace(/^\/(en|fr)(?=\/|$)/, "") || "";

  const switchTo = (l: Locale) => {
    const href = `/${l}${rest}`;
    /* Avoid focusing skip-link / first tabbable after locale change */
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    startTransition(() => {
      router.push(href, { scroll: false });
    });
  };

  return (
    <div
      className={`flex items-center gap-2 text-xs uppercase tracking-[0.12em] ${className}`}
      role="navigation"
      aria-label="Language"
    >
      {locales.map((l: Locale) => {
        const active = l === locale;
        return (
          <Link
            key={l}
            href={`/${l}${rest}`}
            hrefLang={l}
            className={
              active
                ? "font-semibold text-[color:var(--gold)]"
                : "text-[color:var(--muted)] transition-colors hover:text-[color:var(--ink)]"
            }
            aria-current={active ? "page" : undefined}
            onClick={(e) => {
              e.preventDefault();
              if (!active) switchTo(l);
            }}
          >
            {l}
          </Link>
        );
      })}
    </div>
  );
}
