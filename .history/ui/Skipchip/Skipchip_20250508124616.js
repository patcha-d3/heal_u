import React from "react";
import styles from "./SkipChip.module.css";

export default function SkipChip({ onClick }) {
	return (
		<button className={styles.skipChip} onClick={onClick}>
			<span className={styles.text}>Skip</span>
		</button>
	);
}
