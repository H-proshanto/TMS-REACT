import * as React from "react";
import { useLoaderData } from "react-router-dom";
import "../styles/Task.css";
import { getAllTasks } from "../utils/api/private/tasks";

export async function loader() {
  const response = await getAllTasks();
  return response.tasks;
}

const Tasks = () => {
  const taskList = useLoaderData();
  console.log(taskList);
  return (
    <div className="title_container">
      <section>
        <h3>Welcome to task management system</h3>
        <p className="title_description task_description">
          You will find all tasks here.
        </p>
      </section>
      <section className="task_body">
        <div className="tasks_title_container">
          <p className="body_title">Here is all tasks: </p>
          <button className="mutable_button">Add new</button>
        </div>
        <div className="task_list_container"></div>
      </section>
    </div>
  );
};

export default Tasks;
