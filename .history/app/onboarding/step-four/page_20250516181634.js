"use client";

import React, { useState } from "react";
import ExitChip from "@ui/Exitchip/Exitchip";
import SurveyProgress from "@ui/SurveyProgress/SurveyProgress";
import ButtonBack from "@ui/Button-back/Button-back";
import ButtonForward from "@ui/Button-forward/Button-forward";
import Verticalslider from "@ui/Verticalslider/Verticalslider";
import { useRouter } from "next/navigation";

export default function RootPage() {
	const [selectedHours, setSelectedHours] = useState(0);
	const currentStep = 4;
	const totalSteps = 8;
	const router = useRouter();

	const handleSliderChange = (value) => {
		setSelectedHours(value);
	};

	return (
		<div className='w-[406px] h-[800px] relative'>
			<ExitChip className='absolute top-[16px] right-[16px]' />
			<div className='absolute top-[48px] left-0 right-0 flex justify-between px-[11px]'>
				<ButtonBack
					onClick={() =>
						router.push(
							"/onboarding/step-two"
						)
					}
				/>
				<ButtonForward
					onClick={() =>
						router.push(
							"/onboarding/step-three"
						)
					}
				/>
			</div>
			<main className='h-full flex flex-col px-4 py-[18px]'>
				<SurveyProgress
					currentStep={currentStep}
					totalSteps={totalSteps}
				/>

				<div className='flex flex-col items-center gap-6 mt-8'>
					<h2 className='text-2xl font-semibold text-[#29424D] text-center'>
						How many hours do you spend
						sitting per day?
					</h2>

					<div className='w-full max-w-[300px]'>
						<Verticalslider
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
