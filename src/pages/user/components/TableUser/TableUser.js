import React, { useState } from "react";
import { Table } from "reactstrap";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { editUser } from "../../../../features/user/userSlice";
import { useDispatch } from "react-redux";
import { InfoModal } from "../../../../componenets";
import DetailUser from "../detailUser/DetailUser";
import { deactiveOrActiveUser } from "../../../../features/user/userSlice";
import "./table-user.css";

const TableUser = ({ data, setShowEditUser }) => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  // for detail info
  const [detailInfo, setDetailInfo] = useState([]);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  // endof for detail info
  const [userStatusData, setUserStatusData] = useState({
    id: "",
    status: false,
  });

  return (
    <div className='table-container main-table'>
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
                {/* open detail modal */}
                <td className='last-icon'>
                  <span
                    className='detail-icon'
                    onClick={() => {
                      setDetailInfo(user);
                      setDetailModalOpen(true);
                    }}
                  >
                    <AiOutlineEye />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <DetailUser
        detailModalOpen={detailModalOpen}
        setDetailModalOpen={setDetailModalOpen}
        data={detailInfo}
      />
    </div>
  );
};

export default TableUser;
