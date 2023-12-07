import { makeAutoObservable } from "mobx";
import { postCSVUsers } from "@/api/apis.ts";

export const CsvVm = new (class {
  private CSV: File | undefined;
  company: number = 0;
  setFile = (file: File) => {
    this.CSV = file;
  };
  setCompany = (id: number) => {
    this.company = id;
  };
  get file() {
    return this.CSV;
  }
  postFile = async () => {
    const formData = new FormData();
    formData.append("filename", this.CSV!);
    formData.append("organization_id", this.company.toString());
    postCSVUsers("/admin-api/upload-csv-user-file/", formData)
      .catch((err) => console.log(err))
      .catch((err) => console.log(err.data.headers));
  };
  constructor() {
    makeAutoObservable(this);
  }
})();
