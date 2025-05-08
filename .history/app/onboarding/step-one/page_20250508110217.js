"use client";

import React from "react";
import Button from "../../../ui/Button/Button";

export default function StepOnePage() {
	const handleClick = () => {
		alert("You clicked the Button!");
	};

	return (
		<div className='w-[406px] h-[800px] bg-[#29424D] mx-4 mb-4'>
			<main className='h-full flex flex-col'>
				<div className='flex-1'>
					<h1 className='text-white'>
						Onboarding Step 1
					</h1>
				</div>

				<div className='flex flex-col items-center mb-4'>
					<p className='text-[14px] font-normal text-gray-300 mb-2 text-center'>
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
