import React from "react";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("should render a label and a counter", () => {
  render(<Counter />);
  const label = screen.getByLabelText("Count");
  expect(label).toBeInTheDocument();

  const counter = screen.getByRole("counter");
  expect(counter).toBeInTheDocument();
});
