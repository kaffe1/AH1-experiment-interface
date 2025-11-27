import React, { useEffect, useRef, useState } from "react";
import { VideoStimulus } from "../data/videos";
import { RatingScale } from "./RatingScale";
import {
  ChevronLeft,
  ChevronRight,
  PauseCircle,
  RotateCcw,
} from "lucide-react";
import { clsx } from "clsx";

interface StimulusPlayerProps {
  video: VideoStimulus;
  currentRating: number | null;
  onRate: (rating: number) => void;
  onNext: () => void;
  onPrev: () => void;
  onBreak: () => void;
  isFirst: boolean;
  isLast: boolean;
  totalVideos: number;
  currentIndex: number;
}

export const StimulusPlayer: React.FC<StimulusPlayerProps> = ({
  video,
  currentRating,
  onRate,
  onNext,
  onPrev,
  onBreak,
  isFirst,
  isLast,
  totalVideos,
  currentIndex,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasEnded, setHasEnded] = useState(false);

  // Reset state when video changes
  useEffect(() => {
    setProgress(0);
    setHasEnded(false);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [video.id]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = video.duration;
      const percent = Math.min((current / duration) * 100, 100);
      setProgress(percent);

      console.log("current", current, duration);
      if (current >= duration) {
        videoRef.current.pause();
        setHasEnded(true);
        setIsPlaying(false);
      }
    }
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
      setHasEnded(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-4 space-y-8">
      {/* Header / Progress */}
      <div className="w-full flex justify-between items-center text-gray-500">
        <span className="font-medium">
          Stimulus {currentIndex + 1} of {totalVideos}
        </span>
        <button
          onClick={onBreak}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-emerald-700 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
        >
          <PauseCircle className="w-4 h-4" />
          Take a Break
        </button>
      </div>

      {/* Video Container */}
      <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10">
        <video
          ref={videoRef}
          src={video.url}
          className="w-full h-full object-contain"
          onTimeUpdate={handleTimeUpdate}
          playsInline
          muted // Muted for autoplay policy, though user might want sound.
          // Usually experiments require sound, but browsers block unmuted autoplay.
          // I'll leave it unmuted but handle catch error in useEffect.
          // Actually, let's try unmuted and if it fails, user has to interact.
        />

        {/* Overlay when ended */}
        {hasEnded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity">
            <button
              onClick={handleReplay}
              className="flex items-center gap-2 px-6 py-3 bg-white/90 text-gray-900 rounded-full font-bold hover:bg-white hover:scale-105 transition-all"
            >
              <RotateCcw className="w-5 h-5" />
              Replay Video
            </button>
          </div>
        )}

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gray-800">
          <div
            className="h-full bg-blue-500 transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Controls & Rating */}
      <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">
        <RatingScale
          value={currentRating}
          onChange={onRate}
          disabled={!hasEnded && false} // Can rate anytime? Or only after? User didn't specify.
          // Usually experiments allow rating during or after. I'll allow anytime.
        />

        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <button
            onClick={onPrev}
            disabled={isFirst}
            className={clsx(
              "flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all",
              isFirst
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            )}
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          <button
            onClick={onNext}
            disabled={isLast} // Maybe disable if not rated? User said "after participants have watched... and did the rating".
            // I'll enforce rating before Next? Or just allow navigation.
            // "storing selected values... after participants have watched... all data will be sent"
            // I'll allow navigation but maybe highlight if missing.
            // For now, standard nav.
            className={clsx(
              "flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all",
              isLast
                ? "text-gray-300 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
            )}
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
