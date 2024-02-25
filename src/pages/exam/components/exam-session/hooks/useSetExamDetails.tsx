import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import useExamStore, { Format } from "@/services/state/examStore";
import { examData } from "@/pages/exam/lib/utils";
import { ExamTypes } from "@/common/types";
import { QuestionType } from "@/pages/exam/models";

const useSetExamDetails = () => {
  const { setFormat, setQuestionType } = useExamStore();
  const { pathname, state } = useLocation() as { pathname: string; state: ExamTypes };

  const { format } = examData?.[state] ? examData[state] : { format: Format.STANDART };

  useEffect(() => {
    const handleFormat = () => setFormat(format);
    const handleQuestionType = () => {
      const questionType = pathname.split("/")[2] as QuestionType;
      setQuestionType(questionType);
    };

    handleFormat();
    handleQuestionType();
  }, [format, pathname, setFormat, setQuestionType]);
  return { state };
};

export default useSetExamDetails;
