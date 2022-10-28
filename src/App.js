import logo from './logo.svg';
import './App.css';

import {useSelector, useDispatch} from 'react-redux'
import {decrement, increment} from './global-state/counter/counterSlice';

function App() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      Current Counter - {count}
      <button onClick={ () => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement()) }>Decrement</button>
    </div>
  );
}

export default App;
