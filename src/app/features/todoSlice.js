import { createSlice } from '@reduxjs/toolkit';
import { generateNewId } from '../service/common';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    list: [
      {
        text: 'Use Redux',
        completed: false,
        id: 1,
      },
    ],
  },
  reducers: {
    add: (state, action) => {
      state.list.push({
        id: generateNewId(state.list),
        completed: false,
        text: action.payload.text,
      });
    },
    remove: (state, action) => {
      const foundIndex = state.list.findIndex(
        ({ id }) => id === action.payload
      );
      if (foundIndex > -1) {
        state.list.splice(foundIndex, 1);
      }
    },
    toggle: (state, action) => {
      const found = state.list.find(({ id }) => id === action.payload);
      if (found) {
        found.completed = !found.completed;
      }
    },
  },
});

const {
  actions: { add: addTodo, remove: removeTodo, toggle: toggleTodo },
  reducer,
} = todoSlice;

export { addTodo, removeTodo, toggleTodo, reducer };

export default reducer;
