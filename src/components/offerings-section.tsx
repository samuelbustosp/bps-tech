"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Reveal, SectionHeading } from "./reveal";

type FigureType = "software" | "pipelines" | "bi" | "ml" | "ai" | "planning";

type Offering = {
  code: string;
  tag: string;
  title: string;
  description: string;
  figure: FigureType;
};

const offerings: Offering[] = [
  {
    code: "01",
    tag: "SOFTWARE A MEDIDA",
    title: "Desarrollo de Software",
    description:
      "Aplicaciones web, portales, APIs y sistemas internos diseñados exactamente para tu flujo de trabajo.",
    figure: "software",
  },
  {
    code: "02",
    tag: "INGENIERÍA DE DATOS",
    title: "Manejo de Datos & Pipelines",
    description:
      "Extracción, limpieza y orquestación ETL/ELT para unificar todas tus fuentes en un Data Warehouse confiable.",
    figure: "pipelines",
  },
  {
    code: "03",
    tag: "BUSINESS INTELLIGENCE",
    title: "Análisis, BI & Dashboards",
    description:
      "Tableros ejecutivos y métricas operativas en tiempo real para visualizar el negocio y decidir con certeza.",
    figure: "bi",
  },
  {
    code: "04",
    tag: "CIENCIA DE DATOS",
    title: "Machine Learning",
    description:
      "Modelos predictivos de demanda, scoring y detección de anomalías integrados por API a tu operación.",
    figure: "ml",
  },
  {
    code: "05",
    tag: "INTELIGENCIA ARTIFICIAL",
    title: "IA & Automatizaciones",
    description:
      "Agentes inteligentes, bots, flujos autónomos e integraciones entre sistemas para eliminar carga manual.",
    figure: "ai",
  },
  {
    code: "06",
    tag: "DIRECCIÓN TÉCNICA",
    title: "Planificación & Arquitectura",
    description:
      "Nos amoldamos a tu problema con discovery previo, arquitectura documentada y entregas por sprint.",
    figure: "planning",
  },
];

const planningSteps = [
  { num: "01", title: "Entendimiento", text: "Nos amoldamos a tu problema real." },
  { num: "02", title: "Planificación", text: "Arquitectura, datos y hoja de ruta." },
  { num: "03", title: "Construcción", text: "Sprints cortos con entregas visibles." },
  { num: "04", title: "Evolución", text: "QA, despliegue y mejora continua." },
];

const biBars = [
  { base: 35, active: 52 },
  { base: 58, active: 76 },
  { base: 46, active: 64 },
  { base: 74, active: 90 },
  { base: 64, active: 80 },
  { base: 92, active: 100 },
];

