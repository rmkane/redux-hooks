import React, { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../../features/todoSlice';
import '../../../css/Todo.css';

const Todo = () => {
  const todoList = useSelector(({ todo: { list } }) => list);
  const dispatch = useDispatch();

  const [entry, setEntry] = useState('');

  const handleAdd = useCallback(() => {
    dispatch(addTodo({ text: entry }));
  }, [dispatch, entry]);

  const handleToggle = useCallback(
    ({ target }) => {
      dispatch(toggleTodo(+target.dataset.id));
    },
    [dispatch]
  );

  const handleRemove = useCallback(
    ({ target }) => {
      dispatch(removeTodo(+target.dataset.id));
    },
    [dispatch]
  );

  const handleEnter = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleAdd();
        setEntry('');
      }
    },
    [handleAdd]
  );

  return useMemo(
    () => (
      <div className="Todo">
        <div className="Todo-Add">
          <input
            className="Todo-Text"
            type="text"
            placeholder="Enter a description..."
            value={entry}
            onChange={({ target: { value } }) => setEntry(value)}
            onKeyUp={handleEnter}
          />
          <button type="button" onClick={handleAdd}>
            Add
          </button>
        </div>
        <ul className="Todo-List">
          {todoList.map(({ completed, id, text }) => (
            <li className="Todo-Item" key={id}>
              <input
                type="checkbox"
                checked={completed}
                data-id={id}
                onChange={handleToggle}
              />
              <span>{text}</span>
              <div className="ButtonGroup">
                <button
                  className="RemoveButton"
                  aria-label="Close"
                  data-id={id}
                  onClick={handleRemove}
                  type="button"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    ),
    [entry, handleAdd, handleRemove, handleToggle, todoList]
  );
};

Todo.displayName = 'Todo';

export default Todo;
