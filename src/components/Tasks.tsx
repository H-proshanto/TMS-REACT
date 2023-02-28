import * as React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { TaskItem } from "../react-app-env";
import "../styles/Task.css";
import { getAllTasks } from "../utils/api/private/tasks";

export const loader = async () => {
  const response: { tasks: TaskItem[] } = await getAllTasks();
  return response.tasks;
};

const Tasks = () => {
  const taskList = useLoaderData() as TaskItem[];

  return (
    <div className="title_container">
      <section>
        <h3>Welcome to task management system</h3>
        <p className="title_description task_description">
          You will find all tasks here.
        </p>
      </section>
      <section>
        <div className="common_title_container">
          <p className="body_title">Here is all tasks: </p>
          <button className="mutable_button">Add new</button>
        </div>
        <div>
          <ol className="list">
            {taskList.map((taskItem: TaskItem) => {
              return (
                <li key={taskItem.id} className="item">
                  <NavLink to={`/tasks:${taskItem.id}`} className="item_link">
                    {`${taskItem.id}. ${taskItem.title}`}
                  </NavLink>
                  <NavLink
                    to={`/members:${taskItem.memberId}`}
                    className="member_link"
                  >
                    {taskItem.Member.name}
                  </NavLink>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </div>
  );
};

export default Tasks;
