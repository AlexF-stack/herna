"use client";

import { useDictionary } from "@/components/providers/LocaleProvider";
import { brandAssets } from "@/content/brand";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const PRELOADER_SRC = "/media/preloader.webm";
const MAX_MS = 5000;

type Props = {
  active: boolean;
  onComplete: () => void;
};

/**
 * Cinematic preloader overlay. Site tree must already be mounted underneath.
 * Hard-dismisses after MAX_MS — never traps navigation.
 */
export function SiteLoader({ active, onComplete }: Props) {
  const dictionary = useDictionary();
  const reduced = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const doneRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  const [videoOk, setVideoOk] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const finish = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    document.body.style.overflow = "";
    document.getElementById("herna-boot")?.remove();
    onCompleteRef.current();
  };

  // Hard deadline tied only to `active` — ignore reduced / callback churn
  useEffect(() => {
    if (!active) return;

    doneRef.current = false;
    setProgress(0);
    setVideoReady(false);
    setVideoOk(true);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const maxTimer = window.setTimeout(finish, MAX_MS);

    return () => {
      window.clearTimeout(maxTimer);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  // Prefer reduced motion: dismiss immediately
  useEffect(() => {
    if (active && reduced) finish();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, reduced]);

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

    const play = async () => {
      try {
        el.defaultMuted = true;
        el.muted = true;
        el.playsInline = true;
        await el.play();
        setVideoReady(true);
      } catch {
        setVideoOk(false);
      }
    };

    el.addEventListener("timeupdate", onTime);
    el.addEventListener("playing", () => setVideoReady(true));
    el.addEventListener("ended", finish);
    void play();

    return () => {
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("ended", finish);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, reduced, videoOk]);

  useEffect(() => {
    if (!active || reduced || videoOk) return;
    let frame = 0;
    let raf = 0;
    const tick = () => {
      frame += 1;
      const next = Math.min(100, Math.round(frame * 4));
      setProgress(next);
      if (next >= 100) {
        finish();
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, reduced, videoOk]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          aria-busy="true"
          aria-label={dictionary.ui.loading}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={brandAssets.logoOpaqueSrc}
            alt=""
            width={720}
            height={280}
            className={`pointer-events-none absolute left-1/2 top-1/2 z-[1] w-[min(86vw,26rem)] -translate-x-1/2 -translate-y-1/2 object-contain transition-opacity duration-500 ${
              videoReady && videoOk ? "opacity-0" : "opacity-100"
            }`}
          />

          {videoOk && !reduced ? (
            <video
              ref={videoRef}
              className={`pointer-events-none absolute inset-0 z-[1] h-full w-full scale-[1.2] object-contain bg-white transition-opacity duration-500 sm:scale-[1.24] md:scale-[1.3] ${
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

          <div className="pointer-events-none absolute inset-x-0 bottom-16 z-[2] flex flex-col items-center">
            <div className="h-px w-40 overflow-hidden bg-black/10 sm:w-52">
              <div
                className="h-full bg-[color:var(--gold)] transition-[width] duration-200 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <button
            type="button"
            className="absolute bottom-8 z-[3] text-sm text-[color:var(--muted)] underline-offset-4 hover:text-[color:var(--ink)] hover:underline"
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
