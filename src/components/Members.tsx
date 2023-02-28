import * as React from "react";
import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { MemberItem } from "../react-app-env";
import "../styles/Member.css";
import { getAllMembers } from "../utils/api/private/members";

export const loader = async () => {
  const response: { members: MemberItem[] } = await getAllMembers();
  return response.members;
};

const Members = () => {
  const memberList = useLoaderData() as MemberItem[];
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/members/add`);
  };

  return (
    <div className="title_container">
      <section>
        <h3>All Members</h3>
        <p className="title_description task_description">
          You will find all members here.
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
          <ol className="list">
            {memberList.map((memberItem: MemberItem) => {
              return (
                <li key={memberItem.id} className="item">
                  <NavLink
                    to={`/members/${memberItem.id}/edit`}
                    className="item_link"
                  >
                    {memberItem.name}
                  </NavLink>
                  <p className="member_item_right">{2}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </div>
  );
};

export default Members;
