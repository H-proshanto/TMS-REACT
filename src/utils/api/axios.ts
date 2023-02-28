import axios from "axios";
import { STORAGE_TOKEN_KEY } from "../storage/config";
import { API_BASE_URL } from "./config";

export const publicAxios = axios.create({ baseURL: API_BASE_URL });
export const privateAxios = axios.create({ baseURL: API_BASE_URL });

const init = () => {
  const token = localStorage.getItem(STORAGE_TOKEN_KEY);
  if (token) {
    const parsedToken = JSON.parse(token);
    initPrivateAxios(parsedToken);
  }
};

export const initPrivateAxios = (token: string) => {
  privateAxios.defaults.headers.common = {
    Authorization: `Bearer ${token}`,
  };
  localStorage.setItem(STORAGE_TOKEN_KEY, JSON.stringify(token));
};

init();
