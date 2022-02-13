import { configureStore } from '@reduxjs/toolkit';
import { counterSlice, todoSlice } from '../features';

export default configureStore({
  reducer: {
    counter: counterSlice,
    todo: todoSlice,
  },
});
