import React, { useState } from "react";
import { Table } from "reactstrap";
import { RiLockPasswordLine } from "react-icons/ri";
import { editUser } from "../../../../features/user/userSlice";
import { useDispatch } from "react-redux";
import { InfoModal } from "../../../../componenets";

const TableUser = ({ data, setShowEditUser }) => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [transactionId, setTransactionId] = useState(false);
  return (
    <div className='table-container'>
      {/* <InfoModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        func={confirmUserTransaction}
        data={transactionId}
        text='Confirm to accept transaction'
      /> */}
      <h3 className='table-title'>Users</h3>
      <Table hover>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user, index) => {
            const { userName, email, phoneNumber, address, id } = user;
            return (
              <tr key={index}>
                <th>{userName}</th>
                <td>{email}</td>
                <td>{phoneNumber}</td>
                <td>{address}</td>
                <td>
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
                <td>
                  <button
                    className='state-button'
                    onClick={() => {
                      setTransactionId(id);
                      setModalOpen(true);
                    }}
                    //   disabled={veziyyeti === "Qebul edildi"}
                    //   className={`state-button ${
                    //     veziyyeti === "Qebul edildi" ? "accepted" : "pending"
                    //   }`
                    // }
                  >
                    Click
                    {/* {veziyyeti === "Qebul edildi" ? "Accepted" : "Pending"} */}
                  </button>
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
