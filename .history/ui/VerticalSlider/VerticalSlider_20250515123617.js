"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./Verticalslider.module.css";

export default function Verticalslider({ onChange, value }) {
	const [isDragging, setIsDragging] = useState(false);
	const sliderRef = useRef(null);
	const [sliderHeight, setSliderHeight] = useState(0);
	const [sliderTop, setSliderTop] = useState(0);

	const marks = [
		{ value: 0, label: "0-2 hours" },
		{ value: 1, label: "3-5 hours" },
		{ value: 2, label: "6-8 hours" },
		{ value: 3, label: "9+ hours" },
	];

	useEffect(() => {
		if (sliderRef.current) {
			const height = sliderRef.current.offsetHeight;
			setSliderHeight(height);
			setSliderTop(
				sliderRef.current.getBoundingClientRect().top
			);
		}
	}, []);

	const handleMouseDown = (e) => {
		setIsDragging(true);
		handleDrag(e);
	};

	const handleMouseMove = (e) => {
		if (isDragging) {
			handleDrag(e);
		}
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const handleDrag = (e) => {
		if (!sliderRef.current) return;

		const rect = sliderRef.current.getBoundingClientRect();
		const y = e.clientY - rect.top;
		const percentage = Math.max(
			0,
			Math.min(1, 1 - y / rect.height)
		);
		const value = Math.round(percentage * 3);

		onChange(value);
	};

	const getPosition = (val) => {
        const steps = marks.length - 1; // 3 for 4 values
        const position = (val / steps) * 100;
        return `${position}%`;
    };

	return (
		<div
			ref={sliderRef}
			className={styles.sliderContainer}
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
			onMouseLeave={handleMouseUp}
		>
			<div className={styles.sliderTrack}>
            <div
	className={styles.sliderFill}
	style={{ height: getPosition(value) }}
/>
<div
	className={styles.sliderThumb}
	style={{ bottom: getPosition(value) }}
/>
			<div className={styles.marks}>
				{marks.map((mark) => (
					<div
						key={mark.value}
						className={`${styles.mark} ${
							value === mark.value
								? styles.activeMark
								: ""
						}`}
					>
						<span
							className={
								styles.markLabel
							}
						>
							{mark.label}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
