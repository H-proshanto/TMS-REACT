import { LoginFormData, RegistrationFormData } from "../../../react-app-env";
import { initPrivateAxios, publicAxios } from "../axios";
import { API_LOGIN_URL, API_REGISTRATION_URL } from "../config";

export const loginMethod = async (data: LoginFormData) => {
  const response = await publicAxios({
    method: "POST",
    url: API_LOGIN_URL,
    data,
  });
  initPrivateAxios(response.data?.token);

  return response.data;
};

export const registrationMethod = async (data: RegistrationFormData) => {
  const response = await publicAxios({
    method: "POST",
    url: API_REGISTRATION_URL,
    data,
  });
  initPrivateAxios(response.data?.token);

  return response.data;
};
