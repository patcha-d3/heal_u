import React, { useState } from "react";
import styles from "./Filter-popup.module.css";

export default function FilterPopup({ onClose }) {
  const [bodyPart, setBodyPart] = useState("All");
  const [progress, setProgress] = useState("All");

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.header}>
          <span className={styles.title}>Filter</span>
          <button className={styles.closeButton} onClick={onClose}>×</button>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>By body part</div>
          <div className={styles.filterGroup}>
            {['All', 'Neck', 'Lower Back'].map((part) => (
              <button
                key={part}
                className={`${styles.filterBtn} ${bodyPart === part ? styles.selected : ''}`}
                onClick={() => setBodyPart(part)}
              >
                {part}
              </button>
            ))}
          </div>
        </div>
        <hr className={styles.divider} />
        <div className={styles.section}>
          <div className={styles.sectionTitle}>By progress</div>
          <div className={styles.filterGroup}>
            {['All', 'To-do', 'Done'].map((prog) => (
              <button
                key={prog}
                className={`${styles.filterBtn} ${progress === prog ? styles.selected : ''}`}
                onClick={() => setProgress(prog)}
              >
                {prog}
              </button>
            ))}
          </div>
        </div>
        <button className={styles.applyBtn} onClick={onClose}>Apply</button>
      </div>
    </div>
  );
}
