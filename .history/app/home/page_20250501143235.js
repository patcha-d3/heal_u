"use client";

import React from "react";
import Button from "../../ui/Button/Button";

export default function HomePage() {
	const handleClick = () => {
		alert("You clicked the Button!");
	};

	return (
		<main>
			<h1>Welcome to the Home Page</h1>

			<Button
				text='Click Me!'
				onClick={handleClick}
				icon={<FaSmile />}
				fullWidth={false}
				outlined={true}
			/>

			<div>
				<Button
					text='Disabled Button'
					onClick={() => {}}
					disabled={true}
				/>
			</div>
		</main>
	);
}
