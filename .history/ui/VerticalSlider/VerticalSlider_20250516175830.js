"use client";

import React, { useState, useEffect } from "react";

const Verticalslider = ({ value, onChange }) => {
	const [isDragging, setIsDragging] = useState(false);
	const TRACK_HEIGHT = 400; // Fixed height in pixels
	const THUMB_HEIGHT = 24; // Height of the thumb in pixels

	const handleMouseDown = (e) => {
		e.preventDefault();
		setIsDragging(true);
		updateValue(e);
	};

	const handleMouseMove = (e) => {
		if (!isDragging) return;
		e.preventDefault();
		updateValue(e);
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const updateValue = (e) => {
		const slider = e.currentTarget;
		const rect = slider.getBoundingClientRect();
		const y = e.clientY - rect.top;
		// Calculate position relative to track height, accounting for thumb height
		const percentage = Math.max(
			0,
			Math.min(1, y / (TRACK_HEIGHT - THUMB_HEIGHT))
		);
		const newValue = Math.round(percentage * 12); // 0-12 hours
		onChange(newValue);
	};

	useEffect(() => {
		const handleGlobalMouseUp = () => {
			setIsDragging(false);
		};

		const handleGlobalMouseMove = (e) => {
			if (!isDragging) return;
			const slider =
				document.getElementById("vertical-slider");
			if (slider) {
				const rect = slider.getBoundingClientRect();
				const y = e.clientY - rect.top;
				const percentage = Math.max(
					0,
					Math.min(
						1,
						y /
							(TRACK_HEIGHT -
								THUMB_HEIGHT)
					)
				);
				const newValue = Math.round(percentage * 12);
				onChange(newValue);
			}
		};

		document.addEventListener("mouseup", handleGlobalMouseUp);
		document.addEventListener("mousemove", handleGlobalMouseMove);
		return () => {
			document.removeEventListener(
				"mouseup",
				handleGlobalMouseUp
			);
			document.removeEventListener(
				"mousemove",
				handleGlobalMouseMove
			);
		};
	}, [isDragging, onChange]);

	// Calculate position in pixels, accounting for thumb height
	const thumbPosition = (value / 12) * (TRACK_HEIGHT - THUMB_HEIGHT);

	return (
		<div className='relative h-[485px] w-full flex items-center justify-center'>
			<div
				id='vertical-slider'
				className='relative w-8 h-[400px] bg-transparent border-3 border-[#29424d] rounded-2xl overflow-hidden'
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
			>
				<div
					className='absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#29424d] rounded-full cursor-grab transition-all duration-100 ease-in-out'
					style={{ top: `${thumbPosition}px` }}
					onMouseDown={handleMouseDown}
				/>
			</div>
			<div className='absolute right-[-24px] h-[400px] flex flex-col justify-between'>
				<div className='flex items-center'>
					<span className='font-roboto text-xl font-bold text-[#29424d]'>
						12h
					</span>
				</div>
				<div className='flex items-center'>
					<span className='font-roboto text-xl font-bold text-[#29424d]'>
						6h
					</span>
				</div>
				<div className='flex items-center'>
					<span className='font-roboto text-xl font-bold text-[#29424d]'>
						0h
					</span>
				</div>
			</div>
		</div>
	);
};

export default Verticalslider;
