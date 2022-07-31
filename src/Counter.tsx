import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <label htmlFor="counter">Count</label>
        <input type="number" id="counter" role="counter" />
      </div>
    );
  }
}

export default Counter;
