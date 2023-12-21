import { UseFormReturn } from "react-hook-form";

import { Button } from "@/common/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/common/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/common/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandItem } from "@/common/components/ui/command";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn, notes } from "@/common/lib/utils";
import { FilterParams } from "@/common/types";

type Filters = { form: UseFormReturn<FilterParams, unknown, undefined> };

const Filters = ({ form }: Filters) => {
  return (
    <Form {...form}>
      <form className="flex flex-row w-full gap-2">
        <FormField
          control={form.control}
          name="note"
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
                        {field.value ? notes?.find((note) => note.value === field.value)?.name : "Тип вопроса"}
                      </p>
                      <CaretSortIcon className="w-4 h-4 ml-2 opacity-50 shrink-0" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-56 p-0">
                  <Command>
                    <CommandEmpty>Тип вопроса не найдена.</CommandEmpty>
                    <CommandGroup>
                      {notes?.map((note) => (
                        <CommandItem
                          value={note.value}
                          key={note.name}
                          onSelect={(val) => field.onChange(val == field.value ? undefined : val)}
                        >
                          {note.name}
                          <CheckIcon
                            className={cn("ml-auto h-4 w-4", note.value === field.value ? "opacity-100" : "opacity-0")}
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
