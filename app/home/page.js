"use client";

import React, { useState } from "react";
import "./home.css";
import "./home.css";
import "../../ui/PainLevelWidget/Painlevelwidget.module.css";
import Accordion from "../../ui/Accordion/Accordion";
import Painlevelwidget from "../../ui/PainLevelWidget/Painlevelwidget";
import Filter from "../../ui/Filter/Filter";
import FilterPopup from "../../ui/Filter/Filter-popup";
import Image from "next/image";

export default function HomePage() {
  const [showFilter, setShowFilter] = useState(false);

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
    <div>
      <div className="painLevelContainer">
        <h1 className="painLevel">Hi, Rachel!</h1>
        <Painlevelwidget />
      </div>
      <div className="homePageContainer">
        <div className="recoveryPlanHeader">
          <div style={{ display: "flex", alignItems: "flex-end", gap: "12px" }}>
            <h1 className="myRecoveryPlan">My Recovery Plan</h1>
            <span className="planBadge">14 Days Plan</span>
          </div>
          <Filter onClick={() => setShowFilter(true)} />
        </div>
        <div className="w-[440px] h-[600px] bg-[#FDFBF9] rounded-t-[48px] px-4 py-[18px]  relative flex flex-col items-start overflow-y-auto overflow-x-hidden mx-auto">
          <Accordion items={accordionItems} />
        </div>
        {showFilter && <FilterPopup onClose={() => setShowFilter(false)} />}
      </div>
    </div>
  );
}

