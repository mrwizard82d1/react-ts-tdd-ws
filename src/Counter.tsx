import React, {Component, useState} from "react";

export type CounterProps = { label?: string; count: number };

const initialState = { count: 0 };
export type CounterState = Readonly<typeof initialState>;

const Counter = ({ label = "Count", count } : CounterProps) => {
  return (
      <div>
        <label htmlFor="counter" style={{ margin: "5px" }}>
          {label}
        </label>
        <button id="counter" role="counter"
                // onClick=incrementCounter
        >
          {count}
        </button>
      </div>
  );
}

export default Counter;