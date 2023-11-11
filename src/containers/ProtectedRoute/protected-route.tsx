import { observer } from "mobx-react";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { RootStoreContext } from "@/app.view";

export const ProtectedRoute = observer(() => {
  const { authStore } = useContext(RootStoreContext);

  if (authStore.isAuthInProgress) {
    return <div>Checking auth...</div>;
  }
  if (authStore.isAuth) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" replace />;
  }
});

export const ProtectedTestRoute = observer(() => {
  const { userStore } = useContext(RootStoreContext);

  return userStore?.userData?.main_test_count &&
    userStore?.userData?.main_test_count >= 2 ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
});
