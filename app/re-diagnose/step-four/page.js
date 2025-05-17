"use client";

import React from "react";
import Button from "@ui/Button/Button";
import { useRouter } from "next/navigation";

export default function StepThreePage() {
	const router = useRouter();

	return (
		<div className='w-[406px] h-[800px] relative'>
			<main className='h-full flex flex-col px-4 py-[18px]'>
				<div className='flex flex-col items-center gap-6 mt-8'>
					<h2
						className='text-3xl font-bold text-center'
						style={{ color: "#FFFFFF" }}
					>
						New Plan Just for You
					</h2>
					<div className='w-[440px] h-[600px] bg-[#FDFBF9] rounded-t-[48px] px-4 py-[18px]  relative flex flex-col items-start mx-auto'>
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
                    Your tailored plan has been refreshed to
                    better match your current needs.
                    View it now to continue your progress.
					</p>
					<Button
						text='View My New Plan'
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
