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

const headlineSegments = [
  { text: "Software,", highlight: false },
  { text: "datos", highlight: false },
  { text: "e", highlight: false },
  { text: "IA", highlight: false },
  { text: "que", highlight: false },
  { text: "se", highlight: false },
  { text: "amoldan", highlight: true },
  { text: "a", highlight: true },
  { text: "tu", highlight: true },
  { text: "problema.", highlight: true },
];

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[82svh] items-center overflow-hidden border-b border-slate-200/80 bg-white pt-24 pb-14 sm:min-h-[86svh] sm:pt-28 sm:pb-20 lg:pb-24"
    >
      {/* Fondo de cuadros con animación de entrada: empieza grande y se achica hasta encajar */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_80%_70%_at_50%_35%,black_35%,transparent_100%)]"
      >
        <motion.div
          initial={{ scale: 2.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            scale: { duration: 1.75, ease: [0.22, 1, 0.36, 1] },
            opacity: { duration: 0.45, ease: "easeOut" },
          }}
          style={{ transformOrigin: "50% 35%" }}
          className="absolute inset-0 bg-arch-grid will-change-transform"
        >
          {/* Capa azul de calibración inicial que resalta los cuadros mientras se achican y luego se funde */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.35, ease: "easeOut" }}
            className="absolute inset-0 bg-arch-grid-accent"
          />
        </motion.div>

        {/* Barrido sutil de luz azul al calibrar la cuadrícula */}
        <motion.div
          initial={{ opacity: 0.85, scale: 1.8 }}
          animate={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.55, ease: EASE_OUT_EXPO }}
          style={{ transformOrigin: "50% 35%" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(29,70,242,0.12)_0%,transparent_55%)]"
        />
      </div>

      {/* Halo ambiental superior */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, delay: 0.2, ease: EASE_OUT_EXPO }}
        className="pointer-events-none absolute -top-24 right-0 size-[34rem] rounded-full bg-bps-100/60 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          {/* Columna izquierda */}
          <div className="min-w-0">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.94, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.65, delay: 0.25, ease: EASE_OUT_EXPO }}
              className="inline-flex items-center gap-2 rounded-full border border-bps-200/80 bg-bps-50 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-bps-700 sm:px-3.5 sm:text-[11px] sm:tracking-[0.18em]"
            >
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bps-500 opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-bps-600" />
              </span>
              Software Factory · Datos · IA
            </motion.div>

            {/* Título con revelación escalonada por palabra y subrayado arquitectónico */}
            <h1 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.1] tracking-tight text-ink sm:mt-6 sm:text-5xl lg:text-[3.35rem]">
              <span className="flex flex-wrap gap-x-[0.28em] gap-y-1">
                {headlineSegments.map((word, i) => (
                  <span key={word.text + i} className="inline-flex overflow-hidden py-0.5">
                    <motion.span
                      initial={{ y: "110%", opacity: 0, filter: "blur(6px)" }}
                      animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.72,
                        delay: 0.35 + i * 0.048,
                        ease: EASE_OUT_EXPO,
                      }}
                      className={`inline-block will-change-transform ${
                        word.highlight ? "text-bps-600" : "text-ink"
                      }`}
                    >
                      {word.text}
                    </motion.span>
                  </span>
                ))}
              </span>
            </h1>

            {/* Línea de acento que se traza luego del título */}
            <motion.div
              aria-hidden
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.85, delay: 0.9, ease: EASE_OUT_EXPO }}
              style={{ transformOrigin: "left" }}
              className="mt-4 h-0.5 w-24 rounded-full bg-gradient-to-r from-bps-600 via-bps-400 to-transparent sm:mt-5 sm:w-32"
            />

            {/* Descripción */}
            <motion.p
              initial={{ opacity: 0, y: 16, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.75, delay: 0.82, ease: EASE_OUT_EXPO }}
              className="mt-4 max-w-lg text-sm leading-relaxed text-slate-600 sm:mt-5 sm:text-lg"
            >
              No forzamos soluciones enlatadas. Planificamos y construimos desarrollo a medida,
              pipelines, tableros BI, automatizaciones y Machine Learning alrededor de tu operación.
            </motion.p>

            {/* Botones de acción */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.98, ease: EASE_OUT_EXPO }}
              className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5"
            >
              <a href="#contacto" className="btn-primary w-full sm:w-auto">
                Contanos tu problema
                <ArrowRight className="size-4" />
              </a>
              <a href="#servicios" className="btn-secondary w-full sm:w-auto">
                Ver servicios
              </a>
            </motion.div>
          </div>

          {/* Columna derecha: Esquema minimalista con armado secuencial */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.55, ease: EASE_OUT_EXPO }}
            className="relative min-w-0"
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
                {/* Línea conectora que se dibuja de arriba hacia abajo */}
                <motion.div
                  aria-hidden
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.9, delay: 0.85, ease: EASE_OUT_EXPO }}
                  style={{ transformOrigin: "top" }}
                  className="absolute top-6 bottom-6 left-[2.125rem] w-px bg-gradient-to-b from-bps-200 via-bps-500 to-bps-200 sm:left-9"
                />

                {architectureNodes.map((node, idx) => {
                  const Icon = node.icon;
                  return (
                    <motion.div
                      key={node.code}
                      initial={{ opacity: 0, x: 16, filter: "blur(4px)" }}
                      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.6,
                        delay: 0.72 + idx * 0.11,
                        ease: EASE_OUT_EXPO,
                      }}
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
                    </motion.div>
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
