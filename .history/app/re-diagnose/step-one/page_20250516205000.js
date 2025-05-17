"use client";

import { useRouter } from "next/navigation";
import Button from "@ui/Button/Button";

export default function ReDiagnoseStepOne() {
	const router = useRouter();
	return (
		<div className='min-h-screen w-full flex flex-col items-center justify-center bg-[#F8F3EC] px-4'>
			<h1 className='text-3xl font-bold text-[#29424D] mb-6'>
				Noticed a Change?
			</h1>
			<p className='text-center text-[#29424D] font-bold text-[20px] leading-[28px] mb-8 max-w-xs'>
				Let’s take another look to make sure <br />
				your recovery plan stays right for you.
			</p>
			<Button
				text='Update My Plan'
				fullWidth={true}
				onClick={() => router.push("/re-diagnose")}
			/>
		</div>
	);
}
