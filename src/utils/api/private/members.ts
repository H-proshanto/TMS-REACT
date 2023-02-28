import { privateAxios } from "../axios";
import { API_ALL_MEMBERS_URL } from "../config";

export const getAllMembers = async () => {
  const response = await privateAxios({
    method: "GET",
    url: API_ALL_MEMBERS_URL,
  });

  return response.data;
};
