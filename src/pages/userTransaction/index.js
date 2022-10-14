import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserTransactionList } from "../../features/userTransaction/userTransactionSlice";
import UserTableTransaction from "./components/userTableTransaction/UserTableTransaction";
// import MakeUserTransaction from "./components/MakeUserTransaction/MakeUserTransaction";

const UserTransaction = () => {
  const { transactionList, userTransactionCreate, transactionState } =
    useSelector((store) => store.userTransaction);
  const [showUserTransactionCreate, setShowUserCreateTransaction] =
    useState(false);
  const dispatch = useDispatch();

  // close create transaction  after navigation
  useEffect(() => {
    setShowUserCreateTransaction(false);
    dispatch(getUserTransactionList());
  }, [userTransactionCreate, transactionState]);

  // show create product with button click
  const handleClick = () => {
    setShowUserCreateTransaction(!showUserTransactionCreate);
  };

  // close CreateProduct component after user Created
  useEffect(() => {
    setShowUserCreateTransaction(false);
  }, [transactionList]);

  return (
    <div className='table-container'>
      <div className='button-container'>
        <button className='category-button' onClick={handleClick}>
          {showUserTransactionCreate
            ? "Transaction List"
            : "Create transaction"}
        </button>
      </div>
      {/* {showUserTransactionCreate ? (
        <MakeUserTransaction />
      ) : (
        <UserTableTransaction data={transactionList} />
      )} */}
      <UserTableTransaction data={transactionList} />
    </div>
  );
};

export default UserTransaction;
