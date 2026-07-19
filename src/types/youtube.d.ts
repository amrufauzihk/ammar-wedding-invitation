export {};

declare global {
  interface YTPlayer {
    playVideo: () => void;
    pauseVideo: () => void;
    stopVideo: () => void;
    mute: () => void;
    unMute: () => void;
    isMuted: () => boolean;
    setVolume: (volume: number) => void;
    seekTo: (seconds: number, allowSeekAhead?: boolean) => void;
    destroy: () => void;
  }

  interface YTPlayerEvent {
    target: YTPlayer;
  }

  interface YTPlayerOptions {
    height?: string | number;
    width?: string | number;
    videoId?: string;
    playerVars?: Record<string, string | number>;
    events?: {
      onReady?: (event: YTPlayerEvent) => void;
      onStateChange?: (event: YTPlayerEvent & { data: number }) => void;
      onAutoplayBlocked?: () => void;
    };
  }

  interface YTNamespace {
    Player: new (element: HTMLElement | string, options: YTPlayerOptions) => YTPlayer;
    PlayerState: {
      ENDED: number;
      PLAYING: number;
      PAUSED: number;
      UNSTARTED: number;
    };
  }

  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}
