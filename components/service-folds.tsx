"use client";

import { useState } from "react";
import { type serviceCards } from "@/lib/site-data";

type ServiceCard = (typeof serviceCards)[number];

export function ServiceFolds({ items }: { items: readonly ServiceCard[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <ServiceFold key={item.id} item={item} initiallyOpen={index === 0} />
      ))}
    </div>
  );
}

function ServiceFold({
  item,
  initiallyOpen,
}: {
  item: ServiceCard;
  initiallyOpen: boolean;
}) {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/90 shadow-sm backdrop-blur-xl">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-start gap-5 px-6 py-6 text-left transition hover:bg-slate-50/70 lg:px-7"
      >
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand/10 font-mono text-sm font-semibold text-brand">
          {item.id}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-950 lg:text-xl">
                {item.title}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                {item.summary}
              </p>
            </div>

            <span className="inline-flex items-center gap-2 text-sm font-medium text-brand">
              {isOpen ? "Réduire" : "En savoir plus"}
              <svg
                className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-slate-100 px-6 pb-6 pt-5 lg:px-7">
            <div className="grid gap-3">
              {item.details.map((detail) => (
                <div
                  key={detail}
                  className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-4"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/70" />
                  <p className="text-sm leading-7 text-slate-600">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
