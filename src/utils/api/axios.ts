import axios from "axios";
import { API_BASE_URL } from "./config";

export const publicAxios = axios.create({ baseURL: API_BASE_URL });
export const privateAxios = axios.create({ baseURL: API_BASE_URL });

export const initPrivateAxios = (token: string) => {
  privateAxios.defaults.headers.common = {
    Authorization: `Bearer ${token}`,
  };
};
