"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Bottomnav.module.css";

// Import SVGs as React components
import HomeIcon from "../../public/icons/home.svg";
import RediagnoseIcon from "../../public/icons/rediagnose.svg";
import ProgressIcon from "../../public/icons/progress.svg";
import BlogIcon from "../../public/icons/blog.svg";
import SettingsIcon from "../../public/icons/settings.svg";

const menuItems = [
	{ label: "Home", icon: HomeIcon, path: "/home" },
	{ label: "Re-Diagnose", icon: RediagnoseIcon, path: "/re-diagnose" },
	{ label: "Progress", icon: ProgressIcon, path: "/progress" },
	{ label: "Blog", icon: BlogIcon, path: "/blog" },
	{ label: "Settings", icon: SettingsIcon, path: "/settings" },
];

export default function MobileNavbar() {
	const pathname = usePathname();

	return (
		<nav className={styles.navbar}>
			{menuItems.map((item, index) => {
				const isActive = pathname === item.path;
				const IconComponent = item.icon;
				return (
					<Link
						href={item.path}
						key={index}
						className={styles.link}
					>
						<div className={styles.button}>
							<IconComponent
								className={`${
									styles.icon
								} ${
									isActive
										? styles.iconActive
										: ""
								}`}
								aria-label={
									item.label
								}
							/>
							<span
								className={`${
									styles.label
								} ${
									isActive
										? styles.labelActive
										: styles.labelInactive
								}`}
							>
								{item.label}
							</span>
						</div>
					</Link>
				);
			})}
		</nav>
	);
}
