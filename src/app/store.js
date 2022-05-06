import { configureStore } from "@reduxjs/toolkit";
import classicsCarReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    cars: classicsCarReducer,
  },
});
