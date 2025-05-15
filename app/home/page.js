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
        { day: 2, label: "Knee-to-Chest Stretch", status: "active" },
        { day: 3, label: "Bridge Exercise", status: "pending" },
      ],
    },
  ];

  return (
    <div className="homePageContainer">
      <div className="w-[440px] h-[600px] bg-[#FDFBF9] rounded-t-[48px] px-4 py-[18px] justify-items-center relative flex flex-col items-center overflow-y-auto">
        <h1>My Recovery Plan</h1>
        <Accordion items={accordionItems} />
      </div>
    </div>
  );
}

