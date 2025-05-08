"use client";

import React from "react";
import Button from "../../../ui/Button/Button";

export default function StepOnePage() {
	const handleClick = () => {
		alert("You clicked the Button!");
	};

	return (
		<main className='h-full flex flex-col'>
			<div className='flex-1'>
				<h1>Onboarding Step 1</h1>
			</div>

			<div className='flex flex-col items-center pb-12'>
				<p className='text-sm text-gray-600 mb-2 text-center'>
					*All questions must be answered to
					receive a tailored plan.
				</p>
				<Button
					text='Start Diagnosis'
					onClick={handleClick}
					fullWidth={false}
				/>
			</div>
		</main>
	);
}
