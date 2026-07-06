import React from "react";

interface BotanicalPatternProps {
  className?: string;
}

export default function BotanicalPattern({ className = "" }: BotanicalPatternProps) {
  return (
    <div className={["pointer-events-none select-none", className].join(" ")} aria-hidden="true">
      <svg className="h-full w-full" preserveAspectRatio="none">
        <defs>
          <pattern id="botanical-leaf-pattern" width="112" height="112" patternUnits="userSpaceOnUse">
            <path
              d="M24 74c17-7 26-22 30-43 12 16 11 33 0 50-10 15-23 23-40 25 2-12 5-22 10-32Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              opacity="0.18"
            />
            <path
              d="M72 20c10 9 15 21 14 38-11-7-19-17-23-31 2-3 5-5 9-7Z"
              fill="currentColor"
              opacity="0.08"
            />
            <circle cx="91" cy="90" r="2" fill="currentColor" opacity="0.12" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#botanical-leaf-pattern)" className="text-leaf" />
      </svg>
    </div>
  );
}
