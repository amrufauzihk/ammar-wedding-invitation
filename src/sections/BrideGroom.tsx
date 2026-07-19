"use client";

import Image from "next/image";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BRIDE_GROOM } from "@/lib/constants";

function PersonCard({
  person,
  align,
}: {
  person: (typeof BRIDE_GROOM)[keyof typeof BRIDE_GROOM];
  align: "left" | "right";
}) {
  return (
    <FadeInUp
      className={`flex flex-col items-center text-center ${align === "right" ? "md:items-end md:text-right" : "md:items-start md:text-left"} md:flex-1`}
    >
      <div className="relative mb-6">
        <div className="absolute -inset-2 rounded-full border border-gold/20" />
        <div className="relative h-44 w-44 overflow-hidden rounded-full border-2 border-gold/40 bg-beige sm:h-52 sm:w-52">
          <Image
            src={person.photo}
            alt={person.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 176px, 208px"
          />
        </div>
      </div>

      <h3 className="font-serif text-2xl font-medium text-warm-brown sm:text-3xl">
        {person.name}
      </h3>

      <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-warm-brown/65">
        {person.description}
      </p>

      <div className="mt-6 space-y-1">
        <p className="font-sans text-xs uppercase tracking-wider text-gold-dark">
          Parents
        </p>
        <p className="font-sans text-sm text-warm-brown/80">{person.parents.father}</p>
        <p className="font-sans text-sm text-warm-brown/80">{person.parents.mother}</p>
      </div>
    </FadeInUp>
  );
}

export function BrideGroom() {
  return (
    <section id="couple" className="relative px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <FadeInUp>
          <SectionHeading subtitle="The Couple" title="Bride & Groom" />
        </FadeInUp>

        <div className="flex flex-col items-center gap-16 md:flex-row md:gap-8">
          <PersonCard person={BRIDE_GROOM.groom} align="left" />
          <FadeInUp delay={0.2} className="hidden md:block">
            <div className="flex flex-col items-center gap-2">
              <span className="font-serif text-3xl text-gold">&</span>
              <div className="h-24 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
            </div>
          </FadeInUp>
          <PersonCard person={BRIDE_GROOM.bride} align="right" />
        </div>
      </div>
    </section>
  );
}
