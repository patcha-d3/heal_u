"use client";

import React from "react";
import Button from "../ui/Button";

export default function HomePage() {
	const handleClick = () => {
		alert("You clicked the Butto!");
	};

	return (
		<main style={{ padding: "2rem" }}>
			<h1>Welcome to the Home Page</h1>

			<Button
				text='Click Me!'
				onClick={handleClick}
				icon={<FaSmile />}
				fullWidth={false}
				outlined={true}
			/>

			<div style={{ marginTop: "2rem" }}>
				<Button
					text='Disabled Button'
					onClick={() => {}}
					disabled={true}
				/>
			</div>
		</main>
	);
}
