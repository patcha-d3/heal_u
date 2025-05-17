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
            content="This shows your current pain level."
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
