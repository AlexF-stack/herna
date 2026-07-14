"use client";

import { useDictionary } from "@/components/providers/LocaleProvider";
import { Reveal } from "@/components/site/Reveal";
import Image from "next/image";

export function SitePartners() {
  const dictionary = useDictionary();

  return (
    <section
      id="partners"
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

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {dictionary.partners.items.map((partner, i) => (
            <Reveal key={partner.id} delay={i * 0.04}>
              <article className="flex h-full flex-col items-center justify-center rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg-elevated)] px-5 py-8 text-center transition duration-500 hover:border-[color:var(--maroon)]/30">
                <div
                  className="mb-5 flex h-14 w-full items-center justify-center rounded-xl px-3"
                  style={{ background: partner.logoBg }}
                >
                  <Image
                    src={partner.logoSrc}
                    alt={partner.name}
                    width={140}
                    height={48}
                    className="max-h-9 w-auto object-contain"
                  />
                </div>
                <h3 className="font-display text-sm text-[color:var(--ink)] md:text-base">
                  {partner.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[color:var(--muted)] md:text-sm">
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
