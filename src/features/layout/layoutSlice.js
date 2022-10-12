import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  miniSidebarState: true,
};

const layoutSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setMiniSidebar: (state) => {
      state.miniSidebarState = !state.miniSidebarState;
    },
  },
});

export const { setMiniSidebar } = layoutSlice.actions;
export default layoutSlice.reducer;
