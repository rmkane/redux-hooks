import React from 'react';
import { Counter, Todo } from './common';
import '../../css/App.css';

function App() {
  return (
    <div className="App">
      <header>Redux Hooks Sandbox</header>
      <Counter />
      <Todo />
    </div>
  );
}

App.displayName = 'App';

export default App;
