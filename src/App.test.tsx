import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import {Heading} from "./Heading";

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

test("render heading with an argument", () => {
  render(<Heading name={`World`}/>);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
