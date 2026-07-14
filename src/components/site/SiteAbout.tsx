"use client";

import { useDictionary } from "@/components/providers/LocaleProvider";
import { Reveal } from "@/components/site/Reveal";
import { SoftImage } from "@/shared/ui/SoftImage";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export function SiteAbout() {
  const dictionary = useDictionary();
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? ["0%", "0%"] : ["-6%", "6%"],
  );

  return (
    <section
      id="about"
      ref={ref}
      className="section-pad"
      aria-labelledby="about-heading"
    >
      <div className="container-herna grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="label-act">{dictionary.about.label}</p>
          <h2
            id="about-heading"
            className="heading-display mt-4 text-display-md"
          >
            {dictionary.about.headline}
          </h2>
          <p className="mt-6 text-body-lg text-[color:var(--muted)]">
            {dictionary.about.body}
          </p>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-[color:var(--line)]">
            <motion.div className="absolute inset-[-10%]" style={{ y }}>
              <SoftImage
                src="/divisions/real-estate.jpg"
                alt=""
                fill
                quality={70}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
                wrapperClassName="absolute inset-0"
              />
            </motion.div>
            <div
              className="absolute inset-0 bg-gradient-to-tr from-[rgba(22,48,72,0.45)] via-transparent to-[rgba(142,50,42,0.2)]"
              aria-hidden
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
