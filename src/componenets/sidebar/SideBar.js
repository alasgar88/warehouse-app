import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { adminMenu, userMenu } from "./menuData";

const SideBar = () => {
  const { role } = useSelector((store) => store.user.user);
  return (
    <div className='sidebar'>
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

const SideBarItem = ({ path, label, icon }) => {
  return (
    <div className='menu-item'>
      <span className='icon'>{icon}</span>
      <NavLink to={path} className='menu-link'>
        {label}
      </NavLink>
    </div>
  );
};

export default SideBar;
