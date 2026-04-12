import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "@/components/motion-div";
import { ProfileFolds } from "@/components/profile-folds";
import { MiniSignal, PageShell, SectionTag } from "@/components/site-chrome";
import { processSteps, profileLayers, quickStats } from "@/lib/site-data";

const interestTechStack = [
  { name: "HTML", src: "/tech-logos/html5.svg", width: 70, height: 70 },
  { name: "CSS", src: "/tech-logos/css.svg", width: 70, height: 70 },
  { name: "JavaScript", src: "/tech-logos/javascript.svg", width: 70, height: 70 },
  { name: "React", src: "/tech-logos/react.svg", width: 88, height: 88 },
  { name: "Node.js", src: "/tech-logos/nodejs.svg", width: 78, height: 78 },
  { name: "React Native", src: "/tech-logos/react-native.svg", width: 88, height: 88 },
  { name: "Firebase", src: "/tech-logos/firebase.svg", width: 68, height: 68 },
  { name: "Google Cloud", src: "/tech-logos/google-cloud.svg", width: 88, height: 68 },
  { name: "AWS", src: "/tech-logos/aws.svg", width: 98, height: 60 },
] as const;

export default function Home() {
  return (
    <PageShell>
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-32 lg:grid-cols-[1fr_1.1fr] lg:px-8 lg:pb-24 lg:pt-40">
        <MotionDiv className="lg:pt-6">
          <span className="inline-flex items-center gap-x-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            Disponible pour missions
          </span>
          <h1 className="mt-8 max-w-2xl font-display text-5xl leading-[1.1] font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
            John Heshima
            <br />
            <span className="text-brand">Baraha</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            <span className="font-semibold text-brand">Software Engineer</span> orienté {" "}
            <span className="font-semibold text-slate-800">backend</span>, cloud et machine learning,
            basé à Kinshasa. Je mets la technologie au service de la performance des entreprises
            et de la transformation structurelle des organisations.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-900/20 transition-all hover:bg-brand-soft"
            >
              Discutons de votre projet
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/profil"
              className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
            >
              Découvrir mon profil
            </Link>
          </div>

          <div className="mt-16 flex max-w-xl flex-wrap items-center gap-2 rounded-2xl border border-white/80 bg-white/60 p-1.5 backdrop-blur-sm">
            {quickStats.map((item) => (
              <article
                key={item.label}
                className="flex-1 rounded-xl bg-white px-4 py-4 text-center shadow-sm"
              >
                <p className="text-2xl font-bold tracking-tight text-slate-900">
                  {item.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </MotionDiv>

        <MotionDiv className="relative flex justify-center lg:justify-end">
          <div className="relative aspect-square w-full max-w-lg">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[rgba(15,108,116,0.18)] via-[rgba(153,246,228,0.18)] to-[rgba(253,230,138,0.16)] blur-3xl" />
            <div className="relative h-full w-full overflow-hidden rounded-[3rem] border-8 border-white/90 bg-white/90 shadow-2xl shadow-slate-900/10">
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
        </MotionDiv>
      </section>

      <section id="profil" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <MotionDiv className="lg:sticky lg:top-32 lg:self-start">
            <article className="overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/80 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
              <div className="border-b border-slate-100 bg-gradient-to-br from-white to-slate-50/50 p-8">
                <SectionTag>Architecture de profil</SectionTag>
                <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-slate-950">
                  Mon profil en un coup d&apos;œil.
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  Chaque domaine est présenté de façon synthétique. Cliquez pour découvrir les détails
                  qui vous intéressent.
                </p>
              </div>

              <div className="space-y-6 p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <MiniSignal label="Expérience" value="3+ ans" />
                  <MiniSignal label="Base académique" value="Bachelor + Master" />
                  <MiniSignal label="Cloud" value="AWS / GCP" />
                  <MiniSignal label="Langues" value="FR · EN · SW · LN" />
                </div>

                <div className="rounded-2xl border border-brand/20 bg-gradient-to-br from-brand/5 to-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    Positionnement
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    Développeur fullstack, cloud et machine learning Engineer,
                    avec une vraie base mathématique et une logique d’exécution
                    professionnelle.
                  </p>
                </div>
              </div>
            </article>
          </MotionDiv>

          <div className="relative">
            <ProfileFolds layers={profileLayers} />
          </div>
        </div>
      </section>

      <section id="interets" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionTag>Centres d’intérêt</SectionTag>
            <h2 className="mt-6 font-display text-4xl font-semibold text-slate-950">
              Les domaines qui structurent ma trajectoire.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-slate-600">
              Ma dynamique professionnelle et académique repose sur quatre axes
              majeurs : l’intelligence artificielle, l’ingénierie logicielle, le
              cloud et la digitalisation des services. C’est cette combinaison qui
              guide mes choix de recherche, de construction produit et d’impact.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {processSteps.map((item) => (
              <MotionDiv key={item.step}>
                <article className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/10 to-brand/5 text-2xl font-bold text-brand shadow-sm">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </article>
              </MotionDiv>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 lg:gap-x-14 lg:gap-y-10">
          {interestTechStack.map((item) => (
            <TechLogo key={item.name} {...item} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function TechLogo({
  height,
  name,
  src,
  width,
}: {
  height: number;
  name: string;
  src: string;
  width: number;
}) {
  return (
    <div className="flex items-center justify-center opacity-95 transition duration-300 hover:scale-[1.04] hover:opacity-100">
      <Image src={src} alt={name} width={width} height={height} className="h-auto w-auto object-contain" />
    </div>
  );
}
