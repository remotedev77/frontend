import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/common/components/ui/form";
import { Input } from "@/common/components/ui/input";
import { Button } from "@/common/components/ui/button";
import { useToast } from "@/common/components/ui/use-toast";

import { toastMessages } from "@/common/lib/utils";

import useCompanyStore from "@/services/state/companiesStore";
import { CreateCompany, CreateCompanySchema } from "../../models";
import useCreateCompany from "../../hooks/useCreateCompany";

const CreateForm = () => {
  const { toast } = useToast();

  const { mutate, setCreateDialogOpen } = useCompanyStore();
  const { trigger: createCompany, isMutating } = useCreateCompany();

  const form = useForm<CreateCompany>({
    resolver: zodResolver(CreateCompanySchema),
    mode: "onChange",
    defaultValues: {
      company_name: "",
      contact_person: "",
      email: "",
      phone: "",
      legal_adress: "",
    },
  });

  const onSubmit = async (values: CreateCompany) => {
    try {
      await createCompany(values);
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
            name="company_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Наименование организации</FormLabel>
                <FormControl>
                  <Input placeholder="Наименование организации" autoComplete="true" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contact_person"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ФИО контактного лица</FormLabel>
                <FormControl>
                  <Input placeholder="ФИО контактного лица" autoComplete="true" {...field} />
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
                <FormLabel>Почта</FormLabel>
                <FormControl>
                  <Input type="email" autoComplete="true" placeholder="Почту" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Номер телефона</FormLabel>
                <FormControl>
                  <Input autoComplete="true" placeholder="Номер телефона" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="legal_adress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Адрес</FormLabel>
                <FormControl>
                  <Input autoComplete="true" placeholder="Адрес" {...field} />
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
