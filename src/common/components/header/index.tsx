import { useNavigate } from "react-router-dom";

import { Separator } from "../ui/separator";

import useAuthStore from "@/services/state/authStore";

const Header = () => {
  const navigate = useNavigate();
  const { signOut } = useAuthStore();

  const handleSignOut = () => {
    signOut();
    navigate("/login");
  };
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between w-full h-10 px-3 text-lg font-semibold bg-white shadow-md select-none lg:text-xl lg:h-14 lg:px-6">
      <h1>Тренажер НОК</h1>
      <button className="group" onClick={handleSignOut}>
        Выйти
        <Separator className="max-lg:hidden transition-all duration-300 origin-left h-0.5 scale-0 rounded-full group-hover:scale-100 bg-primary-gradient" />
      </button>
    </div>
  );
};

export { Header };
