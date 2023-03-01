import { TaskEditFormData, TaskFormData } from "../../../react-app-env";
import { privateAxios } from "../axios";
import { API_TASKS_URL } from "../config";

export const getAllTasks = async () => {
  const response = await privateAxios({
    method: "GET",
    url: API_TASKS_URL,
  });

  return response.data;
};

export const getSingleTask = async (taskId: number) => {
  const url = `${API_TASKS_URL}/${taskId}`;
  const response = await privateAxios({
    method: "GET",
    url,
  });

  return response.data;
};

export const addTask = async (data: TaskFormData) => {
  const response = await privateAxios({
    method: "POST",
    url: API_TASKS_URL,
    data,
  });

  return response.data;
};

export const editTask = async (data: TaskEditFormData) => {
  const url = `${API_TASKS_URL}/${data.id}`;
  const response = await privateAxios({
    method: "PATCH",
    url,
    data,
  });

  return response.data;
};

export const deleteTask = async (taskId: string) => {
  const url = `${API_TASKS_URL}/${taskId}`;
  const response = await privateAxios({
    method: "DELETE",
    url,
  });

  return response.data;
};
