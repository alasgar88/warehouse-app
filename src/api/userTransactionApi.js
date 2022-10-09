import axios from "axios";

// get user transaction list
export const getUserTransactionListThunk = async (_, thunkAPI) => {
  try {
    const resp = await axios(
      "http://karfree-001-site1.atempurl.com/api/User/GetLastTransactions",
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

// create  user transaction
export const createUserTransactionThunk = async (transaction, thunkAPI) => {
  try {
    const resp = await axios.post(
      "http://karfree-001-site1.atempurl.com/api/Transactions/UserPostTransaction",
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

// confirm  user transaction
export const confirmUserTransactionThunk = async (id, thunkAPI) => {
  try {
    const resp = await axios.put(
      `http://karfree-001-site1.atempurl.com/api/User/AcceptTransaction/${id}/?accept=true`,
      { accept: "true" },
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
