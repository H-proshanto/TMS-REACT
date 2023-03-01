import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { NavItem } from "../../react-app-env";
import "../../styles/Navbar.css";
import { useAppDispatch, useAppSelector } from "../../utils/redux/hooks";
import { logout } from "../../utils/redux/states/user";
import logo from "../../assets/logo.png";

const Navbar: React.FC<{ navItemList: NavItem[] }> = ({ navItemList }) => {
  const { info, isLoggedIn } = useAppSelector((state) => state?.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar">
      <div className="nav_left">
        <img className="nav_logo" src={logo} alt="phoenix logo" />
        <h3 className="nav_title">Task Management</h3>
      </div>
      <div className="nav_right">
        {isLoggedIn && (
          <div className="user_info">
            <p id="user_name">{`Mr. ${info.name}`}</p>
            <button id="logout_btn" onClick={handleClick}>
              Logout
            </button>
          </div>
        )}
        <ul className={`nav_itemList ${!isLoggedIn ? "center_nav" : ""}`}>
          {navItemList.map((navItem: NavItem, index: number) => {
            return (
              <li key={index} className="nav_item_container">
                <NavLink to={navItem.link} className="nav_item">
                  {navItem.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
