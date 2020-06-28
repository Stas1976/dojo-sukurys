import React from "react";
import useCount from "./hooks/useCouner";

const CustomHookOne = () => {
  const [count, increment, dicrement, reset] = useCount(0, 1);

  return (
    <div>
      <h3>Custom Hook</h3>
      <h4>{count}</h4>
      <button onClick={increment}>Increment</button>
      <button onClick={dicrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CustomHookOne;
