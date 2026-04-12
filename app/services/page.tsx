import Link from "next/link";
import { ServiceFolds } from "@/components/service-folds";
import { PageShell, SectionTag } from "@/components/site-chrome";
import { serviceCards } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 py-16 pt-32 lg:px-8 lg:py-24 lg:pt-40">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionTag>Services</SectionTag>
            <h1 className="mt-6 font-display text-4xl font-semibold text-slate-950">
              Des services structurés pour des besoins web, mobile, cloud et data.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-8 text-slate-600">
              Trouvez ici les périmètres sur lesquels j&apos;interviens avec une
              logique d&apos;ingénierie claire, une exécution propre et une attention
              constante à la qualité de livraison.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-md shadow-slate-900/20 transition-all hover:bg-brand-soft"
            >
              Travaillons ensemble
            </Link>
          </div>

          <div>
            <ServiceFolds items={serviceCards} />
          </div>
        </div>
      </section>

     
    </PageShell>
  );
}
