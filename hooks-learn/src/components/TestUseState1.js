import React, { useState } from "react";

export default function TestUseState1(props) {
  const [count, setCount] = useState(() => {
    const initialState = props.initialState + 1000;
    return initialState;
  });
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(props.initialState)}>重置</button>
      <button onClick={() => setCount(pCount => pCount - 1)}>-</button>
      <button onClick={() => setCount(pCount => pCount + 1)}>+</button>
    </div>
  );
}
