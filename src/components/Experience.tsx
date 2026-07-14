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
import { SiteLoader } from "@/components/site/SiteLoader";
import { SiteMediaBand } from "@/components/site/SiteMediaBand";
import { SiteNav } from "@/components/site/SiteNav";
import { SitePartners } from "@/components/site/SitePartners";
import { useSessionIntro } from "@/hooks/useSessionIntro";
import dynamic from "next/dynamic";
import { useCallback } from "react";

const SoftCursor = dynamic(
  () => import("@/components/site/SoftCursor").then((m) => m.SoftCursor),
  { ssr: false },
);

function ExperienceInner() {
  const dictionary = useDictionary();
  const { shouldShowIntro, markComplete } = useSessionIntro();

  const handleIntroComplete = useCallback(() => {
    markComplete();
    document.getElementById("herna-boot")?.remove();
  }, [markComplete]);

  return (
    <>
      <a href="#main" className="skip-link">
        {dictionary.ui.skipToContent}
      </a>

      {/* Site always mounts under the loader so nav / FR / divisions stay reachable */}
      <SiteLoader active={shouldShowIntro} onComplete={handleIntroComplete} />

      <SoftCursor />
      <SiteNav visible />
      <main id="main">
        <SiteHero />
        <SiteAbout />
        <SiteMediaBand />
        <SiteIdentity />
        <SiteDivisions />
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
