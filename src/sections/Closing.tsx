"use client";

import { FadeInUp } from "@/components/ui/FadeInUp";
import { BugisOrnament } from "@/components/effects/BugisOrnament";
import { FloatingLanterns } from "@/components/effects/FloatingLanterns";
import { CLOSING, GROOM_NAME } from "@/lib/constants";

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

          <p className="mt-10 font-serif text-2xl text-warm-brown sm:text-3xl">
            {GROOM_NAME}
          </p>

          <BugisOrnament variant="divider" className="mx-auto mt-10" />
        </FadeInUp>
      </div>
    </section>
  );
}
