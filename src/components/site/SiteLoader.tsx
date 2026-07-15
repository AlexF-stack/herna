"use client";

import { useDictionary } from "@/components/providers/LocaleProvider";
import { brandAssets } from "@/content/brand";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const PRELOADER_SRC = "/media/preloader.webm";
const MIN_MS = 1800;
const MAX_MS = 4200;

type Props = {
  onComplete: () => void;
};

/**
 * Home intro loader — always plays on hard entry to home.
 * Overlay uses pointer-events none except Skip, so it never traps the app.
 */
export function SiteLoader({ onComplete }: Props) {
  const dictionary = useDictionary();
  const reduced = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const completedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  const startedAt = useRef(0);
  const [visible, setVisible] = useState(true);
  const [videoOk, setVideoOk] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const complete = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    document.body.style.overflow = "";
    document.getElementById("herna-boot")?.remove();
    setVisible(false);
    onCompleteRef.current();
  };

  const finishAfterMin = () => {
    const elapsed = Date.now() - startedAt.current;
    const wait = Math.max(0, MIN_MS - elapsed);
    window.setTimeout(complete, wait);
  };

  useEffect(() => {
    startedAt.current = Date.now();
    document.body.style.overflow = "hidden";
    document.getElementById("herna-boot")?.remove();

    if (reduced) {
      complete();
      return;
    }

    const maxTimer = window.setTimeout(complete, MAX_MS);
    return () => {
      window.clearTimeout(maxTimer);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!visible || reduced || !videoOk) return;
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
    el.addEventListener("ended", finishAfterMin);
    void play();

    return () => {
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("ended", finishAfterMin);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, reduced, videoOk]);

  useEffect(() => {
    if (!visible || reduced || videoOk) return;
    let frame = 0;
    let raf = 0;
    const tick = () => {
      frame += 1;
      const next = Math.min(100, Math.round(frame * 4));
      setProgress(next);
      if (next >= 100) {
        finishAfterMin();
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, reduced, videoOk]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          aria-busy="true"
          aria-label={dictionary.ui.loading}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={brandAssets.logoOpaqueSrc}
            alt=""
            width={720}
            height={280}
            className={`absolute left-1/2 top-1/2 z-[1] w-[min(86vw,26rem)] -translate-x-1/2 -translate-y-1/2 object-contain transition-opacity duration-500 ${
              videoReady && videoOk ? "opacity-0" : "opacity-100"
            }`}
          />

          {videoOk && !reduced ? (
            <video
              ref={videoRef}
              className={`absolute inset-0 z-[1] h-full w-full scale-[1.2] object-contain bg-white transition-opacity duration-500 sm:scale-[1.24] md:scale-[1.3] ${
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

          <div className="absolute inset-x-0 bottom-16 z-[2] flex flex-col items-center">
            <div className="h-px w-40 overflow-hidden bg-black/10 sm:w-52">
              <div
                className="h-full bg-[color:var(--gold)] transition-[width] duration-200 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <button
            type="button"
            className="pointer-events-auto absolute bottom-8 z-[3] text-sm text-[color:var(--muted)] underline-offset-4 hover:text-[color:var(--ink)] hover:underline"
            onClick={complete}
            data-cursor-hover
          >
            {dictionary.prologue.skip}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
