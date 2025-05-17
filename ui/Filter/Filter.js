import styles from "./Filter.module.css";
import Image from "next/image";

export default function Filter({ onClick, className }) {
  return (
    <button className={`${styles.button} ${className || ""}`} onClick={onClick}>
      <Image
        src="/assets/filter.svg"
        alt="Filter"
        width={18}
        height={18}
      />
    </button>
  );
}
