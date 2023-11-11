import { useContext, useEffect } from "react";
import { observer } from "mobx-react";
import { Navigate, Outlet } from "react-router-dom";
import { lazily } from "react-lazily";

import { RootStoreContext } from "@/app.view";

const { Loading } = lazily(() => import("@/components"));

export const PersistLogin = observer(() => {
  const { authStore } = useContext(RootStoreContext);
  useEffect(() => {
    authStore.checkAuth();
  }, [authStore]);

  if (authStore.isAuthInProgress) {
    return <Loading />;
  }
  if (authStore.isAuth) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" replace />;
  }
});
