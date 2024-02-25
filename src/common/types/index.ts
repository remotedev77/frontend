import { Note } from "@/pages/questions/models";
import { Categories, Plan, Role } from "@/pages/users/models";

interface DataWithPagination<T = unknown> {
  count: number;
  total_pages: number;
  next: boolean;
  previous: boolean;
  results: T[];
}

type PaginationModel = {
  pageNum: number;
  setPage: (num: number) => void;
  setFirstPage: () => void;
  setLastPage: () => void;
  nextPage: () => void;
  previousPage: () => void;
  totalPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

type FilterParams = {
  search?: string;
  direction_id?: number;
  organization?: string;
  certification?: string;
  start_date?: { from?: string; to?: string };
  end_date?: { from?: string; to?: string };
  note?: Note;
  role?: Role;
  plan?: Plan;
};

type CategoriesType = keyof typeof Categories;

type ExamTypes = CategoriesType | "final-test" | "simulation" | "marathon";

export type { DataWithPagination, PaginationModel, FilterParams, ExamTypes, CategoriesType };
