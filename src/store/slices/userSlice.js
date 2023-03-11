import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "cart",
  initialState: {
    isFeching: false,
    error: false,
    currentUser: null,
  },
  reducers: {
    loginStart: (state) => {
      state.isFeching = true;
    },
    loginSuccess: (state, action) => {
      state.isFeching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFeching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions;
export default userSlice.reducer;
