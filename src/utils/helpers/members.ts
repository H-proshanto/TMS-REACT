import { TaskItem } from "../../react-app-env";

export const getTaskCount = (taskList: TaskItem[], memberId: number) => {
  const count = taskList.reduce(
    (taskCount, taskItem) =>
      taskItem.memberId === memberId ? taskCount + 1 : taskCount,
    0
  );
  return count;
};
