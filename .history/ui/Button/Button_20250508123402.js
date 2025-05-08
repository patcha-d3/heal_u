import React from "react";
import styles from "./Button.module.css";

export default function Button({
	text,
	onClick,
	fullWidth = false,
	outlined = false,
	disabled = false,
	type = "button",
}) {
	const buttonClass = [
		styles["healu-button"],
		outlined
			? styles["healu-button--outlined"]
			: styles["healu-button--filled"],
		fullWidth && styles["healu-button--fullWidth"],
		disabled && styles["healu-button--disabled"],
	]
		.filter(Boolean)
		.join(" ");

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={buttonClass}
		>
			<span className={styles["healu-button__text"]}>
				{text}
			</span>
		</button>
	);
}
