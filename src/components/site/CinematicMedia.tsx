"use client";

import { SoftImage } from "@/shared/ui/SoftImage";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useEffect, useRef, useState, type CSSProperties } from "react";

type Props = {
  videoSrc?: string;
  images: string[];
  className?: string;
  overlayClassName?: string;
  overlayStyle?: CSSProperties;
  kenBurns?: boolean;
  cycleMs?: number;
};

/**
 * Full-bleed cinematic media: muted looping video with image slideshow fallback.
 */
export function CinematicMedia({
  videoSrc,
  images,
  className = "",
  overlayClassName = "",
  overlayStyle,
  kenBurns = true,
  cycleMs = 7000,
}: Props) {
  const reduced = usePrefersReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOk, setVideoOk] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced || !videoSrc) return;
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
  }, [reduced, videoSrc]);

  useEffect(() => {
    if (videoOk || images.length < 2 || reduced) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      cycleMs,
    );
    return () => window.clearInterval(id);
  }, [videoOk, images.length, cycleMs, reduced]);

  const showVideo = Boolean(videoSrc) && videoOk && !reduced;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {videoSrc && !reduced ? (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            showVideo ? "opacity-100" : "opacity-0"
          } ${kenBurns && showVideo ? "media-kenburns" : ""}`}
          src={videoSrc}
          muted
          playsInline
          loop
          autoPlay
          preload="metadata"
          aria-hidden
          onLoadedData={() => setVideoOk(true)}
          onError={() => setVideoOk(false)}
        />
      ) : null}

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
