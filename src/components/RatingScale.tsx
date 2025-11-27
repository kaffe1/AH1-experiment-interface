import React from "react";
import { clsx } from "clsx";

interface RatingScaleProps {
  value: number | null;
  onChange: (value: number) => void;
  disabled?: boolean;
}

export const RatingScale: React.FC<RatingScaleProps> = ({
  value,
  onChange,
  disabled,
}) => {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <label className="text-lg font-medium text-gray-700">
        Rate this video (1-5)
      </label>
      <div className="flex gap-4">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            onClick={() => onChange(rating)}
            disabled={disabled}
            className={clsx(
              "w-12 h-12 rounded-full text-lg font-bold transition-all duration-200 border-2",
              "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
              value === rating
                ? "bg-blue-600 text-white border-blue-600 scale-110 shadow-lg"
                : "bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:bg-blue-50",
              disabled &&
                "opacity-50 cursor-not-allowed hover:bg-white hover:border-gray-300"
            )}
            aria-label={`Rate ${rating}`}
            aria-pressed={value === rating}
          >
            {rating}
          </button>
        ))}
      </div>
      <div className="flex justify-between w-full max-w-xs text-sm text-gray-500 px-1">
        <span>Low</span>
        <span>High</span>
      </div>
    </div>
  );
};
