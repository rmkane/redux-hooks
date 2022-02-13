/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, { payload }) => {
      state.value += payload;
    },
  },
});

const { actions: { increment, decrement, incrementByAmount }, reducer } = counterSlice;

export {
  counterSlice, increment, decrement, incrementByAmount,
};

export default reducer;
