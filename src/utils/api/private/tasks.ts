import { privateAxios } from "../axios";
import { API_ALL_TASKS_URL } from "../config";

export const getAllTasks = async () => {
  const response = await privateAxios({
    method: "GET",
    url: API_ALL_TASKS_URL,
  });

  return response.data;
};
