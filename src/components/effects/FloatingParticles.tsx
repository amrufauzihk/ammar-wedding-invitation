"use client";

import { motion } from "framer-motion";

function seededValue(index: number, salt: number) {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

const particles = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: `${seededValue(i, 1) * 100}%`,
  top: `${seededValue(i, 2) * 100}%`,
  size: seededValue(i, 3) * 3 + 1,
  delay: seededValue(i, 4) * 5,
  duration: seededValue(i, 5) * 8 + 6,
}));

export function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-gold/30"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
