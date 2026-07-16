"use client";

import { brandAssets } from "@/content/brand";
import Image from "next/image";

type Props = {
  /** light = dark tagline on light bg; dark = white tagline on dark bg; nav = compact nav lockup */
  variant?: "light" | "dark" | "nav";
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  alt?: string;
};

/** Transparent HERNA lockup — no navy plate behind the mark. */
export function BrandLogo({
  variant = "light",
  className = "h-11 w-auto object-contain sm:h-12 md:h-14",
  priority = false,
  width = 220,
  height = 170,
  alt,
}: Props) {
  const src =
    variant === "nav"
      ? brandAssets.logoNavClearSrc
      : variant === "dark"
        ? brandAssets.logoOnDarkSrc
        : brandAssets.logoClearSrc;

  const w = variant === "nav" ? 180 : width;
  const h = variant === "nav" ? 48 : height;

  return (
    <Image
      src={src}
      alt={alt ?? brandAssets.holdingName}
      width={w}
      height={h}
      className={className}
      priority={priority}
    />
  );
}
