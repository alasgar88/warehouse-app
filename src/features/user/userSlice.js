import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localstorage";

import {
  loginUserThunk,
  createUserThunk,
  getUserListThunk,
  changeUserPasswordThunk,
} from "../../api/userApi";

const initialState = {
  user: getUserFromLocalStorage(),
  isLoading: false,
  newUser: "",
  editUserEmail: "",
  userList: [],
};

export const loginUser = createAsyncThunk("user/loginUser", loginUserThunk);

export const createUser = createAsyncThunk(
  "user/createUserThunk",
  createUserThunk
);

export const getAllUsers = createAsyncThunk(
  "user/getAllUsers",
  getUserListThunk
);

export const changePassword = createAsyncThunk(
  "user/changePassword",
  changeUserPasswordThunk
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeUser: (state) => {
      state.user = "";
      removeUserFromLocalStorage();
    },
    editUser: (state, { payload }) => {
      state.editUserEmail = payload;
    },
  },
  extraReducers: {
    // login user
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      console.log(action.payload, "alasgar");
      state.isLoading = false;
      state.user = action.payload;
      toast.success("User logged succesfully");
      addUserToLocalStorage(action.payload);
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    },
    // create user
    [createUser.pending]: (state) => {
      state.isLoading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.newUser = action.payload;
      state.userList = [...state.userList, action.payload];
      toast.success("User created succesfully");
    },
    [createUser.rejected]: (state, action) => {
      state.isLoading = false;
    },
    // get all users
    [getAllUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userList = action.payload;
    },
    [getAllUsers.rejected]: (state, action) => {
      state.isLoading = false;
    },
    // forget passowrd
    [changePassword.pending]: (state) => {
      state.isLoading = true;
    },
    [changePassword.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.userList = action.payload;
    },
    [changePassword.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { removeUser, editUser } = userSlice.actions;

export default userSlice.reducer;
