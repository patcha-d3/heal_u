import "./home.css";
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
        { day: 2, label: "Knee-to-Chest Stretch", status: "active" },
        { day: 3, label: "Bridge Exercise", status: "pending" },
      ],
    },
  ];

  return (
    <div>
      <div className="painLevelContainer">
        <h1 className="painLevel">Hi, Rachel!</h1>
        <div className="painLevelWidget"></div>
      </div>
      <div className="homePageContainer">
        <h1 className="myRecoveryPlan">My Recovery Plan</h1>
        <div className="w-[440px] h-[500px] bg-[#FDFBF9] rounded-t-[48px] px-4 py-[18px]  relative flex flex-col items-start overflow-y-auto overflow-x-hidden mx-auto">
          <Accordion items={accordionItems} />
        </div>
      </div>
    </div>
  );
}

