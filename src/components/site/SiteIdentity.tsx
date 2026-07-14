"use client";

import { useDictionary } from "@/components/providers/LocaleProvider";
import { Reveal } from "@/components/site/Reveal";

export function SiteIdentity() {
  const dictionary = useDictionary();

  const cards = [
    {
      id: "vision",
      label: dictionary.vision.label,
      body: dictionary.vision.body,
    },
    {
      id: "mission",
      label: dictionary.mission.label,
      body: dictionary.mission.body,
    },
  ];

  return (
    <section
      id="identity"
      className="section-blue section-pad border-y"
      aria-labelledby="identity-heading"
    >
      <div className="container-herna">
        <Reveal>
          <p className="label-act">{dictionary.identity.label}</p>
          <h2 id="identity-heading" className="heading-display mt-4 max-w-[18ch] text-display-md">
            {dictionary.identity.headline}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cards.map((card, i) => (
            <Reveal key={card.id} delay={i * 0.06}>
              <article
                id={card.id}
                className={`h-full rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg-elevated)] p-6 shine-border sm:p-7 md:p-9 ${
                  card.id === "vision"
                    ? "card-accent-maroon"
                    : "card-accent-blue"
                }`}
              >
                <p className="label-act">{card.label}</p>
                <p className="mt-5 text-body-lg text-[color:var(--ink)]">
                  {card.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6" delay={0.1}>
          <article
            id="approach"
            className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg-elevated)] p-7 md:p-9"
          >
            <p className="label-act">{dictionary.approach.label}</p>
            <p className="mt-5 max-w-3xl text-body-lg text-[color:var(--muted)]">
              {dictionary.approach.intro}
            </p>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {dictionary.approach.values.map((value) => (
                <li
                  key={value.title}
                  className="border-t border-[color:var(--line)] pt-4 accent-rule"
                >
                  <h3 className="font-display text-lg uppercase tracking-wide text-[color:var(--ink)]">
                    {value.title}
                  </h3>
                  {value.description ? (
                    <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                      {value.description}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
