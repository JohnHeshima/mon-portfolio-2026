import Link from "next/link";
import { profile } from "@/lib/site-data";

export const siteNavigation = [
  { label: "Profil", href: "/profil" },
  { label: "Intérêts", href: "/#interets" },
  { label: "Expérience", href: "/experience" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative overflow-hidden bg-slate-50/30">
      <SoftBackground />
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-6 rounded-2xl border border-white/80 bg-white/80 px-5 py-3 shadow-lg backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand font-display text-sm font-semibold text-white shadow-md shadow-brand/20">
              {profile.initials}
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-slate-950">{profile.name}</p>
              <p className="text-xs text-slate-500">{profile.location}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full bg-slate-100/80 p-1 text-sm text-slate-600 md:flex">
            {siteNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 font-medium transition hover:bg-white hover:text-brand hover:shadow-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={profile.resumeHref}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white shadow-md shadow-brand/25 transition-all hover:bg-brand/90 hover:shadow-lg"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="relative">Mon CV</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-8 pb-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 rounded-full border border-white/60 bg-white/80 px-6 py-4 text-sm text-slate-600 shadow-lg backdrop-blur-xl lg:flex-row lg:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand font-display text-xs font-semibold text-white">
            {profile.initials}
          </div>
          <span className="font-medium">{profile.name}</span>
        </div>
        <p className="text-center">
          Portfolio conçu en Next.js avec backend Node.js — © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export function SoftBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_76%_10%,rgba(15,108,116,0.16),transparent_24%),radial-gradient(circle_at_96%_28%,rgba(153,246,228,0.28),transparent_22%),radial-gradient(circle_at_10%_62%,rgba(253,230,138,0.22),transparent_20%),linear-gradient(180deg,#fffdfc_0%,#f3fbfb_52%,#f7fcfa_100%)]" />
  );
}

export function SectionTag({
  children,
  centered = false,
}: {
  children: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <span
      className={[
        "inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand",
        centered ? "mx-auto text-center" : "",
      ].join(" ")}
    >
      {children}
    </span>
  );
}

export function ContactInfo({
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
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-slate-900">{content}</p>
    </div>
  );
}

export function MiniSignal({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-slate-900">{value}</p>
    </div>
  );
}
