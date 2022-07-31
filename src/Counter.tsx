import React, { Component } from "react";

export type CounterProps = { label?: string };
export type CounterState = { count: number };

class Counter extends Component<CounterProps, CounterState> {
  state: CounterState = { count: 0 };

  render() {
    const { label = "Count" } = this.props;
    const { count } = this.state;

    return (
      <div>
        <label htmlFor="counter">{label}</label>
        <output id="counter" role="counter">
          {count}
        </output>
      </div>
    );
  }
}

export default Counter;
