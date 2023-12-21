import useGetDataWithPagination from "@/common/hooks/useGetDataWithPagination";
import { Question } from "../models";
import { questionsEndpoints } from "@/services/api/endpoints";
import { FilterParams } from "@/common/types";

type UseGetQuestionsProps = FilterParams;

const useGetQuestions = (params?: UseGetQuestionsProps) => {
  return useGetDataWithPagination<Question>(questionsEndpoints.search(params));
};

export { useGetQuestions };
