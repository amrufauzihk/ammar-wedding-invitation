"use client";

import { motion } from "framer-motion";
import { Bird } from "lucide-react";
import { useEffect, useState } from "react";

type BirdInstance = {
  id: number;
  top: number;
  duration: number;
  delay: number;
  size: number;
};

export function Birds() {
  const [birds, setBirds] = useState<BirdInstance[]>([]);

  useEffect(() => {
    const spawnBird = () => {
      const bird: BirdInstance = {
        id: Date.now() + Math.random(),
        top: 10 + Math.random() * 30,
        duration: 18 + Math.random() * 12,
        delay: 0,
        size: 16 + Math.random() * 8,
      };
      setBirds((prev) => [...prev.slice(-2), bird]);
    };

    spawnBird();
    const interval = setInterval(spawnBird, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {birds.map((bird) => (
        <motion.div
          key={bird.id}
          className="absolute text-warm-brown/25"
          style={{ top: `${bird.top}%`, left: "-5%" }}
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: "110vw", opacity: [0, 0.6, 0.6, 0] }}
          transition={{
            duration: bird.duration,
            delay: bird.delay,
            ease: "linear",
          }}
          onAnimationComplete={() =>
            setBirds((prev) => prev.filter((b) => b.id !== bird.id))
          }
        >
          <Bird size={bird.size} strokeWidth={1.2} />
        </motion.div>
      ))}
    </div>
  );
}
