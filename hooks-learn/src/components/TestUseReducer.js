import React, { useReducer } from "react";

function countReducer(state, action) {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    default:
      return state;
  }
}

export default function TestUseReducer() {
  const [count, dispath] = useReducer(countReducer, 0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispath({ type: "increase" })}>+</button>
      <button onClick={() => dispath({ type: "decrease" })}>-</button>
    </div>
  );
}
