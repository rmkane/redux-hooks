import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../features/counter/counterSlice';
import '../../css/Counter.css';

const Counter = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { value = 0 } = props;
  const count = useSelector(({ counter }) => counter.value);
  const dispatch = useDispatch();

  return useMemo(() => (
    <div className="Counter">
      <div className="Value">{count}</div>
      <div>
        <button type="button" aria-label="Increment value" onClick={() => dispatch(increment())}>Increment</button>
        <button type="button" aria-label="Decrement value" onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  ), [count]);
};

Counter.displayName = 'Counter';

Counter.propTypes = {
  value: PropTypes.number,
};

export default Counter;
