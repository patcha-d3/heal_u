"use client";

import React, { useEffect } from "react";
import Button from "@ui/Button/Button";
import { useRouter } from "next/navigation";

export default function StepThreePage() {
	const router = useRouter();

	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "";
		};
	}, []);

	return (
		<div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#355057] overflow-hidden">
			<h1 className="text-3xl font-bold text-center mb-4 mt-8" style={{ color: "#fff" }}>
				New Plan<br />Just for You
			</h1>
			<div className="w-[440px] h-[600px] bg-[#FDFBF9] rounded-[48px] px-4 py-[18px] flex flex-col items-center justify-evenly">
				<img
					src='/gif/congratulations.gif'
					alt='Congratulations'
					className='w-[60%] h-[60%] object-contain mb-4'
				/>

				<p className='text-base font-normal text-gray-600 text-center max-w-[320px] mb-4'>
					Your tailored plan has been refreshed to better match your current needs.
					View it now to continue your progress.
				</p>
				<Button
					text='View My New Plan'
					onClick={() => router.push("/home")}
					fullWidth={true}
					className='text-lg font-bold py-4 rounded-2xl'
				/>
			</div>
		</div>
	);
}
