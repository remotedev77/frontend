import useGetDataWithPagination from "@/common/hooks/useGetDataWithPagination";
import { User } from "../models";
import { usersEndpoints } from "@/services/api/endpoints";
import { FilterParams } from "@/common/types";

type UseGetUsersProps = FilterParams;

const useGetUsers = (params?: UseGetUsersProps) => {
  return useGetDataWithPagination<User>(usersEndpoints.search(params));
};

export { useGetUsers };
