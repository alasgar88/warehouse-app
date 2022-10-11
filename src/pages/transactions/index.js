import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactionList } from "../../features/transaction/transactionSlice";
import TableTransaction from "./components/TableTransaction/TableTransaction";
import MakeTransaction from "./components/MakeTransaction/MakeTransaction";
import "./transaction.css";

const Transaction = () => {
  const { transactionCreated, transactionList } = useSelector(
    (store) => store.transaction
  );
  const [showTransactionCreate, setShowCreateTransaction] = useState(false);
  const dispatch = useDispatch();

  // close create transaction  after navigation
  useEffect(() => {
    setShowCreateTransaction(false);
    dispatch(getTransactionList(1));
  }, [transactionCreated]);

  // show create product with button click
  const handleClick = () => {
    setShowCreateTransaction(!showTransactionCreate);
  };

  // close CreateProduct component after user Created
  useEffect(() => {
    setShowCreateTransaction(false);
  }, [transactionList]);

  return (
    <div className='table-container'>
      <div className='button-container'>
        <button className='category-button' onClick={handleClick}>
          {showTransactionCreate ? "Transaction List" : "Create transaction"}
        </button>
      </div>
      {showTransactionCreate ? (
        <MakeTransaction />
      ) : (
        <TableTransaction data={transactionList} />
      )}
    </div>
  );
};

export default Transaction;
