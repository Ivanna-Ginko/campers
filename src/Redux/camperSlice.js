import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operations'

const initialState = {
    campers: { },
    isLoading: false,
    error: null,
    isFavourite: []
};

const camperSlice = createSlice({
  name: 'campers',
  initialState,
reducers: {
    toggleFavourite: (state, action) => {
      const camperId = action.payload;
      if (state.isFavourite.includes(camperId)) {
        state.isFavourite = state.isFavourite.filter(id => id !== camperId);
      } else {
        state.isFavourite.push(camperId);
      }
    }
  },
extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.campers = action.payload;
        console.log(action.payload) 
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default camperSlice.reducer;
export const { toggleFavourite } = camperSlice.actions;
