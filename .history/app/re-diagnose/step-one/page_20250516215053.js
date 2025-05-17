"use client";

import React, { useState } from "react";
import ButtonSurvey from "@ui/Button-survey/Button-survey";
import Image from "next/image";
import ExitChip from "@ui/Exitchip/Exitchip";
import SurveyProgress from "@ui/SurveyProgress/SurveyProgress";
import ButtonBack from "@ui/Button-back/Button-back";
import ButtonForward from "@ui/Button-forward/Button-forward";
import { useRouter } from "next/navigation";

export default function ReDiagnoseStepOne() {
	const [selected, setSelected] = useState(null);
	const currentStep = 2;
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
				<h2 className='text-2xl font-semibold text-[#29424D] text-center mt-4 mb-4'>
					When does your pain get worse?
				</h2>
				<div className='flex flex-col items-center gap-3 mt-2'>
					<Image
						src='/assets/rediagnose-survey2.png'
						alt='Survey'
						width={370}
						height={180}
						className='rounded-lg'
					/>
					<div className='flex flex-col gap-2 w-full items-center mt-2'>
						{[
							"Morning (after waking up)",
							"During physical activity",
							"After sitting for long periods",
							"In cold or damp weather",
							"During stress or anxiety",
						].map((label, idx) => (
							<button
								key={label}
								className={`w-[396px] h-[51px] rounded-[20px]  text-lg font-bold transition-colors duration-100 flex items-center justify-center ${
									selected ===
									label
										? "bg-[#29424D] text-white border-[#29424D]"
										: "bg-[#CFC4F4] text-[#29424D] border-[#29424D]"
								}`}
								onClick={() =>
									setSelected(
										label
									)
								}
							>
								{label}
							</button>
						))}
					</div>
				</div>
			</main>
			<div className='flex justify-between px-[11px] mt-8 mb-4'>
				<ButtonBack onClick={() => router.back()} />
				<ButtonForward
					onClick={() =>
						router.push(
							"/re-diagnose/step-two"
						)
					}
				/>
			</div>
		</div>
	);
}
