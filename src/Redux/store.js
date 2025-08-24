import { configureStore } from "@reduxjs/toolkit";
import camperReducer from './camperSlice';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import filtersReducer from './filterSlice'

const persistConfig = {
  key: "root",          
  storage,
  whitelist: ["isFavourite"], 
};

const persistedReducer = persistReducer(persistConfig, camperReducer);


export const store = configureStore({
  reducer:{
    campers : persistedReducer,
    filters: filtersReducer,
  },
  
})

export const persistor = persistStore(store);
