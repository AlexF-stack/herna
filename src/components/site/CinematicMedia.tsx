"use client";

import { SoftImage } from "@/shared/ui/SoftImage";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

type Props = {
  /** Single video (legacy) or first in a playlist */
  videoSrc?: string;
  /** Playlist of looping clips — crossfades between sources */
  videoSrcs?: string[];
  posterSrc?: string;
  images: string[];
  className?: string;
  overlayClassName?: string;
  overlayStyle?: CSSProperties;
  kenBurns?: boolean;
  cycleMs?: number;
  /** How long each hero clip stays before crossfade (default 14s) */
  videoCycleMs?: number;
};

/**
 * Full-bleed cinematic media: muted looping video(s) with image slideshow fallback.
 */
export function CinematicMedia({
  videoSrc,
  videoSrcs,
  posterSrc,
  images,
  className = "",
  overlayClassName = "",
  overlayStyle,
  kenBurns = true,
  cycleMs = 7000,
  videoCycleMs = 14000,
}: Props) {
  const reduced = usePrefersReducedMotion();
  const clips = useMemo(
    () =>
      (videoSrcs?.length ? videoSrcs : videoSrc ? [videoSrc] : []).filter(
        Boolean,
      ) as string[],
    [videoSrc, videoSrcs],
  );

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeClip, setActiveClip] = useState(0);
  const [ready, setReady] = useState<Record<number, boolean>>({});
  const [index, setIndex] = useState(0);

  const anyVideoOk = clips.some((_, i) => ready[i]);
  const showVideo = clips.length > 0 && anyVideoOk && !reduced;

  useEffect(() => {
    if (reduced || clips.length === 0) return;

    const playClip = async (i: number) => {
      const el = videoRefs.current[i];
      if (!el) return;
      try {
        el.muted = true;
        el.currentTime = 0;
        await el.play();
        setReady((prev) => ({ ...prev, [i]: true }));
      } catch {
        setReady((prev) => ({ ...prev, [i]: false }));
      }
    };

    void playClip(0);
    // Warm the second clip so crossfade is instant
    if (clips.length > 1) {
      const warm = window.setTimeout(() => void playClip(1), 1200);
      return () => window.clearTimeout(warm);
    }
  }, [reduced, clips]);

  useEffect(() => {
    if (reduced || clips.length < 2 || !anyVideoOk) return;

    const id = window.setInterval(() => {
      setActiveClip((current) => {
        const next = (current + 1) % clips.length;
        const el = videoRefs.current[next];
        if (el) {
          el.muted = true;
          void el.play().catch(() => undefined);
        }
        return next;
      });
    }, videoCycleMs);

    return () => window.clearInterval(id);
  }, [reduced, clips.length, anyVideoOk, videoCycleMs]);

  useEffect(() => {
    if (showVideo || images.length < 2 || reduced) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      cycleMs,
    );
    return () => window.clearInterval(id);
  }, [showVideo, images.length, cycleMs, reduced]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {clips.length > 0 && !reduced
        ? clips.map((src, i) => {
            const visible = showVideo && i === activeClip && ready[i];
            return (
              <video
                key={src}
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-out ${
                  visible ? "opacity-100" : "opacity-0"
                } ${kenBurns && visible ? "media-kenburns" : ""}`}
                src={src}
                poster={i === 0 ? posterSrc : undefined}
                muted
                playsInline
                loop
                autoPlay={i === 0}
                preload={i === 0 ? "auto" : "metadata"}
                aria-hidden
                onLoadedData={() =>
                  setReady((prev) => ({ ...prev, [i]: true }))
                }
                onError={() => setReady((prev) => ({ ...prev, [i]: false }))}
              />
            );
          })
        : null}

      {!showVideo &&
        images.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[1600ms] ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <SoftImage
              src={src}
              alt=""
              fill
              priority={i === 0}
              quality={72}
              sizes="100vw"
              className={`object-cover ${
                kenBurns && i === index && !reduced ? "media-kenburns" : ""
              }`}
              wrapperClassName="absolute inset-0"
            />
          </div>
        ))}

      <div
        className={`absolute inset-0 ${overlayClassName}`}
        style={
          overlayStyle ?? {
            background: "var(--hero-overlay)",
          }
        }
        aria-hidden
      />
      <div className="media-vignette absolute inset-0" aria-hidden />
      <div className="media-grain absolute inset-0" aria-hidden />
    </div>
  );
}
