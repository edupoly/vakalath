import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fData: null,
};

const submittedDataSlice = createSlice({
  name: 'submittedForm',
  initialState,
  reducers: {
    setFData(state, action) {
      state.fData = action.payload;
    },
    clearFData(state) {
      state.fData = null;
    },
  },
});

export const { setFData, clearFData } = submittedDataSlice.actions;
export default submittedDataSlice.reducer;
