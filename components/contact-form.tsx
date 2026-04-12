"use client";

import { useState, useTransition } from "react";

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  service: string;
  serviceDetail: string;
  message: string;
};

const initialValues: ContactPayload = {
  name: "",
  email: "",
  company: "",
  service: "Mission fullstack",
  serviceDetail: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<ContactPayload>(initialValues);
  const [notice, setNotice] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [focusedField, setFocusedField] = useState<string | null>(null);

  function updateField<K extends keyof ContactPayload>(
    field: K,
    value: ContactPayload[K],
  ) {
    setValues((current) => {
      if (field === "service") {
        return {
          ...current,
          service: value as ContactPayload["service"],
          serviceDetail:
            value === "Autre besoin" ? current.serviceDetail : "",
        };
      }

      return { ...current, [field]: value };
    });
    if (notice) setNotice(null);
    if (error) setError(null);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    startTransition(async () => {
      setNotice(null);
      setError(null);

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
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
          payload.message ?? "Message envoyé. Je reviendrai vers vous rapidement.",
        );
        setValues(initialValues);
      } catch {
        setError("Impossible d'envoyer le message pour le moment.");
      }
    });
  }

  const inputBaseClass = (fieldName: string) => `
    w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-slate-900 
    placeholder:text-slate-400 transition-all duration-200
    ${focusedField === fieldName 
      ? "border-slate-400 ring-2 ring-slate-100" 
      : "border-slate-200 hover:border-slate-300"
    }
    focus:outline-none
  `;

  const needsCustomService = values.service === "Autre besoin";

  return (
    <div>
      <div className="mb-8">
        <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-wider text-slate-600">
          Formulaire
        </span>
        <h2 className="mt-5 font-display text-2xl font-semibold text-slate-950">
          Échangeons sur votre besoin
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Remplissez ce formulaire et je vous répondrai dans les meilleurs délais.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Nom complet
            </label>
            <input
              required
              value={values.name}
              onChange={(e) => updateField("name", e.target.value)}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              className={inputBaseClass("name")}
              placeholder="John Heshima"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Email
            </label>
            <input
              required
              type="email"
              value={values.email}
              onChange={(e) => updateField("email", e.target.value)}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              className={inputBaseClass("email")}
              placeholder="contact@entreprise.com"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-1.5">
            <label className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Entreprise
            </label>
            <input
              value={values.company}
              onChange={(e) => updateField("company", e.target.value)}
              onFocus={() => setFocusedField("company")}
              onBlur={() => setFocusedField(null)}
              className={inputBaseClass("company")}
              placeholder="Nom de la structure"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Type de besoin
            </label>
            <select
              value={values.service}
              onChange={(e) => updateField("service", e.target.value)}
              onFocus={() => setFocusedField("service")}
              onBlur={() => setFocusedField(null)}
              className={`${inputBaseClass("service")} appearance-none cursor-pointer`}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8' stroke-width='1.5'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' /%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
                backgroundSize: "1rem",
              }}
            >
              <option>Mission fullstack</option>
              <option>Backend engineering</option>
              <option>Machine learning</option>
              <option>Cloud et infrastructure</option>
              <option>Recrutement</option>
              <option>Autre besoin</option>
            </select>
          </div>
        </div>

        {needsCustomService && (
          <div className="space-y-1.5">
            <label className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Precisez votre besoin
            </label>
            <input
              required={needsCustomService}
              value={values.serviceDetail}
              onChange={(e) => updateField("serviceDetail", e.target.value)}
              onFocus={() => setFocusedField("serviceDetail")}
              onBlur={() => setFocusedField(null)}
              className={inputBaseClass("serviceDetail")}
              placeholder="Exemple : audit technique, accompagnement produit, autre mission specifique"
            />
          </div>
        )}

        <div className="space-y-1.5">
          <label className="text-xs font-medium uppercase tracking-wider text-slate-500">
            Message
          </label>
          <textarea
            required
            rows={5}
            value={values.message}
            onChange={(e) => updateField("message", e.target.value)}
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField(null)}
            className={`${inputBaseClass("message")} resize-none`}
            placeholder="Décrivez votre projet, la mission ou l'opportunité..."
          />
        </div>

        <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-h-6 text-sm">
            {notice && (
              <p className="flex items-center gap-2 text-emerald-600">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {notice}
              </p>
            )}
            {error && (
              <p className="flex items-center gap-2 text-rose-600">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-md shadow-slate-900/10 transition-all hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="relative flex items-center gap-2">
              {isPending ? (
                <>
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Envoi en cours...
                </>
              ) : (
                <>
                  Envoyer le message
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
