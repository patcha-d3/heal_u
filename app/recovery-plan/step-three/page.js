"use client";

import { useRouter } from "next/navigation";
import ButtonBack from "@ui/Button-back/Button-back";
import VideoProgress from "@ui/VideoProgress/Videoprogress";
import VideoComponent from "@ui/ui-videocomponent-lowerback/video-component-lowerback";




export default function stepthreePage() {
  const currentStep = 1; 
  const totalSteps = 6; 
  const router = useRouter();

  return (
    <div className="relative h-full">
    <ButtonBack
        className="absolute top-[48px] left-[11px]"
        onClick={() => router.push("/recovery-plan/step-two")}
      />
      <main className="h-full flex flex-col px-4 py-[18px]">
        <VideoProgress currentStep={6} totalSteps={6} />
        <VideoComponent />
      </main>
    </div>
  );
}