function OfferingFigure({ type, hovered }: { type: FigureType; hovered: boolean }) {
  const frameClass = `flex h-26 items-center justify-center overflow-hidden rounded-xl border p-4 transition-colors duration-300 sm:h-28 ${
    hovered ? "border-bps-200 bg-bps-50/50" : "border-slate-200/70 bg-slate-50/70"
  }`;

  if (type === "software") {
    return (
      <div className={frameClass}>
        <div className="grid w-full max-w-[220px] grid-cols-3 gap-2">
          <motion.div
            animate={{ scaleX: hovered ? 1.02 : 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-3 flex h-3 items-center gap-1 rounded bg-bps-600/90 px-1.5"
          >
            <span
              className={`size-1 rounded-full transition-colors duration-300 ${
                hovered ? "bg-white" : "bg-white/40"
              }`}
            />
            <span
              className={`size-1 rounded-full transition-colors duration-300 ${
                hovered ? "bg-blue-200" : "bg-white/25"
              }`}
            />
          </motion.div>

          <motion.div
            animate={{ y: hovered ? -3 : 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-8 flex-col justify-center gap-1 rounded border border-bps-200 bg-white px-2"
          >
            <span className="h-1 w-3/4 rounded-full bg-bps-200" />
            <span className="h-1 w-1/2 rounded-full bg-slate-200" />
          </motion.div>

          <motion.div
            animate={{ y: hovered ? -5 : 0, scale: hovered ? 1.04 : 1 }}
            transition={{ duration: 0.35, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
            className={`flex h-8 flex-col justify-center gap-1 rounded border px-2 transition-colors duration-300 ${
              hovered ? "border-bps-400 bg-bps-100/80" : "border-bps-200 bg-bps-50"
            }`}
          >
            <span className="h-1 w-full rounded-full bg-bps-500/70" />
            <span className="h-1 w-2/3 rounded-full bg-bps-300" />
          </motion.div>

          <motion.div
            animate={{ y: hovered ? -2 : 0 }}
            transition={{ duration: 0.35, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-8 flex-col justify-center gap-1 rounded border border-bps-200 bg-white px-2"
          >
            <span className="h-1 w-2/3 rounded-full bg-bps-200" />
            <span className="h-1 w-full rounded-full bg-slate-200" />
          </motion.div>
        </div>
      </div>
    );
  }

  if (type === "pipelines") {
    return (
      <div className={frameClass}>
        <div className="relative flex w-full max-w-[230px] items-center justify-between">
          <span
            className={`relative z-10 size-6 rounded-lg border transition-colors duration-300 ${
              hovered ? "border-bps-400 bg-bps-50" : "border-bps-300 bg-white"
            }`}
          />

          <div className="relative h-0.5 flex-1 bg-bps-200">
            {hovered && (
              <motion.span
                initial={{ left: "0%", opacity: 0 }}
                animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 size-2 -translate-y-1/2 rounded-full bg-bps-600 shadow-xs shadow-bps-600"
              />
            )}
          </div>

          <motion.span
            animate={{
              rotate: hovered ? 45 : 0,
              scale: hovered ? 1.08 : 1,
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 size-8 rounded-xl bg-bps-600 shadow-sm shadow-bps-600/30"
          />

          <div className="relative h-0.5 flex-1 bg-bps-200">
            {hovered && (
              <motion.span
                initial={{ left: "0%", opacity: 0 }}
                animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1.1, delay: 0.55, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 size-2 -translate-y-1/2 rounded-full bg-bps-600 shadow-xs shadow-bps-600"
              />
            )}
          </div>

          <motion.span
            animate={{ scale: hovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
            className={`relative z-10 size-6 rounded-lg border transition-colors duration-300 ${
              hovered ? "border-bps-600 bg-bps-500" : "border-bps-300 bg-bps-100"
            }`}
          />
        </div>
      </div>
    );
  }

  if (type === "bi") {
    return (
      <div
        className={`flex h-26 items-end justify-center gap-2 rounded-xl border px-6 pt-6 pb-4 transition-colors duration-300 sm:h-28 sm:px-8 ${
          hovered ? "border-bps-200 bg-bps-50/50" : "border-slate-200/70 bg-slate-50/70"
        }`}
      >
        {biBars.map((bar, i) => (
          <motion.div
            key={i}
            initial={false}
            animate={{ height: `${hovered ? bar.active : bar.base}%` }}
            transition={{
              duration: 0.45,
              delay: i * 0.035,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`w-4 rounded-t transition-colors duration-300 sm:w-5 ${
              i === 5
                ? "bg-bps-600"
                : hovered
                  ? i >= 3
                    ? "bg-bps-400"
                    : "bg-bps-300"
                  : "bg-bps-200"
            }`}
          />
        ))}
      </div>
    );
  }

  if (type === "ml") {
    return (
      <div className={frameClass}>
        <svg viewBox="0 0 200 60" className="h-full w-full max-w-[220px] overflow-visible">
          <motion.path
            animate={{
              d: hovered
                ? "M 8 48 Q 48 40, 85 24 T 152 14 T 192 6"
                : "M 8 46 Q 48 42, 85 28 T 152 20 T 192 10",
            }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            fill="none"
            stroke="#1d46f2"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <motion.path
            animate={{
              d: hovered ? "M 130 19 L 192 6" : "M 130 22 L 192 10",
              strokeDashoffset: hovered ? [0, -16] : 0,
            }}
            transition={{
              d: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
              strokeDashoffset: { duration: 1, repeat: Infinity, ease: "linear" },
            }}
            fill="none"
            stroke="#6697ff"
            strokeWidth="1.6"
            strokeDasharray="4 4"
          />
          <motion.circle
            cx="130"
            animate={{ cy: hovered ? 19 : 22 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            r="3.5"
            fill="#1d46f2"
          />
          {hovered && (
            <motion.circle
              cx="192"
              cy="6"
              initial={{ r: 4, opacity: 0.7 }}
              animate={{ r: [4, 12], opacity: [0.6, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
              fill="none"
              stroke="#1d46f2"
              strokeWidth="1.5"
            />
          )}
          <motion.circle
            cx="192"
            animate={{ cy: hovered ? 6 : 10, r: hovered ? 4.8 : 4 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            fill="#ffffff"
            stroke="#1d46f2"
            strokeWidth="2.5"
          />
        </svg>
      </div>
    );
  }

  if (type === "ai") {
    return (
      <div className={frameClass}>
        <svg viewBox="0 0 220 64" className="h-full w-full max-w-[220px] overflow-visible">
          <line
            x1="36"
            y1="16"
            x2="110"
            y2="32"
            stroke={hovered ? "#6697ff" : "#c7daff"}
            strokeWidth="1.8"
            className="transition-colors duration-300"
          />
          <line
            x1="36"
            y1="48"
            x2="110"
            y2="32"
            stroke={hovered ? "#6697ff" : "#c7daff"}
            strokeWidth="1.8"
            className="transition-colors duration-300"
          />
          <line
            x1="110"
            y1="32"
            x2="184"
            y2="16"
            stroke={hovered ? "#1d46f2" : "#9dc0ff"}
            strokeWidth="1.8"
            className="transition-colors duration-300"
          />
          <line
            x1="110"
            y1="32"
            x2="184"
            y2="48"
            stroke="#1d46f2"
            strokeWidth={hovered ? "2.4" : "2"}
            className="transition-all duration-300"
          />

          {hovered && (
            <>
              <motion.circle
                r="2.6"
                fill="#1d46f2"
                animate={{ cx: [36, 110], cy: [16, 32], opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.circle
                r="2.6"
                fill="#1d46f2"
                animate={{ cx: [36, 110], cy: [48, 32], opacity: [0, 1, 0] }}
                transition={{ duration: 1, delay: 0.25, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.circle
                r="2.8"
                fill="#1d46f2"
                animate={{ cx: [110, 184], cy: [32, 16], opacity: [0, 1, 0] }}
                transition={{ duration: 1, delay: 0.45, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.circle
                r="2.8"
                fill="#1d46f2"
                animate={{ cx: [110, 184], cy: [32, 48], opacity: [0, 1, 0] }}
                transition={{ duration: 1, delay: 0.65, repeat: Infinity, ease: "easeInOut" }}
              />
            </>
          )}

          <circle cx="36" cy="16" r="6" fill="#ffffff" stroke="#9dc0ff" strokeWidth="2" />
          <circle cx="36" cy="48" r="6" fill="#ffffff" stroke="#9dc0ff" strokeWidth="2" />
          <motion.g
            animate={{ scale: hovered ? 1.1 : 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: "110px", originY: "32px" }}
          >
            <rect x="96" y="18" width="28" height="28" rx="8" fill="#1d46f2" />
            <circle cx="110" cy="32" r="5" fill="#ffffff" />
          </motion.g>
          <circle
            cx="184"
            cy="16"
            r="6"
            fill={hovered ? "#1d46f2" : "#e2ecff"}
            stroke="#1d46f2"
            strokeWidth="1.8"
            className="transition-colors duration-300"
          />
          <circle cx="184" cy="48" r="6" fill="#1d46f2" />
        </svg>
      </div>
    );
  }

  return (
    <div className={frameClass}>
      <div className="w-full max-w-[220px] space-y-2.5">
        <div className="flex items-center gap-2">
          <motion.span
            animate={{ width: hovered ? 88 : 64 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="h-2.5 rounded-full bg-bps-600"
          />
          <span className="h-2.5 flex-1 rounded-full bg-slate-200/80" />
        </div>
        <div className="flex items-center gap-2 pl-6">
          <motion.span
            animate={{ width: hovered ? 116 : 96 }}
            transition={{ duration: 0.4, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="h-2.5 rounded-full bg-bps-400"
          />
          <span className="h-2.5 flex-1 rounded-full bg-slate-200/80" />
        </div>
        <div className="flex items-center gap-2 pl-12">
          <motion.span
            animate={{ width: hovered ? 104 : 80 }}
            transition={{ duration: 0.4, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className={`h-2.5 rounded-full transition-colors duration-300 ${
              hovered ? "bg-bps-500" : "bg-bps-200"
            }`}
          />
          <span className="h-2.5 flex-1 rounded-full bg-slate-200/80" />
        </div>
      </div>
    </div>
  );
}

function OfferingCard({ item }: { item: Offering }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="minimal-card flex h-full flex-col justify-between rounded-2xl p-5"
    >
      <div>
        <OfferingFigure type={item.figure} hovered={hovered} />
        <div className="mt-5 flex items-center justify-between font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-bps-600">
          <span>{item.tag}</span>
          <span className="text-bps-600/60">{item.code}</span>
        </div>
        <h3 className="mt-1.5 font-display text-lg font-bold text-ink">{item.title}</h3>
        <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.description}</p>
      </div>
    </article>
  );
}

export function OfferingsSection() {
  return (
    <section
      id="servicios"
      className="border-b border-slate-200/80 bg-white py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          index="03"
          eyebrow="Servicios"
          title={
            <>
              Capacidades integradas que se{" "}
              <span className="text-bps-600">amoldan a tu problema</span>.
            </>
          }
          description="Combinamos ingeniería de software, manejo de datos, inteligencia artificial y planificación para resolver necesidades concretas de punta a punta."
        />

        {/* Grilla responsiva con figuras animadas al hover */}
        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {offerings.map((item, idx) => (
            <Reveal key={item.code} delay={(idx % 3) * 0.06}>
              <OfferingCard item={item} />
            </Reveal>
          ))}
        </div>

        {/* Franja minimalista de Planificación */}
        <Reveal delay={0.12} className="mt-8 sm:mt-10">
          <div className="rounded-2xl border border-bps-200/70 bg-bps-50/40 p-5 sm:p-8">
            <div className="flex flex-col justify-between gap-2 border-b border-bps-200/50 pb-4 sm:flex-row sm:items-center">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-bps-700">
                Planificación bps
              </span>
              <span className="text-xs text-slate-500">
                Adaptamos la arquitectura a tu operación en 4 etapas claras
              </span>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              {planningSteps.map((step) => (
                <div key={step.num} className="border-l-2 border-bps-500 pl-4">
                  <div className="font-mono text-[11px] font-bold text-bps-600">{step.num}</div>
                  <div className="mt-0.5 text-sm font-bold text-ink">{step.title}</div>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
