import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import {
  getWarehouseListThunk,
  createWarehouseThunk,
  deleteWarehouseThunk,
  getWarehouseDetailThunk,
} from "../../api/warahouseApi";

const initialState = {
  warehouseList: [],
  warehouse: "",
  warehouseDetail: "",
  isLoading: false,
  warehouseDelete: false,
};

export const getWarehouseList = createAsyncThunk(
  "user/getWarehouseList",
  getWarehouseListThunk
);

export const createWarehouse = createAsyncThunk(
  "user/createWarehouse",
  createWarehouseThunk
);

export const deleteWarehouse = createAsyncThunk(
  "user/deleteWarehouse",
  deleteWarehouseThunk
);

export const getWarehouseDetail = createAsyncThunk(
  "user/getWarehouseDetail",
  getWarehouseDetailThunk
);

const warehouseSlice = createSlice({
  name: "warehouse",
  initialState,
  //   reducers: {
  //     removeUser: (state) => {
  //       console.log("usledi");
  //       state.user = "";
  //       removeUserFromLocalStorage();
  //     },
  //   },
  extraReducers: {
    [getWarehouseList.pending]: (state) => {
      state.isLoading = true;
    },
    [getWarehouseList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.warehouseList = action.payload;
      state.warehouseDelete = false;
    },
    [getWarehouseList.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    },
    [createWarehouse.pending]: (state) => {
      state.isLoading = true;
    },
    [createWarehouse.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("action payload", action.payload);
      state.warehouseList = [...state.warehouseList, action.payload];
      state.warehouse = action.payload;
      toast.success("Warehouse Created");
    },
    [createWarehouse.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    },
    [deleteWarehouse.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteWarehouse.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.warehouseDelete = !state.warehouseDelete;
      toast.success(action.payload.message);
    },
    [deleteWarehouse.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    },
    [getWarehouseDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [getWarehouseDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.warehouseDetail = action.payload;
    },
    [getWarehouseDetail.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    },
  },
});

// export const { removeUser } = warehouseSlice.actions;

export default warehouseSlice.reducer;
