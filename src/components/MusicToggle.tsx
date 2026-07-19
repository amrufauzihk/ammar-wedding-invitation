"use client";

import { Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

type MusicToggleProps = {
  muted: boolean;
  playing: boolean;
  onToggle: () => void;
  visible?: boolean;
  className?: string;
};

export function MusicToggle({
  muted,
  playing,
  onToggle,
  visible = true,
  className,
}: MusicToggleProps) {
  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={muted}
      aria-label={muted ? "Turn on background music" : "Turn off background music"}
      className={cn(
        "fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-ivory/90 text-gold shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-gold hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold active:scale-[0.96] touch-manipulation",
        className
      )}
    >
      {playing && !muted ? (
        <span
          className="absolute inset-0 animate-ping rounded-full border border-gold/30"
          aria-hidden="true"
        />
      ) : null}
      <span className="relative" aria-hidden="true">
        {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </span>
    </button>
  );
}
