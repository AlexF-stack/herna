"use client";

import { useDictionary } from "@/components/providers/LocaleProvider";
import { SiteNav } from "@/components/site/SiteNav";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** Nav for secondary routes. Home uses Experience chrome. */
export function SecondaryChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname() || "";
  const dictionary = useDictionary();
  const isHome = /^\/(en|fr)\/?$/.test(pathname);

  return (
    <ThemeProvider>
      {!isHome ? (
        <>
          <a href="#main" className="skip-link">
            {dictionary.ui.skipToContent}
          </a>
          <SiteNav visible initialSurface="light" />
          <div id="main">{children}</div>
        </>
      ) : (
        children
      )}
    </ThemeProvider>
  );
}
