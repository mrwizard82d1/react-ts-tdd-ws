import React from "react";
import { render, screen } from "@testing-library/react";
import App, {label} from "./App";

test("renders hello world", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello React/i);
  expect(linkElement).toBeInTheDocument();

  const actual = 1;
  const expected = 1;
  expect(actual).toEqual(expected);
});

test("generates correct label", () => {
  expect(label()).toEqual("Hello React")
})