"use client";

import { SiteNav } from "@/components/site/SiteNav";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";

/** Nav for secondary routes. Home uses Experience chrome. */
export function SecondaryChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname() || "";
  const isHome = /^\/(en|fr)\/?$/.test(pathname);

  useEffect(() => {
    document.getElementById("herna-boot")?.remove();
  }, [pathname]);

  return (
    <ThemeProvider>
      {!isHome ? <SiteNav visible /> : null}
      {children}
    </ThemeProvider>
  );
}
