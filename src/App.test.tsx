import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("renders hello world", () => {
  render(<App />);
  const heading = screen.getByText(/hello react/i);
  expect(heading).toBeInTheDocument();
});

test("renders count component with label", () => {
  render(<App />);
  const counter = screen.getByLabelText("Current");
  expect(counter).toBeInTheDocument();
});

test("renders counter starting at zero", () => {
  render(<App />);
  const counter = screen.getByRole("counter");
  expect(counter.textContent).toEqual("0");
});

test("should increment by one on click", () => {
  render(<App />);
  const counter = screen.getByLabelText("Current");
  expect(counter.textContent).toEqual("0");

  fireEvent.click(counter);
  expect(counter.textContent).toEqual("1");
});

test("should increment by 10 on shift clicke", () => {
  render(<App />);
  const counter = screen.getByLabelText("Current");
  expect(counter.textContent).toEqual("0");

  userEvent.click(counter, { shiftKey: true });
  expect(counter.textContent).toEqual("10");
});
