import React, { useMemo } from 'react';
import '../../css/App.css';
import Counter from './Counter';

const App = () => useMemo(() => (
  <div className="App">
    <header>Counter</header>
    <Counter />
  </div>
), []);

App.displayName = 'App';

export default App;
