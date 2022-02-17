import React, { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodo,
  markAllCompleted,
  markAllIncomplete,
  removeAllCompleted,
  removeTodo,
  toggleTodo,
} from '../../features/todoSlice';
import '../../../css/Todo.css';

const Todo = () => {
  const todoList = useSelector(({ todo: { list } }) => list);
  const dispatch = useDispatch();

  const [entry, setEntry] = useState('');

  const handleAdd = useCallback(() => {
    if (entry?.trim()) {
      dispatch(addTodo({ text: entry }));
      setEntry('');
    }
  }, [dispatch, entry]);

  const handleToggle = useCallback(
    ({
      target: {
        dataset: { id },
      },
    }) => {
      dispatch(toggleTodo(+id));
    },
    [dispatch]
  );

  const handleRemove = useCallback(
    ({
      target: {
        dataset: { id },
      },
    }) => {
      dispatch(removeTodo(+id));
    },
    [dispatch]
  );

  const handleEnter = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleAdd();
      }
    },
    [handleAdd]
  );

  const markAllCompletedAllowed = useMemo(
    () => todoList.some(({ completed }) => !completed),
    [todoList]
  );

  const markAllIncompleteAllowed = useMemo(
    () => todoList.some(({ completed }) => completed),
    [todoList]
  );

  const removeAllAllowed = useMemo(
    () => todoList.some(({ completed }) => completed),
    [todoList]
  );

  return useMemo(
    () => (
      <div className="Todo">
        <div className="Header">Todo</div>
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
              <div>{text}</div>
              <button
                className="RemoveButton"
                aria-label="Close"
                data-id={id}
                onClick={handleRemove}
                type="button"
              />
            </li>
          ))}
        </ul>
        <div className="ButtonGroup">
          <button
            type="button"
            disabled={!markAllCompletedAllowed}
            onClick={() => dispatch(markAllCompleted())}
          >
            Mark All
            <br />
            Completed
          </button>
          <button
            type="button"
            disabled={!markAllIncompleteAllowed}
            onClick={() => dispatch(markAllIncomplete())}
          >
            Mark All
            <br />
            Incomplete
          </button>
          <button
            type="button"
            disabled={!removeAllAllowed}
            onClick={() => dispatch(removeAllCompleted())}
          >
            Remove All
            <br />
            Completed
          </button>
        </div>
      </div>
    ),
    [
      dispatch,
      entry,
      handleAdd,
      handleEnter,
      handleRemove,
      handleToggle,
      markAllCompletedAllowed,
      markAllIncompleteAllowed,
      removeAllAllowed,
      todoList,
    ]
  );
};

Todo.displayName = 'Todo';

export default Todo;
