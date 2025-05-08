"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Bottomnav.module.css";
import Image from "next/image";

const menuItems = [
  { label: "Home", icon: "/icons/home.svg", path: "/" },
  { label: "Re-Diagnose", icon: "/icons/rediagnose.svg", path: "/re-diagnose" },
  { label: "Progress", icon: "/icons/progress.svg", path: "/progress" },
  { label: "Blog", icon: "/icons/blog.svg", path: "/blog" },
  { label: "Settings", icon: "/icons/settings.svg", path: "/settings" },
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
              <div className={styles.icon}>
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                  style={{
                    filter: isActive ? "brightness(0) invert(1)" : "none",
                  }}
                />
              </div>
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
