"use client";

import { useRouter } from "next/navigation";

export default function LandingPage() {
	const router = useRouter();
	return (
		<div className='min-h-screen w-full flex flex-col items-center justify-center bg-[#F8F3EC]'>
			<h1 className='text-3xl font-bold text-[#29424D] mb-8'>
				Welcome to Heal U
			</h1>
			<button
				className='px-8 py-3 bg-[#29424D] text-white rounded-2xl text-lg font-bold hover:bg-[#1e2e38] transition'
				onClick={() =>
					router.push("/onboarding/step-one")
				}
			>
				Get Started
			</button>
		</div>
	);
}
