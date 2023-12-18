import { AxiosRequestConfig } from "axios";
import { instance } from ".";

const getData = async (path: string) => (await instance.get(path)).data;
const postData = async (path: string, { arg }: { arg: unknown }, config?: AxiosRequestConfig) =>
  (await instance.post(path, arg, config)).data;
const putData = async (path: string, { arg }: { arg: unknown }) => (await instance.put(path, arg)).data;
const deleteData = async (path: string) => (await instance.delete(path)).data;

export { postData, getData, putData, deleteData };
