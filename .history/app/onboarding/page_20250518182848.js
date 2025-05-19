"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function OnboardingPage() {
	const router = useRouter();

	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
			<h1 className='text-3xl font-bold mb-4'>
				Welcome to Onboarding
			</h1>
			<p className='mb-4'>
				This is the onboarding page. Navigate to the
				next step to continue.
			</p>
			<button
				onClick={() =>
					router.push("/onboarding/step-one")
				}
				className='bg-blue-500 text-white px-4 py-2 rounded'
			>
				Go to Step One
			</button>
		</div>
	);
}
