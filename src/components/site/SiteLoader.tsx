"use client";

import { useDictionary } from "@/components/providers/LocaleProvider";
import { brandAssets } from "@/content/brand";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  active: boolean;
  onComplete: () => void;
};

export function SiteLoader({ active, onComplete }: Props) {
  const dictionary = useDictionary();
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!active) return;

    if (reduced) {
      onComplete();
      return;
    }

    let frame = 0;
    let raf = 0;
    const tick = () => {
      frame += 1;
      const next = Math.min(100, Math.round(frame * 1.9));
      setProgress(next);
      if (next >= 100) {
        window.setTimeout(onComplete, 340);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, onComplete, reduced]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-[#f7f4ef]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          aria-busy="true"
          aria-label={dictionary.ui.loading}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 30%, rgba(201,162,75,0.18), transparent 55%)",
            }}
            aria-hidden
          />
          <div className="relative flex h-36 w-36 items-center justify-center sm:h-44 sm:w-44">
            <svg
              className="absolute inset-0 -rotate-90"
              viewBox="0 0 100 100"
              aria-hidden
            >
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="rgba(22,48,72,0.1)"
                strokeWidth="1.25"
              />
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="#b8922f"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeDasharray={`${(progress / 100) * 289} 289`}
              />
            </svg>
            <div className="relative flex h-[5.75rem] w-[5.75rem] items-center justify-center rounded-2xl bg-white p-3 shadow-[0_20px_50px_rgba(22,48,72,0.12)] sm:h-28 sm:w-28">
              <Image
                src={brandAssets.logoSrc}
                alt=""
                width={160}
                height={60}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>

          <p className="relative mt-10 label-act tracking-[0.22em]">
            {brandAssets.fullName}
          </p>
          <p className="relative mt-2 font-display text-3xl tracking-[0.12em] text-[color:var(--ink)] sm:text-4xl">
            {brandAssets.name}
          </p>
          <p className="relative mt-5 text-xs tracking-[0.16em] text-[color:var(--muted)]">
            {progress}%
          </p>

          <button
            type="button"
            className="absolute bottom-10 text-sm text-[color:var(--muted)] underline-offset-4 hover:text-[color:var(--ink)] hover:underline"
            onClick={onComplete}
            data-cursor-hover
          >
            {dictionary.prologue.skip}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
