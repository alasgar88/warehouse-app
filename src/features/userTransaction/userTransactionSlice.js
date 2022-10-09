import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import {
  getUserTransactionListThunk,
  createUserTransactionThunk,
  confirmUserTransactionThunk,
} from "../../api/userTransactionApi";

const initialState = {
  transactionList: [],
  transactionState: false,
  isLoading: false,
  userTransactionCreated: false,
};

export const getUserTransactionList = createAsyncThunk(
  "peoduct/getUserTransactionList",
  getUserTransactionListThunk
);

export const createUserTransaction = createAsyncThunk(
  "user/createUserTransaction",
  createUserTransactionThunk
);
export const confirmUserTransaction = createAsyncThunk(
  "user/confirmUserTransaction",
  confirmUserTransactionThunk
);

const userTransactionSlice = createSlice({
  name: "userTransaction",
  initialState,
  extraReducers: {
    [getUserTransactionList.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserTransactionList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.transactionList = action.payload;
      //   state.totalTransactions = action.payload.totalTransaction;
    },
    [getUserTransactionList.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    },
    [createUserTransaction.pending]: (state) => {
      state.isLoading = true;
    },
    [createUserTransaction.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userTransactionCreated = !state.userTransactionCreated;
      toast.success("Transaction made succcesfully");
    },
    [createUserTransaction.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    },
    [confirmUserTransaction.pending]: (state) => {
      state.isLoading = true;
    },
    [confirmUserTransaction.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.transactionState = !state.transactionState;
      toast.success("State changed succcesfully");
    },
    [confirmUserTransaction.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    },
  },
});

export default userTransactionSlice.reducer;
