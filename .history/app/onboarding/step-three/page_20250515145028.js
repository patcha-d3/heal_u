"use client";

import React from "react";
import Button from "../../../ui/Button/Button";
import { useRouter } from "next/navigation";

export default function StepThreePage() {
	const router = useRouter();

	return (
		<div className='w-[406px] h-[800px] relative'>
			<main className='h-full flex flex-col px-4 py-[18px]'>
				<div className='flex flex-col items-center gap-6 mt-8'>
					<h2
						className='text-3xl font-bold text-center'
						style={{ color: "#2E2E30" }}
					>
						Congratulations, Rachel!
					</h2>
					<div className='w-[90%] max-w-[340px] aspect-square bg-[#F7F4EF] rounded-2xl flex items-center justify-center'>
						<img
							src='/gif/congratulations.gif'
							alt='Congratulations'
							className='w-2/3 h-2/3 object-contain'
						/>
					</div>

					<h3
						className='text-xl font-bold text-center'
						style={{ color: "#2E2E30" }}
					>
						You're All Set!
					</h3>
					<p className='text-base font-normal text-gray-600 text-center max-w-[320px]'>
						Your 14-day recovery journey
						starts now — personalized to
						your needs and focused on
						helping you move better and feel
						less pain.
					</p>
					<Button
						text='View My Plan'
						onClick={() =>
							router.push("/home")
						}
						fullWidth={true}
						className='text-lg font-bold py-4 rounded-2xl'
					/>
				</div>
			</main>
		</div>
	);
}
