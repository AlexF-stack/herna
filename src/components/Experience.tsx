"use client";

import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { useDictionary } from "@/components/providers/LocaleProvider";
import { HashScroll } from "@/components/site/HashScroll";
import { SiteAbout } from "@/components/site/SiteAbout";
import { SiteContact } from "@/components/site/SiteContact";
import { SiteDivisions } from "@/components/site/SiteDivisions";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHero } from "@/components/site/SiteHero";
import { SiteIdentity } from "@/components/site/SiteIdentity";
import { SiteLeadership } from "@/components/site/SiteLeadership";
import { SiteLoader } from "@/components/site/SiteLoader";
import { SiteMediaBand } from "@/components/site/SiteMediaBand";
import { SiteNav } from "@/components/site/SiteNav";
import { SitePartners } from "@/components/site/SitePartners";
import { SiteStory } from "@/components/site/SiteStory";
import { SiteBusinessModel } from "@/components/site/SiteBusinessModel";
import { SiteWhyInvest } from "@/components/site/SiteWhyInvest";
import { useCallback } from "react";

function ExperienceInner() {
  const dictionary = useDictionary();

  const handleIntroComplete = useCallback(() => {
    /* intro complete */
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
        <SiteLeadership />
        <SiteStory />
        <SiteIdentity />
        <SiteBusinessModel />
        <SiteWhyInvest />
        <SiteMediaBand />
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
    <SmoothScroll>
      <ExperienceInner />
    </SmoothScroll>
  );
}
