"use client";
import React from "react";
import styles from "./Painlevelwidget.module.css";

export default function Painlevelwidget() {
  return (
    <div className={styles.painLevelWidget}>
      <div className={styles.painLevelCol}>
        {/* Left column content here */}
      </div>
      <div className={styles.painLevelCol}>
        {/* Right column content here */}
      </div>
    </div>
  );
}