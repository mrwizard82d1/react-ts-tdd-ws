import React, {Component, useState} from "react";

export type CounterProps = { label?: string; count: number };

const initialState = { count: 0 };
export type CounterState = Readonly<typeof initialState>;

export default Counter = ({ label = "Count", count } : CounterProps) => {
  // // Because React has a type, `MouseEvent`, and generic JavaScript has a type of the same name, I *cannot* destructure
  // // the unadorned type as I do with `Component`. Instead, I reference `React.MouseEvent` explicitly.
  // const incrementCounter = (
  //     event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  // ) => {
  //   // Preparing for the future: Pressing Shift-Click will increment by 10.
  //   const increment = event.shiftKey ? 10 : 1;
  //   return this.setState({ count: this.state.count + increment });
  // };

  return (
      <div>
        <label htmlFor="counter" style={{ margin: "5px" }}>
          {label}
        </label>
        <button id="counter" role="counter">
          {count}
        </button>
      </div>
  );
}

// class Counter extends Component<CounterProps, CounterState> {
//   readonly state: CounterState = initialState;
//
//   // This method is a life cycle method that is invoked whenever the component is mounted in the DOM.
//   componentDidMount() {
//     const { start } = this.props;
//     if (start !== undefined) {
//       this.setState({ count: start });
//     }
//   }
//
//   // Because React has a type, `MouseEvent`, and generic JavaScript has a type of the same name, I *cannot* destructure
//   // the unadorned type as I do with `Component`. Instead, I reference `React.MouseEvent` explicitly.
//   incrementCounter = (
//     event: React.MouseEvent<HTMLButtonElement, MouseEvent>
//   ) => {
//     // Preparing for the future: Pressing Shift-Click will increment by 10.
//     const increment = event.shiftKey ? 10 : 1;
//     return this.setState({ count: this.state.count + increment });
//   };
//
//   render() {
//     const { label = "Count" } = this.props;
//     const { count } = this.state;
//
//     return (
//       <div>
//         <label htmlFor="counter" style={{ margin: "5px" }}>
//           {label}
//         </label>
//         <button id="counter" role="counter" onClick={this.incrementCounter}>
//           {count}
//         </button>
//       </div>
//     );
//   }
// }
