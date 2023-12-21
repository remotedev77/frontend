import { useEffect } from "react";

import { CreateCompany } from "./components/create/create-company";
import { TableHeader } from "@/common/components/table-header";
import { DataTable } from "@/common/components/ui/data-table";
import { columns } from "./components/columns";

import useCompaniesStore from "@/services/state/companiesStore";
import { useGetCompanies } from "./hooks/useGetCompanies";
import { Company } from "./models";
import { useForm } from "react-hook-form";
import { FilterParams } from "@/common/types";
import { CompanyDetails } from "./components/company-details";

const Companies = () => {
  const filterForm = useForm<FilterParams>();
  const { setMutate, setDetailsDialogOpen, setCompanyDetails } = useCompaniesStore();

  const { data, isLoading, isValidating, error, mutate, pagination } = useGetCompanies(filterForm.watch());
  const handleCompaniesDetail = (companyData: Company) => {
    setCompanyDetails(companyData);
    setDetailsDialogOpen();
  };

  useEffect(() => {
    setMutate(mutate);
  }, [mutate, setMutate]);

  if (error) return <>Error</>;
  return (
    <div className="space-y-4">
      <CompanyDetails />
      <TableHeader
        searchProps={{ placeholder: "Поиск" }}
        searchControl={filterForm.control}
        CreateDialog={CreateCompany}
      />
      <DataTable
        columns={columns}
        data={data}
        pagination={pagination}
        loading={isLoading || isValidating}
        handleDetails={handleCompaniesDetail}
      />
    </div>
  );
};

export { Companies };
