"use client";

import { useDictionary } from "@/components/providers/LocaleProvider";
import { Reveal } from "@/components/site/Reveal";
import { TiltCard } from "@/components/site/TiltCard";
import Image from "next/image";

export function SitePartners() {
  const dictionary = useDictionary();

  return (
    <section
      id="partners"
      data-nav-surface="gold"
      className="section-gold section-pad border-y"
      aria-labelledby="partners-heading"
    >
      <div className="container-herna">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="label-act">{dictionary.partners.label}</p>
          <h2
            id="partners-heading"
            className="heading-display mt-4 text-display-md"
          >
            {dictionary.partners.headline}
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-5">
          {dictionary.partners.items.map((partner, i) => (
            <Reveal
              key={partner.id}
              delay={i * 0.04}
              className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.875rem)]"
            >
              <TiltCard intensity={9} className="h-full">
                <article className="flex h-full flex-col items-center rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg-elevated)] px-6 py-9 text-center transition duration-500 hover:border-[color:var(--gold)]/40 hover:shadow-[0_16px_40px_rgba(10,14,26,0.1)]">
                  <div className="flex h-28 w-full items-center justify-center sm:h-32">
                    <Image
                      src={partner.logoSrc}
                      alt={partner.name}
                      width={partner.id === "tpg" ? 360 : 260}
                      height={partner.id === "tpg" ? 160 : 120}
                      className={`w-auto max-w-[94%] object-contain ${
                        partner.id === "tpg"
                          ? "max-h-[5.75rem] sm:max-h-[6.5rem]"
                          : "max-h-24 sm:max-h-28"
                      }`}
                    />
                  </div>
                  <h3 className="mt-6 font-display text-base text-[color:var(--ink)] md:text-lg">
                    {partner.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                    {partner.role}
                  </p>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
