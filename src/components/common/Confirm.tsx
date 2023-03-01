import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/Confirm.css";
import { deleteFnSelector } from "../../utils/helpers/submit-btn";

const Confirm: React.FC<{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleConfirm = async () => {
    const deleteFn = deleteFnSelector(location.pathname);
    const id = location.pathname.at(-1) as string;
    await deleteFn(id);
    navigate(-1);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="confirmation_modal">
          <button
            onClick={handleConfirm}
            className="mutable_button confirmation_confirm"
          >
            Confirm
          </button>
          <button
            onClick={handleCancel}
            className="mutable_button confirmation_cancel"
          >
            Cancel
          </button>
        </div>
      )}
    </>
  );
};

export default Confirm;
