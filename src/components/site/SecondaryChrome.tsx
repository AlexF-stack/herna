"use client";

import { SiteNav } from "@/components/site/SiteNav";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";

const SoftCursorLazy = dynamic(
  () => import("@/components/site/SoftCursor").then((m) => m.SoftCursor),
  { ssr: false },
);

/** Nav + cursor for secondary routes. Home uses Experience chrome. */
export function SecondaryChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname() || "";
  const isHome = /^\/(en|fr)\/?$/.test(pathname);

  return (
    <ThemeProvider>
      {!isHome ? (
        <>
          <SoftCursorLazy />
          <SiteNav visible />
        </>
      ) : null}
      {children}
    </ThemeProvider>
  );
}
