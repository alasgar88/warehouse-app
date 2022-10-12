import { customFetch } from "./axios";

// user login
export const loginUserThunk = async (user, thunkAPI) => {
  try {
    const resp = await customFetch.post("/Auth/Login", user);
    return resp.data;
  } catch (error) {
    console.log(error, "error");
    return thunkAPI.rejectWithValue(error.response.request.response);
  }
};

// user create
export const createUserThunk = async (user, thunkAPI) => {
  try {
    const resp = await customFetch.post("/Admin/CreateUser", user);
    console.log(resp, "resp data");
    return resp.data;
  } catch (error) {
    console.log(error, "error");
    return thunkAPI.rejectWithValue(error.response.request.response);
  }
};

// get user list
export const getUserListThunk = async (_, thunkAPI) => {
  try {
    const resp = await customFetch("/Admin/GetAllUsers");
    return resp.data.data;
  } catch (error) {
    console.log(error, "error");
    return thunkAPI.rejectWithValue(error.response.request.response);
  }
};

// change user password
export const changeUserPasswordThunk = async (userData, thunkAPI) => {
  try {
    const resp = await customFetch.put(`/Admin/ChangeUserPassword`, {
      email: userData.email,
      newPassword: userData.newPassword,
      passwordConfirmation: userData.PasswordConfirmation,
    });
    return resp.data.data;
  } catch (error) {
    console.log(error, "error");
    return thunkAPI.rejectWithValue(error.response.request.response);
  }
};

// activate deaktivate user
export const deactiveOrActiveUserThunk = async ({ id, status }, thunkAPI) => {
  try {
    const resp = await customFetch.put(
      `/Admin/DeactiveOrActiveUser/${id}?status=${status}`
    );
    return resp.data.data;
  } catch (error) {
    console.log(error, "error");
    return thunkAPI.rejectWithValue(error.response.request.response);
  }
};
