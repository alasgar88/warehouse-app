import axios from "axios";

// user login
export const loginUserThunk = async (user, thunkAPI) => {
  try {
    const resp = await axios.post(
      "http://karfree-001-site1.atempurl.com/api/Auth/Login",
      user
      // { headers: { "Content-Type": "multipart/form-data" } }
    );
    console.log(resp.data, "role");
    return resp.data;
  } catch (error) {
    console.log(error, "error");
    return thunkAPI.rejectWithValue(error.response.request.response);
  }
};

// user create
export const createUserThunk = async (user, thunkAPI) => {
  try {
    const resp = await axios.post(
      "http://karfree-001-site1.atempurl.com/api/Admin/CreateUser",
      user,
      {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      }
    );
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.request.response);
  }
};

// get user list
export const getUserListThunk = async (_, thunkAPI) => {
  try {
    const resp = await axios(
      "http://karfree-001-site1.atempurl.com/api/Admin/GetAllUsers",
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

export const changeUserPasswordThunk = async (userData, thunkAPI) => {
  try {
    const resp = await axios.put(
      `http://karfree-001-site1.atempurl.com/api/Admin/ChangeUserPassword?email=${userData.email}&newPassword=${userData.newPassword}&PasswordConfirmation=${userData.PasswordConfirmation}`,
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
