import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increase: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    decrease: (state, action) => {
      state.counter = state.counter - action.payload;
    },
    reset: (state) => {
      state.counter = 0;
    },
  },
});

// const counterReducer = (state = initialStateCounter, action) => {
//   switch (action.type) {
//     case "counter/increase":
//       return { ...state, counter: state.counter + action.payload };
//     case "counter/decrease":
//       return { ...state, counter: state.counter - action.payload };
//     case "counter/reset":
//       return { ...state, counter: 0 };
//     default:
//       return state;
//   }
// };

// const increase = (num) => {
//   return {
//     type: "counter/increase",
//     payload: num,
//   };
// };

// const decrease = (num) => {
//   return {
//     type: "counter/decrease",
//     payload: num,
//   };
// };

// const reset = () => {
//   return {
//     type: "counter/reset",
//   };
// };

// export default counterReducer;
// export { increase, decrease, reset };

export default counterSlice.reducer;
export const { increase, decrease, reset } = counterSlice.actions;
