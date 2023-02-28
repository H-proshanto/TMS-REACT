import * as React from "react";
import { Resolver, useForm } from "react-hook-form";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import {
  InputItem,
  MemberFormData,
  MemberItem,
  TaskFormData,
} from "../../react-app-env";
import "../../styles/Form.css";
import { onSubmitFnSelector } from "../../utils/helpers/submit-btn";

const Form: React.FC<{
  resolver: Resolver<MemberFormData, any> | Resolver<TaskFormData, any>;
  inputList: InputItem[];
  pageTitle: string;
  hasMemberList?: boolean;
}> = ({ resolver, inputList, pageTitle, hasMemberList = false }) => {
  const memberList = useLoaderData() as MemberItem[];
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<any>({ resolver });

  const getErrorMessage = (error: any) => {
    const errorMessage: string = error?.message ? error.message : "";
    return errorMessage;
  };

  const handleCancelClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    navigate(-1);
  };

  return (
    <div className="form_container">
      <h4>{pageTitle}</h4>
      <form
        onSubmit={handleSubmit(
          async (values: MemberFormData | TaskFormData) => {
            const selectedFn: any = onSubmitFnSelector(location.pathname);
            await selectedFn(values);
            navigate(-1);
          }
        )}
      >
        <div>
          {inputList.map((inputItem, index) => {
            return (
              <div key={index}>
                <div className="form_field">
                  <label htmlFor={inputItem.id} className="form-label">
                    {inputItem.label}
                  </label>
                  <input
                    className={
                      inputItem.id === "description"
                        ? "common_form_description"
                        : "common_form_input"
                    }
                    {...register(inputItem.id)}
                    placeholder={inputItem.placeholder}
                    // value={}
                  />
                </div>
                {errors[inputItem.key] && (
                  <span className="error_message">
                    {getErrorMessage(errors[inputItem.key])}
                  </span>
                )}
              </div>
            );
          })}
          {hasMemberList && (
            <div className="member_list_container">
              <label htmlFor="memeberId" className="member_list_label">
                Assign to:
              </label>
              <select {...register("memberId")} className="member_list">
                {memberList.map((memerItem: MemberItem, index: number) => {
                  return <option value={memerItem.id}>{memerItem.name}</option>;
                })}
              </select>
            </div>
          )}
          <div className="form_button_container">
            <button className="mutable_button" onClick={handleCancelClick}>
              Cancel
            </button>
            <input className="mutable_button" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
