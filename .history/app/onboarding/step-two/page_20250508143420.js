"use client";

import React, { useState } from "react";
import ButtonSurvey from "../../../ui/Button-survey/Button-survey";
import Image from "next/image";
import ExitChip from "../../../ui/Exitchip/Exitchip";

export default function RootPage() {
	const [selected, setSelected] = useState(null);
	const currentStep = 4;
	const totalSteps = 8;

	return (
		<div className='w-[406px] h-[800px] bg-white rounded-[48px] px-4 py-[18px] relative'>
			<ExitChip className='absolute top-[16px] right-[16px]' />
			<main className='h-full flex flex-col'>
				{/* Survey Title */}
				<div className='text-[24px] font-inter font-bold text-center my-4'>
					Survey {currentStep}/{totalSteps}
				</div>

				{/* Progress Bar */}
				<div className='flex gap-2 mb-8'>
					{Array.from({ length: totalSteps }).map(
						(_, index) => (
							<div
								key={index}
								className={`w-8 h-3 rounded-full ${
									index <
									currentStep
										? "bg-[#29424D]"
										: "border-2 border-[#29424D]"
								}`}
							></div>
						)
					)}
				</div>

				{/* Image and Button Wrapper */}
				<div className='flex flex-col items-center gap-6 mb-8'>
					<Image
						src='/survey-img.png'
						alt='Survey'
						width={400}
						height={260}
						className='rounded-lg'
					/>

					<div className='grid grid-cols-2 gap-4'>
						<ButtonSurvey
							label='Daily'
							active={
								selected ===
								"Daily"
							}
							onClick={() =>
								setSelected(
									"Daily"
								)
							}
						/>
						<ButtonSurvey
							label='3-4 times a week'
							active={
								selected ===
								"3-4 times a week"
							}
							onClick={() =>
								setSelected(
									"3-4 times a week"
								)
							}
						/>
						<ButtonSurvey
							label={
								<>
									Occasionally
									<br />
									(1-2
									times/week)
								</>
							}
							active={
								selected ===
								"Occasionally (1-2 times/week)"
							}
							onClick={() =>
								setSelected(
									"Occasionally (1-2 times/week)"
								)
							}
						/>
						<ButtonSurvey
							label='Rarely'
							active={
								selected ===
								"Rarely"
							}
							onClick={() =>
								setSelected(
									"Rarely"
								)
							}
						/>
					</div>
				</div>
			</main>
		</div>
	);
}
