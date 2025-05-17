"use client";
import React from "react";
import Image from "next/image";
import styles from "./Painlevelwidget.module.css";
import Tooltip from "../../ui/Tooltip/Tooltip";

export default function Painlevelwidget() {
  const handleTooltipClick = () => {
    alert("Tooltip clicked!");
  };

  return (
    <div className={styles.painLevelWidget}>
      <div className={styles.painLevelColLeft}>
        <Image
          src="/assets/pain_icon.svg"
          alt="Pain Icon"
          width={80}
          height={80}
        />
      </div>
      <div className={styles.painLevelColRight}>
        <div className={styles.painLevelTitleRow}>
          <span className={styles.painLevelTitle}>Today's Pain Level</span>
          <Tooltip
  content={
    <div style={{
      minWidth: 320,
      borderRadius: 20,
      background: "#fff",
      boxShadow: "0 4px 16px 0 rgba(0,0,0,0.08)",
      padding: 32,
      position: "relative",
      margin: "24px auto"
    }}>
      <div style={{ fontWeight: 700, fontSize: 28, color: "#263238", marginBottom: 24 }}>
        Pain Level Scale
      </div>
      <div style={{ fontSize: 22, fontWeight: 500, marginBottom: 8, color: "#2E7D32" }}>
        1 – 3 : Mild
      </div>
      <div style={{ fontSize: 22, fontWeight: 500, marginBottom: 8, color: "#E57373" }}>
        4 – 6 : Moderate
      </div>
      <div style={{ fontSize: 22, fontWeight: 500, color: "#C62828" }}>
        7 – 10 : Severe
      </div>
    </div>
  }
  onClick={handleTooltipClick}
/>

        </div>
        <div>
          <span>Neck: <span style={{ color: "#3CB371" }}>3</span></span>
        </div>
        <div>
          <span>Lower Back: <span style={{ color: "#E74C3C" }}>5</span></span>
        </div>
      </div>
    </div>
  );
}
