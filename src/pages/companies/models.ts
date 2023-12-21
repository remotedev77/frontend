import { z } from "zod";

interface Company {
  id: number;
  company_name: string;
  legal_adress: string;
  contact_person: string;
  email: string;
  phone: string;
}

const CreateCompanySchema = z.object({
  company_name: z.string().min(1),
  contact_person: z.string().min(1),
  email: z.string().min(1),
  phone: z.string().min(1),
  legal_adress: z.string().min(1),
});

type CreateCompany = z.infer<typeof CreateCompanySchema>;
type UpdateCompany = Partial<CreateCompany>;

export type { Company, CreateCompany, UpdateCompany };
export { CreateCompanySchema };
