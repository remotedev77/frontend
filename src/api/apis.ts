import { AnswersArgs } from "../types";
import { instance } from "./api.config";
import { User } from "../pages/AdminPage/widgets";
import {
  Answer,
  Question,
} from "../pages/AdminPage/widgets/QuestionTable/question-table.vm.ts";
import { Manager } from "../pages/AdminPage/widgets/ManagersTable";
import { Company } from "../pages/AdminPage/admin-page.vm.ts";

const getData = async (path: string) => (await instance.get(path)).data;
const postData = async (path: string, { arg }: { arg: AnswersArgs[] }) =>
  (await instance.post(path, arg)).data;

export const postUser = async (path: string, data: User) => {
  (await instance.post(path, data)).data;
};
export const postManager = async (path: string, data: Manager) => {
  (await instance.post(path, data)).data;
};
export const postCompany = async (path: string, data: Company) => {
  (await instance.post(path, data)).data;
};
export const postQuestion = async (path: string, data: Question) => {
  (await instance.post(path, data)).data;
};

export const getUser = async (path: string, data: never) => {
  (await instance.get(path, data)).data;
};
export const postCSVUsers = async (path: string, data: FormData) => {
  (
    await instance.post(path, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  ).data;
};
export const postCSVQuestions = async (path: string, data: FormData) => {
  (
    await instance.post(path, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  ).data;
};
export const updateUser = async (path: string, data: User) => {
  (await instance.put(path, data)).data;
};
export const updateManager = async (path: string, data: Manager) => {
  (await instance.put(path, data)).data;
};
export const updateCompany = async (path: string, data: Company) => {
  (await instance.put(path, data)).data;
};
export const updateQuestion = async (path: string, data: Question) => {
  (await instance.put(path, data)).data;
};
export const updateAnswer = async (path: string, data: Answer[]) => {
  (await instance.put(path, data)).data;
};

export const deleteById = async (path: string, id: number) => {
  (await instance.delete(path + `${id}/`)).data;
};

export { getData, postData };
