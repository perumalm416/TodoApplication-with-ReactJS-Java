import { Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavigationBar.css";
import { useDispatch, useSelector } from "react-redux";
import { authLogoutConfig } from "./Authentication/AuthAction";
export const NavigationBar = () => {
  const dispatch = useDispatch();

  const authStore = useSelector((state) => state.auth);

  const navLinkStyle = ({ isActive }) =>
    isActive ? "isActive" : "isNotActive";
  const onAuthHandler = () => {
    if (authStore) {
      authLogoutConfig(dispatch);
    }
  };
  return (
    <Fragment>
      <nav className="nav-container">
        <li>
          <NavLink className={navLinkStyle} to="todoform">
            Todo Form
          </NavLink>
        </li>
        <li>
          <NavLink className={navLinkStyle} to="todolist">
            Todo List
          </NavLink>
        </li>
        <li>
          {
            <NavLink
              className={navLinkStyle}
              to="login"
              onClick={onAuthHandler}
            >
              {!authStore.authStatus ? "Login" : "Logout"}
            </NavLink>
          }
        </li>
      </nav>
    </Fragment>
  );
};
