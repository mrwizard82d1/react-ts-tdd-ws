import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

test("should render a label and a counter", () => {
  render(<Counter />);
  const label = screen.getByLabelText("Count");
  expect(label).toBeInTheDocument();

  const counter = screen.getByRole("counter");
  expect(counter).toBeInTheDocument();
});

test("should render a counter with a custom label", () => {
  render(<Counter label={`Current`} />);
  const label = screen.getByLabelText("Current");
  expect(label).toBeInTheDocument();

  const counter = screen.getByRole("counter");
  expect(counter).toBeInTheDocument();
});

test("should start counting at zero (0)", () => {
  render(<Counter />);
  const counterValue = screen.getByRole("counter");

  expect(counterValue).toHaveTextContent("0");
});

test("should start counting at a specified value", () => {
  render(<Counter start={10} />);
  const counter = screen.getByRole("counter");

  expect(counter).toHaveTextContent("10");
});

test("should increment counter on click", () => {
  render(<Counter />);
  const counter = screen.getByRole("counter");

  expect(counter).toHaveTextContent(/^0$/);
  fireEvent.click(counter);
  expect(counter).toHaveTextContent(/^1$/);
});

test("should increment counter by 10 on shift click", () => {
  render(<Counter />);
  const counter = screen.getByRole("counter");

  expect(counter).toHaveTextContent(/^0$/);
  userEvent.click(counter, { shiftKey: true });
  expect(counter).toHaveTextContent(/^10$/);
});
