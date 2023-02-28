import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { useForm, Resolver } from "react-hook-form";
import "../styles/LoginForm.css";
import { formErrorObject, RegistrationFormData } from "../react-app-env";
import { registration } from "../utils/redux/states/user";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../utils/redux/hooks";

type FormErrors = {
  name?: formErrorObject;
  email?: formErrorObject;
  password?: formErrorObject;
  password2?: formErrorObject;
};

const resolver: Resolver<RegistrationFormData> = async (values) => {
  const errors: FormErrors = {};
  if (!values.name) {
    errors.email = {
      type: "required",
      message: "Name is required.",
    };
  }

  if (!values.email) {
    errors.email = {
      type: "required",
      message: "Email is required.",
    };
  } else if (!values.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
    errors.email = {
      type: "required",
      message: "The input must be an email",
    };
  }

  if (!values.password) {
    errors.password = {
      type: "required",
      message: "Password is required.",
    };
  } else if (values.password.length < 8) {
    errors.password = {
      type: "required",
      message: "Password must be at least 8 characters.",
    };
  }

  if (values.password !== values.password2) {
    errors.password2 = {
      type: "required",
      message: "Passwords must match",
    };
  }

  return {
    values: values.email ? values : {},
    errors: errors,
  };
};

const RegistrationForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegistrationFormData>({ resolver });
  const { status } = useAppSelector((state: any) => state?.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "resolved") {
      navigate("/home", { replace: false });
    }
  }, [status]);
  return (
    <div id="login">
      <header id="logo_container">
        <img className="logo" src={logo} alt="phoenix logo" />
      </header>

      <form
        onSubmit={handleSubmit((values: RegistrationFormData) =>
          dispatch(registration(values))
        )}
      >
        <div className="form_container">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input
            className="form_input"
            {...register("name")}
            placeholder="Enter your name"
          />
          {errors.name && (
            <span className="error_message">{errors.name.message}</span>
          )}
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            className="form_input"
            {...register("email")}
            placeholder="Enter your email"
          />
          {errors.email && (
            <span className="error_message">{errors.email.message}</span>
          )}
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            className="form_input"
            {...register("password")}
            placeholder="Enter your password"
          />
          {errors.password && (
            <span className="error_message">{errors.password.message}</span>
          )}
          <label htmlFor="password2" className="form-label">
            Retype Password
          </label>
          <input
            className="form_input"
            {...register("password2")}
            placeholder="Enter your password"
          />
          {errors.password2 && (
            <span className="error_message">{errors.password2.message}</span>
          )}

          <input className="form_button" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
