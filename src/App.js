import './App.css';
import useCounter from './helpers/hooks/useCounter';

function App() {
const [count , increment, decrement, reset]= useCounter(0, 7, 0, 50)

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default App;
