"use client";

import { motion } from "framer-motion";

const clouds = [
  { id: 1, top: "8%", width: 180, opacity: 0.35, duration: 85, delay: 0 },
  { id: 2, top: "22%", width: 240, opacity: 0.25, duration: 110, delay: 15 },
  { id: 3, top: "55%", width: 200, opacity: 0.2, duration: 95, delay: 30 },
];

export function Clouds() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute rounded-full bg-white/60 blur-sm"
          style={{
            top: cloud.top,
            width: cloud.width,
            height: cloud.width * 0.35,
            opacity: cloud.opacity,
          }}
          initial={{ x: "-30%" }}
          animate={{ x: "130vw" }}
          transition={{
            duration: cloud.duration,
            delay: cloud.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
