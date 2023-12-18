import useGetDataWithPagination from "@/common/hooks/useGetDataWithPagination";
import { Question } from "../models";
import { questionsEndpoints } from "@/services/api/endpoints";

const useGetQuestions = () => {
  return useGetDataWithPagination<Question>(questionsEndpoints.base);
};

export { useGetQuestions };
