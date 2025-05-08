import React from "react";
import styles from "./Button-back.module.css";

export default function ButtonBack({ onClick, className = "" }) {
  return (
    <button className={`${styles.backButton} ${className}`} onClick={onClick} aria-label="Go back">
      {/* SVG for left arrow */}
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="19" stroke="#222" strokeWidth="2"/>
        <path d="M23 28L15 20L23 12" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}