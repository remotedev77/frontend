import { AnswersArgs } from "../types";
import { instance } from "./api.config";

const getData = async (path: string) => (await instance.get(path)).data;
const postData = async (path: string, { arg }: { arg: AnswersArgs[] }) =>
  (await instance.post(path, arg)).data;

export { getData, postData };
