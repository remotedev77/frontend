import useSWRImmutable from "swr/immutable";

import { appEndpoints } from "@/services/api/endpoints";
import { getData } from "@/services/api/requests";
import useExamStore from "@/services/state/examStore";
import { Question } from "@/pages/exam/models";
import { useEffect } from "react";

const useGetQuestions = () => {
  const { setQuestions } = useExamStore();
  const { data, isLoading, error } = useSWRImmutable<Question[]>(appEndpoints.questions, getData);

  useEffect(() => {
    setQuestions(data || []);
  }, [data, setQuestions]);

  return { data, isLoading, error };
};

export default useGetQuestions;
