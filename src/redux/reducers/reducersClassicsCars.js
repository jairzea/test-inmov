import { configureStore } from "@reduxjs/toolkit";
import classicsCarReducer from "../actions/actionsClassicsCars";

export const storeClassicCars = configureStore({
  reducer: {
    cars: classicsCarReducer,
  },
});
