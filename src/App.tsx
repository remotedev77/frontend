import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import { Toaster } from "./common/components/ui/toaster";
import { Spinner } from "./common/components/spinner";
import router from "./routes";

const App = () => {
  return (
    <main className="text-gray-950">
      <Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
      </Suspense>
      <Toaster />
    </main>
  );
};

export { App };
