"use client";
import React, { useState } from "react";
import styles from "./Painlevelwidget.module.css";

export default function Painlevelwidget() {
  return (
    <div className={styles.painLevelWidget}>
      <h2 className={styles.todayPainLevel}>Today's Pain Level</h2>
    </div>
  );
}