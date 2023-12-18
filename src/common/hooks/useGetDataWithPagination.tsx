import { useState } from "react";
import useSWRImmutable from "swr/immutable";

import { getData } from "@/services/api/requests";
import { DataWithPagination, PaginationModel } from "../types";
import { AxiosError } from "axios";

const useGetDataWithPagination = <T = unknown,>(path: string) => {
  const [pageNum, setPageNum] = useState(1);
  const { data, ...swr } = useSWRImmutable<DataWithPagination<T>>(path ? `${path}?page=${pageNum}` : null, getData, {
    keepPreviousData: true,
  });

  const setPage = (num: number) => setPageNum(num);
  const setFirstPage = () => setPageNum(1);
  const setLastPage = () => setPageNum(data?.total_pages || 1);
  const nextPage = () => setPageNum((prev) => prev + 1);
  const previousPage = () => setPageNum((prev) => prev - 1);

  if (swr.error instanceof AxiosError) {
    if (swr.error.response?.status === 403) {
      setPage(1);
      swr.mutate();
    }
  }

  return {
    data: data?.results || [],
    ...swr,
    pagination: {
      pageNum,
      setPage,
      nextPage,
      previousPage,
      setFirstPage,
      setLastPage,
      totalPage: data?.total_pages || 1,
      hasNextPage: data?.next || false,
      hasPreviousPage: data?.previous || false,
    } as PaginationModel,
  };
};

export default useGetDataWithPagination;
