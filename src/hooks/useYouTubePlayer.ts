"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  BACKGROUND_MUSIC_START_SECONDS,
  BACKGROUND_MUSIC_YOUTUBE_ID,
} from "@/lib/constants";

type UseYouTubePlayerOptions = {
  videoId?: string;
  startSeconds?: number;
};

let apiLoading: Promise<void> | null = null;

function loadYouTubeApi(): Promise<void> {
  if (window.YT?.Player) return Promise.resolve();
  if (apiLoading) return apiLoading;

  apiLoading = new Promise((resolve) => {
    if (window.YT?.Player) {
      resolve();
      return;
    }

    const done = () => resolve();
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      done();
    };

    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.head.appendChild(script);
    }
  });

  return apiLoading;
}

export function useYouTubePlayer({
  videoId = BACKGROUND_MUSIC_YOUTUBE_ID,
  startSeconds = BACKGROUND_MUSIC_START_SECONDS,
}: UseYouTubePlayerOptions = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const playRequestedRef = useRef(false);
  const retryTimerRef = useRef<number | null>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  const clearRetry = useCallback(() => {
    if (retryTimerRef.current !== null) {
      window.clearInterval(retryTimerRef.current);
      retryTimerRef.current = null;
    }
  }, []);

  const tryPlay = useCallback(() => {
    const player = playerRef.current;
    if (!player) return false;

    try {
      if (startSeconds > 0) {
        player.seekTo(startSeconds, true);
      }
      player.unMute();
      player.setVolume(60);
      player.playVideo();
      setMuted(false);
      return true;
    } catch {
      return false;
    }
  }, [startSeconds]);

  const schedulePlayRetries = useCallback(() => {
    clearRetry();
    let attempts = 0;

    retryTimerRef.current = window.setInterval(() => {
      attempts += 1;
      if (tryPlay() || attempts >= 12) {
        clearRetry();
      }
    }, 250);
  }, [clearRetry, tryPlay]);

  const play = useCallback(() => {
    playRequestedRef.current = true;

    if (tryPlay()) return;

    schedulePlayRetries();
  }, [schedulePlayRetries, tryPlay]);

  useEffect(() => {
    void loadYouTubeApi();
  }, []);

  useEffect(() => {
    let cancelled = false;

    void loadYouTubeApi().then(() => {
      if (cancelled || !containerRef.current || !window.YT?.Player) return;

      new window.YT.Player(containerRef.current, {
        videoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          enablejsapi: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          start: startSeconds,
          loop: 1,
          playlist: videoId,
        },
        events: {
          onReady: (event) => {
            if (cancelled) return;

            const readyPlayer = event.target;
            playerRef.current = readyPlayer;
            readyPlayer.mute();
            setReady(true);

            if (playRequestedRef.current && !tryPlay()) {
              schedulePlayRetries();
            }
          },
          onStateChange: (event) => {
            if (!window.YT) return;

            const { PLAYING, PAUSED, ENDED } = window.YT.PlayerState;

            if (event.data === PLAYING) {
              setPlaying(true);
              clearRetry();
            }

            if (event.data === PAUSED) {
              setPlaying(false);
            }

            if (event.data === ENDED) {
              setPlaying(false);

              if (playRequestedRef.current && playerRef.current) {
                playerRef.current.seekTo(startSeconds, true);
                if (!tryPlay()) {
                  schedulePlayRetries();
                }
              }
            }
          },
          onAutoplayBlocked: () => {
            if (playRequestedRef.current) {
              schedulePlayRetries();
            }
          },
        },
      });
    });

    return () => {
      cancelled = true;
      clearRetry();
      playerRef.current = null;
      setReady(false);
    };
  }, [videoId, startSeconds, clearRetry, schedulePlayRetries, tryPlay]);

  const toggleMute = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;

    playRequestedRef.current = true;

    if (player.isMuted()) {
      if (startSeconds > 0) {
        player.seekTo(startSeconds, true);
      }
      player.unMute();
      player.setVolume(60);
      player.playVideo();
      setMuted(false);
    } else {
      player.mute();
      player.pauseVideo();
      setMuted(true);
      setPlaying(false);
    }
  }, [startSeconds]);

  return { containerRef, muted, playing, ready, toggleMute, play };
}
