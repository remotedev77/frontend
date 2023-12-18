import useGetDataWithPagination from "@/common/hooks/useGetDataWithPagination";
import { FilterForm, User } from "../models";
import { usersEndpoints } from "@/services/api/endpoints";

type UseGetUsersProps = FilterForm;

const useGetUsers = (params?: UseGetUsersProps) => {
  return useGetDataWithPagination<User>(usersEndpoints.search(params));
};

export { useGetUsers };
