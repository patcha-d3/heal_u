"use client";

import React from "react";
import Image from "next/image";

export default function SettingsCard({
	icon,
	text,
	hasSwitch = true,
	isEnabled = false,
	onToggle,
}) {
	return (
		<div className='flex items-center justify-between w-[358px] h-[56px] px-4 bg-white rounded-lg'>
			<div className='flex items-center gap-3'>
				<Image
					src={icon}
					alt={text}
					width={24}
					height={24}
				/>
				<span className='text-[#1A1A1A] text-base'>
					{text}
				</span>
			</div>
			{hasSwitch && (
				<button
					onClick={onToggle}
					className={`w-11 h-6 rounded-full transition-colors ${
						isEnabled
							? "bg-[#4CAF50]"
							: "bg-[#E0E0E0]"
					}`}
				>
					<div
						className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${
							isEnabled
								? "translate-x-5"
								: "translate-x-0.5"
						}`}
					/>
				</button>
			)}
		</div>
	);
}
