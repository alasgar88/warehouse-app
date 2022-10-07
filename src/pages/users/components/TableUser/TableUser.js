import React from "react";
import { Table } from "reactstrap";
import { AiFillEdit } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { editUser } from "../../../../features/user/userSlice";
import { useDispatch } from "react-redux";

const TableUser = ({ data, setShowEditUser }) => {
  const dispatch = useDispatch();
  return (
    <div className='table-container'>
      <h3 className='table-title'>Users</h3>
      <Table hover>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
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
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TableUser;
