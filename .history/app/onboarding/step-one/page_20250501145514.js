"use client";

import React from "react";
import Button from "../../../ui/Button/Button";

export default function StepOnePage() {
	const handleClick = () => {
		alert("You clicked the Button!");
	};

	return (
		<main>
			<h1>Onboarding Step 1</h1>

			<div>
				<Button text='Button' onClick={handleClick} />
			</div>
		</main>
	);
}
