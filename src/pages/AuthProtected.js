import useSelection from "antd/lib/table/hooks/useSelection";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthProtected = ({ children }) => {
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();
  if (user.role === "Admin") {
    return children;
  } else {
    <Navigate to='/' />;
    return;
  }
};

export default AuthProtected;
