import useSWRImmutable from "swr/immutable";

import { appEndpoints } from "@/services/api/endpoints";
import { getData } from "@/services/api/requests";
import useExamStore from "@/services/state/examStore";
import { Question } from "@/pages/exam/models";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useGetQuestions = () => {
  const { pathname, state } = useLocation();
  const { stage, questionType, setQuestions, resetExam, setSelectedIndex, setInitialAnswers } = useExamStore();
  const { data, isLoading, isValidating, error, mutate } = useSWRImmutable<Question[]>(
    questionType === "final-test"
      ? appEndpoints.finalSimulation
      : appEndpoints.questions(questionType === "category" ? state : ""),
    getData
  );

  useEffect(() => {
    resetExam();
    mutate();
  }, [mutate, stage, pathname, resetExam, setSelectedIndex]);

  useEffect(() => {
    setQuestions(data || []);
    setInitialAnswers();
  }, [stage, data, questionType, setInitialAnswers, setQuestions]);

  return { data, isLoading, isValidating, error, mutate };
};

export default useGetQuestions;
