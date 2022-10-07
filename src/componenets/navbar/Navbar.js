import React from "react";
import "./navbar.css";
import img from "../../assets/warehouse-logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../features/user/userSlice";

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeUser());
  };

  return (
    <div className='navbar-center'>
      <div className='section-center'>
        <div className='navbar'>
          <div className='logo'>
            <img src={img} alt='' className='logo' />
          </div>
          {user && (
            <button className='landing-login' onClick={handleClick}>
              <span className='login-icon'></span>
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
