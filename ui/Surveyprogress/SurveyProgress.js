"use client";

import React from "react";
import "./SurveyProgress.css";

const SurveyProgress = ({ currentStep, totalSteps }) => {
	return (
		<div className='flex flex-col items-center gap-2'>
			<div className='text-[32px] leading-[40px] font-roboto font-bold text-[#29424D]'>
				Survey {currentStep}/{totalSteps}
			</div>
			<div className='flex gap-2'>
				{Array.from({ length: totalSteps }).map(
					(_, index) => (
						<div
							key={index}
							className={`w-10 h-[7px] rounded-lg ${
								index <
								currentStep
									? "bg-[#29424D]"
									: "border-2 border-[#29424D]"
							}`}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default SurveyProgress;
