"use client";

import { cn } from "@/lib/utils";

type BugisOrnamentProps = {
  className?: string;
  variant?: "corner" | "divider" | "pattern";
  flip?: boolean;
};

export function BugisOrnament({
  className,
  variant = "corner",
  flip = false,
}: BugisOrnamentProps) {
  if (variant === "divider") {
    return (
      <svg
        viewBox="0 0 200 24"
        fill="none"
        aria-hidden="true"
        className={cn("h-6 w-full max-w-xs text-gold/40", className)}
      >
        <path
          d="M0 12h60M140 12h60M85 12l7-7 7 7-7 7-7-7z"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <circle cx="100" cy="12" r="2" fill="currentColor" />
      </svg>
    );
  }

  if (variant === "pattern") {
    return (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden="true"
        className={cn("h-full w-full text-gold/15", flip && "scale-x-[-1]", className)}
      >
        <path
          d="M60 10 L70 30 L90 30 L75 42 L80 62 L60 50 L40 62 L45 42 L30 30 L50 30 Z"
          stroke="currentColor"
          strokeWidth="0.8"
          fill="none"
        />
        <path
          d="M60 58 L68 72 L82 72 L71 80 L75 94 L60 86 L45 94 L49 80 L38 72 L52 72 Z"
          stroke="currentColor"
          strokeWidth="0.6"
          fill="none"
        />
        <circle cx="60" cy="60" r="48" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 6" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
      className={cn("h-16 w-16 text-gold/30", flip && "scale-x-[-1]", className)}
    >
      <path
        d="M5 5 L25 5 L25 15 L15 15 L15 25 L5 25 Z"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path
        d="M40 5 L55 20 L45 30 L30 15 Z"
        stroke="currentColor"
        strokeWidth="0.6"
        fill="none"
      />
      <path
        d="M5 40 Q20 30 35 40 T65 40"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
      />
    </svg>
  );
}
