import { useState } from "react";

const useCounter = (defaultState, initialState, min, max) => {
  const [count, setCount] = useState(defaultState);

  const increment = () => {
    if (count + initialState <= max) {
      setCount(count + initialState);
      return
    } 
    return alert("Достигли max значения");
    
  };

  const decrement = () => {
    if (count- initialState>= min) {
      setCount(count - initialState);
    } else {
      alert("Достигли min значения ");
    }
  };

  const reset = () => {
    setCount(defaultState);
  };

  return [count, increment, decrement, reset];
};
export default useCounter;
