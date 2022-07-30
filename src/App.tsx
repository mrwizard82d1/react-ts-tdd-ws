import React from "react";

export type HeadingProps = { name?: string };

export function Heading({name = "React"}: HeadingProps) {
  return <h1>Hello {name}</h1>;
}

function App() {
  return (
    <div>
      <Heading />
    </div>
  );
}

export default App;
