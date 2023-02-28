import * as React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="title_container">
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
