import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useSWRMutation from "swr/mutation";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/common/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/common/components/ui/select";

import { Input } from "@/common/components/ui/input";
import { Button } from "@/common/components/ui/button";
import { useToast } from "@/common/components/ui/use-toast";

import { roles, toastMessages } from "@/common/lib/utils";

import useManagerStore from "@/services/state/managersStore";
import { managersEndpoints } from "@/services/api/endpoints";
import { postData } from "@/services/api/requests";
import { CreateManager, CreateManagerSchema } from "../../models";

const CreateForm = () => {
  const { toast } = useToast();

  const { mutate, setCreateDialogOpen } = useManagerStore();

  const { trigger: createManager, isMutating } = useSWRMutation(managersEndpoints.base, postData);

  const form = useForm<CreateManager>({
    resolver: zodResolver(CreateManagerSchema),
    mode: "onChange",
    defaultValues: {
      first_name: "",
      last_name: "",
      father_name: "",
      manager_role: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: CreateManager) => {
    try {
      await createManager(values);
      toast(toastMessages.success);
      mutate();
      setCreateDialogOpen();
    } catch (error) {
      toast(toastMessages.error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 gap-4 ">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Фамилия</FormLabel>
                <FormControl>
                  <Input placeholder="Иванов" autoComplete="true" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Имя</FormLabel>
                <FormControl>
                  <Input placeholder="Иван" autoComplete="true" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="father_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Отчество</FormLabel>
                <FormControl>
                  <Input placeholder="Иванович" autoComplete="true" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Логин</FormLabel>
                <FormControl>
                  <Input placeholder="Логин" autoComplete="true" {...field} />
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
                  <Input type="password" autoComplete="true" placeholder="Пароль" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="manager_role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Роль</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value} {...field}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Выбирать" />
                    </SelectTrigger>
                    <SelectContent>
                      {roles?.slice(0, 2)?.map(({ name, value }) => (
                        <SelectItem key={name} value={value}>
                          {name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className="flex ml-auto"
          disabled={isMutating || !form.formState.isDirty || !form.formState.isValid}
        >
          Добавить
        </Button>
      </form>
    </Form>
  );
};

export { CreateForm };
