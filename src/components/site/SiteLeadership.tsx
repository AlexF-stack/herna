"use client";

import {
  useDictionary,
  useLocale,
} from "@/components/providers/LocaleProvider";
import { Reveal } from "@/components/site/Reveal";
import { TiltCard } from "@/components/site/TiltCard";
import { brandAssets } from "@/content/brand";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function SiteLeadership() {
  const dictionary = useDictionary();
  const { locale } = useLocale();
  const reduced = useReducedMotion();
  const title =
    locale === "fr" ? brandAssets.ceo.titleFr : brandAssets.ceo.titleEn;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const floatY = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : [40, -40],
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : [-2.5, 2.5],
  );

  return (
    <section
      id="leadership"
      ref={ref}
      data-nav-surface="light"
      className="section-pad relative overflow-hidden"
      aria-labelledby="leadership-heading"
    >
      <div
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--gold) 35%, transparent), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="container-herna grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-5" delay={0.04}>
          <TiltCard intensity={10} className="mx-auto max-w-md lg:mx-0">
            <motion.div
              style={{ y: floatY, rotateZ: rotate }}
              className="relative overflow-hidden rounded-[1.5rem] border border-[color:var(--gold)]/45 bg-gradient-to-br from-[color:var(--navy-deep)] to-[color:var(--navy)] p-2.5 shadow-[0_30px_80px_rgba(10,14,26,0.22)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.1rem]">
                <Image
                  src={brandAssets.ceoPortraitSrc}
                  alt={brandAssets.ceo.name}
                  fill
                  sizes="(max-width: 1024px) 90vw, 380px"
                  className="object-cover object-top"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(10,14,26,0.55)] via-transparent to-transparent"
                  aria-hidden
                />
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/15 bg-black/35 px-4 py-3 backdrop-blur-md">
                <p className="font-display text-sm text-white">
                  {brandAssets.ceo.name}
                </p>
                <p className="mt-0.5 text-[0.65rem] uppercase tracking-[0.14em] text-[color:var(--gold-soft)]">
                  {title}
                </p>
              </div>
            </motion.div>
          </TiltCard>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <p className="label-act text-[color:var(--gold)]">
            {dictionary.leadership.label}
          </p>
          <h2
            id="leadership-heading"
            className="heading-display mt-3 text-display-md"
          >
            {dictionary.leadership.headline}
          </h2>

          <div className="mt-8 space-y-5 text-body-lg text-[color:var(--muted)]">
            {dictionary.leadership.paragraphs.map((p, i) => (
              <motion.p
                key={p.slice(0, 40)}
                initial={reduced ? false : { opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.08 + i * 0.06, duration: 0.55 }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          <blockquote className="mt-8 border-l-2 border-[color:var(--gold)] pl-5 font-display text-xl italic leading-snug text-[color:var(--ink)] md:text-2xl">
            {dictionary.leadership.quote}
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
