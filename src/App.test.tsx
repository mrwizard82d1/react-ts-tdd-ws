import React from "react";
import { render, screen } from "@testing-library/react";
import App, {Heading} from "./App";

test("renders hello world", () => {
  render(<App />);
  const linkElement = screen.getByText(/hello react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders heading", () => {
  render(<Heading />);
  const linkElement = screen.getByText(/hello react/i);
  expect(linkElement).toBeInTheDocument();
});
