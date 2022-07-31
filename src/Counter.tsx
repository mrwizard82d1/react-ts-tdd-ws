import React, { Component } from "react";

export type CounterProps = { label?: string };

const initialState = { count: 0 };
export type CounterState = Readonly<typeof initialState>;

class Counter extends Component<CounterProps, CounterState> {
  readonly state: CounterState = initialState;

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
