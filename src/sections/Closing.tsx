"use client";

import { Heart } from "lucide-react";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { BugisOrnament } from "@/components/effects/BugisOrnament";
import { FloatingLanterns } from "@/components/effects/FloatingLanterns";
import { CLOSING, COUPLE } from "@/lib/constants";

export function Closing() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6">
      <FloatingLanterns />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <FadeInUp>
          <BugisOrnament variant="divider" className="mx-auto mb-8" />

          <h2 className="font-serif text-3xl font-light text-warm-brown sm:text-4xl">
            Thank You
          </h2>

          <p className="mx-auto mt-6 max-w-lg font-sans text-sm leading-relaxed text-warm-brown/70 sm:text-base">
            {CLOSING.thankYou}
          </p>

          <p className="mx-auto mt-8 max-w-md font-serif text-lg italic leading-relaxed text-gold-dark">
            &ldquo;{CLOSING.bugisClosing}&rdquo;
          </p>

          <div className="my-10 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gold/30" />
            <Heart className="h-4 w-4 fill-gold/25 text-gold" aria-hidden="true" />
            <span className="h-px w-12 bg-gold/30" />
          </div>

          <p className="font-serif text-2xl text-warm-brown sm:text-3xl">
            {COUPLE.groom}
            <span className="mx-3 text-gold">&</span>
            {COUPLE.bride}
          </p>

          <BugisOrnament variant="divider" className="mx-auto mt-10" />
        </FadeInUp>
      </div>
    </section>
  );
}
