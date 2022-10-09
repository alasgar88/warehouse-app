import axios from "axios";

// get transaction list
export const getTransactionListThunk = async (_, thunkAPI) => {
  try {
    const resp = await axios(
      "http://karfree-001-site1.atempurl.com/api/Transactions",
      {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      }
    );
    return resp.data;
  } catch (error) {
    console.log(error, "error");
    return thunkAPI.rejectWithValue(error.response.request.response);
  }
};

// create transaction
export const createTransactionThunk = async (transaction, thunkAPI) => {
  try {
    const resp = await axios.post(
      "http://karfree-001-site1.atempurl.com/api/Transactions/PostTransaction",
      transaction,
      {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      }
    );
    return resp.data.data;
  } catch (error) {
    console.log(error, "error");
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};
