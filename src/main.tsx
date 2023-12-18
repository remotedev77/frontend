import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { lazily } from "react-lazily";

const { App } = lazily(() => import("./App"));

import useAuthStore from "./services/state/authStore";

import "./index.css";

useAuthStore.getState().currentUser();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Suspense>
    <App />
  </Suspense>
);
