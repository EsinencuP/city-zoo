import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function Card({ className = "", children, ...props }: CardProps) {
  return (
    <div
      className={[
        "rounded-[30px] bg-cream/86 p-5 shadow-soft-card backdrop-blur-sm",
        "transition-[transform,box-shadow] duration-200 ease-out",
        className
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
