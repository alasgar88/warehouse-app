import React from "react";
import { Table } from "reactstrap";
import "./table-component.css";

const TableComponent = ({ data, title }) => {
  return (
    <div className='table-container'>
      <h3 className='table-title'>{title}</h3>
      <Table hover>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user, index) => {
            const { userName, email, phoneNumber, address } = user;
            return (
              <tr key={index}>
                <th scope='row'>{userName}</th>
                <td>{email}</td>
                <td>{phoneNumber}</td>
                <td>{address}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TableComponent;
