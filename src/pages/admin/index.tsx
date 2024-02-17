import { Outlet } from "react-router-dom";

import { Header } from "@/common/components/header";
import { Sidebar } from "./components/sidebar";

const Admin = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 px-6 pt-4 pb-0">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export { Admin };
