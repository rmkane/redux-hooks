import { createSlice } from '@reduxjs/toolkit';

const generateNewId = (list) =>
  list.reduce((maxId, { id }) => Math.max(id, maxId), -1) + 1;

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
  },
});

const {
  actions: { add: addTodo, remove: removeTodo },
  reducer,
} = todoSlice;

export { addTodo, removeTodo, reducer };

export default reducer;
