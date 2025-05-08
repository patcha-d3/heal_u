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
	const classNames = [
		styles.button,
		outlined ? styles.outlined : styles.filled,
		fullWidth && styles.fullWidth,
		disabled && styles.disabled,
	]
		.filter(Boolean)
		.join(" ");

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={classNames}
		>
			<span className={styles.text}>{text}</span>
			{icon && <span className={styles.icon}>{icon}</span>}
		</button>
	);
};

export default Button;
