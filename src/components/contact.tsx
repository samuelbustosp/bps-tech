"use client";

import { useState } from "react";
import { ArrowRight, Check, Mail, Send } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

export const CONTACT_EMAIL = "hola@bps.dev";

const topics = [
  "Software a medida",
  "Pipelines & Datos",
  "BI & Dashboards",
  "Machine Learning",
  "IA & Automatizaciones",
  "Takeo / Pointis",
];

export function Contact() {
  const [selected, setSelected] = useState<string[]>(["Software a medida"]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const toggleTopic = (topic: string) => {
    setSelected((prev) =>
      prev.includes(topic) ? prev.filter((item) => item !== topic) : [...prev, topic]
    );
  };

  const mailtoHref = () => {
    const subject = encodeURIComponent(`Consulta de proyecto — ${name || "bps"}`);
    const body = encodeURIComponent(
      `Hola equipo de bps,\n\n` +
        `Nombre / Empresa: ${name || "-"}\n` +
        `Interés: ${selected.length ? selected.join(", ") : "General"}\n\n` +
        `Mensaje:\n${message || "Queremos coordinar una reunión de diagnóstico y planificación."}\n`
    );
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
          <div>
            <SectionHeading
              index="05"
              eyebrow="Contacto"
              title={
                <>
                  Contanos tu problema,{" "}
                  <span className="text-bps-600">nos amoldamos a vos</span>.
                </>
              }
              description="Coordinamos una reunión breve de diagnóstico para entender tu operación y planificar la mejor solución tecnológica."
            />

            <Reveal delay={0.12} className="mt-6 sm:mt-8">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2.5 rounded-full border border-bps-200 bg-bps-50 px-4 py-2 font-mono text-xs font-semibold text-bps-700 transition-colors hover:bg-bps-100"
              >
                <Mail className="size-3.5" />
                {CONTACT_EMAIL}
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/60 p-5 sm:rounded-3xl sm:p-8">
              <div>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  Áreas de interés
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {topics.map((topic) => {
                    const active = selected.includes(topic);
                    return (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => toggleTopic(topic)}
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all sm:px-3.5 ${
                          active
                            ? "border-bps-600 bg-bps-600 text-white"
                            : "border-slate-200 bg-white text-slate-600 hover:border-bps-300 hover:text-bps-600"
                        }`}
                      >
                        {active && <Check className="size-3" strokeWidth={3} />}
                        {topic}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 space-y-3.5 sm:space-y-4">
                <div>
                  <label htmlFor="contact-name" className="sr-only">
                    Nombre o empresa
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre y empresa"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:border-bps-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="contact-msg" className="sr-only">
                    Mensaje
                  </label>
                  <textarea
                    id="contact-msg"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Contanos brevemente sobre tu problema o proyecto..."
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400 focus:border-bps-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-col-reverse items-stretch justify-between gap-3 sm:flex-row sm:items-center sm:gap-4">
                <span className="text-center text-xs text-slate-500 sm:text-left">
                  Respuesta en menos de 24 h
                </span>
                <a href={mailtoHref()} className="btn-primary w-full sm:w-auto">
                  <Send className="size-3.5" />
                  Enviar consulta
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-8 text-center sm:px-6 sm:py-10 md:flex-row md:text-left">
        <div className="flex items-center gap-3">
          <div className="relative flex h-8 w-14 items-center justify-center overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-bps.jpg"
              alt="bps logo"
              className="h-10 w-auto max-w-none object-contain mix-blend-multiply"
            />
          </div>
          <span className="text-xs text-slate-500">Software Factory · Datos · IA · ML</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-600">
          <a href="#nosotros" className="hover:text-bps-600">
            Nosotros
          </a>
          <a href="#enfoque" className="hover:text-bps-600">
            Enfoque
          </a>
          <a href="#servicios" className="hover:text-bps-600">
            Servicios
          </a>
          <a href="#productos" className="hover:text-bps-600">
            Productos
          </a>
        </nav>

        <span className="font-mono text-xs text-slate-400">© 2026 bps</span>
      </div>
    </footer>
  );
}
