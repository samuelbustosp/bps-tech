"use client";

import { ArrowUpRight, Globe } from "lucide-react";
import { Reveal, SectionHeading } from "./reveal";

const products = [
  {
    name: "TAKEO",
    tagline: "Pedí. Listo.",
    category: "GASTRONOMÍA · PEDIDOS & AUTOMATIZACIÓN",
    url: "https://takeo-nu.vercel.app/",
    logo: "/products/logo-takeo.svg",
    description:
      "Plataforma web de pedidos gastronómicos sin comisiones por venta. Carta digital rápida, comandas en tiempo real, notificaciones automáticas con WhatsApp Cloud API y Dashboard PWA.",
    features: ["Carta Digital Web", "WhatsApp Cloud API", "Comandas en vivo", "Dashboard PWA"],
  },
  {
    name: "Pointis",
    tagline: "POS & Gestión Comercial",
    category: "RETAIL · PUNTO DE VENTA & STOCK",
    url: "https://pointis.vercel.app/",
    logo: "/products/pointis-isologo.svg",
    description:
      "Sistema ágil de facturación, caja y gestión comercial. Control de stock inteligente con soporte para productos pesables, alertas automáticas de reposición y gestión de proveedores.",
    features: ["Facturación & Caja", "Stock Inteligente", "Balanza & Pesables", "Proveedores"],
  },
];

export function ProductsSection() {
  return (
    <section
      id="productos"
      className="border-b border-slate-200/80 bg-paper py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            index="04"
            eyebrow="Productos"
            title={
              <>
                Plataformas propias en <span className="text-bps-600">producción</span>.
              </>
            }
            description="Además de desarrollos a medida, diseñamos y operamos productos propios pensados para resolver necesidades reales."
          />
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2">
          {products.map((product, idx) => (
            <Reveal key={product.name} delay={idx * 0.08}>
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="minimal-card group flex h-full flex-col justify-between rounded-2xl p-5 sm:rounded-3xl sm:p-8"
              >
                <div>
                  {/* Cabecera del producto */}
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div className="flex min-w-0 items-center gap-3.5 sm:gap-4">
                      <div className="size-12 shrink-0 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xs sm:size-14">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={product.logo}
                          alt={`Logo de ${product.name}`}
                          className="h-full w-full object-contain"
                        />
                      </div>

                      <div className="min-w-0">
                        <span className="block truncate font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-bps-600">
                          {product.category}
                        </span>
                        <div className="mt-0.5 flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
                          <h3 className="font-display text-xl font-extrabold text-ink transition-colors group-hover:text-bps-600 sm:text-2xl">
                            {product.name}
                          </h3>
                          <span className="text-xs font-medium text-slate-400">
                            {product.tagline}
                          </span>
                        </div>
                      </div>
                    </div>

                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition-all group-hover:border-bps-600 group-hover:bg-bps-600 group-hover:text-white">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>

                  {/* Descripción */}
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:mt-5">
                    {product.description}
                  </p>

                  {/* Chips de capacidades */}
                  <div className="mt-5 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2">
                    {product.features.map((feat) => (
                      <span
                        key={feat}
                        className="rounded-full border border-slate-200/80 bg-slate-50 px-2.5 py-1 font-mono text-[10px] font-medium text-slate-600 sm:px-3 sm:text-[11px]"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link visible */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-4 text-xs font-semibold text-bps-600 sm:mt-7">
                  <span className="inline-flex items-center gap-1.5 truncate font-mono text-[11px] text-slate-400">
                    <Globe className="size-3.5 shrink-0 text-bps-500" />
                    <span className="truncate">
                      {product.url.replace("https://", "").replace(/\/$/, "")}
                    </span>
                  </span>
                  <span className="inline-flex shrink-0 items-center gap-1 group-hover:underline">
                    Abrir producto
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
