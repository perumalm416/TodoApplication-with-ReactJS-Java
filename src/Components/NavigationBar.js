import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";
export const NavigationBar = () => {
    const navLinkStyle=({isActive})=>isActive?"isActive":"isNotActive";
  return (
    <Fragment>
      <nav className="nav-container">
        <li>
          <NavLink className={navLinkStyle} to="todoform">Todo Form</NavLink>
        </li>
        <li>
          <NavLink className={navLinkStyle} to="todolist">Todo List</NavLink>
        </li>
        <li>
          <NavLink className={navLinkStyle} to="login">Login</NavLink>
        </li>

      </nav>
    </Fragment>
  );
};
