import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { CreateManager } from "./components/create/create-manager";
import { TableHeader } from "@/common/components/table-header";
import { DataTable } from "@/common/components/ui/data-table";
import { columns } from "./components/columns";

import useManagerStore from "@/services/state/managersStore";
import { useGetManagers } from "./hooks/useGetManagers";
import { Manager } from "./models";
import { FilterParams } from "@/common/types";
import Filters from "./components/filters";
import { ManagerDetails } from "./components/manager-details";

const Managers = () => {
  const filterForm = useForm<FilterParams>();
  const { setMutate, setDetailsDialogOpen, setManagerDetails } = useManagerStore();

  const { data, isLoading, isValidating, error, mutate, pagination } = useGetManagers(filterForm.watch());

  const handleManagersDetail = (managerData: Manager) => {
    setManagerDetails(managerData);
    setDetailsDialogOpen();
  };
  useEffect(() => {
    setMutate(mutate);
  }, [mutate, setMutate]);

  if (error) return <>Error</>;
  return (
    <div className="space-y-4">
      <ManagerDetails />
      <TableHeader
        searchProps={{ placeholder: "Поиск" }}
        searchControl={filterForm.control}
        CreateDialog={CreateManager}
      />
      <Filters form={filterForm} />
      <DataTable
        columns={columns}
        data={data}
        pagination={pagination}
        loading={isLoading || isValidating}
        handleDetails={handleManagersDetail}
      />
    </div>
  );
};

export { Managers };
