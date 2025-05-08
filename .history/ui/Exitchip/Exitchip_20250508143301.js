import styles from "./Exitchip.module.css";

export default function ExitChip({ className }) {
	return (
		<button className={`${styles.button} ${className || ""}`}>
			X
		</button>
	);
}
