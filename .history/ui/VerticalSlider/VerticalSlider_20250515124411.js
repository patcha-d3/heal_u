"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./Verticalslider.module.css";

const marks = [
	{ value: 0, label: "0%" },
	{ value: 1, label: "25%" },
	{ value: 2, label: "50%" },
	{ value: 3, label: "75%" },
	{ value: 4, label: "100%" },
];

export default function Verticalslider({ onChange, value }) {
	const [isDragging, setIsDragging] = useState(false);
	const sliderRef = useRef(null);

	useEffect(() => {
		return () => {
			// Cleanup event listeners in case component unmounts while dragging
			window.removeEventListener(
				"mousemove",
				handleMouseMove
			);
			window.removeEventListener("mouseup", handleMouseUp);
		};
	}, []);

	const handleMouseDown = (e) => {
		e.preventDefault(); // prevent text selection
		setIsDragging(true);
		handleDrag(e);
		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseup", handleMouseUp);
	};

	const handleMouseMove = (e) => {
		if (isDragging) {
			handleDrag(e);
		}
	};

	const handleMouseUp = () => {
		setIsDragging(false);
		window.removeEventListener("mousemove", handleMouseMove);
		window.removeEventListener("mouseup", handleMouseUp);
	};

	const handleDrag = (e) => {
		if (!sliderRef.current) return;

		const rect = sliderRef.current.getBoundingClientRect();
		let y = e.clientY - rect.top;
		y = Math.min(Math.max(y, 0), rect.height); // clamp between 0 and height
		const percentage = 1 - y / rect.height;
		const val = Math.round(percentage * (marks.length - 1));
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
			onTouchStart={(e) => handleDrag(e.touches[0])}
			onTouchMove={(e) => {
				handleDrag(e.touches[0]);
			}}
			onTouchEnd={handleMouseUp}
			style={{ touchAction: "none" }} // prevent scrolling while dragging on touch devices
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
