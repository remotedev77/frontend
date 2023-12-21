import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useSWRMutation from "swr/mutation";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/common/components/ui/form";
import { Input } from "@/common/components/ui/input";
import { Button } from "@/common/components/ui/button";
import { useToast } from "@/common/components/ui/use-toast";

import { toastMessages } from "@/common/lib/utils";

import useCompanyStore from "@/services/state/companiesStore";
import { companiesEndpoints } from "@/services/api/endpoints";
import { putData } from "@/services/api/requests";
import { CreateCompanySchema, UpdateCompany } from "../../models";

type UpdateFormProps = {
  handleEdit?: (onEdit: boolean) => void;
};

const UpdateForm = ({ handleEdit = () => null }: UpdateFormProps) => {
  const { toast } = useToast();

  const { mutate, setDetailsDialogOpen, companyDetails } = useCompanyStore();

  const { trigger: updateCompany, isMutating } = useSWRMutation(
    companyDetails?.id ? companiesEndpoints.byId(companyDetails?.id) : null,
    putData
  );

  const form = useForm<UpdateCompany>({
    resolver: zodResolver(CreateCompanySchema),
    mode: "onChange",
    defaultValues: {
      company_name: "",
      contact_person: "",
      email: "",
      phone: "",
      legal_adress: "",
    },
    values: companyDetails,
  });

  const onSubmit = async (values: UpdateCompany) => {
    try {
      await updateCompany(values);
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

        <div className="flex items-center justify-between">
          <Button type="button" variant={"outline"} onClick={() => handleEdit(false)}>
            Отмена
          </Button>

          <Button type="submit" disabled={isMutating || !form.formState.isValid}>
            Cохранить
          </Button>
        </div>
      </form>
    </Form>
  );
};

export { UpdateForm };
