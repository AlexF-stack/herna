"use client";

import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { useDictionary } from "@/components/providers/LocaleProvider";
import { HashScroll } from "@/components/site/HashScroll";
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
import { useCallback } from "react";

function ExperienceInner() {
  const dictionary = useDictionary();

  const handleIntroComplete = useCallback(() => {
    document.getElementById("herna-boot")?.remove();
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">
        {dictionary.ui.skipToContent}
      </a>

      <SiteLoader onComplete={handleIntroComplete} />
      <HashScroll />

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
