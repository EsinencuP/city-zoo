import React from "react";
import { motion } from "motion/react";
import { staggerContainer } from "../../lib/motion";

interface StaggeredListProps {
  children: React.ReactNode;
  className?: string;
}

export default function StaggeredList({ children, className = "" }: StaggeredListProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}
