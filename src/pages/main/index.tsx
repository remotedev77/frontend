import { Header } from "@/common/components/header";
import UserInfoCard from "./components/user-info-card";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="p-2 lg:p-5">
        <UserInfoCard />
      </div>
    </div>
  );
};

export default Main;
