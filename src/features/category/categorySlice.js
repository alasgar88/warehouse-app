import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { getProductCategoryListThunk } from "../../api/categoryApi";

const initialState = {
  productCategoryList: [],
  isLoading: false,
};

export const getProductCategoryList = createAsyncThunk(
  "category/getProductCategoryList",
  getProductCategoryListThunk
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: {
    [getProductCategoryList.pending]: (state) => {
      state.isLoading = true;
    },
    [getProductCategoryList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.productCategoryList = action.payload;
    },
    [getProductCategoryList.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    },
  },
});

export default categorySlice.reducer;
