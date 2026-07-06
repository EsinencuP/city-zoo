import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 rounded-full bg-mint px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-canopy",
        className
      ].join(" ")}
    >
      {children}
    </span>
  );
}
