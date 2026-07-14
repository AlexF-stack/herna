"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * Brand cursor — gold ring + navy dot, soft lag. Desktop fine pointer only.
 */
export function SoftCursor() {
  const pathname = usePathname();
  const enabled = useMediaQuery("(min-width: 1024px) and (pointer: fine)");
  const reduced = usePrefersReducedMotion();
  const [ready, setReady] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setReady(false);
    const id = window.setTimeout(() => setReady(true), 40);
    return () => window.clearTimeout(id);
  }, [pathname]);

  useEffect(() => {
    if (!enabled || reduced || !ready) {
      document.documentElement.classList.remove("has-soft-cursor");
      return;
    }

    document.documentElement.classList.add("has-soft-cursor");

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const smooth = { x: pos.x, y: pos.y };
    let hovering = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (wrapRef.current) wrapRef.current.style.opacity = "1";
    };
    const onLeave = () => {
      if (wrapRef.current) wrapRef.current.style.opacity = "0";
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      hovering = Boolean(
        t?.closest(
          "a, button, [data-cursor-hover], input, textarea, label, .cursor-grow",
        ),
      );
    };

    const tick = () => {
      smooth.x += (pos.x - smooth.x) * 0.22;
      smooth.y += (pos.y - smooth.y) * 0.22;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        const s = hovering ? 2.1 : 1;
        ringRef.current.style.transform = `translate3d(${smooth.x}px, ${smooth.y}px, 0) translate(-50%, -50%) scale(${s})`;
        ringRef.current.style.borderColor = hovering
          ? "var(--maroon)"
          : "var(--gold)";
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("has-soft-cursor");
    };
  }, [enabled, reduced, ready, pathname]);

  if (!enabled || reduced || !ready) return null;

  return (
    <div
      ref={wrapRef}
      className="pointer-events-none fixed inset-0 z-[220] opacity-0 transition-opacity duration-300"
      aria-hidden
    >
      <div
        ref={ringRef}
        className="absolute left-0 top-0 h-9 w-9 rounded-full border-[1.5px] border-[color:var(--gold)] will-change-transform"
        style={{ transition: "border-color 0.3s ease" }}
      />
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-[color:var(--navy-deep)] will-change-transform"
      />
    </div>
  );
}
