import { customFetch } from "./axios";

// get user transaction list
export const getUserTransactionListThunk = async (_, thunkAPI) => {
  try {
    const resp = await customFetch("/User/GetLastTransactions");
    return resp.data;
  } catch (error) {
    console.log(error, "error");
    return thunkAPI.rejectWithValue(error.response.request.response);
  }
};

// create  user transaction
export const createUserTransactionThunk = async (transaction, thunkAPI) => {
  try {
    const resp = await customFetch.post(
      "/Transactions/UserPostTransaction",
      transaction
    );
    return resp.data.data;
  } catch (error) {
    console.log(error, "error");
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

// confirm  user transaction
export const confirmUserTransactionThunk = async (id, thunkAPI) => {
  try {
    const resp = await customFetch.put(
      `/User/AcceptTransaction/${id}/?accept=true`,
      { accept: "true" }
    );
    return resp.data.data;
  } catch (error) {
    console.log(error, "error");
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};
