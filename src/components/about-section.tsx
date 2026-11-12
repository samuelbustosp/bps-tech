"use client";

import { Compass, Cpu, SlidersHorizontal } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

const traits = [
  {
    icon: SlidersHorizontal,
    title: "Nos amoldamos a tu problema",
    text: "Cada organización funciona distinto. Diseñamos la solución alrededor de tu flujo real, no al revés.",
  },
  {
    icon: Compass,
    title: "Mucha planificación",
    text: "Relevamos, modelamos y trazamos una arquitectura clara antes de escribir la primera línea de código.",
  },
  {
    icon: Cpu,
    title: "Software, datos e inteligencia",
    text: "Unimos desarrollo a medida, ingeniería de datos, BI, Machine Learning y automatizaciones en un solo equipo.",
  },
];

export function AboutSection() {
  return (
    <section
      id="nosotros"
      className="border-b border-slate-200/80 bg-white py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-12">
          <div>
            <SectionHeading
              index="01"
              eyebrow="Nosotros"
              title={
                <>
                  Una software factory que se{" "}
                  <span className="text-bps-600">adapta a tu negocio</span>.
                </>
              }
              description="Somos ingenieros de software, arquitectos de datos y especialistas en inteligencia artificial. Entendemos el problema a fondo para construir tecnología que realmente encaje en tu operación."
            />
          </div>

          <div className="space-y-3.5 sm:space-y-4">
            {traits.map(({ icon: Icon, title, text }, idx) => (
              <Reveal key={title} delay={idx * 0.08}>
                <div className="minimal-card flex items-start gap-3.5 rounded-2xl p-4 sm:gap-4 sm:p-5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-bps-50 text-bps-600">
                    <Icon className="size-5" strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-ink sm:text-base">{title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
