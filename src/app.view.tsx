import { createContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { observer } from "mobx-react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import toast, { Toaster, useToasterStore } from "react-hot-toast";

import {
  Login,
  ProtectedRoute,
  PersistLogin,
  ProtectedTestRoute,
} from "./containers";
import {
  FinalTest,
  ExamSimulator,
  Home,
  Marathon,
  CategoryExam,
  AdminPage,
} from "./pages";
import { RootStore } from "./stores/root.store.ts";
import { preload } from "swr";
import { authService } from "./api/api.auth.ts";
import { getData } from "./api/apis.ts";
import { Questions, Users } from "./pages/AdminPage/views";

preload(authService.getUserEndpoint, authService.getUser);
preload("/app/get-user-statistic/", getData);

export const RootStoreContext = createContext<RootStore>(new RootStore());

const router = createBrowserRouter([
  {
    path: "/",
    element: <PersistLogin />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            index: !new RootStore().authStore.isAdmin,
            element: <Home />,
          },
          {
            index: new RootStore().authStore.isAdmin,
            element: <AdminPage />,
          },
          {
            path: "test",
            element: <ProtectedTestRoute />,
            children: [
              {
                index: true,
                element: <FinalTest />,
              },
            ],
          },

          {
            path: "simulator",
            element: <ExamSimulator />,
          },
          { path: "marathon", element: <Marathon /> },
          { path: "category/:name", element: <CategoryExam /> },
          {
            path: "/users",
            element: <Users />,
          },
          {
            path: "/questions",
            element: <Questions />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
`;

const TOAST_LIMIT = 3;

const App = observer(() => {
  const [rootStore] = useState(() => new RootStore());
  const { toasts } = useToasterStore();

  useEffect(() => {
    toasts
      .filter((t) => t.visible) // Only consider visible toasts
      .filter((_, i) => i >= TOAST_LIMIT) // Is toast index over limit
      .forEach((t) => toast.dismiss(t.id)); // Dismiss – Use toast.remove(t.id) removal without animation
  }, [toasts, rootStore]);

  return (
    <RootStoreContext.Provider value={rootStore}>
      <Container>
        <RouterProvider router={router} />
        <Toaster />
      </Container>
    </RootStoreContext.Provider>
  );
});

export default App;
