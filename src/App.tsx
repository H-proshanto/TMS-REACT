import React, { useEffect, useState } from "react";
import Navbar from "./components/common/Navbar";
import "./styles/App.css";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NavItem } from "./react-app-env";
import { getNavbarItems } from "./utils/helpers/navbar";

function App() {
  const { isLoggedIn } = useSelector((state: any) => state?.user);
  const [navItems, setNavItems] = useState<NavItem[]>(
    getNavbarItems(isLoggedIn)
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home", { replace: false });
    } else {
      navigate("login", { replace: true });
    }
  }, []);

  useEffect(() => {
    setNavItems(getNavbarItems(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <div className="App">
      <Navbar navItemList={navItems} />
      <Outlet />
    </div>
  );
}

export default App;
