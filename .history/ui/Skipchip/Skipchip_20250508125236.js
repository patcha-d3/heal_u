import React from "react";
import styles from "./Skipchip.module.css";

const Skipchip = ({ onClick }) => {
	return (
		<button className={styles.skipchip} onClick={onClick}>
			<span className={styles.text}>Skip</span>
		</button>
	);
};

export default Skipchip;
