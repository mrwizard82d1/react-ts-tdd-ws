import React from "react";

export function Heading({name}: {name: string}) {
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
