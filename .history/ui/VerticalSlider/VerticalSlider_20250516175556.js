"use client";

import React, { useState, useEffect } from "react";

const Verticalslider = ({ value, onChange }) => {
	const [isDragging, setIsDragging] = useState(false);

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
		const percentage = Math.max(0, Math.min(1, y / rect.height));
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
					Math.min(1, y / rect.height)
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

	const markerPosition = `${(value / 12) * 100}%`;

	return (
		<div className='relative h-[485px] w-full flex items-center justify-center'>
			<div
				id='vertical-slider'
				className='relative w-8 h-[400px] bg-transparent border-3 border-[#29424d] rounded-2xl'
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
			>
				<div
					className='absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#29424d] rounded-full cursor-grab transition-all duration-100 ease-in-out'
					style={{ top: markerPosition }}
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
