"use client";

import { Calendar, Clock, ExternalLink, MapPin } from "lucide-react";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { EVENTS } from "@/lib/constants";

export function WeddingEvent() {
  return (
    <section id="event" className="relative px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <FadeInUp>
          <SectionHeading subtitle="Save The Date" title="Wedding Event" />
        </FadeInUp>

        <div className="grid gap-8 md:grid-cols-2">
          {EVENTS.map((event, index) => (
            <FadeInUp key={event.id} delay={index * 0.15}>
              <article className="glass-card group h-full rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="font-serif text-2xl font-medium text-warm-brown">
                  {event.title}
                </h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 text-warm-brown/75">
                    <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    <span className="font-sans text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-start gap-3 text-warm-brown/75">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    <span className="font-sans text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-start gap-3 text-warm-brown/75">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    <div>
                      <p className="font-sans text-sm font-medium">{event.location}</p>
                      <p className="mt-1 font-sans text-xs text-warm-brown/55">{event.address}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href={event.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      Google Maps
                    </Button>
                  </a>
                </div>
              </article>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
