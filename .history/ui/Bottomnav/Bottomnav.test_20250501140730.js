import React from "react";
import MobileNavbar from "./Bottomnav";
import styles from "./Bottomnav.module.css";

export default function BottomnavTest() {
  return (
    <div className={styles.testContainer}>
      <div className={styles.testContent}>
        <h1>Bottom Navigation Test</h1>
        <div className={styles.testSection}>
          <h2>Default State</h2>
          <p>This shows the bottom navigation in its default state</p>
          <div className={styles.testFrame}>
            <MobileNavbar />
          </div>
        </div>

        <div className={styles.testSection}>
          <h2>With Content</h2>
          <p>Scroll to see how it behaves with content</p>
          <div className={styles.testFrame}>
            <div className={styles.scrollContent}>
              {Array.from({ length: 20 }).map((_, i) => (
                <p key={i}>Scrollable content item {i + 1}</p>
              ))}
            </div>
            <MobileNavbar />
          </div>
        </div>
      </div>
    </div>
  );
}
