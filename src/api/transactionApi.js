import { customFetch } from "./axios";

// get transaction list
export const getTransactionListThunk = async (_, thunkAPI) => {
  try {
    const resp = await customFetch("/Transactions");
    return resp.data;
  } catch (error) {
    console.log(error, "error");
    return thunkAPI.rejectWithValue(error.response.request.response);
  }
};

// create transaction
export const createTransactionThunk = async (transaction, thunkAPI) => {
  try {
    const resp = await customFetch.post(
      "/Transactions/PostTransaction",
      transaction
    );
    return resp.data.data;
  } catch (error) {
    console.log(error, "error");
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};
