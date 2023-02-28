import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/common/ErrorPage";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import Home from "./components/Home";
import { store } from "./utils/redux/store";
import { Provider } from "react-redux";
import Tasks, { loader as allTaskLoader } from "./components/Tasks";
import Members, { loader as allMemberLoader } from "./components/Members";

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
        // loader: contactLoader,
      },
      {
        path: "/register",
        element: <RegistrationForm />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
        loader: allTaskLoader,
      },
      {
        path: "/members",
        element: <Members />,
        loader: allMemberLoader,
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
