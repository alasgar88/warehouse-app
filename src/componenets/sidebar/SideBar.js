import React from "react";
import { NavLink } from "react-router-dom";
import { menuData } from "./menuData";

const SideBar = () => {
  return (
    <div className='sidebar'>
      {menuData.map((menuItem, index) => {
        return (
          <div className='menu-item' key={index}>
            <span className='icon'>{menuItem?.icon}</span>
            <NavLink to={menuItem?.path} className='menu-link'>
              {menuItem?.label}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
