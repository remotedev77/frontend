import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { TableHeader } from "@/common/components/table-header";
import { DataTable } from "@/common/components/ui/data-table";
import { CreateUser } from "./components/create/create-user";
import { UploadUsers } from "./components/upload/upload-users";
import { UserDetails } from "./components/user-details";
import Filters from "./components/filters";
import { columns } from "./components/columns";

import useUserStore from "@/services/state/usersStore";
import { useGetUsers } from "./hooks/useGetUsers";
import { User } from "./models";
import { FilterParams } from "@/common/types";

const Users = () => {
  const filterForm = useForm<FilterParams>();
  const { setMutate, setDetailsDialogOpen, setUserDetails } = useUserStore();

  const { data, isLoading, isValidating, error, mutate, pagination } = useGetUsers(filterForm.watch());

  const handleUserDetail = (userData: User) => {
    setUserDetails(userData);
    setDetailsDialogOpen();
  };

  useEffect(() => {
    setMutate(mutate);
  }, [mutate, setMutate]);

  if (error) return <>Error</>;

  return (
    <div className="space-y-4">
      <UserDetails />
      <TableHeader
        searchProps={{ placeholder: "Поиск по ФИО" }}
        searchControl={filterForm.control}
        CreateDialog={CreateUser}
        UploadDialog={UploadUsers}
        downloadLink={"/excel/Users-Template.xlsx"}
      />
      <Filters form={filterForm} />
      <DataTable
        columns={columns}
        data={data}
        pagination={pagination}
        loading={isLoading || isValidating}
        handleDetails={handleUserDetail}
      />
    </div>
  );
};

export { Users };
