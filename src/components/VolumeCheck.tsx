import React, { useState, useRef } from "react";

interface VolumeCheckProps {
  setIsStarted: (started: boolean) => void;
  volume: number;
  setVolume: (v: number) => void;
}

export const VolumeCheck: React.FC<VolumeCheckProps> = ({
  setIsStarted,
  volume,
  setVolume,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume; // 实时调整video音量
    }
  };

  const handleStartExperiment = () => {
    setIsStarted(true);
  };

  return (
    <div
      className="volume-check-container flex flex-col gap-5 items-center text-center"
      style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}
    >
      {/* 1. Welcome Info */}
      <div className="welcome-info bg-gray-100 rounded-xl py-6 px-8">
        <h2 className="font-semibold text-blue-600 text-2xl mb-2">Welcome !</h2>
        <p className="text-lg">
          Before the experiment, please adjust the volume 🔈🔉🔊 to a
          comfortable level 😊🎧.
        </p>
      </div>

      {/* 2. Demo Video */}
      <div className="demo-video" style={{ marginBottom: "20px" }}>
        <video
          className="relative w-full cursor-pointer aspect-video bg-black rounded-xl overflow-hidden shadow-md  ring-gray-900/10"
          ref={videoRef}
          src="video/volume_test.mp4"
          style={{
            width: "100%",
            borderRadius: "8px",
            backgroundColor: "#000",
          }}
          loop
          controls
        ></video>
        <div
          className="volume-slider bg-blue-100 py-6 px-10 rounded-lg"
          style={{ marginTop: "30px" }}
        >
          <label className="text-lg">
            🔉Volume: {Math.round(volume * 100)}
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={handleVolumeChange}
              style={{ width: "100%" }}
            />
          </label>
        </div>
      </div>

      {/* 3. Start Button */}
      <button
        onClick={handleStartExperiment}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "10px",
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
        }}
      >
        Start Experiment
      </button>
    </div>
  );
};
