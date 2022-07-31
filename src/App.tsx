import React, { useState } from "react";
import { Heading } from "./Heading";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => setCount(count + 1);
  return (
    <div>
      <Heading />
      <Counter
        label="Current"
        count={count}
        onCounterIncrease={incrementCounter}
      />
    </div>
  );
}

export default App;
