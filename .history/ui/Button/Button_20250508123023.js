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
	const buttonClass = outlined
		? styles.outlinedButton
		: styles.filledButton;
	const widthClass = fullWidth ? styles.fullWidth : "";
	const disabledClass = disabled ? styles.disabled : "";

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`${buttonClass} ${widthClass} ${disabledClass}`}
		>
			<span className={styles.text}>{text}</span>
		</button>
	);
}
