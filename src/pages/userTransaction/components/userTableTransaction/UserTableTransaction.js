import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import "./user-table-transaction.css";
import { confirmUserTransaction } from "../../../../features/userTransaction/userTransactionSlice";
import { InfoModal } from "../../../../componenets";
import { shortName } from "../../../../utils/utils";
import { AiOutlineEye } from "react-icons/ai";
import DetailTransaction from "../../../userTransaction/components/detailTransaction/DetailTransaction";

const UserTableTransaction = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [transactionId, setTransactionId] = useState(false);
  // for detail info
  const [detailInfo, setDetailInfo] = useState([]);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  // endof for detail info

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
            {/* <th>N%</th> */}
            <th>Sender</th>
            <th>From</th>
            {/* <th>Category</th> */}
            <th>Product</th>
            <th>Count</th>
            <th>Time</th>
            <th>State</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((transaction, index) => {
            let {
              id,
              transactionNo,
              kim,
              hardan,
              // kateqoriyasi,
              mehsul,
              miqdar,
              nevaxt,
              veziyyeti,
            } = transaction;
            // short data
            if (kim === "-") {
              kim = "Admin";
            } else {
              kim = shortName(kim, 10);
            }

            mehsul = shortName(mehsul, 22);
            nevaxt = nevaxt.substring(0, nevaxt.indexOf(":"));
            return (
              <tr key={id}>
                {/* <td>{transactionNo}</td> */}
                <td>{kim}</td>
                <td>{hardan}</td>
                {/* <td>{kateqoriyasi}</td> */}
                <td>{mehsul}</td>
                <td>{miqdar}</td>
                <td>{nevaxt}</td>

                <td>
                  <button
                    onClick={() => {
                      setTransactionId(transactionNo);
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
                <td
                  className='last-icon detail-icon'
                  onClick={() => {
                    setDetailInfo(transaction);
                    setDetailModalOpen(true);
                  }}
                >
                  <span className='last-icon detail-icon'>
                    <AiOutlineEye />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <DetailTransaction
        detailModalOpen={detailModalOpen}
        setDetailModalOpen={setDetailModalOpen}
        data={detailInfo}
      />
    </div>
  );
};

export default UserTableTransaction;
