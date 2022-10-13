import Reac, { useState } from "react";
import { Table } from "reactstrap";
import { PaginationComponent } from "../../../../componenets";
import { useSelector } from "react-redux";
import { getTransactionList } from "../../../../features/transaction/transactionSlice";
import { AiOutlineEye } from "react-icons/ai";
import DetailTransaction from "../detailTransaction/DetailTransaction";

const TableTransaction = ({ data }) => {
  const { transactionPaginationList } = useSelector(
    (store) => store.transaction
  );
  // for detail info
  const [detailInfo, setDetailInfo] = useState([]);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  // endof for detail info
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
            <th></th>
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
                <td
                  className='last-icon detail-icon'
                  onClick={() => {
                    setDetailInfo(transaction);
                    setDetailModalOpen(true);
                  }}
                >
                  <AiOutlineEye />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <PaginationComponent
        paginationList={transactionPaginationList}
        func={getTransactionList}
      />
      <DetailTransaction
        detailModalOpen={detailModalOpen}
        setDetailModalOpen={setDetailModalOpen}
        data={detailInfo}
      />
    </div>
  );
};

export default TableTransaction;
