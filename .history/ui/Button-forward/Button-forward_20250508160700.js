"use client";

import React from "react";
import { IoArrowForward } from "react-icons/io5";
import styles from "./Button-forward.module.css";

export default function ButtonForward({ onClick, className = "" }) {
	return (
		<button
			className={`${styles.forwardButton} ${className}`}
			onClick={onClick}
			aria-label='Go forward'
			type='button'
		>
			<IoArrowForward className={styles.arrowIcon} />
		</button>
	);
}
