import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("should render a label and a counter", () => {
  const handler = jest.fn(); // Essentially, a mock
  render(<Counter count={0} onCounterIncrease={handler} />);
  const label = screen.getByLabelText("Count");
  expect(label).toBeInTheDocument();

  const counter = screen.getByRole("counter");
  expect(counter).toBeInTheDocument();
});

test("should render a counter with a custom label", () => {
    const handler = jest.fn();  // Essentially, a mock
    render(<Counter label={`Current`} count={0} onCounterIncrease={handler}/>);
    const label = screen.getByLabelText("Current");
    expect(label).toBeInTheDocument();

    const counter = screen.getByRole("counter");
    expect(counter).toBeInTheDocument();
});

test("should increment counter on click", () => {
    const handler = jest.fn();  // Essentially, a mock
    render(<Counter count={0} onCounterIncrease={handler}/>);
    const counter = screen.getByRole("counter");

    fireEvent.click(counter);
    expect(handler).toBeCalledTimes(1);
});
