import { ContactForm } from "@/components/contact-form";
import { MotionDiv } from "@/components/motion-div";
import { PageShell, SectionTag } from "@/components/site-chrome";
import { profile } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
        <MotionDiv distance={20} xDistance={0} delay={0}>
          <SectionTag>Contact</SectionTag>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight text-slate-950 lg:text-5xl">
            Parlons de votre sujet.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-500">
            Vous pouvez me contacter pour un poste, une mission, un produit tech, du
            backend engineering ou tout sujet lié à la data et au machine learning.
          </p>
        </MotionDiv>

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Colonne gauche - Formulaire */}
          <MotionDiv distance={20} xDistance={-10} delay={80}>
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm lg:p-8">
              <ContactForm />
            </div>
          </MotionDiv>

          {/* Colonne droite - Infos de contact */}
          <MotionDiv distance={20} xDistance={10} delay={120}>
            <div className="space-y-5">
              {/* Carte Coordonnées */}
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm lg:p-7">
                <h2 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Coordonnées
                </h2>
                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      Email
                    </p>
                    <a
                      href={`mailto:${profile.email}`}
                      className="mt-1 block text-sm text-slate-700 transition hover:text-slate-900"
                    >
                      {profile.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      Téléphone
                    </p>
                    <a
                      href={`tel:${profile.phoneRaw}`}
                      className="mt-1 block text-sm text-slate-700 transition hover:text-slate-900"
                    >
                      {profile.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      Localisation
                    </p>
                    <p className="mt-1 text-sm text-slate-700">{profile.address}</p>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <a
                    href={profile.resumeHref}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Télécharger le CV
                  </a>
                </div>
              </div>

              

              {/* Disponibilité */}
              <div className="rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm lg:p-7">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <p className="text-sm font-medium text-slate-700">
                    Disponible pour collaborer
                  </p>
                </div>
                <p className="mt-3 text-xs leading-6 text-slate-500">
                  Réponse sous 24 à 48 heures. Échangeons sur votre projet ou votre besoin.
                </p>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>
    </PageShell>
  );
}
