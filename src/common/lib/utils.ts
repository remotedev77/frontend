import { ToastProps } from "../components/ui/toast";
import { User, Role, Categories, IStatistic, TestResult, ICategoryCount } from "@/pages/users/models";
import { Note } from "@/pages/questions/models";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { CategoriesType } from "../types";

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

const getCategories = (data: ICategoryCount[] = []) => {
  const constantCategories = Object.values(Categories).slice(0, Object.values(Categories).length / 2);

  return constantCategories.map((constantCategory) => ({
    category_count: data.find(({ category }) => category === constantCategory)?.category_count || 0,
    category: constantCategory as CategoriesType,
  }));
};

const testResult = [
  { name: TestResult.Pass, value: true },
  { name: TestResult.Fail, value: false },
];

const notes = [
  { name: "Одиночный", value: Note.Single },
  { name: "Множественный", value: Note.Multiple },
];

const roles = [
  { name: "Админ", value: Role.Admin },
  { name: "Менеджер", value: Role.Manager },
  { name: "Пользователь", value: Role.User },
];

export { cn, toastMessages, checkPermission, getConstantCategories, getCategories, testResult, notes, roles };
