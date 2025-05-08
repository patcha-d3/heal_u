"use client";

import React from "react";
import { IoArrowBack } from "react-icons/io5";
import styles from "./Button-back.module.css";

export default function ButtonBack({ onClick, className = "" }) {
	return (
		<button
			className={`${styles.backButton} ${className}`}
			onClick={onClick}
			aria-label='Go back'
			type='button'
		>
			<IoArrowBack className={styles.arrowIcon} />
		</button>
	);
}
