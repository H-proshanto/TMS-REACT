import React, { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { TaskItem } from "../react-app-env";
import "../styles/Task.css";
import { getAllTasks } from "../utils/api/private/tasks";
import { useAppDispatch } from "../utils/redux/hooks";
import { setTaskList } from "../utils/redux/states/task";

export const taskLoader = async () => {
  const response = await getAllTasks();
  if (response.status !== 200) {
    throw new Response("Something Occured", { status: 404 });
  }
  return response.data.tasks;
};

const Tasks = () => {
  const taskList = useLoaderData() as TaskItem[];
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    navigate("/tasks/add");
  };

  useEffect(() => {
    dispatch(setTaskList(taskList));
  }, [taskList]);

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
          <button onClick={handleClick} className="mutable_button">
            Add new
          </button>
        </div>
        <div>
          <ul className="list">
            {taskList.map((taskItem: TaskItem) => {
              return (
                <li key={taskItem.id} className="item">
                  <button
                    onClick={() =>
                      navigate(`/tasks/${taskItem.id}`, {
                        state: { item: taskItem },
                      })
                    }
                    className="item_link"
                  >
                    {taskItem.title}
                  </button>
                  <button
                    onClick={() =>
                      navigate(`/members/${taskItem.memberId}`, {
                        state: { item: taskItem.Member },
                      })
                    }
                    className="item_link"
                  >
                    {taskItem.Member.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Tasks;
