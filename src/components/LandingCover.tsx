"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BackgroundEffects } from "@/components/effects/BackgroundEffects";
import { BugisOrnament } from "@/components/effects/BugisOrnament";
import { COUPLE, WEDDING_DATE } from "@/lib/constants";

type LandingCoverProps = {
  onOpen: () => void;
};

export function LandingCover({ onOpen }: LandingCoverProps) {
  return (
    <motion.section
      className="gradient-cream fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden px-6"
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <BackgroundEffects />

      <div className="relative z-10 flex max-w-lg flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.4em] text-gold-dark"
        >
          The Wedding Of
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="relative mb-6"
        >
          <BugisOrnament variant="divider" className="mb-6" />
          <h1 className="font-serif text-4xl font-light leading-tight text-warm-brown sm:text-5xl md:text-6xl">
            {COUPLE.groom}
          </h1>
          <div className="my-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold/40" />
            <Heart className="h-4 w-4 fill-gold/30 text-gold" aria-hidden="true" />
            <span className="h-px w-10 bg-gold/40" />
          </div>
          <h1 className="font-serif text-4xl font-light leading-tight text-warm-brown sm:text-5xl md:text-6xl">
            {COUPLE.bride}
          </h1>
          <BugisOrnament variant="divider" className="mt-6" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-10 font-serif text-lg italic text-warm-brown/70 sm:text-xl"
        >
          {WEDDING_DATE}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Button size="lg" onClick={onOpen} aria-label="Open wedding invitation">
            Open Invitation
          </Button>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 font-sans text-[10px] uppercase tracking-[0.3em] text-warm-brown/40"
      >
        Tap to enter
      </motion.p>
    </motion.section>
  );
}
