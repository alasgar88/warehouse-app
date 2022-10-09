import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import {
  getProductListThunk,
  createProductThunk,
  deleteProductThunk,
} from "../../api/poductApi";

const initialState = {
  productList: [],
  isLoading: false,
  productDelete: false,
  productCreate: false,
};

export const getProductList = createAsyncThunk(
  "peoduct/getWarehouseList",
  getProductListThunk
);

export const createProduct = createAsyncThunk(
  "user/createProduct",
  createProductThunk
);
export const deleteProduct = createAsyncThunk(
  "user/deleteProductt",
  deleteProductThunk
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: {
    [getProductList.pending]: (state) => {
      state.isLoading = true;
    },
    [getProductList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.productList = action.payload;
    },
    [getProductList.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    },
    [createProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [createProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.productCreate = !state.productCreate;
      toast.success("Product created succcesfully");
    },
    [createProduct.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    },
    [deleteProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.productDelete = !state.productDelete;
      toast.success("Product deleted succcesfully");
    },
    [deleteProduct.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    },
  },
});

export default productSlice.reducer;
