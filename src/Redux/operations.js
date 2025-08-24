import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

const formMap = {
  van: "panelTruck",
  "fully-integrated": "fullyIntegrated",
  alcove: "alcove",
};

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (filters = {}, thunkAPI) => {
    try {
      const params = new URLSearchParams();

      if (filters.location) params.append("location", filters.location);
      if (filters.form) {
        const backendForm = formMap[filters.form];
        if (backendForm) params.append("form", backendForm);
      }      if (filters.transmission) params.append("transmission", filters.transmission);

      if (filters.features) {
        Object.entries(filters.features).forEach(([key, value]) => {
          if (value) params.append(key, true);
        });
      }

      const response = await axios.get(`/campers?${params.toString()}`);
      console.log( response.data.items);

     
      return { items: Array.isArray(response.data.items) ? response.data.items : [] };
    } catch (error) {
      console.error( error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);