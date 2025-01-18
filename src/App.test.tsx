import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("default test case", () => {
    expect(true).toBe(true);
  });
  test("render header text", () => {
    render(<App />);
    expect(screen.getByText(/Landing Page/)).toBeInTheDocument();
  });
});
