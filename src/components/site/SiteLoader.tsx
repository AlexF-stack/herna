"use client";

import { useDictionary } from "@/components/providers/LocaleProvider";
import { brandAssets } from "@/content/brand";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const PRELOADER_SRC = "/media/preloader.webm";
const MAX_MS = 10000;

type Props = {
  active: boolean;
  onComplete: () => void;
};

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
        el.muted = true;
        await el.play();
        setVideoReady(true);
      } catch {
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
        window.setTimeout(finish, 220);
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
          className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          aria-busy="true"
          aria-label={dictionary.ui.loading}
        >
          {/* Logo holds the brand while the webm buffers — no empty white stage */}
          <div
            className={`pointer-events-none absolute inset-0 flex items-center justify-center px-8 transition-opacity duration-500 ${
              videoReady && videoOk ? "opacity-0" : "opacity-100"
            }`}
          >
            <Image
              src={brandAssets.logoSrc}
              alt=""
              width={720}
              height={280}
              className="h-auto w-full max-w-[22rem] object-contain sm:max-w-[26rem]"
              priority
            />
          </div>

          {videoOk && !reduced ? (
            <video
              ref={videoRef}
              className={`absolute inset-0 h-full w-full scale-[1.18] object-contain bg-white transition-opacity duration-500 sm:scale-[1.22] md:scale-[1.28] ${
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
            <div className="h-px w-36 overflow-hidden bg-black/10 sm:w-48">
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
