import "./shared-layout.css";
import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, SideBar } from "../../componenets/";
const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <section className='section-center outlet'>
        <SideBar className='sidebar' />
        <div className='child'>
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default SharedLayout;
