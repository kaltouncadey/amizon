import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null },
  reducers: {
    addCurrentUser(state, action) {
      state.user = action.payload;
    },
  },
});

const userActions = userSlice.actions;

export { userSlice, userActions };
