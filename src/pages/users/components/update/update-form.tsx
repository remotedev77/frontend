import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import useSWRMutation from "swr/mutation";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/common/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/common/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/common/components/ui/popover";
import { Calendar } from "@/common/components/ui/calendar";
import { Input } from "@/common/components/ui/input";
import { Button } from "@/common/components/ui/button";
import { useToast } from "@/common/components/ui/use-toast";

import { CalendarIcon } from "@radix-ui/react-icons";
import { CreateUser, CreateUserSchema, UpdateUser } from "../../models";
import { cn, toastMessages } from "@/common/lib/utils";
import useUserStore from "@/services/state/usersStore";
import { usersEndpoints } from "@/services/api/endpoints";
import { putData } from "@/services/api/requests";
import { useGetAllCompanies } from "@/pages/companies/hooks/useGetAllCompanies";
import { useGetDirections } from "@/pages/questions/hooks/useGetDirections";
import { RadioGroup, RadioGroupItem } from "@/common/components/ui/radio-group";

type UpdateFormProps = {
  handleEdit?: (onEdit: boolean) => void;
};

const UpdateForm = ({ handleEdit = () => null }: UpdateFormProps) => {
  const { toast } = useToast();

  const { mutate, setDetailsDialogOpen, userDetails } = useUserStore();
  const { data: directions, isLoading: loadingDirections, error: errorDirections } = useGetDirections();

  const { data: companies, isLoading, error } = useGetAllCompanies();
  const { trigger: updateUser, isMutating } = useSWRMutation(
    userDetails?.id ? usersEndpoints.byId(userDetails.id) : null,
    putData
  );

  const form = useForm<CreateUser>({
    resolver: zodResolver(CreateUserSchema),
    mode: "onChange",
    values: {
      ...userDetails,
      organization: companies?.find(({ company_name }) => company_name === userDetails?.organization)?.id.toString(),
      direction_type: userDetails?.direction_type ? userDetails?.direction_type.toString() : "",
    } as CreateUser,
  });

  const onSubmit = async (values: UpdateUser) => {
    try {
      await updateUser(values);
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
            name="organization"
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

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-2">
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
            name="start_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Дата начала обучения</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                      >
                        {field.value ? format(new Date(field.value), "dd.MM.yyyy") : <span>Начало обучения</span>}
                        <CalendarIcon className="w-4 h-4 ml-auto opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={new Date(field.value)}
                      onSelect={(date) => {
                        field.onChange(format(date || new Date(), "yyyy-MM-dd"));
                      }}
                      initialFocus
                      {...field}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="end_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Дата конца обучения</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                      >
                        {field.value ? format(new Date(field.value), "dd.MM.yyyy") : <span>Конец обучения</span>}
                        <CalendarIcon className="w-4 h-4 ml-auto opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      captionLayout="buttons"
                      mode="single"
                      selected={new Date(field.value)}
                      onSelect={(date) => {
                        field.onChange(format(date || new Date(), "yyyy-MM-dd"));
                      }}
                      initialFocus
                      {...field}
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="direction_type"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Направление</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={loadingDirections || errorDirections}
                    {...field}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Выбирать" />
                    </SelectTrigger>
                    <SelectContent>
                      {directions?.map(({ id, name }) => (
                        <SelectItem key={id} value={`${id}`}>
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

          <FormField
            control={form.control}
            name="plan"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>План</FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex space-x-4">
                    <FormItem className="group">
                      <FormControl>
                        <RadioGroupItem value="базовый" className="hidden peer" />
                      </FormControl>
                      <FormLabel className="bg-white border rounded-md shadow-sm border-input py-2 px-4 group-has-[:checked]:border-primary">
                        Базовым
                      </FormLabel>
                    </FormItem>
                    <FormItem className="group">
                      <FormControl>
                        <RadioGroupItem value="расширенный" className="hidden" />
                      </FormControl>
                      <FormLabel className="bg-white border rounded-md shadow-sm border-input py-2 px-4 group-has-[:checked]:border-primary">
                        Разрешенным
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex items-center justify-between">
          <Button variant={"outline"} onClick={() => handleEdit(false)}>
            Отмена
          </Button>

          <Button type="submit" disabled={isMutating || !form.formState.isDirty}>
            Cохранить
          </Button>
        </div>
      </form>
    </Form>
  );
};

export { UpdateForm };
