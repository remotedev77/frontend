import { forwardRef, useEffect, useState } from "react";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Control, useController } from "react-hook-form";
import useDebounce from "@/common/hooks/useDebounce";
import { FilterParams } from "@/common/types";

type SearchProps = React.InputHTMLAttributes<HTMLInputElement> & { control: Control<FilterParams, unknown> };

const Search = forwardRef<HTMLInputElement, SearchProps>(({ control, ...props }) => {
  const { field } = useController({ name: "search", control });
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 1000);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    field.onChange(debouncedValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <div className="relative flex items-center w-full max-w-sm mr-10">
      <Input className="focus-visible:ring-0" {...props} onChange={handleChange} />
      <Button size="icon" className="absolute w-12 -right-10 bg-alternative">
        <MagnifyingGlassIcon className="w-6 h-6" />
      </Button>
    </div>
  );
});

export { Search };
