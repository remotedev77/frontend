import { z } from "zod";

const VerifyOTPSchema = z.object({
  verify_code: z.string().min(4, {
    message: "Ваш одноразовый пароль должен состоять из 4 символов.",
  }),
})

type VerifyOTP = z.infer<typeof VerifyOTPSchema>

export type { VerifyOTP }
export { VerifyOTPSchema }