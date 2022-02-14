import { createSlice } from '@reduxjs/toolkit';

const generateNewId = (list) =>
  list.reduce((maxId, { id }) => Math.max(id, maxId) + 1, -1);

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
    add: (state, { payload: { text } }) => {
      state.list.push({
        id: generateNewId(state.list),
        completed: false,
        text,
      });
    },
  },
});

const {
  actions: { add: addTodo },
  reducer,
} = todoSlice;

export { addTodo, reducer };

export default reducer;
