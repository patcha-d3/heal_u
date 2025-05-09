"use client";

import React from "react";
import Button from "../../../ui/Button/Button";

export default function StepThreePage() {
  const handleClick = () => {
    alert("View My Plan clicked!");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-between py-8 px-4 bg-white">
      <div className="w-full flex flex-col items-center mt-8">
        <h2
          className="text-3xl font-bold text-center mb-0"
          style={{ color: "#2E2E30" }}
        >
          Congratulations, Rachel!
        </h2>
        <div className="w-[90%] max-w-[340px] aspect-square bg-[#F7F4EF] rounded-2xl flex items-center justify-center mb-[50px]">
          <img
            src="/gif/congratulations.gif"
            alt="Congratulations"
            className="w-2/3 h-2/3 object-contain"
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-center mb-12">
        <h3
          className="text-xl font-bold text-center mb-4"
          style={{ color: "#2E2E30" }}
        >
          You're All Set!
        </h3>
        <p className="text-base font-normal text-gray-600 mb-8 text-center max-w-[320px]">
          Your 14-day recovery journey starts now — personalized to your needs
          and focused on helping you move better and feel less pain.
        </p>
        <Button
          text="View My Plan"
          onClick={handleClick}
          fullWidth={true}
          className="text-lg font-bold py-4 rounded-2xl"
        />
      </div>
    </main>
  );
}
