import React, { useCallback, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../features/counter/counterSlice';
import '../../css/Counter.css';

const Counter = () => {
  // eslint-disable-next-line no-unused-vars
  const count = useSelector(({ counter }) => counter.value);
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const [amount, setAmount] = useState(1);

  const onAmountChange = useCallback(({ target: { value } }) => {
    // eslint-disable-next-line no-console
    console.log(value);
    setAmount(value);
  }, []);

  return useMemo(() => (
    <div className="Counter">
      <div className="Value">{count}</div>
      <div>
        <button type="button" aria-label="Increment value" onClick={() => dispatch(increment())}>Increment</button>
        <button type="button" aria-label="Decrement value" onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>
        <input type="number" size="3" value={amount} onChange={onAmountChange} />
        <button type="button" onClick={() => dispatch(incrementByAmount(+amount))}>Add</button>
      </div>
    </div>
  ), [amount, count, dispatch, onAmountChange]);
};

Counter.displayName = 'Counter';

export default Counter;
