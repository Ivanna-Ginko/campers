import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  form: "", 
  transmission: "manual",
  features: {
    AC: false,
    kitchen: false,
    bathroom: false,
    TV: false,
    gas: false,
    microwave: false,
    refrigerator: false,
    radio: false,
    water: false,
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setForm: (state, action) => {
      // для vehicle type (тільки одна кнопка активна, або жодної)
      state.form = state.form === action.payload ? "" : action.payload;
    },
    toggleTransmission: (state) => {
      state.transmission =
        state.transmission === "manual" ? "automatic" : "manual";
    },
    toggleFeature: (state, action) => {
      const feature = action.payload;
      state.features[feature] = !state.features[feature];
    },
    resetFilters: () => initialState,
  },
});

export const { setLocation, setForm, toggleTransmission, toggleFeature, resetFilters } =
  filtersSlice.actions;

export default filtersSlice.reducer;