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

/** Short label that always fits inside an orb */
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
  const shown = active !== null ? values[active] : null;

  return (
    <div id="approach" className="relative">
      <div className="relative mx-auto aspect-square w-full max-w-[min(100%,32rem)]">
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

        {/* Center: title only — full text lives in the panel below to avoid overflow */}
        <div className="absolute inset-[32%] z-10 flex flex-col items-center justify-center overflow-hidden rounded-full border border-[color:var(--line)] bg-[color:var(--bg-elevated)]/95 px-4 text-center shadow-[0_20px_50px_rgba(22,48,72,0.1)] backdrop-blur-md sm:inset-[30%] sm:px-6">
          {shown ? (
            <motion.p
              key={shown.title}
              initial={reduced ? false : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-full font-display text-[clamp(0.85rem,2.4vw,1.15rem)] uppercase leading-tight tracking-wide text-[color:var(--ink)]"
            >
              {shown.title}
            </motion.p>
          ) : (
            <div className="max-w-full overflow-hidden px-1">
              <p className="label-act">{label}</p>
              <p className="mt-2 line-clamp-4 text-[0.7rem] leading-snug text-[color:var(--muted)] sm:mt-2.5 sm:line-clamp-5 sm:text-[0.78rem]">
                {intro}
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
                  className="relative flex h-[3.85rem] w-[3.85rem] items-center justify-center overflow-hidden rounded-full border border-white/70 text-center shadow-[0_12px_28px_rgba(22,48,72,0.16)] outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold)] sm:h-[4.6rem] sm:w-[4.6rem]"
                  style={{
                    background: `radial-gradient(circle at 32% 28%, white 0%, color-mix(in srgb, ${accent} 22%, white) 45%, color-mix(in srgb, ${accent} 38%, white) 100%)`,
                    zIndex: isActive ? 20 : 5,
                  }}
                  initial={reduced ? false : { scale: 0.7, opacity: 0 }}
                  animate={{
                    scale: isActive ? 1.22 : 1,
                    opacity: 1,
                  }}
                  whileHover={reduced ? undefined : { scale: 1.28 }}
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
                  <span className="relative px-1 font-display text-[0.62rem] font-semibold uppercase leading-none tracking-wide text-[color:var(--ink)] sm:text-[0.7rem]">
                    {orbShort(value.title)}
                  </span>
                </motion.button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Dedicated panel — no overflow inside the circle */}
      <div
        className="mx-auto mt-8 min-h-[7.5rem] max-w-xl rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg-elevated)] px-5 py-5 text-center sm:mt-10 sm:min-h-[6.5rem] sm:px-8"
        aria-live="polite"
      >
        {shown ? (
          <motion.div
            key={`panel-${shown.title}`}
            initial={reduced ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-display text-base uppercase tracking-wide text-[color:var(--ink)] sm:text-lg">
              {shown.title}
            </p>
            {shown.description ? (
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)] sm:text-[0.95rem]">
                {shown.description}
              </p>
            ) : null}
          </motion.div>
        ) : (
          <p className="text-sm leading-relaxed text-[color:var(--muted)]">
            {hint}
          </p>
        )}
      </div>
    </div>
  );
}
