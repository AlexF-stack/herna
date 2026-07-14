"use client";

import { useDictionary } from "@/components/providers/LocaleProvider";
import { brandAssets } from "@/content/brand";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const PRELOADER_SRC = "/media/preloader.webm";
const SESSION_KEY = "herna-intro-seen";
const MAX_MS = 4500;

/** Survives React remounts / Strict Mode so the deadline cannot loop forever */
let dismissDeadline = 0;

type Props = {
  onComplete: () => void;
};

function hasSeenIntro() {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

function markSeen() {
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    /* ignore */
  }
}

export function SiteLoader({ onComplete }: Props) {
  const dictionary = useDictionary();
  const reduced = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const completedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  const [visible, setVisible] = useState(() => !hasSeenIntro());
  const [videoOk, setVideoOk] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const complete = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    markSeen();
    dismissDeadline = 0;
    document.body.style.overflow = "";
    document.getElementById("herna-boot")?.remove();
    setVisible(false);
    onCompleteRef.current();
  };

  useEffect(() => {
    if (!visible) {
      document.getElementById("herna-boot")?.remove();
      onCompleteRef.current();
      return;
    }

    document.body.style.overflow = "hidden";
    document.getElementById("herna-boot")?.remove();

    if (reduced) {
      complete();
      return;
    }

    if (!dismissDeadline) dismissDeadline = Date.now() + MAX_MS;
    const wait = Math.max(0, dismissDeadline - Date.now());
    const timer = window.setTimeout(complete, wait);

    return () => {
      window.clearTimeout(timer);
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
    el.addEventListener("ended", complete);
    void play();

    return () => {
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("ended", complete);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, reduced, videoOk]);

  useEffect(() => {
    if (!visible || reduced || videoOk) return;
    let frame = 0;
    let raf = 0;
    const tick = () => {
      frame += 1;
      const next = Math.min(100, Math.round(frame * 5));
      setProgress(next);
      if (next >= 100) {
        complete();
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
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
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
