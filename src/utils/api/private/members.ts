import { MemberEditFormData, MemberFormData } from "../../../react-app-env";
import { privateAxios } from "../axios";
import { API_MEMBERS_URL } from "../config";

export const getAllMembers = async () => {
  const response = await privateAxios({
    method: "GET",
    url: API_MEMBERS_URL,
  });

  return response;
};

export const getSingleMember = async (memberId: number) => {
  const url = `${API_MEMBERS_URL}/${memberId}`;
  const response = await privateAxios({
    method: "GET",
    url,
  });

  return response;
};

export const addMember = async (data: MemberFormData) => {
  const response = await privateAxios({
    method: "POST",
    url: API_MEMBERS_URL,
    data,
  });

  return response.data;
};

export const editMember = async (data: MemberEditFormData) => {
  const url = `${API_MEMBERS_URL}/${data.id}`;
  const response = await privateAxios({
    method: "PATCH",
    url,
    data,
  });

  return response.data;
};

export const deleteMember = async (memberId: string) => {
  const url = `${API_MEMBERS_URL}/${memberId}`;
  const response = await privateAxios({
    method: "DELETE",
    url,
  });

  return response.data;
};
