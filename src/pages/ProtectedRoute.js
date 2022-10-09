import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { role } = useSelector((store) => store.user.user);
  if (!role) {
    return <Navigate to='/landing' />;
  }
  return children;
};

export default ProtectedRoute;
