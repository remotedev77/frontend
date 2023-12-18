import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import { Toaster } from "./common/components/ui/toaster";
import { Spinner } from "./common/components/spinner";

import router from "./routes";

const App = () => {
  return (
    <div className="container w-full min-h-screen text-gray-950">
      <Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
      </Suspense>
      <Toaster />
    </div>
  );
};

export { App };
