"use client";

import {
  useDictionary,
  useLocale,
} from "@/components/providers/LocaleProvider";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { brandAssets } from "@/content/brand";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  visible: boolean;
};

export function SiteNav({ visible }: Props) {
  const dictionary = useDictionary();
  const { locale } = useLocale();
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close drawer on locale change */
  useEffect(() => {
    setOpen(false);
  }, [locale]);

  const buildHref = (href: string) => `/${locale}${href}`;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!visible) return null;

  const solid = scrolled || open;
  const overHero = !solid;
  const linkTone = overHero
    ? "text-white/75 hover:text-white"
    : "text-[color:var(--ink)]/70 hover:text-[color:var(--ink)]";
  const iconTone = overHero ? "text-white" : "text-[color:var(--ink)]";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter,box-shadow] duration-500 ${
        solid
          ? "border-b border-[color:var(--line)] bg-[color:var(--nav-bg)] shadow-[0_10px_40px_rgba(22,48,72,0.08)] backdrop-blur-xl"
          : "border-b border-transparent bg-gradient-to-b from-black/35 to-transparent"
      }`}
    >
      <div className="container-herna flex items-center justify-between gap-3 py-3 sm:py-3.5 md:py-4">
        <a
          href={buildHref("#hero")}
          className="relative z-50 flex shrink-0 items-center rounded-md bg-white px-2 py-1.5 shadow-sm sm:px-2.5"
          onClick={() => setOpen(false)}
          aria-label={brandAssets.name}
          data-cursor-hover
        >
          <Image
            src={brandAssets.logoSrc}
            alt={brandAssets.holdingName}
            width={150}
            height={52}
            className="h-6 w-auto sm:h-7 md:h-8"
            priority
          />
        </a>

        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 xl:block"
          aria-label="Primary"
        >
          <ul className="flex items-center gap-0.5">
            {dictionary.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={buildHref(link.href)}
                  data-cursor-hover
                  className={`rounded-full px-3 py-2 text-[0.78rem] font-medium tracking-wide transition-colors ${linkTone}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative z-50 flex items-center gap-1 sm:gap-2">
          <LanguageSwitcher
            className={`hidden sm:flex ${
              overHero
                ? "[&_a]:text-white/65 [&_a[aria-current=page]]:text-[color:var(--gold-soft)] [&_a:hover]:text-white"
                : "[&_a]:text-[color:var(--muted)] [&_a[aria-current=page]]:text-[color:var(--gold)] [&_a:hover]:text-[color:var(--ink)]"
            }`}
          />
          <a
            href={buildHref("#contact")}
            data-cursor-hover
            className="btn-primary !min-h-9 !px-3.5 !py-2 text-sm max-[380px]:hidden"
          >
            {dictionary.ui.contactShort}
          </a>
          <button
            type="button"
            className={`flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-black/10 xl:hidden ${iconTone}`}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? dictionary.ui.closeMenu : dictionary.ui.openMenu}
            onClick={() => setOpen((v) => !v)}
            data-cursor-hover
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <span aria-hidden className="flex w-5 flex-col items-end gap-1.5">
                <span
                  className={`block h-px w-full ${overHero ? "bg-white" : "bg-[color:var(--ink)]"}`}
                />
                <span
                  className={`block h-px w-3.5 ${overHero ? "bg-white" : "bg-[color:var(--ink)]"}`}
                />
              </span>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="site-menu"
            key="mobile-menu"
            className="fixed inset-0 z-[60] xl:hidden"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? undefined : { opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label={dictionary.ui.menu}
          >
            <div className="absolute inset-0 bg-[#f7f4ef]" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 100% 0%, rgba(184,146,47,0.2), transparent 42%), radial-gradient(ellipse at 0% 100%, rgba(22,48,72,0.06), transparent 40%)",
              }}
              aria-hidden
            />

            <div className="relative flex h-[100dvh] flex-col">
              <div className="container-herna flex items-center justify-between py-3.5">
                <a
                  href={buildHref("#hero")}
                  className="flex items-center rounded-md bg-white px-2.5 py-1.5 shadow-sm"
                  onClick={() => setOpen(false)}
                  aria-label={brandAssets.name}
                >
                  <Image
                    src={brandAssets.logoSrc}
                    alt=""
                    width={140}
                    height={48}
                    className="h-7 w-auto"
                  />
                </a>
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[color:var(--ink)] shadow-sm"
                  aria-label={dictionary.ui.closeMenu}
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </div>

              <nav className="container-herna flex-1 overflow-y-auto pb-6 pt-4">
                <ul className="flex flex-col">
                  {dictionary.nav.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={reduced ? false : { opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.05 + i * 0.05,
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <a
                        href={buildHref(link.href)}
                        className="group flex items-center justify-between border-b border-[color:var(--line)] py-4"
                        onClick={() => setOpen(false)}
                      >
                        <span className="flex items-baseline gap-3">
                          <span className="font-mono text-[0.65rem] text-[color:var(--gold)]">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="font-display text-[clamp(1.7rem,7vw,2.4rem)] text-[color:var(--ink)] group-active:text-[color:var(--gold)]">
                            {link.label}
                          </span>
                        </span>
                        <span
                          className="text-[color:var(--gold)] opacity-60"
                          aria-hidden
                        >
                          →
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="container-herna space-y-5 border-t border-[color:var(--line)] pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-5">
                <a
                  href={buildHref("#contact")}
                  className="btn-primary w-full"
                  onClick={() => setOpen(false)}
                >
                  {dictionary.ui.contactShort}
                </a>
                <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-[color:var(--muted)]">
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={`/${locale}/legal-notice`}
                      className="hover:text-[color:var(--ink)]"
                      onClick={() => setOpen(false)}
                    >
                      {dictionary.ui.legalNotice}
                    </Link>
                    <Link
                      href={`/${locale}/privacy-policy`}
                      className="hover:text-[color:var(--ink)]"
                      onClick={() => setOpen(false)}
                    >
                      {dictionary.ui.privacyPolicy}
                    </Link>
                  </div>
                  <LanguageSwitcher className="[&_a[aria-current=page]]:text-[color:var(--gold)]" />
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
