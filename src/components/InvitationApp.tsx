"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LandingCover } from "@/components/LandingCover";
import { InvitationContent } from "@/components/InvitationContent";
import { MusicPlayer, useMusicPlayer } from "@/components/MusicPlayer";

export function InvitationApp() {
  const [hasEntered, setHasEntered] = useState(false);
  const { isPlaying, startMusic, toggleMusic } = useMusicPlayer();

  const handleOpen = () => {
    setHasEntered(true);
    startMusic();
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!hasEntered && <LandingCover key="landing" onOpen={handleOpen} />}
      </AnimatePresence>

      {hasEntered && (
        <>
          <InvitationContent />
          <MusicPlayer isPlaying={isPlaying} onToggle={toggleMusic} />
        </>
      )}
    </>
  );
}
