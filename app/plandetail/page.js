import VideoComponent from "../../ui/Video-component/Video-component";
import ButtonBack from "../../ui/Button-back/Button-back";
import SurveyProgress from "../../ui/SurveyProgress/SurveyProgress";

export default function SomePage() {
  const currentStep = 1; // or get this from props/state
  const totalSteps = 8;  // or get this from props/state

  return (
    <div className="relative h-full">
      <ButtonBack className="absolute top-[48px] left-[11px]" />
      <main className="h-full flex flex-col px-4 py-[18px]">
        <SurveyProgress
          currentStep={currentStep}
          totalSteps={totalSteps}
        />
        <VideoComponent />
      </main>
    </div>
  );
}