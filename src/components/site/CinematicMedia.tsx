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
 * Only the active clip downloads — the next one loads when it's about to play.
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

  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeClip, setActiveClip] = useState(0);
  const [mountedClips, setMountedClips] = useState(() =>
    clips.length ? new Set([0]) : new Set<number>(),
  );
  const [videoOk, setVideoOk] = useState(false);
  const [index, setIndex] = useState(0);

  const showVideo = clips.length > 0 && videoOk && !reduced;
  const activeSrc = clips[activeClip];

  useEffect(() => {
    if (reduced || !activeSrc) return;
    const el = videoRef.current;
    if (!el) return;

    const play = async () => {
      try {
        el.muted = true;
        await el.play();
        setVideoOk(true);
      } catch {
        setVideoOk(false);
      }
    };
    void play();
  }, [reduced, activeSrc, activeClip]);

  useEffect(() => {
    if (reduced || clips.length < 2 || !videoOk) return;

    const id = window.setInterval(() => {
      setActiveClip((current) => {
        const next = (current + 1) % clips.length;
        setMountedClips((prev) => {
          const copy = new Set(prev);
          copy.add(next);
          return copy;
        });
        return next;
      });
    }, videoCycleMs);

    return () => window.clearInterval(id);
  }, [reduced, clips.length, videoOk, videoCycleMs]);

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

      {clips.length > 0 && !reduced && mountedClips.has(activeClip) ? (
        <video
          key={activeSrc}
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            showVideo ? "opacity-100" : "opacity-0"
          } ${kenBurns && showVideo ? "media-kenburns" : ""}`}
          src={activeSrc}
          poster={posterSrc}
          muted
          playsInline
          loop
          autoPlay
          preload="auto"
          aria-hidden
          onLoadedData={() => setVideoOk(true)}
          onError={() => setVideoOk(false)}
        />
      ) : null}

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
