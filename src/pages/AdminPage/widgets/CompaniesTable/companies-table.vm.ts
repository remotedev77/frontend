import { makeAutoObservable } from "mobx";
import { deleteById } from "../../../../api/apis.ts";
import { Company } from "@/pages/AdminPage/admin-page.vm.ts";

export const CompaniesTableVm = new (class {
  private _searchString: string = "";
  private _companies: Company[] = [];

  getCompanies = () => {
    return this._companies;
  };

  setCompanies = (data: Company[]) => {
    this._companies = data;
  };
  onSearchChange = (value: string) => {
    this._searchString = value;
  };
  get searchString() {
    return this._searchString;
  }
  deleteCompany = async (id: number) => {
    await deleteById(`/admin-api/companies/`, id);
  };

  filter = (data: Company[]) => {
    this.setCompanies(data);
    this._companies = this._companies.filter(
      (c) => this.searchString.trim() === "" || c.company_name.toLowerCase().includes(this.searchString.toLowerCase()),
    );
  };

  constructor() {
    makeAutoObservable(this);
  }
})();
