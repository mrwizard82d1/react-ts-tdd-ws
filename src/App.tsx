import React from "react";


export function label(toGreet: string) {
  return `Hello ${toGreet.toUpperCase()}`;
}

function App() {
  return (
    <div>
      <h1>{label("react")}</h1>
    </div>
  );
}

export default App;
