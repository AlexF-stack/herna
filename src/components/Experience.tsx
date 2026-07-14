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
import { useCallback, useEffect, useState } from "react";

const SoftCursor = dynamic(
  () => import("@/components/site/SoftCursor").then((m) => m.SoftCursor),
  { ssr: false },
);

function ExperienceInner() {
  const dictionary = useDictionary();
  const { shouldShowIntro, ready, markComplete } = useSessionIntro();
  const [showIntro, setShowIntro] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (!ready) return;
    if (shouldShowIntro) {
      setShowIntro(true);
      return;
    }
    setShowNav(true);
    setShowIntro(false);
  }, [ready, shouldShowIntro]);

  const handleIntroComplete = useCallback(() => {
    markComplete();
    setShowIntro(false);
    setShowNav(true);
  }, [markComplete]);

  return (
    <>
      <a href="#main" className="skip-link">
        {dictionary.ui.skipToContent}
      </a>

      <SoftCursor />
      <SiteLoader active={ready && showIntro} onComplete={handleIntroComplete} />
      <SiteNav visible={showNav} />

      {!ready && (
        <div
          className="fixed inset-0 z-50 bg-[#f7f4ef]"
          aria-busy="true"
          aria-label={dictionary.ui.loading}
        />
      )}

      <main id="main" style={{ visibility: ready ? "visible" : "hidden" }}>
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
