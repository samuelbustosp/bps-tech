"use client";

import { motion } from "motion/react";
import { ArrowRight, Bot, BrainCircuit, Code2, Compass, Database } from "lucide-react";

const architectureNodes = [
  {
    code: "01",
    label: "Entendimiento & Planificación",
    sub: "Nos amoldamos a tu problema real",
    icon: Compass,
  },
  {
    code: "02",
    label: "Software a Medida",
    sub: "Sistemas core, web & APIs",
    icon: Code2,
  },
  {
    code: "03",
    label: "Datos, Pipelines & BI",
    sub: "Análisis, ETL & dashboards en vivo",
    icon: Database,
  },
  {
    code: "04",
    label: "IA, ML & Automatizaciones",
    sub: "Modelos predictivos y flujos autónomos",
    icon: BrainCircuit,
  },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[82svh] items-center overflow-hidden border-b border-slate-200/80 bg-white pt-24 pb-14 sm:min-h-[86svh] sm:pt-28 sm:pb-20 lg:pb-24"
    >
      {/* Fondo arquitectónico sutil en blanco y azul */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-arch-grid [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black_30%,transparent_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 size-[34rem] rounded-full bg-bps-100/60 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Columna izquierda */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-bps-200/80 bg-bps-50 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-bps-700 sm:px-3.5 sm:text-[11px] sm:tracking-[0.18em]">
              <span className="size-1.5 rounded-full bg-bps-600" />
              Software Factory · Datos · IA
            </div>

            <h1 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.1] tracking-tight text-ink sm:mt-6 sm:text-5xl lg:text-[3.35rem]">
              Software, datos e IA que se{" "}
              <span className="text-bps-600">amoldan a tu problema</span>.
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
              No forzamos soluciones enlatadas. Planificamos y construimos desarrollo a medida,
              pipelines, tableros BI, automatizaciones y Machine Learning alrededor de tu operación.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5">
              <a href="#contacto" className="btn-primary w-full sm:w-auto">
                Contanos tu problema
                <ArrowRight className="size-4" />
              </a>
              <a href="#servicios" className="btn-secondary w-full sm:w-auto">
                Ver servicios
              </a>
            </div>
          </motion.div>

          {/* Columna derecha: Esquema minimalista */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-4 shadow-[0_24px_60px_-28px_rgba(29,70,242,0.16)] sm:rounded-3xl sm:p-8">
              <div className="mb-4 flex items-center justify-between border-b border-slate-200/80 pb-3.5 sm:mb-6 sm:pb-4">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-bps-600 sm:text-[11px]">
                  Arquitectura bps
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-slate-400">
                  <Bot className="size-3.5 text-bps-500" />
                  100% a medida
                </span>
              </div>

              <div className="relative space-y-2.5 sm:space-y-3">
                <div
                  aria-hidden
                  className="absolute top-6 bottom-6 left-[2.125rem] w-px bg-gradient-to-b from-bps-200 via-bps-500 to-bps-200 sm:left-9"
                />

                {architectureNodes.map((node, idx) => {
                  const Icon = node.icon;
                  return (
                    <div
                      key={node.code}
                      className="relative flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white p-3.5 transition-colors hover:border-bps-300 sm:gap-4 sm:rounded-2xl sm:p-4"
                    >
                      <div
                        className={`relative z-10 flex size-10 shrink-0 items-center justify-center rounded-xl ${
                          idx === 3
                            ? "bg-bps-600 text-white shadow-md shadow-bps-600/25"
                            : "border border-bps-100 bg-bps-50 text-bps-600"
                        }`}
                      >
                        <Icon className="size-4" strokeWidth={1.9} />
                      </div>
                      <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
                        <div className="min-w-0">
                          <div className="truncate text-xs font-bold text-ink sm:text-sm">
                            {node.label}
                          </div>
                          <div className="truncate text-[11px] text-slate-500 sm:text-xs">
                            {node.sub}
                          </div>
                        </div>
                        <span className="shrink-0 font-mono text-[10px] font-semibold text-bps-600/70 sm:text-[11px]">
                          {node.code}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
