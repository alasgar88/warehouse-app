import { customFetch } from "./axios";

// get product category
export const getProductCategoryListThunk = async (_, thunkAPI) => {
  try {
    const resp = await customFetch("/Categories");
    return resp.data;
  } catch (error) {
    console.log(error, "error");
    return thunkAPI.rejectWithValue(error.response.request.response);
  }
};
