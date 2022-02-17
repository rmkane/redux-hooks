import { createSlice } from '@reduxjs/toolkit';
import { generateNextId } from '../service/common';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    list: [
      {
        text: 'Use Redux',
        completed: false,
        id: 1,
      },
      {
        text: 'Implement the services',
        completed: false,
        id: 2,
      },
      {
        text: 'Finalize the components',
        completed: false,
        id: 3,
      },
    ],
  },
  reducers: {
    add: (state, action) => {
      state.list.push({
        id: generateNextId(state.list),
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
    markAllCompleted: (state) => {
      state.list.forEach((item) => {
        Object.assign(item, { completed: true });
      });
    },
    markAllIncomplete: (state) => {
      state.list.forEach((item) => {
        Object.assign(item, { completed: false });
      });
    },
    removeAllCompleted: (state) => {
      for (let i = state.list.length - 1; i >= 0; i -= 1) {
        if (state.list[i].completed) {
          state.list.splice(i, 1);
        }
      }
    },
  },
});

const {
  actions: {
    add: addTodo,
    markAllCompleted,
    markAllIncomplete,
    remove: removeTodo,
    removeAllCompleted,
    toggle: toggleTodo,
  },
  reducer,
} = todoSlice;

export {
  addTodo,
  markAllCompleted,
  markAllIncomplete,
  removeAllCompleted,
  removeTodo,
  toggleTodo,
  reducer,
};

export default reducer;
