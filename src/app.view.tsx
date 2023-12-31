import { Suspense, createContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { observer } from "mobx-react";
import { preload } from "swr";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import toast, { Toaster, useToasterStore } from "react-hot-toast";
import { lazily } from "react-lazily";

import { RootStore } from "@/stores/root.store.ts";
import { authService } from "@/api/api.auth.ts";
import { getData } from "@/api/apis.ts";

const { NotFound404, Loading } = lazily(() => import("@/components"));
const { Login, ProtectedRoute, PersistLogin, ProtectedTestRoute } = lazily(
  () => import("@/containers")
);
const { FinalTest, ExamSimulator, Home, Marathon, CategoryExam, AdminPage } =
  lazily(() => import("@/pages"));
const { Questions, Users } = lazily(() => import("@/pages/AdminPage/views"));

preload(authService.getUserEndpoint, authService.getUser);
preload("/app/get-user-statistic/", getData);

export const RootStoreContext = createContext<RootStore>(new RootStore());
const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound404 />,
  },
  {
    path: "/",
    element: <PersistLogin />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "*",
            element: <NotFound404 />,
          },
          {
            index: true,
            element: <Home />,
          },
          {
            path: "admin",
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
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
        <Toaster />
      </Container>
    </RootStoreContext.Provider>
  );
});

export default App;
