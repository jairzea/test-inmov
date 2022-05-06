import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    saveClassicCar: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { saveClassicCar } = counterSlice.actions;

export default counterSlice.reducer;
