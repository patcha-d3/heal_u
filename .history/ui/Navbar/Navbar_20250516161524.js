"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar({ isHome }) {
	const router = useRouter();

	return (
		<div className='w-full h-[56px] flex items-center justify-between px-4'>
			{isHome ? (
				<div className='flex items-center gap-2'>
					<Image
						src='/icons/logo.svg'
						alt='Logo'
						width={32}
						height={32}
					/>
					<span className='text-white text-lg font-bold'>
						Heal U
					</span>
				</div>
			) : (
				<button onClick={() => router.back()}>
					<Image
						src='/icons/back.svg'
						alt='Back'
						width={24}
						height={24}
					/>
				</button>
			)}
			<button onClick={() => router.push("/settings")}>
				<Image
					src='/icons/settings.svg'
					alt='Settings'
					width={24}
					height={24}
				/>
			</button>
		</div>
	);
}
