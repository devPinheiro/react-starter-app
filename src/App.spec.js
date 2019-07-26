import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("Jest setup", () => {
  it("Should equal false", () => {
    expect(false).toBe(false);
  });
  it("Should equal true", () => {
    expect(true).toBe(true);
  });
});

describe("React Component Testing", () => {
  it("Should render component and pass", () => {
    render(<App />);
  });
});
