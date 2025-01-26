import React from "react";

const Questionanalysis = () => {
  return (
    <div>
      <div className="p-6 bg-white rounded-lg border-[1px] w-full">
        {/* Title Section */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-semibold text-gray-800">
            Question Analysis
          </h1>
          <span className="text-blue-600 font-medium">10/15</span>
        </div>

        {/* Score and Description */}
        <p className="text-gray-700 text-sm mb-6">
          <strong className="font-medium">
            You scored 10 questions correct out of 15.
          </strong>{" "}
          However, it still needs some improvements.
        </p>

        {/* Circular Chart */}
        <div className="flex justify-center items-center relative">
          <div className="relative">
            <svg className="w-24 h-24">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                className="stroke-gray-200 fill-none stroke-[10]"
              />
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                className="stroke-blue-500 fill-none stroke-[10]"
                strokeDasharray="280"
                strokeDashoffset="112" // Adjust this value for progress (280 * (1 - percentage))
              />
            </svg>
            {/* Inner Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="text-red-500 text-3xl">🎯</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionanalysis;
