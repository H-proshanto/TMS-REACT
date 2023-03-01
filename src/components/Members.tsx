import React, { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { MemberItem } from "../react-app-env";
import "../styles/Member.css";
import { getAllMembers } from "../utils/api/private/members";
import { useAppDispatch } from "../utils/redux/hooks";
import { setMemberList } from "../utils/redux/states/member";

export const membersLoader = async () => {
  const response = await getAllMembers();
  if (response.status !== 200) {
    throw new Response("Something Occured", { status: 404 });
  }
  return response.data.members;
};

const Members = () => {
  const memberList = useLoaderData() as MemberItem[];
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    navigate(`/members/add`);
  };

  useEffect(() => {
    dispatch(setMemberList(memberList));
  }, [memberList]);

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
          <ul className="list">
            {memberList.map((memberItem: MemberItem) => {
              return (
                <li key={memberItem.id} className="item">
                  <button
                    onClick={() =>
                      navigate(`/members/${memberItem.id}`, {
                        state: { item: memberItem },
                      })
                    }
                    className="item_link"
                  >
                    {memberItem.name}
                  </button>
                  <p className="member_item_right">{2}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Members;
