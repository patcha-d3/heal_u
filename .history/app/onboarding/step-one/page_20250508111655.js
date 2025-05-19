"use client";

import React from "react";
import Button from "../../../ui/Button/Button";

export default function StepOnePage() {
	const handleClick = () => {
		alert("You clicked the Button!");
	};

	return (
		<div className='w-[406px] h-[800px] bg-[#FDFBF9] rounded-[48px] px-4 py-[18px]'>
			<main className='h-full flex flex-col'>
				<div className='flex-1'>
					<h1>Onboarding Step 1</h1>
				</div>

				<div className='flex flex-col items-center'>
					<p className='text-[14px] font-normal text-gray-600 mb-2 text-center'>
						*All questions must be answered
						to receive a tailored plan.
					</p>
					<Button
						text='Start Diagnosis'
						onClick={handleClick}
						fullWidth={false}
					/>
				</div>
			</main>
		</div>
	);
}
