import { Link, useLocation } from "react-router-dom";

import { Button } from "@/common/components/ui/button";
import useAuthStore from "@/services/state/authStore";
import { Role } from "@/pages/users/models";

const links = [
  {
    link: "",
    name: "Пользователи",
    isPrivate: false,
  },
  {
    link: "questions",
    name: "Вопросы",
    isPrivate: false,
  },
  { link: "companies", name: "Организации", isPrivate: true },
  { link: "managers", name: "Менеджеры", isPrivate: true },
];

const Sidebar = () => {
  const { pathname } = useLocation();
  const { user } = useAuthStore();
  return (
    <div className="sticky h-full min-h-[calc(100vh-57px)] max-w-[240px] top-10 lg:top-14 flex flex-col justify-between items-center py-8 w-full shadow-md">
      <ul className="flex flex-col items-center w-full gap-4">
        {links
          .filter(({ isPrivate }) => user?.role === Role.Admin || !isPrivate)
          .map(({ link, name }) => (
            <li key={link}>
              <Button
                asChild
                className="w-40 p-5 uppercase"
                variant={
                  !link && pathname === "/admin" ? "default" : link && pathname.includes(link) ? "default" : "outline"
                }
              >
                <Link to={link}>{name}</Link>
              </Button>
            </li>
          ))}
      </ul>
      <Button disabled className="w-40 p-5 uppercase" variant={pathname.match("reports") ? "default" : "outline"}>
        <Link to={"reports"}>{"Отчеты"}</Link>
      </Button>
    </div>
  );
};

export { Sidebar };
