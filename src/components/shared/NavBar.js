import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar__main">
      <div className="navbar__list">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            "navbar__item" + (isActive ? " navbar__active" : "")
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            "navbar__item" + (isActive ? " navbar__active" : "")
          }
        >
          Blogs
        </NavLink>
        <NavLink
          to="/apps"
          className={({ isActive }) =>
            "navbar__item" + (isActive ? " navbar__active" : "")
          }
        >
          Apps
        </NavLink>
        <NavLink
          to="/apis"
          className={({ isActive }) =>
            "navbar__item" + (isActive ? " navbar__active" : "")
          }
        >
          API`s
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            "navbar__item" + (isActive ? " navbar__active" : "")
          }
        >
          About
        </NavLink>
      </div>
    </div>
  );
};
