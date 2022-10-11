import { customFetch } from "./axios";

// get warehouse list
export const getWarehouseListThunk = async (_, thunkAPI) => {
  try {
    const resp = await customFetch("/Warehouse", {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    return resp.data.data;
  } catch (error) {
    console.log(error, "error");
    return thunkAPI.rejectWithValue(error.response.request.response);
  }
};

// create warehouse  house
export const createWarehouseThunk = async (warehouse, thunkAPI) => {
  try {
    const resp = await customFetch.post("/Warehouse", warehouse, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    return resp.data.data;
  } catch (error) {
    console.log(error, "error");
    return thunkAPI.rejectWithValue(error.response.request.response);
  }
};

// delete warehouse  house
export const deleteWarehouseThunk = async (id, thunkAPI) => {
  try {
    const resp = await customFetch.delete(`/Warehouse/${id}`, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        // "Content-Type": "application/json",
      },
    });
    return resp.data;
  } catch (error) {
    console.log(error, "error");
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
};

// create warehouse  house
export const getWarehouseDetailThunk = async (id, thunkAPI) => {
  try {
    const resp = await customFetch(`/Warehouse/${id}`);
    return resp.data.data;
  } catch (error) {
    console.log(error, "error");
    return thunkAPI.rejectWithValue(error.response.request.response);
  }
};
