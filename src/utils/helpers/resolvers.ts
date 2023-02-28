import { Resolver } from "react-hook-form";
import {
  MemberFormData,
  MemberFormErrors,
  TaskFormData,
  TaskFormErrors,
} from "../../react-app-env";

export const taskFormResolver: Resolver<TaskFormData> = async (
  values: TaskFormData
) => {
  const errors: TaskFormErrors = {};
  if (!values.title) {
    errors.title = {
      type: "required",
      message: "Title is required.",
    };
  }

  if (!values.description) {
    errors.description = {
      type: "required",
      message: "Description is required.",
    };
  }

  if (!values.memberId) {
    errors.memberId = {
      type: "required",
      message: "Must select a member",
    };
  }

  return {
    values: values ? values : {},
    errors: errors,
  };
};

export const memberFormResolver: Resolver<MemberFormData> = async (
  values: MemberFormData
) => {
  const errors: MemberFormErrors = {};
  if (!values.name) {
    errors.name = {
      type: "required",
      message: "Title is required.",
    };
  }

  return {
    values: values ? values : {},
    errors: errors,
  };
};
