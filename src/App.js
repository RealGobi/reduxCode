import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  return (
    <div className="App">
        <p>Counter { counter }</p>
        <button onClick={()=> dispatch(increment(5))} >+</button>
        <button onClick={() => dispatch(decrement())} >-</button>
        { isLogged ? <p>Logged in</p> : null }
    </div>
  );
}

export default App;
