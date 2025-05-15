"use client";

import React, { useState } from "react";
import ExitChip from "../../../ui/Exitchip/Exitchip";
import SurveyProgress from "../../../ui/Surveyprogress/SurveyProgress";
import ButtonBack from "../../../ui/Button-back/Button-back";
import ButtonForward from "../../../ui/Button-forward/Button-forward";
import Verticalslider from "../../../ui/Verticalslider/Verticalslider";

export default function RootPage() {
	const [selectedHours, setSelectedHours] = useState(0);
	const currentStep = 6;
	const totalSteps = 8;

	const handleSliderChange = (value) => {
		setSelectedHours(value);
	};

	return (
		<div className='h-screen w-full flex items-center justify-center overflow-hidden'>
			<div className='w-[406px] h-[700px] relative'>
				<ExitChip className='absolute top-[16px] right-[16px]' />
				<ButtonBack className='absolute bottom-[48px] left-[11px]' />
				<ButtonForward className='absolute bottom-[48px] right-[11px]' />
				<main className='h-full flex flex-col px-4 pt-[18px] pb-[18px] bg-white'>
					<div className='mb-2'>
						<SurveyProgress
							currentStep={
								currentStep
							}
							totalSteps={totalSteps}
						/>
					</div>

					<div className='flex flex-col items-center gap-4'>
						<h2 className='text-2xl font-semibold text-[#29424D] text-center'>
							How many hours do you
							spend sitting per day?
						</h2>

						<div className='w-full max-w-[300px]'>
							<Verticalslider
								value={
									selectedHours
								}
								onChange={
									handleSliderChange
								}
							/>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
