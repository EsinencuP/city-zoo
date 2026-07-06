import React from "react";
import { motion } from "motion/react";
import { fadeUp } from "../../lib/motion";

interface MotionSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function MotionSection({ children, className = "" }: MotionSectionProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      {children}
    </motion.div>
  );
}
