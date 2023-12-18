import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./table";
import { Skeleton } from "./skeleton";
import { Button } from "./button";

import { PaginationModel } from "@/common/types";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  pagination?: PaginationModel;
  loading?: boolean;
  handleDetails?: (row: TData) => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  pagination,
  loading,
  handleDetails,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="whitespace-nowrap">
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {loading ? (
              new Array(10).fill(1).map((_, index) => (
                <TableRow key={index}>
                  {table.getAllColumns().map((_, index) => (
                    <TableCell key={index} className="h-12">
                      <Skeleton className="w-full h-3.5" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="pointer-events-auto select-none"
                  onClick={() => handleDetails && handleDetails(row.original)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  Без результатов.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {pagination ? (
        <div className="flex items-center justify-between py-4 space-x-2">
          <div className="space-x-2">
            <Button
              className="w-8 h-8 p-0"
              variant="outline"
              size="sm"
              onClick={pagination.setFirstPage}
              disabled={!pagination?.hasPreviousPage}
            >
              <DoubleArrowLeftIcon className="w-4 h-4" />
            </Button>
            <Button
              className="w-8 h-8 p-0"
              variant="outline"
              size="sm"
              onClick={pagination.previousPage}
              disabled={!pagination?.hasPreviousPage}
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-x-2">
            {new Array(pagination.totalPage).fill(1).map((_, index) =>
              pagination.totalPage > 10 ? (
                index + 1 <= 4 ||
                index + 1 >= pagination.totalPage - 4 ||
                (index + 1 >= pagination.pageNum - 1 && index + 1 <= pagination.pageNum + 1) ? (
                  <Button
                    key={index}
                    variant={index + 1 === pagination.pageNum ? "default" : "outline"}
                    size="sm"
                    onClick={() => pagination.setPage(index + 1)}
                  >
                    {index + 1}
                  </Button>
                ) : index + 1 === pagination.pageNum + 4 ? (
                  <Button
                    key={index}
                    variant={index + 1 === pagination.pageNum ? "default" : "outline"}
                    size="sm"
                    disabled
                  >
                    ...
                  </Button>
                ) : null
              ) : (
                <Button
                  key={index}
                  variant={index + 1 === pagination.pageNum ? "default" : "outline"}
                  size="sm"
                  onClick={() => pagination.setPage(index + 1)}
                >
                  {index + 1}
                </Button>
              )
            )}
          </div>

          <div className="space-x-2">
            <Button
              className="w-8 h-8 p-0"
              variant="outline"
              size="sm"
              onClick={pagination.nextPage}
              disabled={!pagination?.hasNextPage}
            >
              <ChevronRightIcon className="w-4 h-4" />
            </Button>
            <Button
              className="w-8 h-8 p-0"
              variant="outline"
              size="sm"
              onClick={pagination.setLastPage}
              disabled={!pagination?.hasNextPage}
            >
              <DoubleArrowRightIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
