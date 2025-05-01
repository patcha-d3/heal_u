import React from "react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { label: "Home", icon: "🏠", path: "/" },
  { label: "Diagnose", icon: "🧠", path: "/diagnose" },
  { label: "Progress", icon: "📈", path: "/progress" },
  { label: "Blog", icon: "📰", path: "/blog" },
  { label: "Settings", icon: "⚙️", path: "/settings" },
];

export default function MobileNavbar() {
  const location = useLocation();

  return (
    <nav style={styles.navbar}>
      {menuItems.map((item, index) => {
        const isActive = location.pathname === item.path;

        return (
          <Link to={item.path} key={index} style={styles.link}>
            <div style={styles.button}>
              <div style={styles.icon}>{item.icon}</div>
              <span
                style={{
                  ...styles.label,
                  fontWeight: isActive ? "800" : "600",
                }}
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
