import React, { Component } from "react";

export type CounterProps = { label?: string };

class Counter extends Component<CounterProps> {
  render() {
    const { label = "Count" } = this.props;
    return (
      <div>
        <label htmlFor="counter">{label}</label>
        <input type="number" id="counter" role="counter" />
      </div>
    );
  }
}

export default Counter;
