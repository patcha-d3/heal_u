"use client";

import React, { useState, useEffect } from "react";

const Verticalslider = ({ value, onChange }) => {
	const [isDragging, setIsDragging] = useState(false);
	const [sliderHeight, setSliderHeight] = useState(0);
	const [sliderTop, setSliderTop] = useState(0);

	const handleMouseDown = (e) => {
		setIsDragging(true);
		updateValue(e);
	};

	const handleMouseMove = (e) => {
		if (isDragging) {
			updateValue(e);
		}
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const updateValue = (e) => {
		const slider = e.currentTarget;
		const rect = slider.getBoundingClientRect();
		const y = e.clientY - rect.top;
		const percentage = Math.max(
			0,
			Math.min(1, 1 - y / rect.height)
		);
		const newValue = Math.round(percentage * 12); // 0-12 hours
		onChange(newValue);
	};

	useEffect(() => {
		const handleGlobalMouseUp = () => {
			setIsDragging(false);
		};

		document.addEventListener("mouseup", handleGlobalMouseUp);
		return () => {
			document.removeEventListener(
				"mouseup",
				handleGlobalMouseUp
			);
		};
	}, []);

	useEffect(() => {
		const slider = document.getElementById("vertical-slider");
		if (slider) {
			setSliderHeight(slider.offsetHeight);
			setSliderTop(slider.getBoundingClientRect().top);
		}
	}, []);

	const markerPosition = `${(1 - value / 12) * 100}%`;

	return (
		<div className='relative h-[300px] w-full'>
			<div
				id='vertical-slider'
				className='relative h-full w-2 bg-gray-200 rounded-full cursor-pointer'
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
			>
				<div
					className='absolute w-6 h-6 bg-[#F27B7B] rounded-full -left-2 transform -translate-y-1/2 cursor-pointer'
					style={{ top: markerPosition }}
				/>
			</div>
			<div className='absolute -left-8 top-0 h-full flex flex-col justify-between text-sm text-gray-600'>
				<span>12h</span>
				<span>6h</span>
				<span>0h</span>
			</div>
		</div>
	);
};

export default Verticalslider;
