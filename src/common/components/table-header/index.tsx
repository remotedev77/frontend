import { forwardRef } from "react";

import { Search } from "../search";
import { Button } from "../ui/button";

import { DownloadIcon } from "@radix-ui/react-icons";

type TableHeader = {
  searchProps: React.InputHTMLAttributes<HTMLInputElement>;
  CreateDialog?: () => JSX.Element;
  UploadDialog?: () => JSX.Element;
  downloadLink?: string;
};

const TableHeader = forwardRef<HTMLInputElement, TableHeader>(
  ({ searchProps, CreateDialog, UploadDialog, downloadLink }, ref) => {
    return (
      <div className="flex gap-4">
        <Search {...searchProps} ref={ref} />

        {CreateDialog ? <CreateDialog /> : null}

        <div className="flex justify-between w-full gap-4">
          {UploadDialog ? <UploadDialog /> : null}

          {downloadLink !== undefined ? (
            <a href={downloadLink} download target="_self">
              <Button variant="outline" className="ml-auto">
                <DownloadIcon className="w-4 h-4 mr-2" /> Скачать шаблон
              </Button>
            </a>
          ) : null}
        </div>
      </div>
    );
  }
);

export { TableHeader };
