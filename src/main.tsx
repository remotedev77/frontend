import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { lazily } from "react-lazily";

import { Spinner } from "./common/components/spinner";

const { App } = lazily(() =>
  new Promise((resolve) => {
    setTimeout(resolve, 3000);
  }).then(() => import("./App"))
);

import useAuthStore from "./services/state/authStore";

import "./index.css";

useAuthStore.getState().currentUser();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<Spinner />}>
    <App />
  </Suspense>
);
