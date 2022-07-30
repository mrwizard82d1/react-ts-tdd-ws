import React from "react";

export function Heading() {
  return <h1>{"Hello React"}</h1>;
}

function App() {
  return (
    <div>
      <Heading />
    </div>
  );
}

export default App;
