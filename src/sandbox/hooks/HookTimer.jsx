import React, { useState, useEffect, useRef } from "react";

const HookTimer = () => {
  const [timer, setTimer] = useState(0);
  const ref = useRef();

  useEffect(() => {
    ref.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(ref.current);
    };
  }, []);

  return (
    <div>
      <h3>Hooc Timer - {timer}</h3>
      <button onClick={() => clearInterval(ref.current)}>Clear interval</button>
    </div>
  );
};

export default HookTimer;
