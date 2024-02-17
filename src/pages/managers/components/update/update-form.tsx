import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useSWRMutation from "swr/mutation";

import { Form, FormControl, FormField, FormItem, FormMessage, FormLabel } from "@/common/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/common/components/ui/select";
import { Input } from "@/common/components/ui/input";
import { Button } from "@/common/components/ui/button";

import { useToast } from "@/common/components/ui/use-toast";
import useManagerStore from "@/services/state/managersStore";
import { managersEndpoints } from "@/services/api/endpoints";
import { putData } from "@/services/api/requests";
import { UpdateManager } from "../../models";
import { CreateCompanySchema } from "@/pages/companies/models";
import { roles, toastMessages } from "@/common/lib/utils";

type UpdateFormProps = {
  handleEdit?: (onEdit: boolean) => void;
};

const UpdateForm = ({ handleEdit = () => null }: UpdateFormProps) => {
  const { toast } = useToast();

  const { mutate, setDetailsDialogOpen, managerDetails } = useManagerStore();

  const { trigger: updateManager, isMutating } = useSWRMutation(
    managerDetails?.id ? managersEndpoints.byId(managerDetails?.id) : null,
    putData
  );

  const form = useForm<UpdateManager>({
    resolver: zodResolver(CreateCompanySchema),
    mode: "onChange",
    defaultValues: {
      role: "",
      email: "",
      password: "",
    },
    values: { ...managerDetails, role: roles.find(({ value }) => value === managerDetails?.role)?.value },
  });

  const onSubmit = async (values: UpdateManager) => {
    try {
      await updateManager(values);
      toast(toastMessages.success);
      mutate();
      setDetailsDialogOpen();
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
            disabled
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
            name="role"
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

        <div className="flex items-center justify-between">
          <Button type="button" variant={"outline"} onClick={() => handleEdit(false)}>
            Отмена
          </Button>

          <Button type="submit" disabled={isMutating || !form.formState.isDirty || !form.formState.isValid}>
            Cохранить
          </Button>
        </div>
      </form>
    </Form>
  );
};

export { UpdateForm };
