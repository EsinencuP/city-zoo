import React from "react";
import { motion } from "motion/react";
import { imageReveal } from "../../lib/motion";

type AnimatedImageProps = {
  wrapperClassName?: string;
  className?: string;
  alt: string;
  src: string;
  loading?: "eager" | "lazy";
};

export default function AnimatedImage({ wrapperClassName = "", className = "", alt, ...props }: AnimatedImageProps) {
  return (
    <motion.div
      className={["overflow-hidden", wrapperClassName].join(" ")}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={imageReveal}
    >
      <img
        className={["h-full w-full object-cover outline outline-1 -outline-offset-1 outline-black/10", className].join(" ")}
        alt={alt}
        {...props}
      />
    </motion.div>
  );
}
