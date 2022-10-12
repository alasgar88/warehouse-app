import { customFetch } from "./axios";
import { initialPaginationSize } from "../utils/pagination";

// get transaction list
export const getTransactionListThunk = async (Page = 1, thunkAPI) => {
  try {
    // const resp = await customFetch(
    //   `/Transactions?Page=${Page}&Size=${initialPaginationSize}`
    // );
    const resp = await customFetch("/Transactions", {
      params: {
        Page,
        Size: initialPaginationSize,
      },
      headers: {
        Accept: "application/json",
      },
    });

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
