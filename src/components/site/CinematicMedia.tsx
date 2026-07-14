"use client";

import { SoftImage } from "@/shared/ui/SoftImage";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

type Props = {
  videoSrc?: string;
  videoSrcs?: string[];
  posterSrc?: string;
  images: string[];
  className?: string;
  overlayClassName?: string;
  overlayStyle?: CSSProperties;
  kenBurns?: boolean;
  cycleMs?: number;
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
  /** Mount at most the first clip initially; unlock more on cycle */
  const [mountCount, setMountCount] = useState(clips.length ? 1 : 0);
  const [playing, setPlaying] = useState<Record<number, boolean>>({});
  const [index, setIndex] = useState(0);

  const anyPlaying = Object.values(playing).some(Boolean);
  const showVideo =
    clips.length > 0 && Boolean(playing[activeClip]) && !reduced;

  useEffect(() => {
    if (reduced || mountCount === 0) return;

    const el = videoRefs.current[activeClip];
    if (!el) return;

    let cancelled = false;

    const start = async () => {
      try {
        el.defaultMuted = true;
        el.muted = true;
        el.playsInline = true;
        await el.play();
        if (!cancelled) {
          setPlaying((prev) => ({ ...prev, [activeClip]: true }));
        }
      } catch {
        // Retry once after metadata — common on deferred mounts after preloader
        const retry = async () => {
          try {
            el.muted = true;
            await el.play();
            if (!cancelled) {
              setPlaying((prev) => ({ ...prev, [activeClip]: true }));
            }
          } catch {
            if (!cancelled) {
              setPlaying((prev) => ({ ...prev, [activeClip]: false }));
            }
          }
        };
        window.setTimeout(() => void retry(), 280);
      }
    };

    void start();

    return () => {
      cancelled = true;
    };
  }, [reduced, activeClip, mountCount]);

  useEffect(() => {
    if (reduced || clips.length < 2 || !anyPlaying) return;

    const id = window.setInterval(() => {
      setActiveClip((current) => {
        const next = (current + 1) % clips.length;
        setMountCount((count) => Math.max(count, next + 1));
        // Pause previous to save decode; resume happens in play effect
        const prev = videoRefs.current[current];
        if (prev && current !== next) {
          try {
            prev.pause();
          } catch {
            /* ignore */
          }
        }
        return next;
      });
    }, videoCycleMs);

    return () => window.clearInterval(id);
  }, [reduced, clips.length, anyPlaying, videoCycleMs]);

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
      {posterSrc ? (
        <SoftImage
          src={posterSrc}
          alt=""
          fill
          priority
          quality={68}
          sizes="100vw"
          className={`object-cover transition-opacity duration-700 ${
            showVideo ? "opacity-0" : "opacity-100"
          }`}
          wrapperClassName="absolute inset-0"
        />
      ) : null}

      {!reduced &&
        clips.slice(0, mountCount).map((src, i) => (
          <video
            key={src}
            ref={(node) => {
              videoRefs.current[i] = node;
            }}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
              showVideo && i === activeClip ? "opacity-100" : "opacity-0"
            } ${kenBurns && showVideo && i === activeClip ? "media-kenburns" : ""}`}
            src={src}
            muted
            playsInline
            loop
            autoPlay={i === 0}
            preload={i === 0 ? "auto" : "metadata"}
            aria-hidden
            onPlaying={() => setPlaying((prev) => ({ ...prev, [i]: true }))}
            onLoadedData={() => {
              const el = videoRefs.current[i];
              if (!el || i !== activeClip) return;
              el.muted = true;
              void el.play().catch(() => undefined);
            }}
            onError={() => setPlaying((prev) => ({ ...prev, [i]: false }))}
          />
        ))}

      {!showVideo &&
        !posterSrc &&
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
              quality={68}
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
