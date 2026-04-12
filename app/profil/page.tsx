import { ProfileFolds } from "@/components/profile-folds";
import { MiniSignal, PageShell, SectionTag } from "@/components/site-chrome";
import { profileLayers } from "@/lib/site-data";

export default function ProfilPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 py-20 pt-32 lg:px-8 lg:py-28 lg:pt-40">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <article className="overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/80 shadow-xl shadow-slate-900/5 backdrop-blur-xl">
              <div className="border-b border-slate-100 bg-gradient-to-br from-white to-slate-50/50 p-8">
                <SectionTag>Architecture de profil</SectionTag>
                <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-slate-950">
                  Une lecture claire, domaine par domaine.
                </h1>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  Cette page pose les grands blocs du profil sans noyer le lecteur.
                  Chaque domaine reste compact au premier regard, puis se déploie
                  seulement quand on veut aller plus loin.
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
                    Développeur fullstack orienté backend, cloud et machine learning,
                    avec une vraie base mathématique et une logique d’exécution
                    professionnelle.
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div className="relative">
            <ProfileFolds layers={profileLayers} />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
