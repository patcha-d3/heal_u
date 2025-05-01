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

			<div className='flex justify-center pb-12'>
				<Button
					text='Button'
					onClick={handleClick}
					fullWidth={false}
				/>
			</div>
		</main>
	);
}
