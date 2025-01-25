"use client";

import React, { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

interface VideoPlayerProps {
  videoUrl: string;
}

export function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative aspect-video bg-primary rounded-lg overflow-hidden">
      <video ref={videoRef} className="w-full h-full object-cover" src={videoUrl} onEnded={() => setIsPlaying(false)} />
      <button
        onClick={togglePlay}
        className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity hover:bg-black/30"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        <div className="size-16 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
          {isPlaying ? <Pause className="size-8 text-white" /> : <Play className="size-8 text-white" />}
        </div>
      </button>
    </div>
  );
}

