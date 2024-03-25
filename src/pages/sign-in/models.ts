import { z } from "zod";

interface SignInResponse {
  refresh: string;
  access: string;
  is_verified: boolean,
}

const SignInSchema = z.object({
  phone_number: z.string().min(1),
  password: z.string().min(1),
});

type SignIn = z.infer<typeof SignInSchema>;

export type { SignIn, SignInResponse };
export { SignInSchema };
