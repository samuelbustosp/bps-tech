"use client";

import { motion, type HTMLMotionProps } from "motion/react";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

/** Transición sutil y sobria al aparecer en pantalla. */
export function Reveal({ delay = 0, y = 16, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type SectionHeadingProps = {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  light?: boolean;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <Reveal>
        <div
          className={`inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] ${
            light ? "text-blue-200" : "text-bps-600"
          }`}
        >
          {index && <span>{index}</span>}
          {index && <span className={light ? "text-blue-300/50" : "text-slate-300"}>/</span>}
          <span>{eyebrow}</span>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <h2
          className={`mt-3 font-display text-[1.75rem] font-extrabold leading-[1.14] tracking-tight text-balance sm:text-3xl lg:text-4xl ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={0.1}>
          <p
            className={`mt-3.5 text-sm leading-relaxed text-pretty sm:mt-4 sm:text-base ${
              light ? "text-blue-100/85" : "text-slate-600"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
