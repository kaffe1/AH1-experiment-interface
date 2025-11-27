import React, { useState, useEffect } from "react";
import { videos } from "./data/videos";
import { StimulusPlayer } from "./components/StimulusPlayer";
import { BreakOverlay } from "./components/BreakOverlay";
import { CheckCircle, Database } from "lucide-react";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [isPaused, setIsPaused] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // Load state from localStorage on mount
  useEffect(() => {
    const savedRatings = localStorage.getItem("experiment_ratings");
    const savedIndex = localStorage.getItem("experiment_index");

    if (savedRatings) {
      setRatings(JSON.parse(savedRatings));
    }
    if (savedIndex) {
      setCurrentIndex(parseInt(savedIndex, 10));
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("experiment_ratings", JSON.stringify(ratings));
    localStorage.setItem("experiment_index", currentIndex.toString());
  }, [ratings, currentIndex]);

  const handleRate = (rating: number) => {
    const currentVideo = videos[currentIndex];
    setRatings((prev) => ({
      ...prev,
      [currentVideo.id]: rating,
    }));
  };

  const handleNext = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      finishExperiment();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const finishExperiment = () => {
    setIsFinished(true);
    // Simulate sending data to database
    console.log("Sending data to database:", {
      ratings,
      completedAt: new Date().toISOString(),
    });
    // Clear local storage after successful completion (simulated)
    localStorage.removeItem("experiment_ratings");
    localStorage.removeItem("experiment_index");
  };

  if (isFinished) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md text-center space-y-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            Experiment Complete
          </h1>
          <p className="text-gray-600">
            Thank you for your participation. All data has been successfully
            recorded and sent to our secure database.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
            <Database className="w-4 h-4" />
            <span>64/64 Videos Rated</span>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="text-blue-600 hover:underline text-sm"
          >
            Start New Session
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Bar */}
      {/* <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">
            Visual Perception Experiment
          </h1>
          <div className="text-sm text-gray-500">
            Participant ID:{" "}
            <span className="font-mono text-gray-900">
              P-{Math.floor(Math.random() * 10000)}
            </span>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <StimulusPlayer
          video={videos[currentIndex]}
          currentRating={ratings[videos[currentIndex].id] || null}
          onRate={handleRate}
          onNext={handleNext}
          onPrev={handlePrev}
          onBreak={() => setIsPaused(true)}
          isFirst={currentIndex === 0}
          isLast={currentIndex === videos.length - 1}
          totalVideos={videos.length}
          currentIndex={currentIndex}
        />
      </main>

      {/* Break Overlay */}
      {isPaused && <BreakOverlay onResume={() => setIsPaused(false)} />}
    </div>
  );
}

export default App;
