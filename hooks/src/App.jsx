import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => (prev < 10 ? prev + 1 : prev));
  }

  function decrement() {
    setCount((prev) => (prev > 0 ? prev - 1 : prev));
  }

  return (
    <>
      <h1>Counter App</h1>

      <button onClick={increment} disabled={count === 10}>
        +
      </button>
      <h3>Count : {count} </h3>
      <button onClick={decrement} disabled={count === 0}>
        -
      </button>
    </>
  );
};

export default App;
