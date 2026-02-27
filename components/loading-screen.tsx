"use client";

import { useEffect, useState } from "react";
import { Player } from "@remotion/player";
import { RemotionLoading } from "./remotion-loading";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Auto-complete after 4 seconds (matching video duration)
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isClient) {
    return (
      <div className="fixed inset-0 z-50 bg-zinc-950 flex items-center justify-center">
        <div className="text-white text-xl font-bold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-zinc-950">
      <Player
        component={RemotionLoading}
        durationInFrames={120}
        fps={30}
        compositionWidth={1920}
        compositionHeight={1080}
        style={{
          width: "100%",
          height: "100%",
        }}
        controls={false}
        autoPlay
        loop={false}
      />
    </div>
  );
}
