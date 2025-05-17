"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "../ui/Button/Button";

export default function HomePage() {
	const accordionItems = [
		{
			title: "Neck",
			subitems: [
				{
					day: 1,
					label: "Neck Rotations",
					status: "done",
				},
				{
					day: 2,
					label: "Neck Stretch",
					status: "active",
				},
				{
					day: 3,
					label: "Side-to-Side Neck Stretch",
					status: "pending",
				},
			],
		},
		{
			title: "Lower Back",
			subitems: [
				{
					day: 1,
					label: "Pelvic Tilt",
					status: "done",
				},
				{
					day: 2,
					label: "Knee-to-Chest Stretch",
					status: "pending",
				},
				{
					day: 3,
					label: "Bridge Exercise",
					status: "pending",
				},
			],
		},
	];

	return (
		<main className='flex min-h-screen flex-col items-center justify-center p-4'>
			<h1 className='text-4xl font-bold mb-8'>
				Welcome to Heal U
			</h1>

			<Link href='/home'>
				<Button
					text='Go to Home Page'
					onClick={() => {}}
					fullWidth={false}
					outlined={true}
				/>
			</Link>
		</main>
	);
}
