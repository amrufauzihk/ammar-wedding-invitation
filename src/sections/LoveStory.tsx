"use client";

import { FadeInUp } from "@/components/ui/FadeInUp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LOVE_STORY } from "@/lib/constants";

export function LoveStory() {
  return (
    <section id="story" className="relative px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <FadeInUp>
          <SectionHeading subtitle="Our Journey" title="Love Story" />
        </FadeInUp>

        <div className="relative">
          <div
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {LOVE_STORY.map((item, index) => (
              <FadeInUp key={item.title} delay={index * 0.1}>
                <div
                  className={`relative flex flex-col gap-4 pl-12 md:w-1/2 md:pl-0 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-12 md:text-right"
                      : "md:ml-auto md:pl-12 md:text-left"
                  }`}
                >
                  <div
                    className={`absolute top-1 h-3 w-3 rounded-full border-2 border-gold bg-ivory left-2.5 md:left-auto ${
                      index % 2 === 0 ? "md:-right-1.5" : "md:-left-1.5"
                    }`}
                    aria-hidden="true"
                  />

                  <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
                    {item.year}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-warm-brown">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-warm-brown/65">
                    {item.description}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
