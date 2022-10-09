import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import {
  getTransactionListThunk,
  createTransactionThunk,
} from "../../api/transactionApi";

const initialState = {
  transactionList: [],
  totalTransactions: 0,
  transaction: "",
  isLoading: false,
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
      state.totalTransactions = action.payload.totalTransaction;
    },
    [getTransactionList.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    },
    [createTransaction.pending]: (state) => {
      state.isLoading = true;
    },
    [createTransaction.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.transactionList = [...state.transactionList, action.payload];
      toast.success("Transaction made succcesfully");
    },
    [createTransaction.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    },
  },
});

export default transactionSlice.reducer;
