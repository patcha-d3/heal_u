import React from "react";
import styles from "./Filter-popup.module.css";

export default function FilterPopup({ onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2>Filter</h2>
        <p>This is your filter popup content.</p>
      </div>
    </div>
  );
} 