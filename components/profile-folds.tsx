"use client";

import { useState } from "react";
import { MotionDiv } from "@/components/motion-div";
import { type profileLayers } from "@/lib/site-data";

type Layer = (typeof profileLayers)[number];

export function ProfileFolds({ layers }: { layers: readonly Layer[] }) {
  return (
    <div className="space-y-3">
      {layers.map((layer, index) => (
        <ProfileLayerAccordion key={layer.id} layer={layer} index={index} />
      ))}
    </div>
  );
}

function ProfileLayerAccordion({
  layer,
  index,
}: {
  layer: Layer;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(index === 0);

  const subtitles = {
    "01": "UI/UX, APIs et Bonne pratiques",
    "02": "APIs, architecture et stabilité",
    "03": "Déploiement et environnements",
    "04": "Mathématiques et intelligence",
  } as const;

  return (
    <MotionDiv>
      <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl transition-all duration-300 hover:shadow-md">
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="relative flex w-full items-center gap-5 p-5 text-left"
        >
          <span className="font-mono text-sm font-medium text-slate-400">{layer.id}</span>

          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h3 className="font-display text-lg font-semibold text-slate-900">
                {layer.domain}
              </h3>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs text-slate-500">{layer.signal}</span>
            </div>
            <p className="mt-1 text-sm text-slate-500">
              {subtitles[layer.id as keyof typeof subtitles]}
            </p>
          </div>

          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all group-hover:bg-slate-200">
            <svg
              className={`h-4 w-4 transform transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
        </button>

        <div
          className={`grid transition-all duration-300 ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="space-y-5 border-t border-slate-100 px-5 pb-5 pt-4">
              <p className="text-sm leading-7 text-slate-600">{layer.description}</p>

              <div className="space-y-2">
                {layer.evidence.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1 rounded-full bg-slate-400" />
                    <p className="text-sm text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}
