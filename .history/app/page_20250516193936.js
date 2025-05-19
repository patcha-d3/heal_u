"use client";

import { useRouter } from "next/navigation";
import Button from "@ui/Button/Button";

export default function LandingPage() {
	const router = useRouter();
	return (
		<div className='min-h-screen w-full flex flex-col items-center justify-center bg-[#F8F3EC]'>
			<h1 className='text-3xl font-bold text-[#29424D] mb-4'>
				Welcome to Heal U
			</h1>
			<p className='text-center text-[#29424D] text-lg font-medium mb-8 max-w-xs'>
				Personalized pain management
				<br />
				Improve your posture and reduce discomfort
				<br />
				with targeted exercise plans.
				<br />
				Let's get you onboard!
			</p>
			<Button
				text='Get Started'
				fullWidth={false}
				onClick={() =>
					router.push("/onboarding/step-one")
				}
				className='py-3 w-48'
			/>
		</div>
	);
}
