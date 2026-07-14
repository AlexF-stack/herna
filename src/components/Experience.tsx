"use client";

import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { useDictionary } from "@/components/providers/LocaleProvider";
import { SiteAbout } from "@/components/site/SiteAbout";
import { SiteContact } from "@/components/site/SiteContact";
import { SiteDivisions } from "@/components/site/SiteDivisions";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHero } from "@/components/site/SiteHero";
import { SiteIdentity } from "@/components/site/SiteIdentity";
import { SiteInsights } from "@/components/site/SiteInsights";
import { SiteLoader } from "@/components/site/SiteLoader";
import { SiteMediaBand } from "@/components/site/SiteMediaBand";
import { SiteNav } from "@/components/site/SiteNav";
import { SitePartners } from "@/components/site/SitePartners";
import { useSessionIntro } from "@/hooks/useSessionIntro";
import dynamic from "next/dynamic";
import { useCallback, useState } from "react";

const SoftCursor = dynamic(
  () => import("@/components/site/SoftCursor").then((m) => m.SoftCursor),
  { ssr: false },
);

function ExperienceInner() {
  const dictionary = useDictionary();
  const { shouldShowIntro, markComplete } = useSessionIntro();
  /** Site mounts under the loader before the loader fades — no white gap */
  const [siteReady, setSiteReady] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setSiteReady(true);
    // Let the home tree paint under the white loader, then dismiss the overlay
    window.setTimeout(() => {
      markComplete();
      document.getElementById("herna-boot")?.remove();
    }, 120);
  }, [markComplete]);

  const showSite = siteReady || !shouldShowIntro;

  return (
    <>
      <a href="#main" className="skip-link">
        {dictionary.ui.skipToContent}
      </a>

      <SiteLoader active={shouldShowIntro} onComplete={handleIntroComplete} />

      {showSite ? (
        <>
          <SoftCursor />
          <SiteNav visible />
          <main id="main">
            <SiteHero />
            <SiteAbout />
            <SiteMediaBand />
            <SiteIdentity />
            <SiteDivisions />
            <SiteInsights />
            <SitePartners />
            <SiteContact />
            <SiteFooter />
          </main>
        </>
      ) : (
        <main id="main" className="sr-only" aria-hidden>
          {dictionary.meta.title}
        </main>
      )}
    </>
  );
}

export function Experience() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <ExperienceInner />
      </SmoothScroll>
    </ThemeProvider>
  );
}
