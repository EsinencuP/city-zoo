import React from "react";
import { motion } from "motion/react";
import { fadeUp } from "../../lib/motion";
import BotanicalPattern from "../decorative/BotanicalPattern";
import Container from "./Container";

interface SectionShellProps {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  tone?: "cream" | "mint" | "white";
  children: React.ReactNode;
  className?: string;
  headerAlign?: "left" | "center" | "split";
}

export default function SectionShell({
  id,
  eyebrow,
  title,
  description,
  tone = "cream",
  children,
  className = "",
  headerAlign = "left"
}: SectionShellProps) {
  const toneClass = tone === "mint" ? "bg-mint/48" : tone === "white" ? "bg-white/35" : "bg-cream";

  return (
    <motion.section
      id={id}
      className={["relative overflow-hidden py-16 md:py-24", toneClass, className].join(" ")}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={fadeUp}
    >
      <BotanicalPattern className="absolute inset-0 opacity-[0.42]" />
      <Container className="relative z-10">
        {(eyebrow || title || description) && (
          <div
            className={[
              "mb-10 md:mb-14",
              headerAlign === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
              headerAlign === "split" ? "md:flex md:max-w-none md:items-end md:justify-between md:gap-10" : ""
            ].join(" ")}
          >
            <div className="max-w-3xl">
              {eyebrow && (
                <span className="mb-3 block font-mono text-xs font-semibold uppercase tracking-[0.22em] text-leaf">
                  {eyebrow}
                </span>
              )}
              {title && (
                <h2 className="font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-canopy text-balance sm:text-4xl md:text-5xl">
                  {title}
                </h2>
              )}
            </div>
            {description && (
              <p className="mt-4 max-w-2xl text-sm leading-7 text-moss text-pretty sm:text-base md:mt-0">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </motion.section>
  );
}
