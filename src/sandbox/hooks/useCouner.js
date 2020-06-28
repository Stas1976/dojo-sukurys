import { useState } from "react";

const useCounter = (initialState = 0, value = 1) => {
  const [count, setCount] = useState(initialState);

  const increment = () => {
    setCount((prev) => prev + value);
  };
  const dicrement = () => {
    setCount((prev) => prev - value);
  };
  const reset = () => {
    setCount(initialState);
  };

  return [count, increment, dicrement, reset];
};

export default useCounter;
