"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { BugisOrnament } from "@/components/effects/BugisOrnament";
import { COUPLE, WEDDING_DATE, WEDDING_QUOTE } from "@/lib/constants";

function FloralDecoration({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 60 80"
      fill="none"
      aria-hidden="true"
      className={className}
      animate={{ rotate: [0, 3, 0, -3, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      <path
        d="M30 10 C35 20 45 25 30 35 C15 25 25 20 30 10"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
      />
      <path
        d="M30 35 L30 70"
        stroke="currentColor"
        strokeWidth="0.6"
      />
      <circle cx="30" cy="8" r="3" fill="currentColor" opacity="0.4" />
    </motion.svg>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-20 pt-28"
    >
      <FloralDecoration className="absolute left-6 top-32 h-20 w-16 text-gold/25 sm:left-16" />
      <FloralDecoration className="absolute right-6 top-40 h-20 w-16 scale-x-[-1] text-gold/25 sm:right-16" />

      <FadeInUp className="relative z-10 max-w-3xl text-center">
        <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.35em] text-gold-dark">
          We&apos;re Getting Married
        </p>

        <BugisOrnament variant="divider" className="mx-auto mb-8" />

        <h1 className="font-serif text-4xl font-light leading-snug text-warm-brown sm:text-5xl md:text-6xl lg:text-7xl">
          {COUPLE.groom}
          <span className="mx-3 inline-flex items-center text-gold">
            <Heart className="h-5 w-5 fill-gold/20 sm:h-6 sm:w-6" aria-hidden="true" />
          </span>
          {COUPLE.bride}
        </h1>

        <p className="mx-auto mt-8 max-w-xl font-serif text-lg italic leading-relaxed text-warm-brown/65 sm:text-xl">
          &ldquo;{WEDDING_QUOTE}&rdquo;
        </p>

        <p className="mt-10 font-sans text-sm font-medium uppercase tracking-[0.25em] text-gold-dark">
          {WEDDING_DATE}
        </p>

        <BugisOrnament variant="divider" className="mx-auto mt-8" />
      </FadeInUp>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <div className="h-10 w-6 rounded-full border border-gold/30 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-gold/50" />
        </div>
      </motion.div>
    </section>
  );
}
