"use client";

import { brandAssets } from "@/content/brand";
import Image from "next/image";

type Props = {
  /** light | dark = full plaquette lockup; nav = compact header lockup */
  variant?: "light" | "dark" | "nav";
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  alt?: string;
};

/** Official HERNA plaquette lockup (transparent PNG — not the SVG recreation). */
export function BrandLogo({
  variant = "light",
  className = "h-11 w-auto object-contain sm:h-12 md:h-14",
  priority = false,
  width = 220,
  height = 190,
  alt,
}: Props) {
  const src =
    variant === "nav"
      ? brandAssets.logoNavClearSrc
      : brandAssets.logoClearSrc;

  const w = variant === "nav" ? 200 : width;
  const h = variant === "nav" ? 68 : height;

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
