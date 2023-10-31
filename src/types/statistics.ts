export interface IStatistics {
  statistic: IStatistic[];
  category_counts: ICategoryCount[];
}

export interface ICategoryCount {
  category: string;
  category_count: number;
}

export interface IStatistic {
  category: string;
  statistic: number;
}
