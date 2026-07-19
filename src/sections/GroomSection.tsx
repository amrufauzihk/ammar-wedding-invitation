"use client";

import Image from "next/image";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GROOM_PROFILE } from "@/lib/constants";

export function GroomSection() {
  return (
    <section id="groom" className="relative px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <FadeInUp>
          <SectionHeading subtitle="The Groom" title={GROOM_PROFILE.name} />
        </FadeInUp>

        <FadeInUp delay={0.15} className="flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="absolute -inset-2 rounded-full border border-gold/20" />
            <div className="relative h-44 w-44 overflow-hidden rounded-full border-2 border-gold/40 bg-beige sm:h-52 sm:w-52">
              <Image
                src={GROOM_PROFILE.photo}
                alt={GROOM_PROFILE.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 176px, 208px"
              />
            </div>
          </div>

          <p className="max-w-md font-sans text-sm leading-relaxed text-warm-brown/65">
            {GROOM_PROFILE.description}
          </p>

          <div className="mt-6 space-y-1">
            <p className="font-sans text-xs uppercase tracking-wider text-gold-dark">
              Parents
            </p>
            <p className="font-sans text-sm text-warm-brown/80">
              {GROOM_PROFILE.parents.father}
            </p>
            <p className="font-sans text-sm text-warm-brown/80">
              {GROOM_PROFILE.parents.mother}
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
