import * as React from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { useLoaderData, useNavigate } from "react-router-dom";
import { MemberItem, TaskItem } from "../react-app-env";
import "../styles/Home.css";
import { getAllMembers } from "../utils/api/private/members";
import { getAllTasks } from "../utils/api/private/tasks";
import { setMemberList } from "../utils/redux/states/member";
import { setTaskList } from "../utils/redux/states/task";

export const loader = async () => {
  const taskResponse = await getAllTasks();
  const memberResponse = await getAllMembers();
  if (taskResponse.status !== 200 || memberResponse.status !== 200) {
    throw new Response("Something Occured", { status: 404 });
  }
  return {
    tasks: taskResponse.data.tasks,
    members: memberResponse.data.members,
  };
};

const Home = () => {
  const navigate = useNavigate();
  const loaderData = useLoaderData() as {
    tasks: TaskItem[];
    members: MemberItem[];
  };
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setMemberList(loaderData.members));
    dispatch(setTaskList(loaderData.tasks));
  }, []);

  return (
    <div className="title_container">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section>
        <h3>Welcome to task management system</h3>
        <p className="title_description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, odio
          illo tempora, cumque laboriosam mollitia iusto suscipit unde sequi
          possimus aperiam, aspernatur consectetur recusandae consequatur
          cupiditate repellendus sint quidem dolorem.
        </p>
      </section>
      <section className="home_body">
        <h3>Get started</h3>
        <div className="home_btn_container">
          <button onClick={() => navigate("/tasks")} className="home_btn">
            Tasks
          </button>
          <button onClick={() => navigate("/members")} className="home_btn">
            Members
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
