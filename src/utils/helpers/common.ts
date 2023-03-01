export const getTitle = (path: string) => {
  if (path.includes("add")) {
    if (path.includes("task")) {
      return "Add Task";
    } else {
      return "Add Member";
    }
  } else if (path.includes("edit")) {
    if (path.includes("task")) {
      return "Edit Task";
    } else {
      return "Edit Member";
    }
  } else {
    if (path.includes("task")) {
      return "Task View";
    } else {
      return "Member View";
    }
  }
};
