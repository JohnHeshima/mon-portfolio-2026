import Link from "next/link";

// Keeps the fallback page visually aligned with the rest of the portfolio.
export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center">
      <div className="rounded-full border border-brand/20 bg-brand/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand">
        404
      </div>
      <h1 className="mt-6 font-display text-5xl text-slate-950 sm:text-6xl">
        Page introuvable.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
        L’URL demandée n’existe pas ou n’est plus disponible. Revenez à la page
        d’accueil pour consulter le portfolio, le CV et les endpoints du backend.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-soft"
      >
        Retour à l’accueil
      </Link>
    </main>
  );
}
