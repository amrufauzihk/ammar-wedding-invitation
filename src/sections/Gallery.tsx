"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GALLERY_IMAGES } from "@/lib/constants";

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <FadeInUp>
          <SectionHeading subtitle="Memories" title="Gallery" />
        </FadeInUp>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {GALLERY_IMAGES.map((image, index) => (
            <FadeInUp key={image.src} delay={index * 0.08}>
              <button
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group relative aspect-square w-full overflow-hidden rounded-xl bg-beige focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label={`View ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-warm-brown/0 transition-colors duration-300 group-hover:bg-warm-brown/20">
                  <ZoomIn className="h-6 w-6 text-ivory opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                </div>
              </button>
            </FadeInUp>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-warm-brown/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-ivory/90 text-warm-brown"
              aria-label="Close preview"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative h-[70vh] w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_IMAGES[selectedIndex].src}
                alt={GALLERY_IMAGES[selectedIndex].alt}
                fill
                className="rounded-xl object-contain"
                sizes="90vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
