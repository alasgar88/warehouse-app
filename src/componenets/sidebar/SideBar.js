import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { adminMenu, userMenu } from "./menuData";
import { setMiniSidebar } from "../../features/layout/layoutSlice";

const SideBar = () => {
  const { role } = useSelector((store) => store.user.user);

  return (
    <div className='sidebar-menu'>
      {role === "Admin"
        ? adminMenu.map((menuItem) => {
            return <SideBarItem {...menuItem} key={menuItem.id} />;
          })
        : userMenu.map((menuItem) => {
            return <SideBarItem {...menuItem} key={menuItem.id} />;
          })}
    </div>
  );
};

// className = "menu-item-container";
const SideBarItem = ({ path, label, icon }) => {
  const { miniSidebarState } = useSelector((store) => store.miniSidebar);

  const dispatch = useDispatch();

  const handleClick = () => {
    if (!miniSidebarState) {
      setTimeout(() => {
        dispatch(setMiniSidebar());
      }, 1000);
    }
  };
  return (
    <NavLink
      to={path}
      onClick={handleClick}
      className={({ isActive }) =>
        isActive
          ? `menu-item-container active ${miniSidebarState && "minibar"}`
          : `menu-item-container ${miniSidebarState && "minibar"}`
      }
    >
      <span className={`icon ${miniSidebarState && "minibar"}`}>{icon}</span>
      <span className='page-name'>{label}</span>
    </NavLink>
  );
};

export default SideBar;
