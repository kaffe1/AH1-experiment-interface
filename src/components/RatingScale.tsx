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
    <div className="flex flex-col items-center gap-4 p-0">
      <label className="text-lg font-medium text-gray-700">
        Q: To what degree do you think the dance fit to the music ?
      </label>
      <div className="flex gap-10 items-center">
        <span className="text-md text-gray-500">Low</span>
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
        <span className="text-md text-gray-500">High</span>
      </div>
    </div>
  );
};
