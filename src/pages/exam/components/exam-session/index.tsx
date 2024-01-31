import NumberSlider from "./components/number-slider";
import Navigation from "./components/navigation";
import Question from "./components/question";

import useGetQuestions from "./hooks/useGetQuestions";
import { TailSpin } from "react-loader-spinner";

const ExamSession = () => {
  const { isLoading, isValidating, error } = useGetQuestions();

  if (isLoading || isValidating) {
    return (
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#F3693F"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperClass="absolute inset-0 flex items-center justify-center"
      />
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

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
