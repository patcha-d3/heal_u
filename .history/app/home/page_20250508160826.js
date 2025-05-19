import Accordion from "../../ui/Accordion/Accordion";
import styles from "../../ui/Accordion/Accordion.module.css";

export default function HomePage() {
  const accordionItems = [
    {
      title: "Neck",
      subitems: [
        { day: 1, label: "Neck Rotations", status: "done" },
        { day: 2, label: "Neck Stretch", status: "active" },
        { day: 3, label: "Side-to-Side Neck Stretch", status: "pending" },
      ],
    },
    {
      title: "Lower Back",
      subitems: [
        { day: 1, label: "Pelvic Tilt", status: "done" },
        { day: 2, label: "Knee-to-Chest Stretch", status: "pending" },
        { day: 3, label: "Bridge Exercise", status: "pending" },
      ],
    },
  ];

  return (
    <div>
      <h1 className={styles.headingText}>Hi, Rachel!</h1>
      <Accordion items={accordionItems} />
    </div>
  );
}

return (
  <div
    style={{ backgroundColor: "#29424D", minHeight: "100vh", padding: "2rem" }}
  >
    <h1 className={styles.headingText}>Hi, Rachel!</h1>
    <Accordion items={accordionItems} />
  </div>
);
