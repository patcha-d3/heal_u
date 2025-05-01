"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Bottomnav.module.css";

const menuItems = [
  { label: "Home", icon: "🏠", path: "/" },
  { label: "Re-Diagnose", icon: "🧠", path: "/re-diagnose" },
  { label: "Progress", icon: "📈", path: "/progress" },
  { label: "Blog", icon: "📰", path: "/blog" },
  { label: "Settings", icon: "⚙️", path: "/settings" },
];

export default function MobileNavbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      {menuItems.map((item, index) => {
        const isActive = pathname === item.path;

        return (
          <Link href={item.path} key={index} className={styles.link}>
            <div className={styles.button}>
              <div className={styles.icon}>{item.icon}</div>
              <span
                className={`${styles.label} ${
                  isActive ? styles.labelActive : styles.labelInactive
                }`}
              >
                {item.label}
              </span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
}
