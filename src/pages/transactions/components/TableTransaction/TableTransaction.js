import React from "react";
import { Table } from "reactstrap";
import { PaginationComponent } from "../../../../componenets";
import { useSelector } from "react-redux";
import { getTransactionList } from "../../../../features/transaction/transactionSlice";

const TableTransaction = ({ data }) => {
  const { transactionPaginationList } = useSelector(
    (store) => store.transaction
  );
  return (
    <div className='table-container'>
      <h3 className='table-title'>Transaction</h3>
      <Table hover>
        <thead>
          <tr>
            <th>Sender</th>
            <th>Receiver</th>
            <th>Product</th>
            <th>count</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((transaction, index) => {
            const { mehsul, miqdar, receiver, sender } = transaction;
            return (
              <tr key={index}>
                <td>{sender ? sender : "Import"}</td>
                <td>{receiver}</td>
                <td>{mehsul}</td>
                <td>{miqdar}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <PaginationComponent
        paginationList={transactionPaginationList}
        func={getTransactionList}
      />
    </div>
  );
};

export default TableTransaction;
