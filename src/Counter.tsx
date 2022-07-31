import React, { Component } from "react";

export type CounterProps = { label?: string, start?: number };

const initialState = { count: 0 };
export type CounterState = Readonly<typeof initialState>;

class Counter extends Component<CounterProps, CounterState> {
  readonly state: CounterState = initialState;

  // This method is a life cycle method that is invoked whenever the component is mounted in the DOM.
  componentDidMount() {
      const { start } = this.props;
      if (start !== undefined) {
          this.setState({ ...initialState, count:start });
      }
  }

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
