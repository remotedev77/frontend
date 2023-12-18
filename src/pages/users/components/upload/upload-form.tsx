import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useSWRMutation from "swr/mutation";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/common/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/common/components/ui/form";

import { Button } from "@/common/components/ui/button";
import { useToast } from "@/common/components/ui/use-toast";
import { UploadFile } from "@/common/components/upload-file";

import { useGetAllCompanies } from "@/pages/companies/hooks/useGetAllCompanies";

import { UploadUser, UploadUserSchema } from "../../models";
import { toastMessages } from "@/common/lib/utils";

import useUserStore from "@/services/state/usersStore";
import { usersEndpoints } from "@/services/api/endpoints";
import { postData } from "@/services/api/requests";

const UploadForm = () => {
  const { toast } = useToast();
  const { mutate, setUploadDialogOpen } = useUserStore();
  const { data: companies, isLoading, error } = useGetAllCompanies();
  const { trigger: uploadUsers, isMutating } = useSWRMutation(
    usersEndpoints.uploadFile,
    (path: string, { arg }: { arg: UploadUser }) =>
      postData(
        path,
        { arg },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
  );

  const form = useForm<UploadUser>({ resolver: zodResolver(UploadUserSchema), mode: "onChange" });

  const onSubmit = async (values: UploadUser) => {
    try {
      await uploadUsers(values);
      toast(toastMessages.success);
      mutate();
      setUploadDialogOpen();
    } catch (error) {
      toast(toastMessages.error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 gap-4">
          <FormField
            control={form.control}
            name="filename"
            render={({ field }) => (
              <FormItem className="pt-1">
                <FormControl>
                  <UploadFile setFile={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="organization_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Организация</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={isLoading || error}
                    {...field}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Выбирать" />
                    </SelectTrigger>
                    <SelectContent>
                      {companies?.map(({ id, company_name }) => (
                        <SelectItem key={id} value={`${id}`}>
                          {company_name}
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

export { UploadForm };
