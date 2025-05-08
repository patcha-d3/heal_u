import React from "react";
import styles from "./Button.module.css";

const Button = ({
	text,
	onClick,
	icon,
	fullWidth = false,
	outlined = false,
	disabled = false,
	type = "button",
}) => {
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
			{icon && <span className={styles.icon}>{icon}</span>}
		</button>
	);
};

export default Button;
