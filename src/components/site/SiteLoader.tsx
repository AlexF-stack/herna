"use client";

import { useDictionary } from "@/components/providers/LocaleProvider";
import { brandAssets } from "@/content/brand";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const PRELOADER_SRC = "/media/preloader.webm";
const MAX_MS = 10000;

type Props = {
  active: boolean;
  onComplete: () => void;
};

/**
 * Handoff rules (no white flash):
 * 1. Static #herna-boot covers first HTML paint
 * 2. This overlay matches that shell and only removes boot once the video/logo layer is live
 * 3. Exit runs after the parent has already mounted the site underneath
 */
export function SiteLoader({ active, onComplete }: Props) {
  const dictionary = useDictionary();
  const reduced = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const doneRef = useRef(false);
  const [videoOk, setVideoOk] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const [progress, setProgress] = useState(0);

  const finish = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    if (!active) return;
    doneRef.current = false;
    setProgress(0);
    setVideoReady(false);

    if (reduced) {
      finish();
      return;
    }

    const maxTimer = window.setTimeout(finish, MAX_MS);
    return () => window.clearTimeout(maxTimer);
  }, [active, reduced, finish]);

  // Only drop the HTML boot shell once THIS layer is ready to take over
  useEffect(() => {
    if (!active) return;
    if (videoReady || !videoOk) {
      document.getElementById("herna-boot")?.remove();
    }
  }, [active, videoReady, videoOk]);

  useEffect(() => {
    if (!active || reduced || !videoOk) return;
    const el = videoRef.current;
    if (!el) return;

    const onTime = () => {
      if (!el.duration || !Number.isFinite(el.duration)) return;
      setProgress(
        Math.min(100, Math.round((el.currentTime / el.duration) * 100)),
      );
    };

    const markReady = () => setVideoReady(true);

    const play = async () => {
      try {
        el.defaultMuted = true;
        el.muted = true;
        el.playsInline = true;
        await el.play();
        setVideoReady(true);
      } catch {
        // Keep boot/logo visible; still allow timeout / skip
        setVideoOk(false);
      }
    };

    el.addEventListener("timeupdate", onTime);
    el.addEventListener("playing", markReady);
    el.addEventListener("ended", finish);
    void play();

    return () => {
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("playing", markReady);
      el.removeEventListener("ended", finish);
    };
  }, [active, reduced, videoOk, finish]);

  useEffect(() => {
    if (!active || reduced || videoOk) return;
    let frame = 0;
    let raf = 0;
    const tick = () => {
      frame += 1;
      const next = Math.min(100, Math.round(frame * 2.4));
      setProgress(next);
      if (next >= 100) {
        window.setTimeout(finish, 200);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, reduced, videoOk, finish]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          aria-busy="true"
          aria-label={dictionary.ui.loading}
        >
          {/* Same lockup as #herna-boot — continuous brand stage */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={brandAssets.logoOpaqueSrc}
            alt=""
            width={720}
            height={280}
            className={`pointer-events-none absolute left-1/2 top-1/2 w-[min(86vw,26rem)] -translate-x-1/2 -translate-y-1/2 object-contain transition-opacity duration-500 ${
              videoReady && videoOk ? "opacity-0" : "opacity-100"
            }`}
          />

          {videoOk && !reduced ? (
            <video
              ref={videoRef}
              className={`absolute inset-0 h-full w-full scale-[1.2] object-contain bg-white transition-opacity duration-500 sm:scale-[1.24] md:scale-[1.3] ${
                videoReady ? "opacity-100" : "opacity-0"
              }`}
              src={PRELOADER_SRC}
              muted
              playsInline
              preload="auto"
              aria-hidden
              onError={() => setVideoOk(false)}
            />
          ) : null}

          <div className="pointer-events-none absolute inset-x-0 bottom-16 flex flex-col items-center">
            <div className="h-px w-40 overflow-hidden bg-black/10 sm:w-52">
              <div
                className="h-full bg-[color:var(--gold)] transition-[width] duration-200 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <button
            type="button"
            className="absolute bottom-8 z-10 text-sm text-[color:var(--muted)] underline-offset-4 hover:text-[color:var(--ink)] hover:underline"
            onClick={finish}
            data-cursor-hover
          >
            {dictionary.prologue.skip}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
