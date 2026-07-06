import React from "react";
import { motion } from "motion/react";
import { softFloat } from "../../lib/motion";

interface OrganicShapeProps {
  className?: string;
}

export default function OrganicShape({ className = "" }: OrganicShapeProps) {
  return (
    <motion.div
      className={["pointer-events-none absolute rounded-[44%_56%_62%_38%/48%_42%_58%_52%] bg-mint", className].join(" ")}
      aria-hidden="true"
      animate={softFloat}
    />
  );
}
