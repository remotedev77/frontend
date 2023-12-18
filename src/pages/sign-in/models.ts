import { z } from "zod";

interface SignInResponse {
  refresh: string;
  access: string;
}

const SignInSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(1),
});

type SignIn = z.infer<typeof SignInSchema>;

export type { SignIn, SignInResponse };
export { SignInSchema };
