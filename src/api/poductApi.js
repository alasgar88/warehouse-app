import { customFetch } from "./axios";
import { initialPaginationSize } from "../utils/pagination";

// get product list
export const getProductListThunk = async (Page = 1, thunkAPI) => {
  try {
    const resp = await customFetch(
      `/Products/GetProducts?Page=${Page}&Size=${initialPaginationSize}`
    );
    return resp.data.data;
  } catch (error) {
    console.log(error, "error");
    return thunkAPI.rejectWithValue(error.response.request.response);
  }
};

// create product
export const createProductThunk = async (product, thunkAPI) => {
  try {
    const resp = await customFetch.post("/Products/PostProduct", product);
    return resp.data.data;
  } catch (error) {
    console.log(error, "error");
    return thunkAPI.rejectWithValue(error.response.request.response);
  }
};

// delete product
export const deleteProductThunk = async (id, thunkAPI) => {
  try {
    const resp = await customFetch.delete(`/Products/DeleteProduct/${id}`);
    return resp.data.data;
  } catch (error) {
    console.log(error, "error");
    return thunkAPI.rejectWithValue(error.response.request.response);
  }
};
