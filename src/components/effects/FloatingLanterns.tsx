"use client";

import { motion } from "framer-motion";

const lanterns = [
  { id: 1, left: "15%", delay: 0, duration: 7 },
  { id: 2, left: "45%", delay: 1.5, duration: 8 },
  { id: 3, left: "75%", delay: 0.8, duration: 6.5 },
];

export function FloatingLanterns() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {lanterns.map((lantern) => (
        <motion.div
          key={lantern.id}
          className="absolute bottom-0"
          style={{ left: lantern.left }}
          animate={{
            y: [0, -80, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: lantern.duration,
            delay: lantern.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative">
            <div className="h-8 w-6 rounded-sm bg-gold/20 blur-sm" />
            <div className="absolute inset-x-1 top-1 h-6 rounded-sm border border-gold/30 bg-gold/10" />
            <div className="mx-auto mt-0.5 h-1 w-1 rounded-full bg-gold/40" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
