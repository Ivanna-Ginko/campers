import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    campers: { },
    isLoading: false,
    error: null,
};

const camperSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    fetchInProgress(state) {
      state.isLoading = true;
    },
    fetchSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.campers = action.payload;
    },
    fetchError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchInProgress, fetchSuccess, fetchError } = camperSlice.actions;
export default camperSlice.reducer;
