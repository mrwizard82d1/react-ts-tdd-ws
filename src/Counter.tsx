import React from "react";

export type CounterProps = {
  label?: string;
  count: number;
  onCounterIncrease: (isShiftPressed: boolean) => void;
};

const Counter = ({
  label = "Count",
  count,
  onCounterIncrease,
}: CounterProps) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onCounterIncrease(event.shiftKey);
  };
  return (
    <div>
      <label htmlFor="counter" style={{ margin: "5px" }}>
        {label}
      </label>
      <button id="counter" role="counter" onClick={handleClick}>
        {count}
      </button>
    </div>
  );
};

export default Counter;
