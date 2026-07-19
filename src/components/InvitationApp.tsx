"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LandingCover } from "@/components/LandingCover";
import { InvitationContent } from "@/components/InvitationContent";
import { MusicToggle } from "@/components/MusicToggle";
import { useYouTubePlayer } from "@/hooks/useYouTubePlayer";
import {
  BACKGROUND_MUSIC_START_SECONDS,
  BACKGROUND_MUSIC_YOUTUBE_ID,
} from "@/lib/constants";

export function InvitationApp() {
  const [hasEntered, setHasEntered] = useState(false);
  const { containerRef, muted, playing, toggleMute, play } = useYouTubePlayer({
    videoId: BACKGROUND_MUSIC_YOUTUBE_ID,
    startSeconds: BACKGROUND_MUSIC_START_SECONDS,
  });

  const handleOpen = () => {
    play();
    setHasEntered(true);
  };

  return (
    <>
      <div
        ref={containerRef}
        className="pointer-events-none fixed bottom-0 right-0 h-px w-px overflow-hidden opacity-0"
        aria-hidden="true"
      />

      <AnimatePresence mode="wait">
        {!hasEntered && <LandingCover key="landing" onOpen={handleOpen} />}
      </AnimatePresence>

      {hasEntered && (
        <>
          <InvitationContent />
          <MusicToggle muted={muted} playing={playing} onToggle={toggleMute} />
        </>
      )}
    </>
  );
}
