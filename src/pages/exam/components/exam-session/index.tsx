import NumberSlider from "./components/number-slider";
import Navigation from "./components/navigation";
import Question from "./components/question";

const ExamSession = () => {
  return (
    <div className="flex flex-col max-w-full gap-4 layout min-h-dvh">
      <div className="h-12 w-full sm:h-[52px] lg:h-14">
        <NumberSlider />
      </div>

      <Question />
      <Navigation />
    </div>
  );
};

export default ExamSession;
