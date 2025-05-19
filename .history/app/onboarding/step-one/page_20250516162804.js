"use client";

import React from "react";
import Button from "../../ui/Button/Button";
import SmallButton from "../../ui/Tooltip/Tooltip";
import Skipchip from "../../ui/Skipchip/Skipchip";
import { useRouter } from "next/navigation";

export default function StepOnePage() {
	const router = useRouter();

	const handleClick = () => {
		alert("You clicked the Button!");
	};

	return (
		<div className='w-[406px] h-[800px] bg-[#FDFBF9] rounded-[48px] px-4 py-[18px] relative'>
			<div className='absolute top-6 left-[21px]'>
				<SmallButton
					onClick={() => alert("Help info")}
					tooltip='Need help?'
				/>
			</div>
			<div className='absolute top-5 right-[22px]'>
				<Skipchip
					onClick={() => alert("Skipping...")}
				/>
			</div>
			<main className='h-full flex flex-col'>
				<div className='flex-1'>
					<h1 className='font-roboto text-[40px] leading-[48px] mt-[88px] ml-4 font-bold text-[#2E2E30]'>
						Hi, Rachel!
						<div className='mt-5'>
							Tell Us About
							<br />
							<span className='text-[#F27B7B]'>
								Your Pain
							</span>
						</div>
					</h1>
				</div>

				<div className='flex flex-col items-center'>
					<p className='text-[14px] font-normal text-gray-600 mb-2 text-center'>
						*All questions must be answered
						to receive a tailored plan.
					</p>
					<div className='w-full'>
						<Button
							text='Start Diagnosis'
							onClick={() => {
								router.push(
									"/onboarding/step-two"
								);
							}}
							fullWidth={true}
							outlined={false}
						/>
					</div>
				</div>
			</main>
			<img
				src='/assets/sthetoscope 1.png'
				alt='Stethoscope'
				className='absolute bottom-4 right-4 w-[336px] h-[382px]'
			/>
		</div>
	);
}
