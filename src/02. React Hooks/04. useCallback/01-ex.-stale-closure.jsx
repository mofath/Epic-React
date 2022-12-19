import React from "react";

export default function App() {
  const [count, increment] = React.useReducer((prev) => prev + 1, 1);

  // 🚨 the linter says we should include count
  // as a dependency, but we don't
  const logCount = React.useCallback(() => {
    log(count);
  }, [count]);

  return (
    <div style={{ color: "black " }}>
      <div>count is {count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={logCount}>log</button>
      <div id="result2">log:</div>
    </div>
  );
}

// just a way to make logging work in this interactive example
function log(value) {
  document.getElementById("result2").innerHTML = "log: " + String(value);
}
