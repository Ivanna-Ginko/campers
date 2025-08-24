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

      if (filters.location) {
        const loc = filters.location.trim().toLowerCase();
        const parts = loc.split(',').map(p => p.trim());
        if (parts.length === 2) {
          params.append("location", `${parts[1]}, ${parts[0]}`);
        } else {
          params.append("location", loc);
        }
      }

      if (filters.form) {
        const normalizedForm = filters.form.toLowerCase().replace(" ", "-");
        const backendForm = formMap[normalizedForm];
        if (backendForm) params.append("form", backendForm);
      }

      if (filters.transmission) params.append("transmission", filters.transmission);

      if (filters.features) {
        Object.entries(filters.features).forEach(([key, value]) => {
          if (value) params.append(key, true);
        });
      }

      const url = `/campers?${params.toString()}`;
      console.log("Fetching campers with URL:", url);

      const response = await axios.get(url);

      return {
        items: Array.isArray(response.data.items) ? response.data.items : [],
      };
    } catch (error) {
        if (error.response && error.response.status === 404) {
        return { items: [] };
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  'campers/fetchById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      console.log(response.data)
      return response.data;
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);