"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "../ui/Button/Button";
import SmallButton from '../ui/Button-s/Button-s';
import ButtonSurvey from "../ui/Button-survey/Button-survey";

export default function RootPage() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <SmallButton onClick={() => alert('Help info')} tooltip="Need help?" />
	  <h1 className="text-4xl font-bold mb-8">Welcome to Heal U</h1>
    <div className="w-[400px] mx-auto">
      <div className="grid grid-cols-2 gap-4 mb-8">
        <ButtonSurvey label="Daily" active={selected === "Daily"} onClick={() => setSelected("Daily")} />
        <ButtonSurvey label="3-4 times a week" active={selected === "3-4 times a week"} onClick={() => setSelected("3-4 times a week")} />
        <ButtonSurvey label="Occasionally (1-2 times/week)" active={selected === "Occasionally (1-2 times/week)"} onClick={() => setSelected("Occasionally (1-2 times/week)")} />
        <ButtonSurvey label="Rarely" active={selected === "Rarely"} onClick={() => setSelected("Rarely")} />
      </div>
    </div>

      <Link href="/home">
        <Button
          text="Go to Home Page"
          onClick={() => {}}
          fullWidth={false}
          outlined={true}
        />
      </Link>
    </main>
  );
}
