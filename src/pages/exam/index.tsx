import { Navigate, useLocation } from "react-router-dom";

import { ExamEntry } from "./components/exam-entry";
import ExamSession from "./components/exam-session";

import useExamStore, { Stage } from "@/services/state/examStore";
import { useLayoutEffect } from "react";

const Exam = () => {
  const { stage, setStage } = useExamStore();
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    setStage(Stage.ENTRY);
  }, [pathname, setStage]);

  return stage === Stage.ENTRY ? (
    <ExamEntry />
  ) : stage === Stage.SESSION ? (
    <ExamSession />
  ) : stage === Stage.RESULT ? (
    <>{/* <ExamResult /> */} Exam Result</>
  ) : (
    <Navigate to="/" />
  );
};

export { Exam };
