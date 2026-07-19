import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-50",
          variant === "primary" &&
            "bg-gold text-ivory shadow-md hover:bg-gold-dark hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
          variant === "outline" &&
            "border border-gold/40 bg-transparent text-warm-brown hover:border-gold hover:bg-gold/10",
          variant === "ghost" &&
            "bg-transparent text-warm-brown hover:bg-gold/10",
          size === "sm" && "px-4 py-2 text-xs tracking-wide",
          size === "md" && "px-6 py-2.5 text-sm tracking-wide",
          size === "lg" && "px-8 py-3.5 text-sm tracking-widest uppercase",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
