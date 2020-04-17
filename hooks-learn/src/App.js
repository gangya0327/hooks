import React from "react";
import "./App.css";
import TestUseState from "./components/TestUseState";
import TestUseState1 from "./components/TestUseState1";
import TestUseReducer from "./components/TestUseReducer";

function App() {
  return (
    <div className="App">
      <TestUseState></TestUseState>
      <TestUseState1 initialState={5}></TestUseState1>
      <TestUseReducer></TestUseReducer>
    </div>
  );
}

export default App;
