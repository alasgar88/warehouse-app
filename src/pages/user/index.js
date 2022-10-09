import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../features/user/userSlice";
import CreateUser from "./components/createUser/CreateUser";
import "./user-index.css";
import TableUser from "./components/TableUser/TableUser";
import EditUser from "./components/editUser/EditUser";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Users = () => {
  const { userList, userCreate, userPasswordChanged, userStatus } = useSelector(
    (store) => store.user
  );
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [showEditUser, setShowEditUser] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setShowCreateUser(false);
    dispatch(getAllUsers());
  }, [userCreate, userPasswordChanged, userStatus]);

  // show changePassword container
  // const showChangePassword = () => {
  //   setChangePassword(!changePassword);
  //   // modalOpen, setModalOpen, func, data, text;
  // };

  // close CreateUser component
  useEffect(() => {
    setShowEditUser(false);
  }, [userPasswordChanged]);

  // close CreateUser componenet after user Created
  useEffect(() => {
    setShowCreateUser(false);
  }, [userList]);

  return (
    <div className='table-container'>
      <div className='button-container'>
        {/* show edit user edit  */}
        {showEditUser ? (
          <button
            className='category-button close-button'
            onClick={() => setShowEditUser(!showEditUser)}
          >
            <AiOutlineCloseSquare />
          </button>
        ) : (
          <button
            className='category-button'
            onClick={() => setShowCreateUser(!showCreateUser)}
          >
            {showCreateUser ? "User List" : "Create User"}
          </button>
        )}
      </div>
      {showCreateUser ? (
        <CreateUser setShowCreateUser={setShowCreateUser} />
      ) : showEditUser ? (
        <EditUser />
      ) : (
        <TableUser data={userList} setShowEditUser={setShowEditUser} />
      )}
    </div>
  );
};

export default Users;
