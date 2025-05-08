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
		styles.button,
		outlined
			? styles["button--outlined"]
			: styles["button--filled"],
		fullWidth && styles["button--fullWidth"],
		disabled && styles["button--disabled"],
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
			<span className={styles["button__text"]}>{text}</span>
		</button>
	);
}
