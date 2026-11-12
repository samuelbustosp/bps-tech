"use client";

import { Reveal, SectionHeading } from "./reveal";

const goals = [
  {
    num: "01",
    title: "Soluciones a tu medida",
    text: "Que nunca tengas que cambiar un proceso que funciona por culpa de un sistema rígido.",
  },
  {
    num: "02",
    title: "Datos ordenados y útiles",
    text: "Que toda tu información se integre en pipelines claros y tableros BI confiables.",
  },
  {
    num: "03",
    title: "Automatización e IA real",
    text: "Que las tareas repetitivas se automaticen y el Machine Learning anticipe decisiones.",
  },
];

export function VisionSection() {
  return (
    <section
      id="enfoque"
      className="border-b border-slate-200/80 bg-paper py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-bps-700 via-bps-600 to-bps-700 p-6 text-white shadow-[0_24px_60px_-24px_rgba(29,70,242,0.5)] sm:rounded-3xl sm:p-10 lg:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-white/10 blur-3xl"
            />

            <div className="relative max-w-2xl">
              <SectionHeading
                light
                index="02"
                eyebrow="Enfoque"
                title="Que la tecnología trabaje exactamente al ritmo de tu operación."
                description="Queremos eliminar el caos operativo combinando planificación meticulosa, software propio, automatizaciones inteligentes y decisiones basadas en datos."
              />
            </div>

            <div className="relative mt-8 grid gap-6 border-t border-white/15 pt-8 sm:mt-12 sm:pt-10 md:grid-cols-3">
              {goals.map((item) => (
                <div key={item.num}>
                  <span className="font-mono text-xs font-semibold text-blue-200">{item.num}</span>
                  <h3 className="mt-1.5 font-display text-base font-bold text-white sm:mt-2 sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-blue-100/85 sm:mt-2 sm:text-sm">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
