import React from "react";

export type CounterProps = {
  label?: string;
  count: number;
  onCounterIncrease: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const initialState = { count: 0 };

const Counter = ({
  label = "Count",
  count,
  onCounterIncrease,
}: CounterProps) => {
  return (
    <div>
      <label htmlFor="counter" style={{ margin: "5px" }}>
        {label}
      </label>
      <button id="counter" role="counter" onClick={onCounterIncrease}>
        {count}
      </button>
    </div>
  );
};

export default Counter;
