import React, { useState } from "react";
import "./css/counter.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  function decrementCounter() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <button className="counterButton" onClick={decrementCounter}>
        -
      </button>
      <span className="counterNumber">{counter}</span>
      <button className="counterButton" onClick={incrementCounter}>
        +
      </button>
    </div>
  );
}
