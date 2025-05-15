"use client";

import React, { useState } from "react";
import ButtonSurvey from "../../../ui/Button-survey/Button-survey";
import Image from "next/image";
import ExitChip from "../../../ui/Exitchip/Exitchip";
import SurveyProgress from "../../../ui/SurveyProgress/SurveyProgress";
import ButtonBack from "../../../ui/Button-back/Button-back";
import ButtonForward from "../../../ui/Button-forward/Button-forward";
import { useRouter } from "next/navigation";

export default function RootPage() {
	const [selected, setSelected] = useState(null);
	const currentStep = 4;
	const totalSteps = 8;
	const router = useRouter();

	return (
		<div className='w-[406px] h-[800px] relative'>
			<ExitChip className='absolute top-[16px] right-[16px]' />
			<ButtonBack
				className='absolute bottom-[48px] left-[11px]'
				onClick={() =>
					router.push("/onboarding/step-one")
				}
			/>
			<ButtonForward
				className='absolute bottom-[48px] right-[11px]'
				onClick={() =>
					router.push("/onboarding/step-four")
				}
			/>
			<main className='h-full flex flex-col px-4 py-[18px]'>
				<SurveyProgress
					currentStep={currentStep}
					totalSteps={totalSteps}
				/>

        {/* Image and Button Wrapper */}
        <div className="flex flex-col items-center gap-6 mt-8">
          <Image
            src="/assets/survey-img.png"
            alt="Survey"
            width={400}
            height={260}
            className="rounded-lg"
          />

          <div className="grid grid-cols-2 gap-4">
            <ButtonSurvey
              label="Daily"
              active={selected === "Daily"}
              onClick={() => setSelected("Daily")}
            />
            <ButtonSurvey
              label="3-4 times a week"
              active={selected === "3-4 times a week"}
              onClick={() => setSelected("3-4 times a week")}
            />
            <ButtonSurvey
              label={
                <>
                  Occasionally
                  <br />
                  (1-2 times/week)
                </>
              }
              active={selected === "Occasionally (1-2 times/week)"}
              onClick={() => setSelected("Occasionally (1-2 times/week)")}
            />
            <ButtonSurvey
              label="Rarely"
              active={selected === "Rarely"}
              onClick={() => setSelected("Rarely")}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
