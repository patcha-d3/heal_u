"use client";

import React, { useState } from "react";
import ButtonSurvey from "@ui/Button-survey/Button-survey";
import Image from "next/image";
import ExitChip from "@ui/Exitchip/Exitchip";
import SurveyProgress from "@ui/SurveyProgress/SurveyProgress";
import ButtonBack from "@ui/Button-back/Button-back";
import ButtonForward from "@ui/Button-forward/Button-forward";
import { useRouter } from "next/navigation";

export default function ReDiagnoseStepTwo() {
	const [selected, setSelected] = useState(null);
	const currentStep = 3;
	const totalSteps = 5;
	const router = useRouter();

	return (
		<div className='w-[406px] h-[800px] flex flex-col relative'>
			<ExitChip className='absolute top-[16px] right-[16px]' />
			<main className='flex-1 flex flex-col px-4 pt-4 pb-2'>
				<SurveyProgress
					currentStep={currentStep}
					totalSteps={totalSteps}
				/>
				<h2 className='text-2xl font-semibold text-[#29424D] text-center mt-2 mb-2'>
					How active are you on a regular basis?
				</h2>
				<div className='flex flex-col items-center gap-5 mt-2'>
					<Image
						src='/assets/rediagnose-survey35.png'
						alt='Survey-re-diagnose-step-two'
						width={370}
						height={192}
						className='rounded-lg'
					/>
					<div className='grid grid-cols-2 gap-2'>
						<ButtonSurvey
							label='I rarely exercise'
							active={
								selected ===
								"I rarely exercise"
							}
							onClick={() =>
								setSelected(
									"I rarely exercise"
								)
							}
						/>
						<ButtonSurvey
							label='I do light activities like stretching or walking'
							active={
								selected ===
								"I do light activities like stretching or walking"
							}
							onClick={() =>
								setSelected(
									"I do light activities like stretching or walking"
								)
							}
						/>
						<ButtonSurvey
							label={
								<>
									I
									exercise
									2-3
									times a
									week
								</>
							}
							active={
								selected ===
								"I exercise 2-3 times a week"
							}
							onClick={() =>
								setSelected(
									"I exercise 2-3 times a week"
								)
							}
						/>
						<ButtonSurvey
							label='I do high-intensity workouts 4+ times a week'
							active={
								selected ===
								"I do high-intensity workouts 4+ times a week"
							}
							onClick={() =>
								setSelected(
									"I do high-intensity workouts 4+ times a week"
								)
							}
						/>
					</div>
				</div>
			</main>
			<div className='flex justify-between px-[11px] mt-8 mb-4'>
				<ButtonBack onClick={() => router.back()} />
				<ButtonForward
					onClick={() =>
						router.push(
							"/re-diagnose/step-three"
						)
					}
				/>
			</div>
		</div>
	);
}
