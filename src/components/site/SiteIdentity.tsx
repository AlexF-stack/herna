"use client";

import {
  useDictionary,
  useLocale,
} from "@/components/providers/LocaleProvider";
import { ApproachOrbit } from "@/components/site/ApproachOrbit";
import { Reveal } from "@/components/site/Reveal";

export function SiteIdentity() {
  const dictionary = useDictionary();
  const { locale } = useLocale();
  const hint =
    locale === "fr"
      ? "Survolez ou touchez une boule"
      : "Hover or tap a sphere";

  return (
    <section
      id="identity"
      data-nav-surface="blue"
      className="section-blue section-pad border-y"
      aria-labelledby="identity-heading"
    >
      <div className="container-herna">
        <Reveal>
          <p className="label-act">{dictionary.identity.label}</p>
          <h2
            id="identity-heading"
            className="heading-display mt-4 max-w-[18ch] text-display-md"
          >
            {dictionary.identity.headline}
          </h2>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5" delay={0.04}>
            <article
              id="vision"
              className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--bg-elevated)] p-7 sm:p-8 md:p-10"
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-70"
                style={{
                  background:
                    "radial-gradient(circle, color-mix(in srgb, var(--maroon) 28%, transparent), transparent 70%)",
                }}
                aria-hidden
              />
              <p className="label-act relative">{dictionary.vision.label}</p>
              <p className="relative mt-6 font-display text-[clamp(1.35rem,3.2vw,2rem)] leading-snug tracking-tight text-[color:var(--ink)]">
                {dictionary.vision.body}
              </p>
            </article>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.08}>
            <article
              id="mission"
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--navy-deep)] p-7 text-white sm:p-8 md:p-10"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-80"
                style={{
                  background:
                    "radial-gradient(90% 80% at 100% 0%, rgba(184,146,47,0.22), transparent 50%), radial-gradient(70% 60% at 0% 100%, rgba(53,94,131,0.45), transparent 55%)",
                }}
                aria-hidden
              />
              <p className="label-act relative text-[color:var(--gold-soft)]">
                {dictionary.mission.label}
              </p>
              <p className="relative mt-6 max-w-2xl text-body-lg text-white/82">
                {dictionary.mission.body}
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal className="mt-14 md:mt-16" delay={0.1}>
          <ApproachOrbit
            label={dictionary.approach.label}
            intro={dictionary.approach.intro}
            values={dictionary.approach.values}
            hint={hint}
          />
        </Reveal>
      </div>
    </section>
  );
}
