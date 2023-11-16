import { makeAutoObservable } from "mobx";
import { postCSVQuestions } from "@/api/apis.ts";
import { AdminPageVm } from "@/pages/AdminPage/admin-page.vm.ts";

export const CsvVm = new (class {
  private CSV: File | undefined;
  setFile = (file: File) => {
    this.CSV = file;
  };

  get file() {
    return this.CSV;
  }
  postFile = async () => {
    const formData = new FormData();
    formData.append("filename", this.CSV!);
    console.log("oki", AdminPageVm.companies);
    formData.append("organization_id", "1");
    console.log(formData.get("filename"));
    postCSVQuestions("/admin-api/upload-csv-question-file/", formData)
      .catch((err) => console.log(err))
      .catch((err) => console.log(err.data.headers));
  };
  constructor() {
    makeAutoObservable(this);
  }
})();
