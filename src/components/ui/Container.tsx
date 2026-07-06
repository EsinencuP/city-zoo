import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={["mx-auto w-full max-w-[1200px] px-4 md:px-6", className].join(" ")}>
      {children}
    </div>
  );
}
