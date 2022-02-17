import React, { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../../features/counterSlice';
import '../../../css/Counter.css';

const Counter = () => {
  const count = useSelector(({ counter }) => counter.value);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(1);

  const onAmountChange = useCallback(({ target: { value } }) => {
    setAmount(value);
  }, []);

  return useMemo(
    () => (
      <div className="Counter">
        <div className="Header">Counter</div>
        <div className="Value">{count}</div>
        <div className="ButtonGroup">
          <button
            type="button"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            type="button"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
        <div className="AddAmount">
          <input
            type="number"
            size="3"
            value={amount}
            onChange={onAmountChange}
          />
          <button
            type="button"
            onClick={() => dispatch(incrementByAmount(+amount))}
          >
            Add
          </button>
        </div>
      </div>
    ),
    [amount, count, dispatch, onAmountChange]
  );
};

Counter.displayName = 'Counter';

export default Counter;
