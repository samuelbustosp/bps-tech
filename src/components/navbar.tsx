"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#enfoque", label: "Enfoque" },
  { href: "#servicios", label: "Servicios" },
  { href: "#productos", label: "Productos" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 20));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/95 backdrop-blur-md"
          : "border-b border-transparent bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-18 sm:px-6">
        {/* Marca */}
        <a
          href="#top"
          className="flex items-center gap-3 focus:outline-none"
          aria-label="bps — Software Factory, Inicio"
        >
          <div className="relative flex h-8 w-14 items-center justify-center overflow-hidden sm:h-9 sm:w-16">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-bps.png"
              alt="bps logo"
              className="h-10 w-auto max-w-none object-contain sm:h-12"
            />
          </div>
          <span className="hidden h-4 w-px bg-slate-200 lg:block" />
          <span className="hidden font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500 lg:block">
            Software Factory
          </span>
        </a>

        {/* Navegación minimalista */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-xs font-medium text-slate-600 transition-colors hover:bg-bps-50 hover:text-bps-600 lg:px-4 lg:text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botón CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="btn-primary hidden px-4 py-2 text-xs md:inline-flex lg:px-5"
          >
            Contacto
            <ArrowUpRight className="size-3.5" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex size-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
          className="border-b border-slate-200 bg-white px-5 pb-6 pt-2 shadow-lg sm:px-6 md:hidden"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-bps-50 hover:text-bps-600"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4 border-t border-slate-100 pt-3">
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="btn-primary w-full justify-center text-sm"
            >
              Contacto
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
