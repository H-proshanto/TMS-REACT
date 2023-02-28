/// <reference types="react-scripts" />

export type formErrorObject = {
  type: string;
  message: string;
};

export type LoginFormData = {
  email: string;
  password: string;
};

export type RegistrationFormData = {
  name: string;
  email: string;
  password: string;
  password2: string;
};

export type TaskFormData = {
  title: string;
  description: string;
  memberId: number;
};

export type TaskFormErrors = {
  title?: formErrorObject;
  description?: formErrorObject;
  memberId?: formErrorObject;
};

export type MemberFormData = {
  name: string;
};

export type MemberFormErrors = {
  name?: formErrorObject;
};

export interface UserType {
  status: string;
  isLoggedIn: boolean;
  info: {
    id: number | null;
    name: string;
    email: string;
    createdAt: Date | string | null;
    updatedAt: Date | string | null;
  };
  error: string;
}

export type NavItem = {
  name: string;
  link: string;
};

export type MemberItem = {
  createdAt: string;
  id: number;
  name: string;
  updatedAt: string;
  userId: number;
};

export type TaskItem = {
  Member: MemberItem;
  createdAt: string;
  description: string;
  id: number;
  memberId: number;
  title: string;
  updatedAt: string;
  userId: number;
};

export type InputItem = {
  id: string;
  key: string;
  label: string;
  placeholder: string;
};
