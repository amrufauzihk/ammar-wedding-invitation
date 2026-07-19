"use client";

import { motion } from "framer-motion";

function seededValue(index: number, salt: number) {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

const leaves = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  left: `${10 + seededValue(i, 1) * 80}%`,
  delay: seededValue(i, 2) * 4,
  duration: 8 + seededValue(i, 3) * 6,
  rotate: seededValue(i, 4) * 360,
}));

export function FloatingLeaves() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute text-gold/20"
          style={{ left: leaf.left, top: "70%" }}
          animate={{
            y: [0, -120, -240],
            x: [0, 20, -10],
            rotate: [leaf.rotate, leaf.rotate + 45, leaf.rotate + 90],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
            <path d="M7 0 C7 0 14 6 14 12 C14 16 10 18 7 18 C4 18 0 16 0 12 C0 6 7 0 7 0 Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
