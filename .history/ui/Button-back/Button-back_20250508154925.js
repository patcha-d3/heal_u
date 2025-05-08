"use client";

import React from "react";
import styles from "./Button-back.module.css";

export default function ButtonBack({ onClick, className = "" }) {
	return (
		<button
			className={`${styles.backButton} ${className}`}
			onClick={onClick}
			aria-label='Go back'
			type='button'
		>
			<img
				src='/asset/Button-errow.png'
				alt='Back'
				width={52}
				height={40}
				className={styles.arrowImage}
			/>
		</button>
	);
}
