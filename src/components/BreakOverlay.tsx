import React from "react";
import { Play } from "lucide-react";

interface BreakOverlayProps {
  onResume: () => void;
}

export const BreakOverlay: React.FC<BreakOverlayProps> = ({ onResume }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1721613911209-06877d421fa0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAxMTZ8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBsYW5kc2NhcGUlMjByZWxheGluZ3xlbnwwfHx8fDE3NjQwMDQzNjB8MA&ixlib=rb-4.1.0&q=85)",
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center p-8 bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 max-w-md text-center">
        <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-md">
          Take a Break 😊
        </h2>
        <p className="text-white/90 mb-8 text-lg drop-shadow-sm">
          When you are ready to continue the experiment, press the button below.
        </p>

        <button
          onClick={onResume}
          className="group flex items-center gap-3 px-8 py-4 bg-white text-emerald-800 rounded-full font-bold text-xl shadow-lg hover:bg-emerald-50 hover:scale-105 transition-all duration-300"
        >
          <Play className="w-6 h-6 fill-current" />
          Resume Experiment
        </button>
      </div>
    </div>
  );
};
