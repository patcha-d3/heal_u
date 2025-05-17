"use client";
import React, { useState } from "react";
import styles from "./Accordion.module.css";
import Link from "next/link";

const AccordionItem = ({ title, subitems, isOpen, onClick, onSubitemClick }) => (
  <div className={styles.accordionItem}>
    <button onClick={onClick} className={styles.accordionButton}>
      <span className={styles.titleWrapper}>
        {title}
        <svg
          className={`${styles.arrow} ${isOpen ? styles.rotate : ""}`}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 5L15 12L8 19" stroke="currentColor" strokeWidth="2" />
        </svg>
      </span>
    </button>

    {isOpen && (
      <div className={styles.accordionContent}>
        {subitems &&
          subitems.map((item, idx) => (
            item.link ? (
              <Link href={item.link} key={idx}>
                <div 
                  className={`${styles.subitem} ${item.status === "active" ? styles.activeSubitem : ""}`}
                  onClick={() => item.status === "active" && onSubitemClick && onSubitemClick(item)}
                >
                  <span className={styles.day}>D - {item.day}</span>
                  <span
                    className={
                      item.status === "done"
                        ? styles.done
                        : item.status === "active"
                        ? styles.active
                        : styles.pending
                    }
                  >
                    {item.label}
                  </span>
                  {item.status === "done" ? (
                    <div className={styles.checkmark}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#B2B2B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  ) : (
                    <div className={`${styles.circle} ${styles[item.status]}`} />
                  )}
                </div>
              </Link>
            ) : (
              <div 
                key={idx} 
                className={`${styles.subitem} ${item.status === "active" ? styles.activeSubitem : ""}`}
                onClick={() => item.status === "active" && onSubitemClick && onSubitemClick(item)}
              >
                <span className={styles.day}>D - {item.day}</span>
                <span
                  className={
                    item.status === "done"
                      ? styles.done
                      : item.status === "active"
                      ? styles.active
                      : styles.pending
                  }
                >
                  {item.label}
                </span>
                {item.status === "done" ? (
                  <div className={styles.checkmark}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#B2B2B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                ) : (
                  <div className={`${styles.circle} ${styles[item.status]}`} />
                )}
              </div>
            )
          ))}
      </div>
    )}
  </div>
);

export default function Accordion({ items, onSubitemClick }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          title={item.title}
          subitems={item.subitems}
          isOpen={openIndex === idx}
          onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          onSubitemClick={onSubitemClick}
        />
      ))}
    </div>
  );
}

