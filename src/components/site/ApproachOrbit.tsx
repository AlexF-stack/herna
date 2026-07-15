"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

type Value = {
  title: string;
  description: string | null;
};

type Props = {
  label: string;
  intro: string;
  values: Value[];
  hint: string;
};

const ACCENTS = [
  "var(--gold)",
  "var(--maroon)",
  "var(--blue)",
  "var(--navy-deep)",
  "var(--gold-soft)",
];

export function ApproachOrbit({ label, intro, values, hint }: Props) {
  const reduced = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  const shown = active !== null ? values[active] : null;

  return (
    <div id="approach" className="relative">
      <div className="relative mx-auto aspect-square w-full max-w-[min(100%,34rem)]">
        <div
          className="pointer-events-none absolute inset-[8%] rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--blue) 14%, transparent), transparent 68%)",
          }}
          aria-hidden
        />

        <motion.div
          className="pointer-events-none absolute inset-[14%] rounded-full border border-dashed border-[color:var(--blue)]/25"
          animate={reduced ? undefined : { rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          aria-hidden
        />
        <motion.div
          className="pointer-events-none absolute inset-[4%] rounded-full border border-[color:var(--line)]"
          animate={reduced ? undefined : { rotate: -360 }}
          transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
          aria-hidden
        />

        <div className="absolute inset-[30%] z-10 flex flex-col items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--bg-elevated)]/90 px-5 text-center shadow-[0_20px_50px_rgba(22,48,72,0.1)] backdrop-blur-md sm:inset-[28%] sm:px-7">
          {shown ? (
            <motion.div
              key={shown.title}
              initial={reduced ? false : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-display text-[clamp(1rem,2.8vw,1.35rem)] uppercase tracking-wide text-[color:var(--ink)]">
                {shown.title}
              </p>
              <p className="mt-2 text-[0.78rem] leading-relaxed text-[color:var(--muted)] sm:text-sm">
                {shown.description ?? ""}
              </p>
            </motion.div>
          ) : (
            <div>
              <p className="label-act">{label}</p>
              <p className="mt-2 text-[0.78rem] leading-relaxed text-[color:var(--muted)] sm:mt-3 sm:text-sm">
                {intro}
              </p>
              <p className="mt-3 hidden text-[0.68rem] tracking-wide text-[color:var(--gold)] sm:block">
                {hint}
              </p>
            </div>
          )}
        </div>

        <ul className="absolute inset-0 list-none" role="list">
          {values.map((value, i) => {
            const angle = (i / values.length) * Math.PI * 2 - Math.PI / 2;
            const radius = 42;
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);
            const accent = ACCENTS[i % ACCENTS.length];
            const isActive = active === i;

            return (
              <li
                key={value.title}
                className="absolute"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <motion.button
                  type="button"
                  aria-pressed={isActive}
                  aria-label={
                    value.description
                      ? `${value.title}. ${value.description}`
                      : value.title
                  }
                  className="relative flex h-[4.4rem] w-[4.4rem] items-center justify-center rounded-full border border-white/70 text-center shadow-[0_12px_28px_rgba(22,48,72,0.16)] outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold)] sm:h-[5.1rem] sm:w-[5.1rem]"
                  style={{
                    background: `radial-gradient(circle at 32% 28%, white 0%, color-mix(in srgb, ${accent} 22%, white) 45%, color-mix(in srgb, ${accent} 38%, white) 100%)`,
                    zIndex: isActive ? 20 : 5,
                  }}
                  initial={reduced ? false : { scale: 0.7, opacity: 0 }}
                  animate={{
                    scale: isActive ? 1.28 : 1,
                    opacity: 1,
                  }}
                  whileHover={reduced ? undefined : { scale: 1.32 }}
                  transition={{ type: "spring", stiffness: 320, damping: 22 }}
                  onHoverStart={() => setActive(i)}
                  onHoverEnd={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  onClick={() => setActive(isActive ? null : i)}
                  data-cursor-hover
                >
                  <span
                    className="pointer-events-none absolute inset-0 rounded-full opacity-40"
                    style={{
                      boxShadow: `inset 0 0 0 1px color-mix(in srgb, ${accent} 45%, transparent), 0 0 24px color-mix(in srgb, ${accent} 35%, transparent)`,
                    }}
                    aria-hidden
                  />
                  <span className="relative line-clamp-3 px-1.5 font-display text-[0.58rem] font-semibold uppercase leading-[1.15] tracking-wide text-[color:var(--ink)] sm:text-[0.65rem]">
                    {value.title}
                  </span>
                </motion.button>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="mt-5 text-center text-[0.72rem] text-[color:var(--muted)] sm:hidden">
        {hint}
      </p>
    </div>
  );
}
