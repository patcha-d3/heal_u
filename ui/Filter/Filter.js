import styles from "./Filter.module.css";
import Image from "next/image";

export default function Filter({ className }) {
	return (
		<button className={`${styles.button} ${className || ""}`}>
			<Image
				src="/assets/filter.svg"
				alt="Filter"
				width={18}
				height={18}
			/>
		</button>
	);
}
