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
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  visible: boolean;
};

export function SiteNav({ visible }: Props) {
  const dictionary = useDictionary();
  const { locale } = useLocale();
  const pathname = usePathname() || "";
  const reduced = useReducedMotion();
  const menuId = useId();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const isHome = /^\/(en|fr)\/?$/.test(pathname);
  const homeHref = `/${locale}`;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [locale, pathname]);

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

  /** Secondary pages stay calm; home only goes solid after scroll */
  const solid = !isHome || scrolled || open;
  const overHero = isHome && !solid;
  const linkTone = overHero
    ? "text-white/70 hover:text-white"
    : "text-[color:var(--muted)] hover:text-[color:var(--ink)]";
  const iconTone = overHero ? "text-white" : "text-[color:var(--ink)]";
  const buildHref = (href: string) =>
    isHome ? `/${locale}${href}` : `${homeHref}${href}`;

  const mobileMenu = mounted
    ? createPortal(
        <AnimatePresence>
          {open ? (
            <motion.div
              id={menuId}
              key="mobile-menu"
              className="fixed inset-0 z-[90] lg:hidden"
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduced ? undefined : { opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label={dictionary.ui.menu}
            >
              <div className="absolute inset-0 bg-[color:var(--bg)]" />
              <motion.div
                className="relative flex h-[100dvh] flex-col"
                initial={reduced ? false : { y: 12, opacity: 0.9 }}
                animate={{ y: 0, opacity: 1 }}
                exit={reduced ? undefined : { y: 8, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="container-herna flex items-center justify-between gap-3 border-b border-[color:var(--line)] pb-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
                  <a
                    href={homeHref}
                    className="flex min-w-0 items-center"
                    onClick={() => setOpen(false)}
                    aria-label={brandAssets.name}
                  >
                    <Image
                      src={brandAssets.logoClearSrc}
                      alt=""
                      width={160}
                      height={56}
                      className="h-8 w-auto"
                    />
                  </a>
                  <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center text-[color:var(--ink)]"
                    aria-label={dictionary.ui.closeMenu}
                    onClick={() => setOpen(false)}
                    data-cursor-hover
                  >
                    <X className="h-5 w-5" aria-hidden />
                  </button>
                </div>

                <nav
                  className="container-herna flex-1 overflow-y-auto overscroll-contain py-6"
                  aria-label={dictionary.ui.menu}
                >
                  <ul className="flex flex-col gap-1">
                    {dictionary.nav.map((link, i) => (
                      <motion.li
                        key={link.href}
                        initial={reduced ? false : { opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.03 + i * 0.04,
                          duration: 0.35,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <a
                          href={buildHref(link.href)}
                          className="block py-3 font-display text-[1.65rem] leading-none tracking-[-0.02em] text-[color:var(--ink)]"
                          onClick={() => setOpen(false)}
                          data-cursor-hover
                        >
                          {link.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <div className="container-herna flex items-center justify-between gap-4 border-t border-[color:var(--line)] pb-[max(1.1rem,env(safe-area-inset-bottom))] pt-4">
                  <LanguageSwitcher className="[&_a]:text-[color:var(--muted)] [&_a[aria-current=page]]:text-[color:var(--ink)]" />
                  <a
                    href={buildHref("#contact")}
                    className="text-sm font-medium tracking-wide text-[color:var(--maroon)]"
                    onClick={() => setOpen(false)}
                    data-cursor-hover
                  >
                    {dictionary.ui.contactShort}
                  </a>
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
            ? "border-b border-[color:var(--line)]/80 bg-[color:var(--nav-bg)]/90 backdrop-blur-md"
            : "border-b border-transparent bg-gradient-to-b from-black/40 via-black/15 to-transparent"
        }`}
      >
        <div className="container-herna flex h-14 items-center justify-between gap-4 sm:h-16">
          <a
            href={isHome ? buildHref("#hero") : homeHref}
            className="relative z-50 flex shrink-0 items-center"
            onClick={() => setOpen(false)}
            aria-label={brandAssets.name}
            data-cursor-hover
          >
            <Image
              src={brandAssets.logoClearSrc}
              alt={brandAssets.holdingName}
              width={168}
              height={58}
              className={`h-7 w-auto sm:h-8 ${
                overHero ? "drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]" : ""
              }`}
              priority
            />
          </a>

          <nav
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
            aria-label="Primary"
          >
            <ul className="flex items-center gap-1">
              {dictionary.nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={buildHref(link.href)}
                    data-cursor-hover
                    className={`px-2.5 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.14em] transition-colors ${linkTone}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="relative z-50 flex items-center gap-3 sm:gap-4">
            <LanguageSwitcher
              className={`hidden sm:flex ${
                overHero
                  ? "[&_a]:text-white/55 [&_a[aria-current=page]]:text-white [&_a:hover]:text-white"
                  : "[&_a]:text-[color:var(--muted)] [&_a[aria-current=page]]:text-[color:var(--ink)] [&_a:hover]:text-[color:var(--ink)]"
              }`}
            />
            <a
              href={buildHref("#contact")}
              data-cursor-hover
              className={`hidden text-[0.72rem] font-medium uppercase tracking-[0.14em] transition-colors md:inline ${
                overHero
                  ? "text-white/80 hover:text-white"
                  : "text-[color:var(--maroon)] hover:text-[color:var(--navy-deep)]"
              }`}
            >
              {dictionary.ui.contactShort}
            </a>
            <button
              type="button"
              className={`flex h-9 w-9 items-center justify-center transition lg:hidden ${iconTone}`}
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? dictionary.ui.closeMenu : dictionary.ui.openMenu}
              onClick={() => setOpen((v) => !v)}
              data-cursor-hover
            >
              {open ? (
                <X className="h-4 w-4" aria-hidden />
              ) : (
                <span aria-hidden className="flex w-4 flex-col items-end gap-[4px]">
                  <span
                    className={`block h-px w-full ${
                      overHero ? "bg-white" : "bg-[color:var(--ink)]"
                    }`}
                  />
                  <span
                    className={`block h-px w-2.5 ${
                      overHero ? "bg-white" : "bg-[color:var(--ink)]"
                    }`}
                  />
                  <span
                    className={`block h-px w-full ${
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
