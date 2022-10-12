import "./shared-layout.css";
import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, SideBar } from "../../componenets/";
import { HiMenuAlt2 } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { setMiniSidebar } from "../../features/layout/layoutSlice";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";

const SharedLayout = () => {
  const { miniSidebarState } = useSelector((store) => store.miniSidebar);
  const [pageYOffset, setPageYOffset] = useState(50);
  const dispatch = useDispatch();
  // const ref = useRef();
  console.log(pageYOffset, "offset");

  const scrollFunc = () => {
    // ref.current.style.paddingTop = `${pageYOffset}rem`;
    // console.log(ref.current, "refcurrent");
    const paddingValue = Math.floor(window.pageYOffset);
    console.log(paddingValue, "p");
    setPageYOffset(paddingValue + 50);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollFunc);
    // return () => window.removeEventListener("scroll", scrollFunc);
  }, []);
  return (
    <>
      <Navbar />
      <section className='section-center outlet'>
        <div className={`sidebar ${miniSidebarState && "minibar"}`}>
          <span
            className={`extend-menu ${miniSidebarState && "minibar"}`}
            onClick={() => dispatch(setMiniSidebar())}
            style={{
              paddingTop: `${pageYOffset}px`,
            }}
          >
            {miniSidebarState ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
          </span>
          <SideBar />
        </div>
        <div className={`child ${miniSidebarState && "minibar"}`}>
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default SharedLayout;
