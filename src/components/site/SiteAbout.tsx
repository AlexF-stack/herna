"use client";

import {
  useDictionary,
  useLocale,
} from "@/components/providers/LocaleProvider";
import { AfricaGoldMap } from "@/components/site/AfricaGoldMap";
import { Reveal } from "@/components/site/Reveal";
import { brandAssets } from "@/content/brand";

export function SiteAbout() {
  const dictionary = useDictionary();
  const { locale } = useLocale();

  const hqShort =
    locale === "fr" ? "Cotonou, Bénin" : "Cotonou, Benin";

  const facts = [
    { label: dictionary.ui.founded, value: String(brandAssets.founded) },
    { label: dictionary.ui.headquarters, value: hqShort },
    {
      label: dictionary.ui.businessScope,
      value: brandAssets.presence[locale],
    },
    {
      label: dictionary.ui.strategicUnits,
      value: "5",
    },
  ];

  return (
    <section
      id="about"
      data-nav-surface="light"
      className="section-pad"
      aria-labelledby="about-heading"
    >
      <div className="container-herna grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="label-act">{dictionary.about.label}</p>
          <h2
            id="about-heading"
            className="heading-display mt-4 text-display-md"
          >
            {dictionary.about.headline}
          </h2>
          <p className="mt-6 text-body-lg text-[color:var(--muted)]">
            {dictionary.about.body}
          </p>
          <p className="mt-5 border-l-2 border-[color:var(--gold)] pl-4 text-sm italic leading-relaxed text-[color:var(--ink)] md:text-base">
            {dictionary.about.philosophy}
          </p>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <AfricaGoldMap locale={locale} />
        </Reveal>
      </div>

      <div className="container-herna mt-10 grid gap-3 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
        {facts.map((fact, i) => (
          <Reveal key={fact.label} delay={0.04 * i}>
            <div className="rounded-xl border border-[color:var(--line)] bg-[color:var(--bg-elevated)] px-5 py-4">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--gold)]">
                {fact.label}
              </p>
              <p className="mt-2 font-display text-lg text-[color:var(--ink)]">
                {fact.value}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
