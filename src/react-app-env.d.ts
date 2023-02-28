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

export type memberItem = {
  createdAt: string;
  id: number;
  name: string;
  updatedAt: string;
  userId: number;
};

export type TaskItem = {
  Member: memberItem;
  createdAt: string;
  description: string;
  id: number;
  memberId: number;
  title: string;
  updatedAt: string;
  userId: number;
};
