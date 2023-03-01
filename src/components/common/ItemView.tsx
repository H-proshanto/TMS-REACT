import { useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { MemberItem } from "../../react-app-env";
import "../../styles/ItemView.css";
import { getSingleMember } from "../../utils/api/private/members";
import { getSingleTask } from "../../utils/api/private/tasks";
import { getTitle } from "../../utils/helpers/common";
import { useAppSelector } from "../../utils/redux/hooks";
import Confirm from "./Confirm";

export const loader = async ({
  request,
  params,
}: {
  request: any;
  params: any;
}) => {
  if (request.url.includes("members")) {
    const response = await getSingleMember(params.memberId);
    if (response.status !== 200) {
      throw new Response("Something Occured", { status: 404 });
    }
    return response.data.member;
  } else {
    const response = await getSingleTask(params.taskId);
    if (response.status !== 200) {
      throw new Response("Something Occured", { status: 404 });
    }
    return response.data.task;
  }
};

const ItemView = () => {
  const item: any = useLoaderData();
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const title: string = getTitle(location.pathname);
  const taskList = useAppSelector((state) =>
    item?.name ? state.taskList : null
  )?.filter((taskItem) => taskItem.memberId === item?.id);

  const handleBackBtnClick = () => {
    navigate(-1);
  };
  const handleEditBtnClick = () => {
    navigate(`${location.pathname}/edit`, {
      state: { item, previousPath: location.pathname },
    });
  };
  const handleDeleteBtnClick = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {modalOpen ? (
        <Confirm isOpen={modalOpen} setIsOpen={setModalOpen} />
      ) : (
        <div className="item_view_container ">
          <div className="item_view_btn_container">
            <button onClick={handleBackBtnClick} className="back_btn">
              Back
            </button>
            <div className="item_view_right_btns">
              <button onClick={handleEditBtnClick} className="mutable_button">
                Edit
              </button>
              <button onClick={handleDeleteBtnClick} className="mutable_button">
                Delete
              </button>
            </div>
          </div>
          <div className="view_body">
            {item?.name && (
              <div className="view_text_content">
                <h3>Member Name:</h3>
                <p>{item.name}</p>
              </div>
            )}
            {item?.title && (
              <div className="view_text_content">
                <h3>Task Title:</h3>
                <p>{item?.title}</p>
              </div>
            )}
            {item?.description && (
              <div className="view_text_content">
                <h3>Task Description:</h3>
                <p>{item?.description}</p>
              </div>
            )}
            {item?.Member?.name && (
              <div className="view_text_content assigned_to">
                <h3>Assigned To:</h3>
                <p>{item?.Member?.name}</p>
              </div>
            )}
            <ul className="view_task_list">
              {taskList?.length ? (
                <>
                  <h3>Tasks: </h3>
                  {taskList.map((filteredTaskItem) => {
                    return (
                      <li key={filteredTaskItem.id} className="view_task">
                        <button
                          onClick={() =>
                            navigate(`/tasks/${filteredTaskItem.id}`, {
                              state: { item: filteredTaskItem },
                            })
                          }
                          className="item_link"
                        >
                          {filteredTaskItem.title}
                        </button>
                      </li>
                    );
                  })}
                </>
              ) : null}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemView;
