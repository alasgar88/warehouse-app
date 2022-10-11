import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { makePaginationList } from "../../utils/pagination";

import {
  getTransactionListThunk,
  createTransactionThunk,
} from "../../api/transactionApi";

const initialState = {
  transactionList: [],
  totalTransactions: 0,
  transaction: "",
  transactionPaginationList: [],
  isLoading: false,
  transactionCreated: false,
};

export const getTransactionList = createAsyncThunk(
  "peoduct/getTransactionList",
  getTransactionListThunk
);

export const createTransaction = createAsyncThunk(
  "user/createTransaction",
  createTransactionThunk
);

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  extraReducers: {
    [getTransactionList.pending]: (state) => {
      state.isLoading = true;
    },
    [getTransactionList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.transactionList = action.payload.transactions;
      state.transactionPaginationList = makePaginationList(
        action.payload.totalTransaction
      );
      state.totalTransactions = action.payload.totalTransaction;
    },
    [getTransactionList.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    },
    [createTransaction.pending]: (state) => {
      state.isLoading = true;
    },
    [createTransaction.fulfilled]: (state) => {
      state.isLoading = false;
      state.transactionCreated = !state.transactionCreated;
      toast.success("Transaction made succcesfully");
    },
    [createTransaction.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    },
  },
});

export default transactionSlice.reducer;
