import React, { useState } from "react";
import "./Counter.css";

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h2>Counter App</h2>

      <div className="counter-box">
        <h1>{count}</h1>
      </div>

      <div className="btn-group">
        <button className="btn inc" onClick={() => setCount(count + 1)}>+</button>
        <button className="btn dec" onClick={() => setCount(count - 1)}>−</button>
        <button className="btn reset" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default CounterApp;