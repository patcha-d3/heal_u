"use client";

import React, { useState, useEffect } from "react";
import "./Verticalslider.css";

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
		<div className='vertical-slider-container'>
			<div
				id='vertical-slider'
				className='vertical-slider-track'
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
			>
				<div
					className='vertical-slider-marker'
					style={{ top: markerPosition }}
				/>
			</div>
			<div className='vertical-slider-labels'>
				<span>12h</span>
				<span>6h</span>
				<span>0h</span>
			</div>
		</div>
	);
};

export default Verticalslider;
