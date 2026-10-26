import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  // Iske ander 3 chiz aati hain.
  // name, state - initialState: {}, reducers: {}

  // name -> Chef / naming the initial state
  name: "counter",

  // initialState - state for holding data.
  initialState: {
    count: 0,
  },

  // action - for updating the state.
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

console.log("Count:- ", counterSlice);

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

// Steps for slice
// 1) createSlice, 2) name, initialState, reducers. 3) export :- 2 export karege 1. name of the higher order function :- counterSlice.actioins, 2. export default reducer -> export default counterSlice.reducer :- import - Store.jsx :- import counterReducer from '../features/counterSlice' -> {counter: counterReducer}

/* Above is the method for creating reducer/slice */
