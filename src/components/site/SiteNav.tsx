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
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  visible: boolean;
};

export function SiteNav({ visible }: Props) {
  const dictionary = useDictionary();
  const { locale } = useLocale();
  const reduced = useReducedMotion();
  const menuId = useId();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [locale]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
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
  const buildHref = (href: string) => `/${locale}${href}`;
  const address = brandAssets.address[locale];

  const mobileMenu = mounted
    ? createPortal(
        <AnimatePresence>
          {open ? (
            <motion.div
              id={menuId}
              key="mobile-menu"
              className="fixed inset-0 z-[90] xl:hidden"
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduced ? undefined : { opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label={dictionary.ui.menu}
            >
              <div className="absolute inset-0 section-blue" />
              <div
                className="absolute inset-0 opacity-70"
                style={{
                  background:
                    "radial-gradient(ellipse at 100% 0%, rgba(184,146,47,0.16), transparent 45%), radial-gradient(ellipse at 0% 90%, rgba(142,50,42,0.08), transparent 40%)",
                }}
                aria-hidden
              />

              <motion.div
                className="relative flex h-[100dvh] flex-col"
                initial={reduced ? false : { y: 18, opacity: 0.85 }}
                animate={{ y: 0, opacity: 1 }}
                exit={reduced ? undefined : { y: 10, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="container-herna flex items-center justify-between gap-3 pb-3 pt-[max(0.85rem,env(safe-area-inset-top))]">
                  <a
                    href={buildHref("#hero")}
                    className="flex min-w-0 items-center"
                    onClick={() => setOpen(false)}
                    aria-label={brandAssets.name}
                  >
                    <Image
                      src={brandAssets.logoClearSrc}
                      alt=""
                      width={200}
                      height={70}
                      className="h-12 w-auto sm:h-14"
                    />
                  </a>
                  <div className="flex items-center gap-2">
                    <LanguageSwitcher className="rounded-full bg-white/80 px-3 py-2 shadow-sm ring-1 ring-black/5 [&_a[aria-current=page]]:text-[color:var(--maroon)]" />
                    <button
                      type="button"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[color:var(--ink)] shadow-sm ring-1 ring-black/5"
                      aria-label={dictionary.ui.closeMenu}
                      onClick={() => setOpen(false)}
                      data-cursor-hover
                    >
                      <X className="h-5 w-5" aria-hidden />
                    </button>
                  </div>
                </div>

                <nav
                  className="container-herna flex-1 overflow-y-auto overscroll-contain pb-4 pt-2"
                  aria-label={dictionary.ui.menu}
                >
                  <p className="label-act mb-3">{dictionary.ui.menu}</p>
                  <ul className="flex flex-col">
                    {dictionary.nav.map((link, i) => (
                      <motion.li
                        key={link.href}
                        initial={reduced ? false : { opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.04 + i * 0.04,
                          duration: 0.4,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <a
                          href={buildHref(link.href)}
                          className="group flex min-h-[3.4rem] items-center justify-between gap-4 border-b border-[color:var(--line)] py-3.5"
                          onClick={() => setOpen(false)}
                          data-cursor-hover
                        >
                          <span className="flex min-w-0 items-baseline gap-3">
                            <span className="shrink-0 font-mono text-[0.65rem] tracking-wider text-[color:var(--maroon)]">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="font-display text-[clamp(1.45rem,6.2vw,2.1rem)] leading-none text-[color:var(--ink)] transition-colors group-active:text-[color:var(--maroon)]">
                              {link.label}
                            </span>
                          </span>
                          <span
                            className="shrink-0 text-[color:var(--gold)] transition-transform duration-300 group-hover:translate-x-0.5"
                            aria-hidden
                          >
                            ΓåÆ
                          </span>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <div className="container-herna space-y-4 border-t border-[color:var(--line)] bg-white/55 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4 backdrop-blur-md">
                  <a
                    href={buildHref("#contact")}
                    className="btn-primary w-full"
                    onClick={() => setOpen(false)}
                    data-cursor-hover
                  >
                    {dictionary.ui.contactShort}
                  </a>
                  <div className="flex flex-wrap items-start justify-between gap-3 text-sm text-[color:var(--muted)]">
                    <div className="space-y-1">
                      <p className="font-medium text-[color:var(--ink)]">
                        {brandAssets.holdingName}
                      </p>
                      <p>{address}</p>
                      <a
                        href={`tel:${brandAssets.phoneTel}`}
                        className="block text-[color:var(--maroon)] hover:underline"
                      >
                        {brandAssets.phone}
                      </a>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-right">
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
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>,
        document.body,
      )
    : null;

  return (
    <>
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
            className="relative z-50 flex shrink-0 items-center transition-transform duration-500 ease-out hover:scale-[1.03]"
            onClick={() => setOpen(false)}
            aria-label={brandAssets.name}
            data-cursor-hover
          >
            <Image
              src={brandAssets.logoClearSrc}
              alt={brandAssets.holdingName}
              width={220}
              height={76}
              className="h-11 w-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] sm:h-12 md:h-[3.35rem] lg:h-14"
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
                    className={`group relative rounded-full px-3 py-2 text-[0.78rem] font-medium tracking-wide transition-colors duration-300 ${linkTone}`}
                  >
                    {link.label}
                    <span
                      className={`pointer-events-none absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 ${
                        overHero ? "bg-[color:var(--gold-soft)]" : "bg-[color:var(--gold)]"
                      }`}
                      aria-hidden
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="relative z-50 flex items-center gap-1.5 sm:gap-2">
            <LanguageSwitcher
              className={`${
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
              className={`flex h-11 w-11 items-center justify-center rounded-full transition xl:hidden ${
                open
                  ? "bg-white/90 text-[color:var(--ink)] shadow-sm"
                  : `hover:bg-black/10 ${iconTone}`
              }`}
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? dictionary.ui.closeMenu : dictionary.ui.openMenu}
              onClick={() => setOpen((v) => !v)}
              data-cursor-hover
            >
              {open ? (
                <X className="h-5 w-5" aria-hidden />
              ) : (
                <span aria-hidden className="flex w-5 flex-col items-end gap-[5px]">
                  <span
                    className={`block h-[1.5px] w-full rounded-full ${
                      overHero ? "bg-white" : "bg-[color:var(--ink)]"
                    }`}
                  />
                  <span
                    className={`block h-[1.5px] w-3.5 rounded-full ${
                      overHero ? "bg-white" : "bg-[color:var(--ink)]"
                    }`}
                  />
                  <span
                    className={`block h-[1.5px] w-full rounded-full ${
                      overHero ? "bg-white" : "bg-[color:var(--ink)]"
                    }`}
                  />
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {mobileMenu}
    </>
  );
}
