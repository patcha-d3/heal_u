"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./Verticalslider.module.css";

export default function Verticalslider({ onChange, value }) {
	const [isDragging, setIsDragging] = useState(false);
	const sliderRef = useRef(null);
	const [sliderHeight, setSliderHeight] = useState(0);
	const [sliderTop, setSliderTop] = useState(0);

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
		const val = Math.round(percentage * (marks.length - 1)); // ✅ Now marks is accessible
		onChange(val);
	};

	const getPosition = (val) => {
		const steps = marks.length - 1;
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
			</div>
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
