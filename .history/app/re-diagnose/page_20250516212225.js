"use client";

import React from "react";
import Button from "@ui/Button/Button";
import { useRouter } from "next/navigation";

export default function ReDiagnosePage() {
	const router = useRouter();

	return (
		<div
			className='w-[406px] h-[700px] bg-[#FDFBF9] rounded-[48px] px-4 py-[18px] relative'
			style={{
				backgroundImage:
					'url("/assets/sthetoscope 1.png")',
				backgroundRepeat: "no-repeat",
				backgroundPosition: "right bottom",
				backgroundSize: "336px 382px",
			}}
		>
			<main className='h-full flex flex-col'>
				<div className='flex-1'>
					<h1 className='font-roboto text-[40px] leading-[48px] mt-[88px] ml-4 font-bold text-[#2E2E30]'>
						Noticed a Change?
						<div className='mt-5 text-[20px] leading-[28px] font-bold text-[#2E2E30]'>
							Let's take another look
							to make sure <br />
							your recovery plan stays
							right for you.
						</div>
					</h1>
				</div>

				<div className='flex flex-col items-center'>
					<div className='w-full'>
						<Button
							text='Update My Plan'
							onClick={() => {
								router.push(
									"/re-diagnose/step-one"
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
