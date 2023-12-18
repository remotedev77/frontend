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

type Params = {
  search?: string;
  organization?: string;
  certification?: string;
  start_Date?: { from?: string; to?: string };
  end_Date?: { from?: string; to?: string };
};

export type { DataWithPagination, PaginationModel, Params };
