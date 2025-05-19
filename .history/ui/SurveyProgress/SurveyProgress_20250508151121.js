"use client";

import React from "react";
import "./SurveyProgress.css";

const SurveyProgress = ({ currentStep, totalSteps }) => {
	return (
		<div className='survey-progress'>
			<div className='survey-progress__title'>
				Survey {currentStep}/{totalSteps}
			</div>
			<div className='survey-progress__bars'>
				{Array.from({ length: totalSteps }).map(
					(_, index) => (
						<div
							key={index}
							className={`survey-progress__bar ${
								index <
								currentStep
									? "survey-progress__bar--active"
									: "survey-progress__bar--inactive"
							}`}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default SurveyProgress;
