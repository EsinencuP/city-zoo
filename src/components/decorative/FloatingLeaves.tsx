import React from "react";
import { motion } from "motion/react";
import { botanicalDrift } from "../../lib/motion";

interface FloatingLeavesProps {
  className?: string;
  count?: 2 | 3 | 4;
}

const positions = [
  "left-[5%] top-[18%] rotate-[-18deg]",
  "right-[8%] top-[10%] rotate-[16deg]",
  "left-[52%] bottom-[9%] rotate-[24deg]",
  "right-[22%] bottom-[18%] rotate-[-10deg]"
];

function Leaf({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={["h-14 w-14 text-leaf/24", className].join(" ")} aria-hidden="true">
      <path d="M8 55C21 21 39 9 58 8c-2 21-13 38-37 48-5 2-9 2-13-1Z" fill="currentColor" />
      <path d="M12 54C28 36 41 23 57 9" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.45" />
    </svg>
  );
}

export default function FloatingLeaves({ className = "", count = 3 }: FloatingLeavesProps) {
  return (
    <div className={["pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden max-md:hidden", className].join(" ")} aria-hidden="true">
      {positions.slice(0, count).map((position, index) => (
        <motion.div
          key={position}
          className={["absolute", position].join(" ")}
          animate={botanicalDrift}
          transition={{ duration: 10 + index * 1.6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: index * 0.25 }}
        >
          <Leaf />
        </motion.div>
      ))}
    </div>
  );
}
