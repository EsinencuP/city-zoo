import React from "react";

interface SectionBotanicalDividerProps {
  flip?: boolean;
}

export default function SectionBotanicalDivider({ flip = false }: SectionBotanicalDividerProps) {
  return (
    <div className={["pointer-events-none relative h-10 overflow-hidden text-leaf/16", flip ? "rotate-180" : ""].join(" ")} aria-hidden="true">
      <svg viewBox="0 0 1440 80" className="absolute inset-x-0 top-0 h-full w-full" preserveAspectRatio="none">
        <path d="M0 44C200 8 310 72 520 36c250-43 390-10 560 18 160 26 244 9 360-32v58H0V44Z" fill="currentColor" />
        <path d="M394 36c18-18 36-27 54-28-3 24-19 40-48 47" fill="currentColor" opacity="0.55" />
        <path d="M1012 39c20-10 39-11 57-4-13 18-32 26-58 20" fill="currentColor" opacity="0.45" />
      </svg>
    </div>
  );
}
