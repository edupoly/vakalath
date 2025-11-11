import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: null, // Stores user data (e.g., name, email, token)
};

const submittedDataSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.userInfo = action.payload;
    },
    clearUser(state) {
      state.userInfo = null;
    },
  },
});

export const { setUser, clearUser } = submittedDataSlice.actions;
export default submittedDataSlice.reducer;
