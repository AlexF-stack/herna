"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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

function orbShort(title: string) {
  const parts = title.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 8);
  return parts
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export function ApproachOrbit({ label, intro, values, hint }: Props) {
  const reduced = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);

  const activate = (i: number) => setActive(i);
  const deactivate = () => setActive(null);

  return (
    <div id="approach" className="relative">
      <p className="mb-6 text-center text-[0.78rem] text-[color:var(--muted)] sm:mb-8">
        {hint}
      </p>

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

        <div
          className="pointer-events-none absolute inset-[30%] z-10 flex flex-col items-center justify-center overflow-hidden rounded-full border border-[color:var(--line)] bg-[color:var(--bg-elevated)]/95 px-4 text-center shadow-[0_20px_50px_rgba(22,48,72,0.1)] backdrop-blur-md sm:inset-[28%] sm:px-6"
          aria-live="polite"
        >
          <AnimatePresence mode="wait">
            {active === null ? (
              <motion.div
                key="idle"
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduced ? undefined : { opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="max-w-full overflow-hidden px-1"
              >
                <p className="label-act">{label}</p>
                <p className="mt-2 line-clamp-4 text-[0.7rem] leading-snug text-[color:var(--muted)] sm:line-clamp-5 sm:text-[0.78rem]">
                  {intro}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={`center-${values[active].title}`}
                initial={reduced ? false : { opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-full overflow-hidden px-1"
              >
                <p className="font-display text-[clamp(0.78rem,2.2vw,1.05rem)] uppercase leading-tight tracking-wide text-[color:var(--ink)]">
                  {values[active].title}
                </p>
                {values[active].description ? (
                  <p className="mt-2 line-clamp-5 text-[0.68rem] leading-snug text-[color:var(--muted)] sm:line-clamp-6 sm:text-[0.75rem]">
                    {values[active].description}
                  </p>
                ) : null}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <ul className="absolute inset-0 z-20 list-none" role="list">
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
                  zIndex: isActive ? 30 : 5,
                }}
                onMouseEnter={() => activate(i)}
                onMouseLeave={deactivate}
              >
                <motion.button
                  type="button"
                  aria-pressed={isActive}
                  aria-label={
                    value.description
                      ? `${value.title}. ${value.description}`
                      : value.title
                  }
                  className="relative flex h-[3.85rem] w-[3.85rem] items-center justify-center overflow-hidden rounded-full border border-white/70 text-center shadow-[0_12px_28px_rgba(22,48,72,0.16)] outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold)] sm:h-[4.6rem] sm:w-[4.6rem]"
                  style={{
                    background: `radial-gradient(circle at 32% 28%, white 0%, color-mix(in srgb, ${accent} 22%, white) 45%, color-mix(in srgb, ${accent} 38%, white) 100%)`,
                  }}
                  initial={reduced ? false : { scale: 0.7, opacity: 0 }}
                  animate={{
                    scale: isActive ? 1.2 : 1,
                    opacity: 1,
                  }}
                  whileHover={reduced ? undefined : { scale: 1.26 }}
                  transition={{ type: "spring", stiffness: 320, damping: 22 }}
                  onFocus={() => activate(i)}
                  onBlur={deactivate}
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
                  <span className="relative px-1 font-display text-[0.62rem] font-semibold uppercase leading-none tracking-wide text-[color:var(--ink)] sm:text-[0.7rem]">
                    {orbShort(value.title)}
                  </span>
                </motion.button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
