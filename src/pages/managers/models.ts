import { Role } from "../users/models";
import z from "zod";

interface Manager {
  id: number;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  father_name: string;
  is_staff: boolean;
  is_superuser: boolean;
  role: Role;
}

const CreateManagerSchema = z.object({
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  father_name: z.string().min(1),
  manager_role: z.string().min(1),
  email: z.string().min(1),
  password: z.string().min(1),
});

type CreateManager = z.infer<typeof CreateManagerSchema>;

type UpdateManager = Partial<CreateManager>;

export type { Manager, CreateManager, UpdateManager };
export { CreateManagerSchema };
