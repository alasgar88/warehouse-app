import React, { useState } from "react";
import { Table } from "reactstrap";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiFillEye, AiOutlineEye } from "react-icons/ai";
import { editUser } from "../../../../features/user/userSlice";
import { useDispatch } from "react-redux";
import { InfoModal } from "../../../../componenets";
import { deactiveOrActiveUser } from "../../../../features/user/userSlice";
import "./table-user.css";

const TableUser = ({ data, setShowEditUser }) => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [userStatusData, setUserStatusData] = useState({
    id: "",
    status: false,
  });

  const handleDetail = () => {
    console.log("detail");
  };
  return (
    <div className='table-container'>
      <InfoModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        func={deactiveOrActiveUser}
        data={userStatusData}
        text={`Confirm to ${
          userStatusData.status === false ? "deactivate" : "activate"
        } user`}
      />
      <h3 className='table-title'>Users</h3>
      <Table hover>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            {/* <th>Address</th> */}
            <th>Status</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user, index) => {
            const { userName, email, phoneNumber, address, id, status } = user;
            return (
              <tr key={index}>
                <th>{userName}</th>
                <td>{email}</td>
                <td>{phoneNumber}</td>
                {/* <td>{address}</td> */}
                <td>
                  <button
                    className={`state-button ${
                      status ? "deactivate" : "activate"
                    }`}
                    onClick={() => {
                      setUserStatusData({ id, status: !status });
                      setModalOpen(true);
                    }}
                  >
                    {status ? "deactivate" : "activate"}
                  </button>
                </td>
                <td className='not-last-icon'>
                  {/* open edit container */}
                  <button
                    className='delete-button'
                    onClick={() => {
                      dispatch(editUser(email));
                      setShowEditUser(true);
                    }}
                  >
                    <RiLockPasswordLine />
                  </button>
                </td>
                <td className='last-icon'>
                  <span className='detail-icon' onClick={handleDetail}>
                    <AiOutlineEye />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TableUser;
