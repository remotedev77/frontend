import { z } from "zod";

type AccessorKeys = {
  id: string;
  full_name: string;
  final_test: string;
  start_date: string;
  end_date: string;
  organization: string;
  access: string;
};

enum TestResult {
  Pass = "сдана",
  Fail = "не сдана",
}

enum Access {
  Empty = "",
  Закрыт = "закрыт",
  Открыт = "открыт",
}

export enum Role {
  User = "user",
  Manager = "manager",
  Admin = "admin",
}

interface User {
  id: number;
  organization: string;
  password: string;
  last_login: null;
  first_name: string;
  last_name: string;
  email: string;
  date_joined: Date;
  is_admin: boolean;
  is_active: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  father_name: string;
  start_date: string;
  end_date: string;
  access: Access;
  main_test_count: number;
  final_test: boolean;
  role: Role;
}

const CreateUserSchema = z.object({
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  father_name: z.string().min(1),
  email: z.string().email().min(1),
  password: z.string().min(1),
  start_date: z.string(),
  end_date: z.string(),
  organization: z.string().min(1),
});

type CreateUser = z.infer<typeof CreateUserSchema>;

type UpdateUser = Partial<CreateUser>;

const UploadUserSchema = z.object({
  filename: z
    .any()
    .refine((files) => files, "Файл требуется")
    .refine(
      (files) => "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet".includes(files?.type),
      "Принимаются файлы .xlsx"
    ),
  organization_id: z.string().min(1),
});

type UploadUser = z.infer<typeof UploadUserSchema>;

enum Categories {
  "Не решал",
  "Знаю",
  "Делаю ошибки",
  "Не знаю",
}

interface ICategoryCount {
  category: Categories;
  category_count: number;
}

interface IStatistic {
  category: Categories;
  statistic: number;
}

interface IStatistics {
  statistic: IStatistic[];
  category_counts: ICategoryCount[];
}

export type { User, CreateUser, UpdateUser, UploadUser, AccessorKeys, ICategoryCount, IStatistic, IStatistics };
export { TestResult, Access, Categories, CreateUserSchema, UploadUserSchema };
