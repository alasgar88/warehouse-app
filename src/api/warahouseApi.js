import axios from "axios";

// get warehouse list
export const getWarehouseListThunk = async (_, thunkAPI) => {
  try {
    const resp = await axios(
      "http://karfree-001-site1.atempurl.com/api/Warehouse",
      {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      }
    );
    return resp.data.data;
  } catch (error) {
    console.log(error, "error");
    return thunkAPI.rejectWithValue(error.response.request.response);
  }
};

// create warehouse  house
export const createWarehouseThunk = async (warehouse, thunkAPI) => {
  try {
    const resp = await axios.post(
      "http://karfree-001-site1.atempurl.com/api/Warehouse",
      warehouse,
      {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      }
    );
    return resp.data.data;
  } catch (error) {
    console.log(error, "error");
    return thunkAPI.rejectWithValue(error.response.request.response);
  }
};

// delete warehouse  house
export const deleteWarehouseThunk = async (id, thunkAPI) => {
  try {
    const resp = await axios.delete(
      `http://karfree-001-site1.atempurl.com/api/Warehouse/${id}`,
      {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
          // "Content-Type": "application/json",
        },
      }
    );
    return resp.data;
  } catch (error) {
    console.log(error.data, "error");
    return thunkAPI.rejectWithValue(error.response.request.response);
  }
};
