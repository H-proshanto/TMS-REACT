import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/ItemView.css";
import { useAppSelector } from "../../utils/redux/hooks";

const ItemView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const options = location.state;
  const taskList = useAppSelector((state) =>
    options?.item?.name ? state.taskList : null
  )?.filter((taskItem) => taskItem.memberId === options?.item?.id);
  console.log(taskList);

  const handleBackBtnClick = () => {
    navigate(-1);
  };
  const handleEditBtnClick = () => {
    navigate(`${location.pathname}/edit`);
  };
  const handleDeleteBtnClick = () => {
    navigate(-1);
  };

  return (
    <div className="item_view_container">
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
        {options?.item?.name && (
          <div className="view_text_content">
            <h3>Member Name:</h3>
            <p>{options.item.name}</p>
          </div>
        )}
        {options?.item?.title && (
          <div className="view_text_content">
            <h3>Task Title:</h3>
            <p>{options?.item?.title}</p>
          </div>
        )}
        {options?.item?.description && (
          <div className="view_text_content">
            <h3>Task Description:</h3>
            <p>{options?.item?.description}</p>
          </div>
        )}
        {options?.item?.Member?.name && (
          <div className="view_text_content assigned_to">
            <h3>Assigned To:</h3>
            <p>{options?.item?.Member?.name}</p>
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
  );
};

export default ItemView;
