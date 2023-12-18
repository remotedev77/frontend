import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ToastProps } from "../components/ui/toast";
import { User, Role, Categories, IStatistic, TestResult } from "@/pages/users/models";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

const toastMessages: Record<string, ToastProps> = {
  success: { title: "🟢 Операция выполнена" },
  error: { title: "Ой-ой! Что-то пошло не так.", variant: "destructive" },
};

const checkPermission = (user: User | null) => {
  const role = user?.role;
  switch (role) {
    case Role.Admin:
    case Role.Manager:
      return true;
    default:
      return false;
  }
};

const getConstantCategories = (data: IStatistic[] = []) => {
  const constantCategories = Object.values(Categories).slice(0, Object.values(Categories).length / 2);

  return constantCategories.map((constantCategory) => ({
    statistic: data.find(({ category }) => category === constantCategory)?.statistic || 0,
    category: constantCategory,
  }));
};

const testResult = [
  { name: TestResult.Pass, value: true },
  { name: TestResult.Fail, value: false },
];

export { cn, toastMessages, checkPermission, getConstantCategories, testResult };
