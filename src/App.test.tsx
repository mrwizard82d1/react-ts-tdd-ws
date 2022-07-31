import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hello world", () => {
  render(<App />);
  const linkElement = screen.getByText(/hello react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders count component with label", () => {
  render(<App />);
  const linkElement = screen.getByLabelText("Current");
  expect(linkElement).toBeInTheDocument();
});
