"use client";

import { useDictionary } from "@/components/providers/LocaleProvider";
import { Reveal } from "@/components/site/Reveal";
import Image from "next/image";

export function SitePartners() {
  const dictionary = useDictionary();

  return (
    <section
      id="partners"
      data-nav-surface="blue"
      className="section-blue section-pad border-y"
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

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dictionary.partners.items.map((partner, i) => (
            <Reveal key={partner.id} delay={i * 0.04}>
              <article className="flex h-full flex-col items-center rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg-elevated)] px-6 py-9 text-center transition duration-500 hover:border-[color:var(--maroon)]/30 hover:shadow-[0_16px_40px_rgba(22,48,72,0.08)]">
                <div
                  className="flex h-28 w-full items-center justify-center sm:h-32"
                  style={
                    partner.logoBg !== "transparent"
                      ? {
                          backgroundColor: partner.logoBg,
                          borderRadius: "0.75rem",
                        }
                      : undefined
                  }
                >
                  <Image
                    src={partner.logoSrc}
                    alt={partner.name}
                    width={260}
                    height={120}
                    className="max-h-24 w-auto max-w-[90%] object-contain sm:max-h-28"
                  />
                </div>
                <h3 className="mt-6 font-display text-base text-[color:var(--ink)] md:text-lg">
                  {partner.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                  {partner.role}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
