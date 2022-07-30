import React from "react";


export function label() {
    return "Hello React"
}

function App() {
  return (
    <div>
      <h1>{label()}</h1>
    </div>
  );
}

export default App;
