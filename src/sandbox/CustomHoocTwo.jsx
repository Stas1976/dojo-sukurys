import React from "react";
import useCount from "./hooks/useCouner";

const CustomHookTwo = () => {
  const [count, increment, dicrement, reset] = useCount(10, 5);

  return (
    <div>
      <h3>Custom Hook two</h3>
      <h4>{count}</h4>
      <button onClick={increment}>Increment</button>
      <button onClick={dicrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CustomHookTwo;
