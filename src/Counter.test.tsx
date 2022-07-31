import React from "react";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import counter from "./Counter";

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
})
