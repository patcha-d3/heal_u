"use client";

import React, { useState } from "react";
import ExitChip from "../../../ui/Exitchip/Exitchip";
import SurveyProgress from "../../../ui/SurveyProgress/SurveyProgress";
import ButtonBack from "../../../ui/Button-back/Button-back";
import ButtonForward from "../../../ui/Button-forward/Button-forward";
import VerticalSlider from "../../../ui/VerticalSlider/VerticalSlider";

export default function RootPage() {
	const [selectedHours, setSelectedHours] = useState(0);
	const currentStep = 5;
	const totalSteps = 8;

	const handleSliderChange = (value) => {
		setSelectedHours(value);
	};

	return (
		<div className='w-[406px] h-[800px] relative'>
			<ExitChip className='absolute top-[16px] right-[16px]' />
			<ButtonBack className='absolute bottom-[48px] left-[11px]' />
			<ButtonForward className='absolute bottom-[48px] right-[11px]' />
			<main className='h-full flex flex-col px-4 py-[18px]'>
				<SurveyProgress
					currentStep={currentStep}
					totalSteps={totalSteps}
				/>

				<div className='flex flex-col items-center mt-8'>
					<h2 className='text-2xl font-semibold text-[#29424D] mb-8 text-center'>
						How many hours do you spend
						sitting per day?
					</h2>

					<div className='w-full max-w-[300px]'>
						<VerticalSlider
							value={selectedHours}
							onChange={
								handleSliderChange
							}
						/>
					</div>
				</div>
			</main>
		</div>
	);
}
