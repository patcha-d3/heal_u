"use client";

import React, { useState, useEffect } from "react";
import styles from "./VerticalSlider.module.css";

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
		const percentage = Math.max(0, Math.min(1, y / rect.height));
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

	const markerPosition = `${(value / 12) * 100}%`;

	return (
		<div className={styles.sliderContainer}>
			<div
				id='vertical-slider'
				className={styles.sliderTrack}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
			>
				<div
					className={styles.sliderThumb}
					style={{
						transform: `translate(-50%, ${markerPosition})`,
					}}
				/>
			</div>
			<div className={styles.marks}>
				<div className={styles.mark}>
					<span className={styles.markLabel}>
						12h
					</span>
				</div>
				<div className={styles.mark}>
					<span className={styles.markLabel}>
						6h
					</span>
				</div>
				<div className={styles.mark}>
					<span className={styles.markLabel}>
						0h
					</span>
				</div>
			</div>
		</div>
	);
};

export default Verticalslider;
