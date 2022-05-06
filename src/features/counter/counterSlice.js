import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    saveTest: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { saveTest } = counterSlice.actions;

export const selectCount = (state) => state.cars.value;

export default counterSlice.reducer;
