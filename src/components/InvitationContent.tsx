"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackgroundEffects } from "@/components/effects/BackgroundEffects";
import { Hero } from "@/sections/Hero";
import { GroomSection } from "@/sections/GroomSection";
import { WeddingEvent } from "@/sections/WeddingEvent";
import { LoveStory } from "@/sections/LoveStory";
import { Gallery } from "@/sections/Gallery";
import { WeddingWishes } from "@/sections/WeddingWishes";
import { GiftSection } from "@/sections/GiftSection";
import { Closing } from "@/sections/Closing";

export function InvitationContent() {
  return (
    <div className="gradient-cream relative min-h-screen">
      <BackgroundEffects showBirds showLeaves />
      <Navbar />

      <main>
        <Hero />
        <GroomSection />
        <WeddingEvent />
        <LoveStory />
        <Gallery />
        <WeddingWishes />
        <GiftSection />
        <Closing />
      </main>

      <Footer />
    </div>
  );
}
