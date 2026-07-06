import React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  id?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  "aria-label"?: string;
  "aria-expanded"?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-terracotta text-cream shadow-[0_14px_32px_rgba(190,103,61,0.22)] hover:bg-terracotta-deep hover:-translate-y-0.5 focus-visible:ring-terracotta/35",
  secondary:
    "bg-cream/70 text-canopy shadow-[inset_0_0_0_1px_rgba(61,84,50,0.16)] hover:bg-mint/70 hover:-translate-y-0.5 focus-visible:ring-canopy/25",
  ghost:
    "bg-transparent text-canopy hover:bg-mint/55 focus-visible:ring-canopy/20"
};

export default function Button({ variant = "primary", className = "", children, type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={[
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold",
        "transition-[transform,scale,background-color,box-shadow,color] duration-200 ease-out active:scale-[0.96]",
        "focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-60",
        variants[variant],
        className
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
