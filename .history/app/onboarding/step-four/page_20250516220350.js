"use client";

import React from "react";
import Image from "next/image";

export default function StepFour() {
	return (
		<div className={styles.pageBg}>
			<div className={styles.header}>
				<h1 className={styles.title}>
					New Plan
					<br />
					Just for You
				</h1>
			</div>
			<div className={styles.card}>
				<div className={styles.imageWrapper}>
					<Image
						src='/assets/your-character.svg' // Update with your actual image path
						alt='Character'
						width={180}
						height={180}
						priority
					/>
				</div>
				<div className={styles.description}>
					Your tailored plan has been refreshed to
					better match your current needs.
					<br />
					View it now to continue your progress.
				</div>
				<button className={styles.ctaBtn}>
					View My New Plan
				</button>
			</div>
			{/* Your bottom nav goes here */}
		</div>
	);
}
