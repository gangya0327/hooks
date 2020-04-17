import React, { useState, useEffect, useRef, useReducer } from "react";

function countReducer(state, action) {
  if (action === "count_add") {
    return state + 1;
  }
  return state;
}

export default function TestUseState() {
  // useEffect(() => {
  //   document.title = `${count} click`;
  // });
  // useEffect(() => {
  //   setInterval(() => {
  //     setCount(count + 1);
  //     console.log(count);
  //   }, 1000);
  // }, [count]);

  // const [count, setCount] = useState(0);
  // const countRef = useRef(count);
  // useEffect(() => {
  //   setInterval(() => {
  //     countRef.current++;
  //     console.log(countRef.current);
  //     setCount(countRef.current);
  //   }, 1000);
  // }, [countRef]);

  const [count, dispatch] = useReducer(countReducer, 0);

  useEffect(() => {
    setInterval(() => {
      dispatch("count_add");
    }, 1000);
  }, []);
  return (
    <div>
      <p>count: {count}</p>
      {/* <button onClick={() => setCount(count + 1)}>click</button> */}
    </div>
  );
}
