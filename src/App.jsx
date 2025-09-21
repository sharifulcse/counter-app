import { useState } from "react";
import "./App.css";

function IncrementDecrementReset() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

function App() {
  return (
    <>
      <IncrementDecrementReset />
    </>
  );
}

export default App;
