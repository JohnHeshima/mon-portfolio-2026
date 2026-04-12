"use client";

import { useState, useTransition } from "react";

// Client-side form state stays minimal because validation and persistence live on the server.
type ContactPayload = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

const initialValues: ContactPayload = {
  name: "",
  email: "",
  company: "",
  service: "Mission fullstack",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<ContactPayload>(initialValues);
  const [notice, setNotice] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function updateField<K extends keyof ContactPayload>(
    field: K,
    value: ContactPayload[K],
  ) {
    setValues((current) => ({ ...current, [field]: value }));
    if (notice) {
      setNotice(null);
    }
    if (error) {
      setError(null);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    startTransition(async () => {
      // The portfolio demonstrates real backend handling, not a fake UI-only form.
      setNotice(null);
      setError(null);

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const payload = (await response.json()) as {
          message?: string;
          error?: string;
        };

        if (!response.ok) {
          setError(payload.error ?? "Une erreur est survenue.");
          return;
        }

        setNotice(
          payload.message ??
            "Message envoyé. Je reviendrai vers vous rapidement.",
        );
        setValues(initialValues);
      } catch {
        setError("Impossible d’envoyer le message pour le moment.");
      }
    });
  }

  return (
    <div>
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand">
          Formulaire
        </p>
        <h2 className="mt-4 font-display text-3xl tracking-tight text-slate-950 sm:text-4xl">
          Discutons de votre projet ou d’une opportunité sérieuse.
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          Cette section reste utile techniquement : validation des données,
          traitement serveur en runtime Node et persistance locale des messages.
        </p>
      </div>

      <form className="mt-10 grid gap-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-900">Nom complet</span>
            <input
              required
              value={values.name}
              onChange={(event) => updateField("name", event.target.value)}
              className="rounded-2xl border border-violet-100 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
              placeholder="John Heshima"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-900">Email</span>
            <input
              required
              type="email"
              value={values.email}
              onChange={(event) => updateField("email", event.target.value)}
              className="rounded-2xl border border-violet-100 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
              placeholder="contact@entreprise.com"
            />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-[1fr_0.85fr]">
          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-900">Entreprise</span>
            <input
              value={values.company}
              onChange={(event) => updateField("company", event.target.value)}
              className="rounded-2xl border border-violet-100 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
              placeholder="Nom de la structure"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-900">Besoin</span>
            <select
              value={values.service}
              onChange={(event) => updateField("service", event.target.value)}
              className="rounded-2xl border border-violet-100 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
            >
              <option>Mission fullstack</option>
              <option>Backend engineering</option>
              <option>Machine learning</option>
              <option>Cloud et infrastructure</option>
              <option>Recrutement</option>
            </select>
          </label>
        </div>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-slate-900">Message</span>
          <textarea
            required
            rows={6}
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="rounded-[1.5rem] border border-violet-100 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
            placeholder="Décrivez le contexte, le produit, la mission ou l’opportunité."
          />
        </label>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-h-6 text-sm">
            {notice ? <p className="text-emerald-600">{notice}</p> : null}
            {error ? <p className="text-rose-600">{error}</p> : null}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(124,58,237,0.25)] transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isPending ? "Envoi en cours..." : "Envoyer la demande"}
          </button>
        </div>
      </form>
    </div>
  );
}
