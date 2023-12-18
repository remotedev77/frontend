import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/common/components/ui/form";

import { Input } from "@/common/components/ui/input";
import { Button } from "@/common/components/ui/button";

import { SignIn, SignInSchema } from "../models";
import { ReloadIcon } from "@radix-ui/react-icons";
import useAuthStore from "@/services/state/authStore";

const SignInForm = () => {
  const { signIn, isSignInLoading, isUserLoading } = useAuthStore();
  const form = useForm<SignIn>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: SignIn) => {
    signIn(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Логин</FormLabel>
                <FormControl>
                  <Input type="email" autoComplete="true" placeholder="Почту" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Пароль</FormLabel>
                <FormControl>
                  <Input type="password" autoComplete="true" placeholder="•••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="flex w-full" disabled={isSignInLoading || isUserLoading}>
          {isUserLoading || isSignInLoading ? (
            <>
              <ReloadIcon className="w-4 h-4 mr-2 animate-spin" />
              Пожалуйста, подождите
            </>
          ) : (
            "Войти"
          )}
        </Button>
      </form>
    </Form>
  );
};

export { SignInForm };
