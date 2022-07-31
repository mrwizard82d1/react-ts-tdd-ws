import React, { Component } from "react";

export type CounterProps = { label?: string; start?: number };

const initialState = { count: 0 };
export type CounterState = Readonly<typeof initialState>;

class Counter extends Component<CounterProps, CounterState> {
  readonly state: CounterState = initialState;

  // This method is a life cycle method that is invoked whenever the component is mounted in the DOM.
  componentDidMount() {
    const { start } = this.props;
    if (start !== undefined) {
      this.setState({ count: start });
    }
  }

  // Because React has a type, `MouseEvent`, and generic JavaScript has a type of the same name, I *cannot* destructure
  // the unadorned type as I do with `Component`. Instead, I reference `React.MouseEvent` explicitly.
  incrementCounter = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    return this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { label = "Count" } = this.props;
    const { count } = this.state;

    return (
      <div>
        <label htmlFor="counter" style={{ margin: "5px" }}>
          {label}
        </label>
        <button id="counter" role="counter" onClick={this.incrementCounter}>
          {count}
        </button>
      </div>
    );
  }
}

export default Counter;
