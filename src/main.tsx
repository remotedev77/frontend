import ReactDOM from "react-dom/client";
import "./index.css";
import { lazy } from "react";
// eslint-disable-next-line react-refresh/only-export-components
const App = lazy(() => import("@/app.view.tsx"));

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
