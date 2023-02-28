import { MemberFormData } from "../../../react-app-env";
import { privateAxios } from "../axios";
import { API_MEMBERS_URL } from "../config";

export const getAllMembers = async () => {
  const response = await privateAxios({
    method: "GET",
    url: API_MEMBERS_URL,
  });

  return response.data;
};

export const getSingleMembers = async (memberId: number) => {
  const url = `${API_MEMBERS_URL}/${memberId}`;
  const response = await privateAxios({
    method: "GET",
    url,
  });

  return response.data;
};

export const addMember = async (data: MemberFormData) => {
  const response = await privateAxios({
    method: "POST",
    url: API_MEMBERS_URL,
    data,
  });

  return response.data;
};

export const editMember = async (data: MemberFormData) => {
  const response = await privateAxios({
    method: "PATCH",
    url: API_MEMBERS_URL,
    data,
  });

  return response.data;
};

export const deleteMember = async (memberId: number) => {
  const url = `${API_MEMBERS_URL}/${memberId}`;
  const response = await privateAxios({
    method: "DELETE",
    url,
  });

  return response.data;
};
