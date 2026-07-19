"use client";

import { Clouds } from "@/components/effects/Clouds";
import { Birds } from "@/components/effects/Birds";
import { FloatingLeaves } from "@/components/effects/FloatingLeaves";
import { FloatingParticles } from "@/components/effects/FloatingParticles";
import { SunlightEffect } from "@/components/effects/SunlightEffect";
import { BugisOrnament } from "@/components/effects/BugisOrnament";

type BackgroundEffectsProps = {
  showBirds?: boolean;
  showLeaves?: boolean;
};

export function BackgroundEffects({
  showBirds = true,
  showLeaves = false,
}: BackgroundEffectsProps) {
  return (
    <>
      <SunlightEffect />
      <Clouds />
      <FloatingParticles />
      {showBirds && <Birds />}
      {showLeaves && <FloatingLeaves />}
      <BugisOrnament
        variant="pattern"
        className="absolute -left-8 top-20 h-32 w-32 opacity-60 md:h-48 md:w-48"
      />
      <BugisOrnament
        variant="pattern"
        flip
        className="absolute -right-8 bottom-32 h-32 w-32 opacity-60 md:h-48 md:w-48"
      />
    </>
  );
}
