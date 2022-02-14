import { createSlice } from '@reduxjs/toolkit';

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
    add: (state, action) => ({
      ...state,
      list: [
        ...state.list,
        {
          id: state.list.reduce((maxId, { id }) => Math.max(id, maxId) + 1, -1),
          completed: false,
          text: action.payload.text,
        },
      ],
    }),
  },
});

const {
  actions: { add: addTodo },
  reducer,
} = todoSlice;

export { addTodo, reducer };

export default reducer;
