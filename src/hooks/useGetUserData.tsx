import useSWR from "swr";
import { authService } from "@/api/api.auth";
import { UserDTO } from "@/types";
import { useContext, useEffect } from "react";
import { RootStoreContext } from "@/app.view";

const useGetUserData = (checkAdmin?: boolean) => {
  const {
    data: userData,
    isLoading,
    error,
  } = useSWR<UserDTO>(
    checkAdmin ? authService.getAdminUserEndpoint : authService.getUserEndpoint,
    checkAdmin ? authService.getAdminUser : authService.getUser
  );
  const { userStore } = useContext(RootStoreContext);
  useEffect(() => {
    userData && userStore.setUserData(userData);
  }, [userData, userStore]);
  return { userData, isLoading, error };
};

export default useGetUserData;
