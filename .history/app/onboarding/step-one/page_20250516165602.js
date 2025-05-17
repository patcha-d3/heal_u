"use client";

import React from "react";
import Button from "@ui/Button/Button";
import SmallButton from "@ui/Tooltip/Tooltip";
import Skipchip from "@ui/Skipchip/Skipchip";
import { useRouter } from "next/navigation";

export default function StepOnePage() {
	const router = useRouter();

	return (
		<div className='w-[406px] h-[800px] bg-[#FDFBF9] rounded-[48px] px-4 py-[18px] relative bg-[url("/assets/sthetoscope1.png")] bg-no-repeat bg-[right_bottom] bg-[length:336px_382px]'>
			<div className='absolute top-6 left-[21px]'>
				<SmallButton tooltip='Need help?' />
			</div>
			<div className='absolute top-5 right-[22px]'>
				<Skipchip />
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
		</div>
	);
}
