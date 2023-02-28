import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/common/ErrorPage";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import Home, { loader as statesLoader } from "./components/Home";
import { store } from "./utils/redux/store";
import { Provider } from "react-redux";
import Tasks from "./components/Tasks";
import Members from "./components/Members";
import Form from "./components/common/Form";
import {
  memberFormInputList,
  taskFormInputList,
} from "./utils/helpers/form-input";
import {
  memberFormResolver,
  taskFormResolver,
} from "./utils/helpers/resolvers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/register",
        element: <RegistrationForm />,
      },
      {
        path: "/home",
        element: <Home />,
        loader: statesLoader,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "/members",
        element: <Members />,
      },
      {
        path: "/members/:memberId/edit",
        element: (
          <Form
            inputList={memberFormInputList}
            resolver={memberFormResolver}
            pageTitle="Edit member"
          />
        ),
        // loader: SingleMemberLoader,
      },
      {
        path: "/members/add",
        element: (
          <Form
            inputList={memberFormInputList}
            resolver={memberFormResolver}
            pageTitle="Add member"
          />
        ),
      },
      {
        path: "/tasks/:taskId/edit",
        element: (
          <Form
            inputList={taskFormInputList}
            resolver={taskFormResolver}
            pageTitle="Edit task"
            hasMemberList
          />
        ),
      },
      {
        path: "/tasks/add",
        element: (
          <Form
            inputList={taskFormInputList}
            resolver={taskFormResolver}
            pageTitle="Add task"
            hasMemberList
          />
        ),
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
