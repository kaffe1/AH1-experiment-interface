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
  videoLength: number;
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
  videoLength,
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
  //experiment progress
  const totoalProgress = ((currentIndex + 1) / totalVideos) * 100;

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
  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-4 pt-2 gap-6">
      {/* progression bar */}
      <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden absolute top-0">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-300"
          style={{ width: `${totoalProgress}%` }}
        />
      </div>
      {/* progression text */}
      <div className="flex justify-between w-full self-start text-gray-500 mt-0">
        <span className="font-medium">
          Stimulus {currentIndex + 1} of {totalVideos}
        </span>

        <button
          onClick={handlePlay}
          disabled={hasEnded}
          className={clsx(
            "flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-all",

            hasEnded
              ? "bg-gray-200 cursor-not-allowed"
              : isPlaying
              ? "bg-gray-200 hover:bg-gray-300 shadow-md hover:shadow-lg "
              : "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
          )}
        >
          {hasEnded ? "Rate" : isPlaying ? "Stop" : "Play"}
        </button>
      </div>

      {/* Video Container */}
      <div className="relative w-full  aspect-video bg-black rounded-xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10">
        <video
          ref={videoRef}
          src={video.url}
          className="w-full h-full object-contain"
          onTimeUpdate={handleTimeUpdate}
          playsInline
        />

        {/* Overlay when ended */}
        {hasEnded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity">
            {/* <button
              onClick={handleReplay}
              className="flex items-center gap-2 px-6 py-3 bg-white/90 text-gray-900 rounded-full font-bold hover:bg-white hover:scale-105 transition-all"
            >
              <RotateCcw className="w-5 h-5" />
              Replay Video
            </button> */}
          </div>
        )}

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white-800">
          <div
            className="h-full bg-blue-500 transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Controls & Rating */}
      <div className="w-full relative bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">
        <RatingScale
          value={currentRating}
          onChange={onRate}
          disabled={progress < 100 / 3}
        />

        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          {/* previous button */}
          {/* <button
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
          </button> */}
          {/* placeholder-btn */}
          <button className=" opacity-0 flex items-center gap-2 px-6 py-3">
            buttonnnn
          </button>
          {/* Submit button */}
          <button
            onClick={onNext}
            disabled={!isLast}
            className={clsx(
              " opacity-1 flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all",
              !isLast || !currentRating
                ? "opacity-0 cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg"
            )}
          >
            Submit
          </button>
          {/* next button */}
          <button
            onClick={() => {
              if (currentIndex === Math.floor(videoLength / 2)) {
                videoRef.current?.pause();
                onBreak();
              } else {
                onNext();
              }
            }}
            disabled={isLast || !currentRating}
            className={clsx(
              "flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all",
              isLast || !currentRating
                ? "text-gray-300 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
            )}
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
          {currentIndex === Math.floor(videoLength / 2) && (
            <div className="break-notification absolute w-full pr-12 text-center pointer-events-none">
              after this video stimuli, you will have a 1-2min break
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
