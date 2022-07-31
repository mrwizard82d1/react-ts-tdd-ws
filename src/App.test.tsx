import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hello world", () => {
  render(<App />);
  const heading = screen.getByText(/hello react/i);
  expect(heading).toBeInTheDocument();
});

test("renders count component with label", () => {
  render(<App />);
  const counter  = screen.getByLabelText("Current");
  expect(counter).toBeInTheDocument();
});

test("renders counter starting at zero", () => {
  render(<App />);
  const counter = screen.getByRole("counter");
  expect(counter.textContent).toEqual("0");
});
