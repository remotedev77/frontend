import { useContext, useEffect } from "react";
import { observer } from "mobx-react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { lazily } from "react-lazily";

import { RootStoreContext } from "@/app.view";
import { authService } from "@/api/api.auth";
import { getData } from "@/api/apis";
import useSWRMutation from "swr/mutation";

const { Loading } = lazily(() => import("@/components"));

export const PersistLogin = observer(() => {
  const { authStore } = useContext(RootStoreContext);
  const { data: isAdmin, trigger } = useSWRMutation(
    authService.getAdminUserEndpoint,
    getData
  );

  const navigate = useNavigate();
  useEffect(() => {
    authStore.checkAuth();
    trigger();
    if (isAdmin?.role === "admin" || isAdmin?.role === "manager") {
      authStore.setAdmin(true);
      navigate("/admin");
    } else {
      authStore.setAdmin(false);
      navigate("/");
    }
  }, [authStore, isAdmin?.role, trigger]);

  if (authStore.isAuthInProgress) {
    return <Loading />;
  }
  if (authStore.isAuth) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" replace />;
  }
});
