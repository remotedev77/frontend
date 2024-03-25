import useSWRMutation from "swr/mutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/common/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/common/components/ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/common/components/ui/input-otp";
import { authEndpoints } from "@/services/api/endpoints";
import { getData } from "@/services/api/requests";
import { VerifyOTP, VerifyOTPSchema } from "../models";
import { useNavigate } from "react-router-dom";
import { toast } from "@/common/components/ui/use-toast";
import { AxiosError } from "axios";
import { toastMessages } from "@/common/lib/utils";

const VerifyOTPForm = () => {
  const navigate = useNavigate();
  const form = useForm<VerifyOTP>({
    resolver: zodResolver(VerifyOTPSchema),
    defaultValues: {
      verify_code: "",
    },
  });

  const { trigger, isMutating } = useSWRMutation(
    form.watch("verify_code") ? `${authEndpoints["verify-otp"]}/?verify_code=${form.watch("verify_code")}` : null,
    getData
  );

  async function onSubmit() {
    try {
      const res = await trigger();
      if (res === "success") {
        localStorage.setItem("isVerified", "true");
        return navigate(0);
      }
      throw Error();
    } catch (e) {
      if (e instanceof AxiosError) toast(toastMessages.error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
        <FormField
          control={form.control}
          name="verify_code"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputOTP maxLength={4} {...field}>
                  <InputOTPGroup className="w-full mx-auto lg:max-w-xs">
                    <InputOTPSlot className="w-full h-20 text-3xl" index={0} />
                    <InputOTPSlot className="w-full h-20 text-3xl" index={1} />
                    <InputOTPSlot className="w-full h-20 text-3xl" index={2} />
                    <InputOTPSlot className="w-full h-20 text-3xl" index={3} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full" type="submit" disabled={isMutating}>
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default VerifyOTPForm;
