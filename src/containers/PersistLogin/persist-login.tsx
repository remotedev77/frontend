import { observer } from "mobx-react";
import { Navigate, Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { RootStoreContext } from "../../app.view";
import { Loading } from "../../components";

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
