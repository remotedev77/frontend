import { forwardRef } from "react";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

type SearchProps = React.InputHTMLAttributes<HTMLInputElement>;

const Search = forwardRef<HTMLInputElement, SearchProps>((props, ref) => {
  return (
    <form className="relative flex items-center w-full max-w-sm mr-10">
      <Input {...props} ref={ref} className="focus-visible:ring-0" />
      <Button size="icon" className="absolute w-12 -right-10 bg-alternative">
        <MagnifyingGlassIcon className="w-6 h-6" />
      </Button>
    </form>
  );
});

export { Search };
