"use client";

import React, { useState } from "react";
import styles from "./TopNav.module.css";

export default function TopNav() {
	const [showSearch, setShowSearch] = useState(false);
	const [hasNotification, setHasNotification] = useState(false);

	return (
		<header
			className={styles.topBar}
			style={{
				borderBottom:
					"1px solid rgba(255, 255, 255, 0.5)",
			}}
		>
			<a href='/' className={styles.logoContainer}>
				<img
					src='/logo.png'
					alt='Logo'
					className={styles.logoImg}
				/>
			</a>

			<div className={styles.iconContainer}>
				<div className={styles.searchWrapper}>
					{showSearch && (
						<div
							className={
								styles.searchBox
							}
						>
							<input
								type='text'
								className={
									styles.searchInput
								}
								placeholder='Search...'
								autoFocus
							/>
						</div>
					)}
					<img
						src='/search.png'
						alt='Search'
						className={`${styles.iconImg} ${
							showSearch
								? styles.dark
								: ""
						}`}
						onClick={() =>
							setShowSearch(
								!showSearch
							)
						}
					/>
				</div>

				<div className={styles.avatarContainer}>
					<img
						src={
							hasNotification
								? "/avatar-notification.png"
								: "/avatar.png"
						}
						alt='Avatar'
						className={styles.avatarImg}
					/>
				</div>
			</div>
		</header>
	);
}
