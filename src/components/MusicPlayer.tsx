"use client";

import { Pause, Volume2 } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  BACKGROUND_MUSIC_START_SECONDS,
  BACKGROUND_MUSIC_YOUTUBE_ID,
} from "@/lib/constants";

type MusicPlayerProps = {
  isPlaying: boolean;
  onToggle: () => void;
  className?: string;
};

function loadYouTubeIframeApi(onReady: () => void) {
  if (window.YT?.Player) {
    onReady();
    return;
  }

  const previousCallback = window.onYouTubeIframeAPIReady;
  window.onYouTubeIframeAPIReady = () => {
    previousCallback?.();
    onReady();
  };

  if (!document.getElementById("youtube-iframe-api")) {
    const script = document.createElement("script");
    script.id = "youtube-iframe-api";
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);
  }
}

export function MusicPlayer({ isPlaying, onToggle, className }: MusicPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const isPlayingRef = useRef(isPlaying);
  const hasStartedRef = useRef(false);
  const [playerReady, setPlayerReady] = useState(false);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  const playFromStart = useCallback((player: YTPlayer) => {
    player.seekTo(BACKGROUND_MUSIC_START_SECONDS, true);
    player.playVideo();
    hasStartedRef.current = true;
  }, []);

  const initPlayer = useCallback(() => {
    if (!containerRef.current || playerRef.current || !window.YT?.Player) return;

    playerRef.current = new window.YT.Player(containerRef.current, {
      height: "0",
      width: "0",
      videoId: BACKGROUND_MUSIC_YOUTUBE_ID,
      playerVars: {
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        fs: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        playsinline: 1,
        rel: 0,
        loop: 1,
        playlist: BACKGROUND_MUSIC_YOUTUBE_ID,
        start: BACKGROUND_MUSIC_START_SECONDS,
      },
      events: {
        onReady: (event) => {
          setPlayerReady(true);
          event.target.setVolume(60);
          if (isPlayingRef.current) {
            playFromStart(event.target);
          }
        },
        onStateChange: (event) => {
          if (
            event.data === window.YT?.PlayerState.ENDED &&
            isPlayingRef.current
          ) {
            playFromStart(event.target);
          }
        },
      },
    });
  }, [playFromStart]);

  useEffect(() => {
    loadYouTubeIframeApi(initPlayer);

    return () => {
      playerRef.current?.destroy();
      playerRef.current = null;
      hasStartedRef.current = false;
      setPlayerReady(false);
    };
  }, [initPlayer]);

  useEffect(() => {
    if (!playerReady || !playerRef.current) return;

    if (isPlaying) {
      if (!hasStartedRef.current) {
        playFromStart(playerRef.current);
      } else {
        playerRef.current.playVideo();
      }
    } else {
      playerRef.current.pauseVideo();
    }
  }, [isPlaying, playerReady, playFromStart]);

  return (
    <>
      <div
        className="pointer-events-none fixed -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
        aria-hidden="true"
      >
        <div ref={containerRef} />
      </div>
      <button
        type="button"
        onClick={onToggle}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-ivory/90 text-gold shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-gold hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
          className
        )}
      >
        {isPlaying ? (
          <Pause className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Volume2 className="h-4 w-4" aria-hidden="true" />
        )}
      </button>
    </>
  );
}

export function useMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const startMusic = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const toggleMusic = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  return { isPlaying, startMusic, toggleMusic };
}
