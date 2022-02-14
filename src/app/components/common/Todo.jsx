import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../features/todoSlice';
import '../../../css/Todo.css';

const Todo = () => {
  const todoList = useSelector(({ todo: { list } }) => list);
  const dispatch = useDispatch();

  const [entry, setEntry] = useState('');

  return useMemo(
    () => (
      <div className="Todo">
        <div className="Todo-Add">
          <input
            type="text"
            placeholder="Enter a description..."
            value={entry}
            onChange={({ target: { value } }) => setEntry(value)}
          />
          <button
            type="button"
            onClick={() => dispatch(addTodo({ text: entry }))}
          >
            Add
          </button>
        </div>
        <ul className="Todo-List">
          {todoList.map(({ id, text }) => (
            <li className="Todo-Item" key={id}>
              {text}
            </li>
          ))}
        </ul>
      </div>
    ),
    [dispatch, entry, todoList]
  );
};

Todo.displayName = 'Todo';

export default Todo;
