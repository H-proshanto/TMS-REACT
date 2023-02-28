import { addMember, editMember } from "../api/private/members";
import { addTask, editTask } from "../api/private/tasks";

export const onSubmitFnSelector = (requestUrl: string) => {
  console.log(requestUrl);
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
