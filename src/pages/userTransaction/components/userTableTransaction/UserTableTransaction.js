import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import "./user-table-transaction.css";
import { confirmUserTransaction } from "../../../../features/userTransaction/userTransactionSlice";
import { InfoModal } from "../../../../componenets";

const UserTableTransaction = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [transactionId, setTransactionId] = useState(false);

  return (
    <div className='table-container'>
      <InfoModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        func={confirmUserTransaction}
        data={transactionId}
        text='Confirm to accept transaction'
      />
      <h3 className='table-title'>Transaction</h3>
      <Table hover>
        <thead>
          <tr>
            <th>N%</th>
            <th>Sender</th>
            <th>From</th>
            <th>Category</th>
            <th>Product</th>
            <th>Count</th>
            <th>Time</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((transaction, index) => {
            const {
              id,
              transactionNo,
              kim,
              hardan,
              kateqoriyasi,
              mehsul,
              miqdar,
              nevaxt,
              veziyyeti,
            } = transaction;
            return (
              <tr key={id}>
                <td>{transactionNo}</td>
                <td>{kim === "-" ? "Admin" : kim}</td>
                <td>{hardan}</td>
                <td>{kateqoriyasi}</td>
                <td>{mehsul}</td>
                <td>{miqdar}</td>
                <td>{nevaxt}</td>

                <td>
                  <button
                    onClick={() => {
                      setTransactionId(id);
                      setModalOpen(true);
                    }}
                    disabled={veziyyeti === "Qebul edildi"}
                    className={`state-button ${
                      veziyyeti === "Qebul edildi" ? "accepted" : "pending"
                    }`}
                  >
                    {veziyyeti === "Qebul edildi" ? "Accepted" : "Pending"}
                  </button>
                </td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default UserTableTransaction;
