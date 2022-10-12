import React, { useEffect, useState } from "react";
import "./navbar.css";
import img from "../../assets/warehouse-logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../features/user/userSlice";
import { AiOutlineUserAdd, AiFillCaretDown } from "react-icons/ai";

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const [showLogoutButton, setShowLogoutButton] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeUser());
  };

  useEffect(() => {});

  return (
    <div className='navbar-center'>
      <div className='section-center'>
        <div className='navbar'>
          <div className='logo'>
            <img src={img} alt='' className='logo' />
          </div>
          {user && (
            <>
              <div
                className='user-logout-container'
                onClick={() => {
                  setShowLogoutButton(true);
                  setTimeout(() => {
                    setShowLogoutButton(false);
                  }, 2000);
                }}
              >
                <div className='loged-user-info'>
                  <span className='user-icon'>
                    <AiOutlineUserAdd />
                  </span>
                  <p className='user-name'>{user.role}</p>
                  <span className='arrow-down'>
                    <AiFillCaretDown />
                  </span>
                </div>
                <div
                  className={`logout-container  ${
                    showLogoutButton && "active"
                  }`}
                >
                  <button className='logout-button' onClick={handleClick}>
                    Logout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
