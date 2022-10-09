import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthProtected = ({ children }) => {
  const { role } = useSelector((store) => store.user.user);
  if (role === "User") {
    return <Navigate to='/user/transactions' />;
  }
  return children;
};

export default AuthProtected;
