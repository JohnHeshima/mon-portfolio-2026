import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { MotionDiv } from "@/components/motion-div";
import {
  certifications,
  experiences,
  processSteps,
  profile,
  quickStats,
  references,
  serviceCards,
  showcaseCards,
  studies,
  workedWith,
} from "@/lib/site-data";

// Primary page navigation intentionally skips a generic "home" item.
const navigation = [
  { label: "Profil", href: "#profil" },
  { label: "Process", href: "#process" },
  { label: "Expérience", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

const profileLayers = [
  {
    id: "01",
    domain: "Web Engineering",
    title: "Applications web lisibles, scalables et prêtes à convaincre dès l’interface.",
    description:
      "Le profil ne repose pas seulement sur de la théorie. Il y a plus de trois ans d’expérience en développement web avec une capacité à transformer un besoin en expérience produit propre et crédible.",
    evidence: [
      "3+ ans d’expérience terrain en web development",
      "Approche fullstack avec exécution UI + logique métier",
      "Capacité à livrer des interfaces premium et structurées",
    ],
    signal: "Produit",
    accent: "violet",
  },
  {
    id: "02",
    domain: "Backend Systems",
    title: "Un cœur de profil orienté backend, architecture applicative et services.",
    description:
      "L’expérience chez Pamoja Tech Solution puis Kin Distribution confirme une montée en gamme cohérente sur les problématiques serveur, la structuration des APIs et la stabilité applicative.",
    evidence: [
      "Backend Developer chez Pamoja Tech Solution",
      "Backend Developer & ML Engineer chez Kin Distribution",
      "Travail sur logique serveur, intégration et fiabilité",
    ],
    signal: "Serveur",
    accent: "cyan",
  },
  {
    id: "03",
    domain: "Cloud & Infrastructure",
    title: "Une crédibilité cloud appuyée par des certifications et une culture système réelle.",
    description:
      "Le socle cloud ne sert pas juste à faire joli dans un CV. Il renforce la manière de penser architecture, déploiement, Linux, réseau et environnements modernes de production.",
    evidence: [
      "AWS Certified Cloud Practitioner",
      "Google Cloud Digital Leader",
      "Linux for System Administrators + Network Administration",
    ],
    signal: "Infra",
    accent: "amber",
  },
  {
    id: "04",
    domain: "Data Science & ML",
    title: "Une couche analytique sérieuse, ancrée dans les maths, la statistique et l’IA.",
    description:
      "Le bachelor en mathématiques, statistiques et informatique, prolongé par un master orienté recherche en data science et intelligence artificielle, donne au profil une profondeur rare pour un développeur fullstack.",
    evidence: [
      "Bachelor en Mathématiques, Statistiques et Informatique",
      "Master en Data Science & Intelligence Artificielle",
      "Python for Machine Learning + Data Analysis with Python",
    ],
    signal: "Intelligence",
    accent: "slate",
  },
] as const;

export default function Home() {
  return (
    <main className="relative overflow-hidden pt-24 lg:pt-28">
      <SoftBackground />

      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
          <div className="flex items-center justify-between gap-6 rounded-full border border-white/70 bg-white/72 px-5 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.05)] backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-display text-sm font-semibold text-white">
              {profile.initials}
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-950">{profile.name}</p>
              <p className="text-xs text-slate-500">{profile.location}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-brand">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={profile.resumeHref}
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-700"
          >
            Mon CV
          </a>
        </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-18 pt-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:pb-24 lg:pt-10">
        <MotionDiv className="lg:pt-10" distance={28} xDistance={18} rotate={0.8}>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand/80">
            Fullstack Developer
          </p>
          <h1 className="mt-6 max-w-xl font-display text-5xl leading-[1.05] font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
            John Heshima
            <br />
            Baraha 
          </h1>
          <p className="mt-7 max-w-xl text-[1.08rem] leading-8 text-slate-500">
            Je suis un développeur <span className="font-semibold text-brand">fullstack</span>{" "}
            orienté <span className="font-semibold text-slate-800">backend</span>, cloud
            et machine learning, basé à Kinshasa. Je construis des applications web
            propres, intuitives et prêtes pour la production.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-[0_22px_40px_rgba(124,58,237,0.22)] transition hover:bg-violet-700"
            >
              Say Hello!
            </a>
          </div>

          <MotionDiv
            className="mt-14"
            distance={38}
            xDistance={14}
            delay={120}
            reveal
            rotate={0.4}
          >
            <div className="grid max-w-xl gap-px overflow-hidden rounded-[1.45rem] border border-violet-100/90 bg-violet-100/90 sm:grid-cols-3">
              {quickStats.map((item) => (
                <article key={item.label} className="bg-violet-50/80 px-6 py-6 text-center">
                  <p className="text-[2rem] font-semibold tracking-[-0.04em] text-slate-800">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-500">{item.label}</p>
                </article>
              ))}
            </div>
          </MotionDiv>
        </MotionDiv>

        <MotionDiv
          className="relative flex justify-center lg:justify-end"
          distance={54}
          xDistance={-24}
          rotate={-1.2}
          scale={0.018}
        >
          <MotionDiv
            className="absolute -left-4 top-4 h-56 w-56 rounded-full bg-violet-200/55 blur-3xl"
            distance={86}
            xDistance={-48}
            reveal={false}
          />
          <MotionDiv
            className="absolute bottom-2 right-4 h-64 w-64 rounded-full bg-cyan-200/60 blur-3xl"
            distance={112}
            xDistance={42}
            reveal={false}
          />
          <MotionDiv
            className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-[linear-gradient(135deg,rgba(233,213,255,0.45),rgba(255,255,255,0)_44%,rgba(207,250,254,0.48))]"
            distance={74}
            xDistance={20}
            reveal={false}
          />
          <div className="relative w-full max-w-[33.5rem] rounded-[2.15rem] border border-white/75 bg-white/92 p-5 shadow-[0_38px_120px_rgba(15,23,42,0.1)]">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-white">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(241,245,249,0.5),rgba(255,255,255,0))]" />
              <div className="relative mx-auto aspect-[1/1.08] w-full max-w-[29rem]">
                <Image
                  src="/john_card.png"
                  alt="Portrait professionnel de John Heshima"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 90vw, 32rem"
                />
              </div>
            </div>
          </div>
        </MotionDiv>
      </section>

      <section id="profil" className="mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <MotionDiv className="lg:sticky lg:top-32 lg:self-start" distance={24} xDistance={-14} delay={40}>
            <article className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/82 shadow-[0_24px_70px_rgba(15,23,42,0.06)] backdrop-blur-xl">
              <div className="border-b border-violet-100/70 bg-[linear-gradient(135deg,rgba(245,243,255,0.95),rgba(255,255,255,0.92))] p-7">
                <SectionTag>Profil</SectionTag>
                <h2 className="mt-5 font-display text-4xl leading-tight text-slate-950">
                  Une architecture de compétences, couche par couche.
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  Au lieu d’un bloc descriptif banal, cette section montre comment le
                  profil se construit domaine après domaine : produit, backend,
                  infrastructure et intelligence.
                </p>
              </div>

              <div className="space-y-5 p-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  <MiniSignal label="Expérience" value="3+ ans" />
                  <MiniSignal label="Base académique" value="Bachelor + Master" />
                  <MiniSignal label="Cloud" value="AWS / GCP" />
                  <MiniSignal label="Langues" value="FR · EN · SW · LN" />
                </div>

                <div className="rounded-[1.5rem] border border-violet-100/70 bg-violet-50/70 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
                    Positionnement
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    Développeur fullstack orienté backend, cloud et machine learning,
                    avec une vraie base mathématique et une logique d’exécution
                    professionnelle.
                  </p>
                </div>
              </div>
            </article>
          </MotionDiv>

          <div className="relative">
            <div className="pointer-events-none absolute bottom-0 left-9 top-6 hidden w-px bg-[linear-gradient(180deg,rgba(124,58,237,0.12),rgba(14,165,233,0.1),rgba(245,158,11,0.12),rgba(15,23,42,0.08))] lg:block" />
            <div className="space-y-5">
              {profileLayers.map((layer, index) => (
                <MotionDiv
                  key={layer.id}
                  distance={24 + index * 5}
                  xDistance={index % 2 === 0 ? 12 : -12}
                  delay={80 + index * 90}
                >
                  <ProfileLayerCard
                    id={layer.id}
                    domain={layer.domain}
                    title={layer.title}
                    description={layer.description}
                    evidence={layer.evidence}
                    signal={layer.signal}
                    accent={layer.accent}
                  />
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionTag>Process</SectionTag>
            <h2 className="mt-5 font-display text-4xl text-slate-950">Ma manière de travailler.</h2>
            <p className="mt-5 max-w-md text-base leading-8 text-slate-600">
              Même sur un portfolio, la logique reste professionnelle : lecture du
              besoin, structure claire, exécution propre et finition utile. C’est ce
              niveau de discipline qui donne de la crédibilité au profil.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {processSteps.map((item, index) => (
              <MotionDiv
                key={item.step}
                distance={20 + index * 5}
                xDistance={index % 2 === 0 ? -12 : 12}
                delay={index * 90}
              >
                <article className="rounded-[1.8rem] border border-white/70 bg-white/78 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-sm font-semibold text-brand">
                    {item.step}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </article>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
        <div className="text-center">
          <SectionTag centered>Expérience</SectionTag>
          <h2 className="mt-5 font-display text-4xl text-slate-950">
            Expériences, certifications et marqueurs de crédibilité.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
            J’utilise ici uniquement des éléments réels issus du CV pour construire une
            présentation plus forte et plus lisible.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {showcaseCards.map((item, index) => (
            <MotionDiv
              key={item.title}
              distance={20 + index * 4}
              xDistance={index % 2 === 0 ? -10 : 10}
              delay={index * 70}
              rotate={index % 2 === 0 ? 0.35 : -0.35}
            >
              <article className="overflow-hidden rounded-[1.8rem] border border-white/70 bg-white/82 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur-xl transition duration-300 hover:-translate-y-1">
                <div
                  className={`h-40 ${
                    index % 3 === 0
                      ? "bg-[linear-gradient(135deg,#f5d0fe_0%,#f5f3ff_58%,#ffffff_100%)]"
                      : index % 3 === 1
                        ? "bg-[linear-gradient(135deg,#e0f2fe_0%,#f8faff_58%,#ffffff_100%)]"
                        : "bg-[linear-gradient(135deg,#fef3c7_0%,#fffdf7_58%,#f0fdfa_100%)]"
                  }`}
                >
                  <div className="flex h-full items-end p-6">
                    <span className="rounded-full bg-white/85 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  <a
                    href={item.href}
                    className="mt-5 inline-flex items-center text-sm font-semibold text-brand transition hover:text-violet-700"
                  >
                    Explorer
                  </a>
                </div>
              </article>
            </MotionDiv>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 lg:px-10 lg:py-10">
        <div className="rounded-[2.25rem] border border-white/70 bg-white/82 px-8 py-14 text-center shadow-[0_24px_70px_rgba(15,23,42,0.06)] backdrop-blur-xl">
          <SectionTag centered>
            Contact rapide
          </SectionTag>
          <h2 className="mt-5 font-display text-4xl text-slate-950">
            Vous avez un projet, une mission ou un besoin backend ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Le profil est pensé pour des opportunités sérieuses : fullstack, backend,
            cloud ou machine learning appliqué.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
          >
            Discutons du projet
          </a>
        </div>
      </section>

      <section id="certifications" className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-18">
        <div className="text-center">
          <SectionTag centered>Parcours</SectionTag>
          <h2 className="mt-5 font-display text-4xl text-slate-950">
            Formation, apprentissage continu et certifications.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {certifications.slice(0, 4).map((item, index) => (
            <MotionDiv
              key={`${item.title}-${item.period}`}
              distance={18 + index * 4}
              xDistance={index % 2 === 0 ? -8 : 8}
              delay={index * 60}
            >
              <article className="rounded-[1.7rem] border border-white/70 bg-white/82 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                  {item.period}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.provider}</p>
              </article>
            </MotionDiv>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {studies.map((item, index) => (
            <MotionDiv
              key={`${item.title}-${item.period}`}
              distance={22 + index * 6}
              xDistance={index % 2 === 0 ? -10 : 10}
              delay={140 + index * 80}
            >
              <article className="rounded-[1.9rem] border border-white/70 bg-white/82 p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                  {item.period}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-base leading-8 text-slate-600">{item.institution}</p>
              </article>
            </MotionDiv>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTag>Services</SectionTag>
            <h2 className="mt-5 font-display text-4xl text-slate-950">Ce que je fais.</h2>
            <p className="mt-5 max-w-md text-base leading-8 text-slate-600">
              Le positionnement est volontairement clair : un développeur capable de
              produire une interface propre, un backend solide et une approche technique
              crédible jusqu’au cloud et à la data.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
            >
              Travaillons ensemble
            </a>
          </div>

          <div className="grid gap-5">
            {serviceCards.map((item, index) => (
              <MotionDiv
                key={item.title}
                distance={18 + index * 5}
                xDistance={index % 2 === 0 ? -8 : 8}
                delay={index * 80}
              >
                <article className="rounded-[1.8rem] border border-white/70 bg-white/82 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur-xl">
                  <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </article>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-14">
        <div className="text-center">
          <SectionTag centered>Écosystème</SectionTag>
          <h2 className="mt-5 font-display text-4xl text-slate-950">Structures liées à mon parcours.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
            Pas de faux logos, pas de faux clients. Seulement les organisations réellement
            présentes dans mon parcours académique et professionnel.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {workedWith.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/70 bg-white/78 px-5 py-3 text-sm font-medium text-slate-600 shadow-[0_12px_30px_rgba(15,23,42,0.04)] backdrop-blur-xl"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-14">
        <div className="text-center">
          <SectionTag centered>Références</SectionTag>
          <h2 className="mt-5 font-display text-4xl text-slate-950">
            Références professionnelles mentionnées dans le CV.
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-3">
          {references.map((item, index) => (
            <MotionDiv
              key={item.name}
              distance={16 + index * 4}
              xDistance={index % 2 === 0 ? -8 : 8}
              delay={index * 90}
            >
              <article className="rounded-[1.8rem] border border-white/70 bg-white/82 p-6 text-center shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur-xl">
                <h3 className="text-lg font-semibold text-slate-950">{item.name}</h3>
                <p className="mt-2 text-sm text-brand">{item.role}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.company}</p>
              </article>
            </MotionDiv>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-18">
        <div className="grid gap-8 rounded-[2.25rem] border border-white/70 bg-white/82 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)] backdrop-blur-xl lg:grid-cols-[0.86fr_1.14fr] lg:p-8">
          <aside className="rounded-[1.9rem] border border-violet-100/60 bg-white/72 p-7">
            <SectionTag>Contact</SectionTag>
            <h2 className="mt-5 font-display text-4xl text-slate-950">
              Parlons de votre projet.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Vous pouvez me contacter pour un poste, une mission, un produit web, du
              backend engineering ou un besoin lié à la data et au machine learning.
            </p>

            <div className="mt-8 space-y-4">
              <ContactInfo label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              <ContactInfo
                label="Téléphone"
                value={profile.phone}
                href={`tel:${profile.phoneRaw}`}
              />
              <ContactInfo label="Localisation" value={profile.address} />
              <ContactInfo label="CV" value="Télécharger le PDF" href={profile.resumeHref} />
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-violet-100/80 bg-white/85 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
                Parcours récent
              </p>
              <div className="mt-4 space-y-4">
                {experiences.slice(0, 2).map((item) => (
                  <div key={item.company} className="border-b border-slate-100 pb-4 last:border-b-0 last:pb-0">
                    <p className="text-sm font-semibold text-slate-900">{item.role}</p>
                    <p className="mt-1 text-sm text-slate-500">{item.company}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="rounded-[1.9rem] border border-white/65 bg-white/70 p-7">
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="mt-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 rounded-full border border-white/65 bg-white/70 px-6 py-5 text-sm text-slate-600 shadow-[0_18px_45px_rgba(15,23,42,0.04)] backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand font-display text-xs font-semibold text-white">
              {profile.initials}
            </div>
            <span>{profile.name}</span>
          </div>
          <p>Portfolio conçu en Next.js avec backend Node.js.</p>
        </div>
      </footer>
    </main>
  );
}

function SoftBackground() {
  return (
    <>
      {/* One shared atmospheric canvas keeps the page visually continuous. */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_8%,rgba(233,213,255,0.7),transparent_22%),radial-gradient(circle_at_96%_28%,rgba(207,250,254,0.7),transparent_20%),radial-gradient(circle_at_10%_62%,rgba(254,249,195,0.52),transparent_18%),linear-gradient(180deg,#fffdfc_0%,#faf7ff_52%,#fbfdff_100%)]" />
      <MotionDiv
        className="pointer-events-none absolute left-[-4rem] top-[26rem] -z-10 h-96 w-96 rounded-full bg-amber-100/35 blur-3xl"
        distance={80}
        xDistance={-46}
        reveal={false}
      />
      <MotionDiv
        className="pointer-events-none absolute right-[-3rem] top-[54rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-cyan-100/45 blur-3xl"
        distance={110}
        xDistance={54}
        reveal={false}
      />
    </>
  );
}

function SectionTag({
  children,
  centered = false,
  dark = false,
}: {
  children: React.ReactNode;
  centered?: boolean;
  dark?: boolean;
}) {
  return (
    <p
      className={[
        "text-sm font-semibold uppercase tracking-[0.24em]",
        centered ? "text-center" : "",
        dark ? "text-violet-200" : "text-brand",
      ].join(" ")}
    >
      {children}
    </p>
  );
}

function ContactInfo({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = href ? (
    <a href={href} className="transition hover:text-brand">
      {value}
    </a>
  ) : (
    value
  );

  return (
    <div className="rounded-[1.35rem] border border-violet-100/80 bg-white/85 px-5 py-4 backdrop-blur-xl">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{label}</p>
      <p className="mt-2 text-sm font-semibold text-slate-900">{content}</p>
    </div>
  );
}

function MiniSignal({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.25rem] border border-slate-200/70 bg-white/75 px-4 py-4">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-sm font-semibold text-slate-900">{value}</p>
    </div>
  );
}

function ProfileLayerCard({
  accent,
  description,
  domain,
  evidence,
  id,
  signal,
  title,
}: {
  accent: "violet" | "cyan" | "amber" | "slate";
  description: string;
  domain: string;
  evidence: readonly string[];
  id: string;
  signal: string;
  title: string;
}) {
  const accentStyles = {
    violet: {
      badge: "bg-violet-100 text-violet-700",
      line: "bg-violet-500",
      panel: "from-violet-50/85 to-white",
      dot: "bg-violet-500",
    },
    cyan: {
      badge: "bg-cyan-100 text-cyan-700",
      line: "bg-cyan-500",
      panel: "from-cyan-50/85 to-white",
      dot: "bg-cyan-500",
    },
    amber: {
      badge: "bg-amber-100 text-amber-700",
      line: "bg-amber-500",
      panel: "from-amber-50/85 to-white",
      dot: "bg-amber-500",
    },
    slate: {
      badge: "bg-slate-100 text-slate-700",
      line: "bg-slate-500",
      panel: "from-slate-50/90 to-white",
      dot: "bg-slate-500",
    },
  }[accent];

  return (
    // Each layer expresses one business domain with concrete evidence from the CV.
    <article className={`relative overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br ${accentStyles.panel} p-6 shadow-[0_22px_60px_rgba(15,23,42,0.05)] backdrop-blur-xl lg:ml-18`}>
      <div className="absolute left-6 top-6 hidden lg:flex lg:h-7 lg:w-7 lg:-translate-x-[4.35rem] lg:items-center lg:justify-center lg:rounded-full lg:border lg:border-white lg:bg-white/90">
        <span className={`h-2.5 w-2.5 rounded-full ${accentStyles.line}`} />
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className={`rounded-full px-3 py-1.5 text-xs font-semibold ${accentStyles.badge}`}>
              {domain}
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Layer {id}
            </span>
          </div>

          <h3 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-slate-950">
            {title}
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            {description}
          </p>
        </div>

        <div className="w-full rounded-[1.4rem] border border-white/80 bg-white/78 p-4 lg:max-w-[12rem]">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
            Signal
          </p>
          <p className="mt-3 text-xl font-semibold tracking-[-0.03em] text-slate-950">
            {signal}
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Ce domaine renforce la projection professionnelle du profil.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 lg:grid-cols-3">
        {evidence.map((item) => (
          <div
            key={item}
            className="rounded-[1.25rem] border border-white/80 bg-white/80 px-4 py-4"
          >
            <div className="flex items-start gap-3">
              <span className={`mt-2 h-2 w-2 rounded-full ${accentStyles.dot}`} />
              <p className="text-sm leading-6 text-slate-700">{item}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
