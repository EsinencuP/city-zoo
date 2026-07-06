import React from "react";
import { motion } from "motion/react";
import { botanicalDrift } from "../../lib/motion";

interface LeafCornerProps {
  className?: string;
  mirrored?: boolean;
}

export default function LeafCorner({ className = "", mirrored = false }: LeafCornerProps) {
  return (
    <motion.svg
      viewBox="0 0 180 180"
      className={["pointer-events-none absolute text-leaf/20 motion-reduce:hidden", className].join(" ")}
      aria-hidden="true"
      animate={botanicalDrift}
      style={{ scaleX: mirrored ? -1 : 1 }}
    >
      <path d="M20 160C70 105 83 60 88 16c31 30 35 72 13 109-18 30-46 46-81 35Z" fill="currentColor" />
      <path d="M88 18C77 70 55 111 22 158" fill="none" stroke="currentColor" strokeWidth="4" opacity="0.45" />
      <path d="M94 74c21-18 41-25 65-23-8 24-26 39-58 47" fill="currentColor" opacity="0.58" />
      <path d="M78 106c25-4 45 2 63 18-20 16-44 17-70 1" fill="currentColor" opacity="0.42" />
    </motion.svg>
  );
}
