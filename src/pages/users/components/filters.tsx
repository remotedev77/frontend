import { UseFormReturn } from "react-hook-form";

import { Button } from "@/common/components/ui/button";
import { Calendar } from "@/common/components/ui/calendar";
import { Form, FormControl, FormField, FormItem } from "@/common/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/common/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandItem } from "@/common/components/ui/command";

import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn, testResult } from "@/common/lib/utils";
import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { useGetAllCompanies } from "@/pages/companies/hooks/useGetAllCompanies";
import { FilterParams } from "@/common/types";
import { Plan } from "../models";

type Filters = { form: UseFormReturn<FilterParams, unknown> };

const Filters = ({ form }: Filters) => {
  const [startDate, setStartDate] = useState<DateRange | undefined>();
  const [endDate, setEndDate] = useState<DateRange | undefined>();

  const { data: companies, isLoading, error } = useGetAllCompanies();

  return (
    <Form {...form}>
      <form className="flex flex-row w-full gap-2">
        <FormField
          control={form.control}
          name="organization"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn("w-56 justify-between", !field.value && "text-muted-foreground")}
                      disabled={isLoading || error}
                    >
                      <p className="truncate">
                        {field.value
                          ? companies?.find((company) => company.id == (field.value || -1))?.company_name
                          : "Организация"}
                      </p>
                      <CaretSortIcon className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-56 p-0">
                  <Command>
                    <CommandEmpty>Организация не найдена.</CommandEmpty>
                    <CommandGroup>
                      {companies?.map((company) => (
                        <CommandItem
                          value={`${company.id}`}
                          key={company.id}
                          onSelect={(val) => field.onChange(val == field.value ? undefined : val)}
                        >
                          {company.company_name}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              company.id == (field.value || -1) ? "opacity-100" : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="certification"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn("w-56 justify-between", !field.value && "text-muted-foreground")}
                    >
                      <p className="truncate">
                        {field.value
                          ? testResult?.find(({ value }) => value.toString() === field.value)?.name
                          : "Аттестация"}{" "}
                      </p>
                      <CaretSortIcon className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-56 p-0">
                  <Command>
                    <CommandEmpty>Аттестация не найдена.</CommandEmpty>
                    <CommandGroup>
                      {testResult?.map(({ name, value }) => (
                        <CommandItem
                          value={`${value}`}
                          key={name}
                          onSelect={(val) => field.onChange(val === field.value ? undefined : val)}
                        >
                          {name}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              value.toString() === field.value ? "opacity-100" : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="start_date"
          render={({ field }) => (
            <FormItem>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      id="date"
                      variant={"outline"}
                      className={cn("w-56 justify-start text-left font-normal", !startDate && "text-muted-foreground")}
                    >
                      {startDate?.from ? (
                        startDate.to ? (
                          <>
                            {format(startDate.from, "dd.MM.yyyy")} - {format(startDate.to, "dd.MM.yyyy")}
                          </>
                        ) : (
                          format(startDate.from, "dd.MM.yyyy")
                        )
                      ) : (
                        <span>Начало обучения</span>
                      )}
                      <CalendarIcon className="w-4 h-4 ml-auto" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="range"
                    selected={startDate}
                    onSelect={(date) => {
                      field.onChange(
                        date?.from || date?.to
                          ? JSON.stringify({
                              from: date?.from ? format(date?.from, "yyyy-MM-dd") : undefined,
                              to: date?.to ? format(date?.to, "yyyy-MM-dd") : undefined,
                            })
                          : undefined
                      );
                      setStartDate(date);
                    }}
                    initialFocus
                    numberOfMonths={2}
                    {...field}
                  />
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="end_date"
          render={({ field }) => (
            <FormItem>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      id="date"
                      variant={"outline"}
                      className={cn("w-56 justify-start text-left font-normal", !endDate && "text-muted-foreground")}
                    >
                      {endDate?.from ? (
                        endDate.to ? (
                          <>
                            {format(endDate.from, "dd.MM.yyyy")} - {format(endDate.to, "dd.MM.yyyy")}
                          </>
                        ) : (
                          format(endDate.from, "dd.MM.yyyy")
                        )
                      ) : (
                        <span>Конец обучения</span>
                      )}
                      <CalendarIcon className="w-4 h-4 ml-auto" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="range"
                    selected={endDate}
                    onSelect={(date) => {
                      field.onChange(
                        date?.from || date?.to
                          ? JSON.stringify({
                              from: date?.from ? format(date?.from, "yyyy-MM-dd") : undefined,
                              to: date?.to ? format(date?.to, "yyyy-MM-dd") : undefined,
                            })
                          : undefined
                      );
                      setEndDate(date);
                    }}
                    initialFocus
                    numberOfMonths={2}
                    {...field}
                  />
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="plan"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn("w-56 justify-between", !field.value && "text-muted-foreground")}
                      disabled={isLoading || error}
                    >
                      <p className="truncate">
                        {field.value ? Object.values(Plan)?.find((plan) => plan == field.value) : "План"}
                      </p>
                      <CaretSortIcon className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-56 p-0">
                  <Command>
                    <CommandGroup>
                      {Object.values(Plan)?.map((plan) => (
                        <CommandItem
                          value={plan}
                          key={plan}
                          onSelect={(val) => field.onChange(val == field.value ? undefined : val)}
                        >
                          {plan}
                          <CheckIcon
                            className={cn("ml-auto h-4 w-4", plan == field.value ? "opacity-100" : "opacity-0")}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default Filters;
