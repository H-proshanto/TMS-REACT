import { addMember, deleteMember, editMember } from "../api/private/members";
import { addTask, deleteTask, editTask } from "../api/private/tasks";
import { updateMemberList } from "../redux/states/member";
import { updateTaskList } from "../redux/states/task";

export const onSubmitFnSelector = (requestUrl: string) => {
  if (requestUrl.includes("tasks")) {
    if (requestUrl.includes("add")) {
      return addTask;
    } else {
      return editTask;
    }
  } else {
    if (requestUrl.includes("add")) {
      return addMember;
    } else {
      return editMember;
    }
  }
};

export const dispacthFnSelector = (requestUrl: string) => {
  if (requestUrl.includes("tasks")) {
    return updateTaskList;
  } else {
    return updateMemberList;
  }
};

export const deleteFnSelector = (requestUrl: string) => {
  if (requestUrl.includes("tasks")) {
    return deleteTask;
  } else {
    return deleteMember;
  }
};
