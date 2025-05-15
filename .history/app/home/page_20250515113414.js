import "./home.css";
import Accordion from "../../ui/Accordion/Accordion";

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
    <div className="w-[406px] h-[800px] bg-[#FDFBF9] rounded-[48px] px-4 py-[18px] relative">
      <h1>Home</h1>
      <Accordion items={accordionItems} />
    </div>
  );
}
