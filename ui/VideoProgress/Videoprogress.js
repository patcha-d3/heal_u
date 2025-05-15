"use client";

import React from "react";
import "./Videoprogress.module.css";

const VideoProgress = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex flex-col items-center gap-2 py-4">
      {/* Title Section */}
      <div className="text-3xl font-semibold text-[#2D3748]">Neck</div>
      <div className="text-base font-medium text-[#718096]">
        Step {currentStep}. Resistance Strengthening
      </div>

      {/* Progress Bar */}
      <div className="flex gap-2 mt-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`w-10 h-[7px] rounded-full transition-all ${
              index < currentStep
                ? "bg-[#2D3748]"
                : "border-2 border-[#2D3748] bg-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoProgress;
