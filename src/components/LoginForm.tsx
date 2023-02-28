import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { useForm, Resolver } from "react-hook-form";
import "../styles/LoginForm.css";
import { formErrorObject, LoginFormData } from "../react-app-env";
import { login } from "../utils/redux/states/user";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../utils/redux/hooks";

type FormErrors = {
  email?: formErrorObject;
  password?: formErrorObject;
};

const resolver: Resolver<LoginFormData> = async (values) => {
  const errors: FormErrors = {};
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
  } else if (values.password.length < 2) {
    errors.password = {
      type: "required",
      message: "Password must be at least 8 characters.",
    };
  }

  return {
    values: values.email ? values : {},
    errors: errors,
  };
};

const LoginForm = () => {
  const { status } = useAppSelector((state: any) => state?.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "resolved") {
      navigate("/home", { replace: false });
    }
  }, [status]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver });

  return (
    <div id="login">
      <header id="logo_container">
        <img className="logo" src={logo} alt="phoenix logo" />
      </header>

      <form
        onSubmit={handleSubmit((data: LoginFormData) => dispatch(login(data)))}
      >
        <div className="form_container">
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
          <input className="form_button" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
