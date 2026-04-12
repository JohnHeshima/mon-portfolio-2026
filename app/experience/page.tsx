import { MotionDiv } from "@/components/motion-div";
import { PageShell, SectionTag } from "@/components/site-chrome";
import {
  certifications,
  experiences,
  references,
  studies,
  workedWith,
} from "@/lib/site-data";

export default function ExperiencePage() {
  return (
    <PageShell>
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-32 lg:px-8 lg:pb-16 lg:pt-40">
        <MotionDiv distance={20} xDistance={0} delay={0}>
          <SectionTag>Expérience</SectionTag>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-tight text-slate-950 lg:text-5xl">
            Expériences, parcours et marqueurs de crédibilité.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-500">
            Retrouvez ici mes expériences professionnelles, mes certifications,
            mon parcours académique et les personnes ou entités de référence.
          </p>
        </MotionDiv>
      </section>

      {/* Timeline Expériences */}
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
        <div className="mb-10 flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Parcours professionnel
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200" />
        </div>

        <div className="relative space-y-12">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-slate-200 lg:left-8" />

          {experiences.map((item, index) => (
            <MotionDiv
              key={`${item.company}-${item.period}`}
              distance={20 + index * 5}
              xDistance={0}
              delay={index * 80}
            >
              <article className="relative grid gap-8 pl-16 lg:grid-cols-[1fr_2fr] lg:pl-20">
                <div className="absolute left-5 top-0 h-3 w-3 rounded-full border-2 border-white bg-brand shadow-sm lg:left-7" />

                <div>
                  <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {item.period}
                  </span>
                  <h2 className="mt-4 text-xl font-semibold text-slate-900 lg:text-2xl">
                    {item.role}
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    <a
                      href={item.companyHref}
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-brand"
                    >
                      {item.company}
                    </a>
                  </p>
                </div>

                <div className="space-y-5">
                  <p className="text-base leading-7 text-slate-600">{item.description}</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {item.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-4 text-sm leading-6 text-slate-600 shadow-sm"
                      >
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* Certifications & Études */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="mb-12">
          <SectionTag>Formation & Certifications</SectionTag>
          <h2 className="mt-4 font-display text-3xl font-semibold text-slate-950">
            Apprentissage continu et qualifications.
          </h2>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Certifications
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {certifications.slice(0, 4).map((item, index) => (
                <MotionDiv
                  key={`${item.title}-${item.period}`}
                  distance={16 + index * 4}
                  xDistance={0}
                  delay={index * 60}
                >
                  <article className="group h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-brand">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-xs font-medium uppercase tracking-wider text-brand">
                      {item.period}
                    </p>
                    <h4 className="mt-3 text-base font-semibold text-slate-900">
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="transition hover:text-brand"
                        >
                          {item.title}
                        </a>
                      ) : (
                        item.title
                      )}
                    </h4>
                    <p className="mt-2 text-sm text-slate-500">{item.provider}</p>
                  </article>
                </MotionDiv>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Parcours académique
            </h3>
            <div className="grid gap-4 lg:grid-cols-2">
              {studies.map((item, index) => (
                <MotionDiv
                  key={`${item.title}-${item.period}`}
                  distance={20 + index * 4}
                  xDistance={0}
                  delay={100 + index * 60}
                >
                  <article className="flex h-full flex-col rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50/50 p-8 shadow-sm">
                    <p className="text-xs font-medium uppercase tracking-wider text-brand">
                      {item.period}
                    </p>
                    <h4 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h4>
                    <p className="mt-3 text-base text-slate-500">{item.institution}</p>
                  </article>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Écosystème */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="rounded-3xl border border-slate-100 bg-white p-10 shadow-sm">
          <div className="text-center">
            <SectionTag centered>Écosystème</SectionTag>
            <h2 className="mt-4 font-display text-2xl font-semibold text-slate-950">
              Structures liées à mon parcours
            </h2>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {workedWith.map((item) => (
              <EntityChip key={item.label} label={item.label} href={item.href} />
            ))}
          </div>
        </div>
      </section>

      {/* Références */}
      <section className="mx-auto max-w-7xl px-6 py-12 pb-24 lg:px-8 lg:py-16 lg:pb-32">
        <div className="mb-10 text-center">
          <SectionTag centered>Références</SectionTag>
          <h2 className="mt-4 font-display text-2xl font-semibold text-slate-950">
            Recommandations professionnelles
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {references.map((item, index) => (
            <MotionDiv
              key={item.name}
              distance={16 + index * 4}
              xDistance={0}
              delay={index * 70}
            >
              <article className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-lg font-medium text-slate-600">
                  {item.name.charAt(0)}
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{item.name}</h3>
                <p className="mt-1 text-sm text-brand">{item.role}</p>
                <p className="mt-1 text-sm text-slate-500">
                  <a
                    href={item.companyHref}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-brand"
                  >
                    {item.company}
                  </a>
                </p>
              </article>
            </MotionDiv>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function EntityChip({ label, href }: { label: string; href?: string }) {
  const className =
    "rounded-full border border-slate-200 bg-slate-50/80 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-brand/20 hover:text-brand";

  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {label}
    </a>
  ) : (
    <span className={className}>{label}</span>
  );
}
